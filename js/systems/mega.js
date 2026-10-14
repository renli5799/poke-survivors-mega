/* ============ mega.js — megaevolución durante la run ============
 * Sólo los Pokémon con megaevolución oficial (data/megas.js, una forma cada uno).
 * Se activa con F o Espacio (o tocando el botón MEGA del HUD): dura DUR
 * segundos y luego hay que esperar CD. La primera, a los FIRST segundos de run.
 * Mientras dura: más daño, más velocidad y menos daño recibido.
 * El estado lo lleva cada Player (megaT, megaCd); aquí sólo los datos.
 */
G.Mega = (() => {
  const DUR = 60, CD = 30, FIRST = 10;
  const BOOST = { atk: 1.5, spd: 1.15, def: 0.2 };

  /** Forma mega de ese Pokémon → { f, p, spr } (spr: clave de sprite, o null si no tiene dibujo), o null. */
  function formOf(dex) {
    const e = G.MEGAS && G.MEGAS[dex];
    if (!e) return null;
    return { f: e.f || '', p: !!e.p, spr: e.art && G.SPRITE_META[dex + '-mega'] ? dex + '-mega' : null };
  }

  function nameOf(dex) {
    const e = formOf(dex), n = (G.DEX_BY[dex] || {}).name || '';
    if (!e) return n;
    return e.p ? n + ' Primigenio' : 'Mega-' + n + (e.f ? ' ' + e.f : '');
  }

  return { DUR, CD, FIRST, BOOST, formOf, nameOf };
})();
