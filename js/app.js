/**
 * CravePulse - Modern Food Discovery & Recommendation Engine
 * Enhanced with AI Taste Matcher Quiz, Battle Arena, Curated Food Trails,
 * Gastronomy Passport, Smart Grocery Checklist, Audio Narrator, Community Reviews & Quick Action FAB.
 */

(function () {
  'use strict';

  // Global Dataset References
  const CITIES_DATA = window.CITIES_DATA || [];
  const DISHES_DATA = window.DISHES_DATA || [];
  const CRAVING_MOODS = window.CRAVING_MOODS || [];
  const DIETARY_FILTERS = window.DIETARY_FILTERS || [];
  const FOOD_TRAILS = window.FOOD_TRAILS || [];
  const SHOWDOWN_PAIRS = window.SHOWDOWN_PAIRS || [];
  const DEFAULT_REVIEWS = window.DEFAULT_REVIEWS || [];
  const ACHIEVEMENT_BADGES = window.ACHIEVEMENT_BADGES || [];

  // --- APPLICATION STATE ---
  const state = {
    currentCityId: localStorage.getItem('cravepulse_city') || 'hyderabad',
    selectedMood: 'all',
    selectedDiet: 'all',
    searchQuery: '',
    sortBy: 'trending',
    maxCalories: 1200,
    selectedSpice: 'all',
    favorites: JSON.parse(localStorage.getItem('cravepulse_favorites') || '[]'),
    tastedDishes: JSON.parse(localStorage.getItem('cravepulse_tasted') || '[]'),
    userReviews: JSON.parse(localStorage.getItem('cravepulse_reviews') || '[]'),
    arenaVotes: JSON.parse(localStorage.getItem('cravepulse_arena_votes') || '{}'),
    mealPlan: JSON.parse(localStorage.getItem('cravepulse_meal_plan') || '{"breakfast":null,"lunch":null,"dinner":null,"snack":null}'),
    audioEnabled: localStorage.getItem('cravepulse_audio') !== 'false',
    theme: localStorage.getItem('cravepulse_theme') || 'light',
    currentLang: localStorage.getItem('cravepulse_lang') || 'en',
    activeTrailCity: 'hyderabad',
    activeModalDish: null,
    activeCookDish: null,
    currentCookStepIndex: 0,
    cookTimerSeconds: 600,
    cookTimerTotalSeconds: 600,
    cookTimerInterval: null,
    isCookTimerRunning: false,
    cookServingScale: 1,
    activePosterDish: null,
    posterTheme: 'obsidian',
    quizStep: 1,
    quizAnswers: {},
    speechSynthSpeaking: false,
    wheelDishes: [],
    wheelSpinning: false,
    wheelAngle: 0,
    autocompleteIndex: -1,
    currentAutocompleteItems: []
  };

  // --- DOM ELEMENT REFERENCES ---
  const elements = {
    // Theme
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),

    // Language Selector
    langSelectorWidget: document.getElementById('langSelectorWidget'),
    langToggleBtn: document.getElementById('langToggleBtn'),
    langDropdown: document.getElementById('langDropdown'),
    currentLangLabel: document.getElementById('currentLangLabel'),

    // Location
    locationDropdownToggle: document.getElementById('locationDropdownToggle'),
    locationDropdown: document.getElementById('locationDropdown'),
    currentLocationText: document.getElementById('currentLocationText'),
    citySearchInput: document.getElementById('citySearchInput'),
    cityListContainer: document.getElementById('cityListContainer'),
    autoDetectGpsBtn: document.getElementById('autoDetectGpsBtn'),
    heroCityName: document.getElementById('heroCityName'),
    sectionCityName: document.getElementById('sectionCityName'),
    sectionCityTagline: document.getElementById('sectionCityTagline'),
    switchCityQuickBtn: document.getElementById('switchCityQuickBtn'),

    // City Management Modal
    cityModal: document.getElementById('cityModal'),
    closeCityModalBtn: document.getElementById('closeCityModalBtn'),
    modalCitySearchInput: document.getElementById('modalCitySearchInput'),
    modalGpsBtn: document.getElementById('modalGpsBtn'),
    modalCityGrid: document.getElementById('modalCityGrid'),
    activeCityIndicator: document.getElementById('activeCityIndicator'),

    // Time & Greeting
    timeGreetingBadge: document.getElementById('timeGreetingBadge'),
    timeGreetingText: document.getElementById('timeGreetingText'),

    // Search & Autocomplete
    globalSearchInput: document.getElementById('globalSearchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    searchSubmitBtn: document.getElementById('searchSubmitBtn'),
    autocompleteBoard: document.getElementById('autocompleteBoard'),
    autocompleteList: document.getElementById('autocompleteList'),
    autocompleteSummary: document.getElementById('autocompleteSummary'),
    autocompleteSeeAllBtn: document.getElementById('autocompleteSeeAllBtn'),

    // Hero Buttons
    heroSpinWheelBtn: document.getElementById('heroSpinWheelBtn'),
    headerSpinBtn: document.getElementById('headerSpinBtn'),
    heroSurpriseMeBtn: document.getElementById('heroSurpriseMeBtn'),
    heroQuizBtn: document.getElementById('heroQuizBtn'),
    heroBattleBtn: document.getElementById('heroBattleBtn'),

    // Navigation Feature Triggers
    openQuizBtn: document.getElementById('openQuizBtn'),
    openTrailsNavBtn: document.getElementById('openTrailsNavBtn'),
    openBattleNavBtn: document.getElementById('openBattleNavBtn'),
    openPassportBtn: document.getElementById('openPassportBtn'),
    passportCountBadge: document.getElementById('passportCountBadge'),

    // Filters & Moods
    cravingMoodsList: document.getElementById('cravingMoodsList'),
    dietaryFiltersList: document.getElementById('dietaryFiltersList'),
    activeFilterFeedback: document.getElementById('activeFilterFeedback'),

    // Advanced Toolbar
    sortSelect: document.getElementById('sortSelect'),
    calorieRangeInput: document.getElementById('calorieRangeInput'),
    calorieValueDisplay: document.getElementById('calorieValueDisplay'),
    spiceFilterGroup: document.getElementById('spiceFilterGroup'),
    matchedDishesCountBadge: document.getElementById('matchedDishesCountBadge'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),

    // Grids
    localDishesGrid: document.getElementById('localDishesGrid'),
    smartSuggestionsGrid: document.getElementById('smartSuggestionsGrid'),
    globalDishesGrid: document.getElementById('globalDishesGrid'),
    smartSuggestionsTitle: document.getElementById('smartSuggestionsTitle'),
    smartSuggestionsSubtitle: document.getElementById('smartSuggestionsSubtitle'),

    // Food Trails
    trailCityTabs: document.getElementById('trailCityTabs'),
    trailShowcaseContainer: document.getElementById('trailShowcaseContainer'),

    // Dish Detail Modal
    dishDetailModal: document.getElementById('dishDetailModal'),
    closeDetailModalBtn: document.getElementById('closeDetailModalBtn'),
    modalDishImg: document.getElementById('modalDishImg'),
    modalDishBadges: document.getElementById('modalDishBadges'),
    modalDishName: document.getElementById('modalDishName'),
    modalDishNative: document.getElementById('modalDishNative'),
    modalDishRating: document.getElementById('modalDishRating'),
    modalDishOrigin: document.getElementById('modalDishOrigin'),
    modalDishCategory: document.getElementById('modalDishCategory'),
    modalDishPrice: document.getElementById('modalDishPrice'),
    modalDishSpice: document.getElementById('modalDishSpice'),
    modalDishCalories: document.getElementById('modalDishCalories'),
    modalDishDescription: document.getElementById('modalDishDescription'),
    modalDishIngredients: document.getElementById('modalDishIngredients'),
    modalDishSpots: document.getElementById('modalDishSpots'),
    modalDishRecipe: document.getElementById('modalDishRecipe'),
    modalFindNearMeBtn: document.getElementById('modalFindNearMeBtn'),
    modalSaveFavBtn: document.getElementById('modalSaveFavBtn'),
    modalWatchRecipeBtn: document.getElementById('modalWatchRecipeBtn'),
    modalAudioNarrateBtn: document.getElementById('modalAudioNarrateBtn'),
    modalAudioIcon: document.getElementById('modalAudioIcon'),
    modalAudioLabel: document.getElementById('modalAudioLabel'),
    modalMarkTastedBtn: document.getElementById('modalMarkTastedBtn'),
    modalTastedLabel: document.getElementById('modalTastedLabel'),
    modalGroceryBtn: document.getElementById('modalGroceryBtn'),
    modalCompareBtn: document.getElementById('modalCompareBtn'),

    // Delivery Links in Detail Modal
    modalSwiggyLink: document.getElementById('modalSwiggyLink'),
    modalZomatoLink: document.getElementById('modalZomatoLink'),
    modalBottomSwiggyBtn: document.getElementById('modalBottomSwiggyBtn'),
    modalBottomZomatoBtn: document.getElementById('modalBottomZomatoBtn'),
    modalDeliveryCityBadge: document.getElementById('modalDeliveryCityBadge'),
    modalDeliveryHead: document.getElementById('modalDeliveryHead'),
    modalDeliverySub: document.getElementById('modalDeliverySub'),
    modalDeliveryLiveTitle: document.getElementById('modalDeliveryLiveTitle'),

    // Dedicated Quick Delivery App Picker Modal
    deliveryModal: document.getElementById('deliveryModal'),
    closeDeliveryModalBtn: document.getElementById('closeDeliveryModalBtn'),
    deliveryModalDishImg: document.getElementById('deliveryModalDishImg'),
    deliveryModalDishBadges: document.getElementById('deliveryModalDishBadges'),
    deliveryModalDishName: document.getElementById('deliveryModalDishName'),
    deliveryModalDishSub: document.getElementById('deliveryModalDishSub'),
    quickSwiggyBtn: document.getElementById('quickSwiggyBtn'),
    quickZomatoBtn: document.getElementById('quickZomatoBtn'),
    deliveryModalLocationHint: document.getElementById('deliveryModalLocationHint'),
    deliveryModalMapsBtn: document.getElementById('deliveryModalMapsBtn'),
    deliveryModalViewDetailsBtn: document.getElementById('deliveryModalViewDetailsBtn'),

    // Reviews & Notes in Modal
    toggleAddReviewBtn: document.getElementById('toggleAddReviewBtn'),
    addReviewCard: document.getElementById('addReviewCard'),
    reviewAuthorInput: document.getElementById('reviewAuthorInput'),
    starRatingSelect: document.getElementById('starRatingSelect'),
    reviewCommentInput: document.getElementById('reviewCommentInput'),
    cancelReviewBtn: document.getElementById('cancelReviewBtn'),
    submitReviewBtn: document.getElementById('submitReviewBtn'),
    modalReviewsList: document.getElementById('modalReviewsList'),

    // AI Taste Matcher Quiz Modal
    tasteQuizModal: document.getElementById('tasteQuizModal'),
    closeQuizModalBtn: document.getElementById('closeQuizModalBtn'),
    quizQuestionBody: document.getElementById('quizQuestionBody'),
    quizResultsView: document.getElementById('quizResultsView'),
    quizProgressFill: document.getElementById('quizProgressFill'),
    quizStepIndicator: document.getElementById('quizStepIndicator'),

    // Dish Battle Arena Modal
    battleArenaModal: document.getElementById('battleArenaModal'),
    closeBattleArenaBtn: document.getElementById('closeBattleArenaBtn'),
    showdownPillsList: document.getElementById('showdownPillsList'),
    dishSelectA: document.getElementById('dishSelectA'),
    dishSelectB: document.getElementById('dishSelectB'),
    arenaComparisonBoard: document.getElementById('arenaComparisonBoard'),

    // Gastronomy Passport Modal
    passportModal: document.getElementById('passportModal'),
    closePassportModalBtn: document.getElementById('closePassportModalBtn'),
    passportLevelBadge: document.getElementById('passportLevelBadge'),
    pstatTastedCount: document.getElementById('pstatTastedCount'),
    pstatCitiesCount: document.getElementById('pstatCitiesCount'),
    pstatBadgesCount: document.getElementById('pstatBadgesCount'),
    passportStampsGrid: document.getElementById('passportStampsGrid'),
    passportBadgesGrid: document.getElementById('passportBadgesGrid'),
    passportTastedLogList: document.getElementById('passportTastedLogList'),

    // Smart Grocery List Modal
    groceryModal: document.getElementById('groceryModal'),
    closeGroceryModalBtn: document.getElementById('closeGroceryModalBtn'),
    groceryModalTitle: document.getElementById('groceryModalTitle'),
    groceryModalSubtitle: document.getElementById('groceryModalSubtitle'),
    groceryListItemsContainer: document.getElementById('groceryListItemsContainer'),
    copyGroceryListBtn: document.getElementById('copyGroceryListBtn'),
    printGroceryListBtn: document.getElementById('printGroceryListBtn'),
    drawerAllGroceryBtn: document.getElementById('drawerAllGroceryBtn'),
    drawerItemsSummary: document.getElementById('drawerItemsSummary'),

    // Wheel Modal
    wheelModal: document.getElementById('wheelModal'),
    closeWheelModalBtn: document.getElementById('closeWheelModalBtn'),
    wheelCanvas: document.getElementById('wheelCanvas'),
    executeSpinBtn: document.getElementById('executeSpinBtn'),
    spinButtonLabel: document.getElementById('spinButtonLabel'),
    wheelResultContainer: document.getElementById('wheelResultContainer'),

    // Audio Synthesizer
    audioToggleBtn: document.getElementById('audioToggleBtn'),
    audioToggleIcon: document.getElementById('audioToggleIcon'),

    // Daily Meal Planner
    openPlannerNavBtn: document.getElementById('openPlannerNavBtn'),
    plannerCountBadge: document.getElementById('plannerCountBadge'),
    heroMealPlannerBtn: document.getElementById('heroMealPlannerBtn'),
    mealPlannerModal: document.getElementById('mealPlannerModal'),
    closeMealPlannerBtn: document.getElementById('closeMealPlannerBtn'),
    plannerClearBtn: document.getElementById('plannerClearBtn'),
    plannerExportGroceryBtn: document.getElementById('plannerExportGroceryBtn'),
    plannerTotalCals: document.getElementById('plannerTotalCals'),
    plannerCalFill: document.getElementById('plannerCalFill'),
    plannerCalSub: document.getElementById('plannerCalSub'),
    plannerProtein: document.getElementById('plannerProtein'),
    plannerCarbs: document.getElementById('plannerCarbs'),
    plannerFat: document.getElementById('plannerFat'),
    plannerBudget: document.getElementById('plannerBudget'),
    slotBreakfastContent: document.getElementById('slotBreakfastContent'),
    slotLunchContent: document.getElementById('slotLunchContent'),
    slotDinnerContent: document.getElementById('slotDinnerContent'),
    slotSnackContent: document.getElementById('slotSnackContent'),

    // Mystery Blind Box
    heroBlindBoxBtn: document.getElementById('heroBlindBoxBtn'),
    blindBoxModal: document.getElementById('blindBoxModal'),
    closeBlindBoxBtn: document.getElementById('closeBlindBoxBtn'),
    confettiCanvas: document.getElementById('confettiCanvas'),
    blindBoxStage: document.getElementById('blindBoxStage'),
    blindBoxCube: document.getElementById('blindBoxCube'),
    boxLid: document.getElementById('boxLid'),
    unboxTriggerBtn: document.getElementById('unboxTriggerBtn'),
    blindBoxResultView: document.getElementById('blindBoxResultView'),

    // Chef Cook-Along Modal
    cookAlongModal: document.getElementById('cookAlongModal'),
    closeCookAlongBtn: document.getElementById('closeCookAlongBtn'),
    cookDishTitle: document.getElementById('cookDishTitle'),
    cookScale1x: document.getElementById('cookScale1x'),
    cookScale2x: document.getElementById('cookScale2x'),
    cookScale4x: document.getElementById('cookScale4x'),
    cookTimerProgressCircle: document.getElementById('cookTimerProgressCircle'),
    cookTimerDisplay: document.getElementById('cookTimerDisplay'),
    cookTimerStatus: document.getElementById('cookTimerStatus'),
    cookStepBadge: document.getElementById('cookStepBadge'),
    cookVoiceSpeakBtn: document.getElementById('cookVoiceSpeakBtn'),
    cookStepName: document.getElementById('cookStepName'),
    cookStepDesc: document.getElementById('cookStepDesc'),
    cookTimerPlayBtn: document.getElementById('cookTimerPlayBtn'),
    cookPlayLabel: document.getElementById('cookPlayLabel'),
    cookTimerResetBtn: document.getElementById('cookTimerResetBtn'),
    cookStepNextBtn: document.getElementById('cookStepNextBtn'),
    cookStepTimeline: document.getElementById('cookStepTimeline'),
    cookIngredientsGrid: document.getElementById('cookIngredientsGrid'),

    // Social Story Poster Generator Modal
    posterModal: document.getElementById('posterModal'),
    closePosterModalBtn: document.getElementById('closePosterModalBtn'),
    storyCanvas: document.getElementById('storyCanvas'),
    storyThemeSelect: document.getElementById('storyThemeSelect'),
    storyCaptionInput: document.getElementById('storyCaptionInput'),
    downloadStoryBtn: document.getElementById('downloadStoryBtn'),
    copyStoryImageBtn: document.getElementById('copyStoryImageBtn'),

    // Dish Detail Enhancements
    modalDishMacros: document.getElementById('modalDishMacros'),
    modalDishHackContainer: document.getElementById('modalDishHackContainer'),
    modalDishHack: document.getElementById('modalDishHack'),
    modalCookAlongBtn: document.getElementById('modalCookAlongBtn'),
    modalCookAlongBtn2: document.getElementById('modalCookAlongBtn2'),
    modalStoryPosterBtn: document.getElementById('modalStoryPosterBtn'),
    modalAddToPlannerBtn: document.getElementById('modalAddToPlannerBtn'),
    modalRadarSection: document.getElementById('modalRadarSection'),
    modalRadarList: document.getElementById('modalRadarList'),

    // Favorites Drawer
    openFavoritesBtn: document.getElementById('openFavoritesBtn'),
    closeFavoritesBtn: document.getElementById('closeFavoritesBtn'),
    favoritesDrawerBackdrop: document.getElementById('favoritesDrawerBackdrop'),
    favoritesListContainer: document.getElementById('favoritesListContainer'),
    favCountBadge: document.getElementById('favCountBadge'),

    // Toasts
    toastContainer: document.getElementById('toastContainer')
  };

  // --- TRANSLATION HELPER & MULTILINGUAL ENGINE (Telugu, Hindi, English) ---
  function t(key, params = {}) {
    const translations = window.TRANSLATIONS || {};
    const langDict = translations[state.currentLang] || translations['en'] || {};
    let text = langDict[key] !== undefined ? langDict[key] : ((translations['en'] && translations['en'][key] !== undefined) ? translations['en'][key] : key);
    if (params && typeof params === 'object') {
      Object.keys(params).forEach(k => {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), params[k]);
      });
    }
    return text;
  }

  function applyLanguage(lang, notify = true) {
    if (!['en', 'te', 'hi'].includes(lang)) lang = 'en';
    state.currentLang = lang;
    localStorage.setItem('cravepulse_lang', lang);
    document.documentElement.lang = lang;

    const langNames = { en: 'English', te: 'తెలుగు', hi: 'हिन्दी' };
    if (elements.currentLangLabel) {
      elements.currentLangLabel.textContent = langNames[lang] || 'English';
    }

    document.querySelectorAll('.lang-option-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = t(key);
      if (text) el.textContent = text;
    });

    // Update all elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = t(key);
      if (text) el.placeholder = text;
    });

    // Update search inputs
    if (elements.globalSearchInput) {
      elements.globalSearchInput.placeholder = t('search_placeholder');
    }

    // Dynamic UI updates
    renderTimeOfDayGreeting();
    renderMoodFilterChips();
    renderDietFilterPills();
    updateLocationUI();
    renderAllGrids();
    if (typeof renderFoodTrails === 'function') {
      renderFoodTrails(state.currentCityId);
    }
    if (typeof updatePassportUI === 'function') {
      updatePassportUI();
    }

    if (elements.langDropdown) {
      elements.langDropdown.classList.remove('active');
    }

    if (notify) {
      const toastMsg = lang === 'te' ? 'భాష విజయవంతంగా తెలుగుకు మార్చబడింది' : (lang === 'hi' ? 'भाषा सफलतापूर्वक हिन्दी में बदली गई' : 'Language set to English');
      showToast(toastMsg);
      playSound('chime');
    }
  }

  // --- INITIALIZATION ---
  function init() {
    applyTheme(state.theme);
    initAudioUI();
    applyLanguage(state.currentLang, false);
    renderCitySelectorList();
    updateLocationUI();
    renderFoodTrails(state.currentCityId);
    renderAllGrids();
    updateFavoritesBadge();
    updatePassportUI();
    updateMealPlannerBadge();
    setupBattleArenaSelectors();
    setupEventListeners();
  }

  // --- WEB AUDIO FX SYNTHESIZER ---
  let audioCtx = null;

  function initAudioUI() {
    if (elements.audioToggleBtn) {
      updateAudioToggleIcon();
      elements.audioToggleBtn.addEventListener('click', () => {
        state.audioEnabled = !state.audioEnabled;
        localStorage.setItem('cravepulse_audio', state.audioEnabled);
        updateAudioToggleIcon();
        if (state.audioEnabled) {
          playSound('chime');
          showToast('Sound Effects Enabled 🔊');
        } else {
          showToast('Sound Effects Muted 🔇');
        }
      });
    }
  }

  function updateAudioToggleIcon() {
    if (!elements.audioToggleIcon) return;
    if (state.audioEnabled) {
      elements.audioToggleIcon.setAttribute('data-lucide', 'volume-2');
      elements.audioToggleIcon.style.color = 'var(--emerald)';
    } else {
      elements.audioToggleIcon.setAttribute('data-lucide', 'volume-x');
      elements.audioToggleIcon.style.color = 'var(--text-muted)';
    }
    refreshLucideIcons();
  }

  function getAudioContext() {
    if (!audioCtx && typeof window.AudioContext !== 'undefined') {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type = 'click') {
    if (!state.audioEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'click' || type === 'pop') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(540, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.09);
      } else if (type === 'chime' || type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.36);
      } else if (type === 'wheel') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(700, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {
      // Audio synth optional fallback
    }
  }

  // --- THEME SWITCHER ---
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cravepulse_theme', theme);
    if (theme === 'light') {
      elements.themeIcon.setAttribute('data-lucide', 'moon');
    } else {
      elements.themeIcon.setAttribute('data-lucide', 'sun');
    }
    refreshLucideIcons();
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme} theme`);
  }

  // --- TIME OF DAY LOGIC ---
  function getTimePeriod() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 11) {
      return { period: 'breakfast', key: 'good_morning', label: 'Good Morning', sub: 'Kickstart with famous breakfast bites' };
    } else if (hour >= 11 && hour < 16) {
      return { period: 'lunch', key: 'good_afternoon', label: 'Good Afternoon', sub: 'Legendary lunch favorites near you' };
    } else if (hour >= 16 && hour < 19) {
      return { period: 'snack', key: 'golden_hour', label: 'Golden Hour', sub: 'Aromatic high-tea & street snack cravings' };
    } else if (hour >= 19 && hour < 23) {
      return { period: 'dinner', key: 'good_evening', label: 'Good Evening', sub: 'Hearty master plates & dinner delights' };
    } else {
      return { period: 'late-night', key: 'late_night', label: 'Midnight Cravings', sub: 'Midnight cravings & night market bites' };
    }
  }

  function renderTimeOfDayGreeting() {
    const info = getTimePeriod();
    if (elements.timeGreetingText) {
      elements.timeGreetingText.textContent = t(info.key) || `${info.label} • ${info.sub}`;
    }
  }

  // --- LOCATION MANAGEMENT ---
  function getCurrentCity() {
    return CITIES_DATA.find(c => c.id === state.currentCityId) || CITIES_DATA[0];
  }

  function setCity(cityId) {
    const found = CITIES_DATA.find(c => c.id === cityId);
    if (found) {
      state.currentCityId = cityId;
      localStorage.setItem('cravepulse_city', cityId);
      updateLocationUI();
      renderFoodTrails(cityId);
      renderAllGrids();
      showToast(`Location set to ${found.name}, ${found.country}`);
    }
  }

  function getFamousDishAtCity(cityId = state.currentCityId) {
    let cityDishes = DISHES_DATA.filter(d => d.cityId === cityId);
    
    // If diet filter is active, respect it if dishes match
    if (state.selectedDiet && state.selectedDiet !== 'all') {
      const dietFiltered = cityDishes.filter(d => matchesFilter(d, state.selectedDiet, 'all', ''));
      if (dietFiltered.length > 0) {
        cityDishes = dietFiltered;
      }
    }

    if (cityDishes.length === 0) {
      cityDishes = DISHES_DATA.filter(d => d.cityId === cityId);
    }

    if (cityDishes.length === 0) {
      return DISHES_DATA[0];
    }

    // Sort by popularity, rating, and legend status
    cityDishes.sort((a, b) => {
      const scoreA = (a.trendingScore || 80) + (a.isGlobalIcon ? 20 : 0) + (a.isLocalLegend ? 15 : 0) + (a.rating * 10);
      const scoreB = (b.trendingScore || 80) + (b.isGlobalIcon ? 20 : 0) + (b.isLocalLegend ? 15 : 0) + (b.rating * 10);
      return scoreB - scoreA;
    });

    return cityDishes[0];
  }

  function updateHeroShowcaseCard() {
    const city = getCurrentCity();
    const famousDish = getFamousDishAtCity(city.id);
    if (!famousDish) return;

    const showcaseImg = document.getElementById('heroShowcaseImg');
    const showcaseTitle = document.getElementById('heroShowcaseTitle');
    const showcaseDesc = document.getElementById('heroShowcaseDesc');
    const showcasePrice = document.querySelector('.showcase-price-tag');
    const showcaseRating = document.querySelector('.showcase-rating');
    const showcaseMetaRow = document.querySelector('.showcase-meta-row');
    const liveTag = document.querySelector('.showcase-live-tag');

    if (showcaseImg) {
      showcaseImg.src = famousDish.image;
      showcaseImg.alt = famousDish.name;
    }
    if (showcaseTitle) {
      showcaseTitle.textContent = famousDish.name;
    }
    if (showcaseDesc) {
      showcaseDesc.textContent = famousDish.famousFor || famousDish.description;
    }
    if (showcasePrice) {
      showcasePrice.innerHTML = `₹${famousDish.price} <small>avg plate</small>`;
    }
    if (showcaseRating) {
      showcaseRating.innerHTML = `<i data-lucide="star" style="width:14px;height:14px;fill:var(--amber);color:var(--amber);"></i> ${famousDish.rating}`;
    }
    if (liveTag) {
      liveTag.innerHTML = `<span class="badge-pulse-dot"></span> TOP DISH IN ${city.name.toUpperCase()}`;
    }

    const isVeg = famousDish.diet && (famousDish.diet.includes('veg') || famousDish.diet.includes('vegan') || famousDish.category === 'Dessert');

    if (showcaseMetaRow) {
      showcaseMetaRow.innerHTML = `
        <span class="badge ${isVeg ? 'badge-diet-veg' : 'badge-diet-nonveg'}">
          <span class="fssai-symbol ${isVeg ? 'veg' : 'non-veg'}"><span class="fssai-dot"></span></span>
          ${isVeg ? 'Pure Veg 🟢' : 'Non-Veg 🔴'}
        </span>
        <span class="badge badge-location"><i data-lucide="map-pin" style="width:12px;height:12px;"></i> ${city.name} Famous</span>
        <span class="showcase-cals">${famousDish.calories} kcal</span>
      `;
    }

    const quickViewBtn = document.getElementById('heroShowcaseQuickViewBtn');
    if (quickViewBtn) {
      quickViewBtn.onclick = (e) => {
        e.stopPropagation();
        openDishDetailModal(famousDish);
      };
    }

    const heroFeaturedCard = document.getElementById('heroFeaturedCard');
    if (heroFeaturedCard) {
      heroFeaturedCard.onclick = () => {
        openDishDetailModal(famousDish);
      };
    }

    refreshLucideIcons();
  }

  function updateLocationUI() {
    const city = getCurrentCity();
    elements.currentLocationText.innerHTML = `${city.name}, ${city.country} <i data-lucide="chevron-down" style="width:14px;height:14px;"></i>`;
    elements.heroCityName.textContent = city.name;
    elements.sectionCityName.textContent = city.name;
    elements.sectionCityTagline.textContent = city.tagline || 'Must-try heritage delicacies and local street food favorites.';
    if (elements.activeCityIndicator) {
      elements.activeCityIndicator.textContent = `Currently: ${city.name}, ${city.country}`;
    }
    if (elements.globalSearchInput) {
      elements.globalSearchInput.placeholder = t('search_placeholder') || 'Search any dish, cuisine, ingredient or city (e.g., Biryani, Ramen, Pizza, Tacos, Dosa)...';
    }
    updateHeroShowcaseCard();
    renderCitySelectorList();
    renderCityModalGrid();
    refreshLucideIcons();
  }

  function renderCitySelectorList(query = '') {
    const list = elements.cityListContainer;
    list.innerHTML = '';
    const filtered = CITIES_DATA.filter(c => {
      const q = query.toLowerCase().trim();
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q) ||
        (c.popularKeywords && c.popularKeywords.some(k => k.includes(q)))
      );
    });

    if (filtered.length === 0) {
      list.innerHTML = `<div style="padding:10px; font-size:0.85rem; color:var(--text-muted); text-align:center;">No cities found</div>`;
      return;
    }

    filtered.forEach(city => {
      const opt = document.createElement('div');
      opt.className = `location-option ${city.id === state.currentCityId ? 'selected' : ''}`;
      opt.innerHTML = `
        <span>${city.name}</span>
        <span class="country">${city.country}</span>
      `;
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        setCity(city.id);
        elements.locationDropdown.classList.remove('active');
      });
      list.appendChild(opt);
    });
  }

  function renderCityModalGrid(query = '') {
    const grid = elements.modalCityGrid;
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = CITIES_DATA.filter(c => {
      const q = query.toLowerCase().trim();
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q) ||
        (c.popularKeywords && c.popularKeywords.some(k => k.includes(q)))
      );
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column:1/-1; padding:30px; text-align:center; color:var(--text-muted);">No matching food hubs found.</div>`;
      return;
    }

    filtered.forEach(city => {
      const cityDishes = DISHES_DATA.filter(d => d.cityId === city.id).map(d => d.name).slice(0, 2).join(' & ');

      const card = document.createElement('div');
      card.className = `city-card-item ${city.id === state.currentCityId ? 'active' : ''}`;
      card.innerHTML = `
        <div class="city-card-name">
          <span>${city.name}</span>
          ${city.id === state.currentCityId ? '<i data-lucide="check" style="width:16px;height:16px;color:var(--primary);"></i>' : ''}
        </div>
        <div class="city-card-country">${city.country}</div>
        <div class="city-card-specialty"><i data-lucide="sparkles" style="width:12px;height:12px;display:inline;"></i> ${cityDishes || 'Iconic Delicacies'}</div>
      `;

      card.addEventListener('click', () => {
        setCity(city.id);
        elements.cityModal.classList.remove('active');
      });

      grid.appendChild(card);
    });

    refreshLucideIcons();
  }

  function openCityModal() {
    renderCityModalGrid();
    elements.cityModal.classList.add('active');
    elements.modalCitySearchInput.value = '';
    elements.modalCitySearchInput.focus();
  }

  // Geolocation auto-detection
  function detectUserLocation() {
    if (!navigator.geolocation) {
      showToast('Geolocation is not supported by your browser');
      return;
    }

    showToast('Detecting your location via GPS...');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        let closestCity = CITIES_DATA[0];
        let minDistance = Infinity;

        CITIES_DATA.forEach(city => {
          const dLat = (city.coords.lat - latitude);
          const dLng = (city.coords.lng - longitude);
          const dist = Math.sqrt(dLat * dLat + dLng * dLng);
          if (dist < minDistance) {
            minDistance = dist;
            closestCity = city;
          }
        });

        setCity(closestCity.id);
        elements.locationDropdown.classList.remove('active');
        if (elements.cityModal) elements.cityModal.classList.remove('active');
        showToast(`📍 Set to closest food hub: ${closestCity.name}!`);
      },
      (err) => {
        console.warn('Geolocation error:', err);
        showToast('Unable to fetch GPS. Defaulting to selected culinary city.');
      },
      { timeout: 7000 }
    );
  }

  // --- AUTOCOMPLETE ENGINE & SEARCH BOARD ---
  function getAutocompleteSuggestions(query) {
    if (!query || !query.trim()) return [];
    const q = query.toLowerCase().trim();
    const suggestions = [];

    // 1. Matching Dishes - Search across ANY food in the entire culinary database
    DISHES_DATA.forEach(dish => {
      // Respect active diet filter if applied (Veg / Non-Veg)
      if (state.selectedDiet && state.selectedDiet !== 'all') {
        if (!matchesFilter(dish, state.selectedDiet, 'all', '')) return;
      }

      const matchName = dish.name.toLowerCase().includes(q);
      const matchNative = dish.nativeName && dish.nativeName.toLowerCase().includes(q);
      const matchTaste = dish.tasteProfile && dish.tasteProfile.some(t => t.toLowerCase().includes(q));
      const matchIngr = dish.ingredients && dish.ingredients.some(i => i.toLowerCase().includes(q));
      const matchCategory = dish.category && dish.category.toLowerCase().includes(q);
      const matchFamous = dish.famousFor && dish.famousFor.toLowerCase().includes(q);
      const matchCity = dish.cityName && dish.cityName.toLowerCase().includes(q);

      if (matchName || matchNative || matchTaste || matchIngr || matchCategory || matchFamous || matchCity) {
        const isVeg = dish.diet && (dish.diet.includes('veg') || dish.diet.includes('vegan') || dish.category === 'Dessert');
        const isLocal = dish.cityId === state.currentCityId;
        suggestions.push({
          type: 'dish',
          title: dish.name,
          sub: `${isLocal ? '📍 In Your City • ' : ''}${dish.cityName}, ${dish.country} • ${dish.category} • ₹${dish.price}`,
          tag: isVeg ? '🟢 Pure Veg' : '🔴 Non-Veg',
          image: dish.image,
          icon: 'utensils',
          dishRef: dish,
          isLocal: isLocal,
          targetQuery: dish.name
        });
      }
    });

    // Prioritize local dishes at the top if they match
    suggestions.sort((a, b) => (b.isLocal ? 1 : 0) - (a.isLocal ? 1 : 0));

    // 2. Matching Cities & Food Capitals
    CITIES_DATA.forEach(city => {
      if (city.name.toLowerCase().includes(q) || city.country.toLowerCase().includes(q)) {
        suggestions.push({
          type: 'city',
          title: `Explore food capital: ${city.name}`,
          sub: `${city.country} • ${city.tagline || 'Famous Regional Cuisine'}`,
          tag: 'City Hub',
          icon: 'map-pin',
          cityRef: city,
          targetQuery: city.name
        });
      }
    });

    // 3. Matching Cravings / Moods
    CRAVING_MOODS.forEach(mood => {
      if (mood.id !== 'all' && (mood.label.toLowerCase().includes(q) || mood.description.toLowerCase().includes(q))) {
        suggestions.push({
          type: 'mood',
          title: `${mood.label}`,
          sub: mood.description,
          tag: 'Craving Filter',
          icon: 'flame',
          moodRef: mood,
          targetQuery: mood.label.replace(/^[^\w]+/, '')
        });
      }
    });

    return suggestions.slice(0, 8);
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="autocomplete-match-highlight">$1</span>');
  }

  function renderAutocomplete(query) {
    const list = elements.autocompleteList;
    list.innerHTML = '';
    state.autocompleteIndex = -1;

    const headerTitle = elements.autocompleteBoard ? elements.autocompleteBoard.querySelector('.autocomplete-header span:first-child') : null;
    if (headerTitle) {
      headerTitle.textContent = `🔍 Smart Flavor & Food Suggestions`;
    }

    if (!query || !query.trim()) {
      elements.autocompleteBoard.classList.remove('active');
      elements.searchClearBtn.classList.remove('active');
      return;
    }

    elements.searchClearBtn.classList.add('active');
    const items = getAutocompleteSuggestions(query);
    state.currentAutocompleteItems = items;

    if (items.length === 0) {
      list.innerHTML = `
        <div style="padding:16px; text-align:center; color:var(--text-muted); font-size:0.85rem;">
          No matching dishes found for "<strong>${query}</strong>".
          <div style="margin-top:6px; font-size:0.78rem; color:var(--emerald-dark);">💡 Try searching for Biryani, Pizza, Ramen, Tacos, Dosa, Burger, or Pasta!</div>
        </div>
      `;
      elements.autocompleteSummary.textContent = `No dishes found for "${query}"`;
      elements.autocompleteBoard.classList.add('active');
      return;
    }

    elements.autocompleteSummary.textContent = `${items.length} delicacy match${items.length > 1 ? 'es' : ''} found for "${query}"`;

    items.forEach((item, index) => {
      const row = document.createElement('div');
      row.className = 'autocomplete-item';
      row.setAttribute('data-index', index);

      let mediaHtml = '';
      if (item.image) {
        mediaHtml = `<img src="${item.image}" alt="" class="autocomplete-img" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&auto=format&fit=crop&q=80'">`;
      } else {
        mediaHtml = `<div class="autocomplete-icon-box"><i data-lucide="${item.icon || 'utensils'}"></i></div>`;
      }

      row.innerHTML = `
        ${mediaHtml}
        <div class="autocomplete-text">
          <div class="autocomplete-title">${highlightMatch(item.title, query)}</div>
          <div class="autocomplete-sub">${highlightMatch(item.sub, query)}</div>
        </div>
        <span class="autocomplete-tag">${item.tag}</span>
      `;

      row.addEventListener('click', () => {
        selectAutocompleteItem(item);
      });

      list.appendChild(row);
    });

    elements.autocompleteBoard.classList.add('active');
    refreshLucideIcons();
  }

  function selectAutocompleteItem(item) {
    elements.autocompleteBoard.classList.remove('active');

    if (item.type === 'dish' && item.dishRef) {
      openDishDetailModal(item.dishRef);
      elements.globalSearchInput.value = item.dishRef.name;
      state.searchQuery = item.dishRef.name;
    } else if (item.type === 'city' && item.cityRef) {
      setCity(item.cityRef.id);
      elements.globalSearchInput.value = '';
      state.searchQuery = '';
      document.getElementById('localSection').scrollIntoView({ behavior: 'smooth' });
    } else if (item.type === 'mood' && item.moodRef) {
      state.selectedMood = item.moodRef.id;
      elements.globalSearchInput.value = '';
      state.searchQuery = '';
      renderMoodFilterChips();
      updateActiveFilterFeedback();
      renderAllGrids();
      document.getElementById('smartSuggestionsSection').scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleAutocompleteKeydown(e) {
    if (!elements.autocompleteBoard.classList.contains('active')) return;
    const items = state.currentAutocompleteItems;
    if (items.length === 0) return;

    const rowElements = elements.autocompleteList.querySelectorAll('.autocomplete-item');

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      state.autocompleteIndex = (state.autocompleteIndex + 1) % items.length;
      updateAutocompleteHighlight(rowElements);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      state.autocompleteIndex = (state.autocompleteIndex - 1 + items.length) % items.length;
      updateAutocompleteHighlight(rowElements);
    } else if (e.key === 'Enter') {
      if (state.autocompleteIndex >= 0 && state.autocompleteIndex < items.length) {
        e.preventDefault();
        selectAutocompleteItem(items[state.autocompleteIndex]);
      } else {
        elements.autocompleteBoard.classList.remove('active');
      }
    } else if (e.key === 'Escape') {
      elements.autocompleteBoard.classList.remove('active');
    }
  }

  function updateAutocompleteHighlight(rowElements) {
    rowElements.forEach((el, i) => {
      if (i === state.autocompleteIndex) {
        el.classList.add('selected');
        el.scrollIntoView({ block: 'nearest' });
      } else {
        el.classList.remove('selected');
      }
    });
  }

  // --- FILTER CONTROLS ---
  function renderMoodFilterChips() {
    const container = elements.cravingMoodsList;
    container.innerHTML = '';
    CRAVING_MOODS.forEach(mood => {
      const chip = document.createElement('div');
      chip.className = `mood-chip ${mood.id === state.selectedMood ? 'active' : ''}`;
      chip.textContent = mood.label;
      chip.addEventListener('click', () => {
        state.selectedMood = mood.id;
        renderMoodFilterChips();
        updateActiveFilterFeedback();
        renderAllGrids();
      });
      container.appendChild(chip);
    });
  }

  function setDietFilter(dietId) {
    state.selectedDiet = dietId;
    updateDietToggleUI();
    renderDietFilterPills();
    updateHeroShowcaseCard();
    updateActiveFilterFeedback();
    renderAllGrids();
    playSound('click');
  }

  function updateDietToggleUI() {
    document.querySelectorAll('.veg-toggle-btn').forEach(btn => {
      const diet = btn.getAttribute('data-diet');
      if (diet === state.selectedDiet) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.querySelectorAll('.toolbar-diet-btn').forEach(btn => {
      const diet = btn.getAttribute('data-diet');
      if (diet === state.selectedDiet) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function renderDietFilterPills() {
    const container = elements.dietaryFiltersList;
    if (!container) return;
    container.innerHTML = '';
    DIETARY_FILTERS.forEach(diet => {
      const pill = document.createElement('button');
      pill.className = `diet-pill ${diet.id === state.selectedDiet ? 'active' : ''}`;
      const translationKey = diet.id === 'all' ? 'all_diets' : diet.id.replace('-', '_');
      pill.textContent = t(translationKey) || diet.label;
      pill.addEventListener('click', () => {
        setDietFilter(diet.id);
      });
      container.appendChild(pill);
    });
    updateDietToggleUI();
  }

  function updateActiveFilterFeedback() {
    const activeMood = CRAVING_MOODS.find(m => m.id === state.selectedMood) || CRAVING_MOODS[0];
    const activeDiet = DIETARY_FILTERS.find(d => d.id === state.selectedDiet) || DIETARY_FILTERS[0];
    let feedback = `Showing: ${activeMood.label}`;
    if (state.selectedDiet !== 'all') {
      feedback += ` + ${activeDiet.label}`;
    }
    if (state.selectedSpice !== 'all') {
      feedback += ` + Spice: Level ${state.selectedSpice}`;
    }
    if (state.maxCalories < 1200) {
      feedback += ` + ≤ ${state.maxCalories} kcal`;
    }
    if (state.searchQuery) {
      feedback += ` matching "${state.searchQuery}"`;
    }
    elements.activeFilterFeedback.textContent = feedback;
  }

  // --- DISH FILTERING & SORTING ENGINE ---
  function matchesFilter(dish, filterDiet = state.selectedDiet, filterMood = state.selectedMood, query = state.searchQuery) {
    // Diet filter (Veg / Non-Veg / Special diets)
    if (filterDiet && filterDiet !== 'all') {
      if (filterDiet === 'veg') {
        const isVeg = dish.diet && (dish.diet.includes('veg') || dish.diet.includes('vegan') || dish.category === 'Dessert');
        if (!isVeg) return false;
      } else if (filterDiet === 'non-veg') {
        const isNonVeg = dish.diet && (dish.diet.includes('non-veg') || dish.diet.includes('meat') || dish.diet.includes('chicken') || dish.diet.includes('seafood'));
        if (!isNonVeg) return false;
      } else {
        if (!dish.diet || !dish.diet.includes(filterDiet)) {
          return false;
        }
      }
    }

    // Mood filter
    if (filterMood !== 'all') {
      if (!dish.moodTags || !dish.moodTags.includes(filterMood)) {
        return false;
      }
    }

    // Spice filter
    if (state.selectedSpice !== 'all') {
      const targetSpice = parseInt(state.selectedSpice, 10);
      if (dish.spiceLevel !== targetSpice) {
        return false;
      }
    }

    // Max Calories filter
    if (state.maxCalories < 1200) {
      if (dish.calories && dish.calories > state.maxCalories) {
        return false;
      }
    }

    // Search query - matches ANY food across full library
    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      const matchName = dish.name.toLowerCase().includes(q);
      const matchNative = dish.nativeName && dish.nativeName.toLowerCase().includes(q);
      const matchCity = dish.cityName && dish.cityName.toLowerCase().includes(q);
      const matchCountry = dish.country && dish.country.toLowerCase().includes(q);
      const matchDesc = dish.description && dish.description.toLowerCase().includes(q);
      const matchFamous = dish.famousFor && dish.famousFor.toLowerCase().includes(q);
      const matchTaste = dish.tasteProfile && dish.tasteProfile.some(t => t.toLowerCase().includes(q));
      const matchIngr = dish.ingredients && dish.ingredients.some(i => i.toLowerCase().includes(q));
      const matchCategory = dish.category && dish.category.toLowerCase().includes(q);
      const matchMood = dish.moodTags && dish.moodTags.some(m => m.toLowerCase().includes(q));

      if (!matchName && !matchNative && !matchCity && !matchCountry && !matchDesc && !matchFamous && !matchTaste && !matchIngr && !matchCategory && !matchMood) {
        return false;
      }
    }

    return true;
  }

  function sortDishes(dishes) {
    const list = [...dishes];
    switch (state.sortBy) {
      case 'rating':
        return list.sort((a, b) => b.rating - a.rating);
      case 'price_asc':
        return list.sort((a, b) => (a.price || 0) - (b.price || 0));
      case 'price_desc':
        return list.sort((a, b) => (b.price || 0) - (a.price || 0));
      case 'calories_asc':
        return list.sort((a, b) => (a.calories || 0) - (b.calories || 0));
      case 'prep_asc':
        return list.sort((a, b) => {
          const tA = parseInt(a.prepTime, 10) || 30;
          const tB = parseInt(b.prepTime, 10) || 30;
          return tA - tB;
        });
      case 'trending':
      default:
        return list.sort((a, b) => (b.trendingScore || 80) - (a.trendingScore || 80));
    }
  }

  // --- CARD GENERATION ---
  function createDishCard(dish) {
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.setAttribute('data-id', dish.id);

    const isFav = state.favorites.includes(dish.id);
    const isTasted = state.tastedDishes.includes(dish.id);
    const isVeg = dish.diet && (dish.diet.includes('veg') || dish.diet.includes('vegan') || dish.category === 'Dessert');

    // Spice flames
    let spiceHtml = '';
    for (let i = 1; i <= 4; i++) {
      spiceHtml += `<span class="spice-flame ${i <= dish.spiceLevel ? 'active' : ''}">🔥</span>`;
    }

    // Badges & FSSAI Diet Indicators
    let badgeHtml = '';
    if (isVeg) {
      badgeHtml += `<span class="badge badge-diet-veg"><span class="fssai-symbol veg"><span class="fssai-dot"></span></span> ${t('veg')}</span>`;
    } else {
      badgeHtml += `<span class="badge badge-diet-nonveg"><span class="fssai-symbol non-veg"><span class="fssai-dot"></span></span> ${t('non_veg')}</span>`;
    }

    if (dish.cityId === state.currentCityId) {
      badgeHtml += `<span class="badge badge-location"><i data-lucide="map-pin" style="width:12px;height:12px;"></i> ${dish.cityName} Special</span>`;
    } else if (dish.isGlobalIcon) {
      badgeHtml += `<span class="badge badge-global"><i data-lucide="award" style="width:12px;height:12px;"></i> Global Icon</span>`;
    }
    if (dish.trendingScore >= 95) {
      badgeHtml += `<span class="badge badge-trending"><i data-lucide="trending-up" style="width:12px;height:12px;"></i> Hot</span>`;
    }
    if (isTasted) {
      badgeHtml += `<span class="badge" style="background:var(--emerald); color:white;"><i data-lucide="check" style="width:12px;height:12px;"></i> ${t('tasted_badge')}</span>`;
    }

    // Diet tag (Veg / Non-Veg)
    const dietTagHtml = isVeg
      ? `<span class="taste-tag tag-diet-veg"><span class="fssai-symbol veg"><span class="fssai-dot"></span></span> ${t('veg')} 🟢</span>`
      : `<span class="taste-tag tag-diet-nonveg"><span class="fssai-symbol non-veg"><span class="fssai-dot"></span></span> ${t('non_veg')} 🔴</span>`;

    // Taste tags
    const tasteTagsHtml = dietTagHtml + dish.tasteProfile
      .slice(0, 3)
      .map(t => `<span class="taste-tag">${t}</span>`)
      .join('');

    card.innerHTML = `
      <div class="dish-media">
        <img src="${dish.image}" alt="${dish.name}" class="dish-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&auto=format&fit=crop&q=80'">
        <div class="dish-badges">
          ${badgeHtml}
        </div>
        <button class="btn-bookmark ${isFav ? 'saved' : ''}" data-fav-id="${dish.id}" title="${isFav ? 'Remove from Saved' : 'Save Dish'}">
          <i data-lucide="heart" style="width:18px;height:18px;${isFav ? 'fill:white;' : ''}"></i>
        </button>
      </div>

      <div class="dish-body">
        <div class="dish-header">
          <div>
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="fssai-symbol ${isVeg ? 'veg' : 'non-veg'}" title="${isVeg ? 'Vegetarian' : 'Non-Vegetarian'}"><span class="fssai-dot"></span></span>
              <h3 class="dish-title">${dish.name}</h3>
            </div>
            ${dish.nativeName ? `<div class="dish-native">${dish.nativeName}</div>` : ''}
          </div>
          <div class="dish-rating">
            <i data-lucide="star" style="width:14px;height:14px;fill:#f59e0b;"></i>
            ${dish.rating}
          </div>
        </div>

        <div class="dish-meta-row">
          <span class="meta-item"><i data-lucide="map-pin" style="width:13px;height:13px;"></i> ${dish.cityName}, ${dish.country}</span>
          <span class="meta-item"><i data-lucide="clock" style="width:13px;height:13px;"></i> ${dish.category}</span>
          <div class="spice-meter" title="Spice Level: ${dish.spiceLevel}/4">
            ${spiceHtml}
          </div>
        </div>

        <p class="dish-description">${dish.description}</p>

        <div class="taste-tags">
          ${tasteTagsHtml}
        </div>

        <div class="dish-footer">
          <span class="dish-price-tier">₹${dish.price} • ${dish.priceTier}</span>
          <div class="dish-footer-actions">
            <button class="btn-delivery-quick" data-open-delivery="${dish.id}" title="Order on Swiggy or Zomato">
              <i data-lucide="bike" style="width:13px;height:13px;"></i>
              <span>${t('order_quick_btn') || 'Order'}</span>
            </button>
            <button class="btn btn-primary" style="padding:6px 14px; font-size:0.85rem;" data-open-detail="${dish.id}">
              <span>${t('view_dish')}</span>
              <i data-lucide="arrow-right" style="width:14px;height:14px;"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    // Event listeners
    const favBtn = card.querySelector('.btn-bookmark, .dish-save-btn');
    if (favBtn) {
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(dish.id);
      });
    }

    const deliveryBtn = card.querySelector('[data-open-delivery]');
    if (deliveryBtn) {
      deliveryBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openDeliveryModal(dish);
      });
    }

    const openBtns = card.querySelectorAll('[data-open-detail], .dish-media, .dish-title');
    if (openBtns && openBtns.forEach) {
      openBtns.forEach(btn => {
        btn.addEventListener('click', () => openDishDetailModal(dish));
      });
    }

    return card;
  }

  // --- RENDER ALL GRIDS ---
  function renderAllGrids() {
    renderLocalDishes();
    renderSmartSuggestions();
    renderGlobalDishes();
    updateMatchedDishesCount();
    refreshLucideIcons();
  }

  function updateMatchedDishesCount() {
    const totalMatching = DISHES_DATA.filter(d => matchesFilter(d)).length;
    if (elements.matchedDishesCountBadge) {
      elements.matchedDishesCountBadge.textContent = `${totalMatching} Delicac${totalMatching === 1 ? 'y' : 'ies'} Found`;
    }
  }

  // 1. Local Dishes
  function renderLocalDishes() {
    const grid = elements.localDishesGrid;
    grid.innerHTML = '';

    const localDishes = sortDishes(DISHES_DATA.filter(d => d.cityId === state.currentCityId && matchesFilter(d)));

    if (localDishes.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🍲</div>
          <h3>No matching dishes found in ${getCurrentCity().name}</h3>
          <p style="color:var(--text-secondary); margin-top:6px;">Try adjusting your calorie, spice, or veg/non-veg filters.</p>
        </div>
      `;
      return;
    }

    localDishes.forEach(dish => {
      grid.appendChild(createDishCard(dish));
    });
  }

  // 2. Smart Personalized Suggestions
  function renderSmartSuggestions() {
    const grid = elements.smartSuggestionsGrid;
    grid.innerHTML = '';

    const timeInfo = getTimePeriod();
    elements.smartSuggestionsTitle.textContent = `Smart Suggestions for ${timeInfo.label}`;
    elements.smartSuggestionsSubtitle.textContent = `Tailored for ${timeInfo.period.toUpperCase()} cravings & your active filters.`;

    const scoredDishes = DISHES_DATA.filter(d => matchesFilter(d)).map(dish => {
      let score = 0;
      if (dish.mealTimes && dish.mealTimes.includes(timeInfo.period)) {
        score += 30;
      }
      if (dish.cityId === state.currentCityId) {
        score += 20;
      }
      if (state.selectedMood !== 'all' && dish.moodTags.includes(state.selectedMood)) {
        score += 25;
      }
      score += (dish.trendingScore || 80) * 0.2;
      return { dish, score };
    });

    scoredDishes.sort((a, b) => b.score - a.score);
    const topPicks = scoredDishes.slice(0, 6).map(s => s.dish);

    if (topPicks.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">✨</div>
          <h3>No tailored suggestions match the current criteria</h3>
          <p style="color:var(--text-secondary); margin-top:6px;">Try broadening your filter selections.</p>
        </div>
      `;
      return;
    }

    topPicks.forEach(dish => {
      grid.appendChild(createDishCard(dish));
    });
  }

  // 3. Global Hall of Fame
  function renderGlobalDishes() {
    const grid = elements.globalDishesGrid;
    grid.innerHTML = '';

    const globalDishes = sortDishes(DISHES_DATA.filter(d => d.isGlobalIcon && matchesFilter(d)));

    if (globalDishes.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🌍</div>
          <h3>No global icons match your filters</h3>
          <p style="color:var(--text-secondary); margin-top:6px;">Reset filters to explore worldwide culinary legends.</p>
        </div>
      `;
      return;
    }

    globalDishes.forEach(dish => {
      grid.appendChild(createDishCard(dish));
    });
  }

  // --- CURATED GASTRONOMY FOOD TRAILS ---
  function renderFoodTrails(selectedCityId = state.currentCityId) {
    const tabsContainer = elements.trailCityTabs;
    const showcaseContainer = elements.trailShowcaseContainer;
    if (!tabsContainer || !showcaseContainer) return;

    tabsContainer.innerHTML = '';

    let activeTrail = FOOD_TRAILS.find(t => t.cityId === selectedCityId) || FOOD_TRAILS[0];
    state.activeTrailCity = activeTrail.cityId;

    FOOD_TRAILS.forEach(trail => {
      const tab = document.createElement('button');
      tab.className = `trail-city-tab ${trail.cityId === state.activeTrailCity ? 'active' : ''}`;
      tab.textContent = `${trail.cityName}`;
      tab.addEventListener('click', () => {
        renderFoodTrails(trail.cityId);
      });
      tabsContainer.appendChild(tab);
    });

    let stopsHtml = '';
    activeTrail.stops.forEach((stop) => {
      const dish = DISHES_DATA.find(d => d.id === stop.dishId);
      stopsHtml += `
        <div class="trail-stop-item" data-dish-id="${stop.dishId}">
          <span class="trail-stop-time"><i data-lucide="clock" style="width:12px;height:12px;"></i> ${stop.time}</span>
          <div class="trail-stop-title">${stop.title}</div>
          <div class="trail-stop-spot"><i data-lucide="map-pin" style="width:12px;height:12px;"></i> ${stop.spot}</div>
          <p class="trail-stop-notes">${stop.notes}</p>
          ${dish ? `<button class="btn btn-secondary btn-sm" style="margin-top:auto; font-size:0.75rem;" data-trail-dish="${dish.id}">View Dish Details</button>` : ''}
        </div>
      `;
    });

    const spotsQuery = activeTrail.stops.map(s => s.spot).join(' to ');
    const mapsUrl = `https://www.google.com/maps/dir/${encodeURIComponent(spotsQuery)}`;

    showcaseContainer.innerHTML = `
      <div class="trail-card">
        <div class="trail-header">
          <div>
            <div style="display:flex; gap:8px; align-items:center; margin-bottom:6px;">
              <span class="badge badge-trending"><i data-lucide="compass" style="width:12px;height:12px;"></i> Curated Route</span>
              <span style="font-size:0.8rem; font-weight:700; color:var(--secondary);">${activeTrail.duration}</span>
            </div>
            <h3 style="font-size:1.4rem; margin-bottom:4px;">${activeTrail.title}</h3>
            <p style="font-size:0.9rem; color:var(--text-secondary);">${activeTrail.subtitle}</p>
          </div>
          <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding:10px 22px;">
            <i data-lucide="navigation" style="width:16px;height:16px;"></i>
            <span>Open Route in Google Maps</span>
          </a>
        </div>

        <div class="trail-timeline">
          ${stopsHtml}
        </div>
      </div>
    `;

    showcaseContainer.querySelectorAll('[data-trail-dish]').forEach(btn => {
      btn.addEventListener('click', () => {
        const dishId = btn.getAttribute('data-trail-dish');
        const dish = DISHES_DATA.find(d => d.id === dishId);
        if (dish) openDishDetailModal(dish);
      });
    });

    refreshLucideIcons();
  }

  // --- DISH DETAIL MODAL ---
  function openDishDetailModal(dish) {
    state.activeModalDish = dish;
    elements.modalDishImg.src = dish.image;
    elements.modalDishImg.alt = dish.name;
    elements.modalDishName.textContent = dish.name;
    elements.modalDishNative.textContent = dish.nativeName || '';
    elements.modalDishRating.innerHTML = `<i data-lucide="star" style="width:16px;height:16px;fill:#f59e0b;"></i> ${dish.rating} (${(dish.reviewsCount || 1000).toLocaleString()})`;

    const isVeg = dish.diet && (dish.diet.includes('veg') || dish.diet.includes('vegan') || dish.category === 'Dessert');
    if (elements.modalDishBadges) {
      elements.modalDishBadges.innerHTML = `
        <span class="badge ${isVeg ? 'badge-diet-veg' : 'badge-diet-nonveg'}" style="font-size:0.8rem; padding:4px 10px;">
          <span class="fssai-symbol ${isVeg ? 'veg' : 'non-veg'}"><span class="fssai-dot"></span></span>
          ${isVeg ? `${t('veg')} 🟢` : `${t('non_veg')} 🔴`}
        </span>
        <span class="badge badge-location" style="font-size:0.8rem; padding:4px 10px;"><i data-lucide="map-pin" style="width:12px;height:12px;"></i> ${dish.cityName} Special</span>
        ${dish.isGlobalIcon ? `<span class="badge badge-global" style="font-size:0.8rem; padding:4px 10px;"><i data-lucide="award" style="width:12px;height:12px;"></i> Global Icon</span>` : ''}
      `;
    }

    elements.modalDishOrigin.textContent = `${dish.cityName}, ${dish.country}`;
    elements.modalDishCategory.textContent = `${dish.category} (${dish.mealTimes ? dish.mealTimes.join(', ') : ''})`;
    if (elements.modalDishPrice) {
      elements.modalDishPrice.textContent = `₹${dish.price} (${dish.priceTier})`;
    }
    
    let spiceText = 'Mild';
    if (dish.spiceLevel === 2) spiceText = 'Medium 🔥';
    if (dish.spiceLevel === 3) spiceText = 'Hot 🔥🔥';
    if (dish.spiceLevel >= 4) spiceText = 'Fiery 🔥🔥🔥';
    if (dish.spiceLevel === 0) spiceText = 'Zero Spice';
    elements.modalDishSpice.textContent = spiceText;
    elements.modalDishCalories.textContent = `${dish.calories} kcal`;
    if (elements.modalDishMacros && dish.macros) {
      elements.modalDishMacros.textContent = `P: ${dish.macros.protein}g • C: ${dish.macros.carbs}g • F: ${dish.macros.fat}g`;
    }

    // Foodie Hack
    if (elements.modalDishHack) {
      elements.modalDishHack.textContent = dish.foodieHack || `Order this hot at top spots in ${dish.cityName}.`;
    }

    elements.modalDishDescription.textContent = dish.description;
    elements.modalDishRecipe.textContent = dish.recipeOverview || 'Traditional secret family and street vendor recipe prepared with artisanal care.';

    // Ingredients
    elements.modalDishIngredients.innerHTML = '';
    dish.ingredients.forEach(ing => {
      const tag = document.createElement('span');
      tag.className = 'ingredient-tag';
      tag.textContent = `• ${ing}`;
      elements.modalDishIngredients.appendChild(tag);
    });

    // Iconic Places to Eat It & Radar
    if (elements.modalDishSpots) {
      elements.modalDishSpots.innerHTML = '';
      if (dish.iconicSpots && dish.iconicSpots.length > 0) {
        dish.iconicSpots.forEach(spot => {
          const item = document.createElement('div');
          item.className = 'spot-item';
          item.innerHTML = `<i data-lucide="map-pin" style="color:var(--primary); width:16px;height:16px;"></i> <span><strong>${spot}</strong></span>`;
          elements.modalDishSpots.appendChild(item);
        });
      } else {
        elements.modalDishSpots.innerHTML = `<div class="spot-item">Popular in top authentic restaurants throughout ${dish.cityName}.</div>`;
      }
    }

    // Live Restaurant Radar List
    if (elements.modalRadarList) {
      elements.modalRadarList.innerHTML = '';
      const radarSpots = dish.radarPlaces || [];
      radarSpots.forEach(rp => {
        const spotCard = document.createElement('div');
        spotCard.className = 'radar-place-card';
        spotCard.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="radar-place-name">${rp.name}</span>
            <span class="badge" style="font-size:0.65rem; padding:2px 6px; background:rgba(242,92,5,0.15); color:var(--primary);">${rp.badge}</span>
          </div>
          <div class="radar-place-meta">
            <span>📍 ${rp.distanceKm} km away • ⭐ ${rp.rating}</span>
            <span class="radar-status-tag">${rp.status}</span>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=${rp.mapsQuery}" target="_blank" rel="noopener noreferrer" style="font-size:0.75rem; color:var(--primary); font-weight:600; text-decoration:none; margin-top:4px;">
            Navigate on Maps →
          </a>
        `;
        elements.modalRadarList.appendChild(spotCard);
      });
    }

    // Google Maps Search link
    const mapsQuery = encodeURIComponent(`${dish.name} ${dish.cityName}`);
    elements.modalFindNearMeBtn.href = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

    // Delivery Links Setup (Swiggy & Zomato)
    const { swiggyUrl, zomatoUrl, activeCityName } = getDeliveryUrls(dish);
    if (elements.modalSwiggyLink) {
      elements.modalSwiggyLink.href = swiggyUrl;
      elements.modalSwiggyLink.onclick = () => {
        showToast(`Opening Swiggy for "${dish.name}" in ${activeCityName}...`, 'info');
      };
    }
    if (elements.modalZomatoLink) {
      elements.modalZomatoLink.href = zomatoUrl;
      elements.modalZomatoLink.onclick = () => {
        showToast(`Opening Zomato for "${dish.name}" in ${activeCityName}...`, 'info');
      };
    }
    if (elements.modalBottomSwiggyBtn) {
      elements.modalBottomSwiggyBtn.href = swiggyUrl;
      elements.modalBottomSwiggyBtn.onclick = () => {
        showToast(`Opening Swiggy for "${dish.name}" in ${activeCityName}...`, 'info');
      };
    }
    if (elements.modalBottomZomatoBtn) {
      elements.modalBottomZomatoBtn.href = zomatoUrl;
      elements.modalBottomZomatoBtn.onclick = () => {
        showToast(`Opening Zomato for "${dish.name}" in ${activeCityName}...`, 'info');
      };
    }
    if (elements.modalDeliveryCityBadge) {
      elements.modalDeliveryCityBadge.textContent = `📍 Delivering in ${activeCityName}`;
    }

    // YouTube Recipe search link
    const ytQuery = encodeURIComponent(`How to cook authentic ${dish.name} recipe`);
    elements.modalWatchRecipeBtn.href = `https://www.youtube.com/results?search_query=${ytQuery}`;

    // Cook Along Buttons
    if (elements.modalCookAlongBtn) {
      elements.modalCookAlongBtn.onclick = () => {
        closeDetailModal();
        openCookAlongModal(dish);
      };
    }
    if (elements.modalCookAlongBtn2) {
      elements.modalCookAlongBtn2.onclick = () => {
        closeDetailModal();
        openCookAlongModal(dish);
      };
    }

    // Story Poster Button
    if (elements.modalStoryPosterBtn) {
      elements.modalStoryPosterBtn.onclick = () => {
        openStoryPosterModal(dish);
      };
    }

    // Add to Meal Plan Button
    if (elements.modalAddToPlannerBtn) {
      elements.modalAddToPlannerBtn.onclick = () => {
        promptAddToMealPlan(dish.id);
      };
    }

    // Tasted Button state
    updateModalTastedButton(dish.id);
    elements.modalMarkTastedBtn.onclick = () => {
      toggleTastedDish(dish.id);
      updateModalTastedButton(dish.id);
    };

    // Grocery List Button
    elements.modalGroceryBtn.onclick = () => {
      openGroceryList(dish.ingredients, `${dish.name} Grocery List`, `Essential ingredients to prepare ${dish.name} (${dish.cityName})`);
    };

    // Battle Arena Compare Button
    elements.modalCompareBtn.onclick = () => {
      closeDetailModal();
      openBattleArenaWithDish(dish.id);
    };

    // Audio narration reset
    stopAudioNarration();

    // Community Reviews render
    renderDishReviews(dish.id);
    elements.addReviewCard.style.display = 'none';

    // Modal Favorite button state
    updateModalFavButton(dish.id);
    elements.modalSaveFavBtn.onclick = () => {
      toggleFavorite(dish.id);
      updateModalFavButton(dish.id);
    };

    // Show modal
    elements.dishDetailModal.classList.add('active');
    refreshLucideIcons();
  }

  // --- DELIVERY UTILITY HELPERS ---
  function getDeliveryUrls(dish) {
    const currentCity = CITIES_DATA.find(c => c.id === state.currentCityId);
    const activeCityName = currentCity ? currentCity.name.split('(')[0].trim() : (dish.cityName || 'India');
    // Localized query combining dish name + current city
    const localizedQuery = `${dish.name} ${activeCityName}`.trim();
    const swiggyUrl = `https://www.swiggy.com/search?query=${encodeURIComponent(localizedQuery)}`;
    const zomatoUrl = `https://www.zomato.com/search?q=${encodeURIComponent(localizedQuery)}`;
    return { swiggyUrl, zomatoUrl, activeCityName, localizedQuery };
  }

  function openDeliveryModal(dish) {
    if (!elements.deliveryModal || !dish) return;
    state.activeModalDish = dish;
    const { swiggyUrl, zomatoUrl, activeCityName } = getDeliveryUrls(dish);

    if (elements.deliveryModalDishImg) {
      elements.deliveryModalDishImg.src = dish.image;
      elements.deliveryModalDishImg.alt = dish.name;
    }
    if (elements.deliveryModalDishName) {
      elements.deliveryModalDishName.textContent = dish.name;
    }
    if (elements.deliveryModalDishSub) {
      elements.deliveryModalDishSub.textContent = `Specialty from ${dish.cityName} • Approx. ₹${dish.price} (${dish.priceTier})`;
    }

    const isVeg = dish.diet && (dish.diet.includes('veg') || dish.diet.includes('vegan') || dish.category === 'Dessert');
    if (elements.deliveryModalDishBadges) {
      elements.deliveryModalDishBadges.innerHTML = `
        <span class="badge ${isVeg ? 'badge-diet-veg' : 'badge-diet-nonveg'}" style="font-size:0.75rem; padding:2px 8px;">
          <span class="fssai-symbol ${isVeg ? 'veg' : 'non-veg'}"><span class="fssai-dot"></span></span>
          ${isVeg ? `${t('veg')} 🟢` : `${t('non_veg')} 🔴`}
        </span>
        <span class="badge badge-location" style="font-size:0.75rem; padding:2px 8px;"><i data-lucide="map-pin" style="width:11px;height:11px;"></i> ${dish.cityName}</span>
      `;
    }

    if (elements.quickSwiggyBtn) {
      elements.quickSwiggyBtn.href = swiggyUrl;
      elements.quickSwiggyBtn.onclick = () => {
        showToast(`Opening Swiggy for "${dish.name}" in ${activeCityName}...`, 'info');
      };
    }
    if (elements.quickZomatoBtn) {
      elements.quickZomatoBtn.href = zomatoUrl;
      elements.quickZomatoBtn.onclick = () => {
        showToast(`Opening Zomato for "${dish.name}" in ${activeCityName}...`, 'info');
      };
    }

    if (elements.deliveryModalLocationHint) {
      elements.deliveryModalLocationHint.innerHTML = `📍 Current Delivery Location: <strong>${activeCityName}</strong>`;
    }

    if (elements.deliveryModalMapsBtn) {
      const mapsQuery = encodeURIComponent(`${dish.name} ${activeCityName}`);
      elements.deliveryModalMapsBtn.href = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
    }

    if (elements.deliveryModalViewDetailsBtn) {
      elements.deliveryModalViewDetailsBtn.onclick = () => {
        closeDeliveryModal();
        openDishDetailModal(dish);
      };
    }

    elements.deliveryModal.classList.add('active');
    refreshLucideIcons();
    playSound('pop');
  }

  function closeDeliveryModal() {
    if (elements.deliveryModal) {
      elements.deliveryModal.classList.remove('active');
    }
  }

  function updateModalFavButton(dishId) {
    const isFav = state.favorites.includes(dishId);
    if (isFav) {
      elements.modalSaveFavBtn.classList.add('btn-primary');
      elements.modalSaveFavBtn.classList.remove('btn-secondary');
      elements.modalSaveFavBtn.innerHTML = `<i data-lucide="check" style="width:18px;height:18px;"></i> <span>Saved in Favorites</span>`;
    } else {
      elements.modalSaveFavBtn.classList.remove('btn-primary');
      elements.modalSaveFavBtn.classList.add('btn-secondary');
      elements.modalSaveFavBtn.innerHTML = `<i data-lucide="heart" style="width:18px;height:18px;"></i> <span>Save to Favorites</span>`;
    }
    refreshLucideIcons();
  }

  function updateModalTastedButton(dishId) {
    const isTasted = state.tastedDishes.includes(dishId);
    if (isTasted) {
      elements.modalMarkTastedBtn.style.background = 'var(--emerald)';
      elements.modalMarkTastedBtn.style.color = 'white';
      elements.modalMarkTastedBtn.style.borderColor = 'var(--emerald)';
      elements.modalTastedLabel.textContent = "Tasted & Passport Logged ✔️ ";
    } else {
      elements.modalMarkTastedBtn.style.background = '';
      elements.modalMarkTastedBtn.style.color = '';
      elements.modalMarkTastedBtn.style.borderColor = '';
      elements.modalTastedLabel.textContent = "I've Tasted This";
    }
  }

  function closeDetailModal() {
    stopAudioNarration();
    elements.dishDetailModal.classList.remove('active');
  }

  // --- WEB SPEECH AUDIO NARRATION ---
  function toggleAudioNarration() {
    if (!('speechSynthesis' in window)) {
      showToast('Speech synthesis not supported in this browser.');
      return;
    }

    if (state.speechSynthSpeaking) {
      stopAudioNarration();
      return;
    }

    const dish = state.activeModalDish;
    if (!dish) return;

    const speechText = `${dish.name}, originating from ${dish.cityName}, ${dish.country}. ${dish.description}. Key ingredients include: ${dish.ingredients.slice(0, 4).join(', ')}.`;

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      state.speechSynthSpeaking = true;
      elements.modalAudioBtn.classList.add('speaking');
      elements.modalAudioLabel.textContent = 'Speaking... (Click to stop)';
      elements.modalAudioIcon.setAttribute('data-lucide', 'square');
      refreshLucideIcons();
    };

    utterance.onend = () => {
      stopAudioNarration();
    };

    utterance.onerror = () => {
      stopAudioNarration();
    };

    window.speechSynthesis.speak(utterance);
  }

  function stopAudioNarration() {
    if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    state.speechSynthSpeaking = false;
    if (elements.modalAudioBtn) {
      elements.modalAudioBtn.classList.remove('speaking');
      elements.modalAudioLabel.textContent = 'Listen Story';
      elements.modalAudioIcon.setAttribute('data-lucide', 'volume-2');
      refreshLucideIcons();
    }
  }

  // --- REVIEWS & TASTING NOTES SYSTEM ---
  function renderDishReviews(dishId) {
    const list = elements.modalReviewsList;
    list.innerHTML = '';

    const defaultMatches = (DEFAULT_REVIEWS || []).filter(r => r.dishId === dishId);
    const userMatches = (state.userReviews || []).filter(r => r.dishId === dishId);
    const allReviews = [...userMatches, ...defaultMatches];

    if (allReviews.length === 0) {
      list.innerHTML = `<div style="font-size:0.85rem; color:var(--text-muted); padding:10px 0;">Be the first foodie to leave a tasting note for this dish!</div>`;
      return;
    }

    allReviews.forEach(rev => {
      const card = document.createElement('div');
      card.className = 'review-card';
      let stars = '★'.repeat(rev.rating || 5);
      card.innerHTML = `
        <div class="review-card-head">
          <span class="review-author">${rev.author}</span>
          <span style="color:#f59e0b; font-size:0.85rem;">${stars} <span style="color:var(--text-muted); font-size:0.75rem;">• ${rev.date || 'Recently'}</span></span>
        </div>
        <p class="review-comment">"${rev.comment}"</p>
      `;
      list.appendChild(card);
    });
  }

  function submitUserReview() {
    const dish = state.activeModalDish;
    if (!dish) return;

    const author = elements.reviewAuthorInput.value.trim() || 'Fellow Foodie';
    const comment = elements.reviewCommentInput.value.trim();

    if (!comment) {
      showToast('Please enter your tasting notes or review!');
      return;
    }

    const newRev = {
      dishId: dish.id,
      author: author,
      rating: 5,
      date: 'Just now',
      comment: comment
    };

    state.userReviews.unshift(newRev);
    localStorage.setItem('cravepulse_reviews', JSON.stringify(state.userReviews));

    elements.reviewCommentInput.value = '';
    elements.addReviewCard.style.display = 'none';
    renderDishReviews(dish.id);
    showToast('Tasting note posted! Thank you for contributing.');
  }

  // --- FAVORITES MANAGEMENT ---
  function toggleFavorite(dishId) {
    const index = state.favorites.indexOf(dishId);
    const dish = DISHES_DATA.find(d => d.id === dishId);
    const dishName = dish ? dish.name : 'Dish';

    if (index > -1) {
      state.favorites.splice(index, 1);
      showToast(`Removed "${dishName}" from Saved`);
    } else {
      state.favorites.push(dishId);
      showToast(`Saved "${dishName}" to your Favorites ❤️`);
    }

    localStorage.setItem('cravepulse_favorites', JSON.stringify(state.favorites));
    updateFavoritesBadge();
    renderAllGrids();
    renderFavoritesDrawer();
  }

  function updateFavoritesBadge() {
    elements.favCountBadge.textContent = state.favorites.length;
  }

  function renderFavoritesDrawer() {
    const container = elements.favoritesListContainer;
    container.innerHTML = '';

    if (elements.drawerItemsSummary) {
      elements.drawerItemsSummary.textContent = `${state.favorites.length} delicacy${state.favorites.length === 1 ? '' : 'ies'} bookmarked`;
    }

    if (state.favorites.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="padding:40px 10px;">
          <div class="empty-icon">❤️</div>
          <h4>No saved dishes yet</h4>
          <p style="color:var(--text-muted); font-size:0.85rem; margin-top:6px;">Tap the heart icon on any dish card to bookmark your favorites here.</p>
        </div>
      `;
      return;
    }

    state.favorites.forEach(favId => {
      const dish = DISHES_DATA.find(d => d.id === favId);
      if (!dish) return;

      const item = document.createElement('div');
      item.className = 'fav-item';
      item.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" class="fav-thumb" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&auto=format&fit=crop&q=80'">
        <div class="fav-info">
          <div class="fav-title">${dish.name}</div>
          <div class="fav-city">${dish.cityName} • ${dish.category} • <strong style="color:var(--emerald);">₹${dish.price}</strong></div>
        </div>
        <button class="btn btn-secondary btn-icon" style="width:34px;height:34px;" title="Remove">
          <i data-lucide="trash-2" style="width:16px;height:16px;color:var(--accent);"></i>
        </button>
      `;

      item.addEventListener('click', (e) => {
        if (e.target.closest('button')) {
          toggleFavorite(dish.id);
        } else {
          openDishDetailModal(dish);
          elements.favoritesDrawerBackdrop.classList.remove('active');
        }
      });

      container.appendChild(item);
    });

    refreshLucideIcons();
  }

  // --- GASTRONOMY PASSPORT & TASTED TRACKER ---
  function toggleTastedDish(dishId) {
    const idx = state.tastedDishes.indexOf(dishId);
    const dish = DISHES_DATA.find(d => d.id === dishId);
    const name = dish ? dish.name : 'Dish';

    if (idx > -1) {
      state.tastedDishes.splice(idx, 1);
      showToast(`Removed "${name}" from Tasted log.`);
    } else {
      state.tastedDishes.push(dishId);
      showToast(`† "${name}" marked as Tasted! Passport updated.`);
    }

    localStorage.setItem('cravepulse_tasted', JSON.stringify(state.tastedDishes));
    updatePassportUI();
    renderAllGrids();
  }

  function updatePassportUI() {
    const tasted = state.tastedDishes;
    if (elements.passportCountBadge) {
      elements.passportCountBadge.textContent = tasted.length;
    }
    if (elements.pstatTastedCount) {
      elements.pstatTastedCount.textContent = tasted.length;
    }

    const tastedCities = new Set();
    tasted.forEach(id => {
      const d = DISHES_DATA.find(x => x.id === id);
      if (d && d.cityId) tastedCities.add(d.cityId);
    });

    if (elements.pstatCitiesCount) {
      elements.pstatCitiesCount.textContent = tastedCities.size;
    }

    let levelTitle = 'Novice Eater';
    let stars = '★☆†☆†';
    if (tasted.length >= 3) {
      levelTitle = 'Street Foodie';
      stars = '★★☆†';
    }
    if (tasted.length >= 7) {
      levelTitle = 'Foodie Explorer';
      stars = '★★★';
    }
    if (tasted.length >= 15) {
      levelTitle = 'Grand Epicurean Master';
      stars = '★★★★★';
    }

    if (elements.passportLevelBadge) {
      elements.passportLevelBadge.innerHTML = `
        <span class="level-title">${levelTitle}</span>
        <span class="level-stars">${stars}</span>
      `;
    }

    let earnedCount = 0;
    if (elements.passportBadgesGrid) {
      elements.passportBadgesGrid.innerHTML = '';
      ACHIEVEMENT_BADGES.forEach(badge => {
        const isUnlocked = badge.condition(tasted, DISHES_DATA);
        if (isUnlocked) earnedCount++;

        const bCard = document.createElement('div');
        bCard.className = `badge-item ${isUnlocked ? 'unlocked' : ''}`;
        bCard.innerHTML = `
          <div class="badge-item-icon"><i data-lucide="${badge.icon}"></i></div>
          <div>
            <div class="badge-item-title">${badge.title} ${isUnlocked ? '✔️' : '🔒'}</div>
            <div class="badge-item-desc">${badge.description}</div>
          </div>
        `;
        elements.passportBadgesGrid.appendChild(bCard);
      });
    }

    if (elements.pstatBadgesCount) {
      elements.pstatBadgesCount.textContent = `${earnedCount} / ${ACHIEVEMENT_BADGES.length}`;
    }

    if (elements.passportStampsGrid) {
      elements.passportStampsGrid.innerHTML = '';
      CITIES_DATA.forEach(city => {
        const unlocked = tastedCities.has(city.id);
        const stamp = document.createElement('div');
        stamp.className = `passport-stamp-item ${unlocked ? 'unlocked' : ''}`;
        stamp.innerHTML = `
          <div class="passport-stamp-icon">${unlocked ? '›' : '📍'}</div>
          <div class="passport-stamp-city">${city.name}</div>
          <div style="font-size:0.7rem; color:var(--text-muted);">${unlocked ? 'Visa Verified' : 'Locked'}</div>
        `;
        elements.passportStampsGrid.appendChild(stamp);
      });
    }

    if (elements.passportTastedLogList) {
      elements.passportTastedLogList.innerHTML = '';
      if (tasted.length === 0) {
        elements.passportTastedLogList.innerHTML = `<div style="font-size:0.85rem; color:var(--text-muted);">No dishes logged yet. Click "I've Tasted This" on any dish to build your log!</div>`;
      } else {
        tasted.forEach(id => {
          const d = DISHES_DATA.find(x => x.id === id);
          if (d) {
            const chip = document.createElement('span');
            chip.className = 'tasted-chip';
            chip.innerHTML = `<i data-lucide="check" style="width:12px;height:12px;"></i> ${d.name} (${d.cityName})`;
            elements.passportTastedLogList.appendChild(chip);
          }
        });
      }
    }

    refreshLucideIcons();
  }

  function openPassportModal() {
    updatePassportUI();
    elements.passportModal.classList.add('active');
  }

  // --- SMART GROCERY SHOPPING LIST ---
  function openGroceryList(ingredients, title = 'Smart Grocery Checklist', subtitle = 'Organized shopping list') {
    elements.groceryModalTitle.textContent = title;
    elements.groceryModalSubtitle.textContent = subtitle;

    const container = elements.groceryListItemsContainer;
    container.innerHTML = '';

    if (!ingredients || ingredients.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:20px; color:var(--text-muted);">No ingredients listed.</div>`;
      elements.groceryModal.classList.add('active');
      return;
    }

    ingredients.forEach((ing, i) => {
      const item = document.createElement('label');
      item.className = 'grocery-item';
      item.innerHTML = `
        <input type="checkbox" class="grocery-checkbox" id="g_ing_${i}">
        <span>${ing}</span>
      `;
      item.querySelector('input').addEventListener('change', (e) => {
        if (e.target.checked) {
          item.classList.add('checked');
        } else {
          item.classList.remove('checked');
        }
      });
      container.appendChild(item);
    });

    elements.groceryModal.classList.add('active');
  }

  function openCombinedFavoritesGroceryList() {
    if (state.favorites.length === 0) {
      showToast('Save some favorite dishes first to generate a combined grocery list!');
      return;
    }

    const allIngs = new Set();
    state.favorites.forEach(id => {
      const d = DISHES_DATA.find(x => x.id === id);
      if (d && d.ingredients) {
        d.ingredients.forEach(i => allIngs.add(i));
      }
    });

    elements.favoritesDrawerBackdrop.classList.remove('active');
    openGroceryList(Array.from(allIngs), 'Combined Favorites Grocery List', `Shopping checklist combining ${state.favorites.length} saved delicacies`);
  }

  function copyGroceryList() {
    const items = elements.groceryListItemsContainer.querySelectorAll('.grocery-item span');
    if (items.length === 0) return;

    const listText = Array.from(items).map(s => `• ${s.textContent}`).join('\n');
    navigator.clipboard.writeText(`CRAVEPULSE SHOPPING LIST:\n\n${listText}`).then(() => {
      showToast('📍‹ Shopping list copied to clipboard!');
    }).catch(() => {
      showToast('Shopping list ready to write down!');
    });
  }

  // --- DISH VS DISH BATTLE ARENA ---
  function setupBattleArenaSelectors() {
    const selA = elements.dishSelectA;
    const selB = elements.dishSelectB;
    if (!selA || !selB) return;

    selA.innerHTML = '';
    selB.innerHTML = '';

    DISHES_DATA.forEach(d => {
      const optA = document.createElement('option');
      optA.value = d.id;
      optA.textContent = `${d.name} (${d.cityName})`;
      selA.appendChild(optA);

      const optB = document.createElement('option');
      optB.value = d.id;
      optB.textContent = `${d.name} (${d.cityName})`;
      selB.appendChild(optB);
    });

    selA.value = SHOWDOWN_PAIRS[0].dishAId;
    selB.value = SHOWDOWN_PAIRS[0].dishBId;

    const pillsList = elements.showdownPillsList;
    pillsList.innerHTML = '';
    SHOWDOWN_PAIRS.forEach((pair, idx) => {
      const pill = document.createElement('button');
      pill.className = `showdown-pill ${idx === 0 ? 'active' : ''}`;
      pill.textContent = pair.title;
      pill.addEventListener('click', () => {
        pillsList.querySelectorAll('.showdown-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selA.value = pair.dishAId;
        selB.value = pair.dishBId;
        renderBattleComparison();
      });
      pillsList.appendChild(pill);
    });

    selA.addEventListener('change', renderBattleComparison);
    selB.addEventListener('change', renderBattleComparison);
  }

  function openBattleArenaWithDish(dishId) {
    elements.battleArenaModal.classList.add('active');
    elements.dishSelectA.value = dishId;
    const otherDish = DISHES_DATA.find(d => d.id !== dishId) || DISHES_DATA[1];
    elements.dishSelectB.value = otherDish.id;
    renderBattleComparison();
  }

  function renderBattleComparison() {
    const idA = elements.dishSelectA.value;
    const idB = elements.dishSelectB.value;
    const dishA = DISHES_DATA.find(d => d.id === idA) || DISHES_DATA[0];
    const dishB = DISHES_DATA.find(d => d.id === idB) || DISHES_DATA[1];

    const battleKey = [dishA.id, dishB.id].sort().join('_vs_');
    const votes = state.arenaVotes[battleKey] || { a: 124, b: 118 };

    const board = elements.arenaComparisonBoard;
    board.innerHTML = `
      <div class="arena-grid-split">
        <!-- Contender A -->
        <div class="arena-col">
          <img src="${dishA.image}" alt="${dishA.name}" class="arena-dish-thumb" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&auto=format&fit=crop&q=80'">
          <div>
            <h3 style="font-size:1.25rem;">${dishA.name}</h3>
            <span style="font-size:0.85rem; color:var(--text-muted);"><i data-lucide="map-pin" style="width:12px;height:12px;display:inline;"></i> ${dishA.cityName}, ${dishA.country}</span>
          </div>
          
          <div class="arena-metric-row">
            <span class="arena-metric-label">Spice Meter</span>
            <span class="arena-metric-val">${'🔥'.repeat(dishA.spiceLevel || 1)} (Level ${dishA.spiceLevel})</span>
          </div>
          <div class="arena-metric-row">
            <span class="arena-metric-label">Caloric Energy</span>
            <span class="arena-metric-val" style="color:var(--secondary);">${dishA.calories} kcal</span>
          </div>
          <div class="arena-metric-row">
            <span class="arena-metric-label">Preparation Time</span>
            <span class="arena-metric-val">${dishA.prepTime}</span>
          </div>
          <div class="arena-metric-row">
            <span class="arena-metric-label">Rating & Foodies</span>
            <span class="arena-metric-val" style="color:#f59e0b;">★ ${dishA.rating} (${(dishA.reviewsCount || 1000).toLocaleString()})</span>
          </div>
          <div class="arena-metric-row">
            <span class="arena-metric-label">Price & Tier</span>
            <span class="arena-metric-val" style="color:var(--emerald);">₹${dishA.price} (${dishA.priceTier})</span>
          </div>

          <div style="margin-top:4px;">
            <span style="font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Flavor Radar:</span>
            <div style="display:flex; gap:4px; flex-wrap:wrap; margin-top:4px;">
              ${dishA.tasteProfile.map(t => `<span class="taste-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>

        <!-- Contender B -->
        <div class="arena-col">
          <img src="${dishB.image}" alt="${dishB.name}" class="arena-dish-thumb" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&auto=format&fit=crop&q=80'">
          <div>
            <h3 style="font-size:1.25rem;">${dishB.name}</h3>
            <span style="font-size:0.85rem; color:var(--text-muted);"><i data-lucide="map-pin" style="width:12px;height:12px;display:inline;"></i> ${dishB.cityName}, ${dishB.country}</span>
          </div>

          <div class="arena-metric-row">
            <span class="arena-metric-label">Spice Meter</span>
            <span class="arena-metric-val">${'🔥'.repeat(dishB.spiceLevel || 1)} (Level ${dishB.spiceLevel})</span>
          </div>
          <div class="arena-metric-row">
            <span class="arena-metric-label">Caloric Energy</span>
            <span class="arena-metric-val" style="color:var(--secondary);">${dishB.calories} kcal</span>
          </div>
          <div class="arena-metric-row">
            <span class="arena-metric-label">Preparation Time</span>
            <span class="arena-metric-val">${dishB.prepTime}</span>
          </div>
          <div class="arena-metric-row">
            <span class="arena-metric-label">Rating & Foodies</span>
            <span class="arena-metric-val" style="color:#f59e0b;">★ ${dishB.rating} (${(dishB.reviewsCount || 1000).toLocaleString()})</span>
          </div>
          <div class="arena-metric-row">
            <span class="arena-metric-label">Price & Tier</span>
            <span class="arena-metric-val" style="color:var(--emerald);">₹${dishB.price} (${dishB.priceTier})</span>
          </div>

          <div style="margin-top:4px;">
            <span style="font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Flavor Radar:</span>
            <div style="display:flex; gap:4px; flex-wrap:wrap; margin-top:4px;">
              ${dishB.tasteProfile.map(t => `<span class="taste-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Live Community Vote Bar -->
      <div class="arena-vote-bar">
        <button class="btn btn-primary btn-sm" id="voteBtnA" style="flex:1;">
          <i data-lucide="thumbs-up" style="width:14px;height:14px;"></i> Vote for ${dishA.name} (<span id="voteCountA">${votes.a}</span>)
        </button>
        <span style="font-weight:900; color:var(--text-muted);">VS</span>
        <button class="btn btn-primary btn-sm" id="voteBtnB" style="flex:1; background:linear-gradient(135deg, #ec4899, #8b5cf6);">
          <i data-lucide="thumbs-up" style="width:14px;height:14px;"></i> Vote for ${dishB.name} (<span id="voteCountB">${votes.b}</span>)
        </button>
      </div>
    `;

    document.getElementById('voteBtnA').addEventListener('click', () => {
      votes.a += 1;
      state.arenaVotes[battleKey] = votes;
      localStorage.setItem('cravepulse_arena_votes', JSON.stringify(state.arenaVotes));
      document.getElementById('voteCountA').textContent = votes.a;
      showToast(`🗳️ Voted for ${dishA.name}!`);
    });

    document.getElementById('voteBtnB').addEventListener('click', () => {
      votes.b += 1;
      state.arenaVotes[battleKey] = votes;
      localStorage.setItem('cravepulse_arena_votes', JSON.stringify(state.arenaVotes));
      document.getElementById('voteCountB').textContent = votes.b;
      showToast(`🗳️ Voted for ${dishB.name}!`);
    });

    refreshLucideIcons();
  }

  // --- AI TASTE MATCHER QUIZ ---
  const QUIZ_QUESTIONS = [
    {
      step: 1,
      title: "Step 1: What flavor atmosphere are you craving?",
      key: "flavor",
      options: [
        { label: "Savory, Rich & Aromatic", icon: "🍲", sub: "Deep spices, slow-cooked layers & comfort", val: "savory" },
        { label: "Fiery, Tangy & Bold", icon: "🔥", sub: "Explosive chilies, street chaats & zing", val: "spicy" },
        { label: "Artisanal & Sweet Decadence", icon: "🍰", sub: "Silky creams, caramels & pastries", val: "sweet" },
        { label: "Light, Crisp & Umami", icon: "🥗", sub: "Fresh noodles, fresh broths & herbs", val: "light" }
      ]
    },
    {
      step: 2,
      title: "Step 2: What is your spice tolerance today?",
      key: "spice",
      options: [
        { label: "Zero Spice (Zero Flames)", icon: "🟢", sub: "Smooth, mild, sweet or purely herbal", val: 0 },
        { label: "Mild & Gentle Heat", icon: "🔥", sub: "Delicate warmth without burning", val: 1 },
        { label: "Medium & Zesty Fire", icon: "🔥🔥", sub: "Comfortable tingling chili heat", val: 2 },
        { label: "Volcano Slayer (Level 3-4)", icon: "🔥🔥🔥", sub: "Bring on the fiery adrenaline rush!", val: 4 }
      ]
    },
    {
      step: 3,
      title: "Step 3: What calorie & energy target fits your day?",
      key: "calories",
      options: [
        { label: "Light & Guilt-Free (< 400 kcal)", icon: "🌿", sub: "Vibrant, clean & energizing", val: 400 },
        { label: "Balanced Plate (400 - 650 kcal)", icon: "⚖️", sub: "Satisfying full meal balance", val: 650 },
        { label: "Grand Gourmet Feast (650+ kcal)", icon: "👑", sub: "Pure indulgence with butter & gravies", val: 9999 },
        { label: "No Calorie Restrictions!", icon: "🎉", sub: "Whatever tastes legendary", val: 99999 }
      ]
    },
    {
      step: 4,
      title: "Step 4: What is the dining occasion?",
      key: "occasion",
      options: [
        { label: "Fast & Fun Street Food Walk", icon: "🌮", sub: "Quick bites, crunchy & handheld", val: "street" },
        { label: "Warm Comfort Food Snuggle", icon: "🍲", sub: "Soul-soothing steaming bowl or biryani", val: "comfort" },
        { label: "Sophisticated Date Night Plate", icon: "🍷", sub: "Fine dining masterpieces & aromas", val: "date-night" },
        { label: "Late-Night Midnight Fuel", icon: "🌙", sub: "Night market noodles & snacks", val: "late-night" }
      ]
    }
  ];

  function openTasteQuiz() {
    state.quizStep = 1;
    state.quizAnswers = {};
    elements.quizResultsView.style.display = 'none';
    elements.quizQuestionBody.style.display = 'block';
    renderQuizStep();
    elements.tasteQuizModal.classList.add('active');
  }

  function renderQuizStep() {
    const q = QUIZ_QUESTIONS[state.quizStep - 1];
    if (!q) return;

    elements.quizStepIndicator.textContent = `Step ${q.step} of 4: ${q.key.toUpperCase()}`;
    elements.quizProgressFill.style.width = `${(q.step / 4) * 100}%`;

    const body = elements.quizQuestionBody;
    body.innerHTML = `
      <h3 class="quiz-question-title">${q.title}</h3>
      <div class="quiz-options-grid">
        ${q.options.map((opt, i) => `
          <div class="quiz-option-card" data-opt-idx="${i}">
            <div class="quiz-option-icon">${opt.icon}</div>
            <div class="quiz-option-label">${opt.label}</div>
            <div class="quiz-option-sub">${opt.sub}</div>
          </div>
        `).join('')}
      </div>
    `;

    body.querySelectorAll('.quiz-option-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-opt-idx'), 10);
        const selectedOpt = q.options[idx];
        state.quizAnswers[q.key] = selectedOpt.val;

        if (state.quizStep < 4) {
          state.quizStep += 1;
          renderQuizStep();
        } else {
          calculateQuizResults();
        }
      });
    });
  }

  function calculateQuizResults() {
    elements.quizQuestionBody.style.display = 'none';
    const resultsView = elements.quizResultsView;
    resultsView.style.display = 'block';

    resultsView.innerHTML = `
      <div style="text-align:center; padding:40px 20px;">
        <div class="quiz-icon-badge" style="margin:0 auto 16px auto; width:50px; height:50px; font-size:1.5rem;">✨</div>
        <h3 style="font-size:1.4rem;">Analyzing Your Flavor DNA...</h3>
        <p style="color:var(--text-secondary); margin-top:8px;">Matching your palate against 70+ culinary treasures worldwide.</p>
      </div>
    `;

    setTimeout(() => {
      const ans = state.quizAnswers;
      const scored = DISHES_DATA.map(d => {
        let matchScore = 70;

        if (typeof ans.spice === 'number') {
          if (d.spiceLevel === ans.spice) matchScore += 15;
          else if (Math.abs(d.spiceLevel - ans.spice) <= 1) matchScore += 8;
        }

        if (ans.calories && d.calories <= ans.calories) {
          matchScore += 8;
        }

        if (ans.flavor === 'spicy' && (d.spiceLevel >= 2 || (d.moodTags && d.moodTags.includes('spicy')))) {
          matchScore += 12;
        } else if (ans.flavor === 'sweet' && (d.category === 'Dessert' || (d.moodTags && d.moodTags.includes('sweet')))) {
          matchScore += 15;
        } else if (ans.flavor === 'savory') {
          matchScore += 10;
        }

        if (ans.occasion === 'street' && (d.category === 'Street Food' || (d.moodTags && d.moodTags.includes('street-food')))) {
          matchScore += 12;
        } else if (ans.occasion === 'date-night' && d.moodTags && d.moodTags.includes('date-night')) {
          matchScore += 14;
        } else if (ans.occasion === 'comfort' && d.moodTags && d.moodTags.includes('comfort')) {
          matchScore += 12;
        }

        const finalPercent = Math.min(99, Math.max(82, matchScore + Math.floor(Math.random() * 6)));
        return { dish: d, score: finalPercent };
      });

      scored.sort((a, b) => b.score - a.score);
      const top3 = scored.slice(0, 3);

      resultsView.innerHTML = `
        <div style="text-align:center; margin-bottom:20px;">
          <span class="badge badge-trending">🎉 Match Found!</span>
          <h3 style="font-size:1.6rem; margin-top:6px;">Your Top 3 Culinary Soulmates</h3>
          <p style="color:var(--text-secondary); font-size:0.85rem;">Calculated exclusively for your flavor, spice and mood preference.</p>
        </div>

        <div style="display:flex; flex-direction:column; gap:12px;">
          ${top3.map(item => `
            <div class="quiz-results-card" data-dish-id="${item.dish.id}">
              <div class="quiz-match-score">
                <span>${item.score}%</span>
                <span style="font-size:0.65rem; font-weight:normal;">MATCH</span>
              </div>
              <img src="${item.dish.image}" alt="${item.dish.name}" style="width:70px; height:70px; border-radius:var(--radius-md); object-fit:cover;">
              <div style="flex:1;">
                <h4 style="font-size:1.05rem; margin-bottom:2px;">${item.dish.name}</h4>
                <div style="font-size:0.8rem; color:var(--text-muted);">${item.dish.cityName}, ${item.dish.country} • ₹${item.dish.price} • ${'🔥'.repeat(item.dish.spiceLevel || 1)}</div>
                <p style="font-size:0.78rem; color:var(--text-secondary); margin-top:4px;">${item.dish.famousFor.substring(0, 80)}...</p>
              </div>
              <button class="btn btn-primary btn-sm" data-quiz-view="${item.dish.id}">View</button>
            </div>
          `).join('')}
        </div>

        <div style="display:flex; justify-content:center; gap:10px; margin-top:20px;">
          <button class="btn btn-secondary" id="retakeQuizBtn">
            <i data-lucide="rotate-ccw" style="width:16px;height:16px;"></i> Retake Quiz
          </button>
        </div>
      `;

      resultsView.querySelectorAll('[data-quiz-view]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-quiz-view');
          const d = DISHES_DATA.find(x => x.id === id);
          if (d) {
            elements.tasteQuizModal.classList.remove('active');
            openDishDetailModal(d);
          }
        });
      });

      document.getElementById('retakeQuizBtn').addEventListener('click', openTasteQuiz);
      refreshLucideIcons();
    }, 900);
  }

  // --- INTERACTIVE CRAVING WHEEL ---
  function openWheelModal() {
    let pool = DISHES_DATA.filter(d => matchesFilter(d));
    if (pool.length < 4) {
      pool = DISHES_DATA.slice(0, 8);
    } else {
      pool = pool.slice(0, 8);
    }
    state.wheelDishes = pool;
    elements.wheelResultContainer.style.display = 'none';
    elements.spinButtonLabel.textContent = 'SPIN THE WHEEL';
    elements.executeSpinBtn.disabled = false;
    elements.wheelModal.classList.add('active');

    drawWheel(0);
  }

  function drawWheel(rotationOffset = 0) {
    const canvas = elements.wheelCanvas;
    const ctx = canvas.getContext('2d');
    const dishes = state.wheelDishes;
    const numSlices = dishes.length;
    const arc = (2 * Math.PI) / numSlices;
    const radius = canvas.width / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(rotationOffset);

    const colors = [
      '#f25c05', '#ff9800', '#e11d48', '#8b5cf6',
      '#059669', '#d97706', '#0284c7', '#ec4899'
    ];

    for (let i = 0; i < numSlices; i++) {
      const angle = i * arc;
      ctx.beginPath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, angle, angle + arc);
      ctx.closePath();
      ctx.fill();

      // Border
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Label text
      ctx.save();
      ctx.rotate(angle + arc / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px Outfit, sans-serif';
      ctx.shadowColor = 'rgba(0,0,0,0.6)';
      ctx.shadowBlur = 4;
      const text = dishes[i].name.length > 14 ? dishes[i].name.substring(0, 12) + '...' : dishes[i].name;
      ctx.fillText(text, radius - 20, 4);
      ctx.restore();
    }

    ctx.restore();
  }

  function executeSpin() {
    if (state.wheelSpinning) return;
    state.wheelSpinning = true;
    elements.executeSpinBtn.disabled = true;
    elements.spinButtonLabel.textContent = 'Spinning your craving...';
    elements.wheelResultContainer.style.display = 'none';

    const numSlices = state.wheelDishes.length;
    const arc = (2 * Math.PI) / numSlices;
    const winningIndex = Math.floor(Math.random() * numSlices);

    const extraSpins = 5 + Math.floor(Math.random() * 3);
    const targetOffset = (3 * Math.PI / 2) - (winningIndex * arc + arc / 2);
    const totalRotation = extraSpins * 2 * Math.PI + targetOffset;

    const canvas = elements.wheelCanvas;
    canvas.style.transition = 'transform 4.5s cubic-bezier(0.15, 0.9, 0.2, 1)';
    canvas.style.transform = `rotate(${totalRotation}rad)`;

    setTimeout(() => {
      state.wheelSpinning = false;
      elements.executeSpinBtn.disabled = false;
      elements.spinButtonLabel.textContent = 'SPIN AGAIN';

      const winner = state.wheelDishes[winningIndex];
      displayWheelWinner(winner);
    }, 4600);
  }

  function displayWheelWinner(dish) {
    const container = elements.wheelResultContainer;
    container.innerHTML = `
      <div style="background:var(--bg-card); padding:20px; border-radius:var(--radius-lg); border:2px solid var(--primary); text-align:center; box-shadow:var(--shadow-lg);">
        <span class="badge badge-trending" style="margin-bottom:8px;">🎉 Your Destiny Pick</span>
        <h3 style="font-size:1.4rem; margin:6px 0;">${dish.name}</h3>
        <div style="font-weight:700; color:var(--emerald); margin-bottom:8px; font-size:0.95rem;">₹${dish.price} (${dish.priceTier}) • ~${dish.calories} kcal</div>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:14px;">${dish.famousFor}</p>
        <div style="display:flex; gap:10px; justify-content:center;">
          <button class="btn btn-primary" id="wheelWinnerDetailBtn" style="padding:8px 20px;">
            <i data-lucide="eye" style="width:16px;height:16px;"></i> View Full Dish
          </button>
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dish.name + ' ' + dish.cityName)}" target="_blank" class="btn btn-secondary" style="padding:8px 16px;">
            <i data-lucide="map-pin" style="width:16px;height:16px;"></i> Find Near Me
          </a>
        </div>
      </div>
    `;
    container.style.display = 'block';
    
    document.getElementById('wheelWinnerDetailBtn').addEventListener('click', () => {
      elements.wheelModal.classList.remove('active');
      openDishDetailModal(dish);
    });

    refreshLucideIcons();
  }

  // --- INSTANT SURPRISE PICK ---
  function triggerInstantSurprise() {
    const pool = DISHES_DATA.filter(d => matchesFilter(d));
    const randomDish = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : DISHES_DATA[0];
    showToast(`✨ Surprise Pick: ${randomDish.name}!`);
    openDishDetailModal(randomDish);
  }

  // --- TOAST SYSTEM ---
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="sparkles" style="color:var(--primary); width:18px;height:18px;"></i> <span>${message}</span>`;
    elements.toastContainer.appendChild(toast);
    refreshLucideIcons();

    setTimeout(() => {
      toast.style.transition = 'all 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- DAILY MEAL PLANNER & MACROS ---
  function updateMealPlannerBadge() {
    if (!elements.plannerCountBadge) return;
    const plan = state.mealPlan || {};
    const count = Object.values(plan).filter(Boolean).length;
    elements.plannerCountBadge.textContent = count;
  }

  function openMealPlanner() {
    renderMealPlanner();
    elements.mealPlannerModal.classList.add('active');
  }

  function renderMealPlanner() {
    const plan = state.mealPlan || { breakfast: null, lunch: null, dinner: null, snack: null };
    
    let totalCals = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    let totalBudget = 0;

    const slots = ['breakfast', 'lunch', 'dinner', 'snack'];
    slots.forEach(slot => {
      const contentEl = document.getElementById(`slot${slot.charAt(0).toUpperCase() + slot.slice(1)}Content`);
      if (!contentEl) return;

      const dishId = plan[slot];
      const dish = dishId ? DISHES_DATA.find(d => d.id === dishId) : null;

      if (dish) {
        totalCals += dish.calories || 0;
        if (dish.macros) {
          totalProtein += dish.macros.protein || 0;
          totalCarbs += dish.macros.carbs || 0;
          totalFat += dish.macros.fat || 0;
        }
        totalBudget += dish.price || 0;

        contentEl.innerHTML = `
          <div class="planned-dish-card" style="display:flex; gap:10px; align-items:center;">
            <img src="${dish.image}" alt="${dish.name}" style="width:52px; height:52px; border-radius:var(--radius-sm); object-fit:cover;" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&auto=format&fit=crop&q=80'">
            <div style="flex:1;">
              <h4 style="font-size:0.95rem; margin-bottom:2px;">${dish.name}</h4>
              <div style="font-size:0.75rem; color:var(--text-muted);">${dish.cityName} • <strong style="color:var(--emerald-dark);">₹${dish.price}</strong> • ${dish.calories} kcal</div>
            </div>
            <button class="btn btn-secondary btn-icon" style="width:30px; height:30px;" title="Remove" data-remove-slot="${slot}">
              <i data-lucide="x" style="width:14px; height:14px; color:var(--ruby);"></i>
            </button>
          </div>
        `;
        contentEl.querySelector('[data-remove-slot]').addEventListener('click', () => {
          removeDishFromSlot(slot);
        });
      } else {
        contentEl.innerHTML = `
          <div style="text-align:center; padding:16px 8px; color:var(--text-muted); font-size:0.82rem; border:1px dashed var(--border-subtle); border-radius:var(--radius-sm);">
            <i data-lucide="plus-circle" style="width:20px; height:20px; color:var(--emerald); margin-bottom:4px; display:inline-block;"></i>
            <div>No dish assigned yet.</div>
            <button class="btn btn-secondary btn-sm" style="margin-top:8px; font-size:0.75rem; padding:4px 10px;" data-auto-pick="${slot}">Auto-Suggest Dish</button>
          </div>
        `;
        contentEl.querySelector('[data-auto-pick]').addEventListener('click', () => {
          autoSuggestSlot(slot);
        });
      }
    });

    if (elements.plannerTotalCals) elements.plannerTotalCals.innerHTML = `${totalCals} <small>kcal</small>`;
    if (elements.plannerProtein) elements.plannerProtein.textContent = `${totalProtein}g`;
    if (elements.plannerCarbs) elements.plannerCarbs.textContent = `${totalCarbs}g`;
    if (elements.plannerFat) elements.plannerFat.textContent = `${totalFat}g`;
    if (elements.plannerBudget) elements.plannerBudget.textContent = `₹${totalBudget}`;
    if (elements.plannerCalFill) {
      const pct = Math.min(100, Math.round((totalCals / 2000) * 100));
      elements.plannerCalFill.style.width = `${pct}%`;
    }

    updateMealPlannerBadge();
    refreshLucideIcons();
  }

  function addDishToMealPlan(dish, slot = 'lunch') {
    if (!state.mealPlan) state.mealPlan = { breakfast: null, lunch: null, dinner: null, snack: null };
    state.mealPlan[slot] = dish.id;
    localStorage.setItem('cravepulse_meal_plan', JSON.stringify(state.mealPlan));
    updateMealPlannerBadge();
    showToast(`Added "${dish.name}" to ${slot.toUpperCase()} plan! 📅`);
  }

  function removeDishFromSlot(slot) {
    if (state.mealPlan) {
      state.mealPlan[slot] = null;
      localStorage.setItem('cravepulse_meal_plan', JSON.stringify(state.mealPlan));
      renderMealPlanner();
    }
  }

  function autoSuggestSlot(slot) {
    const candidates = DISHES_DATA.filter(d => d.mealTimes && d.mealTimes.includes(slot));
    const pick = candidates.length > 0 ? candidates[Math.floor(Math.random() * candidates.length)] : DISHES_DATA[0];
    addDishToMealPlan(pick, slot);
    renderMealPlanner();
  }

  function clearMealPlan() {
    state.mealPlan = { breakfast: null, lunch: null, dinner: null, snack: null };
    localStorage.setItem('cravepulse_meal_plan', JSON.stringify(state.mealPlan));
    renderMealPlanner();
    showToast('Daily meal plan cleared.');
  }

  function exportMealPlanGrocery() {
    const plan = state.mealPlan || {};
    const allIngs = new Set();
    Object.values(plan).filter(Boolean).forEach(id => {
      const d = DISHES_DATA.find(x => x.id === id);
      if (d && d.ingredients) {
        d.ingredients.forEach(i => allIngs.add(i));
      }
    });

    if (allIngs.size === 0) {
      showToast('Add dishes to your Daily Meal Plan first to export grocery list!');
      return;
    }

    elements.mealPlannerModal.classList.remove('active');
    openGroceryList(Array.from(allIngs), 'Day Meal Plan Grocery List', 'Combined shopping ingredients for your full-day culinary plan');
  }

  // --- MYSTERY BLIND BOX ---
  function openBlindBoxModal() {
    elements.blindBoxStage.style.display = 'block';
    elements.blindBoxResultView.style.display = 'none';
    elements.blindBoxModal.classList.add('active');
  }

  function triggerBlindBoxUnbox() {
    const cube = elements.blindBoxCube;
    cube.style.animation = 'none';
    cube.style.transform = 'scale(1.2) rotateY(720deg)';
    cube.style.transition = 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
    playSound('success');

    setTimeout(() => {
      const pool = DISHES_DATA.filter(d => matchesFilter(d));
      const dish = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : DISHES_DATA[0];
      
      elements.blindBoxStage.style.display = 'none';
      const res = elements.blindBoxResultView;
      res.innerHTML = `
        <div style="background:var(--bg-card); padding:20px; border-radius:var(--radius-lg); border:2px solid var(--emerald); text-align:center;">
          <span class="badge badge-emerald" style="margin-bottom:8px;">🎁 UNBOXED DELICACY</span>
          <img src="${dish.image}" alt="${dish.name}" style="width:100%; height:180px; object-fit:cover; border-radius:var(--radius-md); margin:8px 0;" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&auto=format&fit=crop&q=80'">
          <h3 style="font-size:1.4rem;">${dish.name}</h3>
          <div style="color:var(--emerald-dark); font-weight:700; font-size:0.95rem; margin-bottom:8px;">₹${dish.price} • ${dish.cityName}, ${dish.country}</div>
          <p style="font-size:0.86rem; color:var(--text-secondary); margin-bottom:14px;">${dish.description}</p>
          <div style="display:flex; gap:10px; justify-content:center;">
            <button class="btn btn-primary btn-sm" id="blindBoxViewDetailBtn">View Story & Radar</button>
            <button class="btn btn-secondary btn-sm" id="blindBoxRetryBtn">Unbox Another</button>
          </div>
        </div>
      `;
      res.style.display = 'block';

      document.getElementById('blindBoxViewDetailBtn').addEventListener('click', () => {
        elements.blindBoxModal.classList.remove('active');
        openDishDetailModal(dish);
      });

      document.getElementById('blindBoxRetryBtn').addEventListener('click', openBlindBoxModal);
      refreshLucideIcons();
    }, 1100);
  }

  // --- CHEF COOK-ALONG GUIDED MODE ---
  function openCookAlongModal(dish) {
    state.activeCookDish = dish || state.activeModalDish || DISHES_DATA[0];
    state.currentCookStepIndex = 0;
    elements.cookDishTitle.textContent = state.activeCookDish.name;
    elements.cookAlongModal.classList.add('active');
    renderCookAlongStep();
  }

  function renderCookAlongStep() {
    const dish = state.activeCookDish;
    if (!dish) return;
    const steps = [
      { title: 'Aromatic Prep & Mise en Place', desc: 'Prepare and measure all whole spices, slice onions thinly, and rinse fresh ingredients thoroughly.', duration: 10 },
      { title: 'Sautéing & Base Creation', desc: 'Heat ghee/oil in a heavy-bottomed vessel, bloom whole spices until aromatic, and sauté aromatics to golden perfection.', duration: 15 },
      { title: 'Layering & Slow Dum Cooking', desc: 'Layer rice and protein, seal with dough or tight lid, and slow-cook on gentle dum heat until fragrant steam escapes.', duration: 25 },
      { title: 'Garnish & Plating', desc: 'Garnish with fresh mint, coriander, fried onions, and serve steaming hot with chilled raita.', duration: 5 }
    ];

    const cur = steps[state.currentCookStepIndex] || steps[0];
    elements.cookStepBadge.textContent = `STEP ${state.currentCookStepIndex + 1} OF ${steps.length}`;
    elements.cookStepName.textContent = cur.title;
    elements.cookStepDesc.textContent = cur.desc;
    state.cookTimerSeconds = cur.duration * 60;
    state.cookTimerTotalSeconds = cur.duration * 60;
    updateCookTimerUI();

    const grid = elements.cookIngredientsGrid;
    if (grid) {
      grid.innerHTML = '';
      (dish.ingredients || []).forEach(ing => {
        const item = document.createElement('div');
        item.className = 'ingredient-pill';
        item.textContent = `✓ ${ing} (${state.cookServingScale}x)`;
        grid.appendChild(item);
      });
    }
    refreshLucideIcons();
  }

  function updateCookTimerUI() {
    const mins = Math.floor(state.cookTimerSeconds / 60);
    const secs = state.cookTimerSeconds % 60;
    elements.cookTimerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // --- SOCIAL STORY CARD POSTER GENERATOR ---
  function openPosterModal(dish) {
    state.activePosterDish = dish || state.activeModalDish || DISHES_DATA[0];
    elements.posterModal.classList.add('active');
    renderStoryCanvas();
  }

  function renderStoryCanvas() {
    const canvas = elements.storyCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dish = state.activePosterDish;
    if (!dish) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    if (state.posterTheme === 'sunset') {
      grad.addColorStop(0, '#047857');
      grad.addColorStop(1, '#0f172a');
    } else if (state.posterTheme === 'emerald') {
      grad.addColorStop(0, '#be123c');
      grad.addColorStop(1, '#0f172a');
    } else {
      grad.addColorStop(0, '#101a15');
      grad.addColorStop(1, '#050907');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 24px Outfit, sans-serif';
    ctx.fillText('CRAVEPULSE', 40, 60);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px Outfit, sans-serif';
    ctx.fillText(dish.name, 40, 120);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '18px Plus Jakarta Sans, sans-serif';
    ctx.fillText(`${dish.cityName}, ${dish.country} • ₹${dish.price}`, 40, 160);

    const quote = elements.storyCaptionInput ? elements.storyCaptionInput.value : 'Pure culinary heaven! Must try.';
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'italic 20px Plus Jakarta Sans, sans-serif';
    ctx.fillText(`"${quote}"`, 40, 220);
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Theme toggle
    elements.themeToggleBtn.addEventListener('click', toggleTheme);

    // Language Dropdown Toggle
    if (elements.langToggleBtn) {
      elements.langToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (elements.langDropdown) {
          elements.langDropdown.classList.toggle('active');
        }
      });
    }

    // Language Option Selection
    document.querySelectorAll('.lang-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = btn.getAttribute('data-lang');
        applyLanguage(selectedLang, true);
      });
    });

    // Location Dropdown Toggle
    elements.locationDropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (elements.langDropdown) elements.langDropdown.classList.remove('active');
      elements.locationDropdown.classList.toggle('active');
      if (elements.locationDropdown.classList.contains('active')) {
        elements.citySearchInput.focus();
      }
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (elements.langSelectorWidget && !elements.langSelectorWidget.contains(e.target)) {
        if (elements.langDropdown) elements.langDropdown.classList.remove('active');
      }
      if (!elements.locationDropdownToggle.contains(e.target)) {
        elements.locationDropdown.classList.remove('active');
      }
      if (!e.target.closest('.search-box-container')) {
        elements.autocompleteBoard.classList.remove('active');
      }
    });

    // City search in dropdown
    elements.citySearchInput.addEventListener('input', (e) => {
      renderCitySelectorList(e.target.value);
    });

    // GPS Auto-detect in dropdown
    elements.autoDetectGpsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      detectUserLocation();
    });

    // Quick switch city button & City Modal
    elements.switchCityQuickBtn.addEventListener('click', openCityModal);
    if (elements.closeCityModalBtn) {
      elements.closeCityModalBtn.addEventListener('click', () => {
        elements.cityModal.classList.remove('active');
      });
    }
    if (elements.modalCitySearchInput) {
      elements.modalCitySearchInput.addEventListener('input', (e) => {
        renderCityModalGrid(e.target.value);
      });
    }
    if (elements.modalGpsBtn) {
      elements.modalGpsBtn.addEventListener('click', detectUserLocation);
    }
    if (elements.cityModal) {
      elements.cityModal.addEventListener('click', (e) => {
        if (e.target === elements.cityModal) elements.cityModal.classList.remove('active');
      });
    }

    // Veg / Non-Veg Quick Toggle Buttons (Hero & Toolbar)
    document.querySelectorAll('.veg-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const diet = btn.getAttribute('data-diet') || 'all';
        setDietFilter(diet);
      });
    });

    document.querySelectorAll('.toolbar-diet-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const diet = btn.getAttribute('data-diet') || 'all';
        // Toggle on/off if clicked again
        if (state.selectedDiet === diet) {
          setDietFilter('all');
        } else {
          setDietFilter(diet);
        }
      });
    });

    // Advanced Toolbar Events
    if (elements.sortSelect) {
      elements.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderAllGrids();
      });
    }

    if (elements.calorieRangeInput) {
      elements.calorieRangeInput.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        state.maxCalories = val;
        elements.calorieValueDisplay.textContent = val >= 1200 ? '1200+ kcal (All)' : `${val} kcal`;
        updateActiveFilterFeedback();
        renderAllGrids();
      });
    }

    if (elements.spiceFilterGroup) {
      elements.spiceFilterGroup.querySelectorAll('.spice-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          elements.spiceFilterGroup.querySelectorAll('.spice-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          state.selectedSpice = pill.getAttribute('data-spice');
          updateActiveFilterFeedback();
          renderAllGrids();
        });
      });
    }

    if (elements.resetFiltersBtn) {
      elements.resetFiltersBtn.addEventListener('click', () => {
        state.selectedMood = 'all';
        state.selectedDiet = 'all';
        state.selectedSpice = 'all';
        state.maxCalories = 1200;
        state.sortBy = 'trending';
        state.searchQuery = '';
        elements.globalSearchInput.value = '';
        elements.sortSelect.value = 'trending';
        elements.calorieRangeInput.value = 1200;
        elements.calorieValueDisplay.textContent = '1200 kcal';
        elements.spiceFilterGroup.querySelectorAll('.spice-pill').forEach(p => {
          p.classList.toggle('active', p.getAttribute('data-spice') === 'all');
        });
        renderMoodFilterChips();
        renderDietFilterPills();
        updateActiveFilterFeedback();
        renderAllGrids();
        showToast('All filters and sorts reset!');
      });
    }

    // Global Search & Autocomplete
    elements.globalSearchInput.addEventListener('input', (e) => {
      const q = e.target.value;
      state.searchQuery = q;
      renderAutocomplete(q);
      updateActiveFilterFeedback();
      renderAllGrids();
    });

    elements.globalSearchInput.addEventListener('focus', (e) => {
      if (e.target.value.trim()) {
        renderAutocomplete(e.target.value);
      }
    });

    elements.globalSearchInput.addEventListener('keydown', handleAutocompleteKeydown);

    elements.searchClearBtn.addEventListener('click', () => {
      elements.globalSearchInput.value = '';
      state.searchQuery = '';
      elements.autocompleteBoard.classList.remove('active');
      elements.searchClearBtn.classList.remove('active');
      updateActiveFilterFeedback();
      renderAllGrids();
    });

    elements.searchSubmitBtn.addEventListener('click', () => {
      elements.autocompleteBoard.classList.remove('active');
      state.searchQuery = elements.globalSearchInput.value;
      updateActiveFilterFeedback();
      renderAllGrids();
      document.getElementById('localSection').scrollIntoView({ behavior: 'smooth' });
    });

    if (elements.autocompleteSeeAllBtn) {
      elements.autocompleteSeeAllBtn.addEventListener('click', () => {
        elements.autocompleteBoard.classList.remove('active');
        state.searchQuery = elements.globalSearchInput.value;
        updateActiveFilterFeedback();
        renderAllGrids();
        document.getElementById('localSection').scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Trending Search Pills
    document.querySelectorAll('.trending-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const query = pill.getAttribute('data-query');
        elements.globalSearchInput.value = query;
        state.searchQuery = query;
        elements.searchClearBtn.classList.add('active');
        elements.autocompleteBoard.classList.remove('active');
        updateActiveFilterFeedback();
        renderAllGrids();
        document.getElementById('localSection').scrollIntoView({ behavior: 'smooth' });
        showToast(`Searching: "${query}"`);
      });
    });

    // Hero Featured Showcase Quick View
    const heroShowcaseQuickViewBtn = document.getElementById('heroShowcaseQuickViewBtn');
    const heroFeaturedCard = document.getElementById('heroFeaturedCard');
    if (heroShowcaseQuickViewBtn) {
      heroShowcaseQuickViewBtn.addEventListener('click', () => {
        const topDish = DISHES_DATA.find(d => d.id === 'biryani_hyd') || DISHES_DATA[0];
        openDishDetailModal(topDish);
      });
    }
    if (heroFeaturedCard) {
      heroFeaturedCard.addEventListener('click', (e) => {
        if (!e.target.closest('#heroShowcaseQuickViewBtn')) {
          const topDish = DISHES_DATA.find(d => d.id === 'biryani_hyd') || DISHES_DATA[0];
          openDishDetailModal(topDish);
        }
      });
    }

    // Wheel Triggers
    elements.heroSpinWheelBtn.addEventListener('click', openWheelModal);
    elements.headerSpinBtn.addEventListener('click', openWheelModal);
    elements.executeSpinBtn.addEventListener('click', executeSpin);
    elements.closeWheelModalBtn.addEventListener('click', () => {
      elements.wheelModal.classList.remove('active');
    });

    // Quiz Triggers
    if (elements.openQuizBtn) elements.openQuizBtn.addEventListener('click', openTasteQuiz);
    if (elements.heroQuizBtn) elements.heroQuizBtn.addEventListener('click', openTasteQuiz);
    if (elements.closeQuizModalBtn) {
      elements.closeQuizModalBtn.addEventListener('click', () => {
        elements.tasteQuizModal.classList.remove('active');
      });
    }

    // Battle Arena Triggers
    if (elements.openBattleNavBtn) elements.openBattleNavBtn.addEventListener('click', () => {
      elements.battleArenaModal.classList.add('active');
      renderBattleComparison();
    });
    if (elements.heroBattleBtn) elements.heroBattleBtn.addEventListener('click', () => {
      elements.battleArenaModal.classList.add('active');
      renderBattleComparison();
    });
    if (elements.closeBattleArenaBtn) {
      elements.closeBattleArenaBtn.addEventListener('click', () => {
        elements.battleArenaModal.classList.remove('active');
      });
    }

    // Food Trails Nav Trigger
    if (elements.openTrailsNavBtn) {
      elements.openTrailsNavBtn.addEventListener('click', () => {
        document.getElementById('foodTrailsSection').scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Passport Triggers
    if (elements.openPassportBtn) elements.openPassportBtn.addEventListener('click', openPassportModal);
    if (elements.closePassportModalBtn) {
      elements.closePassportModalBtn.addEventListener('click', () => {
        elements.passportModal.classList.remove('active');
      });
    }

    // Meal Planner Triggers
    if (elements.openPlannerNavBtn) elements.openPlannerNavBtn.addEventListener('click', openMealPlanner);
    if (elements.heroMealPlannerBtn) elements.heroMealPlannerBtn.addEventListener('click', openMealPlanner);
    if (elements.closeMealPlannerBtn) {
      elements.closeMealPlannerBtn.addEventListener('click', () => {
        elements.mealPlannerModal.classList.remove('active');
      });
    }
    if (elements.plannerClearBtn) elements.plannerClearBtn.addEventListener('click', clearMealPlan);
    if (elements.plannerExportGroceryBtn) elements.plannerExportGroceryBtn.addEventListener('click', exportMealPlanGrocery);
    if (elements.modalAddToPlannerBtn) {
      elements.modalAddToPlannerBtn.addEventListener('click', () => {
        if (state.activeModalDish) {
          addDishToMealPlan(state.activeModalDish, 'lunch');
        }
      });
    }

    // Mystery Blind Box Triggers
    if (elements.heroBlindBoxBtn) elements.heroBlindBoxBtn.addEventListener('click', openBlindBoxModal);
    if (elements.closeBlindBoxBtn) {
      elements.closeBlindBoxBtn.addEventListener('click', () => {
        elements.blindBoxModal.classList.remove('active');
      });
    }
    if (elements.unboxTriggerBtn) elements.unboxTriggerBtn.addEventListener('click', triggerBlindBoxUnbox);

    // Cook Along Triggers
    if (elements.modalCookAlongBtn) {
      elements.modalCookAlongBtn.addEventListener('click', () => {
        openCookAlongModal(state.activeModalDish);
      });
    }
    if (elements.modalCookAlongBtn2) {
      elements.modalCookAlongBtn2.addEventListener('click', () => {
        openCookAlongModal(state.activeModalDish);
      });
    }
    if (elements.closeCookAlongBtn) {
      elements.closeCookAlongBtn.addEventListener('click', () => {
        elements.cookAlongModal.classList.remove('active');
      });
    }

    // Story Card Poster Triggers
    if (elements.modalStoryPosterBtn) {
      elements.modalStoryPosterBtn.addEventListener('click', () => {
        openPosterModal(state.activeModalDish);
      });
    }
    if (elements.closePosterModalBtn) {
      elements.closePosterModalBtn.addEventListener('click', () => {
        elements.posterModal.classList.remove('active');
      });
    }
    if (elements.storyThemeSelect) {
      elements.storyThemeSelect.addEventListener('change', (e) => {
        state.posterTheme = e.target.value;
        renderStoryCanvas();
      });
    }
    if (elements.storyCaptionInput) {
      elements.storyCaptionInput.addEventListener('input', renderStoryCanvas);
    }

    // Grocery List Modal Controls
    if (elements.closeGroceryModalBtn) {
      elements.closeGroceryModalBtn.addEventListener('click', () => {
        elements.groceryModal.classList.remove('active');
      });
    }
    if (elements.copyGroceryListBtn) elements.copyGroceryListBtn.addEventListener('click', copyGroceryList);
    if (elements.printGroceryListBtn) elements.printGroceryListBtn.addEventListener('click', () => window.print());
    if (elements.drawerAllGroceryBtn) elements.drawerAllGroceryBtn.addEventListener('click', openCombinedFavoritesGroceryList);

    // Audio Narrator Button
    if (elements.modalAudioNarrateBtn) {
      elements.modalAudioNarrateBtn.addEventListener('click', toggleAudioNarration);
    }

    // Reviews Controls
    if (elements.toggleAddReviewBtn) {
      elements.toggleAddReviewBtn.addEventListener('click', () => {
        const isHidden = elements.addReviewCard.style.display === 'none';
        elements.addReviewCard.style.display = isHidden ? 'block' : 'none';
      });
    }
    if (elements.cancelReviewBtn) {
      elements.cancelReviewBtn.addEventListener('click', () => {
        elements.addReviewCard.style.display = 'none';
      });
    }
    if (elements.submitReviewBtn) {
      elements.submitReviewBtn.addEventListener('click', submitUserReview);
    }

    // Surprise Me Button
    elements.heroSurpriseMeBtn.addEventListener('click', triggerInstantSurprise);

    // Detail Modal Close
    elements.closeDetailModalBtn.addEventListener('click', closeDetailModal);
    elements.dishDetailModal.addEventListener('click', (e) => {
      if (e.target === elements.dishDetailModal) closeDetailModal();
    });

    // Quick Delivery Modal Close
    if (elements.closeDeliveryModalBtn) {
      elements.closeDeliveryModalBtn.addEventListener('click', closeDeliveryModal);
    }
    if (elements.deliveryModal) {
      elements.deliveryModal.addEventListener('click', (e) => {
        if (e.target === elements.deliveryModal) closeDeliveryModal();
      });
    }

    // Favorites Drawer
    elements.openFavoritesBtn.addEventListener('click', () => {
      renderFavoritesDrawer();
      elements.favoritesDrawerBackdrop.classList.add('active');
    });

    elements.closeFavoritesBtn.addEventListener('click', () => {
      elements.favoritesDrawerBackdrop.classList.remove('active');
    });

    elements.favoritesDrawerBackdrop.addEventListener('click', (e) => {
      if (e.target === elements.favoritesDrawerBackdrop) {
        elements.favoritesDrawerBackdrop.classList.remove('active');
      }
    });

    // Floating Quick-Action Menu (FAB)
    const fabMainBtn = document.getElementById('fabMainBtn');
    const fabContainer = document.getElementById('fabContainer');
    if (fabMainBtn && fabContainer) {
      fabMainBtn.addEventListener('click', () => {
        fabContainer.classList.toggle('active');
        playSound('pop');
      });
    }

    const fabBlindBoxBtn = document.getElementById('fabBlindBoxBtn');
    if (fabBlindBoxBtn) {
      fabBlindBoxBtn.addEventListener('click', () => {
        fabContainer.classList.remove('active');
        openBlindBoxModal();
      });
    }

    const fabPlannerBtn = document.getElementById('fabPlannerBtn');
    if (fabPlannerBtn) {
      fabPlannerBtn.addEventListener('click', () => {
        fabContainer.classList.remove('active');
        openMealPlanner();
      });
    }

    const fabSpinBtn = document.getElementById('fabSpinBtn');
    if (fabSpinBtn) {
      fabSpinBtn.addEventListener('click', () => {
        fabContainer.classList.remove('active');
        openWheelModal();
      });
    }

    const fabQuizBtn = document.getElementById('fabQuizBtn');
    if (fabQuizBtn) {
      fabQuizBtn.addEventListener('click', () => {
        fabContainer.classList.remove('active');
        openTasteQuiz();
      });
    }

    const fabBattleBtn = document.getElementById('fabBattleBtn');
    if (fabBattleBtn) {
      fabBattleBtn.addEventListener('click', () => {
        fabContainer.classList.remove('active');
        elements.battleArenaModal.classList.add('active');
        renderBattleComparison();
      });
    }

    const fabTrailsBtn = document.getElementById('fabTrailsBtn');
    if (fabTrailsBtn) {
      fabTrailsBtn.addEventListener('click', () => {
        fabContainer.classList.remove('active');
        document.getElementById('foodTrailsSection').scrollIntoView({ behavior: 'smooth' });
      });
    }

    const fabPassportBtn = document.getElementById('fabPassportBtn');
    if (fabPassportBtn) {
      fabPassportBtn.addEventListener('click', () => {
        fabContainer.classList.remove('active');
        openPassportModal();
      });
    }

    const fabTopBtn = document.getElementById('fabTopBtn');
    if (fabTopBtn) {
      fabTopBtn.addEventListener('click', () => {
        fabContainer.classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Footer Quick Links
    document.querySelectorAll('.city-quick-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cityId = link.getAttribute('data-city');
        setCity(cityId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    document.querySelectorAll('.mood-quick-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const moodId = link.getAttribute('data-mood');
        state.selectedMood = moodId;
        renderMoodFilterChips();
        updateActiveFilterFeedback();
        renderAllGrids();
        document.getElementById('smartSuggestionsSection').scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Brand logo scroll to top
    document.getElementById('brandHomeBtn').addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Global Keyboard Shortcuts (Ctrl+K or Cmd+K to search, Esc to close)
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        elements.globalSearchInput.focus();
        elements.globalSearchInput.select();
      }

      if (e.key === 'Escape') {
        closeDetailModal();
        closeDeliveryModal();
        elements.wheelModal.classList.remove('active');
        elements.favoritesDrawerBackdrop.classList.remove('active');
        elements.locationDropdown.classList.remove('active');
        if (elements.cityModal) elements.cityModal.classList.remove('active');
        if (elements.tasteQuizModal) elements.tasteQuizModal.classList.remove('active');
        if (elements.battleArenaModal) elements.battleArenaModal.classList.remove('active');
        if (elements.passportModal) elements.passportModal.classList.remove('active');
        if (elements.groceryModal) elements.groceryModal.classList.remove('active');
        if (elements.mealPlannerModal) elements.mealPlannerModal.classList.remove('active');
        if (elements.blindBoxModal) elements.blindBoxModal.classList.remove('active');
        if (elements.cookAlongModal) {
          elements.cookAlongModal.classList.remove('active');
          clearInterval(state.cookTimerInterval);
        }
        if (elements.posterModal) elements.posterModal.classList.remove('active');
        if (fabContainer) fabContainer.classList.remove('active');
        elements.autocompleteBoard.classList.remove('active');
      }
    });
  }

  // --- LUCIDE ICON HELPER ---
  function refreshLucideIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // Run on DOM loaded
  document.addEventListener('DOMContentLoaded', init);

})();


