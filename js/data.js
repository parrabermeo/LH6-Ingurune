// ==========================================================================
// LH6 ESPLORATZAILEAK - CURRICULUM EDUKIAK & HIZTEGI OSAGARRIA (LH 6. MAILA)
// ==========================================================================

const SUBTOPICS_DATA = {
  
  // --------------------------------------------------------------------------
  // 1. GAIA: EUROPA, BIZTANLERIA ETA MIGRAZIOAK (URDINA) - 7 AZPIGAI
  // --------------------------------------------------------------------------
  'mod1_sub1': {
    themeId: 1,
    themeColor: 'blue',
    themeName: '1. Gaia: Europa & Euskadi',
    badge: '🌍 1. GAIA • URDINA (LH 6)',
    code: '1.1',
    title: '1.1 Europako Kokapena, Mugak eta Ozeanoak',
    lead: 'Europako geografia fisikoa, mendebaldeko euskal kostaldea eta Eurasiaren testuingurua.',
    image: 'images/kokapena_mugak.jpg',
    prev: 'home',
    next: 'mod1_sub2',
    prevLabel: '← Gaien Menua',
    nextLabel: 'Hurrengoa: 1.2 Erliebea & Klimak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Europa <span class="kw-term kw-blue">Ipar Hemisferioan</span> kokatuta dago, eremu epelean nagusiki. <span class="kw-term kw-blue">Eurasiako</span> kontinente erraldoiaren mendebaldeko penintsulatzat har daiteke. Bere kokapen geografiko estrategikoak merkataritza, klima atsegina eta kultura aniztasun handia bultzatu ditu mendeetan zehar.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-base sm:text-lg">
          <div class="p-5 bg-blue-50/60 rounded-2xl border border-blue-100">
            <strong class="text-blue-900 block font-bold text-lg mb-1">🌊 Mendebaldea:</strong>
            <span class="kw-term kw-blue">Ozeano Atlantikoa</span> eta <span class="kw-term kw-blue">Bizkaiko Golkoa</span> (Euskal Herriko kostaldea).
          </div>
          <div class="p-5 bg-blue-50/60 rounded-2xl border border-blue-100">
            <strong class="text-blue-900 block font-bold text-lg mb-1">❄️ Iparraldea:</strong>
            <span class="kw-term kw-blue">Ozeano Glaziar Artikoa</span> (Eremu polarra eta izotz iraunkorrak).
          </div>
          <div class="p-5 bg-blue-50/60 rounded-2xl border border-blue-100">
            <strong class="text-blue-900 block font-bold text-lg mb-1">☀️ Hegoaldea:</strong>
            <span class="kw-term kw-blue">Mediterraneo itsasoa</span> eta <span class="kw-term kw-blue">Gibraltarreko itsasartea</span> (Afrika eta Asiarekiko zubi historikoa).
          </div>
          <div class="p-5 bg-blue-50/60 rounded-2xl border border-blue-100">
            <strong class="text-blue-900 block font-bold text-lg mb-1">🏔️ Ekialdea:</strong>
            <span class="kw-term kw-blue">Ural mendiak</span>, Ural ibaia eta <span class="kw-term kw-blue">Kaukasoa</span> (Asiarekiko muga naturala).
          </div>
        </div>

        <div class="p-5 bg-blue-50 rounded-2xl border border-blue-200 text-base sm:text-lg text-blue-950 flex items-start gap-3">
          <span class="text-2xl">💡</span>
          <div>
            <strong>Euskadi Europan:</strong> Bizkaiko Golkoaren erdi-erdian kokatuta dago, Europa Atlantikoaren ardatz ekonomiko, garraio eta kulturalean.
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Kontinentea', desc: 'Lurrazaleko lur-eremu zabal eta jarraitua, ozeanoek eta itsasoek inguratuta dagoena.' },
      { term: 'Penintsula', desc: 'Urez ia guztiz inguratutako lurraldea, alde bakar batetik (istmoa) kontinenteari lotuta dagoena (adib. Iberiar Penintsula).' },
      { term: 'Itsasartea', desc: 'Bi itsaso edo ozeano lotzen dituen urezko pasabide estua (adib. Gibraltarreko itsasartea, 14 km).' },
      { term: 'Artxipelagoa', desc: 'Itsasoan elkarren ondoan kokatuta dauden uharteen multzoa (adib. Balearrak edo Kanariak).' },
      { term: 'Muga Naturala', desc: 'Bi eremuren arteko banaketa fisikoa egiten duen elementu geografikoa, hala nola mendikateak (Uralak), ibaiak edo itsasoak.' }
    ]
  },

  'mod1_sub2': {
    themeId: 1,
    themeColor: 'blue',
    themeName: '1. Gaia: Europa & Euskadi',
    badge: '🌍 1. GAIA • URDINA (LH 6)',
    code: '1.2',
    title: '1.2 Europako Erliebea eta Klimak',
    lead: 'Mendi garaiak, Europako Lautada Handia, mesetak, itsasertzak eta Europako 5 klima nagusiak.',
    image: 'images/erliebea_klimak.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=CeNkzcv2nlQ',
    videoTitle: '🌍 Europa: Erliebe Unitate Nagusiak (Mendiak eta Ibaiak)',
    videoAuthor: 'Benito KMK (Gizartirakasle)',
    prev: 'mod1_sub1',
    next: 'mod1_sub3',
    prevLabel: '← 1.1 Kokapena',
    nextLabel: 'Hurrengoa: 1.3 Europako Mapak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Europako erliebea oso askotarikoa da. Hiru unitate geomorfologiko handitan bana daiteke: <span class="kw-term kw-blue">Europako Lautada Handia</span> (erdialde eta ekialdean hedatzen dena), hegoaldeko <span class="kw-term kw-blue">mendikate gazte garaiak</span> (<span class="kw-term kw-blue">Alpeak</span>, <span class="kw-term kw-blue">Pirinioak</span>, Kaukasoa) eta iparraldeko mendigune zaharrak.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 text-base sm:text-lg">
          <div class="p-5 bg-blue-50/70 rounded-2xl border border-blue-100 space-y-2">
            <strong class="text-blue-900 block font-bold text-lg">🏔️ Mendiak & Tontorrak:</strong>
            <p class="text-gray-700 text-sm sm:text-base">Europak mendi erraldoiak ditu: <span class="kw-term kw-blue">Alpeak</span> (<span class="kw-term kw-blue">Mont Blanc</span>, 4.810 m), <span class="kw-term kw-blue">Pirinioak</span> (<span class="kw-term kw-blue">Aneto</span>, 3.404 m) eta Kaukasoa (<span class="kw-term kw-blue">Elbrus</span>, 5.642 m, Europako garaiena).</p>
          </div>
          <div class="p-5 bg-blue-50/70 rounded-2xl border border-blue-100 space-y-2">
            <strong class="text-blue-900 block font-bold text-lg">🌾 Lautadak & Mesetak:</strong>
            <p class="text-gray-700 text-sm sm:text-base">Europako zati handi bat oso laua da. Eremu zabal hauek <span class="kw-term kw-blue">lautadak</span> deitzen dira, elikagaiak eta zerealak lantzeko ezin hobeak. Mendixka txikiz osatutako <span class="kw-term kw-blue">mesetak</span> ere badaude.</p>
          </div>
          <div class="p-5 bg-blue-50/70 rounded-2xl border border-blue-100 space-y-2">
            <strong class="text-blue-900 block font-bold text-lg">🌊 Ibaiak & Itsasertzak:</strong>
            <p class="text-gray-700 text-sm sm:text-base">Europak ibai luze eta emaritsuak ditu: <span class="kw-term kw-blue">Volga</span> (3.530 km), <span class="kw-term kw-blue">Danubio</span> (2.850 km), Sena, Rhin eta Tamesis. Itsasertzak atlantikoak eta mediterraneoak bereizten dira.</p>
          </div>
        </div>

        <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900 mt-6">🌤️ Europako 5 Klima Nagusiak (Arakatu Klik Eginez):</h3>
        
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 my-4">
          <button onclick="app.selectClimate('atlantikoa')" class="climate-tab-btn p-3 rounded-2xl bg-blue-600 text-white font-bold text-sm text-center shadow-sm" data-climate="atlantikoa">🌧️ Atlantikoa</button>
          <button onclick="app.selectClimate('mediterraneoa')" class="climate-tab-btn p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm text-center" data-climate="mediterraneoa">☀️ Mediterraneoa</button>
          <button onclick="app.selectClimate('kontinentala')" class="climate-tab-btn p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm text-center" data-climate="kontinentala">🍂 Kontinentala</button>
          <button onclick="app.selectClimate('polarra')" class="climate-tab-btn p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm text-center" data-climate="polarra">❄️ Artikoa/Polarra</button>
          <button onclick="app.selectClimate('mendikoa')" class="climate-tab-btn p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm text-center" data-climate="mendikoa">🏔️ Mendikoa</button>
        </div>

        <div id="climate-display-box" class="p-6 rounded-2xl bg-blue-50/80 border border-blue-200 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div class="sm:col-span-2 space-y-2">
            <span id="climate-title" class="text-lg font-black text-blue-900 block">🌧️ Klima Ozeanikoa / Atlantikoa (Euskal Kostaldea)</span>
            <p id="climate-desc" class="text-base sm:text-lg text-gray-700 leading-relaxed">
              Ozeano Atlantikoaren inguruko lurraldeetan dago, eta gu klima honetan sartzen gara. Hezetasun handikoa da eta tenperatura epelak ditu urte osoan zehar, itsasoaren eraginez.
            </p>
          </div>
          <div class="h-36 rounded-xl overflow-hidden border border-blue-200">
            <img id="climate-img" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80" alt="Klima Atlantikoa" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-sm sm:text-base text-amber-900">
          🌾 <strong>Estepako klima (Oso lehorra):</strong> Ukrainan eta Espainiako barrualdean (Gaztela, Aragoi) aurkitzen da. Prezipitazio oso txikiak eta tenperatura-aldaketa bortitzak ditu ezaugarri.
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Erliebea', desc: 'Lurrazalaren formen eta desnibelen multzoa (mendiak, lautadak, haranak, mesetak).' },
      { term: 'Mendikatea', desc: 'Elkarri lotutako mendi-lerro handi eta luzea (adibidez, Alpeak edo Pirinioak).' },
      { term: 'Lautada', desc: 'Desnibela txikia duen lur-eremu zabal eta laua, nekazaritzarako oso egokia dena.' },
      { term: 'Meseta', desc: 'Altuera jakin batean dagoen lur-eremu laua (adibidez, Espainiako Erdiko Meseta).' },
      { term: 'Isurialdea', desc: 'Urak itsaso edo ozeano berera bideratzen dituzten ibaien arro-multzoa (Atlantikoa, Mediterraneoa).' },
      { term: 'Klimograma', desc: 'Leku bateko hileko batez besteko tenperaturak eta prezipitazioak adierazten dituen grafikoa.' }
    ]
  },

  'mod1_sub3': {
    themeId: 1,
    themeColor: 'blue',
    themeName: '1. Gaia: Europa & Euskadi',
    badge: '🌍 1. GAIA • URDINA (LH 6)',
    code: '1.3',
    title: '1.3 Europako Mapak: Politikoa eta Fisikoa',
    lead: 'Europako herrialdeak eta haien hiriburuak, ibai luzeenak, itsasoak eta mendikate garaienak.',
    image: 'images/mapa_politiko_fisikoa.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=7bbpTGBfBPA',
    videoTitle: 'Europako herrialdeak eta hiriburuak (Lehen Hezkuntza)',
    videoAuthor: 'maisumikelhezkuntza',
    prev: 'mod1_sub2',
    next: 'mod1_sub4',
    prevLabel: '← 1.2 Erliebea & Klimak',
    nextLabel: 'Hurrengoa: 1.4 Biztanleria →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Europako geografia ondo ulertzeko, bi mapa mota nagusi aztertzen ditugu: <span class="kw-term kw-blue">Mapa Politikoa</span> (estatuak, mugak eta hiriburuak) eta <span class="kw-term kw-blue">Mapa Fisikoa</span> (ibaiak, itsasoak eta mendikateak).
        </p>

        <!-- MAPA HAUTATZAILEA -->
        <div class="flex flex-wrap gap-3 my-4">
          <button onclick="app.switchMapTab('politikoa')" id="tab-map-pol" class="px-5 py-3 rounded-2xl bg-blue-600 text-white font-bold text-base shadow-sm flex items-center gap-2">
            <span>🗺️</span> <span>Europako Mapa Politikoa (Herrialdeak & Hiriburuak)</span>
          </button>
          <button onclick="app.switchMapTab('fisikoa')" id="tab-map-fis" class="px-5 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-base flex items-center gap-2">
            <span>🏔️</span> <span>Europako Mapa Fisikoa (Ibaiak & Mendiak)</span>
          </button>
        </div>

        <!-- EDUKI POLITIKOA -->
        <div id="map-content-politikoa" class="space-y-6">
          <div class="p-5 bg-blue-50/80 rounded-2xl border border-blue-200">
            <h4 class="text-xl font-black text-blue-950 flex items-center gap-2 mb-2">
              <span>🏛️</span> <span>Europako 49 Estatuak eta Haien Hiriburuak</span>
            </h4>
            <p class="text-base text-gray-700 mb-4">
              Arakatu Europako 49 estatuak. Egin klik herrialde edo bandera bakoitzean bere fitxa osoa (hiriburua, biztanleria eta hizkuntza ofiziala) ikusteko:
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3" id="countries-grid">
              <!-- Grid render dynamikoki app.js-en -->
            </div>
          </div>

          <!-- JOKO INTERAKTIBO BERRIA: BANDERA ETA HIRIBURUA (2 URRATSEKO ERRONKA) -->
          <div id="flag-game-container" class="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-3xl shadow-xl border-2 border-blue-400/30 space-y-6 relative overflow-hidden">
            <!-- Jokoaren edukia dinamikoki renderizatuko da app.js bidez -->
          </div>
        </div>

        <!-- EDUKI FISIKOA -->
        <div id="map-content-fisikoa" class="space-y-6 hidden">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-base">
            <!-- IBAIAK -->
            <div class="p-5 bg-sky-50 rounded-2xl border border-sky-200 space-y-3">
              <h4 class="text-lg font-black text-sky-950 flex items-center gap-2">
                <span>🌊</span> <span>Europako Ibai Nagusiak</span>
              </h4>
              <ul class="space-y-2 text-sm text-gray-800">
                <li class="p-2 bg-white rounded-xl border border-sky-100"><strong>Volga:</strong> 3.530 km (Europako luzeena, Kaspiar itsasora).</li>
                <li class="p-2 bg-white rounded-xl border border-sky-100"><strong>Danubio:</strong> 2.850 km (10 herrialde zeharkatzen ditu, Itsaso Beltzera).</li>
                <li class="p-2 bg-white rounded-xl border border-sky-100"><strong>Rhin:</strong> 1.233 km (Europako ardatz ekonomikoa, Ipar itsasora).</li>
                <li class="p-2 bg-white rounded-xl border border-sky-100"><strong>Sena:</strong> Frantzian (Paris zeharkatzen du).</li>
                <li class="p-2 bg-white rounded-xl border border-sky-100"><strong>Tamesis:</strong> Erresuma Batuan (Londres zeharkatzen du).</li>
                <li class="p-2 bg-white rounded-xl border border-sky-100"><strong>Loira:</strong> Frantziako ibairik luzeena (Atlantikora).</li>
                <li class="p-2 bg-white rounded-xl border border-sky-100"><strong>Ebro:</strong> Iberiar penintsulan emaritsuena (Mediterraneora).</li>
                <li class="p-2 bg-white rounded-xl border border-sky-100"><strong>Tajo:</strong> Iberiar penintsulako luzeena (Atlantikora, Lisboa).</li>
              </ul>
            </div>

            <!-- ITSASOAK -->
            <div class="p-5 bg-blue-50 rounded-2xl border border-blue-200 space-y-3">
              <h4 class="text-lg font-black text-blue-950 flex items-center gap-2">
                <span>⛵</span> <span>Europako Itsasoak</span>
              </h4>
              <ul class="space-y-2 text-sm text-gray-800">
                <li class="p-2 bg-white rounded-xl border border-blue-100"><strong>Kantauri itsasoa:</strong> Bizkaiko Golkoa eta Euskal kostaldea.</li>
                <li class="p-2 bg-white rounded-xl border border-blue-100"><strong>Mediterraneo itsasoa:</strong> Hegoaldean, epela eta historikoa.</li>
                <li class="p-2 bg-white rounded-xl border border-blue-100"><strong>Ipar itsasoa:</strong> Britainia Handia eta Danimarka artean.</li>
                <li class="p-2 bg-white rounded-xl border border-blue-100"><strong>Baltiar itsasoa:</strong> Eskandinavia eta Baltikoko estatuen artean.</li>
                <li class="p-2 bg-white rounded-xl border border-blue-100"><strong>Itsaso Beltza:</strong> Ekialdean, Europa eta Asia artean.</li>
                <li class="p-2 bg-white rounded-xl border border-blue-100"><strong>Kaspiar itsasoa:</strong> Munduko lakurik handiena (ur gazia).</li>
              </ul>
            </div>

            <!-- MENDIAK -->
            <div class="p-5 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
              <h4 class="text-lg font-black text-emerald-950 flex items-center gap-2">
                <span>🏔️</span> <span>Mendikateak & Tontorrak</span>
              </h4>
              <ul class="space-y-2 text-sm text-gray-800">
                <li class="p-2 bg-white rounded-xl border border-emerald-100"><strong>Kaukasoa:</strong> <span class="kw-term kw-blue">Elbrus</span> (5.642 m, Europako altuena).</li>
                <li class="p-2 bg-white rounded-xl border border-emerald-100"><strong>Alpeak:</strong> <span class="kw-term kw-blue">Mont Blanc</span> (4.810 m, Frantzia-Italia).</li>
                <li class="p-2 bg-white rounded-xl border border-emerald-100"><strong>Pirinioak:</strong> <span class="kw-term kw-blue">Aneto</span> (3.404 m, Euskal Herriaren hegoaldean).</li>
                <li class="p-2 bg-white rounded-xl border border-emerald-100"><strong>Apeninoak:</strong> Italiako bizkarrezurra (Etna sumendia Sizilian).</li>
                <li class="p-2 bg-white rounded-xl border border-emerald-100"><strong>Balkanak:</strong> Olinpo mendia Grezian.</li>
                <li class="p-2 bg-white rounded-xl border border-emerald-100"><strong>Karpatoak:</strong> Europa Erdialdean eta Ekialdean.</li>
                <li class="p-2 bg-white rounded-xl border border-emerald-100"><strong>Eskandinaviako mendiak:</strong> Norvegia eta Suedian.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Estatua', desc: 'Gobernu, lege eta muga zehatzak dituen lurralde eta komunitate politiko independentea.' },
      { term: 'Hiriburua', desc: 'Estatu bateko gobernuaren egoitza eta zentro administratibo nagusia den hiria (adibidez, Madril edo Paris).' },
      { term: 'Ibai-Ahoa', desc: 'Ibai batek bere urak itsasora, ozeanora edo laku batera isurtzen dituen amaierako puntua.' },
      { term: 'Mendilerroa', desc: 'Altuera handiko mendien lerroa, paisaian hedatzen dena.' },
      { term: 'Sumendia', desc: 'Lurrazalean dagoen irekidura, barruko magma, gasak eta laba kanporatzen dituena (adibidez, Etna).' },
      { term: 'Isurialde Atlantikoa', desc: 'Urak Ozeano Atlantikora eta Bizkaiko Golkora eramaten dituzten ibaien lurraldea.' }
    ]
  },

  'mod1_sub4': {
    themeId: 1,
    themeColor: 'blue',
    themeName: '1. Gaia: Europa & Euskadi',
    badge: '🌍 1. GAIA • URDINA (LH 6)',
    code: '1.4',
    title: '1.4 Europako Biztanleria eta Demografia',
    lead: '750 milioi biztanle, biztanleria hirikoa (%70), eremu jendetsuak vs hustuak eta kalkulu demografikoak.',
    image: 'images/biztanleria_europa.jpg',
    prev: 'mod1_sub3',
    next: 'mod1_sub5',
    prevLabel: '← 1.3 Europako Mapak',
    nextLabel: 'Hurrengoa: 1.5 Hizkuntzak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Europak <span class="kw-term kw-blue">750 milioi biztanle</span> inguru ditu. Ezaugarri nagusietako bat da biztanleria nagusiki <span class="kw-term kw-blue">hirikoa</span> dela: <strong>hamar europarretik zazpi (%70 baino gehiago) hirietan bizi dira</strong>.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-base sm:text-lg">
          <div class="p-5 bg-emerald-50/70 rounded-2xl border border-emerald-100 space-y-2">
            <h4 class="text-lg font-bold text-emerald-950 flex items-center gap-2">
              <span>🏙️</span> <span class="kw-term kw-blue">Oso Jendeztatutako Eremuak</span>
            </h4>
            <p class="text-gray-700 text-sm sm:text-base">
              <strong>Alemania, Erresuma Batua, Italia, Herbehereak eta Frantzia.</strong> Zergatik? Industria indartsua, zerbitzuak, enplegua, garraio bikainak eta hiri handiak daudelako. Mapan kolore <strong>laranja edo gorria</strong> izaten dute.
            </p>
          </div>

          <div class="p-5 bg-blue-50/70 rounded-2xl border border-blue-100 space-y-2">
            <h4 class="text-lg font-bold text-blue-950 flex items-center gap-2">
              <span>❄️</span> <span class="kw-term kw-blue">Gutxi Jendeztatutako Eremuak</span>
            </h4>
            <p class="text-gray-700 text-sm sm:text-base">
              <strong>Islandia, Norvegia, Suedia, Finlandiako iparraldea eta mendiguneak.</strong> Zergatik? Muturreko hotz polarra, lurralde izoztuak eta mendi malkartsuak daudelako. Mapan kolore <strong>hori argia</strong> dute.
            </p>
          </div>
        </div>

        <div class="p-5 bg-amber-50 rounded-2xl border border-amber-200 text-base sm:text-lg space-y-2">
          <h4 class="font-bold text-amber-950 flex items-center gap-2">
            <span>📍</span> <span>Non bizi da biztanleria gehiena Espainian eta Euskadin?</span>
          </h4>
          <p class="text-gray-800 text-sm sm:text-base">
            Biztanleria gehiena <strong>kostaldeko eremuetan</strong> (Bizkaia, Gipuzkoa, Bartzelona, Valentzia...) eta <strong>Madrilgo metropolian</strong> biltzen da, bertan baitaude portuak, enpresak eta garraio-sare nagusiak. Aitzitik, barrualdeko herrialdeek (Soria, Teruel, Cuenca...) oso biztanle gutxi dituzte ("Espainia hustua").
          </p>
        </div>

        <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900 mt-6">📐 Demografia Formulak (LH 6):</h3>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-base">
          <div class="p-4 bg-white rounded-2xl border-2 border-blue-200 shadow-sm space-y-1">
            <span class="text-xs font-bold text-blue-600 block uppercase">1. FORMULA</span>
            <strong class="text-blue-950 block text-lg">Saldo Naturala</strong>
            <p class="text-sm text-gray-600"><strong>Jaiotzak - Heriotzak</strong></p>
          </div>
          <div class="p-4 bg-white rounded-2xl border-2 border-indigo-200 shadow-sm space-y-1">
            <span class="text-xs font-bold text-indigo-600 block uppercase">2. FORMULA</span>
            <strong class="text-indigo-950 block text-lg">Migrazio Saldoa</strong>
            <p class="text-sm text-gray-600"><strong>Immigranteak - Emigranteak</strong></p>
          </div>
          <div class="p-4 bg-white rounded-2xl border-2 border-purple-200 shadow-sm space-y-1">
            <span class="text-xs font-bold text-purple-600 block uppercase">3. FORMULA</span>
            <strong class="text-purple-950 block text-lg">Hazkunde Erreala</strong>
            <p class="text-sm text-gray-600"><strong>Saldo Naturala + Migrazio Saldoa</strong></p>
          </div>
        </div>

        <!-- Demografia Kalkulagailua -->
        <div class="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span>🧮</span> <span>Demografia Kalkulagailu Interaktiboa</span>
            </h4>
            <button onclick="app.loadDemoPreset(2017)" class="px-3 py-1 rounded-xl text-xs font-bold bg-blue-100 text-blue-800 hover:bg-blue-200 transition-all">
              📄 Kargatu 2017ko Datuak (Fitxa)
            </button>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1">Jaiotzak</label>
              <input id="demo-births" type="number" value="391930" class="w-full p-2.5 rounded-xl border border-gray-300 text-base font-bold text-center" oninput="app.calculateDemo()">
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1">Heriotzak</label>
              <input id="demo-deaths" type="number" value="423643" class="w-full p-2.5 rounded-xl border border-gray-300 text-base font-bold text-center" oninput="app.calculateDemo()">
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1">Immigranteak</label>
              <input id="demo-immig" type="number" value="532482" class="w-full p-2.5 rounded-xl border border-gray-300 text-base font-bold text-center" oninput="app.calculateDemo()">
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1">Emigranteak</label>
              <input id="demo-emig" type="number" value="367878" class="w-full p-2.5 rounded-xl border border-gray-300 text-base font-bold text-center" oninput="app.calculateDemo()">
            </div>
          </div>

          <div id="demo-results" class="p-4 bg-white rounded-xl border border-blue-200 text-base text-center font-bold text-blue-900">
            Saldo Naturala: -31.713 | Migrazio Saldoa: +164.604 | Benetako Hazkundea: +132.891 herritar
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Biztanleria-Dentsitatea', desc: 'Kilometro karratu bakoitzean batez beste bizi diren pertsona kopurua (biztanle/km²).' },
      { term: 'Berezko Hazkundea', desc: 'Lurralde batean jaiotako eta hildako pertsonen arteko aldea urte batean.' },
      { term: 'Bizi-Itxaropena', desc: 'Pertsona batek bere jaiotzean batez beste bizitzea espero den urte kopurua (Europan 80 urtetik gora).' },
      { term: 'Zahartze Demografikoa', desc: 'Jaiotza-tasa baxuaren eta bizi-itxaropen altuaren ondorioz adineko pertsonen ehunekoa igotzea.' },
      { term: 'Errolda', desc: 'Udal bakoitzak bere herrian bizi diren herritar guztien datuak jasotzen dituen erregistro ofiziala.' }
    ]
  },

  'mod1_sub5': {
    themeId: 1,
    themeColor: 'blue',
    themeName: '1. Gaia: Europa & Euskadi',
    badge: '🌍 1. GAIA • URDINA (LH 6)',
    code: '1.5',
    title: '1.5 Europako Hizkuntzak eta Euskara',
    lead: '24 hizkuntza ofizial, familia indoeuroparrak, erromantzeen jatorria eta euskararen berezitasun isolatua.',
    image: 'images/hizkuntzak_euskara.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=i0zY1zwSx5E',
    videoTitle: 'EUSKARAREN MISTERIOA (Euskararen jatorria eta hizkuntzak)',
    videoAuthor: 'Azkue Fundazioa (4:03)',
    prev: 'mod1_sub4',
    next: 'mod1_sub6',
    prevLabel: '← 1.4 Biztanleria',
    nextLabel: 'Hurrengoa: 1.6 Lan Sektoreak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Europan <span class="kw-term kw-blue">24 hizkuntza ofizial</span> daude Europar Batasunean, baina kontinente osoan zehar <strong>200 hizkuntza eta dialekto baino gehiago</strong> hitz egiten dira! Hizkuntza-aniztasun hau Europako ondasun kultural baliotsuenetako bat da.
        </p>

        <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900 mt-6">🌳 Hizkuntza Familia Nagusiak Europan:</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-base sm:text-lg">
          <div class="p-5 bg-blue-50/70 rounded-2xl border border-blue-100 space-y-2">
            <h4 class="text-lg font-bold text-blue-950 flex items-center gap-2">
              <span>🗣️</span> <span class="kw-term kw-blue">Hizkuntza Indoeuroparrak</span>
            </h4>
            <p class="text-gray-700 text-sm sm:text-base">
              Europako hizkuntza gehienak familia erraldoi honetakoak dira. Hainbat adarretan banatzen dira:
            </p>
            <ul class="text-sm space-y-1 text-gray-800 list-disc list-inside">
              <li><strong>Germaniarrak:</strong> Ingelesa, alemana, nederlandera, suediera, norvegiera, daniera.</li>
              <li><strong>Eslaviarrak:</strong> Errusiera, poloniera, ukrainera, txekiera, serbiera, bulgariera.</li>
              <li><strong>Zeltak:</strong> Irlandako gaelikoa, bretoiera, galesera.</li>
              <li><strong>Baltikoak:</strong> Lituaniera eta letoniera.</li>
            </ul>
          </div>

          <div class="p-5 bg-amber-50/70 rounded-2xl border border-amber-100 space-y-2">
            <h4 class="text-lg font-bold text-amber-950 flex items-center gap-2">
              <span>🏛️</span> <span class="kw-term kw-blue">Erromantze Hizkuntzak (Neolatinoak)</span>
            </h4>
            <p class="text-gray-700 text-sm sm:text-base">
              <strong>Latinetik datozen hizkuntzak dira.</strong> Europako hegoalde ia osoan mintzatzen dira. Izenaren jatorria Antzinako Erroman dago:
            </p>
            <ul class="text-sm space-y-1 text-gray-800 list-disc list-inside">
              <li><strong>Gaztelania</strong> (Espainia)</li>
              <li><strong>Frantsesa</strong> (Frantzia, Belgika, Suitza)</li>
              <li><strong>Italiera</strong> (Italia)</li>
              <li><strong>Errumaniera</strong> (Errumania)</li>
              <li><strong>Portugesa, Katalana eta Galiziera</strong></li>
            </ul>
          </div>
        </div>

        <!-- EUSKARA FITXA NABARMENDUA -->
        <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-300 shadow-sm space-y-3">
          <div class="flex items-center gap-3">
            <span class="text-3xl">🌿</span>
            <div>
              <h4 class="text-xl font-black text-emerald-950">EUSKARA: Europako Altxor Isolatua</h4>
              <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">Aurre-indoeuroparra eta antzinakoa</span>
            </div>
          </div>
          <p class="text-gray-800 text-base sm:text-lg leading-relaxed">
            <span class="kw-term kw-blue">Euskararen jatorria</span> ez dago argi eta hizkuntzalari askok diote <strong>Europako hizkuntzarik zaharrena</strong> dela. Ez da familia indoeuroparrekoa: <span class="kw-term kw-blue">hizkuntza isolatua</span> da, hau da, ez du ahaidetasunik ezagutzen den beste inongo hizkuntzarekin. Gaur egun Euskal Herrian bizirik dagoen milaka urteko ondare unibertsala da!
          </p>
        </div>

        <!-- ESPLORATZAILE INTERAKTIBOA: ESALDI BAT HIZKUNTZETAN -->
        <div class="p-5 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
          <h4 class="text-base font-bold text-gray-900">👋 Nola esaten da "Kaixo" Europako hizkuntza desberdinetan?</h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-sm font-semibold">
            <div class="p-3 bg-emerald-100 text-emerald-900 rounded-xl border border-emerald-200"><strong>Euskara:</strong> Kaixo!</div>
            <div class="p-3 bg-blue-100 text-blue-900 rounded-xl border border-blue-200"><strong>Frantsesa:</strong> Bonjour!</div>
            <div class="p-3 bg-red-100 text-red-900 rounded-xl border border-red-200"><strong>Gaztelania:</strong> ¡Hola!</div>
            <div class="p-3 bg-green-100 text-green-900 rounded-xl border border-green-200"><strong>Italiera:</strong> Ciao!</div>
            <div class="p-3 bg-indigo-100 text-indigo-900 rounded-xl border border-indigo-200"><strong>Ingelesa:</strong> Hello!</div>
            <div class="p-3 bg-amber-100 text-amber-900 rounded-xl border border-amber-200"><strong>Alemana:</strong> Hallo!</div>
            <div class="p-3 bg-purple-100 text-purple-900 rounded-xl border border-purple-200"><strong>Poloniera:</strong> Cześć!</div>
            <div class="p-3 bg-rose-100 text-rose-900 rounded-xl border border-rose-200"><strong>Errumaniera:</strong> Bună!</div>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Hizkuntza Ofiziala', desc: 'Estatu edo erakunde batek lege bidez bere administrazioan eta hezkuntzan erabiltzeko ezarritako hizkuntza.' },
      { term: 'Indoeuroparra', desc: 'Europako eta Asiako hegoaldeko hizkuntza gehienak biltzen dituen jatorri komuna duen hizkuntza familia erraldoia.' },
      { term: 'Erromantze Hizkuntza', desc: 'Antzinako Erromako latin arruntetik mendeetan zehar eratorritako hizkuntzak (gaztelania, frantsesa, etab.).' },
      { term: 'Hizkuntza Isolatua', desc: 'Beste inongo hizkuntzarekin ahaidetasunik ez duen hizkuntza (adibidez, euskara).' },
      { term: 'Dialektoa', desc: 'Hizkuntza baten barruan eskualde jakin batean erabiltzen den hitz egiteko modu berezia (adibidez, euskalkiak).' },
      { term: 'Elebitasuna', desc: 'Pertsona batek edo gizarte batek bi hizkuntza modu arruntean erabiltzeko gaitasuna (euskara eta gaztelania Euskadin).' }
    ]
  },

  'mod1_sub6': {
    themeId: 1,
    themeColor: 'blue',
    themeName: '1. Gaia: Europa & Euskadi',
    badge: '🌍 1. GAIA • URDINA (LH 6)',
    code: '1.6',
    title: '1.6 Lan Sektoreak eta Ekonomia',
    lead: 'Hiru sektore ekonomikoak, Europako banaketa portzentualaren grafikoa eta adibide praktikoak.',
    image: 'images/lan_sektoreak.jpg',
    prev: 'mod1_sub5',
    next: 'mod1_sub7',
    prevLabel: '← 1.5 Hizkuntzak',
    nextLabel: 'Hurrengoa: 1.7 Migrazioak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Lan-jarduera guztiak <span class="kw-term kw-blue">hiru sektore ekonomikotan</span> sailkatzen dira, ematen dituzten zerbitzu edo produktu moten arabera:
        </p>

        <!-- 3 SEKTOREAK -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 text-base">
          <div class="p-5 bg-emerald-50/80 rounded-2xl border border-emerald-200 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-2xl">🌱</span>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-200 text-emerald-800">%4 Europan</span>
            </div>
            <h4 class="text-lg font-black text-emerald-950">1. Lehen Sektorea</h4>
            <p class="text-gray-700 text-sm">
              <strong>Naturatik lehengaiak eta elikagaiak zuzenean eskuratzen dituena.</strong>
            </p>
            <div class="pt-2 border-t border-emerald-200 text-xs text-emerald-900">
              <strong>Adibideak:</strong> Nekazaritza (garia, barazkiak), abeltzaintza (behiak, ardiak), arrantza (Bermeo, Ondarroa), basogintza (egurra) eta meatzaritza.
            </div>
          </div>

          <div class="p-5 bg-amber-50/80 rounded-2xl border border-amber-200 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-2xl">🏭</span>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-200 text-amber-800">%24 Europan</span>
            </div>
            <h4 class="text-lg font-black text-amber-950">2. Bigarren Sektorea</h4>
            <p class="text-gray-700 text-sm">
              <strong>Lehengaiak eraldatu eta produktu landuak fabrikatzen dituena.</strong>
            </p>
            <div class="pt-2 border-t border-amber-200 text-xs text-amber-900">
              <strong>Adibideak:</strong> Industriak eta eraikuntza: elikagai-industria, ehungintza (arropak), automozioa (Mercedes Gasteizen), metalurgia eta etxegintza.
            </div>
          </div>

          <div class="p-5 bg-blue-50/80 rounded-2xl border border-blue-200 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-2xl">🩺</span>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-200 text-blue-800">%72 Europan (Nagusia)</span>
            </div>
            <h4 class="text-lg font-black text-blue-950">3. Hirugarren Sektorea</h4>
            <p class="text-gray-700 text-sm">
              <strong>Zerbitzuak ematen dituzten jarduerez osatua. Ez da produkturik sortzen, pertsonei zerbitzuak ematen zaizkie.</strong>
            </p>
            <div class="pt-2 border-t border-blue-200 text-xs text-blue-900">
              <strong>Adibideak:</strong> Irakasleak, medikuak, erizainak, dendariak, garraiolariak, gidariak, informatikariak eta turismoa.
            </div>
          </div>
        </div>

        <div class="p-4 bg-blue-100/70 rounded-2xl border border-blue-300 text-base font-bold text-blue-950 flex items-center gap-3">
          <span class="text-2xl">⭐</span>
          <div>Europan gehien nagusitzen den sektorea <u>HIRUGARREN SEKTOREA</u> da (langileen %72 inguru).</div>
        </div>

        <!-- GRAFIKO INTERAKTIBOA: LAN SEKTOREAK EUROPAN -->
        <div class="p-6 bg-white rounded-3xl border-2 border-blue-200 shadow-sm space-y-6">
          <div class="text-center space-y-1">
            <span class="text-xs font-black uppercase tracking-wider text-blue-600">FITXAKO DATU KURRIKULARRAK</span>
            <h3 class="text-xl sm:text-2xl font-black text-gray-900 font-title">📊 Lan Sektoreen Banaketa Europan</h3>
            <p class="text-sm text-gray-600">Ikusi portzentaje bakoitzaren pisua gizartean:</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <!-- DONUT GRAFIKOA SVG -->
            <div class="flex justify-center">
              <svg width="220" height="220" viewBox="0 0 42 42" class="donut-chart">
                <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#e5e7eb" stroke-width="6"></circle>
                <!-- Hirugarren Sektorea: %72 (stroke-dasharray: 72 28, offset: 25) -->
                <circle class="donut-segment cursor-pointer transition-all hover:opacity-80" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#2563eb" stroke-width="6" stroke-dasharray="72 28" stroke-dashoffset="25"></circle>
                <!-- Bigarren Sektorea: %24 (stroke-dasharray: 24 76, offset: -47) -->
                <circle class="donut-segment cursor-pointer transition-all hover:opacity-80" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#f59e0b" stroke-width="6" stroke-dasharray="24 76" stroke-dashoffset="-47"></circle>
                <!-- Lehen Sektorea: %4 (stroke-dasharray: 4 96, offset: -71) -->
                <circle class="donut-segment cursor-pointer transition-all hover:opacity-80" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#10b981" stroke-width="6" stroke-dasharray="4 96" stroke-dashoffset="-71"></circle>
                <g class="chart-text">
                  <text x="50%" y="45%" class="chart-number" text-anchor="middle" font-size="6" font-weight="bold" fill="#1e3a8a">100%</text>
                  <text x="50%" y="60%" class="chart-label" text-anchor="middle" font-size="2.5" fill="#6b7280">Europa</text>
                </g>
              </svg>
            </div>

            <!-- BARRAS Y LEYENDA -->
            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-sm font-bold text-gray-800 mb-1">
                  <span class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-blue-600 inline-block"></span> Hirugarren Sektorea (Zerbitzuak):</span>
                  <span class="text-blue-600">%72</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-3">
                  <div class="bg-blue-600 h-3 rounded-full" style="width: 72%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-sm font-bold text-gray-800 mb-1">
                  <span class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span> Bigarren Sektorea (Industria):</span>
                  <span class="text-amber-600">%24</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-3">
                  <div class="bg-amber-500 h-3 rounded-full" style="width: 24%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-sm font-bold text-gray-800 mb-1">
                  <span class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span> Lehen Sektorea (Nekazaritza):</span>
                  <span class="text-emerald-600">%4</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-3">
                  <div class="bg-emerald-500 h-3 rounded-full" style="width: 4%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- JOKO INTERAKTIBOA: KATEGORIATU LANBIDEA -->
          <div class="p-5 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
            <h4 class="text-base font-bold text-gray-900 flex items-center gap-2">
              <span>🎯</span> <span>Praktikatu: Zein sektoretakoa da lanbide hau?</span>
            </h4>
            <div id="job-quiz-box" class="space-y-3">
              <div class="p-4 bg-white rounded-xl border border-gray-200 flex items-center justify-between">
                <span id="job-name" class="font-bold text-lg text-gray-900">🚜 Baserritarra</span>
                <div class="flex gap-2">
                  <button onclick="app.checkJobSector('lehena')" class="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs hover:bg-emerald-200">1. Lehena</button>
                  <button onclick="app.checkJobSector('bigarrena')" class="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 font-bold text-xs hover:bg-amber-200">2. Bigarrena</button>
                  <button onclick="app.checkJobSector('hirugarrena')" class="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs hover:bg-blue-200">3. Hirugarrena</button>
                </div>
              </div>
              <div id="job-feedback" class="text-xs font-bold text-center"></div>
            </div>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Lehengaia', desc: 'Naturatik zuzenean lortzen den materiala, ondoren beste produktu bat fabrikatzeko erabili ohi dena (adib. egurra, esnea, mineralak).' },
      { term: 'Produktu Landua', desc: 'Industrian lehengaiak eraldatu ondoren lortutako produktua, kontsumitzeko prest dagoena (adib. altzariak, gazta, autoak).' },
      { term: 'Lehen Sektorea', desc: 'Lurretik eta itsasotik baliabideak eskuratzen dituzten lanbideak (nekazaritza, abeltzaintza, arrantza).' },
      { term: 'Bigarren Sektorea', desc: 'Lehengaiak eraldatzen dituzten fabrikak, tailerrak eta eraikuntza biltzen dituen sektorea.' },
      { term: 'Hirugarren Sektorea', desc: 'Ondasun fisikorik sortu gabe pertsonei zerbitzuak ematen dizkieten lanbideak (hezkuntza, osasuna, garraioa).' },
      { term: 'Biztanleria Aktiboa', desc: 'Lanean ari diren edo lan egiteko adinean lana bilatzen ari diren pertsona guztien multzoa.' }
    ]
  },

  'mod1_sub7': {
    themeId: 1,
    themeColor: 'blue',
    themeName: '1. Gaia: Europa & Euskadi',
    badge: '🌍 1. GAIA • URDINA (LH 6)',
    code: '1.7',
    title: '1.7 Migrazioak eta Elkarbizitza',
    lead: 'Migrazio motak, zergatik emigratzen dugun (4 arrazoiak), "Nondik gatoz" eta gure gelako aniztasuna.',
    image: 'images/migrazioak_elkarbizitza.jpg',
    prev: 'mod1_sub6',
    next: 'mod1_mindmap',
    prevLabel: '← 1.6 Lan Sektoreak',
    nextLabel: 'Hurrengoa: 1. Gaiaren Buru-Mapa →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          <span class="kw-term kw-blue">Migrazioak</span> jendeak leku batetik beste leku batera bizitzera joateko mugimendua da. Pertsonak betidanik mugitu izan dira munduan zehar bizitza hobe baten bila.
        </p>

        <!-- BI MOTA -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-base sm:text-lg">
          <div class="p-5 bg-blue-50/70 rounded-2xl border border-blue-200 space-y-2">
            <span class="text-3xl">🧳</span>
            <h4 class="text-xl font-bold text-blue-950"><span class="kw-term kw-blue">Inmigrantea</span></h4>
            <p class="text-gray-700 text-sm sm:text-base">
              <strong>Leku berri batera etortzea da.</strong> Adibidez, beste herrialde batetik Euskadira bizitzera heltzen den pertsona inmigrantea da guretzat.
            </p>
          </div>

          <div class="p-5 bg-indigo-50/70 rounded-2xl border border-indigo-200 space-y-2">
            <span class="text-3xl">🛫</span>
            <h4 class="text-xl font-bold text-indigo-950"><span class="kw-term kw-blue">Emigrantea</span></h4>
            <p class="text-gray-700 text-sm sm:text-base">
              <strong>Bere jatorrizko lekutik leku berri batera joatea da.</strong> Adibidez, euskal herritar bat atzerrira bizitzera edo lan egitera badoa, emigrantea da.
            </p>
          </div>
        </div>

        <!-- 4 ARRAZOIAK -->
        <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900 mt-6">❓ Zergatik Emigratzen du Jendeak? (4 Arrazoi Nagusiak):</h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 text-base">
          <div class="p-5 bg-white rounded-2xl border border-blue-200 shadow-sm space-y-2">
            <h4 class="text-lg font-black text-blue-900 flex items-center gap-2">
              <span>💼</span> <span>1. Lana eta Ekonomia</span>
            </h4>
            <p class="text-gray-700 text-sm">
              Pertsona batzuek ez dute lanik aurkitzen beren bizilekuan, edo lan hobea eta bizi-baldintza duinak lortu nahi dituzte familiarentzat.
            </p>
          </div>

          <div class="p-5 bg-white rounded-2xl border border-blue-200 shadow-sm space-y-2">
            <h4 class="text-lg font-black text-blue-900 flex items-center gap-2">
              <span>🎓</span> <span>2. Ikasketak</span>
            </h4>
            <p class="text-gray-700 text-sm">
              Ikasle batzuk beren herrialdeko edo beste herrialde batzuetako hirietara joaten dira ikastera (unibertsitateetara, lanbide heziketara edo beketara).
            </p>
          </div>

          <div class="p-5 bg-white rounded-2xl border border-blue-200 shadow-sm space-y-2">
            <h4 class="text-lg font-black text-blue-900 flex items-center gap-2">
              <span>🌋</span> <span>3. Natura-Hondamendiak</span>
            </h4>
            <p class="text-gray-700 text-sm">
              Uholde bat, lurrikara bat, lehorte larria edo klima-aldaketaren ondorioek etxeak eta uztak suntsitzen dituztenean, pertsonek beren lurra utzi behar izaten dute.
            </p>
          </div>

          <div class="p-5 bg-white rounded-2xl border border-blue-200 shadow-sm space-y-2">
            <h4 class="text-lg font-black text-blue-900 flex items-center gap-2">
              <span>🕊️</span> <span>4. Gerrak eta Indarkeria</span>
            </h4>
            <p class="text-gray-700 text-sm">
              Pertsona batzuek beren etxeetatik ihes egin behar dute, familiarekin bakean eta indarkeriarik gabe bizitzeko leku segurua bilatzeko (<span class="kw-term kw-blue">errefuxiatuak</span>).
            </p>
          </div>
        </div>

        <!-- NONDIK GATOZ ETA GELAKO ELKARBIZITZA -->
        <div class="p-6 bg-emerald-50/80 rounded-2xl border-2 border-emerald-200 space-y-4">
          <div class="flex items-center gap-3">
            <span class="text-3xl">🤝</span>
            <div>
              <h4 class="text-xl font-black text-emerald-950">NONDIK GATOZ? Gelako Elkarrizketa eta Enpatia</h4>
              <p class="text-xs font-bold text-emerald-800 uppercase tracking-wider">Gizarte anitza eta abegitsua</p>
            </div>
          </div>
          
          <p class="text-gray-800 text-base sm:text-lg leading-relaxed">
            Kanpotik datorren batentzat ez da batere erraza bere herria, etxea, lagunak eta kultura atzean uztea. Horregatik, <strong>harrera adeitsua, enpatia eta elkartasuna</strong> dira gure gelako eta gure herriko balio nagusiak.
          </p>

          <div class="p-4 bg-white rounded-xl border border-emerald-100 text-sm sm:text-base space-y-2">
            <strong class="text-emerald-950 block">💡 Hausnartu gelan:</strong>
            <ul class="list-disc list-inside space-y-1 text-gray-700">
              <li>Zure gurasoak edo aiton-amonak non jaio ziren? Zergatik mugitu ziren?</li>
              <li>Ezagutzen duzu zure gelan edo auzoan beste herrialde batetik etorritako lagunik?</li>
              <li>Euskadira heltzen denean, bi hizkuntza ezagutuko ditu: <strong>euskara eta gaztelania</strong>. Nola lagun diezaiokegu euskaraz ikasten eta parte hartzen?</li>
            </ul>
          </div>
        </div>

        <!-- DEMOGRAFIA ARIKETA FORMULAK -->
        <div class="p-5 bg-blue-50/80 rounded-2xl border border-blue-200 text-sm sm:text-base space-y-2">
          <h4 class="font-bold text-blue-950">📊 Demografia Eragiketak (Fitxako Ariketa):</h4>
          <p class="text-gray-700">
            Lurralde bateko biztanleriaren aldaketa zehatza kalkulatzeko bi saldoak erabiltzen dira:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 font-semibold text-gray-900 pt-2">
            <div class="p-3 bg-white rounded-xl border border-blue-100">• <strong>Saldo Naturala:</strong> Jaiotzak - Heriotzak</div>
            <div class="p-3 bg-white rounded-xl border border-blue-100">• <strong>Migrazio Saldoa:</strong> Immigranteak - Emigranteak</div>
          </div>
          <div class="p-3 bg-blue-600 text-white rounded-xl text-center font-bold">
            Biztanleriaren Hazkunde Erreala = Saldo Naturala + Migrazio Saldoa
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Migrazioa', desc: 'Pertsona batek edo talde batek bere bizilekua aldatu eta beste herrialde edo eskualde batera joateko mugimendua.' },
      { term: 'Inmigrazioa', desc: 'Norberaren herrialdera beste leku batetik bizitzera eta lan egitera etortzen diren pertsonen iritsiera.' },
      { term: 'Emigrazioa', desc: 'Pertsona batek bere jaioterria edo jatorrizko lurraldea utzi eta kanpora joateko ekintza.' },
      { term: 'Errefuxiatua', desc: 'Gerra, jazarpen edo indarkeriarengatik bere herrialdetik ihes egitera behartuta dagoen pertsona babes eske.' },
      { term: 'Elkarbizitza', desc: 'Kultura, jatorri eta iritzi desberdineko pertsonen artean bakean, errespetuan eta harmonian bizitzeko gaitasuna.' },
      { term: 'Enpatia', desc: 'Beste pertsona baten lekuan jartzeko eta bere sentimenduak zein zailtasunak ulertzeko gaitasuna.' }
    ]
  },

  // --------------------------------------------------------------------------
  // 2. GAIA: IZAKI BIZIDUNEN EGITURA ETA UGALKETA (BERDEA)
  // --------------------------------------------------------------------------
  'mod2_sub1': {
    themeId: 2,
    themeColor: 'emerald',
    themeName: '2. Gaia: Izaki Bizidunak',
    badge: '🔬 2. GAIA • BERDEA (LH 6)',
    code: '2.1',
    title: '2.1 Izaki Bizidunen Antolaketa Mailak',
    lead: 'Zelulatik organismo osoraino: bizi-unitate txikienetik aparatu eta sistema konplexuen hierarkiaraino.',
    image: 'images/zelula_antolaketa.jpg',
    prev: 'home',
    next: 'mod2_sub2',
    prevLabel: '← Gaien Menua',
    nextLabel: 'Hurrengoa: 2.2 Zelulak & Organuluak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          <span class="kw-term kw-emerald">Izaki bizidun zelulaniztunen</span> osagai diren zelulak elkartu egiten dira eta <span class="kw-term kw-emerald">ehunak</span>, <span class="kw-term kw-emerald">organoak</span>, <span class="kw-term kw-emerald">aparatuak</span> eta sistemak osatzen dituzte. Izaki bizidunen egituraketa ulertzeko, antolaketa-maila desberdinak bereizten ditugu txikienetik handienera:
        </p>

        <!-- ANTOLAKETA MAILAK: GOITIK BEHERA ANTOLATUTAKO PARAGRAFO ZABALAK -->
        <div class="flex flex-col gap-4 my-6 text-base sm:text-lg">
          <!-- 1. ZELULAK -->
          <div class="p-6 bg-emerald-50/80 rounded-3xl border-2 border-emerald-200 hover:border-emerald-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">1</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-emerald-950 flex items-center gap-2">
                <span>🔬</span> 1. Maila: Zelulak (Bizi-unitate txikiena)
              </h4>
              <p class="text-gray-700 leading-relaxed">
                <span class="kw-term kw-emerald">Zelula</span> bizi-unitaterik txikiena da, bere kabuz elikatu, erlazionatu eta ugaltzeko ahalmena duena. Izaki bizidunen artean, batzuk <span class="kw-term kw-emerald">zelulabakarrak</span> dira (bakterioak, amebak edo legamiak, zelula bakar batez osatuak), eta beste batzuk <span class="kw-term kw-emerald">zelulanitzak</span> dira (landareak, animaliak eta gizakiak, milioika zelula espezializatuz osatuak).
              </p>
            </div>
          </div>

          <!-- 2. EHUNAK -->
          <div class="p-6 bg-emerald-50/80 rounded-3xl border-2 border-emerald-200 hover:border-emerald-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">2</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-emerald-950 flex items-center gap-2">
                <span>🧫</span> 2. Maila: Ehunak (Zelula espezializatuen elkartea)
              </h4>
              <p class="text-gray-700 leading-relaxed">
                <span class="kw-term kw-emerald">Mota bereko zelulak</span> eta egitura berdina dutenak elkartzen direnean, ehunak osatzen dira funtzio jakin eta komun bat betetzeko. Giza gorputzean, adibidez, <span class="kw-term kw-emerald">gihar-ehuna</span> (mugimendua sortzeko uzkurtzen dena), <span class="kw-term kw-emerald">epitelio-ehuna</span> (azala eta barne-organoak estaltzen dituena), hezur-ehuna eta nerbio-ehuna ditugu. Landareetan ere badaude ehun bereziak: epidermisa, parenkima edo ehun eroaleak (xilema eta floema).
              </p>
            </div>
          </div>

          <!-- 3. ORGANOAK -->
          <div class="p-6 bg-emerald-50/80 rounded-3xl border-2 border-emerald-200 hover:border-emerald-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">3</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-emerald-950 flex items-center gap-2">
                <span>🫀</span> 3. Maila: Organoak (Askotariko ehunen elkarlana)
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Funtzio zehatz eta konplexuago bat betetzeko <span class="kw-term kw-emerald">askotariko ehunak elkartu</span> eta modu koordinatuan lan egiten dutenean, organo bat sortzen da. Adibidez, <span class="kw-term kw-emerald">urdaila</span> organo bat da, ehun epitelialez (barruko babesa), gihar-ehunez (janaria birrintzeko mugimendua) eta nerbio-ehunez (informazioa garunera bidaltzeko) osatua. Beste organo ezagun batzuk dira bihotza, birikak, gibela, begiak edo garuna.
              </p>
            </div>
          </div>

          <!-- 4. APARATUAK ETA SISTEMAK -->
          <div class="p-6 bg-emerald-50/80 rounded-3xl border-2 border-emerald-200 hover:border-emerald-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">4</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-emerald-950 flex items-center gap-2">
                <span>🧍</span> 4. Maila: Aparatuak eta Sistemak (Organoen koordinazioa)
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Bizitzako helburu nagusi bat lortzeko elkarrekin koordinatzen diren <span class="kw-term kw-emerald">organo-multzoei</span> aparatuak edo sistemak deitzen zaie. Adibidez, <span class="kw-term kw-emerald">digestio-aparatua</span> ahoak, hestegorriak, urdailak, hesteek eta pankreak osatzen dute elikagaiak xurgatzeko. Beste aparatu nagusiak dira zirkulazio-aparatua (odola eta oxigenoa banatzeko), arnas aparatua (arnasa hartzeko), iraitz-aparatua (hondakinak kanporatzeko), nerbio-sistema eta lokomozio-aparatua.
              </p>
            </div>
          </div>

          <!-- 5. ORGANISMO OSOA -->
          <div class="p-6 bg-white rounded-3xl border-2 border-emerald-400 shadow-md flex flex-col sm:flex-row items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">5</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-emerald-950 flex items-center gap-2">
                <span>✨</span> 5. Maila Gorena: Organismo Osoa (Izaki bizidun integrala)
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Aparatu eta sistema guztiek aldi berean eta harmonia osoz lan egiten dutenean, <span class="kw-term kw-emerald">organismo independente osoa</span> osatzen dute: giza banakoa, zuhaitz bat edo animalia bat. Maila goren honetan, izakiak modu koordinatu eta autonomoan betetzen ditu hiru bizi-funtzioak: elikadura, harremana eta ugalketa.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Organismoa', desc: 'Bizi-funtzio guztiak modu koordinatu eta autonomoan burutzen dituen banakako izaki bizidun osoa.' },
      { term: 'Zelulabakarra', desc: 'Zelula bakar batez osatuta dagoen mikroskopio-mailako izaki biziduna (adibidez, bakterioak edo legamiak).' },
      { term: 'Zelulanitza', desc: 'Milioika zelula espezializatu elkartuz osatutako izaki bizidun konplexua (landareak, animaliak eta gizakia).' },
      { term: 'Antolaketa Maila', desc: 'Biologian materiak duen konplexutasun-eskala: zelulatik hasi eta organismo osoraino iristen dena.' },
      { term: 'Homeostasia', desc: 'Organismo batek bere barne-oreka egonkor mantentzeko duen gaitasuna, kanpoko aldaketak gorabehera.' }
    ]
  },

  'mod2_sub2': {
    themeId: 2,
    themeColor: 'emerald',
    themeName: '2. Gaia: Izaki Bizidunak',
    badge: '🔬 2. GAIA • BERDEA (LH 6)',
    code: '2.2',
    title: '2.2 Zelulak: Prokariotoak, Eukariotoak eta Organuluak',
    lead: 'Prokarioto vs eukariotoak, zelularen oinarrizko atalak eta landare zein animalia-zelulen berezitasunak.',
    image: 'images/zelula_motak.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=RLLovaIccr0',
    videoTitle: 'Zelula eukariotoak eta prokariotoak (Egitura eta Funtzioak)',
    videoAuthor: 'Zientzia Euskaraz',
    prev: 'mod2_sub1',
    next: 'mod2_sub3',
    prevLabel: '← 2.1 Antolaketa Mailak',
    nextLabel: 'Hurrengoa: 2.3 Ehunak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Zelulak, izaki bizidunen parterik txikienak dira eta hiru bizi funtzioak betetzen dituzte: <span class="kw-term kw-emerald">elikatu</span>, <span class="kw-term kw-emerald">erlazionatu</span> eta <span class="kw-term kw-emerald">ugaldu</span> egiten dira. Zelula guztiak bi talde handitan sailka daitezke:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-base sm:text-lg">
          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 space-y-3">
            <span class="text-3xl block">🦠</span>
            <h4 class="text-xl font-bold text-emerald-950">1. Zelula Prokariotoak</h4>
            <p class="text-gray-700">
              Ez dute <span class="kw-term kw-emerald">nukleorik</span>; material genetikoa (DNA) zitoplasman sakabanatuta dago. Ez dute mintzez inguratutako organulurik. Adibide nagusiak: <span class="kw-term kw-emerald">bakterioak</span>.
            </p>
          </div>

          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 space-y-3">
            <span class="text-3xl block">🧬</span>
            <h4 class="text-xl font-bold text-emerald-950">2. Zelula Eukariotoak</h4>
            <p class="text-gray-700">
              <span class="kw-term kw-emerald">Mintz batez bildutako nukleoa</span> eta organulu ugari dituzte. Material genetikoa nukleoaren barruan babestuta dago. Landareak, animaliak, onddoak eta protozooak eukariotoak dira.
            </p>
          </div>
        </div>

        <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900 mt-8">🧩 Zelularen 4 Zati Nagusiak:</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 text-base">
          <div class="p-5 bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-1.5">
            <strong class="text-emerald-900 font-bold block text-lg">🛡️ MINTZA</strong>
            <p class="text-gray-600">Zelula eta kanpoaldea bereizten du. Substantzien sarrera eta irteera kontrolatzen du.</p>
          </div>
          <div class="p-5 bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-1.5">
            <strong class="text-emerald-900 font-bold block text-lg">💧 ZITOPLASMA</strong>
            <p class="text-gray-600">Zelularen zati handiena da. Ura eta substantzia disolbatuak ditu, eta bertan daude organuluak.</p>
          </div>
          <div class="p-5 bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-1.5">
            <strong class="text-emerald-900 font-bold block text-lg">🧠 NUKLEOA</strong>
            <p class="text-gray-600">Zelularen aginte-zentroa da. Funtzionamendu osoa gidatzen du eta DNA heredagarria gordetzen du.</p>
          </div>
          <div class="p-5 bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-1.5">
            <strong class="text-emerald-900 font-bold block text-lg">⚙️ ORGANULUAK</strong>
            <p class="text-gray-600">Zitoplasman mota askotakoak daude (mitokondrioak, erribosomak...). Bakoitzak bizi-lan zehatz bat betetzen du.</p>
          </div>
        </div>

        <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900 mt-8">⚖️ Animalien Zelulak vs Landareen Zelulak:</h3>
        <div class="overflow-x-auto my-4">
          <table class="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-sm text-base">
            <thead>
              <tr class="bg-emerald-700 text-white font-bold">
                <th class="p-4 w-1/2">🐾 ANIMALIEN ZELULAK</th>
                <th class="p-4 w-1/2">🌿 LANDAREEN ZELULAK</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-emerald-100 bg-white">
              <tr class="hover:bg-emerald-50/50">
                <td class="p-4 text-gray-700">• Forma askotakoak: batzuk irregularrak eta baita erregularrak ere.</td>
                <td class="p-4 text-gray-700">• Handiagoak izaten dira eta forma erregularra dute, gehienek prisma forma.</td>
              </tr>
              <tr class="hover:bg-emerald-50/50">
                <td class="p-4 text-gray-700">• Txikiagoak dira tamainaz.</td>
                <td class="p-4 text-gray-700">• <span class="kw-term kw-emerald">Zelula-pareta</span> sendoa dute mintzaren kanpoko aldetik, zelulosazkoa.</td>
              </tr>
              <tr class="hover:bg-emerald-50/50">
                <td class="p-4 text-gray-700">• Ez dute kloroplastorik; heterotrofoak dira (beste bizidunetatik elikatu).</td>
                <td class="p-4 text-gray-700">• <span class="kw-term kw-emerald">Kloroplastoak</span> dituzte: klorofila dute fotosintesia egiteko eta elikagaia sortzeko.</td>
              </tr>
              <tr class="hover:bg-emerald-50/50">
                <td class="p-4 text-gray-700">• Bakuolo txikiak eta ugariak izan ohi dituzte.</td>
                <td class="p-4 text-gray-700">• <span class="kw-term kw-emerald">Bakuolo handi</span> bakarra dute, ura eta erreserbak biltzeko.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Prokariotoa', desc: 'Nukleorik ez duen zelula bakun eta antzinakoa (material genetikoa zitoplasman aske duena).' },
      { term: 'Eukariotoa', desc: 'Nukleo diferentziatua mintz nuklearraren bidez inguratuta duen zelula eboluzionatua.' },
      { term: 'Kloroplastoa', desc: 'Landare-zelulen organulua, klorofila pigmentua duena eguzki-argia harrapatu eta fotosintesia burutzeko.' },
      { term: 'Zelula-pareta', desc: 'Landare-zelulei gogortasuna, prisma forma eta babesa ematen dien zelulosazko kanpo-geruza.' },
      { term: 'Mitokondrioa', desc: 'Zelularen energia-zentrala: oxigenoa erabiliz arnasketa zelularra burutzen du eta energia (ATP) ekoizten du.' }
    ]
  },

  'mod2_sub3': {
    themeId: 2,
    themeColor: 'emerald',
    themeName: '2. Gaia: Izaki Bizidunak',
    badge: '🔬 2. GAIA • BERDEA (LH 6)',
    code: '2.3',
    title: '2.3 Ehunak: Animalien eta Landareen Ehunak',
    lead: 'Mota bereko zelulak elkartzen direnean ehunak osatzen dira funtzio bera betetzeko.',
    image: 'images/ehun_motak.jpg',
    prev: 'mod2_sub2',
    next: 'mod2_sub4',
    prevLabel: '← 2.2 Zelulak & Organuluak',
    nextLabel: 'Hurrengoa: 2.4 Organoak & Aparatuak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Mota bereko zelulak elkartzen direnean, <span class="kw-term kw-emerald">ehunak</span> osatzen dira. Ehun horiek funtzio bera betetzen dutenean, organo eta aparatu konplexuak sortzen dituzte; adibidez, <span class="kw-term kw-emerald">gihar-ehunei</span> esker, giharrak mugitu eta indarra egin dezakegu.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6 text-base sm:text-lg">
          <!-- ANIMALIA EHUNAK -->
          <div class="p-6 bg-emerald-50/70 rounded-3xl border-2 border-emerald-200 space-y-4">
            <h4 class="text-2xl font-black text-emerald-950 flex items-center gap-2">
              <span>🐾</span> ANIMALIA EHUNAK
            </h4>
            <div class="space-y-3">
              <div class="p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <strong class="text-emerald-900 block font-bold text-base">🦴 Hezur-ehunak (hezurrak):</strong>
                <p class="text-gray-700 text-sm mt-1">Kaltzioz eta fosforoz betetako zelulek osatzen dute; eskeletoari sendotasuna ematen diote eta organoak babesten dituzte.</p>
              </div>
              <div class="p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <strong class="text-emerald-900 block font-bold text-base">💪 Gihar-ehuna (giharrak):</strong>
                <p class="text-gray-700 text-sm mt-1">Zelula luzangak (zuntzak) uzkurtu eta erlaxatu egiten dira mugimendua sortzeko (bihotzekoa, eskeletikoa eta leuna).</p>
              </div>
              <div class="p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <strong class="text-emerald-900 block font-bold text-base">⚡ Nerbio-ehuna (nerbio-sistema):</strong>
                <p class="text-gray-700 text-sm mt-1">Neuronek osatzen dute; bulkada elektrikoak eta informazioa gorputz osoan garraiatzen dituzte.</p>
              </div>
              <div class="p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <strong class="text-emerald-900 block font-bold text-base">🧈 Gantz-ehuna (koipea):</strong>
                <p class="text-gray-700 text-sm mt-1">Adipozitoek osatzen dute; energia-erreserbak gorde eta tenperaturaren kontrako isolatzaile termikoa da.</p>
              </div>
              <div class="p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <strong class="text-emerald-900 block font-bold text-base">🛡️ Ehun epiteliala (larruazala):</strong>
                <p class="text-gray-700 text-sm mt-1">Kanpoko azala eta barne-organoen mukosak estali eta kanpoko bakterio zein zaurietatik babesten ditu.</p>
              </div>
              <div class="p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <strong class="text-emerald-900 block font-bold text-base">🩸 Odol-ehuna (odola):</strong>
                <p class="text-gray-700 text-sm mt-1">Ehun likido berezia da: globulu gorriek oxigenoa daramate, zuriek gaixotasunei aurre egin eta plaketek zauriak ixten dituzte.</p>
              </div>
            </div>
          </div>

          <!-- LANDARE EHUNAK -->
          <div class="p-6 bg-teal-50/70 rounded-3xl border-2 border-teal-200 space-y-4">
            <h4 class="text-2xl font-black text-teal-950 flex items-center gap-2">
              <span>🌿</span> LANDARE EHUNAK
            </h4>
            <div class="space-y-3">
              <div class="p-4 bg-white rounded-2xl border border-teal-100 shadow-sm">
                <strong class="text-teal-900 block font-bold text-base">🍃 Epidermisa:</strong>
                <p class="text-gray-700 text-sm mt-1">Hostoen eta zurtoin gazteen kanpoko geruza fina da; landarea deshidrataziotik eta eguralditik babesten du.</p>
              </div>
              <div class="p-4 bg-white rounded-2xl border border-teal-100 shadow-sm">
                <strong class="text-teal-900 block font-bold text-base">🪵 Suberra (zuhaitzaren azala):</strong>
                <p class="text-gray-700 text-sm mt-1">Zuhaitzen zurtoin zaharretan eta enborretan sortzen den kortxozko azal gogorra, babes sendoa ematen duena.</p>
              </div>
              <div class="p-4 bg-white rounded-2xl border border-teal-100 shadow-sm">
                <strong class="text-teal-900 block font-bold text-base">☀️ Parenkimak:</strong>
                <p class="text-gray-700 text-sm mt-1">Landarearen gorputz nagusia osatzen dute; fotosintesia egiteko (parenkima klorofilikoa) eta substantziak (ura, almidoia) gordetzeko balio dute.</p>
              </div>
              <div class="p-4 bg-white rounded-2xl border border-teal-100 shadow-sm">
                <strong class="text-teal-900 block font-bold text-base">🚰 Ehun eroaleak:</strong>
                <p class="text-gray-700 text-sm mt-1">Substantziak garraiatzeko hodiak dira: <span class="kw-term kw-emerald">xilemak</span> izerdi landugabea (ura eta gatz mineralak) erroetatik hostoetara darama, eta <span class="kw-term kw-emerald">floemak</span> izerdi landua landare osoan zabaltzen du.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Ehuna', desc: 'Funtzio espezifiko bera betetzeko elkartuta dauden antzeko zelulen multzoa.' },
      { term: 'Xilema', desc: 'Ura eta gatz mineralak sustraietatik hostoetara gorantz garraiatzen dituzten hodi eroaleen multzoa.' },
      { term: 'Floema', desc: 'Fotosintesian sortutako elikagaiak (izerdi landua) hostoetatik landare osora banatzen dituen ehun eroalea.' },
      { term: 'Adipozitoa', desc: 'Gantz-ehunean koipea biltzeaz arduratzen den zelula espezializatua.' },
      { term: 'Plaketa', desc: 'Odolean dauden zelula-zatiak, odola gatzatu eta odoljarioak eteteko zirkulatzen dutenak.' }
    ]
  },

  'mod2_sub4': {
    themeId: 2,
    themeColor: 'emerald',
    themeName: '2. Gaia: Izaki Bizidunak',
    badge: '🔬 2. GAIA • BERDEA (LH 6)',
    code: '2.4',
    title: '2.4 Organoak eta Aparatuak: Giza Gorputza',
    lead: 'Funtzio jakin bat duten ehun-bildumak (organoak) eta taldean koordinatzen diren aparatu nagusiak.',
    image: 'images/organoak_aparatuak.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=-aF6aZFjFRU',
    videoTitle: 'Digestio-prozesua eta Giza Gorputzeko Aparatuak',
    videoAuthor: 'Ainho Badbioteacher',
    prev: 'mod2_sub3',
    next: 'mod2_sub5',
    prevLabel: '← 2.3 Ehunak',
    nextLabel: 'Hurrengoa: 2.5 Bost Zentzumenak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          <span class="kw-term kw-emerald">Funtzio jakin bat betetzen duten ehun-bildumak, organoak dira</span>. Bihotza, giltzurrunak, birikak eta urdaila organoen adibide garbiak dira. Organoak elkarrekin modu koordinatuan antolatzen direnean, giza gorputzeko <span class="kw-term kw-emerald">aparatuak eta sistemak</span> sortzen dituzte:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6 text-base">
          <div class="p-5 bg-white rounded-3xl border-2 border-emerald-200 shadow-sm space-y-2 hover:shadow-md transition-all">
            <span class="text-3xl block">🍎</span>
            <h4 class="text-lg font-black text-emerald-950">1. Digestio-aparatua</h4>
            <p class="text-gray-600">Jandako elikagaiak xehatu, mantenugaiak xurgatu eta odolera bidaltzen ditu. Hondakinak gorotz bidez kanporatzen ditu.</p>
            <div class="text-xs text-emerald-800 font-bold bg-emerald-50 p-2 rounded-xl">Organoak: Urdaila, Hesteak, Gibela, Pankrea.</div>
          </div>

          <div class="p-5 bg-white rounded-3xl border-2 border-emerald-200 shadow-sm space-y-2 hover:shadow-md transition-all">
            <span class="text-3xl block">🫁</span>
            <h4 class="text-lg font-black text-emerald-950">2. Arnasketa-aparatua</h4>
            <p class="text-gray-600">Airetik oxigenoa ($O_2$) hartzen du eta zeluletako hondakin toxikoa den karbono dioxidoa ($CO_2$) kanporatzen du.</p>
            <div class="text-xs text-emerald-800 font-bold bg-emerald-50 p-2 rounded-xl">Organoak: Sudurra, Trakea, Birikak, Bronkioak.</div>
          </div>

          <div class="p-5 bg-white rounded-3xl border-2 border-emerald-200 shadow-sm space-y-2 hover:shadow-md transition-all">
            <span class="text-3xl block">❤️</span>
            <h4 class="text-lg font-black text-emerald-950">3. Zirkulazio-aparatua</h4>
            <p class="text-gray-600">Bihotzaren taupadei esker odola gorputz osora ponpatzen du, oxigenoa eta elikagaiak zelula guztietara garraiatuz.</p>
            <div class="text-xs text-emerald-800 font-bold bg-emerald-50 p-2 rounded-xl">Organoak: Bihotza, Arteria nagusiak, Zainak.</div>
          </div>

          <div class="p-5 bg-white rounded-3xl border-2 border-emerald-200 shadow-sm space-y-2 hover:shadow-md transition-all">
            <span class="text-3xl block">🚽</span>
            <h4 class="text-lg font-black text-emerald-950">4. Iraitz-aparatua</h4>
            <p class="text-gray-600">Odolean sortutako hondakinak giltzurrunetan iragazten ditu eta gernuaren (txizaren) bitartez kanporatzen ditu.</p>
            <div class="text-xs text-emerald-800 font-bold bg-emerald-50 p-2 rounded-xl">Organoak: Giltzurrunak, Ureterrak, Maskuria, Uretra.</div>
          </div>
        </div>

        <!-- ARIKETA INTERAKTIBOA: APARATUAK LOTU -->
        <div id="organ-quiz-container" class="g-card rounded-[28px] p-6 sm:p-8 bg-emerald-900 text-white shadow-xl space-y-4 my-8">
          <div class="flex items-center gap-3">
            <span class="text-3xl">🎯</span>
            <div>
              <h4 class="text-xl sm:text-2xl font-black font-title">Ariketa Azkarra: Zein aparatuk egiten du funtzio hau?</h4>
              <p class="text-xs sm:text-sm text-emerald-200">Klikatu erantzun zuzenean zure jakintza egiaztatzeko:</p>
            </div>
          </div>

          <div class="bg-emerald-800/80 p-5 rounded-2xl border border-emerald-700 space-y-3">
            <p id="organ-question" class="text-lg font-bold text-yellow-300">
              Galdera: "Odola ponpatzen du gorputz osora oxigenoa eta mantenugaiak eramateko..."
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <button onclick="app.checkOrganAnswer('digestio')" class="organ-opt px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 font-bold text-sm transition-all text-center">Digestio-aparatua</button>
              <button onclick="app.checkOrganAnswer('zirkulazio')" class="organ-opt px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 font-bold text-sm transition-all text-center">Zirkulazio-aparatua</button>
              <button onclick="app.checkOrganAnswer('arnasketa')" class="organ-opt px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 font-bold text-sm transition-all text-center">Arnasketa-aparatua</button>
              <button onclick="app.checkOrganAnswer('iraitz')" class="organ-opt px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 font-bold text-sm transition-all text-center">Iraitz-aparatua</button>
            </div>
            <div id="organ-feedback" class="text-sm font-semibold pt-1 min-h-[24px]"></div>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Organoa', desc: 'Funtzio jakin bat betetzen duten ehun desberdinen bilkura egituratua (adib. bihotza, giltzurruna).' },
      { term: 'Aparatua / Sistema', desc: 'Bizi-funtzio nagusi bat koordinatuta burutzen duten hainbat organoren multzoa.' },
      { term: 'Digestioa', desc: 'Jandako elikagai konplexuak mantenugai sinple bihurtzeko heste-traktuan egiten den prozesu kimiko eta mekanikoa.' },
      { term: 'Iraitz-funtzioa', desc: 'Odolean sortutako hondakin toxikoak eta gehiegizko ura iragazi eta gernu bidez kanporatzeko mekanismoa.' },
      { term: 'Taupada', desc: 'Bihotz-muskuluaren uzkurdura erritmikoa, odola arteria nagusietan zehar indarrez bultzatzen duena.' }
    ]
  },

  'mod2_sub5': {
    themeId: 2,
    themeColor: 'emerald',
    themeName: '2. Gaia: Izaki Bizidunak',
    badge: '🔬 2. GAIA • BERDEA (LH 6)',
    code: '2.5',
    title: '2.5 Erlazio Funtzioa: Bost Zentzumenak',
    lead: 'Kanpoko munduarekin lotzen gaituzten bost organoak, hartzaile espezializatuak eta haien atalak.',
    image: 'images/bost_zentzumenak.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=TLdig8NpzIo',
    videoTitle: 'Bost Zentzumenak eta Erlazio-funtzioa',
    videoAuthor: 'Txulalai',
    prev: 'mod2_sub4',
    next: 'mod2_sub6',
    prevLabel: '← 2.4 Organoak & Aparatuak',
    nextLabel: 'Hurrengoa: 2.6 Nerbio-Sistema →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          <span class="kw-term kw-emerald">Erlazio funtzioa</span> kanpoko munduarekin erlazionatzean datza eta gure gorputzarekin: informazioa bildu (<span class="kw-term kw-emerald">zentzumenak</span> eta <span class="kw-term kw-emerald">nerbio-sistema</span>) eta informazio horri erantzuna ematen diogu (<span class="kw-term kw-emerald">lokomozio-aparatua</span>).
        </p>

        <p>
          Zentzumenak kanpoko informazioa jasotzeko erabiltzen ditugun mekanismoak dira. Bost dira, eta bakoitzak organo espezifiko bat eta atal zehatzak ditu:
        </p>

        <div class="space-y-4 my-6 text-base sm:text-lg">
          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row gap-5 items-start">
            <span class="text-4xl p-3 bg-white rounded-2xl shadow-sm">👁️</span>
            <div class="space-y-1.5 flex-1">
              <h4 class="text-xl font-bold text-emerald-950">1. IKUSMENA (Organoa: Begia)</h4>
              <p class="text-gray-700">Argia eta formak hautematen ditu. <strong>Atalak:</strong> <span class="kw-term kw-emerald">kornea</span> (kanpoko estalki gardena), <span class="kw-term kw-emerald">pupila</span> (argia sartzeko zulo beltza), <span class="kw-term kw-emerald">kristalinoa</span> (irudiak enfokatzeko lentea), <span class="kw-term kw-emerald">erretina</span> (argi-hartzaileak dituen barne-pantaila) eta <span class="kw-term kw-emerald">nerbio optikoa</span> (seinalea garunera bidaltzen duena).</p>
            </div>
          </div>

          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row gap-5 items-start">
            <span class="text-4xl p-3 bg-white rounded-2xl shadow-sm">👂</span>
            <div class="space-y-1.5 flex-1">
              <h4 class="text-xl font-bold text-emerald-950">2. ENTZUMENA (Organoa: Belarria)</h4>
              <p class="text-gray-700">Soinu-uhinak eta gorputzaren oreka jasotzen ditu. <strong>Atalak:</strong> Kanpoko belarria (<span class="kw-term kw-emerald">belarri-hegala</span>), erdiko belarria (<span class="kw-term kw-emerald">tinpanoa</span> eta hezurtxoen katea: mailua, ingudea, estriboa), barruko belarria (<span class="kw-term kw-emerald">barraskiloa</span>) eta entzumen-nerbioa.</p>
            </div>
          </div>

          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row gap-5 items-start">
            <span class="text-4xl p-3 bg-white rounded-2xl shadow-sm">👃</span>
            <div class="space-y-1.5 flex-1">
              <h4 class="text-xl font-bold text-emerald-950">3. USAIMENA (Organoa: Sudurra)</h4>
              <p class="text-gray-700">Aireko substantzia kimikoak eta usainak hautematen ditu. <strong>Atalak:</strong> <span class="kw-term kw-emerald">sudur-hobiak</span> (airea sartzeko zuloak), <span class="kw-term kw-emerald">pituitarioa</span> edo usaimen-epitelioa (usainak harrapatzen dituzten zelulak) eta usaimen-nerbioa.</p>
            </div>
          </div>

          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row gap-5 items-start">
            <span class="text-4xl p-3 bg-white rounded-2xl shadow-sm">👅</span>
            <div class="space-y-1.5 flex-1">
              <h4 class="text-xl font-bold text-emerald-950">4. DASTAMENA (Organoa: Mihia)</h4>
              <p class="text-gray-700">Janarien eta edarien zaporeak bereizten ditu: gozoa, gazia, garratza, mikatza eta umamia. <strong>Atalak:</strong> <span class="kw-term kw-emerald">dastamen-papilak</span> (mihiaren gainazalean zaporeak dastatzeko pikortxoak) eta dastamen-nerbioak.</p>
            </div>
          </div>

          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row gap-5 items-start">
            <span class="text-4xl p-3 bg-white rounded-2xl shadow-sm">✋</span>
            <div class="space-y-1.5 flex-1">
              <h4 class="text-xl font-bold text-emerald-950">5. UKIMENA (Organoa: Larruazala / Azala)</h4>
              <p class="text-gray-700">Formak, tenperaturak (beroa eta hotza), mina eta presioa sentitzen ditu. <strong>Atalak:</strong> <span class="kw-term kw-emerald">epidermisa</span> (kanpoko geruza), <span class="kw-term kw-emerald">dermisa</span> (hartzaile sentikorrak eta odol-hodiak) eta nerbio-bukaerak.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Erlazio Funtzioa', desc: 'Kanpoko zein barruko estimuluak hauteman, garunean aztertu eta erantzun egokiak emateko bizi-funtzioa.' },
      { term: 'Erretina', desc: 'Begiaren atzealdean dagoen ehun sentikorra; argia irudi elektriko bihurtzen du nerbio optikoarentzat.' },
      { term: 'Tinpanoa', desc: 'Belarrian soinu-uhinek eraginda bibratzen duen mintz mehea, soinua hezurtxoetara igarotzen duena.' },
      { term: 'Dastamen-papila', desc: 'Mihian dauden egitura mikroskopikoak, elikagaietako zapore kimikoak dastatzeko hartzaileak dituztenak.' },
      { term: 'Pituitarioa', desc: 'Sudur-hobien goialdean dagoen mukosa sentikorra, arnasten dugun aireko usainak hautematen dituena.' }
    ]
  },

  'mod2_sub6': {
    themeId: 2,
    themeColor: 'emerald',
    themeName: '2. Gaia: Izaki Bizidunak',
    badge: '🔬 2. GAIA • BERDEA (LH 6)',
    code: '2.6',
    title: '2.6 Nerbio-Sistema: Zentrala, Periferikoa eta Zirkuitua',
    lead: 'Entzefaloa, bizkarrezur-muina, nerbioak eta estimulutik erantzunera daraman 4 urratseko zirkuitua.',
    image: 'images/nerbio_sistema.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=5qsrvLXOgO8',
    videoTitle: 'Nerbio sistema: funtzionamendua eta atalak',
    videoAuthor: 'Fleming Villabona (4:58)',
    prev: 'mod2_sub5',
    next: 'mod2_sub7',
    prevLabel: '← 2.5 Bost Zentzumenak',
    nextLabel: 'Hurrengoa: 2.7 Lokomozio Aparatua →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Kanpoko mundua zentzumenen bitartez hautematen dugu. Hauek informazioa bildu eta <span class="kw-term kw-emerald">nerbio-sistema periferikoaren</span> bitartez, <span class="kw-term kw-emerald">nerbio-sistema zentralera</span> bidaltzen dute informazioa. Nerbio-sistema bi atal nagusitan banatzen da:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-base sm:text-lg">
          <!-- NSZ -->
          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 space-y-4">
            <h4 class="text-2xl font-black text-emerald-950 flex items-center gap-2">
              <span>🧠</span> 1. Nerbio-Sistema Zentrala (NSZ)
            </h4>
            <p class="text-gray-700">Entzefaloak eta bizkarrezur-muinak osatzen dute:</p>
            <div class="space-y-2.5">
              <div class="p-3 bg-white rounded-xl border border-emerald-100">
                <strong class="text-emerald-900 block">Garuna:</strong> Pentsamendua, hizkuntza, oroimena eta borondatezko mugimendu guztiak kontrolatzen ditu.
              </div>
              <div class="p-3 bg-white rounded-xl border border-emerald-100">
                <strong class="text-emerald-900 block">Zerebeloa:</strong> Gorputzaren oreka eta mugimenduen koordinazio fina gidatzen ditu.
              </div>
              <div class="p-3 bg-white rounded-xl border border-emerald-100">
                <strong class="text-emerald-900 block">Bizkarrezur-erraboila:</strong> Nahigabeko bizi-funtzioak zuzentzen ditu (bihotz-taupadak, arnasketa, digestioa).
              </div>
              <div class="p-3 bg-white rounded-xl border border-emerald-100">
                <strong class="text-emerald-900 block">Bizkarrezur-muina:</strong> Bizkarrezurraren barruan babestuta dago; erreflexu azkarrak kontrolatzen ditu eta entzefaloa nerbioekin lotzen du.
              </div>
            </div>
          </div>

          <!-- NSP -->
          <div class="p-6 bg-teal-50/70 rounded-3xl border border-teal-200 space-y-4">
            <h4 class="text-2xl font-black text-teal-950 flex items-center gap-2">
              <span>⚡</span> 2. Nerbio-Sistema Periferikoa (NSP)
            </h4>
            <p class="text-gray-700">
              Gorputz osora hedatzen diren <span class="kw-term kw-emerald">nerbio-sareek</span> osatzen dute:
            </p>
            <div class="space-y-2.5">
              <div class="p-3 bg-white rounded-xl border border-teal-100">
                <strong class="text-teal-900 block">Zentzumen-nerbioak:</strong> Zentzumenetatik jasotako mezuak eta estimuluak NSZra eramaten dituzte.
              </div>
              <div class="p-3 bg-white rounded-xl border border-teal-100">
                <strong class="text-teal-900 block">Nerbio motoreak:</strong> Garunak edo bizkarrezur-muinak hartutako aginduak eta erantzunak muskuluetara bidaltzen dituzte.
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900 mt-8">🔄 Estimulutik Erantzunera: 4 Urratsen Zirkuitua</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 text-base">
          <div class="p-5 bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-2">
            <div class="text-2xl font-black text-emerald-600">1️⃣</div>
            <strong class="text-gray-900 block font-bold">Estimulua Jaso</strong>
            <p class="text-gray-600 text-sm">Zentzumenek kanpoko seinalea hautematen dute (adibidez, baloi bat guregana datorrela ikusi).</p>
          </div>
          <div class="p-5 bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-2">
            <div class="text-2xl font-black text-emerald-600">2️⃣</div>
            <strong class="text-gray-900 block font-bold">Garunera Bidali</strong>
            <p class="text-gray-600 text-sm">Zentzumen-nerbioek seinale elektrikoa bidaltzen dute entzefalora berehalako abiaduran.</p>
          </div>
          <div class="p-5 bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-2">
            <div class="text-2xl font-black text-emerald-600">3️⃣</div>
            <strong class="text-gray-900 block font-bold">Erabakia Hartu</strong>
            <p class="text-gray-600 text-sm">Garunak informazioa aztertu eta erantzun egokia erabakitzen du (eskua luzatu baloia harrapatzeko).</p>
          </div>
          <div class="p-5 bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-2">
            <div class="text-2xl font-black text-emerald-600">4️⃣</div>
            <strong class="text-gray-900 block font-bold">Erantzuna Gauzatu</strong>
            <p class="text-gray-600 text-sm">Nerbio motoreek agindua lokomozio-aparatura (muskuluetara) bidali eta ekintza egiten da.</p>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Entzefaloa', desc: 'Garezurraren barruan dagoen organo-multzo nagusia: garuna, zerebeloa eta bizkarrezur-erraboila biltzen dituena.' },
      { term: 'Zerebeloa', desc: 'Entzefaloaren atzeko aldean dagoen organoa; oreka eta borondatezko mugimenduen doitasuna zaintzen du.' },
      { term: 'Bizkarrezur-muina', desc: 'Bizkarrezurrak babestutako kordoi nerbiotsua; erreflexuak kudeatu eta gorputzeko nerbioak garunarekin lotzen ditu.' },
      { term: 'Neuronak', desc: 'Nerbio-sistemako zelula espezializatuak; bulkada elektriko eta kimikoen bidez mezuak transmititzen dituzte.' },
      { term: 'Ekintza Erreflexua', desc: 'Arrisku baten aurrean bizkarrezur-muinak pentsatu gabe eragindako erantzun automatiko eta azkarra.' }
    ]
  },

  'mod2_sub7': {
    themeId: 2,
    themeColor: 'emerald',
    themeName: '2. Gaia: Izaki Bizidunak',
    badge: '🔬 2. GAIA • BERDEA (LH 6)',
    code: '2.7',
    title: '2.7 Lokomozio Aparatua: Eskeletoa eta Muskulatura',
    lead: 'Gorputzari forma eman eta mugitzeko ahalmena: hezur nagusiak, giharrak eta artikulazioak.',
    image: 'images/lokomozio_aparatua.jpg',
    prev: 'mod2_sub6',
    next: 'mod2_sub8',
    prevLabel: '← 2.6 Nerbio-Sistema',
    nextLabel: 'Hurrengoa: 2.8 Ugalketa Aparatuak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          <strong>Zer da?</strong> Gorputz-egituren multzoa da, gorputzari mugimenduak egiteko aukera ematen diona.
        </p>
        <p>
          <strong>Zein da bere funtzioa?</strong> Nerbio-sistemak ematen dituen erantzun askotan, mugimenduak egin behar dira, eta <span class="kw-term kw-emerald">lokomozio-aparatuak</span> ematen ditu erantzun horiek. Eskeletoak eta muskulaturak osatzen dute lokomozio-aparatua:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-base sm:text-lg">
          <!-- ESKELETOA -->
          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 space-y-3">
            <h4 class="text-2xl font-black text-emerald-950 flex items-center gap-2">
              <span>🦴</span> ESKELETOA (Hezurrak)
            </h4>
            <p class="text-gray-700 text-sm">206 hezurrek osatzen dute gure hezurdura. Gorputzari egitura eman eta barneko organo hauskorrak babesten dituzte:</p>
            <ul class="space-y-1.5 text-gray-800 text-sm">
              <li>• <strong>Burua:</strong> <span class="kw-term kw-emerald">Kopeta-hezurra</span>, <span class="kw-term kw-emerald">tenporala</span>, <span class="kw-term kw-emerald">masail-hezurra</span>.</li>
              <li>• <strong>Enborra:</strong> Bizkarrezurreko <span class="kw-term kw-emerald">ornoak</span>, <span class="kw-term kw-emerald">saihetsak</span>, bular-hezurra, <span class="kw-term kw-emerald">pelbisa</span>.</li>
              <li>• <strong>Besoak:</strong> <span class="kw-term kw-emerald">Humeroa</span>, <span class="kw-term kw-emerald">erradioa</span>, <span class="kw-term kw-emerald">kubitua</span>.</li>
              <li>• <strong>Hankak:</strong> <span class="kw-term kw-emerald">Femurra</span> (gorputzeko luzeena), <span class="kw-term kw-emerald">belaunburua</span>, <span class="kw-term kw-emerald">tibia</span>, <span class="kw-term kw-emerald">peronea</span>.</li>
            </ul>
          </div>

          <!-- MUSKULATURA -->
          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 space-y-3">
            <h4 class="text-2xl font-black text-emerald-950 flex items-center gap-2">
              <span>💪</span> MUSKULATURA (Giharrak)
            </h4>
            <p class="text-gray-700 text-sm">600 gihar baino gehiago ditugu. Hezurrei lotuta daude tendoien bidez eta uzkurtuz mugimendua ahalbidetzen dute:</p>
            <ul class="space-y-1.5 text-gray-800 text-sm">
              <li>• <strong>Aurpegia & Lepoa:</strong> <span class="kw-term kw-emerald">Orbikularra</span> (begiak/ahoa ixteko), <span class="kw-term kw-emerald">esternokleidomastoideoa</span> (burua biratzeko).</li>
              <li>• <strong>Enborra:</strong> <span class="kw-term kw-emerald">Pektoralak</span>, <span class="kw-term kw-emerald">abdominalak</span>, <span class="kw-term kw-emerald">zeiharrak</span>.</li>
              <li>• <strong>Besoak:</strong> <span class="kw-term kw-emerald">Deltoidea</span> (sorbalda), <span class="kw-term kw-emerald">bizepsa</span> (besoa tolestu), <span class="kw-term kw-emerald">trizepsa</span> (besoa luzatu).</li>
              <li>• <strong>Hankak:</strong> <span class="kw-term kw-emerald">Koadrizepsa</span> (izterra), <span class="kw-term kw-emerald">bikia</span> (zangoaren atzealdea).</li>
            </ul>
          </div>
        </div>

        <div class="p-6 bg-white rounded-3xl border-2 border-emerald-200 shadow-sm space-y-3 text-base sm:text-lg">
          <h4 class="text-xl font-bold text-emerald-950 flex items-center gap-2">
            <span>🔗</span> Artikulazioak (Giltzadurak):
          </h4>
          <p class="text-gray-700">Bi hezur edo gehiago elkartzen diren guneak dira:</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div class="p-3 bg-emerald-50 rounded-xl"><strong>1. Finkoak:</strong> Hezurrak lotuta daude eta ez dira mugitzen (garezurreko hezurrak).</div>
            <div class="p-3 bg-emerald-50 rounded-xl"><strong>2. Erdi-mugikorrak:</strong> Mugimendu txikia ahalbidetzen dute (bizkarrezurreko ornoen artean).</div>
            <div class="p-3 bg-emerald-50 rounded-xl"><strong>3. Mugikorrak:</strong> Aske mugitzen dira norabide askotan (ukondoa, sorbalda, belauna).</div>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Eskeletoa', desc: 'Gorputzari egitura eta forma ematen dion eta organoak babesten dituen 206 hezurrezko barne-armadura.' },
      { term: 'Giharra', desc: 'Uzkurtzeko eta luzatzeko gaitasuna duen organoa, tendoien bidez hezurrak mugiarazten dituena.' },
      { term: 'Femurra', desc: 'Giza gorputzeko hezurrik luzeena eta sendoena, izterrean kokatua dagoena.' },
      { term: 'Artikulazioa', desc: 'Bi hezurren arteko lotura-gunea, mugimendua ahalbidetzen duena (finkoa, erdi-mugikorra edo mugikorra).' },
      { term: 'Tendoia', desc: 'Muskulua hezurrekin lotzen duen zuntz zuriz osatutako lokarri gogor eta erresistentea.' }
    ]
  },

  'mod2_sub8': {
    themeId: 2,
    themeColor: 'emerald',
    themeName: '2. Gaia: Izaki Bizidunak',
    badge: '🔬 2. GAIA • BERDEA (LH 6)',
    code: '2.8',
    title: '2.8 Ugalketa Funtzioa eta Ugalketa-Aparatuak',
    lead: 'Gizonen eta emakumeen ugalketa-aparatuen anatomia, organo nagusiak eta gametoen ezaugarriak.',
    image: 'images/ugalketa_aparatuak.svg',
    prev: 'mod2_sub7',
    next: 'mod2_sub9',
    prevLabel: '← 2.7 Lokomozio Aparatua',
    nextLabel: 'Hurrengoa: 2.9 Ernalketa →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          <span class="kw-term kw-emerald">Ugalketa funtzioa</span> izaki bizidunek beren antzeko izakiak sortzeko prozesua da. Giza ugalketa sexu bidezkoa da, eta horretarako emakumeen eta gizonen ugalketa-aparatuak beharrezkoak dira.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6 text-base sm:text-lg">
          <!-- GIZONEN APARATUA -->
          <div class="p-6 bg-emerald-50/70 rounded-3xl border-2 border-emerald-200 space-y-4">
            <h4 class="text-2xl font-black text-emerald-950 flex items-center gap-2">
              <span>🚹</span> Gizonen Ugalketa Aparatua
            </h4>
            <div class="space-y-3 text-sm sm:text-base">
              <div class="p-3 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <strong class="text-emerald-900 block font-bold">Barrabilak:</strong> Kanpoko bi organo dira, <span class="kw-term kw-emerald">eskroto</span> izeneko azal-tolestura batez estalita. Bertan <span class="kw-term kw-emerald">espermatozoideak</span> (gizonezko ugalketa-zelulak) sortzen dira.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <strong class="text-emerald-900 block font-bold">Hodi deferenteak:</strong> Bi hodi fin-finak dira; barrabiletatik espermatozoideak jaso eta uretrara garraiatzen dituzte.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <strong class="text-emerald-900 block font-bold">Semen-besikulak:</strong> Gernu-maskuriaren atzean dauden bi guruin dira; semen-likidoa sortzen dute espermatozoideak elikatzeko eta uretran isurtzen dute.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <strong class="text-emerald-900 block font-bold">Uretra:</strong> Espermatozoideak eta semen-likidoa kanpora irteteko hodia da. Gainera, gernu-maskuria kanpoaldearekin komunikatzen du (baina gernua eta semena ez dira aldi berean irteten).
              </div>
              <div class="p-3 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                <strong class="text-emerald-900 block font-bold">Zakila:</strong> Kanpoan dagoen atala da. Uretra du barrenean.
              </div>
            </div>
          </div>

          <!-- EMAKUMEEN APARATUA -->
          <div class="p-6 bg-teal-50/70 rounded-3xl border-2 border-teal-200 space-y-4">
            <h4 class="text-2xl font-black text-teal-950 flex items-center gap-2">
              <span>🚺</span> Emakumeen Ugalketa Aparatua
            </h4>
            <div class="space-y-3 text-sm sm:text-base">
              <div class="p-3 bg-white rounded-2xl border border-teal-100 shadow-sm">
                <strong class="text-teal-900 block font-bold">Obarioak (Obulutegiak):</strong> Arbendolen tamainako bi organo dira. Bertan sortzen eta heltzen dira <span class="kw-term kw-emerald">obuluak</span> (emakumeen ugalketa-zelulak).
              </div>
              <div class="p-3 bg-white rounded-2xl border border-teal-100 shadow-sm">
                <strong class="text-teal-900 block font-bold">Falopioren tronpak:</strong> Obarioak umetokiarekin komunikatzen dituzten bi hodi mehe dira.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-teal-100 shadow-sm">
                <strong class="text-teal-900 block font-bold">Umetokia (Matrizea):</strong> Muskulu-pareta lodiak dituen barrunbe hutsa da. Bertan garatzen da etorkizuneko haurtxoa haurdunaldian zehar.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-teal-100 shadow-sm">
                <strong class="text-teal-900 block font-bold">Bagina:</strong> Umetokia kanpoaldearekin komunikatzen duen muskulu-hodi elastikoa da.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-teal-100 shadow-sm">
                <strong class="text-teal-900 block font-bold">Bulba (Alua):</strong> Ugalketa-aparatuaren kanpoaldea da; baginaren sarrera babesten duten hainbat tolesturaz osatuta dago (ezpainak).
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Espermatozoidea', desc: 'Gizonezkoen gametoa edo ugalketa-zelula mikroskopikoa, isats edo flagelo luze baten bidez mugitzen dena.' },
      { term: 'Obulua', desc: 'Emakumezkoen gametoa edo ugalketa-zelula handi eta biribila, obarioetan hilero heltzen dena.' },
      { term: 'Falopioren Tronpak', desc: 'Obarioak eta umetokia lotzen dituzten bi hodiak; bertan elkartzen dira obulua eta espermatozoidea.' },
      { term: 'Umetokia', desc: 'Amaren sabelean dagoen muskulu-organoa, haurdunaldian enbrioia babestu eta elikatzen duena.' },
      { term: 'Eskrotoa', desc: 'Barrabilak estali eta babesten dituen kanpoko azal-poltsa, tenperatura egokia mantentzen duena.' }
    ]
  },

  'mod2_sub9': {
    themeId: 2,
    themeColor: 'emerald',
    themeName: '2. Gaia: Izaki Bizidunak',
    badge: '🔬 2. GAIA • BERDEA (LH 6)',
    code: '2.9',
    title: '2.9 Ernalketa: Obulaziotik Inplantaziora',
    lead: 'Gametoen elkarketa, zigotoaren sorrera, zatiketa zelularra eta enbrioiaren ezarpena umetokian.',
    image: 'images/ernalketa_prozesua.jpg',
    prev: 'mod2_sub8',
    next: 'mod2_sub10',
    prevLabel: '← 2.8 Ugalketa Aparatuak',
    nextLabel: 'Hurrengoa: 2.10 Haurdunaldia & Erditzea →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          <span class="kw-term kw-emerald">Ernalketa</span> gizonezko gameto bat (<span class="kw-term kw-emerald">espermatozoidea</span>) eta emakumezko gameto bat (<span class="kw-term kw-emerald">obulua</span>) elkartzeko eta izaki berri baten lehen zelula (<span class="kw-term kw-emerald">zigotoa</span>) sortzeko prozesua da. Prozesu honek 5 fase ditu:
        </p>

        <div class="space-y-4 my-6 text-base sm:text-lg">
          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row gap-4 items-start">
            <span class="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-black flex items-center justify-center text-lg shrink-0">1</span>
            <div>
              <h4 class="text-xl font-bold text-emerald-950">1. Obulazioa</h4>
              <p class="text-gray-700 mt-1">Obulutegiak obulu heldu bat askatzen du. Obulu hau <span class="kw-term kw-emerald">Falopioren tronparantz</span> abiatzen da. Prozesu hau obulazioa deitzen da eta obuluak 24 ordu inguru irauten du bideragarri.</p>
            </div>
          </div>

          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row gap-4 items-start">
            <span class="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-black flex items-center justify-center text-lg shrink-0">2</span>
            <div>
              <h4 class="text-xl font-bold text-emerald-950">2. Espermatozoideen bidaia</h4>
              <p class="text-gray-700 mt-1">Espermatozoideak umetokian gora doaz eta Falopioren tronpetara iristen dira obuluaren bila. Milioika espermatozoideetatik, gutxi batzuk baino ez dira iritsiko obuluarengana.</p>
            </div>
          </div>

          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row gap-4 items-start">
            <span class="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-black flex items-center justify-center text-lg shrink-0">3</span>
            <div>
              <h4 class="text-xl font-bold text-emerald-950">3. Ernalketa (Zigotoa)</h4>
              <p class="text-gray-700 mt-1">Falopioren tronpan, espermatozoideetako batek obuluaren kanpoko geruza zeharkatzea eta barruan sartzea lortzen du. Une horretan, obuluaren mintza aldatu egiten da beste espermatozoiderik sar ez dadin! Bi gametoen nukleoak batzen direnean, <span class="kw-term kw-emerald">zigotoa</span> sortzen da. Hau da ernalketaren unea.</p>
            </div>
          </div>

          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row gap-4 items-start">
            <span class="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-black flex items-center justify-center text-lg shrink-0">4</span>
            <div>
              <h4 class="text-xl font-bold text-emerald-950">4. Zatiketa zelularra</h4>
              <p class="text-gray-700 mt-1">Ernalketaren ondoren sortutako zigotoa zatitzen hasten da, bi zelula, lau, zortzi... sortuz, <span class="kw-term kw-emerald">enbrioi</span> bihurtzen den arte. Enbrioia Falopioren tronpan zehar umetorantz mugitzen den bitartean gertatzen da prozesu hau.</p>
            </div>
          </div>

          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row gap-4 items-start">
            <span class="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-black flex items-center justify-center text-lg shrink-0">5</span>
            <div>
              <h4 class="text-xl font-bold text-emerald-950">5. Inplantazioa (Ezarpena)</h4>
              <p class="text-gray-700 mt-1">Enbrioia, <span class="kw-term kw-emerald">blastozisto</span> izeneko fasera iristean (zelula-multzo bat), umetokiko paretari, <span class="kw-term kw-emerald">endometrioari</span>, itsasten zaio. Prozesu honi inplantazioa edo ezarpena deitzen zaio, eta ernalketa gertatu eta 6-12 egunetara gertatzen da normalean. Behin ezarrita, enbrioia bertan garatuko da haurdunaldian zehar.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Zigotoa', desc: 'Obulua eta espermatozoidea elkartzean sortzen den lehenbiziko zelula bakarra.' },
      { term: 'Enbrioia', desc: 'Zigotoa zatitzen hasten denetik (lehen astetik zortzigarren astera arte) amaren sabelean garatzen den izaki berria.' },
      { term: 'Inplantazioa', desc: 'Enbrioia umetokiko paretako ehunari (endometrioari) sendo itsasteko prozesua.' },
      { term: 'Blastozistoa', desc: 'Zelula-multzo biribildua, ernalketa gertatu eta 5-6 egunera umetokian itsasteko prest dagoena.' },
      { term: 'Endometrioa', desc: 'Umetokiaren barnealdea estaltzen duen odol-hodiz hornitutako muki-geruza babeslea.' }
    ]
  },

  'mod2_sub10': {
    themeId: 2,
    themeColor: 'emerald',
    themeName: '2. Gaia: Izaki Bizidunak',
    badge: '🔬 2. GAIA • BERDEA (LH 6)',
    code: '2.10',
    title: '2.10 Haurdunaldia eta Erditzea',
    lead: 'Amaren sabeletik mundura: 3 hiruhilekoetako garapena eta erditzearen hiru faseak.',
    image: 'images/haurdunaldia_erditzea.jpg',
    prev: 'mod2_sub9',
    next: 'mod2_sub11',
    prevLabel: '← 2.9 Ernalketa',
    nextLabel: 'Hurrengoa: 2.11 Bizitzaren Etapak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          <span class="kw-term kw-emerald">Haurdunaldia</span> enbrioia umetokian ezartzen denetik haurra jaiotzen den arte igarotzen den 9 hilabeteko (40 aste inguru) denbora-tartea da. Hiru hiruhilekotan banatzen da:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 text-base sm:text-lg">
          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 space-y-2">
            <span class="text-xs font-black text-emerald-700 uppercase tracking-wider block">1-3. HILABETEAK</span>
            <h4 class="text-xl font-bold text-emerald-950">1. Lehen Hiruhilekoa</h4>
            <p class="text-gray-700 text-sm">
              Garai honetan gertatzen da <strong>organo guztien eraketa</strong>. Nerbio-sistema osatzen hasten da eta bihotza taupadaka hasten da lehen asteetan. Burua, enborra, gorputz-adarrak, barne-organoak, zirkulazio-aparatua, iraitz-aparatua eta ugalketa-aparatua eratzen dira. Hirugarren hilabetearen amaieratik aurrera, <span class="kw-term kw-emerald">fetua</span> deitzen zaio.
            </p>
          </div>

          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 space-y-2">
            <span class="text-xs font-black text-emerald-700 uppercase tracking-wider block">4-6. HILABETEAK</span>
            <h4 class="text-xl font-bold text-emerald-950">2. Bigarren Hiruhilekoa</h4>
            <p class="text-gray-700 text-sm">
              Handiagoa da eta itxura definituagoa du. Fase honetan, eratutako organoak heldu eta funtzionatzen hasten dira. Nerbio-sistema, iraitz-sistema eta zirkulazio-sistema heldu egiten dira. Fetuak estimuluei erantzuten die: entzun, hatza zupatu eta begiak ireki eta ixteko gai da. Sexua bereizten da.
            </p>
          </div>

          <div class="p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200 space-y-2">
            <span class="text-xs font-black text-emerald-700 uppercase tracking-wider block">7-9. HILABETEAK</span>
            <h4 class="text-xl font-bold text-emerald-950">3. Hirugarren Hiruhilekoa</h4>
            <p class="text-gray-700 text-sm">
              Fetua askoz handiagoa da eta erditzeko prestatzen da. Organo guztiak heltzen dira (birikak barne). Fetuaren tamaina eta pisua nabarmen handitu egiten dira. Askoz gehiago mugitzen da. Hiruhilekoaren amaieran, <strong>buruz behera</strong> jarri ohi da, erditzeko bidea errazteko.
            </p>
          </div>
        </div>

        <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900 mt-8">👶 ERDITZEA (Jaiotzaren 3 Faseak):</h3>
        <div class="space-y-4 my-4 text-base sm:text-lg">
          <div class="p-5 bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-1">
            <strong class="text-emerald-950 block text-lg font-bold">1. Dilatazioa (Faserik luzeena):</strong>
            <p class="text-gray-700">Uzkurduren bidez, umetoki-lepoa zabaldu egiten da (10 cm-ra arte) haurrari irteera-bidea egiteko.</p>
          </div>
          <div class="p-5 bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-1">
            <strong class="text-emerald-950 block text-lg font-bold">2. Egoztea (Haurraren jaiotza):</strong>
            <p class="text-gray-700">Behin umetoki-lepoa guztiz zabalik dagoela, amak sabel-muskuluekin bultza egiten du eta haurra jaiotzen da. Une horretan zilbor-hestea mozten da.</p>
          </div>
          <div class="p-5 bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-1">
            <strong class="text-emerald-950 block text-lg font-bold">3. Plazenta-ateratzea:</strong>
            <p class="text-gray-700">Haurra jaio eta minutu batzuetara, umetokiak plazenta eta estalki amniozkoak kanporatzen ditu.</p>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Fetua', desc: 'Hirugarren hilabetetik aurrera, organo guztiak eratuta dituenean, amaren sabeletik haurra jaio bitarteko izena.' },
      { term: 'Plazenta', desc: 'Umetokian eratzen den organoa; zilbor-hestearen bidez amaren odoletik oxigenoa eta mantenugaiak fetuari pasatzen dizkiona.' },
      { term: 'Zilbor-hestea', desc: 'Fetua eta plazenta lotzen dituen kordoia; odola, oxigenoa eta mantenugaiak eramaten dituena.' },
      { term: 'Dilatazioa', desc: 'Erditzean umetokiko lepoa uzkurduren bidez zabaltzeko prozesu luzea.' },
      { term: 'Egoztea', desc: 'Umetoki-lepotik eta baginatik haurtxoa kanpoko mundura ateratzen den erditze-unea.' }
    ]
  },

  'mod2_sub11': {
    themeId: 2,
    themeColor: 'emerald',
    themeName: '2. Gaia: Izaki Bizidunak',
    badge: '🔬 2. GAIA • BERDEA (LH 6)',
    code: '2.11',
    title: '2.11 Bizitzaren Etapak eta Garapena',
    lead: 'Haurtzaroa, nerabezaroa, pubertaroaren aldaketa fisikoak, gaztetasuna, heldutasuna eta zahartzaroa.',
    image: 'images/bizitzaren_etapak.jpg',
    prev: 'mod2_sub10',
    next: 'mod2_mindmap',
    prevLabel: '← 2.10 Haurdunaldia & Erditzea',
    nextLabel: 'Hurrengoa: 2.12 Buru-Mapa Mentala →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Giza bizitzan zehar hainbat garapen-aldi igarotzen ditugu. Gure bizitza 5 etapa nagusitan banatzen da: <span class="kw-term kw-emerald">haurtzaroa</span> (0-11 urte), <span class="kw-term kw-emerald">nerabezaroa</span> (12-18 / 10-19 urte), <span class="kw-term kw-emerald">gaztetasuna</span> (14-26 urte), <span class="kw-term kw-emerald">heldutasuna</span> (27-59 urte) eta <span class="kw-term kw-emerald">zahartzaroa</span> (+60 urte).
        </p>

        <p>
          Etapa horietako bakoitzean hainbat aldaketa mota agertzen dira: aldaketa <strong>fisiologikoak</strong> (organoen funtzionamendua hormonen bidez), <strong>egiturazkoak</strong> (anatomikoak), <strong>psikologikoak</strong> (nortasuna eratzea) eta aldaketa <strong>sozial zein kulturaletara</strong> egokitzea.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-base sm:text-lg">
          <div class="p-6 bg-emerald-50/70 rounded-3xl border-2 border-emerald-300 space-y-3">
            <span class="text-3xl block">🌱</span>
            <h4 class="text-xl font-black text-emerald-950">1. Pubertaroa (Aldaketa Fisikoak)</h4>
            <p class="text-gray-700">
              Bizitzaren une honetan, haur bat <span class="kw-term kw-emerald">sexualki heltzen</span> da. Prozesu hori <strong>10 eta 14 urte</strong> bitartean gertatzen da neskentzat, eta <strong>12 eta 16 urte</strong> bitartean gizonezkoentzat. Hormonek gidatutako aldaketa fisikoak dira (bizarra, ahots-aldaketa, bularren garapena, hilerokoa).
            </p>
          </div>

          <div class="p-6 bg-teal-50/70 rounded-3xl border-2 border-teal-300 space-y-3">
            <span class="text-3xl block">👥</span>
            <h4 class="text-xl font-black text-teal-950">2. Nerabezaroa (Aldaketa Emozionalak & Sozialak)</h4>
            <p class="text-gray-700">
              10 eta 19 urte bitarteko etapa osoa da. Bi fasetan banatzen da: <strong>nerabezaro goiztiarra</strong> (12-14 urte) eta <strong>nerabezaro berantiarra</strong> (15-19 urte). Helduarora iristea helburu duten aldaketa psikologiko, emozional eta sozialekin du zerikusia: norberaren nortasuna, autonomia eta lagunarteko harremanak.
            </p>
          </div>
        </div>

        <div class="space-y-3 my-4 text-base">
          <h4 class="text-xl font-black font-title text-gray-900">🗓️ Giza Bizitzaren 5 Etapen Laburpena:</h4>
          <div class="grid grid-cols-1 sm:grid-cols-5 gap-3">
            <div class="p-4 bg-white rounded-2xl border border-emerald-200 text-center shadow-sm">
              <strong class="text-emerald-900 block font-bold">1. Haurtzaroa</strong>
              <span class="text-xs text-emerald-600 block font-semibold">0 - 11 urte</span>
              <p class="text-xs text-gray-600 mt-1">Hazkunde azkarra, jolasak eta ikaskuntza.</p>
            </div>
            <div class="p-4 bg-white rounded-2xl border border-emerald-200 text-center shadow-sm">
              <strong class="text-emerald-900 block font-bold">2. Nerabezaroa</strong>
              <span class="text-xs text-emerald-600 block font-semibold">12 - 18 urte</span>
              <p class="text-xs text-gray-600 mt-1">Pubertaroa, aldaketa fisikoak eta nortasuna.</p>
            </div>
            <div class="p-4 bg-white rounded-2xl border border-emerald-200 text-center shadow-sm">
              <strong class="text-emerald-900 block font-bold">3. Gaztetasuna</strong>
              <span class="text-xs text-emerald-600 block font-semibold">14 - 26 urte</span>
              <p class="text-xs text-gray-600 mt-1">Ikasketak, lagunartea eta autonomia.</p>
            </div>
            <div class="p-4 bg-white rounded-2xl border border-emerald-200 text-center shadow-sm">
              <strong class="text-emerald-900 block font-bold">4. Heldutasuna</strong>
              <span class="text-xs text-emerald-600 block font-semibold">27 - 59 urte</span>
              <p class="text-xs text-gray-600 mt-1">Familia, lana eta egonkortasun pertsonala.</p>
            </div>
            <div class="p-4 bg-white rounded-2xl border border-emerald-200 text-center shadow-sm">
              <strong class="text-emerald-900 block font-bold">5. Zahartzaroa</strong>
              <span class="text-xs text-emerald-600 block font-semibold">+60 urte</span>
              <p class="text-xs text-gray-600 mt-1">Bizi-esperientzia, erretiroa eta zainketa.</p>
            </div>
          </div>
        </div>

        <!-- 2. GAIAREN AUTOEBALUAZIO GALDETEGI NAGUSIA -->
        <div id="theme2-master-quiz" class="g-card rounded-[32px] p-6 sm:p-8 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white shadow-2xl space-y-6 my-10">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-emerald-700/60 pb-5">
            <div class="flex items-center gap-3">
              <span class="text-4xl">🏆</span>
              <div>
                <h3 class="text-2xl font-black font-title">2. Gaiaren Ebaluazio Galdetegia</h3>
                <p class="text-xs sm:text-sm text-emerald-200">Frogatu zer ikasi duzun izaki bizidunei, zelulei eta ugalketari buruz!</p>
              </div>
            </div>
            <div class="px-4 py-2 bg-emerald-700/80 rounded-2xl font-black text-yellow-300 text-sm border border-emerald-600">
              Puntuazioa: <span id="t2-score">0</span> / 5
            </div>
          </div>

          <div id="t2-quiz-body" class="space-y-5">
            <!-- Galderak dinamikoki app.js-en bidez -->
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Pubertaroa', desc: 'Sexu-heldutasunera iristea ahalbidetzen duten aldaketa fisiko eta fisiologikoen aroa.' },
      { term: 'Nerabezaroa', desc: 'Haurtzarotik helduarora igarotzeko garapen psikologiko, emozional eta sozialaren aldia.' },
      { term: 'Zahartzaroa', desc: 'Bizi-zikloaren azken etapa, erretiroaz, esperientziaz eta lasaitasunaz gozatzeko garaia.' },
      { term: 'Hormonak', desc: 'Guruin endokrinoek sortutako substantziak, pubertaroko aldaketa fisiko guztiak abiarazten dituztenak.' },
      { term: 'Autonomia', desc: 'Norberak bere erabakiak arrazoituz eta arduraz hartzeko garatzen duen ahalmena.' }
    ]
  },

  // --------------------------------------------------------------------------
  // 3. GAIA: ENERGIA, ELEKTRIZITATEA ETA MAGNETISMOA (LARANJA / HORIA)
  // --------------------------------------------------------------------------
  'mod3_sub1': {
    themeId: 3,
    themeColor: 'amber',
    themeName: '3. Gaia: Energia & Elektrizitatea',
    badge: '⚡ 3. GAIA • LARANJA (LH 6)',
    code: '3.1',
    title: '3.1 Zein Energia Mota Daude? (7 Mota Nagusiak)',
    lead: 'Mekanikoa, Soinua, Termikoa, Argia, Elektrikoa, Kimikoa eta Nuklearra: aldaketak eragiten dituen gaitasuna.',
    image: 'images/energia_motak.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=9Fc_B0-SZpo',
    videoTitle: 'Energia eta Energia Motak (LH Zientziak)',
    videoAuthor: 'Maisu Gorri',
    prev: 'home',
    next: 'mod3_sub2',
    prevLabel: '← Gaien Menua',
    nextLabel: 'Hurrengoa: 3.2 Energiaren Propietateak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          <span class="kw-term kw-amber">Energia</span> da gure inguruko munduan aldaketak eragiten dituen gaitasuna. <strong>Aldaketa bat jasaten duen guztiak dauka energia, eta aldaketa hori bera da energia!</strong> Unibertsoan gertatzen diren fenomeno guztiek energia behar dute gertatzeko.
        </p>

        <h3 class="text-2xl font-black font-title text-gray-900 mt-6 flex items-center gap-2">
          <span>⚡</span> Naturan eta Gizartean Dauden 7 Energia Mota Nagusiak:
        </h3>

        <div class="flex flex-col gap-4 my-6 text-base sm:text-lg">
          <!-- 1. MEKANIKOA -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">1</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                <span>🔨</span> Energia Mekanikoa (Mugimenduaren Indarra)
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Mugimenduak sortutako energia da. Gorputz batek zenbat eta <span class="kw-term kw-amber">abiadura handiagoa</span> eta masa handiagoa eduki, orduan eta energia mekaniko handiagoa izango du.
              </p>
              <div class="p-3 bg-white rounded-2xl border border-amber-200 text-sm sm:text-base text-amber-950">
                💡 <strong>Adibidez:</strong> Mailu batek iltze bat kolpatzean sortzen duen energia, edo haizeak birarazten duen errota.
              </div>
            </div>
          </div>

          <!-- 2. SOINU ENERGIA -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">2</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                <span>📢</span> Soinu Energia (Bibrazioen Hedapena)
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Gorputzen <span class="kw-term kw-amber">bibrazioen bidez</span> sortutako energia da. Soinu-uhinak airean edo uretan zehar hedatzen dira eta gure belarrietako tinpanoa bibrarazten dute.
              </p>
              <div class="p-3 bg-white rounded-2xl border border-amber-200 text-sm sm:text-base text-amber-950">
                💡 <strong>Adibidez:</strong> Bozgorailu (altavoz) batek musika jartzean airean eragindako dardara.
              </div>
            </div>
          </div>

          <!-- 3. TERMIKOA -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">3</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                <span>🔥</span> Energia Termikoa (Beroa eta Tenperatura)
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Beroago dagoen gorputz batetik hotzago dagoen beste gorputz batera transmititzen den barne-partikulen mugimendua da. Gorputz batek gero eta <span class="kw-term kw-amber">tenperatura handiagoa</span> eduki, orduan eta energia termiko gehiago izango du.
              </p>
              <div class="p-3 bg-white rounded-2xl border border-amber-200 text-sm sm:text-base text-amber-950">
                💡 <strong>Adibidez:</strong> Sua, eguzkia edo tostagailu batek botatzen duen beroa ogia txigortzeko.
              </div>
            </div>
          </div>

          <!-- 4. ARGIA -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">4</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                <span>💡</span> Argi Energia (Ikusmena eta Fotosintesia)
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Argiak sortutako eta garraiatutako energia da. Landareek <span class="kw-term kw-amber">fotosintesia</span> egiteko ezinbestekoa dute euren elikagaia sortzeko, eta gizakiok zein animaliek ingurunea ikusteko erabiltzen dugu.
              </p>
              <div class="p-3 bg-white rounded-2xl border border-amber-200 text-sm sm:text-base text-amber-950">
                💡 <strong>Adibidez:</strong> Eguzki-izpiak, bonbillen argia edo kalkulagailuak pizteko eguzki-paneltxoa.
              </div>
            </div>
          </div>

          <!-- 5. ELEKTRIKOA -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">5</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                <span>⚡</span> Energia Elektrikoa (Korronte Elektrikoa)
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Karga elektrikoen (elektroien) mugimenduaren ondorioz sortzen den energia da. Tximista baten argiarekin, ur-jauziekin edota haizearekin turbinak biraraziz sortzen da, eta kable elektrikoen bidez gure etxeetara heltzen da. <span class="kw-term kw-amber">Hau da gizartean gehien erabiltzen den energia mota</span>.
              </p>
              <div class="p-3 bg-white rounded-2xl border border-amber-200 text-sm sm:text-base text-amber-950">
                💡 <strong>Adibidez:</strong> Telebistak, ordenagailuak, garbigailuak eta hozkailuak funtzionarazteko beharrezkoa.
              </div>
            </div>
          </div>

          <!-- 6. KIMIKOA -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">6</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                <span>🔋</span> Energia Kimikoa (Substantzien Barne Loturak)
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Substantzia kimikoen atomoen arteko loturetan gordeta dagoen energia da. Erreakzio kimiko baten bidez askatzen denean, izakiok bizitzeko eta ibilgailuek mugitzeko beharrezko indarra ematen digu.
              </p>
              <div class="p-3 bg-white rounded-2xl border border-amber-200 text-sm sm:text-base text-amber-950">
                💡 <strong>Adibidez:</strong> Jaten ditugun elikagaiak, autoen erregaia (gasolina), egurra erretzean eta piletan barruko konposatuen bidez sortzen dena.
              </div>
            </div>
          </div>

          <!-- 7. NUKLEARRA -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">7</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                <span>☢️</span> Energia Nuklearra (Atomoen Nukleoaren Fisioa)
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Plutonioa, uranioa eta antzeko elementu kimikoen <span class="kw-term kw-amber">atomo baten nukleoa apurtzen denean</span> sortzen den energia erraldoia da. Zentral nuklearretan elektrizitatea lortzeko erabiltzen da, baina oso kutsakorra eta arriskutsua da hondakin erradioaktiboengatik.
              </p>
              <div class="p-3 bg-white rounded-2xl border border-amber-200 text-sm sm:text-base text-amber-950">
                💡 <strong>Adibidez:</strong> Zentral nuklearrak, non istripu larriek (Txernobil 1986, Fukushima 2011) hondamendi ekologikoak eragin dituzten.
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Energia', desc: 'Materiaren eraldaketak, mugimenduak eta aldaketak sortzeko gaitasun unibertsala.' },
      { term: 'Energia Zinetikoa', desc: 'Mugimenduan dagoen edozein gorputzek bere abiaduragatik duen energia mekanikoa.' },
      { term: 'Energia Potentziala', desc: 'Gorputz batek bere posizio edo altueragatik metatuta daukan energia.' },
      { term: 'Uhinak', desc: 'Espazioan zehar energia garraiatzen duten perturbazioak (soinua edo argia adibidez).' },
      { term: 'Erreakzio Kimikoa', desc: 'Substantzia batzuk beste bihurtzen diren prozesua, energia askatuz (beroa, argia).' }
    ]
  },

  'mod3_sub2': {
    themeId: 3,
    themeColor: 'amber',
    themeName: '3. Gaia: Energia & Elektrizitatea',
    badge: '⚡ 3. GAIA • LARANJA (LH 6)',
    code: '3.2',
    title: '3.2 Zeintzuk Dira Energiaren Propietateak?',
    lead: 'Energiaren 4 propietate unibertsalak: metatu, garraiatu, eraldatu eta transferitu daiteke. Kontserbazio printzipioa.',
    image: 'images/energia_propietateak.jpg',
    prev: 'mod3_sub1',
    next: 'mod3_sub3',
    prevLabel: '← 3.1 Energia Motak',
    nextLabel: 'Hurrengoa: 3.3 Energia Iturriak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Nahiz eta energia begiekin zuzenean ikustezina izan, hark sortutako <span class="kw-term kw-amber">aldaketak ikustean</span> energiak eragina izan duela jakin dezakegu. Zientzialariek energiaren lau ezaugarri edo propietate nagusi bereizi dituzte:
        </p>

        <div class="flex flex-col gap-4 my-6 text-base sm:text-lg">
          <!-- 1. METATU -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">1</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                <span>📦</span> 1. Propietatea: Metatu Daiteke
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Energia hainbat ontzi, gailu edo substantziatan biltegiratu eta gorde daiteke, berehala gastatu beharrean etorkizunean behar dugunean erabiltzeko.
              </p>
              <div class="p-3 bg-white rounded-2xl border border-amber-200 text-sm sm:text-base text-amber-950">
                💡 <strong>Adibideak:</strong> Pilak, ordenagailu eramangarrien eta mugikorren bateriak, autoen gasolina-tanga, edo urtegietan metatutako ur-masa.
              </div>
            </div>
          </div>

          <!-- 2. GARRAIATU -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">2</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                <span>🚚</span> 2. Propietatea: Garraiatu Daiteke
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Energia sortzen den tokitik (zentral elektrikoak, petrolio-hobiak) behar den lekura (etxeak, eskolak, lantegiak) mugitu eta eraman daiteke. Modurik azkarrena eta eraginkorrena tentsio altuko sare elektrikoen bidezkoa da.
              </p>
              <div class="p-3 bg-white rounded-2xl border border-amber-200 text-sm sm:text-base text-amber-950">
                💡 <strong>Adibideak:</strong> Tentsio altuko kable elektrikoak, petrolio-ontziak itsasoan zehar, gasbideak eta kamioi zisternak.
              </div>
            </div>
          </div>

          <!-- 3. ERALDATU -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">3</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                <span>🔄</span> 3. Propietatea: Eraldatu Daiteke
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Energia forma edo mota batetik beste batera aldatzen da tresna eta makinen bidez. Gizakiok erabiltzen ditugun aparatu guztiek funtzio hori dute: energia eraldatzea gure premiak asetzeko.
              </p>
              <div class="p-3 bg-white rounded-2xl border border-amber-200 text-sm sm:text-base text-amber-950">
                💡 <strong>Adibideak:</strong> Pila baten energia kimikoa elektrizitate bihurtzen da linternan, eta hark argi eta bero bihurtzen du; haize-errotak energia eolikoa elektrizitate bihurtzen du.
              </div>
            </div>
          </div>

          <!-- 4. TRANSFERITU -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">4</div>
            <div class="space-y-2 flex-1">
              <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                <span>➡️</span> 4. Propietatea: Transferitu Daiteke
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Gorputz edo objektu batek bere energia beste gorputz bati eman diezaioke. Beroaren kasuan, adibidez, tenperatura altuagoa duen gorputzetik hotzago dagoenera pasatzen da beti.
              </p>
              <div class="p-3 bg-white rounded-2xl border border-amber-200 text-sm sm:text-base text-amber-950">
                💡 <strong>Adibideak:</strong> Suaren beroa lapikoko urari transferitzea irakin dezan, edo futbolari baten oinak baloiari emandako bultzada mekanikoa.
              </div>
            </div>
          </div>
        </div>

        <!-- PRINTZIPIO NAGUSIA ETA DEGRADAZIOA -->
        <div class="p-8 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 rounded-3xl border-2 border-amber-400 space-y-4">
          <h4 class="text-2xl font-black text-amber-950 flex items-center gap-2">
            <span>⚖️</span> Fisikaren Lege Unibertsala: Energiaren Kontserbazioa
          </h4>
          <blockquote class="text-xl sm:text-2xl font-black font-title text-amber-900 border-l-4 border-amber-600 pl-4 py-1 italic">
            «Energia ez da sortzen ezta desagertzen ere; eraldatu baino ez da egiten.»
          </blockquote>
          <p class="text-gray-800 text-base sm:text-lg leading-relaxed">
            <strong>Orduan, zergatik hitz egiten dugu energia "aurrezteaz"?</strong><br>
            Energia eraldatzen edo erabiltzen den bakoitzean, zati handi bat <span class="kw-term kw-amber">bero moduan degradatzen da</span> eta ingurunean zabaltzen da. Bero degradatu hori ezin dugu berriz harrapatu edo berrerabili lan baliagarria egiteko. Beraz, energia kantitate osoa berdina izan arren, haren <strong>erabilgarritasuna gutxitu</strong> egiten da. Horregatik da ezinbestekoa energia arduraz eta zentzuz erabiltzea!
          </p>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Energiaren Kontserbazioa', desc: 'Printzipio fisikoa: sistema isolatu batean energia osoa konstante mantentzen da beti.' },
      { term: 'Energiaren Degradazioa', desc: 'Energia eraldatzean bero moduan galtzen den zatia, berreskuratu ezin dena.' },
      { term: 'Tentsio Altua', desc: 'Elektrizitatea distantzia handietan galera txikiekin garraiatzeko erabiltzen den tentsio maila handia.' },
      { term: 'Bateria Birkargagarria', desc: 'Erreakzio kimikoak alderantzikatu eta behin eta berriz kargatu daitekeen gailua.' }
    ]
  },

  'mod3_sub3': {
    themeId: 3,
    themeColor: 'amber',
    themeName: '3. Gaia: Energia & Elektrizitatea',
    badge: '⚡ 3. GAIA • LARANJA (LH 6)',
    code: '3.3',
    title: '3.3 Nondik Dator Energia? Berriztagarriak eta Berriztaezinak',
    lead: 'Iturri agortezin garbiak vs erregai fosil kutsatzaileak. Euskal Herriko kontsumoa eta erronkak.',
    image: 'images/energia_iturriak.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=N9VUVI19W2M',
    videoTitle: 'Energia eskuragarri eta ez-kutsatzailea (Berriztagarriak)',
    videoAuthor: 'UN Etxea (UNESCO)',
    prev: 'mod3_sub2',
    next: 'mod3_sub4',
    prevLabel: '← 3.2 Propietateak',
    nextLabel: 'Hurrengoa: 3.4 Zirkuitu Motak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          <span class="kw-term kw-amber">Energia-iturriak</span> naturatik energia eskuratzeko aukera ematen diguten baliabide naturalak dira. Historian zehar, gizakiok animalien indarra edo egurraren errekuntza soilik erabiltzen genuen. Gaur egun, ordea, teknologia oso aurreratuak ditugu, baina bi talde nagusitan banatzen dira:
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6 text-base sm:text-lg">
          <!-- 1. BERRIZTAGARRIAK -->
          <div class="p-6 bg-emerald-50/70 rounded-3xl border-2 border-emerald-300 space-y-4 shadow-sm">
            <div class="flex items-center justify-between">
              <span class="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-600 text-white">
                🌱 AGORTEZINAK ETA GARBIAK
              </span>
            </div>
            <h4 class="text-2xl font-black text-emerald-950">Iturri Berriztagarriak</h4>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
              Naturak etengabe berritzen dituen baliabideak dira, eta, beraz, <strong>ez dira inoiz agortzen</strong>. Oro har, ez dute atmosferara berotegi-efektuko gasik isurtzen eta ingurumenarekiko errespetutsuagoak dira.
            </p>

            <div class="space-y-3 text-sm sm:text-base">
              <div class="p-3 bg-white rounded-2xl border border-emerald-100 shadow-xs">
                <strong class="text-emerald-950 block font-bold">☀️ Eguzki-Energia:</strong> Eguzkiaren erradiazioa panel fotovoltaikoen bidez argindar bihurtzen da edo panel termikoz ura berotzeko erabiltzen da.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-emerald-100 shadow-xs">
                <strong class="text-emerald-950 block font-bold">💨 Haize-Energia (Eolikoa):</strong> Haizeak mugitzen dituen aerosorgailu erraldoien bidez elektrizitatea ekoizten da.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-emerald-100 shadow-xs">
                <strong class="text-emerald-950 block font-bold">💧 Uraren Energia (Hidraulikoa):</strong> Presatutako ura altuera handitik erortzen utziz turbinak jirabiraka jartzen dira.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-emerald-100 shadow-xs">
                <strong class="text-emerald-950 block font-bold">🌿 Biomasa eta Biogasa:</strong> Sukaldeko zabor organikoa eta hildako landare zein animalien hondakinak erregaian bilakatuz.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-emerald-100 shadow-xs">
                <strong class="text-emerald-950 block font-bold">🌋 Geotermikoa:</strong> Lur barruko bero naturala aprobetxatuz berotzeko eta argindarra lortzeko.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-emerald-100 shadow-xs">
                <strong class="text-emerald-950 block font-bold">🌊 Itsasoko Energia:</strong> Olatuen mugimendua eta itsasaldien gorabeherak (Gipuzkoako Mutrikuko Olatu Zentrala adibide aitzindaria da munduan).
              </div>
            </div>
          </div>

          <!-- 2. BERRIZTAEZINAK -->
          <div class="p-6 bg-orange-50/70 rounded-3xl border-2 border-orange-300 space-y-4 shadow-sm">
            <div class="flex items-center justify-between">
              <span class="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-orange-600 text-white">
                ⚠️ DENBORAREKIN AGORTU EGITEN DIRA
              </span>
            </div>
            <h4 class="text-2xl font-black text-orange-950">Iturri Berriztaezinak</h4>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
              Naturan kopuru mugatuan dauden baliabideak dira. Kontsumitu ahala <strong>agortu egiten dira</strong>, eta berriro sortzeko milioika urte behar dira. Gainera, erretzean airea biziki kutsatzen dute eta <span class="kw-term kw-amber">klima aldaketa</span> azkartzen dute.
            </p>

            <div class="space-y-3 text-sm sm:text-base">
              <div class="p-3 bg-white rounded-2xl border border-orange-100 shadow-xs">
                <strong class="text-orange-950 block font-bold">⛏️ Ikatza:</strong> Meatzaritzaren bidez lurpean zuloak eginez ateratzen den harri beltz gogorra. Oso kutsagarria da.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-orange-100 shadow-xs">
                <strong class="text-orange-950 block font-bold">🛢️ Petrolioa:</strong> Lurrazaleko arroka porotsuetan dagoen likido beltz lodia. Bertatik gasolina, gasolioa eta plastikoak lortzen dira.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-orange-100 shadow-xs">
                <strong class="text-orange-950 block font-bold">🔥 Gas Naturala:</strong> Metanoz osatutako gasa, lurpean pilatua. Bero-ahalmen handia du eta fraking bezalako teknika kaltegarriekin ateratzen da.
              </div>
              <div class="p-3 bg-white rounded-2xl border border-orange-100 shadow-xs">
                <strong class="text-orange-950 block font-bold">☢️ Energia Nuklearra:</strong> Uranio atomoak apurtuz (fisioa) lortzen da. Erradiazioa askatzen du eta hondakinak milaka urtez arriskutsuak dira.
              </div>
            </div>
          </div>
        </div>

        <!-- GRAFIKO ZIRKULARRA: KONTTSUMITUTAKO ENERGIA BERRIZTAGARRIA (%14) ETA EZ-BERRIZTAGARRIA (%84) -->
        <div class="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-[32px] border-2 border-amber-400/40 shadow-2xl space-y-6 my-8">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-700/80 pb-4">
            <div class="flex items-center gap-3">
              <span class="text-3xl sm:text-4xl">📊</span>
              <div>
                <h4 class="text-xl sm:text-2xl font-black font-title text-amber-400">Kontsumitutako Energiaren Grafiko Zirkularra</h4>
                <p class="text-xs sm:text-sm text-slate-300">Iturri Berriztagarriak (%14) vs Ez-Berriztagarriak (%84) gure gizartean</p>
              </div>
            </div>
            <span class="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30">
              ⚡ Datu Errealak
            </span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <!-- SVG GRAFIKO ZIRKULARRA -->
            <div class="lg:col-span-5 flex flex-col items-center justify-center relative">
              <svg viewBox="0 0 240 240" class="w-56 h-56 sm:w-64 sm:h-64 drop-shadow-2xl transform -rotate-90">
                <!-- Background circle (r=85, C = 2 * PI * 85 ≈ 534.07) -->
                <circle cx="120" cy="120" r="85" fill="none" stroke="#1e293b" stroke-width="32"></circle>
                
                <!-- Ez-berriztagarria %84 (84% = 448.62) -->
                <circle cx="120" cy="120" r="85" fill="none" stroke="url(#gradient-fossil)" stroke-width="32"
                  stroke-dasharray="448.62 534.07" stroke-dashoffset="0" stroke-linecap="round" class="transition-all duration-1000 ease-out"></circle>
                
                <!-- Berriztagarria %14 (14% = 74.77, offset = -448.62 - 4 gap = -452.62) -->
                <circle cx="120" cy="120" r="85" fill="none" stroke="url(#gradient-renewable)" stroke-width="32"
                  stroke-dasharray="74.77 534.07" stroke-dashoffset="-452.62" stroke-linecap="round" class="transition-all duration-1000 ease-out"></circle>
                
                <defs>
                  <linearGradient id="gradient-fossil" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#f59e0b"></stop>
                    <stop offset="100%" stop-color="#ea580c"></stop>
                  </linearGradient>
                  <linearGradient id="gradient-renewable" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#10b981"></stop>
                    <stop offset="100%" stop-color="#06b6d4"></stop>
                  </linearGradient>
                </defs>
              </svg>
              
              <!-- Erdiko testua -->
              <div class="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span class="text-3xl font-black text-white font-title tracking-tight">%84 / %14</span>
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider mt-0.5">Kontsumoa</span>
              </div>
            </div>

            <!-- LEGENDA ETA DESKRIBAPENA -->
            <div class="lg:col-span-7 space-y-4">
              <!-- EZ-BERRIZTAGARRIA (%84) -->
              <div class="p-4 sm:p-5 bg-slate-950/80 rounded-2xl border border-amber-500/40 flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-black text-base shadow-md flex-shrink-0">
                  %84
                </div>
                <div class="space-y-1 text-sm sm:text-base">
                  <h5 class="font-extrabold text-amber-400 flex items-center gap-2">
                    <span>🛢️</span> Energia Ez-Berriztagarria (%84)
                  </h5>
                  <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Petrolioa, gas naturala eta ikatza dira nagusi gure garraioan, fabriketan eta berogailuetan. Erreserbak mugatuak dira eta CO₂ isuriek berotegi-efektua indartzen dute.
                  </p>
                </div>
              </div>

              <!-- BERRIZTAGARRIA (%14) -->
              <div class="p-4 sm:p-5 bg-slate-950/80 rounded-2xl border border-emerald-500/40 flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-black text-base shadow-md flex-shrink-0">
                  %14
                </div>
                <div class="space-y-1 text-sm sm:text-base">
                  <h5 class="font-extrabold text-emerald-400 flex items-center gap-2">
                    <span>🌱</span> Energia Berriztagarria (%14)
                  </h5>
                  <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Eguzki-panel fotovoltaikoak, haize-errotak (eolikoa), zentral hidraulikoak eta biomasa. Naturak agortu gabe ematen duen energia garbia, etorkizuneko gakoa.
                  </p>
                </div>
              </div>

              <!-- TRANTSIZIO ENERGETIKOA -->
              <div class="p-3.5 bg-amber-500/15 rounded-xl border border-amber-400/30 text-xs sm:text-sm text-amber-200 flex items-center gap-2.5 font-medium">
                <span>🎯</span>
                <span><strong>Trantsizio Energetikoaren Erronka:</strong> Hurrengo urteetan proportzio hauek irauli eta berriztagarriak nagusi bihurtzea da helburua, Lurra zainduz eta berotegi-gasak murriztuz.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- AHOLKUAK ETA KONTSZIENTZIAZIOA -->
        <div class="p-6 bg-amber-50 rounded-3xl border-2 border-amber-300 space-y-3 text-base sm:text-lg text-amber-950">
          <h4 class="text-xl font-black text-amber-900 flex items-center gap-2">
            <span>💡</span> Zer Egin Dezakegu Guk Geuk Egunero?
          </h4>
          <ul class="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base pl-2">
            <li>Argiak alferrik piztuta ez uztea eta gailuak deskonektatzea (stand-by modua kentzea).</li>
            <li>Oinez, bizikletaz edo garraio publikoan mugitzea auto partikularraren ordez.</li>
            <li>Etxeetan eta eskoletan eguzki-panelak instalatzea eta isolamendu termikoa hobetzea.</li>
            <li>Hondakinak murriztu, berrerabili eta birziklatzea (ekonomia zirkularra).</li>
          </ul>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Iturri Berriztagarria', desc: 'Naturan etengabe berrizten den eta agortzen ez den energia-iturria (eguzkia, haizea, ura).' },
      { term: 'Iturri Berriztaezina', desc: 'Lurrean erreserba mugatuak dituen eta agortu daitekeen baliabidea (petrolioa, ikatza, gasa, uranioa).' },
      { term: 'Berotegi Efektua', desc: 'Gas kutsatzaileek atmosferan beroa harrapatu eta Lurraren tenperatura igotzen duten fenomenoa.' },
      { term: 'Frakinga', desc: 'Lurpeko harriak hautsiz gasa eta petrolioa ateratzeko metodo hidrauliko kaltegarria.' },
      { term: 'Zentral Hidroelektrikoa', desc: 'Ibaietako uraren indar zinetikoa elektrizitate bihurtzen duen azpiegitura.' }
    ]
  },

  'mod3_sub4': {
    themeId: 3,
    themeColor: 'amber',
    themeName: '3. Gaia: Energia & Elektrizitatea',
    badge: '⚡ 3. GAIA • LARANJA (LH 6)',
    code: '3.4',
    title: '3.4 Zirkuitu Motak: Seriea eta Paraleloa',
    lead: 'Elementuak katean konektatzea vs adar independenteetan antolatzea. Simulagailu interaktiboa.',
    image: 'images/zirkuitu_motak.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=U-gaj_qPmuY',
    videoTitle: 'Serie eta paralelo zirkuituak (LHrako azalpen erraza)',
    videoAuthor: 'nerea tekno (6:41)',
    prev: 'mod3_sub3',
    next: 'mod3_sub5',
    prevLabel: '← 3.3 Energia Iturriak',
    nextLabel: 'Hurrengoa: 3.5 Osagaiak & Sinboloak →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          <span class="kw-term kw-amber">Zirkuitu elektrikoa</span> korronte elektrikoa modu ordenatuan eta norabide bakarrean mugitzen den itxitako ibilbidea da. Korrontea zirkuituan nola konektatzen den arabera, bi zirkuitu mota nagusi bereizten ditugu:
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6 text-base sm:text-lg">
          <!-- 1. SERIEKO ZIRKUITUA -->
          <div class="p-6 bg-sky-50/80 rounded-3xl border-2 border-sky-300 space-y-4 shadow-sm">
            <h4 class="text-2xl font-black text-sky-950 flex items-center gap-2">
              <span>🔗</span> 1. Serieko Zirkuitua (Kate Moduan)
            </h4>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
              Elementuak <strong>kate baten moduan</strong> konektatuta daude, hau da, elementu baten amaiera hurrengoaren hasierari lotuta dago. Korronteak <strong>bide bakarra</strong> du igarotzeko.
            </p>
            <div class="p-4 bg-white rounded-2xl border border-sky-200 space-y-2">
              <strong class="text-rose-700 block font-extrabold text-sm sm:text-base">⚠️ Zer gertatzen da bonbilla bat kendu edo erretzen bada?</strong>
              <p class="text-gray-700 text-sm sm:text-base">
                Elementu bakarretik korrontea igarotzen ez bada, zirkuitua eten egiten da eta <strong>beste guztiek ere funtzionatzeari uzten diote</strong>! Kable bakarreko gabonetako argietan bezala, bonbilla bat askatuz gero argi guztiak itzaltzen dira.
              </p>
            </div>
          </div>

          <!-- 2. PARALELOKO ZIRKUITUA -->
          <div class="p-6 bg-emerald-50/80 rounded-3xl border-2 border-emerald-300 space-y-4 shadow-sm">
            <h4 class="text-2xl font-black text-emerald-950 flex items-center gap-2">
              <span>⚡</span> 2. Zirkuitu Paraleloa (Adar Independenteak)
            </h4>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
              Elementuek beren <strong>sarrerak puntu berera</strong> konektatuta dituzte, eta <strong>irteerak zirkuituko beste puntu berera</strong>. Korronteak adar independenteak ditu mugitzeko.
            </p>
            <div class="p-4 bg-white rounded-2xl border border-emerald-200 space-y-2">
              <strong class="text-emerald-800 block font-extrabold text-sm sm:text-base">✅ Zer gertatzen da bonbilla bat kentzen bada?</strong>
              <p class="text-gray-700 text-sm sm:text-base">
                Hartzaile batek funtzionatzeari uzten badio ere, <strong>gainerako hartzaileek normaltasunez funtzionatzen jarraituko dute</strong>, korronteak beste adarretatik igarotzen jarraitzen duelako. Horregatik dago gure etxeetako sare elektrikoa paraleloan konektatuta!
              </p>
            </div>
          </div>
        </div>

        <!-- SIMULAGAILU INTERAKTIBOA -->
        <div class="p-6 bg-slate-900 text-white rounded-[28px] space-y-6 shadow-xl my-6">
          <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h4 class="text-xl font-black text-amber-400">🔌 Zirkuitu Birtualen Laborategia: Seriea vs Paraleloa</h4>
              <p class="text-xs sm:text-sm text-slate-300 mt-1">Aldatu modua, sakatu etengailua eta egin klik bonbilletan haiek kentzeko!</p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="app.setCircuitMode('serie')" id="btn-circuit-serie" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 text-slate-950 transition-all">Seriean</button>
              <button onclick="app.setCircuitMode('paralelo')" id="btn-circuit-paralelo" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-800 text-slate-300 transition-all">Paraleloan</button>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-around gap-6 py-6 bg-slate-950/80 rounded-2xl border border-slate-800 p-6">
            <div class="text-center space-y-2">
              <span class="text-4xl block">🔋</span>
              <span class="text-xs font-mono text-slate-300 font-bold">Pila (9V)</span>
            </div>

            <button onclick="app.toggleCircuitSwitch()" id="circuit-switch-btn" class="px-6 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-lg transition-all">
              🔴 Etengailua: IREKITA (Itzalita)
            </button>

            <div class="flex items-center gap-8">
              <div onclick="app.toggleBulb(1)" class="text-center cursor-pointer space-y-1 group" title="Egin klik 1. bonbilla kentzeko/jartzeko">
                <span id="bulb-1-icon" class="text-5xl block opacity-40 transition-all">💡</span>
                <span class="text-xs font-mono text-slate-300 font-bold group-hover:text-amber-300">1. Bonbilla</span>
                <span class="text-[10px] text-slate-400 block">(klik kendu)</span>
              </div>
              <div onclick="app.toggleBulb(2)" class="text-center cursor-pointer space-y-1 group" title="Egin klik 2. bonbilla kentzeko/jartzeko">
                <span id="bulb-2-icon" class="text-5xl block opacity-40 transition-all">💡</span>
                <span class="text-xs font-mono text-slate-300 font-bold group-hover:text-amber-300">2. Bonbilla</span>
                <span class="text-[10px] text-slate-400 block">(klik kendu)</span>
              </div>
            </div>
          </div>

          <div id="circuit-explanation" class="p-4 bg-slate-800/90 rounded-2xl text-sm text-amber-200 border border-slate-700 leading-relaxed font-medium">
            💡 <strong>Seriean:</strong> Bonbilla guztiak kable berean daude. Bat kentzen edo puskatzen bada, korrontea eten eta beste guztia itzaltzen da.
          </div>
        </div>

        <!-- GALDERA / ERRONKA AZKARRA -->
        <div class="p-6 bg-gradient-to-r from-amber-950 via-orange-950 to-slate-950 text-white rounded-3xl border-2 border-amber-500/40 shadow-xl space-y-3 my-6">
          <div class="flex items-center justify-between">
            <span class="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/30 text-amber-200 border border-amber-400/30">
              ⚡ ERRONKA AZKARRA
            </span>
            <span class="text-xs text-amber-300 font-bold">Zirkuituen logika</span>
          </div>
          <h4 class="text-base sm:text-lg font-bold text-white">Seriean konektatutako zirkuitu batean, zer gertatzen da bonbilla bat kendu edo erre egiten bada?</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button onclick="app.checkQuickCircuitChallenge(false, this)" class="quick-circuit-btn text-left p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs sm:text-sm border border-slate-700 transition-all text-slate-200">
              A) Beste bonbillek piztuta jarraitzen dute berdin-berdin.
            </button>
            <button onclick="app.checkQuickCircuitChallenge(true, this)" class="quick-circuit-btn text-left p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs sm:text-sm border border-slate-700 transition-all text-slate-200">
              B) Zirkuitua eten eta gainerako bonbilla guztiak itzali egiten dira.
            </button>
          </div>
          <div id="quick-circuit-feedback" class="text-xs sm:text-sm font-semibold hidden pt-2"></div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Zirkuitu Itxia', desc: 'Korronte elektrikoa hasieratik amaierara inolako etenik gabe igarotzen uzten duen bidea.' },
      { term: 'Zirkuitu Irekia', desc: 'Bidean etena duen zirkuitua (etengailua irekita edo kablea moztuta dagoenean), korrontea pasatzen uzten ez duena.' },
      { term: 'Zirkuitu-Laburra', desc: 'Erresistentziarik gabe polo positiboa eta negatiboa elkartzean sortzen den korronte arriskutsua.' },
      { term: 'Nodoa (Adarkatzea)', desc: 'Zirkuitu paraleloan kableak banatzen diren elkargunea, korronteak bide bat baino gehiago hartzeko.' }
    ]
  },

  'mod3_sub5': {
    themeId: 3,
    themeColor: 'amber',
    themeName: '3. Gaia: Energia & Elektrizitatea',
    badge: '⚡ 3. GAIA • LARANJA (LH 6)',
    code: '3.5',
    title: '3.5 Zirkuituaren Osagaiak eta Nazioarteko Sinboloak',
    lead: 'Sorgailuak, hartzaileak, kontrol-elementuak eta eroaleak: nola marrazten dira zirkuituak planoetan?',
    image: 'images/zirkuitu_osagaiak.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=55efIBQ7ZWw',
    videoTitle: 'Zirkuitu elektriko sinplea (pila, bonbila, etengailua)',
    videoAuthor: 'Muskizko Ikastola (4:49)',
    prev: 'mod3_sub4',
    next: 'mod3_mindmap',
    prevLabel: '← 3.4 Zirkuitu Motak',
    nextLabel: 'Hurrengoa: 3. Gaiaren Buru-Mapa →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Edozein zirkuitu elektrikok, sinpleena edo konplexuena izan, lau osagai-multzo nagusi behar ditu funtzionatzeko. Jarraian, haien deskribapena eta plano teknikoetan erabiltzen diren <span class="kw-term kw-amber">nazioarteko sinbolo estandarizatuak</span> aztertuko ditugu:
        </p>

        <div class="flex flex-col gap-4 my-6 text-base sm:text-lg">
          <!-- 1. SORGAILUAK -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">1</div>
            <div class="space-y-2 flex-1">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                  <span>🔋</span> 1. Sorgailuak (Generadoreak)
                </h4>
                <span class="px-3 py-1 rounded-xl text-xs font-black bg-blue-100 text-blue-800 border border-blue-200">
                  Sinboloa: + | |-- -
                </span>
              </div>
              <p class="text-gray-700 leading-relaxed">
                Korronte elektrikoa sortzen duen elementua da. Karga elektrikoak mugiarazteko tentsioa hornitzen du. Entxufeek, adibidez, bi zulo dituzte: batetik korrontea atera eta bestetik sartu egiten da.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-sm">
                <div class="p-2.5 bg-white rounded-xl border border-amber-100">
                  <strong>Pilak:</strong> Erreakzio kimiko bidez elektrizitatea sortzen dute.
                </div>
                <div class="p-2.5 bg-white rounded-xl border border-amber-100">
                  <strong>Bateria birkargagarriak:</strong> Agortzen direnean berriz kargatu daitezke.
                </div>
                <div class="p-2.5 bg-white rounded-xl border border-amber-100">
                  <strong>Panel fotovoltaikoak:</strong> Eguzki-argia korronte elektriko bihurtzen dute.
                </div>
                <div class="p-2.5 bg-white rounded-xl border border-amber-100">
                  <strong>Alternadoreak eta dinamoak:</strong> Biraketarekin sortzen dute korrontea.
                </div>
              </div>
            </div>
          </div>

          <!-- 2. HARTZAILEAK -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">2</div>
            <div class="space-y-2 flex-1">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                  <span>💡</span> 2. Hartzaileak (Errezeptoreak)
                </h4>
                <span class="px-3 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-800 border border-amber-200">
                  Sinboloak: ⊗ (Bonbilla) • Ⓜ (Motorra)
                </span>
              </div>
              <p class="text-gray-700 leading-relaxed">
                Korronte elektrikoa erabiltzen duten osagaiak dira, eta hainbat energia-motatan eraldatzen dute: argia, beroa, soinua edo mugimendua.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-sm">
                <div class="p-2.5 bg-white rounded-xl border border-amber-100">
                  <strong>Bonbillak:</strong> Argia ematen dute.
                </div>
                <div class="p-2.5 bg-white rounded-xl border border-amber-100">
                  <strong>Motorrak:</strong> Biratzen dute, mugimendu mekanikoa eraginez.
                </div>
                <div class="p-2.5 bg-white rounded-xl border border-amber-100">
                  <strong>Burrunbagailuak (zumbador):</strong> Soinu sinpleak (alarmak) emititzen dituzte.
                </div>
                <div class="p-2.5 bg-white rounded-xl border border-amber-100">
                  <strong>Bozgorailuak:</strong> Soinu konplexuak (musika, ahotsa) emititzen dituzte.
                </div>
              </div>
            </div>
          </div>

          <!-- 3. KONTROL ELEMENTUAK -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">3</div>
            <div class="space-y-2 flex-1">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                  <span>🔘</span> 3. Kontrol Elementuak (Etengailuak & Sakagailuak)
                </h4>
                <span class="px-3 py-1 rounded-xl text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Sinboloak: —/ — (Etengailua) • —•/•— (Sakagailua)
                </span>
              </div>
              <p class="text-gray-700 leading-relaxed">
                Korronte elektrikoaren fluxua kontrolatzen dute: energia igarotzen utziz (zirkuitua itxiz) edo fluxua moztuz (energia igarotzea ekidinez).
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-sm">
                <div class="p-2.5 bg-white rounded-xl border border-amber-100">
                  <strong>Etengailua:</strong> Bi posizio egonkor ditu; batek energia igarotzen uzten du (piztuta) eta besteak ez (itzalita).
                </div>
                <div class="p-2.5 bg-white rounded-xl border border-amber-100">
                  <strong>Sakagailua:</strong> Botoia sakatzen den bitartean soilik ixten du zirkuitua (adibidez etxeko txirrinetan).
                </div>
              </div>
            </div>
          </div>

          <!-- 4. EROALEAK -->
          <div class="p-6 bg-amber-50/80 rounded-3xl border-2 border-amber-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-pink-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0">4</div>
            <div class="space-y-2 flex-1">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h4 class="text-xl font-black text-amber-950 flex items-center gap-2">
                  <span>➰</span> 4. Eroaleak (Kobrezko Kableak)
                </h4>
                <span class="px-3 py-1 rounded-xl text-xs font-black bg-pink-100 text-pink-800 border border-pink-200">
                  Sinboloa: ————— (Lerro zuzena)
                </span>
              </div>
              <p class="text-gray-700 leading-relaxed">
                Zirkuituko elementu guztien arteko lotura egiten duten kableak dira. Korronte elektrikoa sorgailutik hartzaileetara eramaten dute.
              </p>
              <div class="p-3 bg-white rounded-2xl border border-amber-200 text-sm sm:text-base text-amber-950">
                🔒 <strong>Segurtasun Egitura:</strong> Barrutik kobrezko hari mehez eginda daude, metal hori eroale aparta delako; kanpotik plastikoz estaltzen dira pertsonak deskarga elektrikoetatik isolatzeko.
              </div>
            </div>
          </div>
        </div>

        <!-- SINBOLO ESTANDARREN GARRANTZIA -->
        <div class="p-6 bg-indigo-50 rounded-3xl border-2 border-indigo-200 space-y-3 text-base sm:text-lg text-indigo-950">
          <h4 class="text-xl font-black text-indigo-900 flex items-center gap-2">
            <span>📐</span> Zergatik Erabiltzen Dira Sinbolo Normalizatuak?
          </h4>
          <p class="leading-relaxed text-sm sm:text-base">
            Sinbolo hauek <strong>nazioartean adostuta</strong> daude. Horri esker, munduko edozein ingeniari, ikasle edo teknikarik zirkuitu elektriko baten planoa irakurri, ulertu eta eraiki dezake, bere hizkuntza edo jatorria edozein dela ere.
          </p>
        </div>

        <!-- 3. GAIAREN AUTOEBALUAZIO GALDETEGI NAGUSIA -->
        <div id="theme3-master-quiz" class="g-card rounded-[32px] p-6 sm:p-8 bg-gradient-to-br from-amber-950 via-orange-950 to-slate-950 text-white shadow-2xl space-y-6 my-10 border-2 border-amber-500/40">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-700/60 pb-5">
            <div class="flex items-center gap-3">
              <span class="text-4xl">⚡</span>
              <div>
                <h3 class="text-2xl font-black font-title text-amber-400">3. Gaiaren Ebaluazio Galdetegia</h3>
                <p class="text-xs sm:text-sm text-amber-200">Frogatu zer ikasi duzun energiari, propietateei, iturriei eta zirkuitu elektrikoei buruz!</p>
              </div>
            </div>
            <div class="px-4 py-2 bg-amber-800/80 rounded-2xl font-black text-yellow-300 text-sm border border-amber-600 shadow-md">
              Puntuazioa: <span id="t3-score">0</span> / 5
            </div>
          </div>

          <div id="t3-quiz-body" class="space-y-5">
            <!-- Galderak dinamikoki app.js-en bidez -->
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Sorgailu Elektrikoa', desc: 'Energia kimiko, mekaniko edo argi-energia korronte elektriko bihurtzen duen osagaia.' },
      { term: 'Hartzaile Elektrikoa', desc: 'Elektrizitatea xurgatu eta lan erabilgarri bihurtzen duen gailua (argia, mugimendua, soinua).' },
      { term: 'Etengailua', desc: 'Zirkuitu baten konexioa modu iraunkorrean eten edo ixteko kontrol-mekanismoa.' },
      { term: 'Sakagailua', desc: 'Eskuz zanpatzen den bitartean soilik zirkuitua aktibatzen duen elementua.' },
      { term: 'Isolatzailea', desc: 'Korronte elektrikoari igarotzen uzten ez dion substantzia (plastikoa, beira, zura).' }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. GAIA: ARO GARAIKIDEA ETA OROIMEN HISTORIKOA (ARROSA / GORRIA)
  // --------------------------------------------------------------------------
  'mod4_sub1': {
    themeId: 4,
    themeColor: 'rose',
    themeName: '4. Gaia: Aro Garaikidea',
    badge: '⏳ 4. GAIA • ARROSA (LH 6)',
    code: '4.1',
    title: '4.1 Iraultzen Aroa (1776 - 1848)',
    lead: 'Aro Garaikidearen sorrera: AEBren independentzia, Frantziako Iraultza eta Industria Iraultzaren hasiera.',
    image: 'images/iraultzen_aroa.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=FF9vHRVYTJQ',
    videoTitle: 'GIZA / Bigarren industria iraultza (Lehen Hezkuntza)',
    videoAuthor: 'manuel irazabal (3:55)',
    prev: 'home',
    next: 'mod4_sub2',
    prevLabel: '← Gaien Menua',
    nextLabel: 'Hurrengoa: 4.2 Inperioen Aroa →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          <span class="kw-term kw-rose">Aro Garaikidea</span> XVIII. mendearen amaieran hasi zen. Aldaketa sakon hori bi gertakari handik markatu zuten munduan: <span class="kw-term kw-rose">1776ko Estatu Batuetako Independentzia Aldarrikapenak</span> eta <span class="kw-term kw-rose">1789ko Frantziako Iraultzak</span> (herritarren eskubideak eta berdintasuna aldarrikatuz).
        </p>

        <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900 mt-6">⚙️ Eskulangintzatik Makinen Automatizaziora:</h3>
        <p>
          Ordura arte salgai zeuden produktuak artisauek egiten zituzten, eskuz eta banan-banan tailerretan. Horregatik, produkzioa motela zen eta sal zitekeen kopurua mugatua. Baina zenbait asmatzaileri esker (<span class="kw-term kw-rose">lurrun-makina</span>, James Watt), produktuak egiteko prozesuak makinek hartu zituzten.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-base sm:text-lg">
          <div class="p-5 bg-rose-50/70 rounded-2xl border border-rose-100 space-y-2">
            <h4 class="text-lg font-bold text-rose-900">🏭 <span class="kw-term kw-rose">Industria Iraultza</span></h4>
            <p class="text-gray-700">Makina berriek lanaren automatizazioa ekarri zuten. Horri esker, ekoizpena izugarri bizkortu zen, salmentak igo ziren eta produktuen prezioak jaitsi egin ziren.</p>
          </div>
          <div class="p-5 bg-rose-50/70 rounded-2xl border border-rose-100 space-y-2">
            <h4 class="text-lg font-bold text-rose-900">🌎 Latinoamerikako Independentziak</h4>
            <p class="text-gray-700">Frantziako Iraultzaren ideiei jarraituz, Latinoamerikako herrialdeek Europako konkistatzaileen agindupeko koloniak askatu eta herrialde independente bihurtu ziren.</p>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Burgesia', desc: 'Fabriken, bankuen eta merkataritza handiaren jabe ziren hiritar aberatsen gizarte-klase berria.' },
      { term: 'Proletariotza', desc: 'Fabriketan soldata baten truke beren eskulanarekin lan egiten zuten langileen klasea.' },
      { term: 'Automatizazioa', desc: 'Makina mekanikoen bidez lehen eskuz egiten ziren lanak modu azkarrean eta automatikoan egitea.' },
      { term: 'Eskulangintza', desc: 'Tresna sinpleak erabiliz tailerretan produktuak banan-banan eta eskuz fabrikatzeko antzinako lanbidea.' },
      { term: 'Konstituzioa', desc: 'Herrialde bateko lege nagusien bilduma, herritarren askatasunak, eskubideak eta betebeharrak jasotzen dituena.' }
    ]
  },

  'mod4_sub2': {
    themeId: 4,
    themeColor: 'rose',
    themeName: '4. Gaia: Aro Garaikidea',
    badge: '⏳ 4. GAIA • ARROSA (LH 6)',
    code: '4.2',
    title: '4.2 Inperioen Aroa (1848 - 1914)',
    lead: 'Kapitalismoaren sorrera, koloniak munduan zehar eta aurrerapen zientifiko-teknologikoak.',
    image: 'images/inperioen_aroa.jpg',
    prev: 'mod4_sub1',
    next: 'mod4_sub3',
    prevLabel: '← 4.1 Iraultzen Aroa',
    nextLabel: 'Hurrengoa: 4.3 Krisialdi Garaia →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Industria Iraultzaren hedapenak produktu eta zerbitzuen ekoizpen itzela eta salmenta globala ekarri zuen, <span class="kw-term kw-rose">kapitalismo</span> izeneko sistema ekonomikoa finkatuz munduan.
        </p>

        <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900 mt-6">🌍 Lehengaien Bilaketa eta Kolonialismoa:</h3>
        <p>
          Europako potentzia handiek (Erresuma Batua, Frantzia, Alemania...) beren fabriketan produktuak masan ekoizteko lehengai merkeak behar zituzten (kotoia, burdina, ikatza, kautxua). Ondorioz, Afrika eta Asiako lurralde zabalak inbaditu eta beren artean banatu zituzten, <span class="kw-term kw-rose">koloniak</span> ezarriz.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-base sm:text-lg">
          <div class="p-5 bg-rose-50/70 rounded-2xl border border-rose-100 space-y-2">
            <h4 class="text-lg font-bold text-rose-900">🚂 Garraioen Iraultza</h4>
            <p class="text-gray-700">Lurrun-trena eta lurrunontziak hedatu ziren; kontinenteen arteko distantziak laburtu eta merkantzien zein bidaiarien mugikortasuna biderkatu zen.</p>
          </div>
          <div class="p-5 bg-rose-50/70 rounded-2xl border border-rose-100 space-y-2">
            <h4 class="text-lg font-bold text-rose-900">🔬 Aurrerapen Zientifikoak</h4>
            <p class="text-gray-700">Medikuntzan aurrerapauso erraldoiak eman ziren (txertoak, anestesia, mikrobioen aurkikuntza) eta biztanleriaren bizi-itxaropena handitzen hasi zen.</p>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Inperialismoa', desc: 'Herrialde boteretsuek munduko beste lurralde batzuk menpean hartu eta ekonomikoki ustiatzeko politika.' },
      { term: 'Kapitalismoa', desc: 'Jabetza pribatuan eta merkatu librean oinarritutako sistema ekonomikoa, etekinak lortzea helburu duena.' },
      { term: 'Masa-Ekoizpena', desc: 'Fabriketan produktu berdinen milaka ale katean eta denbora laburrean fabrikatzeko metodo industriala.' },
      { term: 'Metropolia', desc: 'Mundu osoan zehar koloniak konkistatu eta administratzen dituen herrialde nagusia edo inperioa.' },
      { term: 'Telegrafoa', desc: 'Kable elektrikoen bidez Morse kodean mezuak ia berehala leku urrunetara bidaltzen zituen lehen gailua.' }
    ]
  },

  'mod4_sub3': {
    themeId: 4,
    themeColor: 'rose',
    themeName: '4. Gaia: Aro Garaikidea',
    badge: '⏳ 4. GAIA • ARROSA (LH 6)',
    code: '4.3',
    title: '4.3 Krisialdi Garaia eta Mundu Gerrak (1914 - 1945)',
    lead: 'Lehen Mundu Gerra, 1929ko Depresio Handia, totalitarismoen sorrera eta Bigarren Mundu Gerra.',
    image: 'images/krisialdi_garaia.jpg',
    prev: 'mod4_sub2',
    next: 'mod4_sub4',
    prevLabel: '← 4.2 Inperioen Aroa',
    nextLabel: 'Hurrengoa: 4.4 Guda Zibila →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Inperioen arteko lehiak eta tirabirek gatazka bortitzen garaiak ekarri zituzten XX. mendearen lehen erdian: <span class="kw-term kw-rose">Krisialdi Garaia (1914-1945)</span>.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-base sm:text-lg">
          <div class="p-5 bg-rose-50/70 rounded-2xl border border-rose-100 space-y-2">
            <h4 class="text-lg font-bold text-rose-900">💥 Lehen Mundu Gerra (1914-1918)</h4>
            <p class="text-gray-700">Europako potentzien arteko lehen gerra orokorra izan zen. Milioika hildako utzi zituen lubakietako guduetan.</p>
          </div>
          <div class="p-5 bg-rose-50/70 rounded-2xl border border-rose-100 space-y-2">
            <h4 class="text-lg font-bold text-rose-900">📉 1929ko Depresio Handia</h4>
            <p class="text-gray-700">New Yorkeko poltsaren hondamendiak mundu mailako krisi ekonomiko eta langabezia handia eragin zuen 30eko hamarkadan.</p>
          </div>
        </div>

        <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900 mt-6">⚠️ Totalitarismoak eta Bigarren Mundu Gerra (1939-1945):</h3>
        <p>
          Krisi sakonak muturreko alderdi faxistak indartu zituen (Hitlerren Alemania, Mussoliniren Italia). Bigarren Mundu Gerran ardatzeko potentziek inguruko estatuak inbaditu zituzten. Naziek <strong>18 milioi pertsona baino gehiago</strong> erail zituzten kontzentrazio-esparruetan (<span class="kw-term kw-rose">Holokaustoa</span>: juduak, ijitoak, LGTBI pertsonak eta aurkari politikoak).
        </p>

        <div class="p-5 bg-gray-50 rounded-2xl border border-gray-200 text-base sm:text-lg">
          ☢️ <strong>Gerraren Amaiera (1945):</strong> AEBk Hiroshima eta Nagasaki hirietan lehen bonbardaketa nuklearrak egin zituen. Aliatuek irabazi zuten gerra eta giza eskubideak babesteko Nazio Batuen Erakundea (NBE) jaio zen.
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Totalitarismoa', desc: 'Gobernuak gizartearen alderdi guztiak, pentsamendua eta askatasunak erabat kontrolatzen dituen erregimena.' },
      { term: 'Depresio Handia', desc: '1929an hasi zen krisi ekonomiko larria, munduan enpresa asko itxi eta milioika langile kalean utzi zituena.' },
      { term: 'Holokaustoa', desc: 'Bigarren Mundu Gerran naziek 6 milioi judu eta beste milioika biktima erailtzeko antolatutako sarraski sistematikoa.' },
      { term: 'Kontzentrazio-Esparrua', desc: 'Diktadurek pertsonak arrazoi politiko edo arrazagatik giltzapetuta eta esklabo lanetan edukitzeko kartzela-gunea.' },
      { term: 'Nazio Batuen Erakundea (NBE)', desc: '1945ean munduan bakea, justizia eta giza eskubideak zaintzeko sortutako nazioarteko erakundea.' }
    ]
  },

  'mod4_sub4': {
    themeId: 4,
    themeColor: 'rose',
    themeName: '4. Gaia: Aro Garaikidea',
    badge: '⏳ 4. GAIA • ARROSA (LH 6)',
    code: '4.4',
    title: '4.4 Espainiako Guda Zibila (1936 - 1939)',
    lead: 'Bigarren Errepublika, estatu-kolpea, bi bandoen arteko gerra latza eta Euskadiren defentsa.',
    image: 'images/guda_zibila.jpg',
    prev: 'mod4_sub3',
    next: 'mod4_sub5',
    prevLabel: '← 4.3 Krisialdi Garaia',
    nextLabel: 'Hurrengoa: 4.5 Gernikako Bonbardaketa →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          <span class="kw-term kw-rose">Guda zibila</span> herrialde bakar baten barruan gertatzen den guda da, non parte-hartzaile gehienak zibilak (herritar arruntak) diren. Ideologia eta interes aurkakoak defendatzen dituzten bandoen arteko gatazka armatua da.
        </p>

        <div class="p-5 bg-rose-50/80 rounded-2xl border border-rose-200 space-y-2">
          <h4 class="text-xl font-bold text-rose-900">🏛️ Bigarren Errepublika eta 1936ko Estatu-Kolpea:</h4>
          <p>
            Guda hasi aurretik, Espainia errepublika demokratikoa zen (herritarrek hautatutako presidentea zuen). 1936ko uztailaren 18an, militar talde batek estatu-kolpea eman zuen gobernu demokratikoa kentzeko. Kolpeak guztiz arrakastarik izan ez zuenez, hiru urteko guda zibila piztu zen.
          </p>
        </div>

        <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900 mt-6">⚔️ Gudan Aurrez Aurre Jarri Ziren Bi Bandoak:</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-base sm:text-lg">
          <div class="p-5 bg-blue-50/70 rounded-2xl border border-blue-200 space-y-2">
            <h4 class="text-lg font-bold text-blue-900">🔵 <span class="kw-term kw-rose">Bando Errepublikarra</span></h4>
            <p class="text-gray-700">Lege demokratikoaren, askatasunaren eta herriaren aldekoak: langileak, intelektualak, komunistak, anarkistak eta <span class="kw-term kw-rose">Eusko Jaurlaritza</span> (Jose Antonio Agirre lehendakariarekin).</p>
          </div>
          <div class="p-5 bg-red-50/70 rounded-2xl border border-red-200 space-y-2">
            <h4 class="text-lg font-bold text-red-900">🔴 <span class="kw-term kw-rose">Bando Nazionala</span></h4>
            <p class="text-gray-700">Francisco Franco jeneralaren inguruan matxinatutako militarrak eta jabe aberatsak. Alemania Naziaren eta Italia Faxistaren soldadu, hegazkin eta armamentu laguntza zuzena jaso zuten.</p>
          </div>
        </div>

        <div class="p-5 bg-gray-50 rounded-2xl border border-gray-200 text-base sm:text-lg">
          🛡️ <strong>Euskadi Gudan:</strong> Euskal soldaduek Bilbo inguratzen zuen <span class="kw-term kw-rose">Burdinezko Hesia</span> eraiki zuten frankisten erasoetatik herritarrak babesteko.
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Guda Zibila', desc: 'Herrialde baten barruan herritarren eta alderdien artean gertatzen den borroka armatu krudela.' },
      { term: 'Estatu-Kolpea', desc: 'Militarrek indarrez gobernu legitimo bat kentzeko eta boterea berenganatzeko egindako ekintza bortitza.' },
      { term: 'Bando Errepublikarra', desc: '1936ko hauteskundeetan aukeratutako Errepublika eta askatasun demokratikoak defendatu zituzten indarrak.' },
      { term: 'Bando Nazionala', desc: 'Gobernu demokratikoaren aurka altxatutako eta Francoren agindupean elkartutako indar militarrak.' },
      { term: 'Burdinezko Hesia', desc: 'Bilbo eta Bizkaia frankisten hegazkin eta soldaduen erasoetatik babesteko mendietan eraikitako gotorleku-lerroa.' }
    ]
  },

  'mod4_sub5': {
    themeId: 4,
    themeColor: 'rose',
    themeName: '4. Gaia: Aro Garaikidea',
    badge: '⏳ 4. GAIA • ARROSA (LH 6)',
    code: '4.5',
    title: '4.5 Gernikako Bonbardaketa eta Memoria Historikoa (1937)',
    lead: '1937ko apirilaren 26a, Kondor Legioa, Gernikako Arbolaren ikurra eta Picassoren artelana.',
    image: 'images/gernika.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=WvPa_kCMCVM',
    videoTitle: 'Gernika 1937ko Bonbardaketak eta Testigantzak',
    videoAuthor: 'Ahotsak Ahozko Ondarea',
    prev: 'mod4_sub4',
    next: 'mod4_sub6',
    prevLabel: '← 4.4 Guda Zibila',
    nextLabel: 'Hurrengoa: 4.6 Frankismoa →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          1937ko apirilaren 26an, astelehena eta asteroko azoka eguna zela aprobetxatuz, hegazkin alemaniarrek (<span class="kw-term kw-rose">Kondor Legioa</span>) eta italiarrek <span class="kw-term kw-rose">Gernika bonbardatu</span> zuten.
        </p>

        <div class="p-6 bg-rose-50/80 rounded-2xl border border-rose-200 space-y-3">
          <h4 class="text-xl font-bold text-rose-900">🕊️ Gernikako Arbola: Bakearen Sinbolo Unibertsala</h4>
          <p class="text-gray-800">
            Bonbardaketaren helburua herritar zibilak izutzea eta herria erabat suntsitzea izan zen. Herri gehiena erre bazen ere, <span class="kw-term kw-rose">Gernikako Arbolak</span> eta Batzarretxeak zutik iraun zuten, mundu osorako bakearen eta euskal askatasunaren sinbolo bilakatuz.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-base sm:text-lg">
          <div class="p-5 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
            <h4 class="text-lg font-bold text-gray-900">🎨 Pablo Picasso eta "Guernica"</h4>
            <p class="text-gray-700">Picassok oihal zuri-beltz erraldoi batean (3,5 x 7,8 metro) margotu zuen sarraskia Pariseko Erakusketa Unibertsalerako, gerren basakeria salatzeko.</p>
          </div>
          <div class="p-5 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
            <h4 class="text-lg font-bold text-gray-900">📜 Memoria Historikoa Euskadin</h4>
            <p class="text-gray-700">Gernikaz gain, Erandio, Durango eta Otxandioko bonbardaketak gogoratzea ezinbestekoa da giza eskubideak eta bakea bermatzeko.</p>
          </div>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Kondor Legioa', desc: 'Hitlerrek Francori laguntzeko Espainiara eta Euskal Herrira bidalitako eliteko hegazkin-armada alemaniarra.' },
      { term: 'Zibilen Babesa', desc: 'Nazioarteko legeek agintzen duten araua: gerran herritar errugabeak eta haurrak ezin dira inoiz erasotu.' },
      { term: 'Bakearen Sinboloa', desc: 'Indarkeriaren aurrean adiskidetzea, elkarrizketa eta giza eskubideak aldarrikatzen dituen ikurra.' },
      { term: 'Guernica (Koadroa)', desc: 'Picassok gerraren krudelkeria eta biktimen oihua munduari erakusteko margotutako maisulan unibertsala.' },
      { term: 'Memoria Historikoa', desc: 'Iraganean injustizia eta gerra pairatu zuten biktimak aitortzeko eta gogoratzeko gizarte-betebeharra.' }
    ]
  },

  'mod4_sub6': {
    themeId: 4,
    themeColor: 'rose',
    themeName: '4. Gaia: Aro Garaikidea',
    badge: '⏳ 4. GAIA • ARROSA (LH 6)',
    code: '4.6',
    title: '4.6 Frankismoa eta Diktadura (1939 - 1975)',
    lead: 'Francisco Francoren erregimen militarra, errepresioa, euskararen debekua eta autarkia.',
    image: 'images/frankismoa.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=O5foYhiE3H8',
    videoTitle: 'Frankismoa, aro iluna euskararentzat (LH / DBH eskola proiektua)',
    videoAuthor: 'Haztegi Ikastola (3:45)',
    prev: 'mod4_sub5',
    next: 'mod4_sub7',
    prevLabel: '← 4.5 Gernika',
    nextLabel: 'Hurrengoa: 4.7 Trantsizioa & Demokrazia →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          Guda Zibila amaitu ostean, Francisco Franco jeneralak 36 urteko <span class="kw-term kw-rose">diktadura militarra</span> ezarri zuen Espainian eta Euskal Herrian (1939-1975).
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-base sm:text-lg">
          <div class="p-5 bg-rose-50/70 rounded-2xl border border-rose-100 space-y-2">
            <h4 class="text-lg font-bold text-rose-900">🚫 Askatasun Politikoen Debekua</h4>
            <p class="text-gray-700">Hauteskundeak, alderdi politiko guztiak eta sindikatuak debekatu ziren. Herritarrek ezin zuten askatasunez iritzirik eman eta zentsura gogorra ezarri zen.</p>
          </div>
          <div class="p-5 bg-rose-50/70 rounded-2xl border border-rose-100 space-y-2">
            <h4 class="text-lg font-bold text-rose-900">🗣️ Euskararen eta Euskal Kulturaren Jazarpena</h4>
            <p class="text-gray-700">Euskara debekatuta zegoen eskoletan, kalean eta administrazioan. Euskal herritarrek lehen <span class="kw-term kw-rose">ikastola klandestinoak</span> sortu zituzten etxeetan hizkuntzari eusteko.</p>
          </div>
        </div>

        <div class="p-5 bg-gray-50 rounded-2xl border border-gray-200 text-base sm:text-lg space-y-2">
          <h4 class="text-xl font-bold text-gray-900">🍞 Autarkia eta Erbesteko Eusko Jaurlaritza:</h4>
          <p class="text-gray-700">
            Lehen urteetan herriak gosete handia bizi izan zuen, janaria lortzeko <span class="kw-term kw-rose">errazionamendu-kartillak</span> erabiliz. Bitartean, Eusko Jaurlaritzak erbestetik jarraitu zuen lanean (Jose Antonio Agirre eta Jesus Maria Leizaola lehendakariekin).
          </p>
        </div>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Diktadura Militarra', desc: 'Botere guztiak armadako buruzagi bakar baten esku dituen erregimena, hauteskunderik eta askatasunik gabe.' },
      { term: 'Zentsura', desc: 'Gobernuak egunkariak, liburuak, kantuak edo iritziak zentsuratu eta debekatzeko duen kontrol-mekanismoa.' },
      { term: 'Errazionamendu-Kartilla', desc: 'Gerraosteko eskasia garaian herritar bakoitzari janari kopuru zehatz bat emateko erabiltzen zen liburuxka.' },
      { term: 'Klandestinitatea', desc: 'Diktaduraren zigor eta kartzela arriskuaren aurrean ezkutuan egindako jarduera kultural edo politikoa.' },
      { term: 'Erbestea', desc: 'Gobernuaren jazarpenetik ihesi norberaren lurraldetik kanpo, beste herrialde batean bizi beharra.' }
    ]
  },

  'mod4_sub7': {
    themeId: 4,
    themeColor: 'rose',
    themeName: '4. Gaia: Aro Garaikidea',
    badge: '⏳ 4. GAIA • ARROSA (LH 6)',
    code: '4.7',
    title: '4.7 Trantsizioa eta Demokrazia (1975 - Gaur Egun)',
    lead: 'Francoren heriotza, 1978ko Konstituzioa, 1979ko Gernikako Estatutua eta Euskal Autogobernua.',
    image: 'images/parlamento_espanol.jpg',
    prev: 'mod4_sub6',
    next: 'mod4_mindmap',
    prevLabel: '← 4.6 Frankismoa',
    nextLabel: 'Hurrengoa: 4.8 Buru-Mapa Osoa →',
    htmlContent: `
      <div class="space-y-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
        <p>
          1975eko azaroan Franco diktadorea hil zenean, <span class="kw-term kw-rose">Trantsizio Demokratikoa</span> hasi zen. Diktaduratik demokraziara modu baketsuan igarotzeko bidea ireki zen.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-base sm:text-lg">
          <div class="p-5 bg-emerald-50/70 rounded-2xl border border-emerald-100 space-y-2">
            <h4 class="text-lg font-bold text-emerald-900">🗳️ Hauteskundeak eta 1978ko Konstituzioa</h4>
            <p class="text-gray-700">1977an 40 urteren ondoren lehen hauteskunde askeak ospatu ziren, eta 1978an herritarrek Konstituzioa onartu zuten, botere banaketa eta oinarrizko eskubideak bermatuz.</p>
          </div>
          <div class="p-5 bg-emerald-50/70 rounded-2xl border border-emerald-100 space-y-2">
            <h4 class="text-lg font-bold text-emerald-900">📜 1979ko Gernikako Estatutua</h4>
            <p class="text-gray-700">Euskadik bere <span class="kw-term kw-rose">autogobernua</span> berreskuratu zuen: Euskal Autonomia Erkidegoa jaio zen, bere erakunde propioekin (Eusko Jaurlaritza eta Eusko Legebiltzarra Gasteizen).</p>
          </div>
        </div>

        <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900 mt-6">🏥 Euskal Erakundeak eta Zerbitzu Publikoak Gaur Egun:</h3>
        <p>
          Autogobernuari esker, Euskadik zerbitzu publiko aurreratuak garatu ditu: <span class="kw-term kw-rose">Osakidetza</span> (osasun-zerbitzu unibertsala), euskal hezkuntza-sistema publikoa, Ertzaintza eta euskararen ofizialtasuna eta normalizazioa gizarte osoan.
        </p>
      </div>
    `,
    relatedVocabulary: [
      { term: 'Trantsizio Demokratikoa', desc: 'Diktaduratik demokraziara, askatasunetara eta konstituziora igarotzeko garaia (1975-1978).' },
      { term: 'Autonomia Estatutua', desc: 'Euskal Autonomia Erkidegoaren oinarrizko erakunde-araua, autogobernuaren eskumenei bide ematen diena.' },
      { term: 'Eusko Legebiltzarra', desc: 'Gasteizen kokatua, euskal herritarren ordezkariek legeak eztabaidatu eta bozkatzen dituzten parlamentua.' },
      { term: 'Kontzertu Ekonomikoa', desc: 'Euskadiko foru-aldundiek zergak beren kabuz bildu eta kudeatzeko duten eskubide historiko eta legala.' },
      { term: 'Hauteskunde Askeak', desc: 'Herritarrek beren borondatez eta sekretuan beren ordezkari politikoak aukeratzeko boto-eskubidea.' }
    ]
  }
};
