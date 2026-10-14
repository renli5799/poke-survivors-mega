# PokéSurvivor MEGA · 繁體中文延伸修改版

> **這是延伸修改版，不是原作。**
>
> 原作：[PokéSurvivor](https://github.com/JPTER78/pokesurvivor)，作者 **JPTER78**，
> 以 MIT 授權釋出（[pokesurvivor.com](https://pokesurvivor.com)）。
> 本版本以原作為基礎，加入繁體中文與下列新玩法。遊戲的原始設計、程式架構與
> 大部分內容都來自原作者，感謝原作者的開源。

寶可夢版的「彈幕生存」遊戲（類似 Survivor.io、Megabonk），使用《寶可夢不可思議的
迷宮》風格的像素圖，具備 Roguelike 元素、**9 個世代共 966 隻寶可夢**、異色寶可夢與
各地區的扭蛋卡池。音樂與音效為原作者為本遊戲製作。

純 HTML + CSS + JavaScript（Canvas 2D），不需要安裝任何套件。

## 本修改版新增的內容

| 項目 | 說明 |
|---|---|
| **繁體中文** | 全遊戲介面、寶可夢名稱、招式、成就與更新公告皆可切換為繁體中文（設定 > 畫面 > 語言）。中文翻譯參考 [Greasy Fork 上的繁體中文補丁](https://greasyfork.org/scripts/599869)（MIT）。 |
| **MEGA 進化** | 擁有官方 MEGA 進化的寶可夢（以及可原始回歸的蓋歐卡、固拉多）可在戰鬥中按 `F`、空白鍵或 MEGA 按鈕限時變身：傷害 +50%、速度 +15%、受到傷害 -20%。有 SpriteCollab 圖的 41 種會換成 MEGA 外觀，其餘以放大加彩虹光環呈現。 |
| **升級五選一** | 升級時從原本的三選一改為五選一（數字鍵 `1`～`5`）。 |
| **扭蛋跳過動畫** | 拉霸機轉動時可按「跳過」直接看結果。 |

MEGA 的持續時間、冷卻與加成數值都在 `js/systems/mega.js` 最上方，可自行調整。

## 怎麼玩

用瀏覽器開啟 `index.html`（建議透過網頁伺服器開啟，例如 `python3 -m http.server`）。
建立帳號或以訪客身分進入，完成性格測驗後就能出發。

| 按鍵 | 動作 |
|---|---|
| `W` `A` `S` `D` / 方向鍵 | 移動 |
| `1` `2` `3` `4` | 切換目前使用的招式 |
| `Q` / `E` | 輪流切換招式 |
| `F` / 空白鍵 | MEGA 進化（可用時按鈕會發出彩虹光） |
| `1`～`5` | 升級時選擇卡片 |
| `Esc` / `P` | 暫停 |

**手機或平板**（請橫放）：手指放在畫面任意位置拖曳即可移動（搖桿會出現在手指下），
點下方的招式圖示切換招式，點 MEGA 按鈕進化，右上角按鈕暫停。可以用「加入主畫面」
安裝成 App。**設定**裡有音效、畫質（含自動模式）、傷害數字、減少畫面震動、FPS 顯示與帳號。

寶可夢會自動用目前的招式攻擊（或用「**羈絆**」同時施放多招：每打倒一隻傳說寶可夢就能
把招式融合到同一格，最多 4 招）。岩石、寶箱和草叢可以打破；牆壁和樹木會擋下敵人的
攻擊；水會減速、岩漿會燙傷（敵人也一樣）。

地圖上有**力量祭壇**、可回血的**泉水**、要待在旁邊幾秒才能打開的**上鎖寶箱**，以及
也會傷到敵人的**陷阱**。偶爾會出現**裂縫**：進去就會在獨立的競技場挑戰**傳說寶可夢**。

遊戲有**屬性相剋**，也會不定期出現**天氣**（晴天、下雨、沙暴、下雪、起霧），強化某些
屬性、削弱另一些。

每天和每週都有**任務**可以換抽獎券與金幣；**成就**會給獎章與稱號；**個人資料**會展示
你最愛的 3 隻寶可夢、紀錄與獎章。戰鬥中可以撿到**道具**（吃剩的東西、講究頭帶……），
招式升到最高等級還能**進化**。敵人各有個性：會回血、加護盾、呼叫同伴，或先在地上
預告再攻擊。

**強化**是每隻寶可夢各自獨立的。**扭蛋**使用玩遊戲獲得的**抽獎券**（一般券來自部分
寶可夢，十連券來自頭目與傳說寶可夢），以像素風拉霸機抽出。

每隻敵人都有 1/4096 的機率是**異色**：會發光，畫面邊緣會有箭頭指出位置，打倒就能
收服。扭蛋每 100 抽約出 1 隻異色。收藏裡可以選擇夥伴的一般或異色版本。

音樂會在第一次點擊後開始播放（瀏覽器不允許事先播放聲音）。音量與靜音在右上角的
喇叭按鈕，或暫停畫面裡。

## 雲端存檔與發佈

- **資料庫（Firebase）**：可用名稱＋密碼或 Google 帳號登入，存檔可以在任何電腦接著玩。
  設定步驟見 [docs/FIREBASE.md](docs/FIREBASE.md)（西班牙文）。未設定時只會存在瀏覽器裡。
- **好友連線（最多 4 人）與排行榜**：使用雲端帳號時，選單有**好友**（用暱稱加好友、
  邀請進房間）與**排行榜**（存活時間：單人或多人，從今日到歷史，好友、各寶可夢）。
- **用 GitHub Pages 免費發佈**：見 [docs/PUBLICAR.md](docs/PUBLICAR.md)（西班牙文）。
- 同時在兩台電腦或離線遊玩時，存檔會**合併**：收藏取聯集（不會弄丟寶可夢或異色）、
  強化與統計取最大值，金幣與夥伴則採用最新的版本。

> **注意**：`js/core/firebase-config.js`、`CNAME` 與 `cloudflare/` 裡的設定是原作者的
> Firebase 專案、網域與伺服器。要架設自己的版本，請換成你自己的設定（或把 Firebase
> 設定改成 `null` 以純本機模式遊玩），並移除 `CNAME`。

## 修改與建置

只修改 `dev.html` 與 `js/` 裡的原始檔，**不要直接改 `index.html`**（它是自動產生的）。
改完後執行：

```
node tools/build.js && node tools/export_data.js && python tools/make_seo_pages.py
```

`build.js` 會產生 `index.html`、`js/app.min.js` 與 `version.json`；玩家的遊戲會依
`version.json` 自動更新到新版本。

## 檔案結構

```
dev.html                畫面與載入順序（原始檔；index.html 由它產生）
css/style.css           不可思議的迷宮風格介面
assets/pokemon/{dex}/   PMD 精靈圖（Idle、Walk、Attack、Shoot、Charge、Hurt、Faint）
assets/pokemon/{dex}/s/ 同上的異色版本
assets/pokemon/{dex}-mega/  MEGA 進化的精靈圖（本修改版新增）
assets/fonts/           Pixelify Sans（OFL）
js/
  net/      social（暱稱、好友、房間）、net（WebRTC＋中繼）、coop（多人）、ranking
  core/     util、i18n（多語系）、db（存檔）、audio（合成器＋音效）、input、sprites、camera
  data/     pokedex*、sprites-meta*、megas*、moves、enemies、upgrades、music、
            lang-en（英文）、lang-zh（繁體中文，本修改版新增）、changelog
  world/    tiles（程式繪製的像素圖）、world（地形、物件、碰撞）
  entities/ player、enemy、projectile、pickup、fx
  systems/  combat、spawner、levelup、gacha、mega（本修改版新增）……
  ui/       icons、ui、hud、menu、gacha-ui、slots、run-ui……
  game.js   流程與主迴圈
tools/      重新產生標示 * 檔案的腳本
```

`*` = 自動產生。重新產生的方式（需要 Python 3 + Pillow，以及網路）：

```
python tools/fetch_sprites.py    # 一般與異色精靈圖 + js/data/sprites-meta.js
python tools/fetch_megas.py      # MEGA 精靈圖 + js/data/megas.js（本修改版新增）
python tools/fetch_pokedex.py    # js/data/pokedex.js
python tools/fetch_credits.py    # CREDITS.md
```

## 授權與致謝

- **程式碼**：MIT 授權，原作著作權屬於 JPTER78，修改部分同樣以 MIT 釋出，詳見 [LICENSE](LICENSE)。
- **精靈圖**：來自 [SpriteCollab](https://github.com/PMDCollab/SpriteCollab)，採
  **CC BY-NC 4.0** 授權：僅限**非商業**用途，且須標註作者。畫師名單見
  [`CREDITS.md`](CREDITS.md)（含 MEGA 精靈圖的畫師）。
- **字型**：Pixelify Sans，SIL Open Font License 1.1。
- **寶可夢資料**：[PokeAPI](https://pokeapi.co/)。
- 寶可夢及相關名稱、角色為 Nintendo、Creatures Inc.、GAME FREAK 與 The Pokémon Company
  的商標與財產。本專案為非營利的同人作品，與上述公司無關，也未獲其授權或認可。

> **加密貨幣聲明（沿用原作者聲明）**：PokéSurvivor **沒有任何官方加密貨幣、代幣或 NFT**。
> 任何使用本遊戲名稱的代幣都是第三方所為，與原作者及本修改版無關，也不構成任何投資建議。
> 遊戲是免費的，並將維持免費。
