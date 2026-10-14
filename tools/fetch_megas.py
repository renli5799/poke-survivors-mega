#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Descarga los sprites de las megaevoluciones (y las regresiones primigenias) de
SpriteCollab a assets/pokemon/{dex}-mega/ y genera js/data/megas.js.

    python tools/fetch_megas.py

Usa las mismas funciones que tools/fetch_sprites.py. Las formas que SpriteCollab
aún no tiene dibujadas (Mega-Venusaur, Mega-Garchomp...) se quedan sin sprite
propio: en el juego megaevolucionan con su sprite normal, más grande y con aura.

Formas en SpriteCollab: sprite/{dex}/{forma}/  y su shiny en  {forma}/0001/
"""
import io
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch_sprites import RAW, BASE, ROOT, OUT_ASSETS, REQUIRED, fetch, parse_animdata, download_set  # noqa: E402

OUT_JS = os.path.join(ROOT, 'js', 'data', 'megas.js')

# (dex, forma en SpriteCollab, sufijo del nombre, primigenio)
# Una forma por Pokémon: si tiene dos (X/Y, Z), la que tiene sprite.
MEGAS = [
    (3, '0001', '', 0), (6, '0001', 'X', 0), (9, '0001', '', 0), (15, '0001', '', 0),
    (18, '0001', '', 0), (26, '0002', 'X', 0), (36, '0001', '', 0), (65, '0001', '', 0),
    (71, '0001', '', 0), (80, '0002', '', 0), (94, '0001', '', 0), (115, '0001', '', 0),
    (121, '0001', '', 0), (127, '0001', '', 0), (130, '0001', '', 0), (142, '0001', '', 0),
    (149, '0001', '', 0), (150, '0002', 'Y', 0), (154, '0001', '', 0), (160, '0001', '', 0),
    (181, '0001', '', 0), (208, '0001', '', 0), (212, '0001', '', 0), (214, '0001', '', 0),
    (227, '0001', '', 0), (229, '0001', '', 0), (248, '0001', '', 0), (254, '0001', '', 0),
    (257, '0001', '', 0), (260, '0001', '', 0), (282, '0001', '', 0), (302, '0001', '', 0),
    (303, '0001', '', 0), (306, '0001', '', 0), (308, '0001', '', 0), (310, '0001', '', 0),
    (319, '0001', '', 0), (323, '0001', '', 0), (334, '0001', '', 0), (354, '0001', '', 0),
    (358, '0001', '', 0), (359, '0001', '', 0), (362, '0001', '', 0), (373, '0001', '', 0),
    (376, '0001', '', 0), (380, '0001', '', 0), (381, '0001', '', 0), (382, '0001', '', 1),
    (383, '0001', '', 1), (384, '0001', '', 0), (398, '0001', '', 0), (428, '0001', '', 0),
    (445, '0001', '', 0), (448, '0001', '', 0), (460, '0001', '', 0), (475, '0001', '', 0),
    (478, '0001', '', 0), (485, '0001', '', 0), (491, '0002', '', 0), (500, '0001', '', 0),
    (530, '0001', '', 0), (531, '0001', '', 0), (545, '0001', '', 0), (560, '0001', '', 0),
    (604, '0001', '', 0), (609, '0001', '', 0), (623, '0001', '', 0), (652, '0001', '', 0),
    (655, '0001', '', 0), (658, '0002', '', 0), (668, '0001', '', 0), (670, '0006', '', 0),
    (678, '0001', '', 0), (687, '0001', '', 0), (689, '0001', '', 0), (691, '0001', '', 0),
    (701, '0001', '', 0), (718, '0005', '', 0), (719, '0001', '', 0), (740, '0001', '', 0),
    (768, '0001', '', 0), (780, '0001', '', 0), (801, '0002', '', 0), (807, '0001', '', 0),
    (870, '0001', '', 0), (952, '0001', '', 0), (970, '0001', '', 0), (978, '0003', '', 0),
    (998, '0001', '', 0),
]


def do_mega(job, tracker):
    dex, form, _, _ = job
    tag = f'{dex:04d}'
    f = tracker.get(tag, {}).get('subgroups', {}).get(form, {})
    if not REQUIRED <= set(f.get('sprite_files', {})):
        return None
    xml = fetch(f'{BASE}/{tag}/{form}/AnimData.xml')
    if not xml:
        return None
    key = f'{dex}-mega'
    out_dir = os.path.join(OUT_ASSETS, key)
    anims, shadow = parse_animdata(xml.decode('utf-8', 'replace'))
    normal = download_set(f'{BASE}/{tag}/{form}', out_dir, anims)
    if not REQUIRED <= set(normal):
        return None
    meta = {'s': shadow, 'a': normal}
    s = f.get('subgroups', {}).get('0001', {})
    if {'Idle', 'Walk'} <= set(s.get('sprite_files', {})):
        sxml = fetch(f'{BASE}/{tag}/{form}/0001/AnimData.xml')
        sanims = parse_animdata(sxml.decode('utf-8', 'replace'))[0] if sxml else anims
        shiny = download_set(f'{BASE}/{tag}/{form}/0001', os.path.join(out_dir, 's'), sanims, normal)
        if 'Idle' in shiny and 'Walk' in shiny:
            meta['sh'] = 1
            diff = {k: v for k, v in shiny.items() if normal.get(k) != v}
            if diff:
                meta['sa'] = diff
            missing_s = [k for k in normal if k not in shiny]
            if missing_s:
                meta['sm'] = missing_s
    return meta


def main():
    print('Leyendo tracker.json de SpriteCollab...')
    tracker = json.loads(fetch(RAW + '/tracker.json').decode('utf-8'))
    metas = {}
    for job in MEGAS:
        meta = do_mega(job, tracker)
        print(f'  {job[0]:>4} {"sprite" if meta else "sin sprite (aura)"}', flush=True)
        if meta:
            metas[job[0]] = meta

    lines = [
        '/* ============ megas.js — GENERADO por tools/fetch_megas.py, no editar a mano ============',
        ' * Megaevoluciones (y regresiones primigenias) oficiales, una por Pokémon.',
        ' *   f   sufijo del nombre (X / Y) · p=1 primigenio',
        ' *   art=1 si SpriteCollab la tiene dibujada: sus hojas van en assets/pokemon/{dex}-mega/',
        ' *         y su geometría se añade a G.SPRITE_META con la clave "{dex}-mega".',
        ' *         Sin art, se megaevoluciona con el sprite normal (más grande y con aura).',
        ' */',
        'G.MEGAS = {',
    ]
    for dex, _, suf, primal in MEGAS:
        e = {}
        if suf:
            e['f'] = suf
        if primal:
            e['p'] = 1
        if dex in metas:
            e['art'] = 1
        lines.append(f'  {dex}: {json.dumps(e, separators=(",", ":"))},')
    lines += ['};', '', 'Object.assign(G.SPRITE_META, {']
    for dex in sorted(metas):
        lines.append(f'  "{dex}-mega": {json.dumps(metas[dex], separators=(",", ":"))},')
    lines += ['});', '']
    with io.open(OUT_JS, 'w', encoding='utf-8', newline='\n') as f:
        f.write('\n'.join(lines))
    print(f'\n{len(MEGAS)} megas, {len(metas)} con sprite ({sum(1 for m in metas.values() if m.get("sh"))} con shiny)')


if __name__ == '__main__':
    main()
