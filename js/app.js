// ==========================================================================
// LH6 ESPLORATZAILEAK - APLIKAZIO KONTROLATZAILEA & BANAKAKO ORRIALDEAK (SPA)
// ==========================================================================

const app = {
  currentView: 'home',
  lastActiveThemeId: 1,
  sidebarOpen: false,
  circuitState: {
    mode: 'serie',
    closed: false,
    bulb1: true,
    bulb2: true
  },

  init() {
    this.updateReadingProgress();
    window.addEventListener('scroll', () => this.updateReadingProgress());
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeCountryModal();
        this.closeSidebar();
        this.closeKeywordPopover();
      }
    });
    this.initSidebarHover();
    this.goTo('home');
  },

  closeKeywordPopover() {
    const pop = document.getElementById('floating-keyword-popover');
    if (pop) pop.classList.add('hidden');
  },

  // ==========================================================================
  // SPA ROUTER: BANAKAKO ORRIALDE BAKARRA ERRENDERIZATU (PÁGINAS INDIVIDUALES)
  // ==========================================================================
  goTo(viewId) {
    this.currentView = viewId;
    if (viewId && viewId.startsWith('mod1')) this.lastActiveThemeId = 1;
    else if (viewId && viewId.startsWith('mod2')) this.lastActiveThemeId = 2;
    else if (viewId && viewId.startsWith('mod3')) this.lastActiveThemeId = 3;
    else if (viewId && viewId.startsWith('mod4')) this.lastActiveThemeId = 4;

    const mainContainer = document.getElementById('app-main-content');
    if (!mainContainer) return;

    // 1. HOME (MENU NAGUSIA)
    if (viewId === 'home') {
      mainContainer.innerHTML = this.renderHomeView();
    }
    // 2. AZPIGAIAREN BANAKAKO ORRIALDEA (PÁGINA INDIVIDUAL DEL SUBTEMA)
    else if (SUBTOPICS_DATA[viewId]) {
      mainContainer.innerHTML = this.renderSubtopicView(viewId, SUBTOPICS_DATA[viewId]);
      
      // Widgets aktibatu
      if (viewId === 'mod1_sub2') {
        this.selectClimate('atlantikoa');
      } else if (viewId === 'mod1_sub3') {
        this.initMapSubtopic();
      } else if (viewId === 'mod1_sub4') {
        this.calculateDemo();
      } else if (viewId === 'mod1_sub6') {
        this.initJobQuiz();
      } else if (viewId === 'mod2_sub4') {
        this.initOrganQuiz();
      } else if (viewId === 'mod2_sub11') {
        this.initTheme2MasterQuiz();
      } else if (viewId === 'mod3_sub4') {
        this.updateCircuitVisuals();
      } else if (viewId === 'mod3_sub5') {
        this.initTheme3MasterQuiz();
      }
    }
    // 3. BURU-MAPA (MIND MAP INDIBIDUALA)
    else if (viewId.endsWith('_mindmap')) {
      mainContainer.innerHTML = this.renderMindmapView(viewId);
    }

    // Scroll gora
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Sidebar estekak nabarmendu
    document.querySelectorAll('.sidebar-item').forEach(btn => {
      if (btn.getAttribute('data-view') === viewId) {
        btn.classList.add('bg-blue-100', 'text-blue-900', 'font-bold');
      } else {
        btn.classList.remove('bg-blue-100', 'text-blue-900', 'font-bold');
      }
    });

    this.closeSidebar();
  },

  // --------------------------------------------------------------------------
  // HOME / MENU NAGUSIAREN TXANTILOIA
  // --------------------------------------------------------------------------
  renderHomeView() {
    return `
      <section id="view-home" class="min-h-screen pb-24">
        
        <!-- HERO -->
        <div class="relative py-16 px-4 sm:px-6 lg:px-8 text-center space-y-5 overflow-hidden">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold tracking-wide uppercase shadow-sm border border-blue-200">
            <span>🏛️</span> Euskadiko LH 6. Mailako Curriculuma • Dekretua 77/2023
          </div>

          <h1 class="text-4xl sm:text-6xl font-black font-title tracking-tight text-gray-900 max-w-4xl mx-auto leading-tight">
            Ikasi, Arakatu eta Menderatu <br><span class="bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-600 bg-clip-text text-transparent">LH 6. Mailako Edukiak</span>
          </h1>

          <p class="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
            Azpigaia bakoitzak bere <strong>orrialde indibidual osoa</strong> du letra-tamaina handiarekin, hitz gako koloreztatuekin eta amaierako <strong>hiztegi osagarri erlazionatuarekin</strong>.
          </p>

          <!-- Indicador de barra lateral -->
          <div class="pt-2">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-gray-200 text-sm text-gray-600 shadow-sm">
              <span>👈</span> <strong>Aholkua:</strong> Hurbildu kurtsorea ezkerreko ertzeko GAIAK erlaitzera edo sakatu goiko "Gaiak & Azpigaiak" botoia!
            </span>
          </div>
        </div>

        <!-- 4 TARJETAS PRINCIPALES DE LOS TEMAS -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- CARD 1: EUROPA ETA EUSKADI (URDINA) -->
          <article onclick="app.goTo('mod1_sub1')" class="g-card rounded-[32px] overflow-hidden cursor-pointer flex flex-col justify-between border-t-8 border-t-blue-600 group">
            <div class="parallax-wrapper h-56 w-full relative">
              <img src="images/mapa_fisikoa.jpg" alt="Europa mapa fisikoa eta politikoa" class="parallax-img w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-600 text-white shadow-md">
                1. GAIA • URDINA
              </span>
              <span class="absolute bottom-4 left-4 text-white text-sm font-bold drop-shadow">
                7 Azpigai + Buru-Mapa Osoa
              </span>
            </div>
            <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div class="space-y-2">
                <h3 class="text-2xl sm:text-3xl font-black font-title text-gray-900 group-hover:text-blue-600 transition-colors">
                  Europa, Biztanleria eta Migrazioak
                </h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Geografia fisikoa eta politikoa, 5 klimak, mapak, biztanleria, Europako hizkuntzak eta euskara, 3 lan sektoreak eta migrazioak.
                </p>
              </div>
              <div class="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <span class="text-sm font-bold text-blue-600 flex items-center gap-1.5">
                  <span>Arakatu Gaia (1.1 azpigaia)</span>
                  <span class="w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-black inline-flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all text-xs">➜</span>
                </span>
                <button onclick="event.stopPropagation(); imprimatuTema(1);" 
                        class="btn-print-theme inprimatu-btn print-action-button no-print inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black shadow-sm hover:shadow transition-all cursor-pointer"
                        title="Inprimatu edo deskargatu 1. Gaia PDF A4 formatuan">
                  <span>📄</span>
                  <span>Inprimatu / Deskargatu Gaia PDF</span>
                </button>
              </div>
            </div>
          </article>

          <!-- CARD 2: IZAKI BIZIDUNEN EGITURA ETA UGALKETA (BERDEA) -->
          <article onclick="app.goTo('mod2_sub1')" class="g-card rounded-[32px] overflow-hidden cursor-pointer flex flex-col justify-between border-t-8 border-t-emerald-600 group">
            <div class="parallax-wrapper h-56 w-full relative">
              <img src="images/zelula_antolaketa.jpg" alt="Zelula eta antolaketa mailak" class="parallax-img w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-600 text-white shadow-md">
                2. GAIA • BERDEA
              </span>
              <span class="absolute bottom-4 left-4 text-white text-sm font-bold drop-shadow">
                11 Azpigai + Galdetegi Interaktiboak + Buru-Mapa
              </span>
            </div>
            <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div class="space-y-2">
                <h3 class="text-2xl sm:text-3xl font-black font-title text-gray-900 group-hover:text-emerald-600 transition-colors">
                  Izaki Bizidunen Egitura eta Ugalketa
                </h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Antolaketa-mailak, zelulak (prokariotoak eta eukariotoak), ehunak, organoak, 5 zentzumenak, nerbio-sistema, lokomozioa, ugalketa, ernalketa, haurdunaldia eta bizitzaren etapak.
                </p>
              </div>
              <div class="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <span class="text-sm font-bold text-emerald-600 flex items-center gap-1.5">
                  <span>Arakatu Gaia (2.1 azpigaia)</span>
                  <span class="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 font-black inline-flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all text-xs">➜</span>
                </span>
                <button onclick="event.stopPropagation(); imprimatuTema(2);" 
                        class="btn-print-theme inprimatu-btn print-action-button no-print inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black shadow-sm hover:shadow transition-all cursor-pointer"
                        title="Inprimatu edo deskargatu 2. Gaia PDF A4 formatuan">
                  <span>📄</span>
                  <span>Inprimatu / Deskargatu Gaia PDF</span>
                </button>
              </div>
            </div>
          </article>

          <!-- CARD 3: ENERGIA & STEAM (LARANJA / HORIA) -->
          <article onclick="app.goTo('mod3_sub1')" class="g-card rounded-[32px] overflow-hidden cursor-pointer flex flex-col justify-between border-t-8 border-t-amber-500 group">
            <div class="parallax-wrapper h-56 w-full relative">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26bjjVuFsf_TzuETFtS1Jl2fG_BvPdyyANQq9QoMMOYi9xksssaxSPPd0&s=10" alt="Energia berriztagarriak eta garbiak" class="parallax-img w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500 text-slate-950 font-black shadow-md">
                3. GAIA • LARANJA
              </span>
              <span class="absolute bottom-4 left-4 text-white text-sm font-bold drop-shadow">
                4 Azpigai + Zirkuituen Simulagailua + Buru-Mapa
              </span>
            </div>
            <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div class="space-y-2">
                <h3 class="text-2xl sm:text-3xl font-black font-title text-gray-900 group-hover:text-amber-600 transition-colors">
                  Energia, Elektrizitatea eta STEAM
                </h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Energiaren 4 propietateak, Euskadiko trantsizio ekologikoa (Mutrikuko olatu planta), zirkuitu elektriko interaktiboak seriean eta paraleloan, magnetismoa eta 5E metodoa.
                </p>
              </div>
              <div class="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <span class="text-sm font-bold text-amber-600 flex items-center gap-1.5">
                  <span>Arakatu Gaia (3.1 azpigaia)</span>
                  <span class="w-6 h-6 rounded-full bg-amber-50 text-amber-600 font-black inline-flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all text-xs">➜</span>
                </span>
                <button onclick="event.stopPropagation(); imprimatuTema(3);" 
                        class="btn-print-theme inprimatu-btn print-action-button no-print inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black shadow-sm hover:shadow transition-all cursor-pointer"
                        title="Inprimatu edo deskargatu 3. Gaia PDF A4 formatuan">
                  <span>📄</span>
                  <span>Inprimatu / Deskargatu Gaia PDF</span>
                </button>
              </div>
            </div>
          </article>

          <!-- CARD 4: ARO GARAIKIDEA (ARROSA / GORRIA) -->
          <article onclick="app.goTo('mod4_sub1')" class="g-card rounded-[32px] overflow-hidden cursor-pointer flex flex-col justify-between border-t-8 border-t-rose-600 group">
            <div class="parallax-wrapper h-56 w-full relative">
              <img src="images/iraultzen_aroa.jpg" alt="Aro Garaikidea eta Industria Iraultza" class="parallax-img w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-600 text-white shadow-md">
                4. GAIA • ARROSA
              </span>
              <span class="absolute bottom-4 left-4 text-white text-sm font-bold drop-shadow">
                7 Azpigai + Memoria Historikoa + Buru-Mapa
              </span>
            </div>
            <div class="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div class="space-y-2">
                <h3 class="text-2xl sm:text-3xl font-black font-title text-gray-900 group-hover:text-rose-600 transition-colors">
                  Aro Garaikidea eta Memoria Historikoa
                </h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Iraultzen aroa, Inperioen aroa, Krisialdi garaia eta mundu gerrak, Espainiako guda zibila, Gernikako bonbardaketa, Frankismoa, eta Trantsizio demokratikoa Euskadin.
                </p>
              </div>
              <div class="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <span class="text-sm font-bold text-rose-600 flex items-center gap-1.5">
                  <span>Arakatu Gaia (4.1 azpigaia)</span>
                  <span class="w-6 h-6 rounded-full bg-rose-50 text-rose-600 font-black inline-flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all text-xs">➜</span>
                </span>
                <button onclick="event.stopPropagation(); imprimatuTema(4);" 
                        class="btn-print-theme inprimatu-btn print-action-button no-print inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black shadow-sm hover:shadow transition-all cursor-pointer"
                        title="Inprimatu edo deskargatu 4. Gaia PDF A4 formatuan">
                  <span>📄</span>
                  <span>Inprimatu / Deskargatu Gaia PDF</span>
                </button>
              </div>
            </div>
          </article>

        </div>

      </section>
    `;
  },

  // --------------------------------------------------------------------------
  // BIDEO KUDEATZAILE INTEGRATUA (REPRODUCTOR DE VÍDEO EN LA PROPIA WEB)
  // --------------------------------------------------------------------------
  getYoutubeId(url) {
    if (!url) return null;
    const m = url.match(/(?:v=|\/embed\/|\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return m ? m[1] : null;
  },

  playVideoInContainer(key, videoId) {
    const container = document.getElementById(`media-container-${key}`);
    if (!container) return;
    const sub = SUBTOPICS_DATA[key];
    const vTitle = (sub && sub.videoTitle) ? sub.videoTitle : 'Bideo didaktikoa';

    container.innerHTML = `
      <div class="w-full space-y-3">
        <div class="flex items-center justify-between px-1">
          <span class="text-xs sm:text-sm font-bold text-red-600 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
            <span class="truncate max-w-[220px] sm:max-w-md">Bideoa martxan: ${vTitle}</span>
          </span>
          <button onclick="app.showImageInContainer('${key}')" 
                  class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-black flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                  title="Itzuli argazki orokorrera">
            <span>🖼️</span>
            <span>Argazkia berriz ikusi</span>
          </button>
        </div>
        <div class="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border-2 border-red-500/60">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" 
            title="${vTitle}" 
            class="w-full h-full border-0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    `;
  },

  showImageInContainer(key) {
    const container = document.getElementById(`media-container-${key}`);
    if (!container) return;
    const sub = SUBTOPICS_DATA[key];
    if (!sub || !sub.image) return;
    const vId = this.getYoutubeId(sub.videoUrl);

    container.innerHTML = `
      <div onclick="app.playVideoInContainer('${key}', '${vId}')" 
           class="relative block w-full text-center cursor-pointer group" 
           title="Klikatu irudia bideoa hemen erreproduzitzeko: ${sub.videoTitle || sub.title}">
        <img src="${sub.image}" alt="${sub.title}" class="w-full h-auto max-h-[640px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]">
        <!-- Bideo Ikono Gainjarria (Play Badge) -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300 ring-4 ring-white/90">
            <svg class="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <div class="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-black shadow-lg flex items-center gap-2 border border-white/20">
          <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
          <span>▶️ Klikatu bideoa ikusteko</span>
        </div>
      </div>
    `;
  },

  // --------------------------------------------------------------------------
  // AZPIGAIAREN BANAKAKO ORRIALDE INDIBIDUALA (SOLO ESTE SUBTEMA)
  // --------------------------------------------------------------------------
  renderSubtopicView(key, sub) {
    const themeBorder = sub.themeColor === 'blue' ? 'border-l-blue-600' :
                        sub.themeColor === 'emerald' ? 'border-l-emerald-600' :
                        sub.themeColor === 'amber' ? 'border-l-amber-500' : 'border-l-rose-600';

    const themeBadgeBg = sub.themeColor === 'blue' ? 'bg-blue-100 text-blue-800' :
                         sub.themeColor === 'emerald' ? 'bg-emerald-100 text-emerald-800' :
                         sub.themeColor === 'amber' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800';

    const themeButtonBg = sub.themeColor === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                          sub.themeColor === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700' :
                          sub.themeColor === 'amber' ? 'bg-amber-500 hover:bg-amber-600' : 'bg-rose-600 hover:bg-rose-700';

    const themeBorderCard = sub.themeColor === 'blue' ? 'border-blue-200' :
                            sub.themeColor === 'emerald' ? 'border-emerald-200' :
                            sub.themeColor === 'amber' ? 'border-amber-200' : 'border-rose-200';

    // Vocabulary HTML cards: Hitz eta kontzeptu erlazionatu osagarriak (LH 6)
    let vocabHtml = '';
    if (sub.relatedVocabulary && sub.relatedVocabulary.length > 0) {
      vocabHtml = `
        <div class="vocabulario-section hiztegi-section vocab-box g-card rounded-[28px] p-6 sm:p-8 bg-white border-2 ${themeBorderCard} shadow-md space-y-6 mt-12">
          <div class="flex items-center gap-3 border-b border-gray-100 pb-4">
            <span class="text-3xl">📖</span>
            <div>
              <h3 class="text-xl sm:text-2xl font-black font-title text-gray-900">${sub.code} Hiztegi Osagarria & Kontzeptu Erlazionatuak</h3>
              <p class="text-xs sm:text-sm text-gray-500">Azpigaia hobeto ulertzeko eta sakontzeko kontzeptu gakoak LH 6. mailako ikasleentzat:</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${sub.relatedVocabulary.map(v => `
              <div class="p-5 bg-gray-50/80 rounded-2xl border border-gray-200 space-y-1.5 hover:bg-white hover:shadow-md transition-all">
                <span class="text-base sm:text-lg font-extrabold text-${sub.themeColor}-900 flex items-center gap-2">
                  <span>📌</span> ${v.term}
                </span>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">${v.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    return `
      <section id="view-${key}" class="min-h-screen pb-28">
        
        <!-- CABECERA SUPERIOR DEL SUBTEMA CON BREADCRUMB -->
        <div class="bg-gradient-to-b from-${sub.themeColor}-50/70 via-white to-gray-50 border-b border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-3">
              <div class="flex items-center gap-2 text-xs sm:text-sm font-bold text-${sub.themeColor}-700">
                <button onclick="app.goTo('home')" class="hover:underline flex items-center gap-1"><span>🏠</span> Hasiera</button> <span>/</span>
                <span>${sub.themeName}</span> <span>/</span>
                <span class="text-gray-500">${sub.code}</span>
              </div>
              <button onclick="imprimatuTema(${sub.themeId})" 
                      class="btn-print-theme inprimatu-btn print-action-button btn-print-pdf no-print inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-300 hover:border-slate-500 text-xs sm:text-sm font-black shadow-sm hover:shadow transition-all cursor-pointer group"
                      title="Deskargatu edo inprimatu ${sub.themeName} PDF A4 formatuan">
                <span class="text-base group-hover:scale-110 transition-transform">📄</span>
                <span>Inprimatu / Deskargatu Gaia PDF</span>
              </button>
            </div>
            <span class="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${themeBadgeBg}">
              ${sub.badge}
            </span>
            <h1 class="text-3xl sm:text-5xl font-black font-title text-gray-900 tracking-tight leading-tight">
              ${sub.title}
            </h1>
            <p class="text-gray-600 text-lg sm:text-xl">
              ${sub.lead}
            </p>
          </div>
        </div>

        <!-- CUERPO PRINCIPAL DEL SUBTEMA (LETRA HANDIA + HITZ GAKOAK KOLOREZTATUAK) -->
        <div class="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
          
          <article class="g-card rounded-[32px] p-8 sm:p-12 space-y-8 border-l-8 ${themeBorder}">
            
            <!-- Imagen Destacada o Mapas Duales (Subtema 1.3) -->
            ${key === 'mod1_sub3' ? `
              <div class="space-y-4">
                <!-- 2 MAPAS DE EUROPA: FISIKOA ETA POLITIKOA (IMAGEN B & IMAGEN C) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 map-dual-container">
                  <!-- IMAGEN B: Mapa Fisikoa -->
                  <div class="map-dual-card p-3 sm:p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-50 border border-gray-100 flex items-center justify-center p-1 cursor-pointer group"
                         onclick="app.switchMapTab('fisikoa')"
                         title="Klikatu Europako Mapa Fisikoa aztertzeko">
                      <img src="images/mapa_fisikoa.jpg" alt="Europako Mapa Fisikoa" class="map-print-dual w-full h-full object-contain transition-transform duration-300 group-hover:scale-105">
                    </div>
                    <div class="mt-2.5 text-center">
                      <span class="text-[11px] font-black uppercase tracking-wider text-emerald-700 block">Erliebea, Ibaiak & Itsasoak</span>
                      <h4 class="text-base font-black text-gray-900 mt-0.5">🏔️ Europako Mapa Fisikoa</h4>
                      <p class="text-xs text-gray-600 mt-1 leading-snug">Mendiak (Alpeak, Pirinioak...), lautadak eta ibai nagusiak (Volga, Danubio, Rhin...).</p>
                    </div>
                  </div>

                  <!-- IMAGEN C: Mapa Politikoa -->
                  <div class="map-dual-card p-3 sm:p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div class="w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-50 border border-gray-100 flex items-center justify-center p-1 cursor-pointer group"
                         onclick="app.switchMapTab('politikoa')"
                         title="Klikatu Europako Mapa Politikoa aztertzeko">
                      <img src="images/mapa_politikoa.jpg" alt="Europako Mapa Politikoa" class="map-print-dual w-full h-full object-contain transition-transform duration-300 group-hover:scale-105">
                    </div>
                    <div class="mt-2.5 text-center">
                      <span class="text-[11px] font-black uppercase tracking-wider text-blue-700 block">49 Estatuak & Hiriburuak</span>
                      <h4 class="text-base font-black text-gray-900 mt-0.5">🗺️ Europako Mapa Politikoa</h4>
                      <p class="text-xs text-gray-600 mt-1 leading-snug">Europako 49 estatu independenteak, haien mugak eta hiriburu ofizialak.</p>
                    </div>
                  </div>
                </div>

                ${sub.videoUrl ? `
                  <!-- BIDEO DIDAKTIKOAREN TXARTELA (YOUTUBE - LH 6) -->
                  <div class="p-4 sm:p-5 bg-gradient-to-r from-red-50 via-rose-50 to-orange-50 rounded-2xl border-2 border-red-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all">
                    <div class="flex items-center gap-3.5">
                      <div class="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-md shrink-0">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                      </div>
                      <div>
                        <div class="flex flex-wrap items-center gap-2">
                          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-red-600 text-white shadow-xs">Bideo Didaktikoa • LH 6</span>
                          ${sub.videoAuthor ? `<span class="text-xs font-bold text-gray-600">Kanala: ${sub.videoAuthor}</span>` : ''}
                        </div>
                        <strong class="text-base sm:text-lg font-bold text-gray-900 block mt-1 leading-snug">${sub.videoTitle || 'Ikusi gaiarekin lotutako bideo didaktikoa'}</strong>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 w-full sm:w-auto shrink-0">
                      <button onclick="app.playVideoInContainer('${key}', '${this.getYoutubeId(sub.videoUrl)}')" 
                              class="w-full sm:w-auto px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
                              title="Erreproduzitu bideoa web orrialde honetan bertan">
                        <span>▶️ Erreproduzitu Hemen</span>
                      </button>
                    </div>
                  </div>
                ` : ''}
              </div>
            ` : sub.image ? `
              <div class="space-y-4">
                <div id="media-container-${key}" class="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-slate-50 flex items-center justify-center p-2 sm:p-3 relative">
                  ${sub.videoUrl ? `
                    <div onclick="app.playVideoInContainer('${key}', '${this.getYoutubeId(sub.videoUrl)}')" 
                         class="relative block w-full text-center cursor-pointer group" 
                         title="Klikatu irudia bideoa hemen erreproduzitzeko: ${sub.videoTitle || sub.title}">
                      <img src="${sub.image}" alt="${sub.title}" class="w-full h-auto max-h-[640px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]">
                      <!-- Bideo Ikono Gainjarria (Play Badge) -->
                      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300 ring-4 ring-white/90">
                          <svg class="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                      </div>
                      <div class="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-black shadow-lg flex items-center gap-2 border border-white/20">
                        <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                        <span>▶️ Klikatu bideoa ikusteko</span>
                      </div>
                    </div>
                  ` : `
                    <img src="${sub.image}" alt="${sub.title}" class="w-full h-auto max-h-[640px] object-contain rounded-xl transition-transform duration-300 hover:scale-[1.01]">
                  `}
                </div>

                ${sub.videoUrl ? `
                  <!-- BIDEO DIDAKTIKOAREN TXARTELA (YOUTUBE - LH 6) -->
                  <div class="p-4 sm:p-5 bg-gradient-to-r from-red-50 via-rose-50 to-orange-50 rounded-2xl border-2 border-red-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all">
                    <div class="flex items-center gap-3.5">
                      <div class="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-md shrink-0">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                      </div>
                      <div>
                        <div class="flex flex-wrap items-center gap-2">
                          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-red-600 text-white shadow-xs">Bideo Didaktikoa • LH 6</span>
                          ${sub.videoAuthor ? `<span class="text-xs font-bold text-gray-600">Kanala: ${sub.videoAuthor}</span>` : ''}
                        </div>
                        <strong class="text-base sm:text-lg font-bold text-gray-900 block mt-1 leading-snug">${sub.videoTitle || 'Ikusi gaiarekin lotutako bideo didaktikoa'}</strong>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 w-full sm:w-auto shrink-0">
                      <button onclick="app.playVideoInContainer('${key}', '${this.getYoutubeId(sub.videoUrl)}')" 
                              class="w-full sm:w-auto px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
                              title="Erreproduzitu bideoa web orrialde honetan bertan">
                        <span>▶️ Erreproduzitu Hemen</span>
                      </button>
                    </div>
                  </div>
                ` : ''}
              </div>
            ` : ''}

            <!-- Texto y Explicaciones con Hitz Gakoak Koloreztatuak -->
            ${sub.htmlContent}

          </article>

          <!-- HIZTEGI OSAGARRIA (KONTZEPTU ERLAZIONATUAK) -->
          ${vocabHtml}

          <!-- NAVEGACIÓN INFERIOR (AURREKOA, HASIERA, HURRENGOA) -->
          <div class="subtopic-nav-footer no-print flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-gray-200">
            <button onclick="app.goTo('${sub.prev}')" class="px-6 py-3.5 rounded-2xl bg-gray-100 hover:bg-gray-200 font-bold text-sm sm:text-base text-gray-700 transition-all flex items-center gap-2">
              <span>${sub.prevLabel}</span>
            </button>

            <button onclick="app.goTo('home')" class="px-5 py-3.5 rounded-2xl bg-white border border-gray-300 hover:bg-gray-50 font-bold text-sm text-gray-700 shadow-sm transition-all flex items-center gap-1.5">
              <span>🏠</span> <span>Gaien Menua</span>
            </button>

            <button onclick="app.goTo('${sub.next}')" class="px-6 py-3.5 rounded-2xl ${themeButtonBg} font-bold text-sm sm:text-base text-white shadow-md transition-all flex items-center gap-2">
              <span>${sub.nextLabel}</span>
            </button>
          </div>

        </div>
      </section>
    `;
  },

  // --------------------------------------------------------------------------
  // BURU-MAPEN ORRIALDE INDIBIDUALA
  // --------------------------------------------------------------------------
  renderMindmapView(viewId) {
    if (viewId === 'mod1_mindmap') {
      return `
        <section id="view-mod1_mindmap" class="min-h-screen pb-24">
          <div class="bg-gradient-to-b from-blue-50/70 via-white to-gray-50 border-b border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
            <div class="max-w-5xl mx-auto space-y-4">
              <div class="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-700">
                <button onclick="app.goTo('home')" class="hover:underline flex items-center gap-1"><span>🏠</span> Hasiera</button> <span>/</span>
                <span>1. Gaia: Europa & Euskadi</span> <span>/</span>
                <span class="text-gray-500">1. Gaiaren Buru-Mapa</span>
              </div>
              <span class="inline-block px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-100 text-blue-800">
                🧠 1. GAIAREN BURU-MAPA OSOA (PROCESSON FORMATUA)
              </span>
              <h1 class="text-3xl sm:text-5xl font-black font-title text-gray-900 tracking-tight">
                Europa, Geografia, Biztanleria eta Gizartea: Ikaskuntza Mapa Mentala
              </h1>
              <p class="text-gray-600 text-base sm:text-lg">
                Arakatu 1. Gaiari dagozkion 7 azpigaien kontzeptu-mapa osoa. Atal bakoitzak LH 6. mailako funtsezko edukiak laburbiltzen ditu.
              </p>
            </div>
          </div>

          <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
            <div class="mindmap-wrapper">
              <div class="mindmap-board">
                <div class="mm-root-card border-blue-300">
                  <div class="w-full h-28 rounded-xl overflow-hidden mb-3 bg-blue-50 border border-blue-100">
                    <img src="images/mapa_fisikoa.jpg" alt="Europa mapa" class="w-full h-full object-cover">
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-wider text-blue-700 block">LH 6. MAILA • EUSKADI</span>
                  <h4 class="text-base font-black font-title text-gray-900 mt-1 leading-snug">Europa, Biztanleria & Migrazioak</h4>
                  <p class="text-[11px] text-gray-500 mt-1.5 leading-relaxed">Geografia, Mapak, Hizkuntzak, Lan Sektoreak eta Elkarbizitza</p>
                </div>

                <div class="mm-branches-container">
                  <!-- ADARRA 1 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-amber-700 border-amber-400 bg-amber-50">🧭 1. Kokapena & Mugak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-amber-800 border-amber-300">4 Muga Naturalak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Mendebaldea:</strong> Ozeano Atlantikoa eta Bizkaiko Golkoa (Euskal Kostaldea).</div>
                          <div class="mm-leaf-item"><strong>Iparraldea:</strong> Ozeano Glaziar Artikoa (Eremu polarra).</div>
                          <div class="mm-leaf-item"><strong>Hegoaldea:</strong> Mediterraneo itsasoa eta Gibraltarreko itsasartea.</div>
                          <div class="mm-leaf-item"><strong>Ekialdea:</strong> Ural mendiak, Ural ibaia eta Kaukasoa (Asia).</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 2 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-emerald-700 border-emerald-400 bg-emerald-50">🏔️ 2. Erliebea & 5 Klimak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-emerald-800 border-emerald-300">Erliebe Unitateak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Mendiak:</strong> Alpeak (Mont Blanc 4.810 m), Pirinioak (Aneto 3.404 m), Kaukasoa (Elbrus 5.642 m).</div>
                          <div class="mm-leaf-item"><strong>Lautadak:</strong> Europako Lautada Handia (nekazaritzarako bikaina).</div>
                          <div class="mm-leaf-item"><strong>5 Klimak:</strong> Atlantikoa, Mediterraneoa, Kontinentala, Artikoa eta Mendikoa (gehi Estepakoa).</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 3 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-blue-700 border-blue-400 bg-blue-50">🗺️ 3. Europako Mapak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-blue-800 border-blue-300">Politikoa & Fisikoa</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Politikoa:</strong> 15 estatu eta hiriburuak (Espainia - Madril, Frantzia - Paris, Alemania - Berlin...).</div>
                          <div class="mm-leaf-item"><strong>Ibaiak:</strong> Volga (3.530 km), Danubio (2.850 km), Rhin, Sena, Tamesis, Ebro, Tajo.</div>
                          <div class="mm-leaf-item"><strong>Itsasoak:</strong> Kantauri, Mediterraneo, Ipar itsasoa, Baltikoa eta Itsaso Beltza.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 4 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-purple-700 border-purple-400 bg-purple-50">👥 4. Biztanleria & Demografia</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-purple-800 border-purple-300">Banaketa & Formulak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Ezaugarriak:</strong> 750 milioi biztanle; %70 hirikoa da (hamarretik zazpi hirietan).</div>
                          <div class="mm-leaf-item"><strong>Jendetsuak:</strong> Alemania, Italia, Erresuma Batua, kostaldeak eta Madril.</div>
                          <div class="mm-leaf-item"><strong>Gutxi Jendetsuak:</strong> Islandia, Norvegia, Suedia eta barrualdeko landa-eremuak.</div>
                          <div class="mm-leaf-item"><strong>Formulak:</strong> Saldo Naturala (J - H) eta Migrazio Saldoa (I - E).</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 5 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-teal-700 border-teal-400 bg-teal-50">🗣️ 5. Hizkuntzak & Euskara</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-teal-800 border-teal-300">Aniztasuna & Jatorria</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>EBko Ofizialak:</strong> 24 hizkuntza ofizial eta 200 hizkuntza/dialekto baino gehiago.</div>
                          <div class="mm-leaf-item"><strong>Indoeuroparrak:</strong> Germaniarrak, Eslaviarrak, Zeltak eta Baltikoak.</div>
                          <div class="mm-leaf-item"><strong>Erromantzeak:</strong> Latinetik datozenak (Gaztelania, Frantsesa, Italiera, Errumaniera...).</div>
                          <div class="mm-leaf-item"><strong>Euskara:</strong> Hizkuntza isolatua, ez-indoeuroparra, Europako zaharrena.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 6 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-orange-700 border-orange-400 bg-orange-50">📊 6. Lan Sektoreak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-orange-800 border-orange-300">3 Sektoreak & Portzentajeak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Lehen Sektorea (%4):</strong> Lehengaiak naturatik (nekazaritza, abeltzaintza, arrantza).</div>
                          <div class="mm-leaf-item"><strong>Bigarren Sektorea (%24):</strong> Eraldaketa (industria, fabrikak eta eraikuntza).</div>
                          <div class="mm-leaf-item"><strong>Hirugarren Sektorea (%72):</strong> Zerbitzuak (nagusia Europan: osasuna, hezkuntza, turismoa).</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 7 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-indigo-700 border-indigo-400 bg-indigo-50">🤝 7. Migrazioak & Elkarbizitza</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-indigo-800 border-indigo-300">Migrazioak & Harrera</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Inmigrantea vs Emigrantea:</strong> Leku berri batera etortzea vs norberaren herria uztea.</div>
                          <div class="mm-leaf-item"><strong>4 Arrazoiak:</strong> Lana, Ikasketak, Natura-hondamendiak, Gerrak eta indarkeria.</div>
                          <div class="mm-leaf-item"><strong>Nondik Gatoz:</strong> Gelako elkarbizitza, enpatia, harrera adeitsua eta hizkuntzak Euskadin.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between pt-6 border-t border-gray-200">
              <button onclick="app.goTo('mod1_sub7')" class="px-5 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 font-bold text-sm text-gray-700 transition-all">
                ← 1.7 Migrazioak
              </button>
              <button onclick="app.goTo('home')" class="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 font-bold text-sm text-white shadow-md transition-all flex items-center gap-2">
                <span>Gaien Menu Nagusira Itzuli</span> <span>🏠</span>
              </button>
            </div>
          </div>
        </section>
      `;
    } else if (viewId === 'mod2_mindmap') {
      return `
        <section id="view-mod2_mindmap" class="min-h-screen pb-24">
          <div class="bg-gradient-to-b from-emerald-50/70 via-white to-gray-50 border-b border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
            <div class="max-w-5xl mx-auto space-y-4">
              <div class="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700">
                <button onclick="app.goTo('home')" class="hover:underline flex items-center gap-1"><span>🏠</span> Hasiera</button> <span>/</span>
                <span>2. Gaia: Izaki Bizidunak</span> <span>/</span>
                <span class="text-gray-500">2. Gaiaren Buru-Mapa Osoa</span>
              </div>
              <span class="inline-block px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
                🧠 2. GAIAREN BURU-MAPA OSOA (PROCESSON FORMATUA • 11 ADAR)
              </span>
              <h1 class="text-3xl sm:text-5xl font-black font-title text-gray-900 tracking-tight">
                Izaki Bizidunen Egitura eta Ugalketa: Ikaskuntza Mapa Mentala
              </h1>
              <p class="text-gray-600 text-base sm:text-lg">
                Arakatu 2. Gaiari dagozkion 11 azpigaien kontzeptu-mapa egituratua. Atal bakoitzak LH 6. mailako funtsezko edukiak eta anatomia laburbiltzen ditu.
              </p>
            </div>
          </div>

          <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
            <div class="mindmap-wrapper">
              <div class="mindmap-board">
                <!-- NODO NAGUSIA (ROOT) -->
                <div class="mm-root-card border-emerald-300">
                  <div class="w-full h-28 rounded-xl overflow-hidden mb-3 bg-emerald-50 border border-emerald-100">
                    <img src="images/zelula_antolaketa.jpg" alt="Izaki bizidunak eta ugalketa" class="w-full h-full object-cover">
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">LH 6. MAILA • EUSKADI</span>
                  <h4 class="text-base font-black font-title text-gray-900 mt-1 leading-snug">Izaki Bizidunen Egitura eta Ugalketa</h4>
                  <p class="text-[11px] text-gray-500 mt-1.5 leading-relaxed">Zelulak, Ehunak, Organoak, Zentzumenak, Nerbioak, Lokomozioa, Ugalketa eta Etapak</p>
                </div>

                <div class="mm-branches-container">
                  <!-- ADARRA 1 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-emerald-700 border-emerald-400 bg-emerald-50">🪜 1. Antolaketa Mailak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-emerald-800 border-emerald-300">Hierarkia Nagusia</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>1. Zelula:</strong> Bizi-unitaterik txikiena (zelulabakarrak eta zelulanitzak).</div>
                          <div class="mm-leaf-item"><strong>2. Ehuna:</strong> Mota bereko zelulak funtzio bera betetzeko elkartuta.</div>
                          <div class="mm-leaf-item"><strong>3. Organoa:</strong> Ehun desberdinez osatutako atala (adib. urdaila).</div>
                          <div class="mm-leaf-item"><strong>4. Aparatua & Organismoa:</strong> Organo-sistema koordinatua eta organismo osoa.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 2 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-teal-700 border-teal-400 bg-teal-50">🔬 2. Zelulak & Organuluak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-teal-800 border-teal-300">Sailkapena & Atalak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Prokariotoak:</strong> Nukleorik gabeak, DNA zitoplasman aske (bakterioak).</div>
                          <div class="mm-leaf-item"><strong>Eukariotoak:</strong> Mintzez bildutako nukleodunak (animaliak eta landareak).</div>
                          <div class="mm-leaf-item"><strong>Landare-zelulak:</strong> Prisma forma, zelula-pareta eta kloroplastoak (fotosintesia).</div>
                          <div class="mm-leaf-item"><strong>4 Zatiak:</strong> Mintza, Zitoplasma, Nukleoa eta Organuluak (mitokondrioak...).</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 3 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-emerald-700 border-emerald-400 bg-emerald-50">🧫 3. Ehunak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-emerald-800 border-emerald-300">Animalia & Landare Ehunak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Animalia-ehunak:</strong> Hezur-ehuna, gihar-ehuna, nerbio-ehuna, gantz-ehuna, epiteliala eta odola.</div>
                          <div class="mm-leaf-item"><strong>Landare-ehunak:</strong> Epidermisa (hostoak), suberra (azal gogorra), parenkima eta ehun eroaleak (xilema/floema).</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 4 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-cyan-700 border-cyan-400 bg-cyan-50">🫀 4. Organoak & Aparatuak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-cyan-800 border-cyan-300">Giza Aparatu Nagusiak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Digestio-aparatua:</strong> Jandakoa xehatu eta mantenugaiak xurgatu.</div>
                          <div class="mm-leaf-item"><strong>Arnasketa-aparatua:</strong> Oxigenoa hartu eta biriketan CO2 kanporatu.</div>
                          <div class="mm-leaf-item"><strong>Zirkulazio-aparatua:</strong> Bihotzak odola gorputz osora ponpatu.</div>
                          <div class="mm-leaf-item"><strong>Iraitz-aparatua:</strong> Giltzurrunek odola garbitu eta gernuz kanporatu.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 5 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-emerald-700 border-emerald-400 bg-emerald-50">👁️ 5. Bost Zentzumenak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-emerald-800 border-emerald-300">Erlazio Funtzioa</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Ikusmena (Begia):</strong> Kornea, pupila, kristalinoa, erretina eta nerbio optikoa.</div>
                          <div class="mm-leaf-item"><strong>Entzumena (Belarria):</strong> Tinpanoa, hezurtxoen katea eta barraskiloa.</div>
                          <div class="mm-leaf-item"><strong>Usaimena (Sudurra):</strong> Sudur-hobiak eta pituitarioa.</div>
                          <div class="mm-leaf-item"><strong>Dastamena & Ukimena:</strong> Dastamen-papilak (mihia) eta Larruazala (epidermisa/dermisa).</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 6 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-teal-700 border-teal-400 bg-teal-50">🧠 6. Nerbio-Sistema</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-teal-800 border-teal-300">NSZ & NSP</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Nerbio-Sistema Zentrala:</strong> Entzefaloa (Garuna, Zerebeloa, Erraboila) eta Bizkarrezur-muina.</div>
                          <div class="mm-leaf-item"><strong>Nerbio-Sistema Periferikoa:</strong> Zentzumen-nerbioak eta nerbio motoreak.</div>
                          <div class="mm-leaf-item"><strong>4 Urratsen Zirkuitua:</strong> 1. Estimulua -> 2. Garunera -> 3. Erabakia -> 4. Lokomozio-erantzuna.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 7 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-emerald-700 border-emerald-400 bg-emerald-50">🦴 7. Lokomozio Aparatua</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-emerald-800 border-emerald-300">Eskeletoa & Giharrak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Hezur Nagusiak:</strong> Kopeta-hezurra, ornoak, saihetsak, humeroa, pelbisa, femurra, tibia, peronea.</div>
                          <div class="mm-leaf-item"><strong>Gihar Nagusiak:</strong> Orbikularra, deltoidea, pektoralak, bizepsa, trizepsa, abdominalak, koadrizepsa, bikia.</div>
                          <div class="mm-leaf-item"><strong>Artikulazioak:</strong> Finkoak (kranioa), erdi-mugikorrak (ornoak) eta mugikorrak (belauna/ukondoa).</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 8 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-teal-700 border-teal-400 bg-teal-50">🚻 8. Ugalketa Aparatuak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-teal-800 border-teal-300">Gizonak & Emakumeak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Gizonen Aparatua:</strong> Barrabilak (espermatozoideak), eskrotoa, hodi deferenteak, semen-besikulak, uretra eta zakila.</div>
                          <div class="mm-leaf-item"><strong>Emakumeen Aparatua:</strong> Obarioak (obuluak), Falopioren tronpak, umetokia (matrizea), bagina eta bulba.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 9 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-emerald-700 border-emerald-400 bg-emerald-50">👶 9. Ernalketa Prozesua</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-emerald-800 border-emerald-300">5 Faseak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>1. Obulazioa & 2. Bidaia:</strong> Obulua askatu eta espermatozoideak tronparantz joan.</div>
                          <div class="mm-leaf-item"><strong>3. Ernalketa:</strong> Falopioren tronpan espermatozoidea sartu eta ZIGOTOA sortu.</div>
                          <div class="mm-leaf-item"><strong>4. Zatiketa & 5. Inplantazioa:</strong> Enbrioia zatitu eta blastozistoa umetokiko endometrioari itsatsi (6-12 egun).</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 10 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-cyan-700 border-cyan-400 bg-cyan-50">🤰 10. Haurdunaldia & Erditzea</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-cyan-800 border-cyan-300">Garapena & Jaiotza</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>3 Hiruhilekoak:</strong> 1. Organoen eraketa | 2. Fetuaren hazkundea eta estimuluak | 3. Heltzea eta buruz behera jartzea.</div>
                          <div class="mm-leaf-item"><strong>Erditzearen 3 Faseak:</strong> 1. Dilatazioa (luzeena) | 2. Egoztea (haurra jaio) | 3. Plazenta-ateratzea.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 11 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-emerald-700 border-emerald-400 bg-emerald-50">⏳ 11. Bizitzaren Etapak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-emerald-800 border-emerald-300">5 Etapak & Pubertaroa</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>5 Etapak:</strong> Haurtzaroa (0-11), Nerabezaroa (12-18), Gaztetasuna (14-26), Heldutasuna (27-59), Zahartzaroa (+60).</div>
                          <div class="mm-leaf-item"><strong>Pubertaroa vs Nerabezaroa:</strong> Pubertaroa sexu-heldutasunaren aldaketa fisikoak dira (neskak 10-14, mutilak 12-16); nerabezaroa nortasun eta aldaketa sozial/emozionalak dira.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between pt-6 border-t border-gray-200">
              <button onclick="app.goTo('mod2_sub11')" class="px-5 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 font-bold text-sm text-gray-700 transition-all">
                ← 2.11 Bizitzaren Etapak
              </button>
              <button onclick="app.goTo('home')" class="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 font-bold text-sm text-white shadow-md transition-all flex items-center gap-2">
                <span>Gaien Menu Nagusira Itzuli</span> <span>🏠</span>
              </button>
            </div>
          </div>
        </section>
      `;
    } else if (viewId === 'mod3_mindmap') {
      return `
        <section id="view-mod3_mindmap" class="min-h-screen pb-24">
          <div class="bg-gradient-to-b from-amber-50/70 via-white to-gray-50 border-b border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
            <div class="max-w-5xl mx-auto space-y-4">
              <div class="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-700">
                <button onclick="app.goTo('home')" class="hover:underline flex items-center gap-1"><span>🏠</span> Hasiera</button> <span>/</span>
                <span>3. Gaia: Energia & Elektrizitatea</span> <span>/</span>
                <span class="text-gray-500">3. Gaiaren Buru-Mapa</span>
              </div>
              <span class="inline-block px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-800">
                🧠 3. GAIAREN BURU-MAPA OSOA (PROCESSON FORMATUA)
              </span>
              <h1 class="text-3xl sm:text-5xl font-black font-title text-gray-900 tracking-tight">
                Energia eta Elektrizitatea: Ikaskuntza Mapa Mentala
              </h1>
              <p class="text-gray-600 text-base sm:text-lg">
                Eragin eskuinera/ezkerrera mapa osoa arakatzeko. 5 adar nagusiak: Motak, Propietateak, Iturriak, Zirkuitu Motak eta Osagaiak.
              </p>
            </div>
          </div>

          <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
            <div class="mindmap-wrapper">
              <div class="mindmap-board">
                <div class="mm-root-card border-amber-300">
                  <div class="w-full h-28 rounded-xl overflow-hidden mb-3 bg-slate-900 border border-amber-200 flex items-center justify-center p-1">
                    <img src="images/energia_motak.svg" alt="Energia eta elektrizitatea" class="w-full h-full object-contain">
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-wider text-amber-700 block">LH 6. MAILA • EUSKADI</span>
                  <h4 class="text-base font-black font-title text-gray-900 mt-1 leading-snug">Energia & Elektrizitatea</h4>
                  <p class="text-[11px] text-gray-500 mt-1.5 leading-relaxed">Motak, Propietateak, Iturriak, Zirkuituak eta Osagaiak</p>
                </div>

                <div class="mm-branches-container">
                  <!-- ADARRA 1 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-amber-700 border-amber-400 bg-amber-50">⚡ 1. Energia Motak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-amber-800 border-amber-300">7 Formalitateak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Mekanikoa:</strong> Mugimendua (mailua eta iltzea).</div>
                          <div class="mm-leaf-item"><strong>Soinua:</strong> Bibrazioak (bozgorailua).</div>
                          <div class="mm-leaf-item"><strong>Termikoa:</strong> Beroa (sua, eguzkia, tostagailua).</div>
                          <div class="mm-leaf-item"><strong>Argia:</strong> Fotosintesia eta ikusmena.</div>
                          <div class="mm-leaf-item"><strong>Elektrikoa:</strong> Kableak eta etxeko tresnak.</div>
                          <div class="mm-leaf-item"><strong>Kimikoa:</strong> Elikagaiak, erregaia eta pilak.</div>
                          <div class="mm-leaf-item"><strong>Nuklearra:</strong> Atomoen fisioa (uranioa).</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 2 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-orange-700 border-orange-400 bg-orange-50">🔄 2. 4 Propietateak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-orange-800 border-orange-300">Ezaugarriak &amp; Legea</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>1. Metatu:</strong> Baterietan eta piletan gorde.</div>
                          <div class="mm-leaf-item"><strong>2. Garraiatu:</strong> Tentsio altuko kablez eraman.</div>
                          <div class="mm-leaf-item"><strong>3. Eraldatu:</strong> Mota batetik bestera aldatu.</div>
                          <div class="mm-leaf-item"><strong>4. Transferitu:</strong> Gorputz batetik bestera pasa (beroa).</div>
                          <div class="mm-leaf-item"><strong>Legea:</strong> «Ez da sortzen ezta desagertzen, eraldatu baino».</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 3 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-emerald-700 border-emerald-400 bg-emerald-50">🌱 3. Energia Iturriak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-emerald-800 border-emerald-300">Baliabideak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Berriztagarriak:</strong> Eguzkia, Eolikoa, Ura, Biomasa, Geotermikoa, Olatuak (Mutriku).</div>
                          <div class="mm-leaf-item"><strong>Berriztaezinak:</strong> Ikatza, Petrolioa, Gas naturala, Uranioa (agortu eta kutsatu).</div>
                          <div class="mm-leaf-item"><strong>Euskadi 2023:</strong> %86 Berriztaezina vs %14 Berriztagarria soilik!</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 4 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-sky-700 border-sky-400 bg-sky-50">🔌 4. Zirkuitu Motak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-sky-800 border-sky-300">Konexioak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Seriea:</strong> Kate moduan (bat eten = guztiak itzali).</div>
                          <div class="mm-leaf-item"><strong>Paraleloa:</strong> Adar independenteak (bat kendu = besteak piztuta).</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 5 -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-purple-700 border-purple-400 bg-purple-50">⚙️ 5. Osagaiak &amp; Sinboloak</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-purple-800 border-purple-300">Elementuak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Sorgailuak:</strong> Pila (+ |-), Bateriak, Panel fotovoltaikoak.</div>
                          <div class="mm-leaf-item"><strong>Hartzaileak:</strong> Bonbilla (⊗), Motorra (Ⓜ), Burrunbagailua, Bozgorailua.</div>
                          <div class="mm-leaf-item"><strong>Kontrol-elementuak:</strong> Etengailua (—/ —), Sakagailua (—•/•—).</div>
                          <div class="mm-leaf-item"><strong>Eroaleak:</strong> Kobrezko kable isolatuak (—————).</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between pt-6 border-t border-gray-200">
              <button onclick="app.goTo('mod3_sub5')" class="px-5 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 font-bold text-sm text-gray-700 transition-all">
                ← 3.5 Zirkuituaren Osagaiak & Sinboloak
              </button>
              <button onclick="app.goTo('home')" class="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 font-bold text-sm text-white shadow-md transition-all flex items-center gap-2">
                <span>Gaien Menu Nagusira Itzuli</span> <span>🏠</span>
              </button>
            </div>
          </div>
        </section>
      `;
    } else if (viewId === 'mod4_mindmap') {
      return `
        <section id="view-mod4_mindmap" class="min-h-screen pb-24">
          <div class="bg-gradient-to-b from-rose-50/70 via-white to-gray-50 border-b border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
            <div class="max-w-5xl mx-auto space-y-4">
              <div class="flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-700">
                <button onclick="app.goTo('home')" class="hover:underline flex items-center gap-1"><span>🏠</span> Hasiera</button> <span>/</span>
                <span>4. Gaia: Aro Garaikidea</span> <span>/</span>
                <span class="text-gray-500">4.8 Buru-Mapa</span>
              </div>
              <span class="inline-block px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-100 text-rose-800">
                🧠 4. GAIAREN BURU-MAPA OSOA (PROCESSON FORMATUA)
              </span>
              <h1 class="text-3xl sm:text-5xl font-black font-title text-gray-900 tracking-tight">
                Aro Garaikidea eta Memoria Historikoa: Ikaskuntza Mapa Mentala
              </h1>
              <p class="text-gray-600 text-base sm:text-lg">
                Eragin eskuinera/ezkerrera mapa osoa arakatzeko. Iraultzen aroa, Inperioak, Krisialdi garaia, Guda Zibila, Gernika, Frankismoa eta Demokrazia.
              </p>
            </div>
          </div>

          <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
            <div class="mindmap-wrapper">
              <div class="mindmap-board">
                <div class="mm-root-card border-rose-300">
                  <div class="w-full h-28 rounded-xl overflow-hidden mb-3 bg-rose-50 border border-rose-100">
                    <img src="images/iraultzen_aroa.jpg" alt="Aro Garaikidea eta Industria Iraultza" class="w-full h-full object-cover">
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-wider text-rose-700 block">LH 6. MAILA • EUSKADI</span>
                  <h4 class="text-base font-black font-title text-gray-900 mt-1 leading-snug">Aro Garaikidea (1789 - Gaur Egun)</h4>
                  <p class="text-[11px] text-gray-500 mt-1.5 leading-relaxed">Iraultzak, Inperioak, Krisialdia, Guda Zibila, Gernika, Frankismoa eta Demokrazia</p>
                </div>

                <div class="mm-branches-container">
                  <!-- ADARRA 1: IRAULTZAK & INPERIOAK -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-rose-700 border-rose-400 bg-rose-50">🏭 1. Iraultzak & Inperioak (1776-1914)</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-rose-800 border-rose-300">Iraultzen Aroa (1776-1848)</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>1776 & 1789:</strong> AEBren Independentzia eta Frantziako Iraultza (herritarren eskubideak).</div>
                          <div class="mm-leaf-item"><strong>Industria Iraultza:</strong> Eskuz egitetik lurrun-makinara (James Watt), automatizazioa eta fabrikak.</div>
                          <div class="mm-leaf-item"><strong>Latinoamerika:</strong> Independentzia-mugimenduak Europako inperioetatik askatzeko.</div>
                        </div>
                      </div>
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-rose-800 border-rose-300">Inperioen Aroa (1848-1914)</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Kapitalismoa:</strong> Masa-ekoizpena eta salmenta globala.</div>
                          <div class="mm-leaf-item"><strong>Koloniak:</strong> Lehengaiak masan lortzeko mundua banatu zuten Europako inperioek.</div>
                          <div class="mm-leaf-item"><strong>Garraioak:</strong> Lurrun-trena eta lurrunontziak; aurrerapen zientifiko eta medikoak.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 2: KRISIALDI GARAIA & MUNDU GERRAK -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-amber-700 border-amber-400 bg-amber-50">💥 2. Krisialdi Garaia & Mundu Gerrak (1914-1945)</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-amber-800 border-amber-300">Gatazka Globalak</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>1. Mundu Gerra (1914-1918):</strong> Lubakietako guduak eta krisi ekonomiko sakona.</div>
                          <div class="mm-leaf-item"><strong>1929ko Depresio Handia:</strong> New Yorkeko poltsaren kolapsoa eta langabezia erraldoia.</div>
                          <div class="mm-leaf-item"><strong>Totalitarismoak:</strong> Krisiaren ondorioz sortutako faxismoa eta nazismoa Europan.</div>
                          <div class="mm-leaf-item"><strong>2. Mundu Gerra (1939-1945):</strong> Holokaustoa (18 milioi biktima) eta bonba nuklearra (Hiroshima eta Nagasaki).</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 3: ESPAINIAKO GUDA ZIBILA & GERNIKA -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-red-700 border-red-400 bg-red-50">⚔️ 3. Espainiako Guda Zibila & Gernika (1936-1939)</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-red-800 border-red-300">Guda eta Gernika</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>2. Errepublika (1931-1936):</strong> Gobernu demokratikoa eta presidente hautatua.</div>
                          <div class="mm-leaf-item"><strong>1936ko Estatu-Kolpea:</strong> Militar matxinatuak gobernua indarrez kentzen saiatu ziren.</div>
                          <div class="mm-leaf-item"><strong>Bi Bandoak:</strong> Bando Errepublikarra (legea, Eusko Jaurlaritza) vs Bando Nazionala (Franco, Hitler eta Mussolini).</div>
                          <div class="mm-leaf-item"><strong>Gernikako Bonbardaketa (1937ko apirilaren 26a):</strong> Kondor Legioa, Gernikako Arbola (bakearen sinboloa) eta Picassoren maisulana.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ADARRA 4: FRANKISMOA, TRANTSIZIOA & DEMOKRAZIA -->
                  <div class="mm-branch-row">
                    <div class="mm-node-l1 text-purple-700 border-purple-400 bg-purple-50">🕊️ 4. Frankismoa, Trantsizioa & Demokrazia (1939-Gaur Egun)</div>
                    <div class="mm-subbranches">
                      <div class="mm-subbranch-item">
                        <div class="mm-node-l2 text-purple-800 border-purple-300">Diktaduratik Demokraziara</div>
                        <div class="mm-leaf-group">
                          <div class="mm-leaf-item"><strong>Frankismoa (1939-1975):</strong> 36 urteko diktadura, askatasun gabeziak, euskararen debekua, autarkia eta ikastola klandestinoak.</div>
                          <div class="mm-leaf-item"><strong>Trantsizio Demokratikoa (1975-1978):</strong> Francoren heriotza, hauteskunde askeak eta 1978ko Konstituzioa.</div>
                          <div class="mm-leaf-item"><strong>1979ko Gernikako Estatutua:</strong> Euskal Autonomia Erkidegoa, Eusko Jaurlaritza eta Legebiltzarra.</div>
                          <div class="mm-leaf-item"><strong>Gaur Egungo Euskadi:</strong> Osakidetza, euskal eskola publikoa, Ertzaintza eta autogobernua.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between pt-6 border-t border-gray-200">
              <button onclick="app.goTo('mod4_sub7')" class="px-5 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 font-bold text-sm text-gray-700 transition-all">
                ← 4.7 Trantsizioa & Demokrazia
              </button>
              <button onclick="app.goTo('home')" class="px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 font-bold text-sm text-white shadow-md transition-all flex items-center gap-2">
                <span>Gaien Menu Nagusira Itzuli</span> <span>🏠</span>
              </button>
            </div>
          </div>
        </section>
      `;
    }
    return '';
  },

  // --------------------------------------------------------------------------
  // BARRA LATERAL (SIDEBAR) ETA BACKDROP
  // --------------------------------------------------------------------------
  openSidebar() {
    const sidebar = document.getElementById('global-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.remove('-translate-x-full');
    if (backdrop) {
      backdrop.classList.remove('hidden');
      backdrop.classList.remove('opacity-0');
      backdrop.classList.add('opacity-100');
    }
    this.sidebarOpen = true;
  },

  closeSidebar() {
    const sidebar = document.getElementById('global-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.add('-translate-x-full');
    if (backdrop) {
      backdrop.classList.add('opacity-0');
      backdrop.classList.remove('opacity-100');
      setTimeout(() => backdrop.classList.add('hidden'), 300);
    }
    this.sidebarOpen = false;
  },

  toggleSidebar() {
    if (this.sidebarOpen) {
      this.closeSidebar();
    } else {
      this.openSidebar();
    }
  },

  printCurrentTopic() {
    imprimatuTema();
  },

  initSidebarHover() {
    const sidebar = document.getElementById('global-sidebar');
    const hoverTab = document.getElementById('sidebar-hover-tab');
    if (!sidebar) return;

    // Erabiltzaileak kurtsorea alboko menutik ateratzean, automatikoki itxi
    sidebar.addEventListener('mouseleave', () => {
      if (this.sidebarOpen) {
        this.closeSidebar();
      }
    });

    if (hoverTab) {
      hoverTab.addEventListener('mouseleave', () => {
        setTimeout(() => {
          if (this.sidebarOpen && sidebar && !sidebar.matches(':hover') && !hoverTab.matches(':hover')) {
            this.closeSidebar();
          }
        }, 150);
      });
    }
  },

  // BARRA DE LECTURA SUPERIOR
  updateReadingProgress() {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    const bar = document.getElementById('reading-progress');
    if (bar) bar.style.width = scrolled + '%';
  },

  // --------------------------------------------------------------------------
  // KLIMAK INTERAKTIBOAK
  // --------------------------------------------------------------------------
  selectClimate(climate) {
    const data = {
      atlantikoa: {
        title: '🌧️ Klima Ozeanikoa / Atlantikoa (Euskal Kostaldea)',
        desc: 'Prezipitazio ugariak urte osoan zehar eta tenperatura leunak itsasoaren eraginez. Hariztiak eta baso hosto-erorkorrak dira nagusi.',
        img: 'images/klima_ozeanikoa.jpg'
      },
      mediterraneoa: {
        title: '☀️ Klima Mediterraneoa (Hegoaldeko Europa)',
        desc: 'Uda bero eta oso lehorrak, eta negu epelak. Prezipitazio gutxi izaten dira; olibondoak, pinudiak eta arteak dira ohikoak.',
        img: 'images/klima_mediterraneoa.jpg'
      },
      kontinentala: {
        title: '🍂 Klima Kontinentala (Erdialdeko eta Ekialdeko Europa)',
        desc: 'Itsasotik urrun dauden eremuak. Negu oso hotzak eta elurtsuak, eta uda beroak. Taiga eta belardi erraldoiak (estepak).',
        img: 'images/klima_kontinentala.jpg'
      },
      polarra: {
        title: '❄️ Klima Polarra / Artikoa (Iparraldeko Muturra)',
        desc: 'Munduko tenperaturarik baxuenak (0ºC-tik behera maiz). Lurra izoztuta egoten da (permafrost) eta tundra landaredia dago.',
        img: 'images/klima_polarra.jpg'
      },
      mendikoa: {
        title: '🏔️ Klima Mendikoa (Alpeak, Pirinioak, Kaukasoa)',
        desc: 'Gailur garaietan kokatua; altitudeak gora egin ahala tenperaturak behera egiten du eta elurra ugaria da neguan.',
        img: 'images/klima_mendikoa.jpg'
      }
    };

    const c = data[climate] || data.atlantikoa;
    const t = document.getElementById('climate-title');
    const d = document.getElementById('climate-desc');
    const i = document.getElementById('climate-img');
    if (t) t.innerText = c.title;
    if (d) d.innerText = c.desc;
    if (i) i.src = c.img;

    document.querySelectorAll('.climate-tab-btn').forEach(btn => {
      if (btn.getAttribute('data-climate') === climate) {
        btn.className = 'climate-tab-btn p-3 rounded-2xl bg-blue-600 text-white font-bold text-sm text-center shadow-sm';
      } else {
        btn.className = 'climate-tab-btn p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm text-center';
      }
    });
  },

  // --------------------------------------------------------------------------
  // DEMOGRAFIA KALKULAGAILUA
  // --------------------------------------------------------------------------
  calculateDemo() {
    const b = parseInt(document.getElementById('demo-births')?.value || 0);
    const d = parseInt(document.getElementById('demo-deaths')?.value || 0);
    const im = parseInt(document.getElementById('demo-immig')?.value || 0);
    const em = parseInt(document.getElementById('demo-emig')?.value || 0);

    const naturalGrowth = b - d;
    const migrationNet = im - em;
    const realGrowth = naturalGrowth + migrationNet;

    const signNat = naturalGrowth >= 0 ? '+' : '';
    const signMig = migrationNet >= 0 ? '+' : '';
    const signReal = realGrowth >= 0 ? '+' : '';

    const res = document.getElementById('demo-results');
    if (res) {
      res.innerHTML = `Berezko Hazkundea: <strong>${signNat}${naturalGrowth}</strong> | Migrazio Saldoa: <strong>${signMig}${migrationNet}</strong> | Benetako Hazkundea: <strong class="text-blue-700">${signReal}${realGrowth} herritar</strong>`;
    }
  },

  // --------------------------------------------------------------------------
  // 1.3 EUROPAKO MAPAK (POLITIKOA & FISIKOA) - 24 ESTATUAK & BANDERAK
  // --------------------------------------------------------------------------
  countriesData: [
    { code: 'al', name: 'Albania', cap: 'Tirana', pop: '2,7 milioi biztanle', lang: 'Albaniera', flag: '🇦🇱', region: 'Hegoaldeko Europa' },
    { code: 'de', name: 'Alemania', cap: 'Berlin', pop: '84,4 milioi biztanle', lang: 'Alemana', flag: '🇩🇪', region: 'Erdialdeko Europa' },
    { code: 'ad', name: 'Andorra', cap: 'Andorra la Vella', pop: '80.000 biztanle', lang: 'Katalana', flag: '🇦🇩', region: 'Hegoaldeko Europa' },
    { code: 'am', name: 'Armenia', cap: 'Erevan', pop: '2,8 milioi biztanle', lang: 'Armeniera', flag: '🇦🇲', region: 'Ekialdeko Europa / Kaukasoa' },
    { code: 'at', name: 'Austria', cap: 'Viena', pop: '9,1 milioi biztanle', lang: 'Alemana', flag: '🇦🇹', region: 'Erdialdeko Europa' },
    { code: 'az', name: 'Azerbaijan', cap: 'Baku', pop: '10,1 milioi biztanle', lang: 'Azerbaijanera', flag: '🇦🇿', region: 'Ekialdeko Europa / Kaukasoa' },
    { code: 'be', name: 'Belgika', cap: 'Brusela', pop: '11,8 milioi biztanle', lang: 'Nederlandera, frantsesa eta alemana', flag: '🇧🇪', region: 'Mendebaldeko Europa' },
    { code: 'by', name: 'Bielorrusia', cap: 'Minsk', pop: '9,2 milioi biztanle', lang: 'Bielorrusiera eta errusiera', flag: '🇧🇾', region: 'Ekialdeko Europa' },
    { code: 'ba', name: 'Bosnia-Herzegovina', cap: 'Sarajevo', pop: '3,2 milioi biztanle', lang: 'Bosniera, serbiera eta kroaziera', flag: '🇧🇦', region: 'Hego-ekialdeko Europa' },
    { code: 'bg', name: 'Bulgaria', cap: 'Sofia', pop: '6,4 milioi biztanle', lang: 'Bulgariera', flag: '🇧🇬', region: 'Ekialdeko Europa' },
    { code: 'dk', name: 'Danimarka', cap: 'Kopenhage', pop: '5,9 milioi biztanle', lang: 'Daniera', flag: '🇩🇰', region: 'Iparraldeko Europa' },
    { code: 'gb', name: 'Erresuma Batua', cap: 'Londres', pop: '67,8 milioi biztanle', lang: 'Ingelesa', flag: '🇬🇧', region: 'Mendebaldeko Europa' },
    { code: 'ro', name: 'Errumania', cap: 'Bukarest', pop: '19,0 milioi biztanle', lang: 'Errumaniera', flag: '🇷🇴', region: 'Ekialdeko Europa' },
    { code: 'ru', name: 'Errusia', cap: 'Mosku', pop: '144,2 milioi biztanle', lang: 'Errusiera', flag: '🇷🇺', region: 'Ekialdeko Europa' },
    { code: 'sk', name: 'Eslovakia', cap: 'Bratislava', pop: '5,4 milioi biztanle', lang: 'Eslovakiera', flag: '🇸🇰', region: 'Erdialdeko Europa' },
    { code: 'si', name: 'Eslovenia', cap: 'Ljubljana', pop: '2,1 milioi biztanle', lang: 'Esloveniera', flag: '🇸🇮', region: 'Hego-ekialdeko Europa' },
    { code: 'es', name: 'Espainia', cap: 'Madril', pop: '48,6 milioi biztanle', lang: 'Gaztelania (koofizialak: euskara, katalana, galiziera)', flag: '🇪🇸', region: 'Hegoaldeko Europa' },
    { code: 'ee', name: 'Estonia', cap: 'Tallinn', pop: '1,3 milioi biztanle', lang: 'Estoniera', flag: '🇪🇪', region: 'Iparraldeko Europa (Baltikoa)' },
    { code: 'fi', name: 'Finlandia', cap: 'Helsinki', pop: '5,6 milioi biztanle', lang: 'Finlandiera eta suediera', flag: '🇫🇮', region: 'Iparraldeko Europa' },
    { code: 'fr', name: 'Frantzia', cap: 'Paris', pop: '68,4 milioi biztanle', lang: 'Frantsesa', flag: '🇫🇷', region: 'Mendebaldeko Europa' },
    { code: 'ge', name: 'Georgia', cap: 'Tbilisi', pop: '3,7 milioi biztanle', lang: 'Georgiera', flag: '🇬🇪', region: 'Ekialdeko Europa / Kaukasoa' },
    { code: 'gr', name: 'Grezia', cap: 'Atenas', pop: '10,4 milioi biztanle', lang: 'Grekoa', flag: '🇬🇷', region: 'Hegoaldeko Europa' },
    { code: 'nl', name: 'Herbehereak', cap: 'Amsterdam', pop: '17,9 milioi biztanle', lang: 'Nederlandera', flag: '🇳🇱', region: 'Mendebaldeko Europa' },
    { code: 'hu', name: 'Hungaria', cap: 'Budapest', pop: '9,6 milioi biztanle', lang: 'Hungariera', flag: '🇭🇺', region: 'Erdialdeko Europa' },
    { code: 'mk', name: 'Ipar Mazedonia', cap: 'Skopje', pop: '1,8 milioi biztanle', lang: 'Mazedoniera', flag: '🇲🇰', region: 'Hego-ekialdeko Europa' },
    { code: 'ie', name: 'Irlanda', cap: 'Dublin', pop: '5,3 milioi biztanle', lang: 'Irlandera eta ingelesa', flag: '🇮🇪', region: 'Mendebaldeko Europa' },
    { code: 'is', name: 'Islandia', cap: 'Reykjavik', pop: '390.000 biztanle', lang: 'Islandiera', flag: '🇮🇸', region: 'Iparraldeko Europa' },
    { code: 'it', name: 'Italia', cap: 'Erroma', pop: '58,9 milioi biztanle', lang: 'Italiera', flag: '🇮🇹', region: 'Hegoaldeko Europa' },
    { code: 'hr', name: 'Kroazia', cap: 'Zagreb', pop: '3,9 milioi biztanle', lang: 'Kroaziera', flag: '🇭🇷', region: 'Hegoaldeko Europa' },
    { code: 'lv', name: 'Letonia', cap: 'Riga', pop: '1,9 milioi biztanle', lang: 'Letoniera', flag: '🇱🇻', region: 'Iparraldeko Europa (Baltikoa)' },
    { code: 'li', name: 'Liechtenstein', cap: 'Vaduz', pop: '39.000 biztanle', lang: 'Alemana', flag: '🇱🇮', region: 'Erdialdeko Europa' },
    { code: 'lt', name: 'Lituania', cap: 'Vilnius', pop: '2,8 milioi biztanle', lang: 'Lituaniera', flag: '🇱🇹', region: 'Iparraldeko Europa (Baltikoa)' },
    { code: 'lu', name: 'Luxenburgo', cap: 'Luxenburgo', pop: '660.000 biztanle', lang: 'Luxenburgera, frantsesa eta alemana', flag: '🇱🇺', region: 'Mendebaldeko Europa' },
    { code: 'mt', name: 'Malta', cap: 'Valletta', pop: '530.000 biztanle', lang: 'Maltera eta ingelesa', flag: '🇲🇹', region: 'Hegoaldeko Europa' },
    { code: 'md', name: 'Moldavia', cap: 'Chisinau', pop: '2,5 milioi biztanle', lang: 'Errumaniera', flag: '🇲🇩', region: 'Ekialdeko Europa' },
    { code: 'mc', name: 'Monako', cap: 'Monako', pop: '39.000 biztanle', lang: 'Frantsesa', flag: '🇲🇨', region: 'Mendebaldeko Europa' },
    { code: 'me', name: 'Montenegro', cap: 'Podgorica', pop: '620.000 biztanle', lang: 'Montenegrera', flag: '🇲🇪', region: 'Hego-ekialdeko Europa' },
    { code: 'no', name: 'Norvegia', cap: 'Oslo', pop: '5,5 milioi biztanle', lang: 'Norvegiera', flag: '🇳🇴', region: 'Iparraldeko Europa' },
    { code: 'pl', name: 'Polonia', cap: 'Varsovia', pop: '36,7 milioi biztanle', lang: 'Poloniera', flag: '🇵🇱', region: 'Erdialdeko Europa' },
    { code: 'pt', name: 'Portugal', cap: 'Lisboa', pop: '10,5 milioi biztanle', lang: 'Portugesa', flag: '🇵🇹', region: 'Hegoaldeko Europa' },
    { code: 'sm', name: 'San Marino', cap: 'San Marino', pop: '34.000 biztanle', lang: 'Italiera', flag: '🇸🇲', region: 'Hegoaldeko Europa' },
    { code: 'rs', name: 'Serbia', cap: 'Belgrad', pop: '6,6 milioi biztanle', lang: 'Serbiera', flag: '🇷🇸', region: 'Hego-ekialdeko Europa' },
    { code: 'se', name: 'Suedia', cap: 'Estokolmo', pop: '10,5 milioi biztanle', lang: 'Suediera', flag: '🇸🇪', region: 'Iparraldeko Europa' },
    { code: 'ch', name: 'Suitza', cap: 'Berna', pop: '8,9 milioi biztanle', lang: 'Alemana, frantsesa, italiera eta erretorromaniera', flag: '🇨🇭', region: 'Erdialdeko Europa' },
    { code: 'cz', name: 'Txekia', cap: 'Praga', pop: '10,8 milioi biztanle', lang: 'Txekiera', flag: '🇨🇿', region: 'Erdialdeko Europa' },
    { code: 'tr', name: 'Turkia', cap: 'Ankara', pop: '85,3 milioi biztanle', lang: 'Turkiera', flag: '🇹🇷', region: 'Hego-ekialdeko Europa' },
    { code: 'ua', name: 'Ukraina', cap: 'Kiev', pop: '38,0 milioi biztanle', lang: 'Ukrainera', flag: '🇺🇦', region: 'Ekialdeko Europa' },
    { code: 'va', name: 'Vatikano Hiria', cap: 'Vatikano Hiria', pop: '800 biztanle', lang: 'Italiera eta latina', flag: '🇻🇦', region: 'Hegoaldeko Europa' },
    { code: 'cy', name: 'Zipre', cap: 'Nikosia', pop: '1,2 milioi biztanle', lang: 'Grekoa eta turkiera', flag: '🇨🇾', region: 'Hegoaldeko Europa' }
  ],

  initMapSubtopic() {
    this.renderCountriesGrid();
    this.initFlagGame();
  },

  switchMapTab(tab) {
    const polContent = document.getElementById('map-content-politikoa');
    const fisContent = document.getElementById('map-content-fisikoa');
    const tabPol = document.getElementById('tab-map-pol');
    const tabFis = document.getElementById('tab-map-fis');

    if (tab === 'politikoa') {
      if (polContent) polContent.classList.remove('hidden');
      if (fisContent) fisContent.classList.add('hidden');
      if (tabPol) tabPol.className = 'px-5 py-3 rounded-2xl bg-blue-600 text-white font-bold text-base shadow-sm flex items-center gap-2';
      if (tabFis) tabFis.className = 'px-5 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-base flex items-center gap-2';
    } else {
      if (polContent) polContent.classList.add('hidden');
      if (fisContent) fisContent.classList.remove('hidden');
      if (tabFis) tabFis.className = 'px-5 py-3 rounded-2xl bg-blue-600 text-white font-bold text-base shadow-sm flex items-center gap-2';
      if (tabPol) tabPol.className = 'px-5 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-base flex items-center gap-2';
    }
  },

  renderCountriesGrid() {
    const container = document.getElementById('countries-grid');
    if (!container) return;

    container.className = 'banderak-grid estatuak-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3';
    container.innerHTML = this.countriesData.map((c, idx) => `
      <div onclick="app.showCountryDetail(${idx})" 
           class="country-card p-3 bg-white hover:bg-blue-50/90 rounded-2xl border border-blue-100 hover:border-blue-400 shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 hover:-translate-y-1 flex flex-col items-center text-center group relative"
           title="Egin klik ${c.name} estatuaren fitxa ikusteko">
        <div class="w-14 h-9 mb-2 rounded-lg overflow-hidden border border-slate-200 shadow-sm group-hover:scale-110 transition-transform duration-200 flex items-center justify-center bg-slate-100">
          <img src="images/flags/${c.code}.svg" alt="${c.name} bandera" class="w-full h-full object-cover">
        </div>
        <strong class="text-sm font-bold text-gray-900 group-hover:text-blue-700 leading-snug">${c.name}</strong>
        <span class="text-xs font-semibold text-blue-600 mt-1 flex items-center gap-1">
          <span>🏛️</span> ${c.cap}
        </span>
        <span class="text-[10px] text-gray-400 group-hover:text-blue-500 font-medium mt-1">Ikusi fitxa ℹ️</span>
      </div>
    `).join('');
  },

  showCountryDetail(index) {
    const c = this.countriesData[index];
    if (!c) return;

    let modal = document.getElementById('country-detail-modal');
    if (!modal) {
      // Segurtasun-sortzailea DOMen ez badago
      const modalMarkup = document.createElement('div');
      modalMarkup.id = 'country-detail-modal';
      modalMarkup.className = 'fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 hidden';
      modalMarkup.onclick = (e) => { if (e.target === modalMarkup) app.closeCountryModal(); };
      modalMarkup.innerHTML = `
        <div class="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border-2 border-blue-200 transform transition-all relative">
          <button onclick="app.closeCountryModal()" class="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-lg transition-colors" title="Itxi fitxa">
            ✕
          </button>
          <div class="text-center space-y-4">
            <div id="country-modal-flag" class="flex items-center justify-center pt-2"></div>
            <div>
              <h3 id="country-modal-name" class="text-2xl sm:text-3xl font-black text-gray-900"></h3>
              <span id="country-modal-region" class="inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800"></span>
            </div>
            <div class="space-y-3 pt-2 text-left">
              <div class="p-3.5 bg-blue-50/70 rounded-2xl border border-blue-100 flex items-center gap-3.5">
                <span class="text-3xl">🏛️</span>
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider text-blue-800 block">Hiriburua</span>
                  <strong id="country-modal-cap" class="text-base sm:text-lg text-gray-900 font-extrabold"></strong>
                </div>
              </div>
              <div class="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-100 flex items-center gap-3.5">
                <span class="text-3xl">👥</span>
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 block">Biztanleria</span>
                  <strong id="country-modal-pop" class="text-base sm:text-lg text-gray-900 font-extrabold"></strong>
                </div>
              </div>
              <div class="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-100 flex items-center gap-3.5">
                <span class="text-3xl">🗣️</span>
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider text-amber-800 block">Hizkuntza Ofiziala</span>
                  <strong id="country-modal-lang" class="text-base sm:text-lg text-gray-900 font-extrabold"></strong>
                </div>
              </div>
            </div>
            <div class="pt-3">
              <button onclick="app.closeCountryModal()" class="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all">
                Ados, Itxi Fitxa
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modalMarkup);
      modal = modalMarkup;
    }

    const flagEl = document.getElementById('country-modal-flag');
    const nameEl = document.getElementById('country-modal-name');
    const regEl = document.getElementById('country-modal-region');
    const capEl = document.getElementById('country-modal-cap');
    const popEl = document.getElementById('country-modal-pop');
    const langEl = document.getElementById('country-modal-lang');

    if (flagEl) {
      flagEl.innerHTML = `
        <div class="w-24 h-16 rounded-xl overflow-hidden shadow-md border-2 border-slate-200">
          <img src="images/flags/${c.code}.svg" alt="${c.name} bandera" class="w-full h-full object-cover">
        </div>
      `;
    }
    if (nameEl) nameEl.textContent = `${c.name} ${c.flag}`;
    if (regEl) regEl.textContent = c.region;
    if (capEl) capEl.textContent = c.cap;
    if (popEl) popEl.textContent = c.pop;
    if (langEl) langEl.textContent = c.lang;

    modal.classList.remove('hidden');
  },

  closeCountryModal() {
    const modal = document.getElementById('country-detail-modal');
    if (modal) modal.classList.add('hidden');
  },

  // --------------------------------------------------------------------------
  // JOKO BERRIA: BANDERA ETA HIRIBURUA (2 URRATSEKO ERRONKA)
  // --------------------------------------------------------------------------
  flagGameState: {
    round: 1,
    countryScore: 0,
    capitalScore: 0,
    currentCountry: null,
    step: 1,
    countryAnswered: false,
    capitalAnswered: false,
    userCountryChoice: null,
    userCapitalChoice: null
  },

  initFlagGame() {
    this.flagGameState.round = 1;
    this.flagGameState.countryScore = 0;
    this.flagGameState.capitalScore = 0;
    this.startNewFlagRound();
  },

  startNewFlagRound() {
    const randomCountry = this.countriesData[Math.floor(Math.random() * this.countriesData.length)];
    this.flagGameState.currentCountry = randomCountry;
    this.flagGameState.step = 1;
    this.flagGameState.countryAnswered = false;
    this.flagGameState.capitalAnswered = false;
    this.flagGameState.userCountryChoice = null;
    this.flagGameState.userCapitalChoice = null;
    this.renderFlagGameStep1();
  },

  renderFlagGameStep1() {
    const container = document.getElementById('flag-game-container');
    if (!container) return;

    const country = this.flagGameState.currentCountry;
    if (!country) return;

    // Pick 3 random distractor countries
    const otherCountries = this.countriesData
      .filter(c => c.name !== country.name)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    const options = [country, ...otherCountries].sort(() => 0.5 - Math.random());

    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4">
        <div class="flex items-center gap-2.5">
          <span class="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl shadow-md">🎮</span>
          <div>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-500/30 text-blue-200 border border-blue-400/30">
              1. URRATSA: HERRIALDEA ASMATU
            </span>
            <h4 class="text-base sm:text-lg font-black text-white">Bandera & Hiriburua Jokoa</h4>
          </div>
        </div>
        <div class="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-extrabold">
          <span class="px-3 py-1 rounded-xl bg-white/10 text-white border border-white/10 shadow-xs">
            🏁 Txanda: <strong class="text-yellow-300 font-black">${this.flagGameState.round}</strong>
          </span>
          <span class="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-xs">
            🚩 Banderak: <strong class="text-white font-black">${this.flagGameState.countryScore}</strong>
          </span>
          <span class="px-3 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-xs">
            🏛️ Hiriburuak: <strong class="text-white font-black">${this.flagGameState.capitalScore}</strong>
          </span>
        </div>
      </div>

      <!-- BANDERA NAGUSIA -->
      <div class="text-center space-y-4 py-2">
        <div class="inline-block relative">
          <div class="w-48 h-32 sm:w-60 sm:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 bg-black/40 mx-auto transition-transform hover:scale-105">
            <img src="images/flags/${country.code}.svg" alt="Asmatu beharreko bandera" class="w-full h-full object-cover">
          </div>
          <span class="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full text-[11px] font-black bg-blue-600 text-white shadow-md border border-white/40">
            Zein da? 🤔
          </span>
        </div>

        <div>
          <h3 class="text-xl sm:text-2xl font-black text-white tracking-tight">
            Zein herrialderi dagokio bandera hau?
          </h3>
          <p class="text-xs sm:text-sm text-blue-200/80 mt-1">
            Hautatu Europako 49 estatuen arteko aukera zuzena:
          </p>
        </div>
      </div>

      <!-- 4 AUKERAK -->
      <div id="flag-options-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        ${options.map(opt => `
          <button onclick="app.checkFlagCountry('${opt.name.replace(/'/g, "\\'")}')" 
                  class="flag-opt-btn p-4 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-[0.98] border-2 border-white/15 hover:border-blue-400 text-white font-bold text-base transition-all text-left flex items-center justify-between cursor-pointer group">
            <span class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-black text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                •
              </span>
              <span>${opt.name}</span>
            </span>
            <span class="opt-icon text-lg opacity-0 transition-opacity">➜</span>
          </button>
        `).join('')}
      </div>

      <!-- FEEDBACK & NEXT ACTION -->
      <div id="flag-feedback-box" class="hidden space-y-3 pt-2">
        <div id="flag-feedback-text" class="p-3.5 rounded-2xl text-center text-sm sm:text-base font-bold shadow-md"></div>
        <div class="flex justify-end">
          <button onclick="app.renderFlagGameStep2()" 
                  id="btn-goto-capital"
                  class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer">
            <span>2. Urratsa: Hiriburua Asmatu</span>
            <span>➜</span>
          </button>
        </div>
      </div>
    `;
  },

  checkFlagCountry(selectedName) {
    if (this.flagGameState.countryAnswered) return;
    this.flagGameState.countryAnswered = true;
    this.flagGameState.userCountryChoice = selectedName;

    const country = this.flagGameState.currentCountry;
    const isCorrect = selectedName === country.name;
    if (isCorrect) {
      this.flagGameState.countryScore++;
    }

    const feedbackBox = document.getElementById('flag-feedback-box');
    const feedbackText = document.getElementById('flag-feedback-text');
    const buttons = document.querySelectorAll('.flag-opt-btn');

    buttons.forEach(btn => {
      btn.disabled = true;
      btn.classList.remove('hover:bg-white/20', 'hover:border-blue-400', 'cursor-pointer');
      const text = btn.innerText;
      if (text.includes(country.name)) {
        btn.className = 'flag-opt-btn p-4 rounded-2xl bg-emerald-600 text-white font-black border-2 border-emerald-400 text-left flex items-center justify-between shadow-md scale-[1.01]';
        const icon = btn.querySelector('.opt-icon');
        if (icon) { icon.innerHTML = '✓'; icon.classList.remove('opacity-0'); }
      } else if (text.includes(selectedName)) {
        btn.className = 'flag-opt-btn p-4 rounded-2xl bg-rose-600 text-white font-bold border-2 border-rose-400 text-left flex items-center justify-between shadow-md';
        const icon = btn.querySelector('.opt-icon');
        if (icon) { icon.innerHTML = '✗'; icon.classList.remove('opacity-0'); }
      } else {
        btn.className = 'flag-opt-btn p-4 rounded-2xl bg-white/5 text-white/40 border-2 border-white/5 text-left flex items-center justify-between opacity-50';
      }
    });

    if (feedbackBox && feedbackText) {
      feedbackBox.classList.remove('hidden');
      if (isCorrect) {
        feedbackText.className = 'p-3.5 rounded-2xl text-center text-sm sm:text-base font-bold shadow-md bg-emerald-950/80 border-2 border-emerald-500/50 text-emerald-200';
        feedbackText.innerHTML = `🎉 <strong>BIKAIN!</strong> Bandera hau <strong>${country.name}</strong> ${country.flag} estatuari dagokio. Orain asmatu bere hiriburua!`;
      } else {
        feedbackText.className = 'p-3.5 rounded-2xl text-center text-sm sm:text-base font-bold shadow-md bg-rose-950/80 border-2 border-rose-500/50 text-rose-200';
        feedbackText.innerHTML = `❌ <strong>Ez da zuzena.</strong> Bandera hau <strong>${country.name}</strong> ${country.flag} estatuari dagokio (${selectedName}-ren ordez). Ikus dezagun bere hiriburua badakizun!`;
      }
    }
  },

  renderFlagGameStep2() {
    this.flagGameState.step = 2;
    const container = document.getElementById('flag-game-container');
    if (!container) return;

    const country = this.flagGameState.currentCountry;
    if (!country) return;

    // Pick 3 random distractor capitals
    const otherCapitals = this.countriesData
      .filter(c => c.cap !== country.cap)
      .map(c => c.cap)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    const capOptions = [country.cap, ...otherCapitals].sort(() => 0.5 - Math.random());

    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4">
        <div class="flex items-center gap-2.5">
          <span class="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-xl shadow-md">🏛️</span>
          <div>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/30 text-amber-200 border border-amber-400/30">
              2. URRATSA: HIRIBURUA ASMATU
            </span>
            <h4 class="text-base sm:text-lg font-black text-white">Bandera & Hiriburua Jokoa</h4>
          </div>
        </div>
        <div class="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-extrabold">
          <span class="px-3 py-1 rounded-xl bg-white/10 text-white border border-white/10 shadow-xs">
            🏁 Txanda: <strong class="text-yellow-300 font-black">${this.flagGameState.round}</strong>
          </span>
          <span class="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-xs">
            🚩 Banderak: <strong class="text-white font-black">${this.flagGameState.countryScore}</strong>
          </span>
          <span class="px-3 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-xs">
            🏛️ Hiriburuak: <strong class="text-white font-black">${this.flagGameState.capitalScore}</strong>
          </span>
        </div>
      </div>

      <!-- BANDERA ETA HERRIALDEA ERREBELATUA -->
      <div class="text-center space-y-3 py-2">
        <div class="inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/10 border border-white/15 shadow-inner">
          <div class="w-16 h-10 rounded-lg overflow-hidden border border-white/30 shadow-sm flex-shrink-0">
            <img src="images/flags/${country.code}.svg" alt="${country.name} bandera" class="w-full h-full object-cover">
          </div>
          <div class="text-left">
            <span class="text-[11px] uppercase tracking-wider text-blue-300 font-bold block">Estatu hautatua:</span>
            <strong class="text-lg sm:text-xl font-black text-white">${country.name} ${country.flag}</strong>
          </div>
        </div>

        <div>
          <h3 class="text-xl sm:text-2xl font-black text-white tracking-tight">
            Zein da <u class="text-amber-300">${country.name}</u>ko hiriburua?
          </h3>
          <p class="text-xs sm:text-sm text-amber-200/80 mt-1">
            Aukeratu beheko 4 hiriburuen artean:
          </p>
        </div>
      </div>

      <!-- 4 HIRIBURU AUKERAK -->
      <div id="capital-options-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        ${capOptions.map(cap => `
          <button onclick="app.checkFlagCapital('${cap.replace(/'/g, "\\'")}')" 
                  class="cap-opt-btn p-4 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-[0.98] border-2 border-white/15 hover:border-amber-400 text-white font-bold text-base transition-all text-left flex items-center justify-between cursor-pointer group">
            <span class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm font-black text-amber-300 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                🏛️
              </span>
              <span>${cap}</span>
            </span>
            <span class="opt-cap-icon text-lg opacity-0 transition-opacity">➜</span>
          </button>
        `).join('')}
      </div>

      <!-- FEEDBACK & NEXT ROUND ACTION -->
      <div id="capital-feedback-box" class="hidden space-y-3 pt-2">
        <div id="capital-feedback-text" class="p-3.5 rounded-2xl text-center text-sm sm:text-base font-bold shadow-md"></div>
        <div class="flex justify-end">
          <button onclick="app.nextFlagRound()" 
                  id="btn-next-flag-round"
                  class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer">
            <span>Hurrengo Bandera ➜</span>
          </button>
        </div>
      </div>
    `;
  },

  checkFlagCapital(selectedCap) {
    if (this.flagGameState.capitalAnswered) return;
    this.flagGameState.capitalAnswered = true;
    this.flagGameState.userCapitalChoice = selectedCap;

    const country = this.flagGameState.currentCountry;
    const isCorrect = selectedCap === country.cap;
    if (isCorrect) {
      this.flagGameState.capitalScore++;
    }

    const feedbackBox = document.getElementById('capital-feedback-box');
    const feedbackText = document.getElementById('capital-feedback-text');
    const buttons = document.querySelectorAll('.cap-opt-btn');

    buttons.forEach(btn => {
      btn.disabled = true;
      btn.classList.remove('hover:bg-white/20', 'hover:border-amber-400', 'cursor-pointer');
      const text = btn.innerText;
      if (text.includes(country.cap)) {
        btn.className = 'cap-opt-btn p-4 rounded-2xl bg-emerald-600 text-white font-black border-2 border-emerald-400 text-left flex items-center justify-between shadow-md scale-[1.01]';
        const icon = btn.querySelector('.opt-cap-icon');
        if (icon) { icon.innerHTML = '✓'; icon.classList.remove('opacity-0'); }
      } else if (text.includes(selectedCap)) {
        btn.className = 'cap-opt-btn p-4 rounded-2xl bg-rose-600 text-white font-bold border-2 border-rose-400 text-left flex items-center justify-between shadow-md';
        const icon = btn.querySelector('.opt-cap-icon');
        if (icon) { icon.innerHTML = '✗'; icon.classList.remove('opacity-0'); }
      } else {
        btn.className = 'cap-opt-btn p-4 rounded-2xl bg-white/5 text-white/40 border-2 border-white/5 text-left flex items-center justify-between opacity-50';
      }
    });

    if (feedbackBox && feedbackText) {
      feedbackBox.classList.remove('hidden');
      if (isCorrect) {
        feedbackText.className = 'p-3.5 rounded-2xl text-center text-sm sm:text-base font-bold shadow-md bg-emerald-950/80 border-2 border-emerald-500/50 text-emerald-200';
        feedbackText.innerHTML = `🎉 <strong>BIKAIN!</strong> ${country.name}ko hiriburua <strong>${country.cap}</strong> da!`;
      } else {
        feedbackText.className = 'p-3.5 rounded-2xl text-center text-sm sm:text-base font-bold shadow-md bg-rose-950/80 border-2 border-rose-500/50 text-rose-200';
        feedbackText.innerHTML = `❌ <strong>Ez da zuzena.</strong> ${country.name}ko hiriburua <strong>${country.cap}</strong> da (${selectedCap}-ren ordez).`;
      }
    }
  },

  nextFlagRound() {
    this.flagGameState.round++;
    this.startNewFlagRound();
  },

  // Bateragarritasuna
  renderMapQuiz() {
    this.initFlagGame();
  },

  // --------------------------------------------------------------------------
  // 1.4 DEMOGRAFIA PRESET-AK
  // --------------------------------------------------------------------------
  loadDemoPreset(year) {
    const b = document.getElementById('demo-births');
    const d = document.getElementById('demo-deaths');
    const im = document.getElementById('demo-immig');
    const em = document.getElementById('demo-emig');

    if (year === 2017 && b && d && im && em) {
      b.value = 391930;
      d.value = 423643;
      im.value = 532482;
      em.value = 367878;
      this.calculateDemo();
    }
  },

  // --------------------------------------------------------------------------
  // 1.6 LAN SEKTOREAK JOKOA
  // --------------------------------------------------------------------------
  jobsList: [
    { title: '🚜 Baserritarra (Barazkiak eta laboreak landu)', sector: 'lehena' },
    { title: '🩺 Mediku edo Erizaina (Gaixoak artatu)', sector: 'hirugarrena' },
    { title: '🏭 Kotxe-lantegiko mekanikaria (Industria)', sector: 'bigarrena' },
    { title: '🐟 Bermeoko arrantzalea (Itsasoan arrantzatu)', sector: 'lehena' },
    { title: '👩‍🏫 Ikastolako irakaslea (Eskolak eman)', sector: 'hirugarrena' },
    { title: '🏗️ Eraikuntzako igeltseroa (Etxebizitzak egin)', sector: 'bigarrena' },
    { title: '🚚 Produktuen garraiolaria (Kamioia gidatu)', sector: 'hirugarrena' },
    { title: '🌲 Basogilea (Egurra eta zuhaitzak moztu)', sector: 'lehena' }
  ],
  jobQuizIdx: 0,

  initJobQuiz() {
    this.renderCurrentJob();
  },

  renderCurrentJob() {
    const nameEl = document.getElementById('job-name');
    const feedEl = document.getElementById('job-feedback');
    if (!nameEl) return;
    if (feedEl) feedEl.innerText = '';
    const job = this.jobsList[this.jobQuizIdx % this.jobsList.length];
    nameEl.innerText = job.title;
  },

  checkJobSector(sector) {
    const job = this.jobsList[this.jobQuizIdx % this.jobsList.length];
    const feedEl = document.getElementById('job-feedback');
    if (!feedEl) return;

    if (sector === job.sector) {
      feedEl.className = 'text-xs font-bold text-emerald-600';
      feedEl.innerText = `✅ ZORIONAK! Asmatu duzu: "${job.title}" ${sector.toUpperCase()} sektorekoa da.`;
    } else {
      feedEl.className = 'text-xs font-bold text-rose-600';
      feedEl.innerText = `❌ Saiatu berriro! Lanbide hori ${job.sector.toUpperCase()} sektorekoa da.`;
    }

    setTimeout(() => {
      this.jobQuizIdx++;
      this.renderCurrentJob();
    }, 1500);
  },

  // --------------------------------------------------------------------------
  // ZIRKUITU SIMULAGAILUA
  // --------------------------------------------------------------------------
  setCircuitMode(m) {
    this.circuitState.mode = m;
    const btnS = document.getElementById('btn-circuit-serie');
    const btnP = document.getElementById('btn-circuit-paralelo');
    const exp = document.getElementById('circuit-explanation');

    if (m === 'serie') {
      if (btnS) btnS.className = 'px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950';
      if (btnP) btnP.className = 'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300';
      if (exp) exp.innerHTML = '💡 <strong>Seriean:</strong> Bonbilla guztiak kable berean daude. Bat kentzen edo puskatzen bada, korrontea eten eta beste guztia itzaltzen da.';
    } else {
      if (btnP) btnP.className = 'px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950';
      if (btnS) btnS.className = 'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300';
      if (exp) exp.innerHTML = '💡 <strong>Paraleloan:</strong> Hargailu bakoitzak bere adar independentea du. Bonbilla bat kentzen bada ere, besteak piztuta jarraitzen du (gure etxeetan bezala!).';
    }
    this.updateCircuitVisuals();
  },

  toggleCircuitSwitch() {
    this.circuitState.closed = !this.circuitState.closed;
    const btn = document.getElementById('circuit-switch-btn');
    if (btn) {
      if (this.circuitState.closed) {
        btn.className = 'px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-lg transition-all';
        btn.innerHTML = '🟢 Etengailua: ITXITA (Piztuta)';
      } else {
        btn.className = 'px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-lg transition-all';
        btn.innerHTML = '🔴 Etengailua: IREKITA (Itzalita)';
      }
    }
    this.updateCircuitVisuals();
  },

  toggleBulb(num) {
    if (num === 1) this.circuitState.bulb1 = !this.circuitState.bulb1;
    if (num === 2) this.circuitState.bulb2 = !this.circuitState.bulb2;
    this.updateCircuitVisuals();
  },

  updateCircuitVisuals() {
    const b1Icon = document.getElementById('bulb-1-icon');
    const b2Icon = document.getElementById('bulb-2-icon');

    let b1On = false;
    let b2On = false;

    if (this.circuitState.closed) {
      if (this.circuitState.mode === 'serie') {
        if (this.circuitState.bulb1 && this.circuitState.bulb2) {
          b1On = true;
          b2On = true;
        }
      } else {
        if (this.circuitState.bulb1) b1On = true;
        if (this.circuitState.bulb2) b2On = true;
      }
    }

    if (b1Icon) {
      b1Icon.className = b1On ? 'text-4xl block text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.9)] scale-110 transition-all' : 'text-4xl block opacity-40 transition-all';
    }
    if (b2Icon) {
      b2Icon.className = b2On ? 'text-4xl block text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.9)] scale-110 transition-all' : 'text-4xl block opacity-40 transition-all';
    }
  },

  // --------------------------------------------------------------------------
  // 2. GAIAREN ARIKETA INTERAKTIBOAK (ORGANOEN LOTURA ETA MASTER GALDETEGIA)
  // --------------------------------------------------------------------------
  organQuestions: [
    { text: 'Odola gorputz osora ponpatzen du mantenugaiak eta oxigenoa banatzeko...', correct: 'zirkulazio', name: 'Zirkulazio-aparatua' },
    { text: 'Airetik oxigenoa ($O_2$) hartu eta odoleko $CO_2$ kanporatzen du biriken bidez...', correct: 'arnasketa', name: 'Arnasketa-aparatua' },
    { text: 'Jandako elikagaiak xehatu, mantenugaiak xurgatu eta odolera pasatzen ditu...', correct: 'digestio', name: 'Digestio-aparatua' },
    { text: 'Odoleko hondakin pozoitsuak giltzurrunetan garbitu eta txizaz botatzen ditu...', correct: 'iraitz', name: 'Iraitz-aparatua' }
  ],
  organQuestionIdx: 0,

  initOrganQuiz() {
    this.organQuestionIdx = 0;
    this.renderOrganQuestion();
  },

  renderOrganQuestion() {
    const qElem = document.getElementById('organ-question');
    const fbElem = document.getElementById('organ-feedback');
    if (!qElem) return;
    const currentQ = this.organQuestions[this.organQuestionIdx];
    qElem.innerHTML = `Galdera (${this.organQuestionIdx + 1}/4): "${currentQ.text}"`;
    if (fbElem) fbElem.innerHTML = '';
  },

  checkOrganAnswer(selected) {
    const fbElem = document.getElementById('organ-feedback');
    if (!fbElem) return;
    const currentQ = this.organQuestions[this.organQuestionIdx];

    if (selected === currentQ.correct) {
      fbElem.innerHTML = `<span class="text-emerald-300 font-bold">🎉 Oso ondo! Bikain: ${currentQ.name} da!</span>`;
      setTimeout(() => {
        if (this.organQuestionIdx + 1 < this.organQuestions.length) {
          this.organQuestionIdx++;
          this.renderOrganQuestion();
        } else {
          const qElem = document.getElementById('organ-question');
          if (qElem) qElem.innerHTML = `🏆 <strong class="text-white">Zorionak! 4 ariketak asmatu dituzu!</strong>`;
          fbElem.innerHTML = `<span class="text-yellow-300 font-bold">Bikain aritu zara giza gorputzeko aparatuak bereizten.</span> <button onclick="app.initOrganQuiz()" class="ml-3 px-3 py-1 bg-white text-emerald-900 font-bold rounded-lg text-xs hover:bg-emerald-100 cursor-pointer">Berriz Saiatu 🔄</button>`;
        }
      }, 1400);
    } else {
      fbElem.innerHTML = `<span class="text-rose-300 font-bold">❌ Saiatu berriro! Pentsatu zein organok betetzen duen lan hori...</span>`;
    }
  },

  // 2. GAIAREN EBALUAZIO GALDETEGI NAGUSIA (MASTER QUIZ) - BANAN-BANAN (1EZ 1)
  theme2QuizQuestions: [
    {
      q: '1. Zein da izaki bizidun guztien bizi-unitaterik txikiena?',
      options: ['Organoa', 'Zelula', 'Ehuna', 'Aparatua'],
      correct: 1,
      explain: 'Zelula da bizitzaren oinarrizko unitatea, bere kabuz elikatu, erlazionatu eta ugaltzeko gai dena.'
    },
    {
      q: '2. Zer organulu berezi dute landare-zelulek fotosintesia egiteko eta kolore berdea emateko?',
      options: ['Kloroplastoa', 'Mitokondrioa', 'Erribosoma', 'Zentrioloa'],
      correct: 0,
      explain: 'Kloroplastoek klorofila dute; bertan eguzki-argia xurgatu eta fotosintesia burutzen dute.'
    },
    {
      q: '3. Entzefaloaren zein atalek kudeatzen du oreka eta mugimenduen koordinazio fina?',
      options: ['Bizkarrezur-erraboila', 'Garuna', 'Zerebeloa', 'Bizkarrezur-muina'],
      correct: 2,
      explain: 'Zerebeloa da oreka eta borondatezko mugimenduen zehaztasuna kontrolatzen duen organoa.'
    },
    {
      q: '4. Emakumeen zein organotan elkartzen dira obulua eta espermatozoidea (ernalketa gertatzeko)?',
      options: ['Umetokian', 'Falopioren tronpetan', 'Baginan', 'Obarioan'],
      correct: 1,
      explain: 'Falopioren tronpan espermatozoide batek obulua ernaltzen du, zigotoa sortuz.'
    },
    {
      q: '5. Nola deitzen zaio zigotoa zatituz sortutako enbrioia umetokiko endometrioari itsasteari?',
      options: ['Obulazioa', 'Inplantazioa (ezarpena)', 'Egoztea', 'Dilatazioa'],
      correct: 1,
      explain: 'Inplantazioa edo ezarpena enbrioia umetokiko endometriora sendo itsasteko prozesua da.'
    }
  ],
  theme2Score: 0,
  theme2CurrentIdx: 0,
  theme2Answered: {},
  theme2Timeout: null,

  initTheme2MasterQuiz() {
    this.theme2Score = 0;
    this.theme2CurrentIdx = 0;
    this.theme2Answered = {};
    if (this.theme2Timeout) {
      clearTimeout(this.theme2Timeout);
      this.theme2Timeout = null;
    }
    const scoreElem = document.getElementById('t2-score');
    if (scoreElem) scoreElem.textContent = '0';
    this.renderTheme2Question();
  },

  renderTheme2Question() {
    const body = document.getElementById('t2-quiz-body');
    if (!body) return;

    if (this.theme2CurrentIdx >= this.theme2QuizQuestions.length) {
      this.renderTheme2Celebration();
      return;
    }

    const qIdx = this.theme2CurrentIdx;
    const qObj = this.theme2QuizQuestions[qIdx];
    const totalQ = this.theme2QuizQuestions.length;
    const progressPercent = Math.round(((qIdx + 1) / totalQ) * 100);

    body.innerHTML = `
      <div class="space-y-4">
        <!-- AURRERAPEN-BARRA ETA INDIKATZAILEAK -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs sm:text-sm font-bold text-emerald-200">
            <span class="flex items-center gap-1.5">
              <span>🎯</span> Galdera: <strong class="text-white text-base">${qIdx + 1}</strong> / ${totalQ}
            </span>
            <div class="flex items-center gap-1">
              ${this.theme2QuizQuestions.map((_, i) => {
                let dotClass = 'bg-emerald-950/80 border border-emerald-600/40 text-emerald-400';
                if (i < qIdx) {
                  dotClass = 'bg-emerald-400 text-emerald-950 font-black shadow-sm';
                } else if (i === qIdx) {
                  dotClass = 'bg-yellow-400 text-slate-950 font-black ring-2 ring-yellow-300 scale-110';
                }
                return `<span class="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all ${dotClass}">${i + 1}</span>`;
              }).join('')}
            </div>
          </div>
          <div class="w-full h-2.5 bg-emerald-950/80 rounded-full overflow-hidden border border-emerald-700/50">
            <div class="h-full bg-gradient-to-r from-emerald-400 to-yellow-300 rounded-full transition-all duration-300" style="width: ${progressPercent}%;"></div>
          </div>
        </div>

        <!-- GALDERAREN TXARTELA -->
        <div class="p-6 bg-emerald-800/80 rounded-3xl border border-emerald-700/80 shadow-xl space-y-4">
          <h4 class="font-black text-lg sm:text-xl text-white leading-snug">${qObj.q}</h4>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            ${qObj.options.map((opt, optIdx) => `
              <button id="t2-btn-${optIdx}" onclick="app.answerTheme2MasterQuiz(${optIdx})" 
                      class="t2-opt-btn text-left p-4 rounded-2xl bg-emerald-950/70 hover:bg-emerald-700/90 border border-emerald-600/50 font-semibold text-sm sm:text-base transition-all duration-150 flex items-center gap-3 text-white group shadow-sm hover:shadow-md cursor-pointer">
                <span class="w-8 h-8 rounded-xl bg-emerald-800/90 text-emerald-200 group-hover:text-white group-hover:bg-emerald-600 text-sm font-black flex items-center justify-center shrink-0 border border-emerald-500/30">
                  ${['A', 'B', 'C', 'D'][optIdx]}
                </span>
                <span class="leading-snug">${opt}</span>
              </button>
            `).join('')}
          </div>

          <!-- FEEDBACK ETA HURRENGO BOTOIA -->
          <div id="t2-feedback-area" class="hidden pt-3 space-y-3 border-t border-emerald-700/60 mt-2">
            <div id="t2-feedback-text" class="text-sm sm:text-base font-semibold p-3.5 rounded-2xl"></div>
            <div class="flex items-center justify-end">
              <button id="t2-next-btn" onclick="app.nextTheme2Question()" 
                      class="px-6 py-3 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer">
                <span>${qIdx + 1 < totalQ ? 'Hurrengo Galdera' : 'Emaitzak Ikusi'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  answerTheme2MasterQuiz(optIdx) {
    if (this.theme2Answered[this.theme2CurrentIdx]) return;
    this.theme2Answered[this.theme2CurrentIdx] = true;

    if (this.theme2Timeout) {
      clearTimeout(this.theme2Timeout);
      this.theme2Timeout = null;
    }

    const qIdx = this.theme2CurrentIdx;
    const qObj = this.theme2QuizQuestions[qIdx];
    const isCorrect = (optIdx === qObj.correct);
    const selectedBtn = document.getElementById(`t2-btn-${optIdx}`);
    const fbArea = document.getElementById('t2-feedback-area');
    const fbText = document.getElementById('t2-feedback-text');

    // Desgaitu botoi guztiak
    document.querySelectorAll('.t2-opt-btn').forEach(btn => {
      btn.disabled = true;
      btn.classList.remove('hover:bg-emerald-700/90', 'cursor-pointer');
    });

    if (isCorrect) {
      this.theme2Score++;
      const scoreElem = document.getElementById('t2-score');
      if (scoreElem) scoreElem.textContent = this.theme2Score;
      if (selectedBtn) {
        selectedBtn.className = 't2-opt-btn text-left p-4 rounded-2xl bg-emerald-500 text-white border-2 border-emerald-200 font-bold text-sm sm:text-base shadow-lg flex items-center gap-3 scale-[1.01]';
      }
      if (fbText) {
        fbText.className = 'text-sm sm:text-base font-bold p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-400/60 text-emerald-200';
        fbText.innerHTML = `🎉 <strong>Bikain! Zuzen erantzun duzu!</strong><br><span class="text-xs sm:text-sm font-normal text-emerald-100">${qObj.explain}</span>`;
      }
    } else {
      if (selectedBtn) {
        selectedBtn.className = 't2-opt-btn text-left p-4 rounded-2xl bg-rose-600 text-white border-2 border-rose-300 font-bold text-sm sm:text-base flex items-center gap-3';
      }
      const correctBtn = document.getElementById(`t2-btn-${qObj.correct}`);
      if (correctBtn) {
        correctBtn.className = 't2-opt-btn text-left p-4 rounded-2xl bg-emerald-600 text-white border-2 border-emerald-300 font-bold text-sm sm:text-base flex items-center gap-3 shadow-md';
      }
      if (fbText) {
        fbText.className = 'text-sm sm:text-base font-bold p-3.5 rounded-2xl bg-rose-950/80 border border-rose-400/60 text-rose-200';
        fbText.innerHTML = `❌ <strong>Ez da zuzena.</strong> Erantzun egokia: <u>"${qObj.options[qObj.correct]}"</u>.<br><span class="text-xs sm:text-sm font-normal text-rose-100">${qObj.explain}</span>`;
      }
    }

    if (fbArea) fbArea.classList.remove('hidden');

    // Automatikoki hurrengora pasatzeko tenporizadorea (2.2 segundora)
    this.theme2Timeout = setTimeout(() => {
      this.nextTheme2Question();
    }, 2200);
  },

  nextTheme2Question() {
    if (this.theme2Timeout) {
      clearTimeout(this.theme2Timeout);
      this.theme2Timeout = null;
    }
    this.theme2CurrentIdx++;
    this.renderTheme2Question();
  },

  restartTheme2Quiz() {
    this.initTheme2MasterQuiz();
  },

  renderTheme2Celebration() {
    const body = document.getElementById('t2-quiz-body');
    const scoreElem = document.getElementById('t2-score');
    if (scoreElem) scoreElem.innerHTML = `${this.theme2Score} / 5 🌟`;
    if (!body) return;

    let icon = '🏆';
    let cheerTitle = 'ZORIONAK! 2. GAIAREN EBALUAZIOA AMAITU DUZU!';
    let cheerSub = `Emaitza: 5etik ${this.theme2Score} puntu lortu dituzu. Izaki bizidunen egitura eta ugalketaren benetako aditua zara!`;

    if (this.theme2Score === 5) {
      icon = '🌟';
      cheerTitle = 'Bikain! Puntuazio Perfektua (5 / 5)!';
      cheerSub = 'Gai honetako kontzeptu guz-guztiak primeran ulertu dituzu!';
    } else if (this.theme2Score < 3) {
      icon = '💪';
      cheerTitle = 'Galdetegia Amaituta! Jarraitu Praktikatzen!';
      cheerSub = `5etik ${this.theme2Score} puntu lortu dituzu. Berrikusi subgaiak eta saiatu berriz puntuazioa hobetzen!`;
    }

    body.innerHTML = `
      <div class="p-6 sm:p-8 bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 text-slate-900 rounded-3xl font-black text-center shadow-2xl space-y-4 border-2 border-yellow-200">
        <span class="text-5xl block">${icon}</span>
        <h4 class="text-2xl sm:text-3xl font-black text-slate-950">${cheerTitle}</h4>
        <p class="text-sm sm:text-base font-bold text-slate-800 max-w-lg mx-auto leading-relaxed">${cheerSub}</p>
        
        <div class="p-4 bg-white/70 backdrop-blur-sm rounded-2xl max-w-xs mx-auto border border-yellow-600/30">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-700 block">Azken Emaitza</span>
          <span class="text-3xl font-black text-slate-950">${this.theme2Score} / 5</span>
        </div>

        <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onclick="app.restartTheme2Quiz()" 
                  class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
            <span>🔄</span>
            <span>Berriz Saiatu (Galdetegia Berregin)</span>
          </button>
          <button onclick="app.goTo('mod2_mindmap')" 
                  class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-black text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer">
            <span>Buru-Mapa Mentala Arakatu</span>
            <span>→</span>
          </button>
        </div>
      </div>
    `;
  },

  // 3. GAIAREN ERRONKA AZKARRA (ZIRKUITUAK)
  checkQuickCircuitChallenge(isCorrect, btn) {
    const fb = document.getElementById('quick-circuit-feedback');
    const allBtns = document.querySelectorAll('.quick-circuit-btn');
    allBtns.forEach(b => b.disabled = true);
    if (isCorrect) {
      btn.className = 'quick-circuit-btn text-left p-3.5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm border border-emerald-400 shadow-md';
      if (fb) {
        fb.className = 'text-xs sm:text-sm font-semibold pt-2 text-emerald-300 block';
        fb.innerHTML = '✅ Bikain! Seriean korronteak bide bakarra du; elementu bat kentzean edo erretzean, zirkuitua ireki eta gainerako guztiak itzali egiten dira.';
      }
    } else {
      btn.className = 'quick-circuit-btn text-left p-3.5 rounded-xl bg-rose-600 text-white font-bold text-xs sm:text-sm border border-rose-400';
      if (fb) {
        fb.className = 'text-xs sm:text-sm font-semibold pt-2 text-amber-300 block';
        fb.innerHTML = 'ℹ️ Kontuz! Hori zirkuitu paraleloan gertatzen da. Seriean bide bakarra dagoenez, elementu bat kenduta zirkuitu osoa itzali egiten da!';
      }
    }
  },

  // 3. GAIAREN EBALUAZIO GALDETEGI NAGUSIA (MASTER QUIZ) - BANAN-BANAN (1EZ 1)
  theme3QuizQuestions: [
    {
      q: '1. Zein energia mota dute gordeta gure janariek, egurrak edo autoen erregaiak beren lotura kimikoetan?',
      options: ['Energia termikoa', 'Energia kimikoa', 'Energia nuklearra', 'Soinu-energia'],
      correct: 1,
      explain: 'Energia kimikoa substantzien lotura kimikoetan gordetzen da, eta errekuntzan edo digestioan askatzen da.'
    },
    {
      q: '2. Zer dio zientziaren Energiaren Kontserbazio Printzipio nagusiak?',
      options: [
        'Energia erabili ahala desagertu egiten da betiko',
        'Energia ez da sortzen ezta desagertzen, eraldatu baino ez da egiten',
        'Energia berria sor daiteke ezerezetik',
        'Makinek energia sortzen dute, ez dute eraldatzen'
      ],
      correct: 1,
      explain: '«Energia ez da sortzen ezta desagertzen ere; eraldatu baino ez da egiten». Hau da fisikaren oinarrizko lege unibertsala.'
    },
    {
      q: '3. Gaur egun, zein da gutxi gorabehera energia berriztagarrien eta ez-berriztagarrien kontsumoaren proportzioa gure gizartean?',
      options: [
        '%50 berriztagarria eta %50 ez-berriztagarria',
        '%14 berriztagarria eta %84 ez-berriztagarria',
        '%84 berriztagarria eta %14 ez-berriztagarria',
        '%100 berriztagarria'
      ],
      correct: 1,
      explain: 'Kontsumitutako energiaren %84 inguru ez-berriztagarria da oraindik (erregai fosilak), eta %14 soilik berriztagarria.'
    },
    {
      q: '4. Zure etxeko logelako argia itzaltzean, egongelako bonbillek piztuta jarraitzen dute. Zer zirkuitu mota da?',
      options: ['Serieko zirkuitua', 'Paraleloko zirkuitua', 'Zirkuitu-laburra', 'Zirkuitu ireki isolatzailea'],
      correct: 1,
      explain: 'Zirkuitu paraleloan adar independenteak daude; hartzaile bat itzalita ere, besteek bide librea dute korronterako.'
    },
    {
      q: '5. Zirkuitu elektriko batean, zein osagaik sortzen eta bultzatzen du karga elektrikoen mugimendua (korrontea)?',
      options: [
        'Hartzaileak (bonbilla edo motorra)',
        'Kontrol-elementuak (etengailua)',
        'Sorgailuak (pila edo bateria)',
        'Eroaleak (kobrezko kableak)'
      ],
      correct: 2,
      explain: 'Sorgailuak (pilak, bateriak, dinamoak) beharrezko tentsioa ematen du korronte elektrikoa sortu eta bultzatzeko.'
    }
  ],
  theme3Score: 0,
  theme3CurrentIdx: 0,
  theme3Answered: {},
  theme3Timeout: null,

  initTheme3MasterQuiz() {
    this.theme3Score = 0;
    this.theme3CurrentIdx = 0;
    this.theme3Answered = {};
    if (this.theme3Timeout) {
      clearTimeout(this.theme3Timeout);
      this.theme3Timeout = null;
    }
    const scoreElem = document.getElementById('t3-score');
    if (scoreElem) scoreElem.textContent = '0';
    this.renderTheme3Question();
  },

  renderTheme3Question() {
    const body = document.getElementById('t3-quiz-body');
    if (!body) return;

    if (this.theme3CurrentIdx >= this.theme3QuizQuestions.length) {
      this.renderTheme3Celebration();
      return;
    }

    const qIdx = this.theme3CurrentIdx;
    const qObj = this.theme3QuizQuestions[qIdx];
    const totalQ = this.theme3QuizQuestions.length;
    const progressPercent = Math.round(((qIdx + 1) / totalQ) * 100);

    body.innerHTML = `
      <div class="space-y-4">
        <!-- AURRERAPEN-BARRA ETA INDIKATZAILEAK -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs sm:text-sm font-bold text-amber-200">
            <span class="flex items-center gap-1.5">
              <span>⚡</span> Galdera: <strong class="text-white text-base">${qIdx + 1}</strong> / ${totalQ}
            </span>
            <div class="flex items-center gap-1">
              ${this.theme3QuizQuestions.map((_, i) => {
                let dotClass = 'bg-amber-950/80 border border-amber-600/40 text-amber-400';
                if (i < qIdx) {
                  dotClass = 'bg-amber-400 text-slate-950 font-black shadow-sm';
                } else if (i === qIdx) {
                  dotClass = 'bg-yellow-400 text-slate-950 font-black ring-2 ring-yellow-300 scale-110';
                }
                return `<span class="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all ${dotClass}">${i + 1}</span>`;
              }).join('')}
            </div>
          </div>
          <div class="w-full h-2.5 bg-amber-950/80 rounded-full overflow-hidden border border-amber-700/50">
            <div class="h-full bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full transition-all duration-300" style="width: ${progressPercent}%;"></div>
          </div>
        </div>

        <!-- GALDERAREN TXARTELA -->
        <div class="p-6 bg-amber-900/80 rounded-3xl border border-amber-700/80 shadow-xl space-y-4">
          <h4 class="font-black text-lg sm:text-xl text-white leading-snug">${qObj.q}</h4>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            ${qObj.options.map((opt, optIdx) => `
              <button id="t3-btn-${optIdx}" onclick="app.answerTheme3MasterQuiz(${optIdx})" 
                      class="t3-opt-btn text-left p-4 rounded-2xl bg-amber-950/70 hover:bg-amber-800/90 border border-amber-600/50 font-semibold text-sm sm:text-base transition-all duration-150 flex items-center gap-3 text-white group shadow-sm hover:shadow-md cursor-pointer">
                <span class="w-8 h-8 rounded-xl bg-amber-800 text-amber-200 group-hover:text-white group-hover:bg-amber-600 text-sm font-black flex items-center justify-center shrink-0 border border-amber-500/30">
                  ${['A', 'B', 'C', 'D'][optIdx]}
                </span>
                <span class="leading-snug">${opt}</span>
              </button>
            `).join('')}
          </div>

          <!-- FEEDBACK ETA HURRENGO BOTOIA -->
          <div id="t3-feedback-area" class="hidden pt-3 space-y-3 border-t border-amber-700/60 mt-2">
            <div id="t3-feedback-text" class="text-sm sm:text-base font-semibold p-3.5 rounded-2xl"></div>
            <div class="flex items-center justify-end">
              <button id="t3-next-btn" onclick="app.nextTheme3Question()" 
                      class="px-6 py-3 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer">
                <span>${qIdx + 1 < totalQ ? 'Hurrengo Galdera' : 'Emaitzak Ikusi'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  answerTheme3MasterQuiz(optIdx) {
    if (this.theme3Answered[this.theme3CurrentIdx]) return;
    this.theme3Answered[this.theme3CurrentIdx] = true;

    if (this.theme3Timeout) {
      clearTimeout(this.theme3Timeout);
      this.theme3Timeout = null;
    }

    const qIdx = this.theme3CurrentIdx;
    const qObj = this.theme3QuizQuestions[qIdx];
    const isCorrect = (optIdx === qObj.correct);
    const selectedBtn = document.getElementById(`t3-btn-${optIdx}`);
    const fbArea = document.getElementById('t3-feedback-area');
    const fbText = document.getElementById('t3-feedback-text');

    // Desgaitu botoi guztiak
    document.querySelectorAll('.t3-opt-btn').forEach(btn => {
      btn.disabled = true;
      btn.classList.remove('hover:bg-amber-800/90', 'cursor-pointer');
    });

    if (isCorrect) {
      this.theme3Score++;
      const scoreElem = document.getElementById('t3-score');
      if (scoreElem) scoreElem.textContent = this.theme3Score;
      if (selectedBtn) {
        selectedBtn.className = 't3-opt-btn text-left p-4 rounded-2xl bg-emerald-500 text-white border-2 border-emerald-200 font-bold text-sm sm:text-base shadow-lg flex items-center gap-3 scale-[1.01]';
      }
      if (fbText) {
        fbText.className = 'text-sm sm:text-base font-bold p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-400/60 text-emerald-200';
        fbText.innerHTML = `🎉 <strong>Bikain! Zuzen erantzun duzu!</strong><br><span class="text-xs sm:text-sm font-normal text-emerald-100">${qObj.explain}</span>`;
      }
    } else {
      if (selectedBtn) {
        selectedBtn.className = 't3-opt-btn text-left p-4 rounded-2xl bg-rose-600 text-white border-2 border-rose-300 font-bold text-sm sm:text-base flex items-center gap-3';
      }
      const correctBtn = document.getElementById(`t3-btn-${qObj.correct}`);
      if (correctBtn) {
        correctBtn.className = 't3-opt-btn text-left p-4 rounded-2xl bg-emerald-600 text-white border-2 border-emerald-300 font-bold text-sm sm:text-base flex items-center gap-3 shadow-md';
      }
      if (fbText) {
        fbText.className = 'text-sm sm:text-base font-bold p-3.5 rounded-2xl bg-rose-950/80 border border-rose-400/60 text-rose-200';
        fbText.innerHTML = `❌ <strong>Ez da zuzena.</strong> Erantzun egokia: <u>"${qObj.options[qObj.correct]}"</u>.<br><span class="text-xs sm:text-sm font-normal text-rose-100">${qObj.explain}</span>`;
      }
    }

    if (fbArea) fbArea.classList.remove('hidden');

    // Automatikoki hurrengora pasatzeko tenporizadorea (2.2 segundora)
    this.theme3Timeout = setTimeout(() => {
      this.nextTheme3Question();
    }, 2200);
  },

  nextTheme3Question() {
    if (this.theme3Timeout) {
      clearTimeout(this.theme3Timeout);
      this.theme3Timeout = null;
    }
    this.theme3CurrentIdx++;
    this.renderTheme3Question();
  },

  restartTheme3Quiz() {
    this.initTheme3MasterQuiz();
  },

  renderTheme3Celebration() {
    const body = document.getElementById('t3-quiz-body');
    const scoreElem = document.getElementById('t3-score');
    if (scoreElem) scoreElem.innerHTML = `${this.theme3Score} / 5 ⚡`;
    if (!body) return;

    let icon = '⚡';
    let cheerTitle = 'ZORIONAK! 3. GAIAREN EBALUAZIOA AMAITU DUZU!';
    let cheerSub = `Emaitza: 5etik ${this.theme3Score} puntu lortu dituzu. Energiaren eta zirkuitu elektrikoen benetako aditua zara!`;

    if (this.theme3Score === 5) {
      icon = '🏆';
      cheerTitle = 'Bikain! Puntuazio Perfektua (5 / 5)!';
      cheerSub = 'Energia, berriztagarriak eta zirkuitu elektrikoen kontzeptu guztiak menderatzen dituzu!';
    } else if (this.theme3Score < 3) {
      icon = '💪';
      cheerTitle = 'Galdetegia Amaituta! Jarraitu Praktikatzen!';
      cheerSub = `5etik ${this.theme3Score} puntu lortu dituzu. Berrikusi energia-motak eta zirkuituak berriro hobetzeko!`;
    }

    body.innerHTML = `
      <div class="p-6 sm:p-8 bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 text-slate-900 rounded-3xl font-black text-center shadow-2xl space-y-4 border-2 border-yellow-200">
        <span class="text-5xl block">${icon}</span>
        <h4 class="text-2xl sm:text-3xl font-black text-slate-950">${cheerTitle}</h4>
        <p class="text-sm sm:text-base font-bold text-slate-800 max-w-lg mx-auto leading-relaxed">${cheerSub}</p>
        
        <div class="p-4 bg-white/70 backdrop-blur-sm rounded-2xl max-w-xs mx-auto border border-yellow-600/30">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-700 block">Azken Emaitza</span>
          <span class="text-3xl font-black text-slate-950">${this.theme3Score} / 5</span>
        </div>

        <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onclick="app.restartTheme3Quiz()" 
                  class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
            <span>🔄</span>
            <span>Berriz Saiatu (Galdetegia Berregin)</span>
          </button>
          <button onclick="app.goTo('mod3_mindmap')" 
                  class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-black text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer">
            <span>Buru-Mapa Mentala Arakatu</span>
            <span>→</span>
          </button>
        </div>
      </div>
    `;
  }
};

// HASIERATU APLIKAZIOA
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});

// FUNZIO GLOBALA INPRIMATZEKO: TEMA OSOA / BLOKE OSOA (KOADERNOTXOA A4)
// Estrategia: Contenedor separado #print-booklet-container.
// #app-main-content EZ DA ALDATZEN — SPA egoera bere horretan geratzen da.
function imprimatuTema(targetThemeId) {
  const printContainer = document.getElementById('print-booklet-container');
  if (!printContainer) {
    window.print();
    return;
  }
  if (printContainer.innerHTML.trim() !== '') {
    return; // Ya está preparando una impresión
  }

  const appObj = (typeof app !== 'undefined') ? app : (window.app || null);
  const data = (typeof SUBTOPICS_DATA !== 'undefined') ? SUBTOPICS_DATA : (window.SUBTOPICS_DATA || {});

  // 1. Cerrar sidebar, modales y popovers si estuvieran abiertos
  if (appObj) {
    if (typeof appObj.closeSidebar === 'function') appObj.closeSidebar();
    if (typeof appObj.closeCountryModal === 'function') appObj.closeCountryModal();
    if (typeof appObj.closeKeywordPopover === 'function') appObj.closeKeywordPopover();
  }

  // 2. Identificar cuál es el tema/bloque activo actual (Tema 1, 2, 3 o 4)
  let currentThemeId = targetThemeId ? parseInt(targetThemeId, 10) : ((appObj && appObj.lastActiveThemeId) || 1);
  let currentKey = (appObj && appObj.currentView) || 'mod1_sub1';
  let themeName = '1. Gaia: Europa & Euskadi';

  if (!targetThemeId) {
    if (currentKey && currentKey !== 'home') {
      if (data[currentKey] && data[currentKey].themeId) {
        currentThemeId = data[currentKey].themeId;
        themeName = data[currentKey].themeName;
      } else if (currentKey.startsWith('mod1')) {
        currentThemeId = 1;
        themeName = '1. Gaia: Europa & Euskadi';
      } else if (currentKey.startsWith('mod2')) {
        currentThemeId = 2;
        themeName = '2. Gaia: Izaki Bizidunak';
      } else if (currentKey.startsWith('mod3')) {
        currentThemeId = 3;
        themeName = '3. Gaia: Energia & Elektrizitatea';
      } else if (currentKey.startsWith('mod4')) {
        currentThemeId = 4;
        themeName = '4. Gaia: Aro Garaikidea';
      }
    } else {
      // Si está en home sin targetThemeId, usar el último tema activo
      if (currentThemeId === 2) themeName = '2. Gaia: Izaki Bizidunak';
      else if (currentThemeId === 3) themeName = '3. Gaia: Energia & Elektrizitatea';
      else if (currentThemeId === 4) themeName = '4. Gaia: Aro Garaikidea';
      else {
        currentThemeId = 1;
        themeName = '1. Gaia: Europa & Euskadi';
      }
    }
  } else {
    if (currentThemeId === 2) themeName = '2. Gaia: Izaki Bizidunak';
    else if (currentThemeId === 3) themeName = '3. Gaia: Energia & Elektrizitatea';
    else if (currentThemeId === 4) themeName = '4. Gaia: Aro Garaikidea';
    else {
      currentThemeId = 1;
      themeName = '1. Gaia: Europa & Euskadi';
    }
  }

  if (appObj) appObj.lastActiveThemeId = currentThemeId;

  // 3. Recopilar TODOS los subtemas del tema activo
  const themeSubtopics = Object.entries(data)
    .filter(([k, v]) => v.themeId === currentThemeId);

  if (themeSubtopics.length === 0) {
    window.print();
    return;
  }

  // 4. Portada A4 exclusiva al inicio del tema
  const coverImageSrc = `images/portada_tema_${currentThemeId}.jpg`;
  const coverAlt = `Portada Gaia ${currentThemeId}`;
  const coverHTML = `
    <div class="theme-cover-page" id="tema-${currentThemeId}">
      <img src="${coverImageSrc}" alt="${coverAlt}" class="cover-image" />
    </div>
  `;

  // 4.1 Mostrar TODO el contenido del tema activo en #print-booklet-container directamente
  let bookletHTML = coverHTML + themeSubtopics.map(([key, sub]) => {
    const rendered = (appObj && typeof appObj.renderSubtopicView === 'function')
      ? appObj.renderSubtopicView(key, sub)
      : '';
    return `<div class="print-subtopic-block" data-subtopic="${key}">${rendered}</div>`;
  }).join('');

  // 4.1 Incluir el mapa mental interactivo del tema (Buru-Mapa) como última página en A4 Horizontal (Landscape)
  if (appObj && typeof appObj.renderMindmapView === 'function') {
    const mindmapKey = 'mod' + currentThemeId + '_mindmap';
    const mindmapRawHtml = appObj.renderMindmapView(mindmapKey);
    if (mindmapRawHtml) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = mindmapRawHtml;

      // Ocultar y remover controles de zoom, botones interactivos o herramientas
      tempDiv.querySelectorAll('button, .zoom-controls, .map-tools').forEach(b => b.remove());

      // Extraer el contenedor del mapa mental
      const mindmapWrapper = tempDiv.querySelector('.mindmap-wrapper');
      const contentToAppend = mindmapWrapper ? mindmapWrapper.outerHTML : tempDiv.innerHTML;

      // Título superior limpio para el mapa mental
      let cleanTitle = '1. GAIA: EUROPA & EUSKADI – BURU-MAPA OROKORRA';
      if (currentThemeId === 2) cleanTitle = '2. GAIA: IZAKI BIZIDUNAK – BURU-MAPA OROKORRA';
      else if (currentThemeId === 3) cleanTitle = '3. GAIA: ENERGIA & ELEKTRIZITATEA – BURU-MAPA OROKORRA';
      else if (currentThemeId === 4) cleanTitle = '4. GAIA: ARO GARAIKIDEA – BURU-MAPA OROKORRA';
      else if (themeName) cleanTitle = `${themeName.toUpperCase()} – BURU-MAPA OROKORRA`;

      bookletHTML += `
        <div class="print-subtopic-block print-buru-mapa-page">
          <div class="print-buru-mapa buru-mapa-print-container print-landscape-page" id="print-buru-mapa">
            <div class="print-landscape-header buru-mapa-header">
              <h2 class="print-landscape-title buru-mapa-title">${cleanTitle}</h2>
            </div>
            ${contentToAppend}
          </div>
        </div>
      `;
    }
  }

  printContainer.innerHTML = bookletHTML;

  // 5. Inicializaciones de contenido para impresión
  if (currentThemeId === 1) {
    // 5.1 Cuadrícula completa de 49 países (Subtema 1.3)
    const printCountriesGrid = printContainer.querySelector('#countries-grid') || printContainer.querySelector('#country-grid') || printContainer.querySelector('.banderak-grid');
    if (printCountriesGrid && appObj && appObj.countriesData) {
      printCountriesGrid.className = 'banderak-grid estatuak-grid';
      printCountriesGrid.innerHTML = appObj.countriesData.map((c) => `
        <div class="country-card">
          <img src="images/flags/${c.code}.svg" alt="${c.name} bandera" class="bandera-img flag-img" width="26" height="17">
          <strong>${c.name}</strong>
          <span>🏛️ ${c.cap}</span>
        </div>
      `).join('');
    }

    // 5.2 Mostrar los 5 climas completos (Subtema 1.2)
    const climateBox = printContainer.querySelector('#climate-display-box');
    if (climateBox) {
      const allClimates = [
        {
          title: '🌧️ Klima Ozeanikoa / Atlantikoa (Euskal Kostaldea)',
          desc: 'Prezipitazio ugariak urte osoan zehar eta tenperatura leunak itsasoaren eraginez. Hariztiak eta baso hosto-erorkorrak dira nagusi.',
          img: 'images/klima_ozeanikoa.jpg'
        },
        {
          title: '☀️ Klima Mediterraneoa (Hegoaldeko Europa)',
          desc: 'Uda bero eta oso lehorrak, eta negu epelak. Prezipitazio gutxi izaten dira; olibondoak, pinudiak eta arteak dira ohikoak.',
          img: 'images/klima_mediterraneoa.jpg'
        },
        {
          title: '🍂 Klima Kontinentala (Erdialdeko eta Ekialdeko Europa)',
          desc: 'Itsasotik urrun dauden eremuak. Negu oso hotzak eta elurtsuak, eta uda beroak. Taiga eta belardi erraldoiak (estepak).',
          img: 'images/klima_kontinentala.jpg'
        },
        {
          title: '❄️ Klima Polarra / Artikoa (Iparraldeko Muturra)',
          desc: 'Munduko tenperaturarik baxuenak (0ºC-tik behera maiz). Lurra izoztuta egoten da (permafrost) eta tundra landaredia dago.',
          img: 'images/klima_polarra.jpg'
        },
        {
          title: '🏔️ Klima Mendikoa (Alpeak, Pirinioak, Kaukasoa)',
          desc: 'Gailur garaietan kokatua; altitudeak gora egin ahala tenperaturak behera egiten du eta elurra ugaria da neguan.',
          img: 'images/klima_mendikoa.jpg'
        }
      ];

      climateBox.className = 'print-climates-container space-y-2 mt-2';
      climateBox.innerHTML = `
        <h4 class="text-sm font-black text-gray-900 mb-1">Europako 5 Klima Nagusiak:</h4>
        <div class="grid grid-cols-1 gap-2">
          ${allClimates.map(c => `
            <div class="print-climate-card p-2 rounded-xl border border-blue-200 bg-blue-50/60 flex items-center gap-3">
              <img src="${c.img}" alt="${c.title}" class="klima-img rounded border border-blue-200" style="display: block !important; max-height: 120px !important; width: auto !important; object-fit: cover !important; margin: 4px auto !important;">
              <div class="flex-1 min-w-0">
                <strong class="text-xs font-bold text-blue-900 block leading-tight">${c.title}</strong>
                <p class="text-[9pt] text-gray-700 leading-snug m-0 mt-0.5">${c.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 5.3 Ocultar ejercicio práctico en subtema 1.6 ("Praktikatu: Zein sektoretakoa da lanbide hau?")
    const jobQuiz = printContainer.querySelector('#job-quiz-box');
    if (jobQuiz) {
      const quizContainer = jobQuiz.closest('.p-5') || jobQuiz;
      quizContainer.style.display = 'none';
    }
  }

  // 5.4 Eliminar por completo todas las secciones de vocabulario en el booklet de impresión
  printContainer.querySelectorAll('[class*="hiztegi"], .vocabulario-section, .vocab-box').forEach(el => el.remove());
  printContainer.querySelectorAll('h3, h4').forEach(h => {
    if (h.textContent && (h.textContent.includes('Hiztegi') || h.textContent.includes('hiztegi'))) {
      const parentCard = h.closest('.g-card') || h.closest('.rounded-[28px]') || (h.parentElement && h.parentElement.parentElement && h.parentElement.parentElement.parentElement);
      if (parentCard && parentCard !== printContainer) parentCard.remove();
    }
  });

  // 5.5 Eliminar bloque Demografia Eragiketak (Fitxako Ariketa) en subtema 1.7
  printContainer.querySelectorAll('[class*="demografia-eragiketak"], [class*="fitxako-ariketa"]').forEach(el => el.remove());
  printContainer.querySelectorAll('h4, div').forEach(el => {
    if (el.textContent && (el.textContent.includes('Demografia Eragiketak (Fitxako Ariketa)') || el.textContent.includes('Biztanleriaren Hazkunde Erreala = Saldo Naturala + Migrazio Saldoa'))) {
      const box = el.closest('.p-5') || el.closest('.demografia-eragiketak') || el;
      if (box && box !== printContainer) box.remove();
    }
  });

  // 5.6 Eliminar texto interactivo residual de climas ("Europako 5 Klima Nagusiak (Arakatu Klik Eginez):")
  printContainer.querySelectorAll('h3').forEach(h => {
    if (h.textContent && h.textContent.includes('Arakatu Klik Eginez')) {
      h.remove();
    }
  });

  // 5.7 Limpiar botones, controles de zoom o herramientas dentro del Buru-Mapa
  const printBuruMapa = printContainer.querySelector('#print-buru-mapa');
  if (printBuruMapa) {
    printBuruMapa.querySelectorAll('button, .zoom-controls, .map-tools').forEach(el => el.remove());
  }

  // 5.8 Tema 3: Ocultar únicamente los dos elementos concretos (caja de gráfico y simulador)
  const grafikoBox = printContainer.querySelector('#grafiko-kutxa, .trantsizio-datuak, [id*="energia-portzentajeak"]');
  if (grafikoBox) grafikoBox.remove();

  const simulatorBox = printContainer.querySelector('#circuito-interactivo, #simulador-bombillas, .simulador-container');
  if (simulatorBox) simulatorBox.remove();

  const quickChallengeBox = printContainer.querySelector('#circuit-quick-challenge');
  if (quickChallengeBox) quickChallengeBox.remove();

  const quiz3Box = printContainer.querySelector('#theme3-master-quiz');
  if (quiz3Box) quiz3Box.remove();

  // 6. Añadir el listener window.onafterprint para limpiar y volver a la vista normal
  let cleaned = false;
  function cleanupPrintContainer() {
    if (cleaned) return;
    cleaned = true;
    printContainer.innerHTML = '';
    window.onafterprint = null;
  }

  window.onafterprint = cleanupPrintContainer;
  window.addEventListener('afterprint', cleanupPrintContainer, { once: true });

  // 7. Lanzar ventana de impresión tras dar tiempo al DOM para renderizarse
  requestAnimationFrame(() => {
    setTimeout(() => {
      window.print();
    }, 100);
  });
}

// Exponer en el ámbito global
window.imprimatuTema = imprimatuTema;
if (typeof app !== 'undefined') window.app = app;
if (typeof SUBTOPICS_DATA !== 'undefined') window.SUBTOPICS_DATA = SUBTOPICS_DATA;



