/* ============ changelog.js — novedades del juego ============
 * Lo que ve la gente en el botón "Novedades" de la barra de arriba: cambios
 * de juego y fallos arreglados (nada de servidores ni bases de datos).
 * La fecha más nueva, arriba. En cada fecha, por apartados:
 *   new  lo nuevo · chg  cambios y ajustes · fix  fallos arreglados
 * Cada línea en español, en inglés y en chino tradicional (si falta el chino, sale en inglés).
 */
G.CHANGELOG = [
  { d: '2026-10-14', title: ['Recupera tu cuenta con Gmail', 'Recover your account with Gmail', '用 Gmail 找回帳號'], new: [
    ['Si juegas con nombre y contraseña, puedes vincular tu Gmail: si un día olvidas la contraseña, entras con Google y es tu misma cuenta. Te lo ofrecemos al entrar.',
     'If you play with a name and password, you can link your Gmail: if you ever forget your password, sign in with Google and it is the same account. We offer it when you sign in.',
     '若你使用名稱與密碼遊玩，現在可以綁定 Gmail：哪天忘記密碼時，用 Google 登入就是同一個帳號。登入時會詢問你。'],
    ['El juego, también en chino tradicional (Ajustes > Gráficos > Idioma).',
     'The game is now also in Traditional Chinese (Settings > Graphics > Language).',
     '遊戲新增繁體中文（設定 > 畫面 > 語言）。'],
    ['Botón "Saltar" en el gacha: te enseña directamente lo que te ha tocado, sin esperar a la tragaperras.',
     '"Skip" button in the gacha: shows your results right away, without waiting for the slot machine.',
     '扭蛋新增「跳過」按鈕：不用等拉霸機轉完，直接顯示抽到的結果。'],
    ['Megaevolución: los Pokémon con megaevolución oficial (y Kyogre y Groudon, su regresión primigenia) pueden megaevolucionar en partida con F, Espacio o el botón MEGA. Dura 30 segundos (+50% de daño, +15% de velocidad y 20% menos daño recibido) y luego hay que esperar 90. La primera, al minuto de partida.',
     'Mega Evolution: Pokémon with an official Mega Evolution (plus Kyogre and Groudon, with their Primal Reversion) can Mega Evolve in battle with F, Space or the MEGA button. It lasts 30 seconds (+50% damage, +15% speed and 20% less damage taken), then recharges for 90. The first one is ready one minute into the run.',
     '超級進化：擁有官方超級進化的寶可夢（以及可原始回歸的蓋歐卡與固拉多）在戰鬥中可用 F、空白鍵或 MEGA 按鈕超級進化。持續 30 秒（傷害 +50%、速度 +15%、受到傷害 -20%），之後需冷卻 90 秒。開局一分鐘後即可使用第一次。']
  ], chg: [
    ['Al subir de nivel eliges entre 5 cartas en vez de 3 (teclas 1 a 5).',
     'When you level up you now choose from 5 cards instead of 3 (keys 1 to 5).',
     '升級時改為五選一（原本三選一），可用數字鍵 1～5 選擇。']
  ] },
  { d: '2026-10-13', title: ['La Sentencia de Arceus', 'The Judgment of Arceus', '阿爾宙斯的審判'], new: [
    ['La Sentencia de Arceus: al llegar al minuto 30, Arceus baja del cielo y te lleva a las Ruinas del Juicio. Es invencible, te persigue cada vez más deprisa y lanza pilares de luz, rayos y ondas; si te toca, te quita casi media vida. Cada 5 segundos acude un legendario con el doble de vida y de daño que el anterior. ¿Cuánto aguantarás?',
     'The Judgment of Arceus: at minute 30, Arceus descends from the sky and takes you to the Ruins of Judgment. It is invincible, chases you faster and faster and casts pillars of light, beams and shockwaves; if it touches you, you lose almost half your HP. Every 5 seconds a legendary joins, each with twice the HP and damage of the previous one. How long can you last?',
     '阿爾宙斯的審判：到達第 30 分鐘時，阿爾宙斯會從天而降，將你帶往審判遺跡。牠無法被擊敗，追趕速度會越來越快，還會施放光柱、光束與衝擊波；一旦碰到牠，就會損失將近一半體力。每隔 5 秒會有一隻傳說寶可夢加入，體力與傷害都是前一隻的兩倍。你能撐多久？'],
    ['Tres logros nuevos: La Sentencia (llega al minuto 30), Ante el Creador (aguanta 1 minuto ante Arceus) y Desafío divino (derrota a 3 legendarios ante Arceus en una partida).',
     'Three new achievements: The Judgment (reach minute 30), Before the Creator (survive 1 minute against Arceus) and Divine challenge (defeat 3 legendaries against Arceus in a single run).',
     '新增三項成就：「審判」（抵達第 30 分鐘）、「直面創世者」（面對阿爾宙斯存活 1 分鐘）及「神之試煉」（在同一局面對阿爾宙斯時擊敗 3 隻傳說寶可夢）。'],
    ['Música nueva para la pelea contra Arceus.', 'New music for the fight against Arceus.', '新增對抗阿爾宙斯時的戰鬥音樂。'],
    ['Botón para reportar marcas sospechosas en el ranking (la banderita de cada fila).',
     'A button to report suspicious records on the leaderboard (the little flag on each row).',
     '排行榜新增可疑紀錄檢舉按鈕（每列的小旗子）。']
  ], chg: [
    ['El ranking histórico empieza de cero: ahora que las partidas acaban ante Arceus, las marcas de antes ya no se podrían alcanzar. Las tablas de hoy, de la semana y del mes siguen igual.',
     'The all-time leaderboard starts from scratch: now that runs end against Arceus, older records could no longer be reached. The daily, weekly and monthly boards are unchanged.',
     '歷史排行榜重新開始：現在戰局會在對抗阿爾宙斯的階段結束，舊紀錄已無法再達成，因此重置歷史榜。每日、每週與每月排行榜保持不變。'],
    ['Se quita el tiempo extra del minuto 60 (ya no se llega hasta ahí).',
     'Overtime from minute 60 is removed (runs no longer get that far).',
     '移除第 60 分鐘起的延長戰局機制，因為現在已無法存活到那個階段。'],
    ['Desde el minuto 28 ya no se abren grietas, para que la Sentencia no te pille dentro de una.',
     'Rifts no longer open from minute 28 on, so the Judgment does not catch you inside one.',
     '從第 28 分鐘起不再開啟裂縫，避免審判開始時玩家仍在裂縫中。'],
    ['Ranking protegido contra trampas: el servidor comprueba que cada marca se ha jugado de verdad. Nunca se pierde nada de lo que ganas jugando.',
     'Leaderboard protected against cheating: the server checks that every record was really played. You never lose anything you earn by playing.',
     '排行榜新增反作弊保護：伺服器會確認每筆成績都來自實際遊玩，但不會因此扣除你遊玩獲得的獎勵。'],
    ['Se han quitado del ranking las marcas de más de 35 minutos: con la Sentencia de Arceus ya no son posibles.',
     'Records over 35 minutes have been removed from the leaderboard: with the Judgment of Arceus they are no longer possible.',
     '已移除排行榜中超過 35 分鐘的紀錄；在阿爾宙斯的審判機制下，這些成績已不可能達成。']
  ], fix: [
    ['Las tiradas del gacha, los Pokémon nuevos y los premios se guardan en la nube al momento. Si abriste el juego en otro aparato o navegador y te faltaba algo, vuelve a abrirlo donde lo conseguiste: se recupera solo.',
     'Gacha pulls, new Pokémon and rewards are saved to the cloud right away. If you opened the game on another device or browser and something was missing, open it again where you got it: it comes back on its own.',
     '扭蛋抽獎、新寶可夢與獎勵會立即儲存至雲端。若你在其他裝置或瀏覽器開啟遊戲時發現少了東西，請回到當初取得的地方再開啟一次，就會自動恢復。']
  ] },
  { d: '2026-10-12', title: ['Tiempo extra y grietas con menos azar', 'Overtime and less random rifts', '延長戰局與裂縫出現機制調整'], new: [
    ['Tiempo extra: desde el minuto 60 los Pokémon salvajes se vuelven cada vez más fuertes (más vida y más daño), y cada vez más deprisa. Antes, con las mejoras al máximo, algunas partidas no acababan nunca; ahora las mejores rondarán la hora y media.',
     'Overtime: from minute 60 on, wild Pokémon keep getting stronger (more HP and more damage), faster and faster. Before, with maxed upgrades, some runs never ended; now the best ones will last about an hour and a half.',
     '延長戰局：從第 60 分鐘起，野生寶可夢的體力與傷害會不斷提高，成長速度也會越來越快。先前強化全滿後，有些戰局幾乎不會結束；調整後，表現最好的戰局預計約可持續一個半小時。'],
    ['El juego se actualiza solo cuando sale una versión nueva: si estás en el menú, a los 5 segundos; si estás jugando, al acabar la partida (sin perder nada).',
     'The game now updates itself when a new version is out: within 5 seconds if you are in the menu, or after your run if you are playing (without losing anything).',
     '推出新版本時，遊戲會自動更新：停留在選單時會在 5 秒內更新；正在遊玩時則等本局結束後更新，不會遺失進度與獎勵。'],
    ['Botón de Novedades (esta ventana) con todos los cambios del juego.',
     'A "What\'s new" button (this window) with every change to the game.',
     '新增「更新公告」按鈕（就是這個視窗），可查看遊戲的各項更新。'],
    ['Números más fáciles de leer: el 2, el 5 y el 8 ya no se confunden.',
     'Easier to read numbers: 2, 5 and 8 no longer look alike.',
     '改善數字字型，讓 2、5、8 更容易分辨。'],
    ['Elige la versión normal o shiny de tu compañero desde el menú principal, debajo de él.',
     'Pick the normal or shiny version of your partner right from the main menu, under it.',
     '可直接在主選單的夥伴下方，切換一般或異色外觀。'],
    ['Mejoras nuevas para cada Pokémon: Golpe Crítico (+3 % de críticos por nivel, que hacen x1,5 de daño), Cambio de cartas (+1 cambio de las cartas de nivel por run) y Veto (bloquea movimientos para que no te salgan en las cartas; se eligen en Mejoras).',
     'New upgrades for each Pokémon: Critical Hit (+3% critical chance per level, crits deal x1.5 damage), Card reroll (+1 level-up card reroll per run) and Ban (block moves so they never show up in your cards; pick them in Upgrades).',
     '各寶可夢新增強化項目：「擊中要害」（每級提高 3% 擊中要害機率，造成 1.5 倍傷害）、「卡片重抽」（每局升級卡片重抽次數 +1）及「招式封鎖」（在強化頁選擇招式，使其不再出現在升級卡片中）。'],
    ['Atajos de movimientos (en Mejoras, para cada Pokémon): elige qué movimiento va siempre en cada hueco, por ejemplo Confusión siempre en el 1, para la memoria muscular.',
     'Move shortcuts (in Upgrades, for each Pokémon): choose which move always goes in each slot, for example Confusion always on 1, for muscle memory.',
     '招式欄位設定：可在各寶可夢的強化頁設定招式固定使用的欄位，例如將「念力」固定在第 1 格，方便熟悉操作。']
  ], chg: [
    ['Avalancha hace menos daño (21 en vez de 26): derrotaba casi el doble que la media de los movimientos.',
     'Rock Slide deals less damage (21 instead of 26): it defeated almost twice as many as the average move.',
     '「岩崩」傷害從 26 下調為 21；原本的擊敗數量接近一般招式的兩倍。'],
    ['Los cambios de cartas de nivel ya no se ganan venciendo jefes: tienes 1 gratis por run y el resto se compra en Mejoras.',
     'Level-up card rerolls are no longer earned by defeating bosses: you get 1 free per run and can buy more in Upgrades.',
     '擊敗頭目不再增加升級卡片的重抽次數。每局有 1 次免費重抽，可在強化頁購買額外次數。'],
    ['Los legendarios de grieta ya no dan siempre tickets x10: dan uno la mitad de las veces (antes daban 2 siempre y salían demasiados).',
     'Rift legendaries no longer always drop x10 tickets: they drop one half of the time (they used to always drop 2, which was too many).',
     '裂縫中的傳說寶可夢不再必定掉落十連抽獎券，改為 50% 機率掉落 1 張；先前必定掉落 2 張，數量過多。'],
    ['Cooperativo: si vuestras redes no consiguen conectar entre sí, la sala lo avisa y lo reintenta sola, en vez de jugar a tirones por un servidor lento.',
     'Co-op: if your networks cannot connect to each other, the room says so and keeps retrying, instead of playing laggy through a slow server.',
     '多人合作：若彼此的網路無法直接連線，房間會顯示提示並持續重試，不再改用速度較慢的伺服器而造成遊戲卡頓。'],
    ['Hemos cambiado de servidores para que el juego siga siendo gratis: puede que tengas que volver a iniciar sesión (con la misma cuenta y contraseña, o con Google). Tu partida y tus Pokémon siguen igual.',
     'We moved to new servers so the game can stay free: you may need to sign in again (with the same account and password, or with Google). Your save and your Pokémon are unchanged.',
     '為了讓遊戲持續免費營運，已搬遷至新的伺服器。你可能需要以原帳號密碼或 Google 重新登入；存檔與寶可夢不受影響。'],
    ['Gacha: los shiny ya no salen repetidos. Si te toca uno que ya tienes, sale otro de la misma rareza que te falte.',
     'Gacha: shinies no longer come out as duplicates. If you roll one you already have, you get another of the same rarity that you are missing.',
     '扭蛋：異色寶可夢不再重複。若抽到已擁有的異色寶可夢，會改成同稀有度、尚未擁有的異色寶可夢。'],
    ['Grietas con menos azar: cada vez que no sale una, la siguiente es más probable (como mucho 2,5 minutos sin grieta).',
     'Less random rifts: every time one does not show up, the next one is more likely (at most 2.5 minutes without a rift).',
     '調整裂縫出現機制：每次未出現裂縫，下次出現的機率就會提高，最長不會超過 2.5 分鐘沒有裂縫。'],
    ['Los legendarios que aún no has vencido salen 4 veces más en las grietas.',
     'Legendaries you have not beaten yet show up 4 times as often in rifts.',
     '尚未擊敗的傳說寶可夢，在裂縫中的出現機率提高為 4 倍。'],
    ['Los curanderos curan más cuanto más fuerte pegas, pero cada vez menos y con un tope (como mucho el 2,5x).',
     'Healers heal more the harder you hit, but with diminishing returns and a cap (2.5x at most).',
     '你的攻擊越強，治療型敵人的回復量也越高，但增幅會逐漸減少，最高為原本的 2.5 倍。'],
    ['Ataques cuerpo a cuerpo más fuertes: mientras llevas uno activo recibes un 25 % menos de daño, llegan un 25 % más lejos y hacen un 20 % más de daño.',
     'Stronger melee attacks: while one is active you take 25% less damage, and they reach 25% further and deal 20% more damage.',
     '強化近戰招式：啟用近戰招式時，受到的傷害減少 25%；近戰攻擊距離增加 25%，傷害提高 20%。'],
    ['Cooperativo: al elegir con qué objeto quedarte, la partida se para para todos (antes seguía y te pegaban mientras elegías).',
     'Co-op: choosing which held item to keep now pauses the run for everyone (it used to keep going and you got hit while choosing).',
     '多人合作：選擇要保留的攜帶道具時，所有玩家都會暫停；先前遊戲仍會繼續，選擇途中可能遭到攻擊。'],
    ['Cooperativo: mientras alguien elige una fusión, la partida se para para todos.',
     'Co-op: while someone is choosing a fusion, the run pauses for everyone.',
     '多人合作：有人正在選擇融合招式時，所有玩家都會暫停。'],
    ['Cooperativo: si el anfitrión cambia de pestaña o se le para el juego, la partida se pausa para todos hasta que vuelva.',
     'Co-op: if the host switches tabs or their game stalls, the run pauses for everyone until they are back.',
     '多人合作：房主切換分頁或遊戲停頓時，所有玩家都會暫停，直到房主恢復遊戲。'],
    ['Las runs de menos de 1 minuto ya no cuentan para el ranking.',
     'Runs shorter than 1 minute no longer count for the leaderboard.',
     '未滿 1 分鐘的戰局不再計入排行榜。']
  ], fix: [
    ['Quitadas del ranking las marcas rotas por el fallo del minuto 84 (el reloj seguía corriendo con el juego parado) y alguna imposible. Si tenías una, tu próxima partida vuelve a contar.',
     'Removed broken records from the leaderboard caused by the minute 84 bug (the clock kept running while the game was frozen) and a few impossible ones. If you had one, your next run counts again.',
     '移除排行榜中由第 84 分鐘錯誤造成的異常紀錄（遊戲停住但計時仍持續），以及部分不可能達成的紀錄。若你的紀錄受到影響，下一局即可重新計入。'],
    ['iPhone (Safari y Chrome): a veces no se podía cambiar de movimiento tocando los iconos, sobre todo con el otro dedo en el joystick. Además los botones quedan por encima de la barra de inicio.',
     'iPhone (Safari and Chrome): sometimes you could not switch moves by tapping the icons, especially with your other finger on the joystick. Buttons also sit above the home bar now.',
     '修正 iPhone 的 Safari 與 Chrome 有時無法點選圖示切換招式的問題，尤其是另一根手指正操作搖桿時。按鈕位置也已調整至底部主畫面橫條上方。'],
    ['En las partidas de más de 84 minutos la pantalla se quedaba en negro, el juego se paraba o empezabas a subir de nivel sin fin. Ya puedes jugar todo lo que aguantes.',
     'In runs longer than 84 minutes the screen went black, the game froze or you kept levelling up forever. Now you can play for as long as you survive.',
     '修正戰局超過 84 分鐘後黑畫面、遊戲停住或無限升級的問題。現在只要能存活，就能繼續遊玩。'],
    ['Si el juego fallara, la partida se cierra sola y se guarda (tiempo, derrotados, récords y ranking) en vez de perderse.',
     'If the game ever crashes, the run ends by itself and is saved (time, defeated, records and leaderboard) instead of being lost.',
     '若遊戲發生錯誤，會自動結束本局並儲存存活時間、擊敗數、個人紀錄及排行榜成績，避免整局進度遺失。'],
    ['Las partidas muy largas a veces se tomaban por trampas y no contaban para el ranking.',
     'Very long runs were sometimes flagged as cheating and did not count for the leaderboard.',
     '修正長時間戰局有時被誤判為作弊，導致成績未計入排行榜的問題。'],
    ['Cooperativo: si el anfitrión cambiaba de pestaña, los enemigos se quedaban quietos y los demás jugaban con ventaja.',
     'Co-op: if the host switched tabs, enemies stood still and everyone else got a free advantage.',
     '修正多人合作時房主切換分頁後，敵人停住、其他玩家卻仍可繼續行動的問題。'],
    ['iPhone: mantener el dedo en el joystick sacaba "Copiar / Seleccionar todo".',
     'iPhone: holding your finger on the joystick brought up "Copy / Select all".',
     '修正 iPhone 長按搖桿時出現「拷貝／全選」選單的問題。'],
    ['iPhone: a veces no salía la pantalla completa. Ahora el botón explica cómo tenerla (Compartir y "Añadir a pantalla de inicio").',
     'iPhone: fullscreen sometimes did not show up. Now the button explains how to get it (Share and "Add to Home Screen").',
     '修正 iPhone 有時不顯示全螢幕按鈕的問題。現在按鈕會提示如何使用全螢幕（「分享」→「加入主畫面」）。']
  ] },
  { d: '2026-10-11', title: ['Vínculos', 'Bonds', '羈絆'], new: [
    ['Vínculos: al vencer a un legendario fusionas movimientos que se lanzan a la vez desde un solo hueco (hasta 4).',
     'Bonds: defeating a legendary lets you fuse moves that fire at the same time from a single slot (up to 4).',
     '羈絆：擊敗傳說寶可夢後，可以融合招式，讓同一欄位同時施放最多 4 個招式。'],
    ['Botón para cambiar las cartas de subir de nivel.',
     'A button to reroll the level-up cards.',
     '新增升級卡片重抽按鈕。']
  ], chg: [
    ['Más grietas.', 'More rifts.', '增加裂縫出現頻率。'],
    ['Movimientos psíquicos y curanderos más flojos.', 'Weaker psychic moves and healers.', '下調超能力屬性招式與治療型敵人的強度。'],
    ['Las mejoras de las cartas de nivel (velocidad, recarga, experiencia, imán, coraza y potencia) tienen un tope de veces.',
     'Level-up card upgrades (speed, cooldown, experience, magnet, armor and power) can only be taken a limited number of times.',
     '升級卡片中的速度、冷卻、經驗、磁力、防禦與威力強化，新增選取次數上限。'],
    ['En el móvil, la ficha del Pokémon sale al lado; entrar es más rápido y el gacha x10 se puede cerrar.',
     'On mobile, the Pokémon details show alongside; logging in is faster and the x10 gacha can be closed.',
     '手機版寶可夢詳細資料改為顯示在旁邊；登入速度更快，十連扭蛋畫面也可以關閉。']
  ], fix: [
    ['Pantalla negra en partidas de más de una hora por llenarse la memoria de imágenes.',
     'Black screen in runs longer than an hour because image memory filled up.',
     '修正遊玩超過一小時後，因圖片記憶體耗盡而黑畫面的問題。'],
    ['Los tickets se perdían si se cerraba la pestaña antes de acabar la partida: ahora se guardan al cogerlos.',
     'Tickets were lost if the tab closed before the run ended: now they are saved as soon as you pick them up.',
     '修正戰局結束前關閉分頁會遺失抽獎券的問題；現在拾取時就會立即儲存。'],
    ['Una mejora comprada justo después de guardar se cobraba y no se apuntaba.',
     'An upgrade bought right after saving was charged but not applied.',
     '修正剛存檔後購買強化，扣款卻未套用強化的問題。'],
    ['El juego se quedaba congelado para siempre si algo fallaba a mitad de partida.',
     'The game froze forever if something went wrong mid-run.',
     '修正戰局途中發生錯誤後，遊戲永久停住的問題。']
  ] },
  { d: '2026-10-10', title: ['Más reto', 'More challenge', '更具挑戰性'], new: [
    ['Jefes y legendarios con 4 ataques avisados que se enfurecen a media vida.',
     'Bosses and legendaries with 4 telegraphed attacks that get enraged at half health.',
     '頭目與傳說寶可夢擁有 4 種附帶預警的攻擊，體力降至一半時會進入狂暴狀態。'],
    ['12 movimientos nuevos y 8 formas de atacar nuevas: bumerán, cadena, minas, meteoros, torreta, embestida, rastro y abanico.',
     '12 new moves and 8 new ways to attack: boomerang, chain, mines, meteors, turret, dash, trail and spray.',
     '新增 12 個招式與 8 種攻擊形式：迴旋、連鎖、地雷、隕石、砲塔、衝刺、軌跡及扇形攻擊。'],
    ['Eventos a mitad de partida (hordas de un tipo, hora dorada, Pokémon perdidos) y Meowth y Gholdengo que huyen cargados de monedas.',
     'Mid-run events (single-type hordes, golden hour, lost Pokémon) and Meowth and Gholdengo running away loaded with coins.',
     '新增戰局事件（單一屬性群襲、黃金時段、迷路的寶可夢），以及攜帶大量金幣逃跑的喵喵與賽富豪。'],
    ['Estatuas para los Pokémon grandes.', 'Statues for big Pokémon.', '為大型寶可夢新增雕像。']
  ], chg: [
    ['Más difícil: menos enemigos pero más duros.', 'Harder: fewer but tougher enemies.', '提高難度：敵人數量減少，但實力更強。'],
    ['Subir de nivel es más lento, los tickets son más raros y los jefes dan ticket x10 una de cada tres veces.',
     'Levelling up is slower, tickets are rarer and bosses drop a x10 ticket one time in three.',
     '升級速度降低，抽獎券更稀有；頭目有三分之一機率掉落 1 張十連抽獎券。'],
    ['Carga más rápida.', 'Faster loading.', '加快載入速度。']
  ], fix: [
    ['Los enemigos rezagados desaparecían delante de ti: ahora sólo fuera de la vista.',
     'Straggling enemies vanished in front of you: now only off-screen.',
     '修正落後的敵人在眼前消失的問題；現在只會在畫面外移除。'],
    ['Los menús y pantallas se montaban encima de la barra de arriba.',
     'Menus and screens overlapped the top bar.',
     '修正選單與介面覆蓋頂部工具列的問題。']
  ] },
  { d: '2026-10-09', title: ['Móvil e inglés', 'Mobile and English', '手機版與英文版'], new: [
    ['Se puede jugar en móvil y tablet con joystick táctil, e instalar como app.',
     'Play on phones and tablets with a touch joystick, and install it as an app.',
     '支援手機與平板觸控搖桿操作，並可加入主畫面，像 App 一樣開啟。'],
    ['El juego, en español y en inglés.', 'The game in English and Spanish.', '遊戲提供西班牙文與英文。'],
    ['Pantalla de ajustes con calidad gráfica automática.', 'Settings screen with automatic graphics quality.', '新增設定頁面與自動畫質調整。']
  ], chg: [
    ['Menos enemigos en pantalla pero más fuertes.', 'Fewer but stronger enemies on screen.', '畫面中的敵人數量減少，但實力更強。'],
    ['Gigadrenado pasa a ser Hierba Lazo (ya no cura).', 'Giga Drain becomes Grass Knot (no more healing).', '「終極吸取」改為「打草結」，不再回復體力。']
  ] },
  { d: '2026-10-08', title: ['Misiones, grietas y cooperativo', 'Missions, rifts and co-op', '任務、裂縫與多人合作'], new: [
    ['Misiones diarias y semanales, logros con medallas y títulos, y perfil público.',
     'Daily and weekly missions, achievements with medals and titles, and a public profile.',
     '新增每日與每週任務、附帶獎章與稱號的成就，以及公開個人檔案。'],
    ['Objetos equipables, evoluciones de movimientos y enemigos que curan, protegen, invocan o explotan.',
     'Held items, move evolutions and enemies that heal, shield, summon or explode.',
     '新增攜帶道具、招式進化，以及會治療、提供護盾、召喚或爆炸的敵人。'],
    ['Grietas que llevan a 18 arenas legendarias, una por tipo, y clima que cambia la batalla.',
     'Rifts leading to 18 legendary arenas, one per type, and weather that changes the fight.',
     '新增通往 18 座傳說競技場的裂縫（各屬性一座），以及會影響戰鬥的天氣。'],
    ['Cooperativo con tu lista de amigos y ranking.', 'Co-op with your friends list and leaderboards.', '新增好友名單、多人合作與排行榜。'],
    ['Mejoras para cada Pokémon, gacha tragaperras con tickets y tabla de tipos.',
     'Upgrades for each Pokémon, a slot-machine ticket gacha and a type chart.',
     '新增各寶可夢的強化系統、使用抽獎券的拉霸式扭蛋，以及屬性相剋表。']
  ], chg: [
    ['Cámara más lejos y enemigos que rodean los obstáculos.', 'Camera further out and enemies that walk around obstacles.', '拉遠鏡頭，敵人也會繞過障礙物。']
  ] },
  { d: '2026-10-07', title: ['Primera versión', 'First version', '首個版本'], new: [
    ['Primera versión pública de PokéSurvivor.', 'First public version of PokéSurvivor.', 'PokéSurvivor 首次公開發佈。']
  ] }
];
