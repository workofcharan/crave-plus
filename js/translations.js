/**
 * CravePulse Multilingual Translation System
 * Supported Languages: English (en), Telugu (te), Hindi (hi)
 * High-fidelity, full-coverage localization for UI, Dishes, Cities, Cuisines, and Features.
 */

const TRANSLATIONS = {
  en: {
    // --- Brand & Navigation ---
    brand_name: "CravePulse",
    brand_tagline: "Discover Famous Dishes & What to Eat Near You",
    exploring_in: "Exploring Food In",
    select_capital: "Select Food Capital",
    detect_location: "Detect My Location",
    meal_plan: "Meal Plan",
    taste_quiz: "Taste Quiz",
    food_trails: "Food Trails",
    battle_arena: "Battle Arena",
    passport: "Passport",
    saved: "Saved",
    spin_wheel: "Spin Wheel",
    select_language: "Select Language",
    change_language_title: "Change Language",

    // --- Hero Section ---
    hero_title_prefix: "Craving Something",
    hero_title_highlight: "Legendary?",
    hero_subtitle: "Discover iconic culinary masterpieces in {city} and across global food capitals. Handpicked flavor journeys matched to your cravings, mood, and appetite.",
    stat_masterpieces: "70+ Masterpieces",
    stat_capitals: "21+ Food Capitals",
    stat_trails: "4 Epic Trails",
    stat_authentic: "100% Authentic",
    search_placeholder: "Search dish, cuisine, city or ingredient (e.g., Biryani, Dosa, Tacos)...",
    search_explore: "Explore",
    trending: "Trending:",
    mystery_box: "Mystery Blind Box 🎁",
    daily_meal_plan: "Daily Meal Plan",
    surprise_pick: "Surprise Pick",
    chef_pick: "CHEF'S TOP RECOMMENDATION",
    avg_plate: "avg plate",
    smart_flavor_suggestions: "Smart Flavor Suggestions",
    autocomplete_hint: "Use ↑ ↓ to navigate, Enter to select",
    autocomplete_start: "Start typing to see matching dishes & categories",
    autocomplete_view_all: "View all results →",

    // --- Time-based Greetings ---
    good_morning: "Good Morning • Breakfast Delights",
    good_afternoon: "Good Afternoon • Chef's Lunch Selection",
    good_evening: "Good Evening • Master Dinner Plates",
    golden_hour: "Golden Hour • High Tea & Street Snacks",
    late_night: "Midnight Cravings • Late Night Bites",

    // --- Filters & Toolbar ---
    all_diets: "All Diets",
    all_foods: "All Dishes",
    pure_veg: "Pure Veg 🟢",
    veg: "Vegetarian 🟢",
    non_veg: "Non-Veg 🔴",
    vegan: "Vegan 🌿",
    halal: "Halal 🌙",
    gluten_free: "Gluten-Free 🌾",
    high_protein: "High-Protein 💪",
    mood_heading: "What are you in the mood for?",
    showing_all_cravings: "Showing: All Cravings",
    showing_mood: "Showing: {mood}",
    sort_by: "Sort By:",
    sort_trending: "🔥 Trending Hotness",
    sort_rating: "★ Highest Rating",
    sort_price_asc: "₹ Price: Low to High",
    sort_price_desc: "₹ Price: High to Low",
    sort_calories: "🥗 Lowest Calories",
    sort_prep: "⚡ Quickest Prep Time",
    max_calories: "Max Calories:",
    spice: "Spice:",
    spice_all: "All",
    spice_zero: "Zero 🟢",
    spice_mild: "Mild 🔥",
    spice_medium: "Medium 🔥🔥",
    spice_hot: "Hot 🔥🔥🔥",
    spice_fiery: "Fiery 🔥🔥🔥🔥",
    reset_filters: "Reset Filters",
    showing_all_delicacies: "Showing All Delicacies",
    matching_delicacies: "Matching {count} Delicacies",

    // --- Mood Categories ---
    mood_all: "All Flavors",
    mood_comfort: "Soul Comfort",
    mood_spicy: "Fiery & Spicy",
    mood_street_food: "Street Food",
    mood_sweet: "Sweet Indulgence",
    mood_cheesy: "Rich & Cheesy",
    mood_quick: "Quick Bites",
    mood_healthy: "Healthy & Fresh",
    mood_date_night: "Date Night Plates",

    // --- Sections ---
    famous_in: "Famous in",
    famous_subtitle: "Must-try heritage delicacies and legendary street foods loved by locals.",
    change_city: "Change City",
    curated_suggestions: "Curated Suggestions For You",
    curated_subtitle: "Personalized based on your active craving filters and current time of day.",
    food_trails_title: "Curated Culinary Food Trails",
    food_trails_subtitle: "Epicurean day crawls crafted with iconic stops, secret spots, and authentic food culture.",
    world_famous: "World Famous Culinary Icons",
    world_famous_subtitle: "Masterpieces from legendary gastronomic capitals around the globe.",

    // --- Dish Cards ---
    view_dish: "View Dish",
    view_story: "View Story",
    tasted_badge: "Tasted",
    hot_badge: "Hot",
    special_badge: "{city} Special",
    global_icon_badge: "Global Icon",
    order_quick_btn: "Order",

    // --- Dish Detail Modal ---
    listen_story: "Listen Story",
    narrating_story: "Narrating...",
    tasted_btn: "I've Tasted This",
    tasted_btn_active: "✓ Tasted",
    origin_city: "Origin City",
    category_time: "Category / Time",
    approx_price: "Approx. Price",
    spice_level_label: "Spice Level",
    est_calories: "Est. Calories",
    macro_balance: "Macro Balance",
    secret_hack: "Secret Foodie Insider Hack",
    story_heritage: "The Story & Heritage",
    ingredients: "Core Ingredients",
    chef_cook_along: "Chef Cook-Along",
    grocery_list: "Grocery List",
    live_radar: "Live Eatery Radar",
    live_scan: "● Live Scan",
    how_crafted: "How It's Crafted",
    start_cooking_mode: "Start Cooking Mode",
    reviews: "Foodie Tasting Notes & Reviews",
    add_note: "Add Tasting Note",
    post_note: "Post Note",
    cancel: "Cancel",
    your_name_placeholder: "Your name (e.g., Gourmet Explorer)",
    review_placeholder: "Write your tasting notes, flavor impressions, or restaurant tips...",
    open_now: "Open Now",
    directions: "Directions",

    // --- Modal Bottom Actions ---
    find_near_me: "Google Maps",
    add_to_plan: "Add to Plan",
    story_card: "Story Card",
    compare: "Compare",
    watch: "Watch",
    save: "Save",
    saved_btn: "Saved",

    // --- Food Delivery Section & Modal ---
    order_online_title: "Craving This Now? Order on Delivery Apps",
    order_online_desc: "Get this authentic delicacy prepared fresh and delivered directly to your doorstep:",
    order_online_live: "Order Online",
    order_swiggy: "Order on Swiggy",
    order_zomato: "Order on Zomato",
    fast_delivery: "25-35 Mins",
    delivering_in: "Delivering in {city}",
    select_delivery_app: "Select Food Delivery App",
    select_delivery_sub: "We will open the delivery app pre-searched for this dish in your current location:",
    deliver_with: "Deliver with",
    order_now: "Order Now",
    swiggy_desc: "Order fresh from top-rated restaurants & cloud kitchens with live GPS tracking.",
    zomato_desc: "Explore menus, foodie photos, verified ratings and get fast doorstep delivery.",
    delivery_location_hint: "📍 Current Delivery Location: <strong>{city}</strong>",
    delivery_accuracy_hint: "Queries are automatically localized for maximum accuracy",
    find_on_maps: "Find on Google Maps",
    full_story_recipe: "Full Story & Recipe",

    // --- AI Taste Matcher Quiz ---
    quiz_title: "AI Taste Matcher Quiz",
    quiz_subtitle: "Answer 4 quick flavor questions to uncover your tailored culinary soulmate!",
    quiz_step_indicator: "Step {step} of 4: {key}",
    quiz_analyzing_title: "Analyzing Your Flavor DNA...",
    quiz_analyzing_sub: "Matching your palate against 70+ culinary treasures worldwide.",
    quiz_winner_badge: "✨ 99% Palate Match Found!",
    quiz_soulmate_title: "Your Culinary Soulmate is:",
    quiz_match_score: "Flavor Harmony Score: {score}%",
    quiz_start_over: "Take Quiz Again",

    // --- Dish Battle Arena ---
    battle_title: "Dish vs Dish Battle Arena",
    battle_subtitle: "Head-to-head nutritional, taste, spice & culinary duel with community voting!",
    quick_showdowns: "Quick Showdowns:",
    contender_1: "Contender 1:",
    contender_2: "Contender 2:",
    vs_text: "VS",
    battle_winner: "🏆 Community Favorite",
    battle_taste_duel: "Taste & Flavor Duel",
    battle_metrics: "Key Metrics Comparison",
    vote_for: "Vote for {name}",
    voted: "✓ Voted",
    votes_count: "{count} votes",

    // --- Gastronomy Passport ---
    passport_title: "Gastronomy Passport",
    passport_subtitle: "Official Culinary Connoisseur Log & Milestone Badges",
    passport_level_explorer: "Foodie Explorer",
    passport_level_connoisseur: "Epicurean Connoisseur",
    passport_level_master: "Grand Master Gastronome",
    dishes_tasted_stat: "Dishes Tasted",
    cities_unlocked_stat: "Cities Unlocked",
    badges_earned_stat: "Badges Earned",
    city_visas_title: "City Visas & Culinary Stamps",
    milestones_title: "Culinary Milestones",
    tasted_log_title: "Tasted Delicacy Log",
    no_dishes_tasted_yet: "No dishes checked off yet. Explore and click 'I've Tasted This' on dish cards!",
    unlocked_on: "Unlocked",

    // --- Smart Grocery List ---
    grocery_modal_title: "Smart Grocery Checklist",
    grocery_modal_sub: "Organized ingredient checklist for preparing this delicacy at home.",
    copy_grocery_list: "Copy Shopping List",
    print_list: "Print List",
    grocery_copied_toast: "Shopping list copied to clipboard! 📋",
    items_count: "{count} Items",

    // --- Spin The Wheel ---
    roulette_title: "Flavor Roulette",
    roulette_subtitle: "Can't decide what to eat? Spin the wheel for a delicious destiny!",
    spin_prompt: "Can't decide what to eat? Spin the wheel for a delicious destiny!",
    spin_button: "SPIN THE WHEEL",
    destiny_pick: "🎉 Your Destiny Pick",
    spin_winner_congrats: "The culinary stars have aligned for you!",

    // --- Daily Meal Planner ---
    planner_title: "Daily Crave Meal Planner",
    planner_subtitle: "Craft your personalized full-day culinary itinerary with real-time calorie & macro tracking.",
    clear_day: "Clear Day",
    export_day_grocery: "Export Day Grocery",
    total_calories: "Total Calories",
    cal_target: "Target: 2,000 kcal",
    protein: "Protein",
    protein_sub: "Muscle Building",
    carbohydrates: "Carbohydrates",
    carbs_sub: "Daily Energy",
    healthy_fats: "Healthy Fats",
    fats_sub: "Flavor & Lipids",
    estimated_budget: "Estimated Budget",
    budget_sub: "Day Total",
    slot_breakfast: "1. Breakfast",
    slot_lunch: "2. Lunch",
    slot_dinner: "3. Dinner",
    slot_snack: "4. Tea Time & Sweet Treat",
    time_breakfast: "07:00 – 10:30 AM",
    time_lunch: "12:30 – 03:30 PM",
    time_dinner: "07:30 – 10:30 PM",
    time_snack: "Anytime Cravings",
    empty_slot_prompt: "No dish planned yet",
    auto_pick: "Surprise Me",
    remove_slot: "Remove",

    // --- Mystery Blind Box ---
    blindbox_badge: "Gourmet Blind Box",
    blindbox_title: "Mystery Delicacy Unboxing",
    blindbox_subtitle: "Feeling adventurous? Tap the mystery cube to reveal a surprise handpicked master plate tailored to your palate!",
    unbox_btn: "TAP TO UNBOX DELICACY",
    unboxed_success: "🎉 You Unboxed a Culinary Treasure!",

    // --- Chef Cook-Along ---
    cook_session_tag: "Guided Culinary Session",
    servings: "SERVINGS:",
    ready: "Ready",
    running: "In Progress",
    paused: "Paused",
    step_timer_start: "Start Step Timer",
    step_timer_pause: "Pause Timer",
    step_timer_reset: "Reset",
    next_step: "Next Step",
    finish_cooking: "Finish & Feast 🎉",
    step_n_of_m: "STEP {step} OF {total}",
    scaled_ingredients: "Scaled Ingredients Checklist",

    // --- Story Card Generator ---
    poster_title: "Foodie Story Card Generator",
    poster_subtitle: "Generate high-resolution, branded 9:16 Instagram Story posters with 1-click download!",
    card_theme: "Card Theme:",
    custom_quote: "Custom Foodie Quote:",
    download_story: "Download 9:16 PNG Image",
    copy_story_image: "Copy Image",

    // --- City Selector Modal ---
    select_capital_title: "Select Your Food Capital",
    select_capital_subtitle: "Choose your city to discover authentic regional specialties and street favorites.",
    search_city_placeholder: "Search any city or country (e.g., Hyderabad, Tokyo, Rome)...",
    use_gps: "Use GPS",
    global_hubs: "Global Culinary Hubs",
    currently_selected_city: "Currently: {city}, {country}",

    // --- Favorites Drawer ---
    saved_dishes_title: "Your Saved Dishes",
    saved_items_summary: "{count} items saved",
    combined_grocery_btn: "Combined Grocery List",
    no_saved_dishes: "No dishes saved yet. Click the heart icon on any dish card to bookmark your cravings!",

    // --- Footer & FAB ---
    footer_tagline: "Your ultimate culinary companion. Uncovering the world's most mouth-watering dishes, iconic street foods, and regional treasures wherever your tastebuds take you.",
    popular_hubs_title: "Popular Food Hubs",
    cravings_categories_title: "Cravings & Categories",
    copyright: "© 2026 CravePulse. Crafted with ❤️ for food lovers worldwide.",
    back_to_top: "Scroll Top",

    // --- Meal Categories ---
    cat_breakfast: "Breakfast",
    cat_lunch: "Lunch",
    cat_dinner: "Dinner",
    cat_snack: "Snack & Street Food",
    cat_dessert: "Dessert & Sweet",

    // --- Taste Profiles ---
    taste_savory: "Savory",
    taste_aromatic: "Aromatic",
    taste_spicy: "Spicy",
    taste_rich: "Rich",
    taste_sweet: "Sweet",
    taste_creamy: "Creamy",
    taste_crispy: "Crispy",
    taste_tangy: "Tangy",
    taste_nutty: "Nutty",
    taste_buttery: "Buttery",
    taste_smoky: "Smoky",
    taste_herbal: "Herbal",
    taste_tender: "Tender",
    taste_hearty: "Hearty",
    taste_fluffy: "Fluffy",
    taste_fresh: "Fresh",
    taste_umami: "Umami",
    taste_sour: "Sour",
    taste_crunchy: "Crunchy",
    taste_cheesy: "Cheesy",

    // --- Language Change Toast ---
    lang_changed_toast: "Language set to English"
  },

  te: {
    // --- Brand & Navigation ---
    brand_name: "క్రేవ్ పల్స్",
    brand_tagline: "ప్రసిద్ధ వంటకాలు మరియు మీ దగ్గర ఏం తినాలో కనుగొనండి",
    exploring_in: "ఆహార నగరం",
    select_capital: "నగరాన్ని ఎంచుకోండి",
    detect_location: "నా లొకేషన్ కనుగొను",
    meal_plan: "మీల్ ప్లాన్",
    taste_quiz: "రుచి క్విజ్",
    food_trails: "ఫుడ్ ట్రయల్స్",
    battle_arena: "పోటీ అరేనా",
    passport: "పాస్‌పోర్ట్",
    saved: "సేవ్ చేసినవి",
    spin_wheel: "చక్రం తిప్పండి",
    select_language: "భాషను ఎంచుకోండి",
    change_language_title: "భాషను మార్చండి",

    // --- Hero Section ---
    hero_title_prefix: "మీకు ఇష్టమైన",
    hero_title_highlight: "రుచులు కావాలా?",
    hero_subtitle: "{city} మరియు ప్రపంచవ్యాప్తంగా ఉన్న అత్యంత ప్రసిద్ధ, నోరూరించే వంటకాలను అన్వేషించండి. మీ అభిరుచికి మరియు సమయానికి సరిపోయే రుచికరమైన సూచనలు.",
    stat_masterpieces: "70+ అద్భుత వంటకాలు",
    stat_capitals: "21+ ప్రసిద్ధ నగరాలు",
    stat_trails: "4 ఫుడ్ దారులు",
    stat_authentic: "100% సహజసిద్ధమైనవి",
    search_placeholder: "వంటకం, నగరం లేదా దినుసులను వెతకండి (ఉదా. బిర్యానీ, దోశ, టాకోస్)...",
    search_explore: "వెతుకు",
    trending: "ట్రెండింగ్:",
    mystery_box: "మిస్టరీ బాక్స్ 🎁",
    daily_meal_plan: "రోజువారీ భోజన ప్రణాళిక",
    surprise_pick: "సర్‌ప్రైజ్ వంటకం",
    chef_pick: "చెఫ్ ప్రత్యేక ఎంపిక",
    avg_plate: "ప్లేట్‌కు సగటు ధర",
    smart_flavor_suggestions: "రుచికరమైన సూచనలు",
    autocomplete_hint: "ఎంచుకోవడానికి ↑ ↓ మరియు Enter నొక్కండి",
    autocomplete_start: "వంటకాలు మరియు వర్గాలను చూడటానికి టైప్ చేయండి",
    autocomplete_view_all: "అన్ని ఫలితాలను చూడండి →",

    // --- Time-based Greetings ---
    good_morning: "శుభోదయం • ఉదయం అల్పాహారం",
    good_afternoon: "శుభ మధ్యాహ్నం • చెఫ్ లంచ్ స్పెషల్స్",
    good_evening: "శుభ సాయంత్రం • రాత్రి విందు రుచులు",
    golden_hour: "సాయంత్రం టీ & స్నాక్స్ సమయం",
    late_night: "అర్ధరాత్రి క్రేవింగ్స్ & రుచులు",

    // --- Filters & Toolbar ---
    all_diets: "అన్ని రకాలు",
    all_foods: "అన్ని వంటకాలు",
    pure_veg: "ప్యూర్ శాకాహారం 🟢",
    veg: "శాకాహారం 🟢",
    non_veg: "మాంసాహారం 🔴",
    vegan: "వీగన్ 🌿",
    halal: "హలాల్ 🌙",
    gluten_free: "గ్లూటెన్ రహితం 🌾",
    high_protein: "హై ప్రోటీన్ 💪",
    mood_heading: "ఈరోజు మీరు ఏ రుచిని ఆస్వాదించాలనుకుంటున్నారు?",
    showing_all_cravings: "చూపిస్తున్నవి: అన్ని రుచులు",
    showing_mood: "చూపిస్తున్నవి: {mood}",
    sort_by: "క్రమబద్ధీకరించు:",
    sort_trending: "🔥 అత్యంత జనాదరణ",
    sort_rating: "★ అత్యధిక రేటింగ్",
    sort_price_asc: "₹ ధర: తక్కువ నుండి ఎక్కువ",
    sort_price_desc: "₹ ధర: ఎక్కువ నుండి తక్కువ",
    sort_calories: "🥗 తక్కువ కేలరీలు",
    sort_prep: "⚡ త్వరగా తయారయ్యేవి",
    max_calories: "గరిష్ట కేలరీలు:",
    spice: "కారం స్థాయి:",
    spice_all: "అన్నీ",
    spice_zero: "కారం లేదు 🟢",
    spice_mild: "తక్కువ 🔥",
    spice_medium: "మధ్యస్థం 🔥🔥",
    spice_hot: "ఎక్కువ 🔥🔥🔥",
    spice_fiery: "చాలా ఘాటు 🔥🔥🔥🔥",
    reset_filters: "ఫిల్టర్లు రీసెట్ చేయండి",
    showing_all_delicacies: "అన్ని వంటకాలను చూపిస్తున్నాము",
    matching_delicacies: "{count} వంటకాలు సరిపోలాయి",

    // --- Mood Categories ---
    mood_all: "అన్ని రుచులు",
    mood_comfort: "సాంప్రదాయ రుచులు",
    mood_spicy: "కారంగా & ఘాటుగా",
    mood_street_food: "స్ట్రీట్ ఫుడ్",
    mood_sweet: "తీపి పదార్థాలు",
    mood_cheesy: "చీజ్ & వెన్న రుచులు",
    mood_quick: "త్వరిత స్నాక్స్",
    mood_healthy: "ఆరోగ్యకరమైనవి",
    mood_date_night: "స్పెషల్ డిన్నర్",

    // --- Sections ---
    famous_in: "లో ప్రసిద్ధి చెందినవి:",
    famous_subtitle: "స్థానిక ప్రజలు అమితంగా ఇష్టపడే సాంప్రదాయ మరియు వీధి వంటకాలు.",
    change_city: "నగరం మార్చండి",
    curated_suggestions: "మీ కోసం ప్రత్యేక సూచనలు",
    curated_subtitle: "మీ అభిరుచి మరియు ప్రస్తుత సమయానికి అనుగుణంగా ఎంపిక చేయబడినవి.",
    food_trails_title: "ప్రత్యేకమైన ఆహార యాత్రా మార్గాలు",
    food_trails_subtitle: "ప్రసిద్ధ స్టాప్‌లు, సీక్రెట్ స్పాట్‌లు మరియు సంస్కృతితో కూడిన ఫుడ్ క్రాల్స్.",
    world_famous: "ప్రపంచ ప్రఖ్యాత వంటకాలు",
    world_famous_subtitle: "ప్రపంచంలోని ప్రసిద్ధ ఆహార నగరాల నుండి అద్భుతమైన వంటకాలు.",

    // --- Dish Cards ---
    view_dish: "వంటకం వివరాలు",
    view_story: "కథ చూడండి",
    tasted_badge: "రుచి చూశారు",
    hot_badge: "హాట్",
    special_badge: "{city} స్పెషల్",
    global_icon_badge: "గ్లోబల్ ఐకాన్",
    order_quick_btn: "ఆర్డర్ 🛵",

    // --- Dish Detail Modal ---
    listen_story: "కథ వినండి",
    narrating_story: "వివరిస్తోంది...",
    tasted_btn: "నేను రుచి చూశాను",
    tasted_btn_active: "✓ రుచి చూశాను",
    origin_city: "పుట్టిన నగరం",
    category_time: "వర్గం / సమయం",
    approx_price: "సుమారు ధర",
    spice_level_label: "కారం స్థాయి",
    est_calories: "కేలరీలు",
    macro_balance: "పోషకాల సమతుల్యత",
    secret_hack: "రుచికరమైన సీక్రెట్ టిప్",
    story_heritage: "చరిత్ర & విశేషాలు",
    ingredients: "ముఖ్యమైన దినుసులు",
    chef_cook_along: "చెఫ్ కుకింగ్ గైడ్",
    grocery_list: "సామగ్రి జాబితా",
    live_radar: "ప్రసిద్ధ రెస్టారెంట్ రాడార్",
    live_scan: "● లైవ్ స్కాన్",
    how_crafted: "తయారీ విధానం",
    start_cooking_mode: "వంట మోడ్ ప్రారంభించండి",
    reviews: "రుచి సమీక్షలు & నోట్స్",
    add_note: "నోట్ రాయండి",
    post_note: "పోస్ట్ చేయండి",
    cancel: "రద్దు చేయండి",
    your_name_placeholder: "మీ పేరు (ఉదా. ఆహార ప్రియుడు)",
    review_placeholder: "మీ రుచి అనుభవం లేదా రెస్టారెంట్ చిట్కాలను రాయండి...",
    open_now: "ఇప్పుడు తెరిచి ఉంది",
    directions: "దారి చూపించు",

    // --- Modal Bottom Actions ---
    find_near_me: "గూగుల్ మ్యాప్స్",
    add_to_plan: "ప్లాన్‌లో చేర్చండి",
    story_card: "స్టోరీ కార్డ్",
    compare: "పోల్చండి",
    watch: "వీడియో చూడండి",
    save: "సేవ్ చేయండి",
    saved_btn: "సేవ్ అయింది",

    // --- Food Delivery Section & Modal ---
    order_online_title: "తినాలని ఉందా? ఆన్‌లైన్‌లో ఆర్డర్ చేయండి",
    order_online_desc: "ఈ వంటకాన్ని స్విగ్గీ లేదా జొమాటో డెలివరీ యాప్స్ ద్వారా వెంటనే ఆర్డర్ చేయండి:",
    order_online_live: "ఆన్‌లైన్ ఆర్డర్",
    order_swiggy: "Swiggy లో ఆర్డర్ చేయండి",
    order_zomato: "Zomato లో ఆర్డర్ చేయండి",
    fast_delivery: "25-35 నిమిషాలు",
    delivering_in: "{city} లో డెలివరీ అందుబాటులో ఉంది",
    select_delivery_app: "డెలివరీ యాప్‌ను ఎంచుకోండి",
    select_delivery_sub: "మీ లొకేషన్‌లో ఈ వంటకం కోసం డెలివరీ యాప్ తెరవబడుతుంది:",
    deliver_with: "డెలివరీ పార్ట్‌నర్",
    order_now: "ఇప్పుడే ఆర్డర్ చేయండి",
    swiggy_desc: "లైవ్ GPS ట్రాకింగ్‌తో టాప్ రెస్టారెంట్ల నుండి తాజా ఆహారాన్ని ఆర్డర్ చేయండి.",
    zomato_desc: "మెనూలు, ఫోటోలు, రేటింగ్‌లు చూసి వేగవంతమైన డెలివరీని పొందండి.",
    delivery_location_hint: "📍 ప్రస్తుత డెలివరీ నగరం: <strong>{city}</strong>",
    delivery_accuracy_hint: "ఖచ్చితమైన ఫలితాల కోసం లొకేషన్ ఆధారంగా శోధించబడుతుంది",
    find_on_maps: "గూగుల్ మ్యాప్స్‌లో చూడండి",
    full_story_recipe: "పూర్తి కథ & తయారీ విధానం",

    // --- AI Taste Matcher Quiz ---
    quiz_title: "AI రుచి క్విజ్",
    quiz_subtitle: "మీకు నచ్చిన ఆహారాన్ని కనుగొనడానికి 4 చిన్న ప్రశ్నలకు సమాధానం ఇవ్వండి!",
    quiz_step_indicator: "దశ {step} / 4: {key}",
    quiz_analyzing_title: "మీ రుచి ప్రాధాన్యతలను విశ్లేషిస్తున్నాము...",
    quiz_analyzing_sub: "ప్రపంచంలోని 70+ అద్భుత వంటకాలతో సరిపోలుస్తున్నాము.",
    quiz_winner_badge: "✨ 99% సరిపోలే వంటకం దొరికింది!",
    quiz_soulmate_title: "మీకు అత్యంత ఇష్టమైన వంటకం:",
    quiz_match_score: "రుచి సరిపోలే స్కోరు: {score}%",
    quiz_start_over: "క్విజ్ మళ్లీ ప్రారంభించండి",

    // --- Dish Battle Arena ---
    battle_title: "వంటకాల పోటీ అరేనా",
    battle_subtitle: "రెండు వంటకాల పోషకాలు, రుచి మరియు స్పైస్ పోలిక & ఓటింగ్!",
    quick_showdowns: "త్వరిత పోటీలు:",
    contender_1: "పోటీదారు 1:",
    contender_2: "పోటీదారు 2:",
    vs_text: "పోటీ",
    battle_winner: "🏆 జనాదరణ పొందిన విజేత",
    battle_taste_duel: "రుచి & స్పైస్ పోలిక",
    battle_metrics: "ముఖ్యమైన వివరాల పోలిక",
    vote_for: "{name} కు ఓటు వేయండి",
    voted: "✓ ఓటు వేశారు",
    votes_count: "{count} ఓట్లు",

    // --- Gastronomy Passport ---
    passport_title: "ఆహార పాస్‌పోర్ట్",
    passport_subtitle: "మీ ఆహార యాత్రల అధికారిక రికార్డు & మైలురాళ్ల బ్యాడ్జీలు",
    passport_level_explorer: "ఆహార అన్వేషకుడు",
    passport_level_connoisseur: "రుచి నిపుణుడు",
    passport_level_master: "గ్రాండ్ మాస్టర్ గౌర్మెట్",
    dishes_tasted_stat: "రుచి చూసిన వంటకాలు",
    cities_unlocked_stat: "అన్‌లాక్ చేసిన నగరాలు",
    badges_earned_stat: "సాధించిన బ్యాడ్జీలు",
    city_visas_title: "నగర వీసాలు & స్టాంపులు",
    milestones_title: "సాధించిన మైలురాళ్లు",
    tasted_log_title: "రుచి చూసిన వంటకాల జాబితా",
    no_dishes_tasted_yet: "ఇంకా ఏ వంటకాన్ని రుచి చూడలేదు. వంటకం కార్డుపై 'నేను రుచి చూశాను' క్లిక్ చేయండి!",
    unlocked_on: "అన్‌లాక్ చేయబడింది",

    // --- Smart Grocery List ---
    grocery_modal_title: "స్మార్ట్ కిరాణా జాబితా",
    grocery_modal_sub: "ఈ వంటకాన్ని ఇంట్లోనే తయారు చేసుకోవడానికి అవసరమైన దినుసుల జాబితా.",
    copy_grocery_list: "జాబితాను కాపీ చేయండి",
    print_list: "ప్రింట్ చేయండి",
    grocery_copied_toast: "షాపింగ్ జాబితా కాపీ చేయబడింది! 📋",
    items_count: "{count} వస్తువులు",

    // --- Spin The Wheel ---
    roulette_title: "రుచుల చక్రం",
    roulette_subtitle: "ఏం తినాలో నిర్ణయించుకోలేకపోతున్నారా? లక్కీ వీల్ తిప్పండి!",
    spin_prompt: "ఏం తినాలో నిర్ణయించుకోలేకపోతున్నారా? లక్కీ వీల్ తిప్పండి!",
    spin_button: "చక్రం తిప్పండి",
    destiny_pick: "🎉 మీ కోసం ఎంపికైన వంటకం",
    spin_winner_congrats: "ఈ రుచికరమైన వంటకాన్ని ఈరోజే ఆస్వాదించండి!",

    // --- Daily Meal Planner ---
    planner_title: "రోజువారీ భోజన ప్రణాళిక",
    planner_subtitle: "కేలరీలు మరియు పోషకాల ట్రాకింగ్‌తో మీ పూర్తి రోజు భోజన ప్రణాళికను సిద్ధం చేసుకోండి.",
    clear_day: "రోజంతా క్లియర్ చేయండి",
    export_day_grocery: "సామగ్రి జాబితా ఎగుమతి",
    total_calories: "మొత్తం కేలరీలు",
    cal_target: "లక్ష్యం: 2,000 kcal",
    protein: "ప్రోటీన్",
    protein_sub: "కండరాల పుష్టి",
    carbohydrates: "కార్బోహైడ్రేట్లు",
    carbs_sub: "రోజువారీ శక్తి",
    healthy_fats: "ఆరోగ్యకరమైన కొవ్వులు",
    fats_sub: "రుచి మరియు పోషణ",
    estimated_budget: "సుమారు బడ్జెట్",
    budget_sub: "రోజు ఖర్చు",
    slot_breakfast: "1. ఉదయం అల్పాహారం",
    slot_lunch: "2. మధ్యాహ్న భోజనం",
    slot_dinner: "3. రాత్రి భోజనం",
    slot_snack: "4. టీ & తీపి పదార్థం",
    time_breakfast: "07:00 – 10:30 AM",
    time_lunch: "12:30 – 03:30 PM",
    time_dinner: "07:30 – 10:30 PM",
    time_snack: "ఏ సమయంలోనైనా",
    empty_slot_prompt: "ఇంకా వంటకం ఎంపిక చేయలేదు",
    auto_pick: "సర్‌ప్రైజ్ చేయండి",
    remove_slot: "తొలగించు",

    // --- Mystery Blind Box ---
    blindbox_badge: "గౌర్మెట్ బ్లైండ్ బాక్స్",
    blindbox_title: "మిస్టరీ వంటకం అన్‌బాక్సింగ్",
    blindbox_subtitle: "కొత్త రుచులను ప్రయత్నించాలనుకుంటున్నారా? మీ కోసం ప్రత్యేక వంటకాన్ని చూడటానికి బాక్స్ పై నొక్కండి!",
    unbox_btn: "బాక్స్ తెరిచి వంటకాన్ని చూడండి",
    unboxed_success: "🎉 మీకు అద్భుతమైన వంటకం లభించింది!",

    // --- Chef Cook-Along ---
    cook_session_tag: "లైవ్ చెఫ్ వంట సెషన్",
    servings: "వ్యక్తుల సంఖ్య:",
    ready: "సిద్ధంగా ఉంది",
    running: "నడుస్తోంది",
    paused: "నిలిపివేయబడింది",
    step_timer_start: "టైమర్ ప్రారంభించండి",
    step_timer_pause: "టైమర్ ఆపండి",
    step_timer_reset: "రీసెట్",
    next_step: "తర్వాతి దశ",
    finish_cooking: "పూర్తయింది • ఆస్వాదించండి 🎉",
    step_n_of_m: "దశ {step} / {total}",
    scaled_ingredients: "దినుసుల కొలతల జాబితా",

    // --- Story Card Generator ---
    poster_title: "స్టోరీ కార్డ్ జనరేటర్",
    poster_subtitle: "ఇన్‌స్టాగ్రామ్ స్టోరీ కోసం ఆకర్షణీయమైన 9:16 పోస్టర్‌ను రూపొందించండి!",
    card_theme: "కార్డ్ థీమ్:",
    custom_quote: "మీ వ్యాఖ్య / కొటేషన్:",
    download_story: "9:16 PNG ఇమేజ్ డౌన్‌లోడ్",
    copy_story_image: "ఇమేజ్ కాపీ చేయండి",

    // --- City Selector Modal ---
    select_capital_title: "మీ ఆహార నగరాన్ని ఎంచుకోండి",
    select_capital_subtitle: "స్థానిక సాంప్రదాయ వంటకాలను కనుగొనడానికి మీ నగరాన్ని ఎంచుకోండి.",
    search_city_placeholder: "నగరం లేదా దేశం పేరు వెతకండి (ఉదా. హైదరాబాద్, టోక్యో, రోమ్)...",
    use_gps: "GPS వాడండి",
    global_hubs: "ప్రపంచ ఆహార కేంద్రాలు",
    currently_selected_city: "ప్రస్తుతం: {city}, {country}",

    // --- Favorites Drawer ---
    saved_dishes_title: "మీరు సేవ్ చేసిన వంటకాలు",
    saved_items_summary: "{count} వంటకాలు సేవ్ చేయబడ్డాయి",
    combined_grocery_btn: "మొత్తం సామగ్రి జాబితా",
    no_saved_dishes: "ఇంకా ఏ వంటకాలు సేవ్ చేయలేదు. మీకు నచ్చిన వంటకాలపై హార్ట్ గుర్తు నొక్కి సేవ్ చేసుకోండి!",

    // --- Footer & FAB ---
    footer_tagline: "మీ అంతిమ ఆహార తోడు. ప్రపంచవ్యాప్తంగా ఉన్న అత్యంత రుచికరమైన వంటకాలు మరియు వీధి ఆహారాలను అన్వేషించండి.",
    popular_hubs_title: "ప్రసిద్ధ ఆహార నగరాలు",
    cravings_categories_title: "రుచులు & వర్గాలు",
    copyright: "© 2026 క్రేవ్ పల్స్. ఆహార ప్రియుల కోసం ❤️ తో రూపొందించబడింది.",
    back_to_top: "పైకి వెళ్ళండి",

    // --- Meal Categories ---
    cat_breakfast: "అల్పాహారం",
    cat_lunch: "మధ్యాహ్న భోజనం",
    cat_dinner: "రాత్రి భోజనం",
    cat_snack: "స్నాక్స్ & వీధి ఆహారం",
    cat_dessert: "తీపి పదార్థాలు",

    // --- Taste Profiles ---
    taste_savory: "రుచికరమైన",
    taste_aromatic: "సువాసనభరితమైన",
    taste_spicy: "కారమైన",
    taste_rich: "రిచ్ ఫ్లేవర్",
    taste_sweet: "తీపి",
    taste_creamy: "క్రీమీ",
    taste_crispy: "కరకరలాడే",
    taste_tangy: "పుల్లని",
    taste_nutty: "గింజల రుచి",
    taste_buttery: "వెన్న రుచి",
    taste_smoky: "స్మోకీ",
    taste_herbal: "మూలికా సువాసన",
    taste_tender: "మృదువైన",
    taste_hearty: "తృప్తికరమైన",
    taste_fluffy: "మెత్తని",
    taste_fresh: "తాజా",
    taste_umami: "ఉమామి",
    taste_sour: "పులుపు",
    taste_crunchy: "క్రంచీ",
    taste_cheesy: "చీజీ",

    // --- Language Change Toast ---
    lang_changed_toast: "భాష విజయవంతంగా తెలుగుకు మార్చబడింది"
  },

  hi: {
    // --- Brand & Navigation ---
    brand_name: "क्रेवपल्स",
    brand_tagline: "प्रसिद्ध व्यंजन और अपने आस-पास क्या खाएं खोजें",
    exploring_in: "खानपान शहर",
    select_capital: "शहर चुनें",
    detect_location: "मेरी लोकेशन ढूंढें",
    meal_plan: "मील प्लान",
    taste_quiz: "स्वाद क्विज़",
    food_trails: "फूड ट्रेल्स",
    battle_arena: "बैटल अखाड़ा",
    passport: "पासपोर्ट",
    saved: "सहेजे गए",
    spin_wheel: "चक्र घुमाएं",
    select_language: "भाषा चुनें",
    change_language_title: "भाषा बदलें",

    // --- Hero Section ---
    hero_title_prefix: "कुछ लाजवाब",
    hero_title_highlight: "खाने का मन है?",
    hero_subtitle: "{city} और दुनिया भर के प्रसिद्ध शहरों के सबसे स्वादिष्ट और पारंपरिक व्यंजनों का आनंद लें। आपकी पसंद और भूख के अनुसार विशेष सुझाव।",
    stat_masterpieces: "70+ लाजवाब व्यंजन",
    stat_capitals: "21+ प्रसिद्ध शहर",
    stat_trails: "4 फूड यात्राएं",
    stat_authentic: "100% प्रामाणिक",
    search_placeholder: "व्यंजन, शहर या सामग्री खोजें (उदा. बिरयानी, डोसा, टकोस)...",
    search_explore: "खोजें",
    trending: "ट्रेंडिंग:",
    mystery_box: "रहस्यमयी बॉक्स 🎁",
    daily_meal_plan: "दैनिक आहार योजना",
    surprise_pick: "सरप्राइज डिश",
    chef_pick: "शेफ की पहली पसंद",
    avg_plate: "प्रति प्लेट",
    smart_flavor_suggestions: "स्मार्ट स्वाद सुझाव",
    autocomplete_hint: "चुनने के लिए ↑ ↓ और Enter का उपयोग करें",
    autocomplete_start: "व्यंजन और श्रेणियां देखने के लिए टाइप करें",
    autocomplete_view_all: "सभी परिणाम देखें →",

    // --- Time-based Greetings ---
    good_morning: "शुभ प्रभात • सुबह का नाश्ता",
    good_afternoon: "शुभ दोपहर • शेफ लंच स्पेशल",
    good_evening: "शुभ संध्या • डिनर के बेहतरीन स्वाद",
    golden_hour: "शाम का नाश्ता • चाय और स्नैक्स",
    late_night: "देर रात की भूख • स्पेशल बाइट्स",

    // --- Filters & Toolbar ---
    all_diets: "सभी आहार",
    all_foods: "सभी व्यंजन",
    pure_veg: "शुद्ध शाकाहारी 🟢",
    veg: "शाकाहारी 🟢",
    non_veg: "माँसाहारी 🔴",
    vegan: "वीगन 🌿",
    halal: "हलाल 🌙",
    gluten_free: "ग्लूटेन-मुक्त 🌾",
    high_protein: "हाई प्रोटीन 💪",
    mood_heading: "आज आपका क्या खाने का मूड है?",
    showing_all_cravings: "दिखा रहे हैं: सभी स्वाद",
    showing_mood: "दिखा रहे हैं: {mood}",
    sort_by: "क्रमबद्ध करें:",
    sort_trending: "🔥 सबसे लोकप्रिय",
    sort_rating: "★ उच्चतम रेटिंग",
    sort_price_asc: "₹ कीमत: कम से ज्यादा",
    sort_price_desc: "₹ कीमत: ज्यादा से कम",
    sort_calories: "🥗 कम कैलोरी",
    sort_prep: "⚡ सबसे जल्दी तैयार",
    max_calories: "अधिकतम कैलोरी:",
    spice: "तीखापन:",
    spice_all: "सभी",
    spice_zero: "शून्य तीखा 🟢",
    spice_mild: "हल्का 🔥",
    spice_medium: "मध्यम 🔥🔥",
    spice_hot: "तीखा 🔥🔥🔥",
    spice_fiery: "अत्यधिक तीखा 🔥🔥🔥🔥",
    reset_filters: "फ़िल्टर हटाएं",
    showing_all_delicacies: "सभी व्यंजन दिखाए जा रहे हैं",
    matching_delicacies: "{count} व्यंजन मिले",

    // --- Mood Categories ---
    mood_all: "सभी स्वाद",
    mood_comfort: "मनपसंद पारंपरिक",
    mood_spicy: "तीखा और चटपटा",
    mood_street_food: "स्ट्रीट फूड",
    mood_sweet: "मीठे पकवान",
    mood_cheesy: "चीज़ और मक्खन",
    mood_quick: "झटपट स्नैक्स",
    mood_healthy: "पौष्टिक और ताजा",
    mood_date_night: "स्पेशल डिनर",

    // --- Sections ---
    famous_in: "का प्रसिद्ध खानपान:",
    famous_subtitle: "स्थानीय लोगों द्वारा पसंद किए जाने वाले विरासत के व्यंजन और स्ट्रीट फूड।",
    change_city: "शहर बदलें",
    curated_suggestions: "आपके लिए खास सुझाव",
    curated_subtitle: "आपकी पसंद और दिन के समय के आधार पर चुने गए खास व्यंजन।",
    food_trails_title: "विशिष्ट फूड ट्रेल्स एवं रास्ते",
    food_trails_subtitle: "प्रसिद्ध दुकानों, गुप्त ठिकानों और प्रामाणिक संस्कृति से भरी स्वाद यात्राएं।",
    world_famous: "दुनिया भर के लोकप्रिय व्यंजन",
    world_famous_subtitle: "दुनिया के प्रसिद्ध पाक शहरों के सबसे प्रतिष्ठित व्यंजन।",

    // --- Dish Cards ---
    view_dish: "डिश देखें",
    view_story: "कहानी देखें",
    tasted_badge: "चखा हुआ",
    hot_badge: "हॉट",
    special_badge: "{city} स्पेशल",
    global_icon_badge: "ग्लोबल आइकन",
    order_quick_btn: "आर्डर 🛵",

    // --- Dish Detail Modal ---
    listen_story: "कहानी सुनें",
    narrating_story: "सुना रहे हैं...",
    tasted_btn: "मैंने यह चखा है",
    tasted_btn_active: "✓ चखा हुआ",
    origin_city: "उत्पत्ति शहर",
    category_time: "श्रेणी / समय",
    approx_price: "अनुमानित कीमत",
    spice_level_label: "तीखापन स्तर",
    est_calories: "कैलोरी",
    macro_balance: "मैक्रो संतुलन",
    secret_hack: "फूडी सीक्रेट हैक",
    story_heritage: "इतिहास और परंपरा",
    ingredients: "मुख्य सामग्रियां",
    chef_cook_along: "शेफ कुकिंग गाइड",
    grocery_list: "राशन सूची",
    live_radar: "प्रसिद्ध रेस्टोरेंट रडार",
    live_scan: "● लाइव स्कैन",
    how_crafted: "बनाने की विधि",
    start_cooking_mode: "कुकिंग मोड शुरू करें",
    reviews: "फूडी रिव्यू एवं चखने के नोट्स",
    add_note: "नोट लिखें",
    post_note: "पोस्ट करें",
    cancel: "रद्द करें",
    your_name_placeholder: "आपका नाम (उदा. स्वाद प्रेमी)",
    review_placeholder: "अपने चखने का अनुभव या रेस्टोरेंट टिप्स यहाँ लिखें...",
    open_now: "अभी खुला है",
    directions: "दिशा देखें",

    // --- Modal Bottom Actions ---
    find_near_me: "गूगल मैप्स",
    add_to_plan: "प्लान में जोड़ें",
    story_card: "स्टोरी कार्ड",
    compare: "तुलना करें",
    watch: "वीडियो देखें",
    save: "सहेजें",
    saved_btn: "सहेजा गया",

    // --- Food Delivery Section & Modal ---
    order_online_title: "खाने का मन है? ऑनलाइन आर्डर करें",
    order_online_desc: "इस व्यंजन को सीधे स्विगी और जोमैटो पर तुरंत आर्डर करें:",
    order_online_live: "ऑनलाइन आर्डर",
    order_swiggy: "Swiggy पर आर्डर करें",
    order_zomato: "Zomato पर आर्डर करें",
    fast_delivery: "25-35 मिनट",
    delivering_in: "{city} में डिलीवरी उपलब्ध है",
    select_delivery_app: "डिलीवरी पार्टनर चुनें",
    select_delivery_sub: "हम आपके वर्तमान स्थान में इस व्यंजन के लिए डिलीवरी ऐप खोलेंगे:",
    deliver_with: "डिलीवरी पार्टनर",
    order_now: "अभी आर्डर करें",
    swiggy_desc: "लाइव जीपीएस ट्रैकिंग के साथ बेहतरीन रेस्टोरेंट से ताजा खाना आर्डर करें।",
    zomato_desc: "मेन्यू, तस्वीरें और रेटिंग देखकर तेज डिलीवरी प्राप्त करें।",
    delivery_location_hint: "📍 वर्तमान डिलीवरी शहर: <strong>{city}</strong>",
    delivery_accuracy_hint: "सटीक परिणाम के लिए स्थान के आधार पर खोजा जाता है",
    find_on_maps: "गूगल मैप्स पर देखें",
    full_story_recipe: "पूरी कहानी और विधि",

    // --- AI Taste Matcher Quiz ---
    quiz_title: "AI स्वाद क्विज़",
    quiz_subtitle: "अपनी पसंद का व्यंजन खोजने के लिए 4 त्वरित सवालों के जवाब दें!",
    quiz_step_indicator: "चरण {step} / 4: {key}",
    quiz_analyzing_title: "आपके स्वाद की जांच हो रही है...",
    quiz_analyzing_sub: "दुनिया भर के 70+ व्यंजनों से मिलान किया जा रहा है।",
    quiz_winner_badge: "✨ 99% सटीक मिलान मिला!",
    quiz_soulmate_title: "आपकी पसंद का सबसे खास व्यंजन:",
    quiz_match_score: "स्वाद मिलान स्कोर: {score}%",
    quiz_start_over: "फिर से क्विज़ लें",

    // --- Dish Battle Arena ---
    battle_title: "व्यंजनों का बैटल अखाड़ा",
    battle_subtitle: "दो व्यंजनों के पोषण, स्वाद और तीखेपन की तुलना और वोटिंग!",
    quick_showdowns: "त्वरित मुकाबले:",
    contender_1: "प्रतिद्वंद्वी 1:",
    contender_2: "प्रतिद्वंद्वी 2:",
    vs_text: "बनाम",
    battle_winner: "🏆 जनता की पहली पसंद",
    battle_taste_duel: "स्वाद और तीखेपन का मुकाबला",
    battle_metrics: "मुख्य आंकड़ों की तुलना",
    vote_for: "{name} को वोट दें",
    voted: "✓ वोट दिया",
    votes_count: "{count} वोट",

    // --- Gastronomy Passport ---
    passport_title: "खानपान पासपोर्ट",
    passport_subtitle: "आपकी स्वाद यात्राओं का आधिकारिक रिकॉर्ड और बैज",
    passport_level_explorer: "फूडी खोजी",
    passport_level_connoisseur: "स्वाद पारखी",
    passport_level_master: "ग्रैंड मास्टर फूडी",
    dishes_tasted_stat: "चखे गए व्यंजन",
    cities_unlocked_stat: "अनलॉक किए शहर",
    badges_earned_stat: "प्राप्त बैज",
    city_visas_title: "शहर वीजा और मुहरें",
    milestones_title: "पाक उपलब्धियां",
    tasted_log_title: "चखे गए व्यंजनों की सूची",
    no_dishes_tasted_yet: "अभी तक कोई व्यंजन नहीं चखा। डिश कार्ड पर 'मैंने यह चखा है' दबाएं!",
    unlocked_on: "अनलॉक किया गया",

    // --- Smart Grocery List ---
    grocery_modal_title: "स्मार्ट राशन सूची",
    grocery_modal_sub: "इस व्यंजन को घर पर बनाने के लिए जरूरी सामग्रियों की सूची।",
    copy_grocery_list: "सूची कॉपी करें",
    print_list: "प्रिंट करें",
    grocery_copied_toast: "सामग्री सूची क्लिपबोर्ड पर कॉपी हो गई! 📋",
    items_count: "{count} वस्तुएं",

    // --- Spin The Wheel ---
    roulette_title: "स्वाद का पहिया",
    roulette_subtitle: "तय नहीं कर पा रहे क्या खाएं? अपनी किस्मत का पहिया घुमाएं!",
    spin_prompt: "तय नहीं कर पा रहे क्या खाएं? अपनी किस्मत का पहिया घुमाएं!",
    spin_button: "पहिया घुमाएं",
    destiny_pick: "🎉 आपकी चुनी हुई डिश",
    spin_winner_congrats: "आज इस स्वादिष्ट व्यंजन का आनंद लें!",

    // --- Daily Meal Planner ---
    planner_title: "दैनिक आहार योजना",
    planner_subtitle: "कैलोरी और पोषक तत्वों के साथ पूरे दिन की भोजन योजना तैयार करें।",
    clear_day: "दिन साफ करें",
    export_day_grocery: "राशन सूची निर्यात करें",
    total_calories: "कुल कैलोरी",
    cal_target: "लक्ष्य: 2,000 kcal",
    protein: "प्रोटीन",
    protein_sub: "मांसपेशियों के लिए",
    carbohydrates: "कार्बोहाइड्रेट",
    carbs_sub: "दैनिक ऊर्जा",
    healthy_fats: "स्वस्थ वसा",
    fats_sub: "स्वाद और पोषण",
    estimated_budget: "अनुमानित बजट",
    budget_sub: "दिन का कुल खर्च",
    slot_breakfast: "1. सुबह का नाश्ता",
    slot_lunch: "2. दोपहर का भोजन",
    slot_dinner: "3. रात का भोजन",
    slot_snack: "4. चाय और मीठा",
    time_breakfast: "07:00 – 10:30 AM",
    time_lunch: "12:30 – 03:30 PM",
    time_dinner: "07:30 – 10:30 PM",
    time_snack: "कभी भी खाएं",
    empty_slot_prompt: "कोई डिश चुनी नहीं गई",
    auto_pick: "सरप्राइज दें",
    remove_slot: "हटाएं",

    // --- Mystery Blind Box ---
    blindbox_badge: "गॉरमेट ब्लाइंड बॉक्स",
    blindbox_title: "रहस्यमयी व्यंजन अनबॉक्सिंग",
    blindbox_subtitle: "रोमांचक स्वाद चाहते हैं? अपने लिए खास चुना गया व्यंजन देखने के लिए बॉक्स पर टैप करें!",
    unbox_btn: "डिश देखने के लिए टैप करें",
    unboxed_success: "🎉 आपको एक लाजवाब व्यंजन मिला!",

    // --- Chef Cook-Along ---
    cook_session_tag: "लाइव शेफ कुकिंग सेशन",
    servings: "सर्विंग्स:",
    ready: "तैयार",
    running: "जारी है",
    paused: "रुका हुआ",
    step_timer_start: "टाइमर शुरू करें",
    step_timer_pause: "टाइमर रोकें",
    step_timer_reset: "रीसेट",
    next_step: "अगला चरण",
    finish_cooking: "तैयार • आनंद लें 🎉",
    step_n_of_m: "चरण {step} / {total}",
    scaled_ingredients: "सामग्री की सटीक माप",

    // --- Story Card Generator ---
    poster_title: "स्टोरी कार्ड जनरेटर",
    poster_subtitle: "इंस्टाग्राम स्टोरी के लिए 9:16 का शानदार पोस्टर बनाएं!",
    card_theme: "कार्ड थीम:",
    custom_quote: "आपकी टिप्पणी / कोट:",
    download_story: "9:16 PNG इमेज डाउनलोड करें",
    copy_story_image: "इमेज कॉपी करें",

    // --- City Selector Modal ---
    select_capital_title: "अपना खानपान शहर चुनें",
    select_capital_subtitle: "पारंपरिक और लोकप्रिय स्ट्रीट फूड खोजने के लिए अपना शहर चुनें।",
    search_city_placeholder: "शहर या देश खोजें (उदा. हैदराबाद, टोक्यो, रोम)...",
    use_gps: "GPS उपयोग करें",
    global_hubs: "दुनिया के खानपान केंद्र",
    currently_selected_city: "वर्तमान में: {city}, {country}",

    // --- Favorites Drawer ---
    saved_dishes_title: "सहेजे गए व्यंजन",
    saved_items_summary: "{count} व्यंजन सहेजे गए",
    combined_grocery_btn: "कुल राशन सूची",
    no_saved_dishes: "अभी कोई व्यंजन सहेजा नहीं गया। डिश कार्ड पर दिल का निशान दबाकर सहेजें!",

    // --- Footer & FAB ---
    footer_tagline: "आपका परम पाक साथी। दुनिया भर के सबसे स्वादिष्ट व्यंजन और स्ट्रीट फूड खोजें।",
    popular_hubs_title: "प्रसिद्ध खानपान शहर",
    cravings_categories_title: "स्वाद और श्रेणियां",
    copyright: "© 2026 क्रेवपल्स। भोजन प्रेमियों के लिए ❤️ से बनाया गया।",
    back_to_top: "ऊपर जाएं",

    // --- Meal Categories ---
    cat_breakfast: "नाश्ता",
    cat_lunch: "दोपहर का भोजन",
    cat_dinner: "रात का भोजन",
    cat_snack: "स्नैक्स और स्ट्रीट फूड",
    cat_dessert: "मीठे पकवान",

    // --- Taste Profiles ---
    taste_savory: "स्वादिष्ट",
    taste_aromatic: "सुगंधित",
    taste_spicy: "तीखा",
    taste_rich: "समृद्ध स्वाद",
    taste_sweet: "मीठा",
    taste_creamy: "मलाईदार",
    taste_crispy: "कुरकुरा",
    taste_tangy: "चटपटा",
    taste_nutty: "मेवेदार",
    taste_buttery: "मक्खनी",
    taste_smoky: "धुआंधार",
    taste_herbal: "जड़ी-बूटीदार",
    taste_tender: "मुलायम",
    taste_hearty: "संतोषजनक",
    taste_fluffy: "फूला हुआ",
    taste_fresh: "ताजा",
    taste_umami: "उमामी",
    taste_sour: "खट्टा",
    taste_crunchy: "करारा",
    taste_cheesy: "चीज़ी",

    // --- Language Change Toast ---
    lang_changed_toast: "भाषा सफलतापूर्वक हिन्दी में बदली गई"
  }
};

// Comprehensive Dish-Specific Localization Data
const DISH_TRANSLATIONS = {
  hyd_biryani: {
    en: {
      name: "Hyderabadi Dum Biryani",
      category: "Lunch",
      famousFor: "Slow-cooked aged basmati rice and marinated meat infused with saffron and royal spices under sealed 'dum'.",
      description: "The crown jewel of Nizami cuisine. Succulent cuts of goat meat or chicken layered with par-cooked aged basmati rice, mint, coriander, fried onions (birista), pure desi ghee, and saffron milk, sealed with dough and slow-cooked to fragrant perfection."
    },
    te: {
      name: "హైదరాబాదీ దమ్ బిర్యానీ",
      category: "భోజనం",
      famousFor: "మట్టి పాత్రలో దమ్ పద్ధతిలో కుంకుమపువ్వు, నెయ్యి మరియు సుగంధ ద్రవ్యాలతో వండే అద్భుతమైన బిర్యానీ.",
      description: "నిజామీ నవాబుల కాలం నాటి రారాజు వంటకం. నాణ్యమైన బాస్మతి బియ్యం, మసాలాలు పట్టించిన మాంసం, పుదీనా, వేయించిన ఉల్లిపాయలు మరియు స్వచ్ఛమైన నెయ్యితో దమ్ చేసి ఘుమఘుమలాడేలా తయారు చేస్తారు."
    },
    hi: {
      name: "हैदराबादी दम बिरयानी",
      category: "दोपहर का भोजन",
      famousFor: "केसर, देशी घी और शाही मसालों के साथ धीमी आंच पर 'दम' देकर पकाई जाने वाली प्रसिद्ध बिरयानी।",
      description: "निज़ामी रसोई का सबसे नायाब तोहफा। उत्तम बासमती चावल, मसालों में मैरीनेट किया हुआ मटन/चिकन, पुदीना, तली हुई प्याज (बरिस्ता) और केसरिया दूध को धीमी आंच पर दम देकर पकाया जाता है।"
    }
  },
  hyd_haleem: {
    en: {
      name: "Hyderabadi Haleem",
      category: "Dinner",
      famousFor: "GI-tagged meat, broken wheat, and lentil stew pounded with wooden mashers until it turns velvety and decadent.",
      description: "A legendary slow-cooked dish prepared with wheat, barley, lentils, and meat, enriched with copious ghee, rose petals, cashews, and fried onions. It offers an incomparably velvety texture and hearty depth."
    },
    te: {
      name: "హైదరాబాదీ హలీమ్",
      category: "రాత్రి భోజనం",
      famousFor: "గోధుమ రవ్వ, పప్పులు మరియు మాంసాన్ని గంటల తరబడి ఉడికించి నెయ్యితో తయారుచేసే సాంప్రదాయ వంటకం.",
      description: "హైదరాబాద్‌కు ప్రత్యేక గుర్తింపు తెచ్చిన ఘనమైన వంటకం. గోధుమలు, పప్పులు మరియు మాంసాన్ని ప్రత్యేక కర్రలతో మెత్తగా రుబ్బి, స్వచ్ఛమైన నెయ్యి, జీడిపప్పు, వేయించిన ఉల్లిపాయలతో వడ్డిస్తారు."
    },
    hi: {
      name: "हैदराबादी हलीम",
      category: "रात का भोजन",
      famousFor: "गेहूं, दालों और मटन को घंटों तक धीमी आंच पर घोंटकर घी और सूखे मेवों के साथ बनाया जाने वाला शाही व्यंजन।",
      description: "हैदराबाद की प्रसिद्ध जीआई-टैग प्राप्त डिश। गेहूं, जौ, दालें और गोश्त को देशी घी, गुलाब की पंखुड़ियों और मेवों के साथ 8 घंटे तक पकाया और घोटा जाता है।"
    }
  },
  hyd_irani_chai: {
    en: {
      name: "Irani Chai with Osmania Biscuits",
      category: "Snack & Street Food",
      famousFor: "Thick condensed milk decoction served with melt-in-the-mouth sweet and salty royal biscuits.",
      description: "An indelible part of Hyderabad's soul. Black tea decoction (dum) simmered in copper pots poured over thick, reduced creamy milk, paired with buttery Osmania biscuits named after the last Nizam of Hyderabad."
    },
    te: {
      name: "ఇరానీ ఛాయ్ & ఉస్మానియా బిస్కెట్",
      category: "స్నాక్స్ & వీధి ఆహారం",
      famousFor: "చిక్కటి పాల డికాక్షన్‌తో కూడిన ఇరానీ ఛాయ్ మరియు నోట్లో కరిగిపోయే ఉస్మానియా బిస్కెట్లు.",
      description: "హైదరాబాద్ నగర సంస్కృతికి ప్రతీక. రాగి పాత్రల్లో మరిగించిన చిక్కని డికాక్షన్ మరియు క్రీమీ పాలు కలిపి, నిజాం నవాబు పేరు మీదుగా వచ్చిన ఉస్మానియా బిస్కెట్లతో అందిస్తారు."
    },
    hi: {
      name: "ईरानी चाय और उस्मानिया बिस्कुट",
      category: "स्नैक्स और स्ट्रीट फूड",
      famousFor: "गाढ़े मलाईदार दूध और कड़क काढ़े से बनी चाय के साथ मक्खनी नमकीन-मीठे उस्मानिया बिस्कुट।",
      description: "हैदराबाद की पहचान। तांबे के बर्तनों में धीमे-धीमे कढ़ी हुई चाय की पत्ती का दम, गाढ़े दूध के साथ मिलाकर उस्मानिया बिस्कुट के साथ परोसी जाती है।"
    }
  },
  hyd_double_ka_meetha: {
    en: {
      name: "Double Ka Meetha (Shahi Tukda)",
      category: "Dessert & Sweet",
      famousFor: "Golden ghee-fried milk bread steeped in saffron-cardamom sugar syrup and smothered in thick rabri.",
      description: "Double roti (milk bread) fried to golden amber in pure desi ghee, soaked in fragrant saffron syrup, and garnished with thick reduced milk (rabri), roasted almonds, pistachios, and silver vark."
    },
    te: {
      name: "డబల్ కా మీఠా (షాహీ టుక్డా)",
      category: "తీపి పదార్థాలు",
      famousFor: "స్వచ్ఛమైన నెయ్యిలో వేయించిన బ్రెడ్ ముక్కలను కుంకుమపువ్వు పాకంలో నానబెట్టి రబ్రీతో వడ్డించే రాజరిక స్వీట్.",
      description: "హైదరాబాదీ వేడుకల్లో తప్పనిసరిగా ఉండే సాంప్రదాయ తీపి వంటకం. నెయ్యిలో వేయించిన బ్రెడ్‌ను యాలకుల సువాసన గల చక్కెర పాకంలో ముంచి, చిక్కని రబ్రీ మరియు బాదం, పిస్తాలతో అలంకరిస్తారు."
    },
    hi: {
      name: "डबल का मीठा (शाही टुकड़ा)",
      category: "मीठे पकवान",
      famousFor: "देशी घी में तली हुई ब्रेड, केसर-इलायची की चाशनी और ऊपर से गाढ़ी मलाईदार रबड़ी का शाही मेल।",
      description: "हैदराबादी शादियों की जान। ब्रेड को शुद्ध घी में कुरकुरा तलकर केसर की चाशनी में डुबोया जाता है और ऊपर से गाढ़ी रबड़ी व सूखे मेवे सजाए जाते हैं।"
    }
  },
  hyd_mirchi_salan: {
    en: {
      name: "Hyderabadi Mirchi Ka Salan",
      category: "Lunch",
      famousFor: "Long green chilies simmered in a velvety, nutty gravy of peanuts, sesame seeds, coconut, and tamarind.",
      description: "The quintessential accompaniment to Hyderabadi Biryani. Fat mild green chilies shallow fried and stewed in a rich ground paste of roasted peanuts, white sesame, desiccated coconut, cumin, ginger-garlic, and tangy tamarind pulp."
    },
    te: {
      name: "హైదరాబాదీ మిర్చి కా సాలన్",
      category: "భోజనం",
      famousFor: "వేరుశెనగ, నువ్వులు, కొబ్బరి మరియు చింతపండు గ్రేవీలో మగ్గించిన పెద్ద పచ్చిమిర్చి కూర.",
      description: "బిర్యానీకి అసలైన తోడు. వేయించిన వేరుశెనగ పప్పు, తెల్ల నువ్వులు, ఎండు కొబ్బరి మరియు చింతపండుతో చేసిన చిక్కని మసాలా గ్రేవీలో పచ్చిమిరపకాయలను ఉడికించి తయారుచేస్తారు."
    },
    hi: {
      name: "हैदराबादी मिर्ची का सालन",
      category: "दोपहर का भोजन",
      famousFor: "मूंगफली, तिल, नारियल और इमली की गाढ़ी ग्रेवी में पकाई गई स्वादिष्ट हरी मिर्च।",
      description: "बिरयानी का असली साथी। तली हुई मोटी हरी मिर्च को भुनी हुई मूंगफली, तिल, नारियल और खट्टी इमली की गाढ़ी शाही ग्रेवी में पकाया जाता है।"
    }
  },
  mum_vada_pav: {
    en: {
      name: "Mumbai Vada Pav",
      category: "Snack & Street Food",
      famousFor: "Golden spiced potato fritter nestled inside soft pav with fiery dry garlic chutney and fried chilies.",
      description: "The heartbeat of Mumbai's street culinary culture. A spiced mashed potato ball coated in gram flour batter, deep-fried to crisp perfection, and served in a buttered pav slathered with sweet tamarind, mint-coriander, and fiery red garlic peanut chutney."
    },
    te: {
      name: "ముంబై వడా పావ్",
      category: "స్నాక్స్ & వీధి ఆహారం",
      famousFor: "కమ్మని బంగాళాదుంప బోండాను మెత్తటి పావ్‌లో పెట్టి వెల్లుల్లి కారం పొడితో అందించే ముంబై వీధి వంటకం.",
      description: "ముంబై నగరానికి గుండెకాయ లాంటి స్ట్రీట్ ఫుడ్. శనగపిండిలో ముంచి వేయించిన ఆలూ వడను, వెల్లుల్లి కారం, చింతపండు చట్నీ మరియు వేయించిన పచ్చిమిర్చితో పావ్‌లో పెట్టి ఇస్తారు."
    },
    hi: {
      name: "मुंबई वड़ा पाव",
      category: "स्नैक्स और स्ट्रीट फूड",
      famousFor: "मसालेदार आलू वड़ा, नरम पाव, तीखी सूखी लहसुन की चटनी और तली हुई हरी मिर्च का लाजवाब मेल।",
      description: "मुंबई की धड़कन। बेसन में लिपटा कुरकुरा आलू वड़ा, ताजे पाव में तीखी लाल लहसुन चटनी और हरी चटनी के साथ परोसा जाता है।"
    }
  },
  mum_pav_bhaji: {
    en: {
      name: "Butter Pav Bhaji",
      category: "Dinner",
      famousFor: "Mashed vegetable medley cooked on a giant flat tawa with generous slabs of Amul butter and toasted pav.",
      description: "A rich mash of potatoes, cauliflower, peas, tomatoes, and bell peppers cooked on an iron griddle with special pav bhaji spices and finished with an ocean of butter, fresh cilantro, onions, and lime juice, paired with golden griddle-toasted pav."
    },
    te: {
      name: "బటర్ పావ్ భాజీ",
      category: "రాత్రి భోజనం",
      famousFor: "పెద్ద పెనంపై కూరగాయలను మెదిపి అమూల్ వెన్నతో తయారుచేసే సువాసనభరితమైన భాజీ మరియు పావ్.",
      description: "ముంబై చౌపాటీ వద్ద అత్యంత ఇష్టపడే వంటకం. బంగాళాదుంపలు, టమోటాలు, బఠానీలు కలిపి మసాలాలతో మెదిపి, బోలెడంత వెన్న, ఉల్లిపాయలు, నిమ్మరసంతో వేడి వేడి పావ్‌తో తింటారు."
    },
    hi: {
      name: "बटर पाव भाजी",
      category: "रात का भोजन",
      famousFor: "बड़े तवे पर मैश की हुई सब्जियों की भाजी, अमूल बटर का भरपूर तड़का और सिके हुए पाव।",
      description: "मुंबई का विश्वप्रसिद्ध व्यंजन। आलू, मटर, टमाटर और शिमला मिर्च को खास मसालों और ढेर सारे मक्खन के साथ तवे पर घोंटकर कुरकुरे सिके पाव के साथ परोसा जाता है।"
    }
  },
  mum_bhel_puri: {
    en: {
      name: "Mumbai Bhelpuri & Sev Puri",
      category: "Snack & Street Food",
      famousFor: "Crunchy puffed rice tossed with raw mango, potatoes, zesty chutneys, and fine golden sev.",
      description: "Iconic beachside street chaat made by combining puffed rice, crunchy puris, boiled potatoes, chopped onions, raw green mango, tangy tamarind dates chutney, fiery green chili chutney, and heaps of crispy gram flour sev."
    },
    te: {
      name: "ముంబై భేల్ పూరి & సేవ్ పూరి",
      category: "స్నాక్స్ & వీధి ఆహారం",
      famousFor: "మరమరాలు, పచ్చి మామిడికాయ, తీపి మరియు కారం చట్నీలు, క్రిస్పీ సేవ్‌తో చేసే చౌపాటీ చాట్.",
      description: "ముంబై బీచ్‌లలో దొరికే ప్రసిద్ధ చాట్. మరమరాలు, బంగాళాదుంపలు, ఉల్లిపాయలు, పచ్చి మామిడి ముక్కలు, చింతపండు మరియు కొత్తిమీర చట్నీలతో కలిపి సేవ్‌తో వడ్డిస్తారు."
    },
    hi: {
      name: "मुंबई भेलपुरी और सेव पूरी",
      category: "स्नैक्स और स्ट्रीट फूड",
      famousFor: "मुरमुरे, कच्चा आम, उबले आलू, खट्टी-मीठी चटनी और नायलॉन सेव का चटपटा संगम।",
      description: "जुहू और चौपाटी बीच की सबसे मशहूर चाट। कुरकुरे मुरमुरे, पापड़ी, प्याज, कच्ची केरी और तीखी-मीठी चटनी के साथ ऊपर से कुरकुरा सेव डालकर परोसा जाता है।"
    }
  },
  mum_bombil_fry: {
    en: {
      name: "Crispy Bombay Duck Fry (Bombil)",
      category: "Lunch",
      famousFor: "Semolina-crusted, golden fried coastal fish with a whisper-soft interior and fiery Malvani marinade.",
      description: "Fresh coastal Bombay Duck fish flattened and marinated in red chili, turmeric, garlic, and kokum, coated in fine semolina (rava) and rice flour, and pan-fried until crackling crisp outside with tender melt-in-the-mouth meat within."
    },
    te: {
      name: "క్రిస్పీ బాంబే డక్ ఫ్రై (బొంబిల్)",
      category: "భోజనం",
      famousFor: "రవ్వ కోటింగ్‌తో కరకరలాడేలా వేయించిన తీరప్రాంత చేపల వేపుడు.",
      description: "ముంబై తీరప్రాంత కొంకణ్ శైలి చేపల వంటకం. తాజా చేపను మసాలాలు, కోకుమ్‌లో నానబెట్టి, రవ్వ అద్ది నూనెలో క్రిస్పీగా వేయిస్తారు."
    },
    hi: {
      name: "कुरकुरा बॉम्बे डक फ्राई (बोंबिल)",
      category: "दोपहर का भोजन",
      famousFor: "सूजी की परत में लिपटा, ऊपर से कुरकुरा और अंदर से बेहद नरम पारंपरिक तटीय फिश फ्राई।",
      description: "महाराष्ट्र के तटीय इलाकों की पसंदीदा मछली। मालवणी मसालों और कोकम में मैरीनेट करके रवा (सूजी) लपेटकर कुरकुरा तला जाता है।"
    }
  },
  del_butter_chicken: {
    en: {
      name: "Classic Butter Chicken (Murgh Makhani)",
      category: "Dinner",
      famousFor: "Tandoor-charred chicken pieces simmered in a velvety tomato, cashew, butter, and dried fenugreek gravy.",
      description: "The global ambassador of Indian cuisine invented in Old Delhi. Clay oven roasted chicken morsels gently cooked in a rich, buttery tomato sauce infused with honey, fresh cream, crushed cashews, and aromatic Kasuri methi."
    },
    te: {
      name: "క్లాసిక్ బటర్ చికెన్ (ముర్గ్ మఖానీ)",
      category: "రాత్రి భోజనం",
      famousFor: "తందూర్‌లో కాల్చిన చికెన్ ముక్కలను వెన్న, టమోటా, జీడిపప్పు మరియు కసూరీ మేథీ గ్రేవీలో వండే వంటకం.",
      description: "ఢిల్లీలో పుట్టిన ప్రపంచ ప్రసిద్ధ చికెన్ కర్రీ. తందూరీ చికెన్ ముక్కలను చిక్కని టమోటా గ్రేవీ, స్వచ్ఛమైన వెన్న, ఫ్రెష్ క్రీమ్ మరియు కసూరీ మేథీతో ఎంతో రుచికరంగా చేస్తారు."
    },
    hi: {
      name: "क्लासिक बटर चिकन (मुर्ग मखनी)",
      category: "रात का भोजन",
      famousFor: "तंदूर में भुना हुआ चिकन, मखमली टमाटर-काजू की ग्रेवी, ढेर सारा मक्खन और कस्तूरी मेथी।",
      description: "पुरानी दिल्ली का ऐतिहासिक व्यंजन। तंदूरी चिकन के टुकड़ों को मलाईदार टमाटर, मक्खन, क्रीम और काजू की रेशमी ग्रेवी में पकाया जाता है।"
    }
  },
  del_chole_bhature: {
    en: {
      name: "Delhi Chole Bhature",
      category: "Breakfast",
      famousFor: "Puffed golden bhature served with dark, spiced Punjabi chickpeas, pickled carrots, and green chilies.",
      description: "The undisputed breakfast king of Delhi. Overnight soaked chickpeas stewed with tea leaves, anardana (dried pomegranate), and Punjabi spices, paired with balloon-puffed deep-fried fermented bread (bhature)."
    },
    te: {
      name: "ఢిల్లీ చోలే బటూరే",
      category: "అల్పాహారం",
      famousFor: "బంతిలా పొంగిన వేడి బటూరేలు మరియు ఘాటైన మసాలా చోలే కాంబినేషన్.",
      description: "ఢిల్లీ మరియు పంజాబ్ లలో అత్యంత ఇష్టమైన టిఫిన్. మసాలాలు, దానిమ్మ గింజల పొడితో వండిన శనగల కూరతో, వేడి వేడిగా నూనెలో పొంగించిన బటూరాలను ఊరగాయ, ఉల్లిపాయలతో తింటారు."
    },
    hi: {
      name: "दिल्ली के छोले भटूरे",
      category: "नाश्ता",
      famousFor: "फूले हुए कुरकुरे भटूरे, गहरे रंग के चटपटे पंजाबी छोले, गाजर का अचार और हरी मिर्च।",
      description: "दिल्ली का सर्वप्रिय नाश्ता। अनारदाना और खास मसालों में पकाए गए तीखे छोले, गरमा-गरम फूले हुए भटूरों के साथ परोसे जाते हैं।"
    }
  },
  del_tandoori_tikka: {
    en: {
      name: "Smoky Tandoori Chicken Tikka",
      category: "Dinner",
      famousFor: "Clay oven roasted boneless chicken chunks marinated in mustard oil, Kashmiri chili, and hung curd.",
      description: "Succulent boneless chicken thigh pieces marinated twice in ginger-garlic, mustard oil, hung curd, and roasted gram flour, skewered and charred over red-hot charcoal in a traditional clay tandoor."
    },
    te: {
      name: "స్మోకీ తందూరీ చికెన్ టిక్కా",
      category: "రాత్రి భోజనం",
      famousFor: "మట్టి తందూర్‌లో బొగ్గుల సెగపై కాల్చిన జ్యుసి చికెన్ ముక్కలు.",
      description: "ఆవనూనె, గట్టి పెరుగు, కాశ్మీరీ కారం మరియు ప్రత్యేక మసాలాల్లో నానబెట్టిన చికెన్ ముక్కలను తందూర్‌లో కాల్చి నిమ్మరసం, చాట్ మసాలాతో వడ్డిస్తారు."
    },
    hi: {
      name: "तंदूरी चिकन टिक्का",
      category: "रात का भोजन",
      famousFor: "मिट्टी के तंदूर में अंगारों पर सेके गए रसीले चिकन के टुकड़े, सरसों का तेल और कश्मीरी मिर्च।",
      description: "दही, सरसों के तेल और कश्मीरी लाल मिर्च में मैरीनेट किए गए चिकन के बोनलेस टुकड़ों को तंदूर की आंच पर स्मोकी फ्लेवर में सेका जाता है।"
    }
  },
  blr_masala_dosa: {
    en: {
      name: "Bengaluru Butter Masala Dosa",
      category: "Breakfast",
      famousFor: "Crispy mahogany-golden fermented crepe smeared with spicy red garlic chutney and spiced potato mash.",
      description: "Iconic South Indian breakfast. A thick yet shatteringly crisp fermented rice-lentil crepe cooked in pure butter, coated inside with spicy red garlic-chili paste, stuffed with spiced potato bhaji, and served with coconut chutney and piping sambar."
    },
    te: {
      name: "బెంగళూరు బటర్ మసాలా దోశ",
      category: "అల్పాహారం",
      famousFor: "ఎర్ర కారం చట్నీ పూసి, వెన్నలో కాల్చిన కరకరలాడే క్రిస్పీ మసాలా దోశ.",
      description: "దక్షిణ భారతదేశంలో అత్యంత ఆదరణ పొందిన టిఫిన్. బియ్యం-మినప పిండితో చేసిన దోశ లోపల ఎర్ర కారం రాసి, బంగాళాదుంప కూర పెట్టి, కొబ్బరి చట్నీ మరియు వేడి సాంబారుతో ఇస్తారు."
    },
    hi: {
      name: "बेंगलुरु बटर मसाला डोसा",
      category: "नाश्ता",
      famousFor: "मक्खन में सिका कुरकुरा सुनहरा डोसा, अंदर तीखी लाल चटनी और स्वादिष्ट आलू का मसाला।",
      description: "कर्नाटक का प्रसिद्ध नाश्ता। कुरकुरे डोसे के अंदर लहसुन-लाल मिर्च की चटनी लगाई जाती है और आलू मसाला भरकर नारियल की चटनी व सांभर के साथ परोसा जाता है।"
    }
  },
  blr_filter_coffee: {
    en: {
      name: "South Indian Filter Coffee & Medu Vada",
      category: "Breakfast",
      famousFor: "Frothy, chicory-blended brew poured between brass dabarah and tumbler, paired with crispy lentil donuts.",
      description: "The morning ritual of South India. Strong fresh decoction brewed from dark roasted chicory-infused coffee beans, blended with boiling full cream milk and sugar, aerated to a dense velvet froth, served alongside crispy golden urad dal vadas."
    },
    te: {
      name: "సౌత్ ఇండియన్ ఫిల్టర్ కాఫీ & మేదు వడ",
      category: "అల్పాహారం",
      famousFor: "ఇత్తడి గ్లాసులో నురుగుతో ఇచ్చే ఘుమఘుమలాడే ఫిల్టర్ కాఫీ మరియు క్రిస్పీ మేదు వడలు.",
      description: "దక్షిణాది ఉదయాల ప్రాణం. తాజాగా దింపిన కాఫీ డికాక్షన్ చిక్కని పాలతో కలిపి, నురుగు వచ్చేలా చేసి, కరకరలాడే వేడి వేడి మినప వడలతో అందిస్తారు."
    },
    hi: {
      name: "साउथ इंडियन फिल्टर कॉफी और मेदू वड़ा",
      category: "नाश्ता",
      famousFor: "पीतल के बर्तन में झागदार कड़क फिल्टर कॉफी और कुरकुरा मेदू वड़ा।",
      description: "दक्षिण भारत की सुबह की शान। ताजा ब्रू की गई चिकोरी कॉफी और गाढ़े दूध का झागदार मेल, कुरकुरे उड़द दाल वड़े और चटनी के साथ।"
    }
  },
  ccu_biryani: {
    en: {
      name: "Kolkata Dum Biryani (with Aloo & Egg)",
      category: "Lunch",
      famousFor: "Subtle, aromatic Awadhi-style biryani featuring melt-in-mouth spiced potato and boiled egg.",
      description: "Born from royal Awadhi exile in Metiabruz. Long-grain basmati cooked in mild saffron, meetha attar (essence), rose water, and kewra, crowned with tender meat, a spiced whole golden potato, and a hard-boiled egg."
    },
    te: {
      name: "కోల్‌కతా దమ్ బిర్యానీ (ఆలూ & గుడ్డుతో)",
      category: "భోజనం",
      famousFor: "కుంకుమపువ్వు, గులాబీ నీరు సువాసనతో, పెద్ద బంగాళాదుంప మరియు గుడ్డుతో వండే అవాధీ బిర్యానీ.",
      description: "కోల్‌కతా ప్రత్యేక బిర్యానీ. సువాసన గల బాస్మతి బియ్యం, మృదువైన మాంసం ముక్కలతో పాటు మసాలాలు పీల్చుకున్న పెద్ద ఆలూ ముక్క మరియు ఉడకబెట్టిన గుడ్డు ఇందులో ప్రధాన ఆకర్షణ."
    },
    hi: {
      name: "कोलकाता दम बिरयानी (आलू और अंडे के साथ)",
      category: "दोपहर का भोजन",
      famousFor: "मीठे अत्तर और केवड़े की खुशबू, रसीला मटन और इसका खास मसालेदार बड़ा आलू।",
      description: "अवधी नवाबों के दौर की सौगात। हल्की मसालों वाली सुगंधित बासमती बिरयानी जिसमें जूसी मीट के साथ चाशनी जैसा घुला हुआ आलू और उबला अंडा परोसा जाता है।"
    }
  },
  ccu_kathi_roll: {
    en: {
      name: "Kolkata Nizam Kathi Roll",
      category: "Snack & Street Food",
      famousFor: "Flaky layered paratha wrapped around skewered kebab filling with onions, lime, and green chilies.",
      description: "The original Indian street wrap invented at Nizam's. Crispy, ghee-fried paratha layered with an egg, rolled tightly around skewer-grilled marinated chicken or mutton kebabs, sliced red onions, green chilies, and a squeeze of fresh lime."
    },
    te: {
      name: "కోల్‌కతా నిజామ్ కాథీ రోల్",
      category: "స్నాక్స్ & వీధి ఆహారం",
      famousFor: "పొరలు పొరలుగా ఉండే క్రిస్పీ పరాటాలో కబాబ్ ముక్కలు, ఉల్లిపాయలు చుట్టిన రోల్.",
      description: "కోల్‌కతా వీధుల్లో పుట్టిన ఒరిజినల్ రోల్. కోడిగుడ్డు వేసి కాల్చిన పరాటాలో బొగ్గులపై కాల్చిన కబాబ్ ముక్కలు, పచ్చిమిర్చి, నిమ్మరసం చల్లి చుడతారు."
    },
    hi: {
      name: "कोलकाता काठी रोल",
      category: "स्नैक्स और स्ट्रीट फूड",
      famousFor: "कुरकुरे लच्छा पराठे में लिपटे हुए सीख कबाब, प्याज, हरी मिर्च और नींबू का रस।",
      description: "स्ट्रीट फूड का बादशाह। अंडे वाले कुरकुरे पराठे के अंदर तंदूरी कबाब, प्याज के लच्छे और तीखी हरी मिर्च भरकर रोल बनाया जाता है।"
    }
  },
  ccu_rasgulla: {
    en: {
      name: "Spongy Bengali Rasgulla & Sandesh",
      category: "Dessert & Sweet",
      famousFor: "Pillowy soft cottage cheese spheres steeped in light cardamom sugar syrup.",
      description: "The quintessential Bengali sweet made by kneading fresh chenna (cottage cheese) into light, airy spheres and boiling them in pure cardamom-infused sugar syrup until they achieve a cloud-like spongy bounce."
    },
    te: {
      name: "బెంగాలీ రసగుల్లా & సందేశ్",
      category: "తీపి పదార్థాలు",
      famousFor: "తాజా జున్ను (ఛేనా)తో చేసి చక్కెర పాకంలో నానబెట్టిన మెత్తటి స్పాంజ్ రసగుల్లా.",
      description: "పశ్చిమ బెంగాల్ సాంప్రదాయ తీపి వంటకం. స్వచ్ఛమైన ఆవు పాల ఛేనాతో చేసిన ఉండలను యాలకుల సువాసన గల చక్కెర పాకంలో ఉడికించి తయారుచేస్తారు."
    },
    hi: {
      name: "बंगाली रसगुल्ला और संदेश",
      category: "मीठे पकवान",
      famousFor: "ताजा छेना से बने बेहद स्पंजी और रसीले रसगुल्ले, इलायची की चाशनी में डूबे हुए।",
      description: "बंगाल का ऐतिहासिक मिष्ठान। ताजा छेना को गूंथकर बनाई गई गोलियों को हल्की चाशनी में पकाया जाता है जो मुंह में जाते ही रस छोड़ देती हैं।"
    }
  },
  maa_chettinad_chicken: {
    en: {
      name: "Spicy Chettinad Chicken Pepper Fry",
      category: "Lunch",
      famousFor: "Fiery dry chicken roast packed with stone ground black pepper, kalpasi, star anise, and curry leaves.",
      description: "A culinary tour de force from Tamil Nadu's Chettinad region. Country chicken tossed in a freshly roasted paste of black peppercorns, star anise, kalpasi (stone flower), dry red chilies, garlic, and fried crisp curry leaves."
    },
    te: {
      name: "చెట్టినాడు చికెన్ పెప్పర్ ఫ్రై",
      category: "భోజనం",
      famousFor: "మిరియాలు, కల్పసి, సోంపు మరియు కరివేపాకు సువాసనతో చేసే ఘాటైన చెట్టినాడు చికెన్ వేపుడు.",
      description: "తమిళనాడు చెట్టినాడు ప్రాంతపు ప్రసిద్ధ వంటకం. తాజాగా నూరిన నల్ల మిరియాలు, రాతి పువ్వు, ఎండుమిర్చి మరియు కరివేపాకుతో చికెన్‌ను ఘాటుగా వేయిస్తారు."
    },
    hi: {
      name: "चेट्टीनाड चिकन पेपर फ्राई",
      category: "दोपहर का भोजन",
      famousFor: "काली मिर्च, सौंफ, कल्पसी और करी पत्ते के तीखे पारंपरिक मसालों में भुना हुआ चिकन।",
      description: "तमिलनाडु के चेट्टीनाड की खास डिश। ताजी कुटी हुई काली मिर्च, पत्थर के फूल (कल्पसी), लाल मिर्च और करी पत्तों के साथ चिकन को गाढ़ा भूना जाता है।"
    }
  },
  lko_galouti_kebab: {
    en: {
      name: "Lucknow Galouti Kebab with Ulte Tawe Ka Paratha",
      category: "Dinner",
      famousFor: "Melt-in-mouth smoked minced meat patties infused with 160+ secret royal botanicals and raw papaya.",
      description: "Created for the toothless Nawab Asad-ud-Daula of Awadh. Finely minced lamb tenderized with raw green papaya, infused with royal potli masala, smoked with cloves, and pan-seared in ghee until it literally dissolves on the tongue."
    },
    te: {
      name: "లక్నో గలౌటీ కబాబ్ & పరాటా",
      category: "రాత్రి భోజనం",
      famousFor: "నోట్లో వెన్నలా కరిగిపోయే మెత్తటి నవాబీ మటన్ కబాబ్ మరియు ఉల్టే తవా పరాటా.",
      description: "లక్నో నవాబుల కాలం నాటి కళాఖండం. సన్నగా రుబ్బిన మటన్‌ను బొప్పాయి, 160 కి పైగా మూలికల మసాలాలతో నానబెట్టి, నెయ్యిలో వేయించి పరాటాతో వడ్డిస్తారు."
    },
    hi: {
      name: "लखनवी गलौटी कबाब और पराठा",
      category: "रात का भोजन",
      famousFor: "मुंह में मक्खन की तरह पिघल जाने वाले कबाब, 160 गुप्त शाही मसालों और उल्टे तवे के पराठे के साथ।",
      description: "अवध के नवाबों का शाही तोहफा। कीमे को कच्चे पपीते और खास पोटली मसाले के साथ इतनी बारीकी से पीसा जाता है कि यह जीभ पर रखते ही घुल जाता है।"
    }
  },
  asr_amritsari_kulcha: {
    en: {
      name: "Amritsari Stuffed Kulcha & Chole",
      category: "Lunch",
      famousFor: "Multi-layered flaky tandoor bread stuffed with spiced potato and crushed pomegranate seeds.",
      description: "Golden crispy flatbread rolled with layers of desi ghee, stuffed with seasoned potatoes, onions, and anardana, baked in an intense charcoal tandoor and crushed by hand before being drowned in white butter, served with spicy chole and tamarind-onion chutney."
    },
    te: {
      name: "అమృత్‌సరి కుల్చా & చోలే",
      category: "భోజనం",
      famousFor: "తందూర్‌లో కాల్చిన పొరల కుల్చా, వెన్న మరియు మసాలా చోలే కాంబినేషన్.",
      description: "పంజాబ్ అమృత్‌సర్ ప్రసిద్ధ వంటకం. బంగాళాదుంపలు, దానిమ్మ గింజల మసాలా స్టఫ్ చేసి తందూర్‌లో క్రిస్పీగా కాల్చి, చేత్తో నలిపి వెన్న వేసి చోలేతో ఇస్తారు."
    },
    hi: {
      name: "अमृतसरी कुल्चा और छोले",
      category: "दोपहर का भोजन",
      famousFor: "तंदूर में सिका खस्ता लच्छेदार आलू-अनारदाने का कुल्चा, मक्खन और तीखे छोले।",
      description: "पंजाब की शान। घी की परतों से बना खस्ता कुल्चा, जिसमें मसालेदार आलू भरा होता है। तंदूर से निकालकर हाथ से फोड़कर सफेद मक्खन के साथ परोसा जाता है।"
    }
  },
  tokyo_ramen: {
    en: {
      name: "Tokyo Tonkotsu & Shoyu Ramen",
      category: "Dinner",
      famousFor: "Slow-simmered rich pork bone broth with springy handmade noodles, chashu slices, and seasoned soft-boiled egg.",
      description: "The soul of Tokyo's ramen masters. Chewy wheat noodles in a 16-hour simmered collagen-rich broth, topped with melt-in-mouth braised pork belly (chashu), marinated soft-boiled egg (ajitsuke tamago), bamboo shoots (menma), and toasted nori seaweed."
    },
    te: {
      name: "టోక్యో రామెన్ నూడుల్స్",
      category: "రాత్రి భోజనం",
      famousFor: "16 గంటలు మరిగించిన రిచ్ సూప్, చేతితో చేసిన నూడుల్స్ మరియు మృదువైన చికెన్/ఎగ్ టాపింగ్స్.",
      description: "జపాన్ టోక్యో ప్రసిద్ధ వంటకం. ఘుమఘుమలాడే సూప్‌లో నూడుల్స్, సాస్ లో ఉడికించిన మాంసం ముక్కలు, గుడ్డు మరియు నోరి ఆకులతో వడ్డిస్తారు."
    },
    hi: {
      name: "टोक्यो रामेन नूडल्स सूप",
      category: "रात का भोजन",
      famousFor: "16 घंटे तक उबाले गए स्वादिष्ट शोरबे में गेहूं के नूडल्स, उबला अंडा और स्मोकी मीट स्लाइस।",
      description: "जापानी खानपान का मास्टरपीस। कोलेजन से भरपूर गाढ़े सूप में ताजे नूडल्स, मैरीनेट किया हुआ आधा उबला अंडा, बांस के अंकुर और समुद्री शैवाल परोसा जाता है।"
    }
  },
  tokyo_sushi: {
    en: {
      name: "Edomae Nigiri Sushi",
      category: "Lunch",
      famousFor: "Hand-pressed seasoned vinegared rice draped with pristine grade-A fresh sashimi and freshly grated wasabi.",
      description: "The pinnacle of Japanese culinary precision. Master-crafted vinegared Koshihikari rice topped with raw, aged wild bluefin tuna, salmon, or scallop, brushed lightly with aged Nikiri soy sauce and authentic fresh mountain wasabi."
    },
    te: {
      name: "జపనీస్ నిగిరి సుషీ",
      category: "భోజనం",
      famousFor: "వినెగర్ కలిపిన బియ్యం ఉండలపై తాజా సాల్మన్/టునా చేప ముక్కలు మరియు వసాబీ.",
      description: "జపాన్ సంప్రదాయ సుషీ కళ. ప్రత్యేకంగా తయారుచేసిన అన్నంపై తాజా చేప ముక్కలను పెట్టి, సోయా సాస్ మరియు ఘాటైన వసాబీతో అందిస్తారు."
    },
    hi: {
      name: "जापानी निगिरी सुशी",
      category: "दोपहर का भोजन",
      famousFor: "सिरके वाले खास चावलों पर ताजी सैल्मन या टूना फिश और वसाबी का जादुई स्वाद।",
      description: "जापानी कला का उत्कृष्ट नमूना। विनेगर वाले चावल के ऊपर ताजी कटी हुई प्रीमियम मछली को निकिरी सोया सॉस और वसाबी के साथ सजाया जाता है।"
    }
  },
  tokyo_katsu_curry: {
    en: {
      name: "Crispy Chicken Katsu Curry",
      category: "Lunch",
      famousFor: "Panko-crusted crispy fried cutlet over steamed rice with thick aromatic Japanese sweet-savory curry.",
      description: "Golden, crunchy Japanese panko-breaded chicken cutlet sliced and served over steaming short-grain rice, blanketed with a rich, glossy, mildly spiced sweet-savory curry gravy packed with caramelized onions, carrots, and potatoes."
    },
    te: {
      name: "క్రిస్పీ కాట్సు కర్రీ & రైస్",
      category: "భోజనం",
      famousFor: "కరకరలాడే ప్యాంకో చికెన్ కట్లెట్ మరియు జపనీస్ కర్రీ గ్రేవీ కాంబినేషన్.",
      description: "జపాన్‌లో అత్యంత ఇష్టపడే రైస్ డిష్. క్రిస్పీగా వేయించిన చికెన్ కట్లెట్‌పై చిక్కని కర్రీ గ్రేవీ వేసి వేడి అన్నంతో తింటారు."
    },
    hi: {
      name: "कुरकुरा कत्सु करी राइस",
      category: "दोपहर का भोजन",
      famousFor: "पैंको ब्रेडक्रंब्स में तला हुआ कुरकुरा चिकन कटलेट, गाढ़ी जापानी करी और उबले चावल।",
      description: "जापान का बेहद लोकप्रिय खाना। कुरकुरे फ्राइड कटलेट को गाढ़ी, हल्की मीठी-नमकीन करी और चावल के साथ परोसा जाता है।"
    }
  },
  tokyo_souffle_pancake: {
    en: {
      name: "Fluffy Japanese Soufflé Pancakes",
      category: "Dessert & Sweet",
      famousFor: "Cloud-like, jiggly whipped egg-white pancakes served with whipped butter, maple syrup, and fresh berries.",
      description: "Ultra-airy, delicate pancakes made by whipping egg whites to stiff meringue peaks before slow-griddling with steam. Incredibly light, custardy inside, and finished with organic butter, pure maple syrup, and dusting sugar."
    },
    te: {
      name: "జపనీస్ సోఫిల్ పాన్‌కేక్స్",
      category: "తీపి పదార్థాలు",
      famousFor: "దూదిలా మెత్తగా, నోట్లో కరిగిపోయే జపనీస్ పాన్‌కేక్స్, తేనె మరియు వెన్నతో.",
      description: "ఎగ్ వైట్ మెరింగ్యూతో చేసే సూపర్ సాఫ్ట్ పాన్‌కేక్స్. వెన్న, మేపుల్ సిరప్ మరియు తాజా పండ్ల ముక్కలతో ఎంతో రుచిగా ఉంటాయి."
    },
    hi: {
      name: "जापानी सूफ्ले पैनकेक्स",
      category: "मीठे पकवान",
      famousFor: "बादल जैसे बेहद हल्के, फूले हुए पैनकेक्स, मक्खन, मेपल सिरप और ताजे फलों के साथ।",
      description: "अंडे की मलाईदार झाग से बने बेहद नाजुक और फूले हुए पैनकेक्स। मुंह में रखते ही घुल जाते हैं, ऊपर से शुद्ध मक्खन और मेपल सिरप डाला जाता है।"
    }
  },
  osaka_takoyaki: {
    en: {
      name: "Crispy Osaka Takoyaki (Octopus Balls)",
      category: "Snack & Street Food",
      famousFor: "Sizzling spherical batter balls stuffed with diced octopus, brushed with sweet brown sauce and dancing bonito flakes.",
      description: "Osaka's most famous street food. Crispy golden globes with a creamy piping-hot core containing tender octopus morsels, pickled ginger, and green onions, topped with Japanese mayo, savory takoyaki sauce, seaweed powder, and fluttering katsuobushi flakes."
    },
    te: {
      name: "ఒసాకా టకోయాకి (స్నాక్ బాల్స్)",
      category: "స్నాక్స్ & వీధి ఆహారం",
      famousFor: "గుండ్రటి క్రిస్పీ పిండి బాల్స్, ప్రత్యేక సాస్ మరియు మయోన్నైస్‌తో ఇచ్చే వీధి వంటకం.",
      description: "ఒసాకా వీధుల స్పెషల్. ప్రత్యేక పెనంపై గుండ్రంగా కాల్చిన క్రిస్పీ బాల్స్ పై తీపి సాస్, జపనీస్ మయో మరియు టాపింగ్స్ వేసి ఇస్తారు."
    },
    hi: {
      name: "ओसाका ताकोयाकी (स्ट्रीट स्नैक)",
      category: "स्नैक्स और स्ट्रीट फूड",
      famousFor: "गोल कुरकुरे बॉल्स, खास मीठी-नमकीन सॉस, जापानी मेयोनीज और स्वादिष्ट टॉपिंग्स।",
      description: "ओसाका की मशहूर स्ट्रीट डिश। बाहर से कुरकुरे और अंदर से मलाईदार बॉल्स को खास सॉस, मेयोनीज और हर्ब्स से सजाकर गरमा-गरम खाया जाता है।"
    }
  },
  seoul_kfc: {
    en: {
      name: "Yangnyeom Korean Crispy Fried Chicken",
      category: "Dinner",
      famousFor: "Double-fried ultra-crunchy chicken drenched in sticky sweet-spicy gochujang garlic glaze.",
      description: "The gold standard of fried chicken. Thin starch-coated chicken double-deep-fried to an impossible glass-like crunch, tossed in a sizzling wok with fermented red chili paste (gochujang), garlic, honey, and sesame seeds."
    },
    te: {
      name: "కొరియన్ క్రిస్పీ ఫ్రైడ్ చికెన్",
      category: "రాత్రి భోజనం",
      famousFor: "రెండుసార్లు వేయించి క్రిస్పీగా చేసిన చికెన్ పై స్పైసీ గోచుజాంగ్ సాస్ మరియు నువ్వులు.",
      description: "కొరియా దేశపు ప్రసిద్ధ చికెన్. రెండుసార్లు డీప్ ఫ్రై చేసి అద్భుతమైన క్రిస్పీనెస్‌తో, తియ్యటి-కారపు కొరియన్ చిల్లీ సాస్‌తో కోట్ చేస్తారు."
    },
    hi: {
      name: "कोरियन क्रिस्पी फ्राइड चिकन",
      category: "रात का भोजन",
      famousFor: "दो बार तला हुआ बेहद कुरकुरा चिकन, मीठी-तीखी गोचुजंग चिली सॉस और तिल में लिपटा हुआ।",
      description: "सियोल की सबसे मशहूर डिश। चिकन को दो बार तलकर कांच जैसा कुरकुरा बनाया जाता है और फिर तीखी-मीठी कोरियन चिली सॉस और शहद में लपेटा जाता है।"
    }
  },
  seoul_bibimbap: {
    en: {
      name: "Dolsot Bibimbap (Sizzling Stone Bowl Rice)",
      category: "Lunch",
      famousFor: "Hot sizzling stone bowl rice topped with seasoned mountain vegetables, egg yolk, and spicy gochujang.",
      description: "Served in an intensely hot stone earthenware bowl where sesame oil crisps the bottom rice into golden crackling crust. Topped with sautéed spinach, bean sprouts, mushrooms, zucchini, raw egg yolk, and fiery fermented chili paste."
    },
    te: {
      name: "డోల్‌సోట్ బిబింబాప్ (రైస్ బౌల్)",
      category: "భోజనం",
      famousFor: "వేడి రాతి గిన్నెలో అన్నం, రకరకాల కూరగాయలు, ఎగ్ మరియు గోచుజాంగ్ పేస్ట్ కాంబినేషన్.",
      description: "కొరియన్ సాంప్రదాయ రైస్ బౌల్. వేడి రాతి పాత్రలో అడుగున క్రిస్పీగా మారే అన్నంపై పుట్టగొడుగులు, ఆకుకూరలు, కూరగాయలు మరియు స్పైసీ పేస్ట్ వేసి కలుపుతారు."
    },
    hi: {
      name: "डोलसोट बिबिम्बाप (राइस बाउल)",
      category: "दोपहर का भोजन",
      famousFor: "मसालेदार चावल, रंग-बिरंगी सब्जियां, अंडा और तीखा कोरियन पेस्ट एक गरमा-गरम पत्थर के कटोरे में।",
      description: "कोरिया का पौष्टिक बाउल भोजन। तेज गर्म पत्थर के बर्तन में नीचे कुरकुरे चावल के ऊपर तली हुई सब्जियां, मशरूम, अंडा और गोचुजंग पेस्ट मिलाकर खाया जाता है।"
    }
  },
  bkk_pad_thai: {
    en: {
      name: "Bangkok Street Pad Thai Kung",
      category: "Dinner",
      famousFor: "Wok-tossed rice noodles with jumbo prawns, crushed peanuts, tofu, bean sprouts, and sweet-sour tamarind.",
      description: "Thailand's national street dish. Flat rice noodles flash-fried over roaring wok flames with fresh shrimp, pressed tofu, eggs, tamarind pulp, fish sauce, palm sugar, dried shrimp, garlic chives, and crunchy roasted crushed peanuts."
    },
    te: {
      name: "బ్యాంకాక్ పాడ్ థాయ్ నూడుల్స్",
      category: "రాత్రి భోజనం",
      famousFor: "రొయ్యలు, చింతపండు సాస్, వేరుశెనగ పలుకులు మరియు తాజా మొలకలతో చేసే థాయ్ నూడుల్స్.",
      description: "థాయిలాండ్ ప్రసిద్ధ స్ట్రీట్ నూడుల్స్. బియ్యపు నూడుల్స్ ను రొయ్యలు, టోఫు, గుడ్డు, చింతపండు పాకం మరియు వేరుశెనగ పొడితో వోక్‌లో వేయించి చేస్తారు."
    },
    hi: {
      name: "बैंकॉक स्ट्रीट पैड थाई",
      category: "रात का भोजन",
      famousFor: "चावल के नूडल्स, झींगा (प्रॉन्स), भुनी मूंगफली, इमली का सॉस और ताजे अंकुरित दाने।",
      description: "थाईलैंड का राष्ट्रीय व्यंजन। तेज आंच की कड़ाही में राइस नूडल्स को झींगे, अंडे, टोफू, खट्टी-मीठी इमली और मूंगफली के साथ फ्राई किया जाता है।"
    }
  },
  bkk_mango_sticky_rice: {
    en: {
      name: "Mango Sticky Rice (Khao Niew Mamuang)",
      category: "Dessert & Sweet",
      famousFor: "Sweet glutinous coconut sticky rice paired with chilled ripe golden honey mango slices and toasted mung beans.",
      description: "Heavenly Thai dessert featuring fragrant sweet sticky rice steamed and soaked in warm sweetened salted coconut cream, accompanied by perfectly ripe sweet yellow honey mangoes and crunchy toasted yellow mung beans."
    },
    te: {
      name: "మ్యాంగో స్టిక్కీ రైస్ (థాయ్ స్వీట్)",
      category: "తీపి పదార్థాలు",
      famousFor: "కొబ్బరి పాలలో ఉడికించిన స్వీట్ రైస్ మరియు తియ్యటి మామిడి పండ్ల ముక్కల కలయిక.",
      description: "థాయిలాండ్ ప్రసిద్ధ స్వీట్. కొబ్బరి పాలు, పంచదారలో నానబెట్టిన స్టిక్కీ రైస్‌ను తియ్యని మామిడిపండు ముక్కలతో కలిపి తింటారు."
    },
    hi: {
      name: "मैंगो स्टिकी राइस",
      category: "मीठे पकवान",
      famousFor: "नारियल के गाढ़े दूध में पके मीठे चावल और पके हुए रसीले मीठे आम के टुकड़े।",
      description: "थाईलैंड का विश्वप्रसिद्ध डेजर्ट। मीठे चिपचिपे चावल को नारियल की मलाईदार क्रीम में भिगोकर पके मीठे आमों और कुरकुरी मूंग दाल के साथ परोसा जाता है।"
    }
  },
  bkk_tom_yum: {
    en: {
      name: "Spicy Tom Yum Goong (Prawn Soup)",
      category: "Dinner",
      famousFor: "Aromatic sweet-sour-spicy broth infused with lemongrass, kaffir lime leaves, galangal, and fresh river prawns.",
      description: "An explosion of Thai aromatics. Clear yet fiery broth simmering with fragrant lemongrass stalks, crushed galangal roots, bruised kaffir lime leaves, Thai bird's eye chilies, juicy river prawns, straw mushrooms, and freshly squeezed lime juice."
    },
    te: {
      name: "టామ్ యమ్ ప్రాన్స్ సూప్",
      category: "రాత్రి భోజనం",
      famousFor: "లెమన్‌గ్రాస్, నిమ్మ ఆకులు, అల్లం మరియు రొయ్యలతో చేసే ఘాటైన థాయ్ సూప్.",
      description: "థాయ్ సుగంధ ద్రవ్యాల సూప్. లెమన్‌గ్రాస్, పచ్చిమిర్చి, నిమ్మరసం మరియు తాజా రొయ్యలతో తయారుచేసే పుల్లని-కారపు అద్భుతమైన సూప్."
    },
    hi: {
      name: "टॉम यम प्रॉन्स सूप",
      category: "रात का भोजन",
      famousFor: "लेमनग्रास, गालंगल, काफिर लाइम और झींगों से बना खट्टा-तीखा सुगंधित थाई सूप।",
      description: "थाईलैंड का प्रतिष्ठित सूप। लेमनग्रास, तीखी मिर्च, मशरूम, नींबू के रस और ताजे प्रॉन्स के साथ उबाला गया बेहद ताजगी भरा सूप।"
    }
  },
  han_pho_bo: {
    en: {
      name: "Traditional Vietnamese Pho Bo (Beef Noodle Soup)",
      category: "Breakfast",
      famousFor: "24-hour simmered spiced bone broth with flat rice noodles, paper-thin beef slices, and fresh herbs.",
      description: "The pride of Hanoi. Fragrant, crystal-clear bone broth infused with charred ginger, star anise, cinnamon, and black cardamom, poured boiling over silky flat rice noodles, rare beef slices, fresh Thai basil, cilantro, and bean sprouts."
    },
    te: {
      name: "వియత్నామీస్ ఫో బో (నూడుల్ సూప్)",
      category: "అల్పాహారం",
      famousFor: "24 గంటలు మరిగించిన సుగంధ సూప్, బియ్యపు నూడుల్స్ మరియు తాజా మూలికలు.",
      description: "వియత్నాం దేశపు ప్రసిద్ధ అల్పాహార సూప్. దాల్చినచెక్క, అనాసపువ్వు మరియు అల్లంతో మరిగించిన క్లియర్ సూప్‌లో రైస్ నూడుల్స్, తులసి మరియు మొలకలు వేసి ఇస్తారు."
    },
    hi: {
      name: "वियतनामी फो बो (नूडल सूप)",
      category: "नाश्ता",
      famousFor: "दालचीनी, चक्रफूल और भुने अदरक के 24 घंटे उबले सूप में राइस नूडल्स और ताजी जड़ी-बूटियां।",
      description: "हनोई का पारंपरिक नूडल सूप। सुगंधित मसालों से बने साफ सूप को चावल के नूडल्स, मीट स्लाइस, तुलसी और नींबू के साथ गरमा-गरम परोसा जाता है।"
    }
  },
  han_banh_mi: {
    en: {
      name: "Crispy Vietnamese Banh Mi",
      category: "Lunch",
      famousFor: "Airy crusty baguette stuffed with savory pâté, pickled daikon-carrots, fresh cilantro, and chili.",
      description: "French culinary heritage meets vibrant Vietnamese street flavors. A feather-light, shattering-crisp baguette smeared with rich liver pâté and mayo, stuffed with seasoned pork, pickled radish and carrot, fresh cucumber, coriander, and fiery bird's eye chilies."
    },
    te: {
      name: "వియత్నామీస్ బాన్ మీ శాండ్‌విచ్",
      category: "భోజనం",
      famousFor: "క్రిస్పీ ఫ్రెంచ్ బాగుయెట్ బ్రెడ్ లో కూరగాయలు, సాస్ మరియు కొత్తిమీర నింపిన శాండ్‌విచ్.",
      description: "ఫ్రెంచ్ మరియు వియత్నాం రుచుల కలయిక. కరకరలాడే బ్రెడ్‌లో క్యారెట్, ముల్లంగి ముక్కలు, పచ్చిమిర్చి మరియు ప్రత్యేక సాస్‌లతో చేస్తారు."
    },
    hi: {
      name: "वियतनामी बान मी सैंडविच",
      category: "दोपहर का भोजन",
      famousFor: "कुरकुरे बैगुएट ब्रेड में भरा हुआ मसालेदार मीट, सिरके वाले गाजर-मूली और हरा धनिया।",
      description: "फ्रेंच और वियतनामी संस्कृति का संगम। बेहद हल्के और कुरकुरे ब्रेड में मलाईदार सॉस, सब्जियां, खीरा और हरी मिर्च भरकर बनाया गया स्वादिष्ट सैंडविच।"
    }
  },
  rom_carbonara: {
    en: {
      name: "Classic Roman Spaghetti Carbonara",
      category: "Dinner",
      famousFor: "Silky pasta coated in a creamy emulsion of egg yolks, Pecorino Romano cheese, black pepper, and crispy guanciale.",
      description: "Pure Roman perfection strictly with NO cream. Al dente spaghetti tossed vigorously in the rendering fat of crisp cured pork cheek (guanciale), bound into a glossy, velvety sauce with farm egg yolks, sharp aged Pecorino Romano, and coarse black pepper."
    },
    te: {
      name: "రోమన్ స్పఘెట్టి కార్బోనారా పాస్తా",
      category: "రాత్రి భోజనం",
      famousFor: "గుడ్డు పచ్చసొన, పెకోరినో చీజ్ మరియు నల్ల మిరియాలతో చేసే సాంప్రదాయ ఇటాలియన్ పాస్తా.",
      description: "రోమ్ నగరపు ప్రసిద్ధ పాస్తా. ఎటువంటి క్రీమ్ వాడకుండా, గుడ్లు, చీజ్ మరియు నల్ల మిరియాల మిశ్రమంతో అల్ డెంటే పాస్తాను క్రీమీగా తయారుచేస్తారు."
    },
    hi: {
      name: "क्लासिक रोमन पास्ता कार्बोनारा",
      category: "रात का भोजन",
      famousFor: "अंडे की जर्दी, पेकोरिनो चीज, काली मिर्च और कुरकुरे ग्वानचियाले से बना मलाईदार पास्ता।",
      description: "रोम की पारंपरिक रेसिपी (बिना किसी क्रीम के)। अल-दंते स्पेगेटी को अंडे, कद्दूकस की हुई चीज और ताजी कुटी काली मिर्च के साथ मलाईदार बनाकर परोसा जाता है।"
    }
  },
  rom_cacio_pepe: {
    en: {
      name: "Authentic Roman Cacio e Pepe",
      category: "Lunch",
      famousFor: "Minimalist ancient Roman pasta unified purely by aged Pecorino Romano cheese and toasted black peppercorns.",
      description: "One of the four classic Roman pastas. Made with just three ingredients: al dente tonnarelli pasta, starchy cooking water emulsified with sharp aged Pecorino Romano cheese, and freshly toasted crushed black peppercorns."
    },
    te: {
      name: "రోమన్ కాసియో ఎ పెపే పాస్తా",
      category: "భోజనం",
      famousFor: "కేవలం పెకోరినో చీజ్ మరియు వేయించిన మిరియాల పొడితో చేసే పురాతన రోమన్ పాస్తా.",
      description: "రోమ్ నగరపు అత్యంత పురాతన వంటకం. పాస్తా ఉడికించిన నీటితో చీజ్ మరియు నల్ల మిరియాలను కలిపి సాటిలేని క్రీమీ రుచిని అందిస్తారు."
    },
    hi: {
      name: "रोमन काशियो ए पेपे पास्ता",
      category: "दोपहर का भोजन",
      famousFor: "सिर्फ तीन चीजों से बना क्लासिक पास्ता: पास्ता, पेकोरिनो चीज और भुनी हुई काली मिर्च।",
      description: "रोम का सबसे सरल लेकिन लाजवाब पास्ता। पास्ता के पानी और तीखी पेकोरिनो चीज को मिलाकर गाढ़ा सॉस बनाया जाता है और भुनी काली मिर्च छिड़की जाती है।"
    }
  },
  nap_neapolitan_pizza: {
    en: {
      name: "Wood-Fired Neapolitan Pizza Margherita",
      category: "Dinner",
      famousFor: "UNESCO-heritage thin-crust pizza baked at 485°C with San Marzano tomatoes, fresh buffalo mozzarella, and basil.",
      description: "The birthplace of authentic pizza. 48-hour naturally fermented sourdough stretched by hand, topped with sweet volcanic San Marzano tomato sauce, fresh creamy mozzarella di bufala, and fragrant basil, blistered in a wood-fired brick oven for 90 seconds."
    },
    te: {
      name: "వుడ్-ఫైర్డ్ నియాపోలిటన్ పిజ్జా",
      category: "రాత్రి భోజనం",
      famousFor: "చెక్కల బట్టీలో 90 సెకన్లలో కాల్చే యునెస్కో గుర్తింపు పొందిన సాంప్రదాయ ఇటాలియన్ పిజ్జా.",
      description: "పిజ్జా పుట్టిన నేల నేపుల్స్ స్పెషల్. చేత్తో సాగదీసిన పిండిపై తాజా టమోటా సాస్, బఫెలో మొజారెల్లా చీజ్ మరియు తులసి ఆకులు వేసి కాలుస్తారు."
    },
    hi: {
      name: "नेपोलिटन पिज्जा मार्गेरिटा",
      category: "रात का भोजन",
      famousFor: "485°C की लकड़ी की भट्टी में 90 सेकंड में बेक किया गया ताजा मोजरेला चीज और तुलसी का पिज्जा।",
      description: "इटली के नेपल्स का यूनेस्को-मान्यता प्राप्त पिज्जा। हाथ से फैलाए गए आटे पर सैन मार्जानो टमाटर, ताजा मोजरेला और बेसिल की पत्तियां डालकर भट्टी में सेका जाता है।"
    }
  },
  paris_croissant: {
    en: {
      name: "French Artisanal Butter Croissant",
      category: "Breakfast",
      famousFor: "Laminated golden pastry boasting thousands of flaky butter layers and an airy honeycomb honeycomb center.",
      description: "The pinnacle of French viennoiserie. High-fat French cultured butter folded repeatedly into yeasted dough over three days, baked until the exterior shatters like fine glass while the interior remains pillowy and intensely buttery."
    },
    te: {
      name: "ఫ్రెంచ్ బటర్ క్రోసెంట్",
      category: "అల్పాహారం",
      famousFor: "వెన్న పొరలతో బంగారు రంగులో కాల్చిన కరకరలాడే ఫ్రెంచ్ బేకరీ వంటకం.",
      description: "పారిస్ నగరపు ప్రసిద్ధ అల్పాహారం. ఫ్రెంచ్ వెన్నతో పొరలు పొరలుగా చేసి కాల్చిన క్రోసెంట్ పైభాగం క్రిస్పీగా, లోపల మెత్తగా వెన్న రుచితో ఉంటుంది."
    },
    hi: {
      name: "फ्रेंच बटर क्रोइसैंट",
      category: "नाश्ता",
      famousFor: "मक्खन की अनगिनत परतों से बना, ऊपर से बेहद खस्ता और अंदर से रुई जैसा नरम पेस्ट्री।",
      description: "पेरिस की विश्वप्रसिद्ध बेकरी सौगात। शुद्ध मक्खन के साथ आटे की कई परतें बनाई जाती हैं और सुनहरा भूरा होने तक बेक किया जाता है।"
    }
  },
  paris_onion_soup: {
    en: {
      name: "Classic French Onion Soup (Soupe à l'oignon)",
      category: "Dinner",
      famousFor: "Deeply caramelized onion broth topped with toasted baguette croutons and a blanket of broiled Gruyère cheese.",
      description: "Bistro soul food perfected. Sweet yellow onions slow-caramelized over hours with butter and thyme, deglazed with white wine and rich beef stock, topped with crusty bread and melted bubbling nutty Gruyère cheese under a broiler."
    },
    te: {
      name: "ఫ్రెంచ్ ఆనియన్ సూప్",
      category: "రాత్రి భోజనం",
      famousFor: "ఉల్లిపాయలు, వెన్న మరియు గ్రుయేర్ చీజ్ తో తయారుచేసే ఘనమైన ఫ్రెంచ్ సూప్.",
      description: "పారిస్ రెస్టారెంట్ల స్పెషల్. నెమ్మదిగా వేయించిన ఉల్లిపాయల సూప్‌పై బ్రెడ్ ముక్కలు, చీజ్ వేసి బబుల్ అయ్యేలా కాల్చి అందిస్తారు."
    },
    hi: {
      name: "पारंपरिक फ्रेंच अनियन सूप",
      category: "रात का भोजन",
      famousFor: "घंटों तक कैरेमेलाइज की गई मीठी प्याज का सूप, ऊपर से सिका हुआ ब्रेड और पिघला हुआ ग्रुयेर चीज।",
      description: "पेरिस का क्लासिक विंटर सूप। मक्खन में धीमी आंच पर भुनी प्याज और रिच स्टॉक से बना सूप, जिसके ऊपर क्रस्टी ब्रेड और पिघली हुई चीज की परत होती है।"
    }
  },
  ldn_fish_chips: {
    en: {
      name: "Classic British Fish and Chips",
      category: "Lunch",
      famousFor: "Beer-battered flaky Atlantic cod with thick-cut triple-cooked chips, mushy peas, and tartare sauce.",
      description: "The timeless British coastal feast. Thick fillet of line-caught Atlantic cod dipped in cold ale batter and fried to golden crunch, served with thick floury hand-cut chips, malt vinegar, crushed minted marrowfat peas, and tangy tartare."
    },
    te: {
      name: "బ్రిటిష్ ఫిష్ అండ్ చిప్స్",
      category: "భోజనం",
      famousFor: "కరకరలాడే బ్యాటర్ లో వేయించిన చేప ముక్కలు, పెద్ద బంగాళాదుంప ఫ్రైస్ మరియు టార్టార్ సాస్.",
      description: "లండన్ మరియు యూకే ప్రసిద్ధ ఆహారం. క్రిస్పీగా వేయించిన సముద్రపు చేపతో పాటు వేడి వేడి ఆలూ చిప్స్, నిమ్మరసం, టార్టార్ సాస్‌తో తింటారు."
    },
    hi: {
      name: "ब्रिटिश फिश एंड चिप्स",
      category: "दोपहर का भोजन",
      famousFor: "कुरकुरे बैटर में तली हुई अटलांटिक मछली, मोटे कटे हुए आलू चिप्स और टार्टर सॉस।",
      description: "ब्रिटेन का सबसे लोकप्रिय भोजन। ताजी मछली को कुरकुरे बैटर में तला जाता है और मोटे फ्रेंच फ्राइज, सिरका और चटपटी टार्टर सॉस के साथ परोसा जाता है।"
    }
  },
  ldn_full_english: {
    en: {
      name: "Traditional Full English Breakfast",
      category: "Breakfast",
      famousFor: "Sizzling Cumberland sausages, crispy bacon, fried eggs, grilled tomatoes, mushrooms, baked beans, and buttered toast.",
      description: "A legendary hearty feast. Pork sausages, back bacon, golden sunny-side-up eggs, sautéed button mushrooms, grilled tomato halves, warm baked beans in tomato sauce, black pudding, and thick buttered sourdough toast."
    },
    te: {
      name: "ఫుల్ ఇంగ్లీష్ బ్రేక్‌ఫాస్ట్",
      category: "అల్పాహారం",
      famousFor: "ఎగ్స్, సాసేజ్, బేక్డ్ బీన్స్, కాల్చిన టమోటాలు మరియు వెన్న టోస్ట్‌తో కూడిన పూర్తి నాస్తా.",
      description: "లండన్ సాంప్రదాయ భారీ అల్పాహారం. గుడ్లు, సాసేజ్‌లు, పుట్టగొడుగులు, కాల్చిన టమోటాలు మరియు వెన్న రాసిన టోస్ట్ బ్రెడ్‌తో రోజంతా శక్తినిచ్చేలా ఉంటుంది."
    },
    hi: {
      name: "ट्रेडिशनल फुल इंग्लिश ब्रेकफास्ट",
      category: "नाश्ता",
      famousFor: "अंडे, सॉसेज, बेक्ड बीन्स, ग्रिल्ड टमाटर, मशरूम और मक्खन वाले टोस्ट का भरपूर नाश्ता।",
      description: "इंग्लैंड का पारंपरिक नाश्ता। तले हुए अंडे, सॉसेज, टमाटर, मशरूम और बेक्ड बीन्स को बटर टोस्ट के साथ परोसा जाता है जो पूरे दिन के लिए ऊर्जा देता है।"
    }
  },
  ist_doner_kebab: {
    en: {
      name: "Authentic Turkish Döner Kebab",
      category: "Lunch",
      famousFor: "Vertically spit-roasted seasoned lamb and beef sliced paper-thin into warm lavash bread with sumac onions.",
      description: "The Ottoman culinary marvel. Marinated layers of lamb and beef slow-roasted on a vertical rotating spit, shaved into tender ribbons, stuffed into pillowy flatbread with sumac onions, grilled peppers, and cool garlicky yogurt sauce."
    },
    te: {
      name: "టర్కిష్ డోనర్ కబాబ్",
      category: "భోజనం",
      famousFor: "నిలువుగా తిరిగే గ్రిల్ పై కాల్చి సన్నగా తరిగిన మాంసం ముక్కలు, లవాష్ రొట్టె మరియు వెల్లుల్లి సాస్.",
      description: "ఇస్తాంబుల్ నగరపు ప్రసిద్ధ వీధి ఆహారం. నిలువుగా తిరుగుతూ కాలిన మాంసాన్ని సన్నటి పొరలుగా కోసి, మెత్తటి రొట్టెలో ఉల్లిపాయలు, సాస్‌లతో చుట్టి ఇస్తారు."
    },
    hi: {
      name: "टर्किश डोनर कबाब",
      category: "दोपहर का भोजन",
      famousFor: "घूमती हुई ग्रिल पर भुना हुआ बारीक कटा मटन, ताजी लवाश रोटी और लहसुन की चटनी।",
      description: "इस्तांबुल का ऐतिहासिक स्ट्रीट फूड। धीमी आंच पर सिके हुए मटन के पतले लच्छों को ताजी रोटी में प्याज, ग्रिल्ड मिर्च और गार्लिक सॉस के साथ परोसा जाता है।"
    }
  },
  ist_baklava: {
    en: {
      name: "Gaziantep Pistachio Baklava",
      category: "Dessert & Sweet",
      famousFor: "40 layers of paper-thin phyllo pastry stuffed with emerald Antep pistachios and drenched in lemon sugar syrup.",
      description: "The crown of Turkish confectioners. Forty micro-thin layers of hand-rolled phyllo pastry generously filled with vibrant green Gaziantep pistachios and clarified butter, baked golden and soaked in aromatic syrup."
    },
    te: {
      name: "టర్కిష్ పిస్తా బక్లావా",
      category: "తీపి పదార్థాలు",
      famousFor: "40 మైక్రో పొరల పిండి రొట్టెలు, పచ్చని పిస్తాపప్పు మరియు చక్కెర పాకంతో చేసిన రాజరిక తీపి వంటకం.",
      description: "టర్కీ దేశపు అత్యుత్తమ స్వీట్. స్వచ్ఛమైన నెయ్యి, పిస్తాపప్పు నింపిన సన్నటి పొరలను బంగారు రంగులో కాల్చి, నిమ్మరసం కలిపిన చక్కెర పాకంలో ముంచుతారు."
    },
    hi: {
      name: "गाजियांटेप पिस्ता बकलावा",
      category: "मीठे पकवान",
      famousFor: "40 बेहद पतली परतों वाली पेस्ट्री, शुद्ध गाजियांटेप पिस्ता और खुशबूदार चाशनी का शाही मेल।",
      description: "तुर्की की मशहूर मिठाई। हाथ से बेली गई पतली-पतली परतों में मक्खन और हरा पिस्ता भरकर बेक किया जाता है और ऊपर से चाशनी डाली जाती है।"
    }
  },
  nyc_pastrami: {
    en: {
      name: "Katz's Pastrami on Rye",
      category: "Lunch",
      famousFor: "Towering stack of spiced, smoked, and steamed beef pastrami on caraway rye bread with spicy mustard.",
      description: "The iconic NYC deli masterpiece. Beef brisket cured in brine, coated with crushed black pepper and coriander seeds, hardwood-smoked, and steamed until butter-tender, hand-carved thick and piled high between rye slices."
    },
    te: {
      name: "న్యూయార్క్ కాట్జ్ పాస్ట్రామి శాండ్‌విచ్",
      category: "భోజనం",
      famousFor: "మిరియాల మసాలాతో స్మోక్ చేసిన బీఫ్ ముక్కలను రై బ్రెడ్‌లో ఎత్తుగా పేర్చి ఇచ్చే న్యూయార్క్ డెలి స్పెషల్.",
      description: "న్యూయార్క్ నగరపు అత్యంత ప్రసిద్ధ శాండ్‌విచ్. స్మోక్ చేసిన జ్యుసి మాంసాన్ని సన్నగా కోసి, రై బ్రెడ్ మధ్య ఆవాల సాస్‌తో అందిస్తారు."
    },
    hi: {
      name: "न्यूयॉर्क पास्त्रामी सैंडविच",
      category: "दोपहर का भोजन",
      famousFor: "काली मिर्च और मसालों में स्मोक किया हुआ बेहद नरम मीट, राई ब्रेड और तीखी मस्टर्ड सॉस।",
      description: "न्यूयॉर्क के डेली का मशहूर सैंडविच। खास मसालों में पके स्मोक्ड मीट के ढेरों स्लाइस को राई ब्रेड के बीच मस्टर्ड सॉस के साथ परोसा जाता है।"
    }
  },
  nyc_pizza: {
    en: {
      name: "Authentic NY Style Foldable Pizza Slice",
      category: "Lunch",
      famousFor: "Huge, thin, crispy-yet-foldable slice with seasoned tomato sauce, molten whole-milk mozzarella, and oregano.",
      description: "The pulse of New York City street eating. A wide, hand-tossed triangle with a blistered crispy bottom and pliable chew, topped with crushed tomato sauce, aged low-moisture mozzarella, and crushed red pepper flakes."
    },
    te: {
      name: "న్యూయార్క్ స్టైల్ ఫోల్డబుల్ పిజ్జా",
      category: "భోజనం",
      famousFor: "చేత్తో మడతపెట్టి తినగలిగే పెద్ద, క్రిస్పీ న్యూయార్క్ పిజ్జా ముక్క.",
      description: "న్యూయార్క్ వీధుల్లో అత్యంత ప్రజాదరణ పొందిన పిజ్జా. క్రిస్పీ బేస్, చీజ్ మరియు టమోటా సాస్ తో పెద్ద స్లైస్‌గా లభిస్తుంది."
    },
    hi: {
      name: "न्यूयॉर्क स्टाइल फोल्डेबल पिज्जा स्लाइस",
      category: "दोपहर का भोजन",
      famousFor: "बड़ा, पतला और कुरकुरा पिज्जा स्लाइस जिसे हाथ से मोड़कर आसानी से खाया जा सकता है।",
      description: "न्यूयॉर्क का स्ट्रीट क्लासिक। हाथ से फैलाए गए पतले बेस पर खट्टा-मीठा टमाटर सॉस और मोजरेला चीज डालकर कुरकुरा सेका जाता है।"
    }
  },
  nyc_cheesecake: {
    en: {
      name: "Classic New York Baked Cheesecake",
      category: "Dessert & Sweet",
      famousFor: "Dense, ultra-creamy baked cream cheese custard over a buttery graham cracker crust.",
      description: "Rich, velvety, and tall. Made with heavy Philadelphia cream cheese, sour cream, farm egg yolks, and pure vanilla bean, slow-baked over a crushed graham cracker crust and chilled to dense, decadent perfection."
    },
    te: {
      name: "న్యూయార్క్ బేక్డ్ చీజ్‌కేక్",
      category: "తీపి పదార్థాలు",
      famousFor: "చిక్కటి క్రీమ్ చీజ్, వెన్నెలా మరియు కరకరలాడే బిస్కెట్ క్రస్ట్‌తో బేక్ చేసిన డెసర్ట్.",
      description: "ప్రపంచ ప్రసిద్ధ న్యూయార్క్ స్వీట్. రిచ్ క్రీమ్ చీజ్, వెన్నతో కూడిన బేస్ పై నెమ్మదిగా బేక్ చేసి చల్లగా అందిస్తారు."
    },
    hi: {
      name: "न्यूयॉर्क बेक्ड चीजकेक",
      category: "मीठे पकवान",
      famousFor: "गाढ़े क्रीम चीज, वैनिला और मक्खनी क्रस्ट से बना मलाईदार क्लासिक डेजर्ट।",
      description: "न्यूयॉर्क की शान। क्रीम चीज, मलाई और वैनिला के मिश्रण को कुरकुरे बिस्कुट के बेस पर बेक करके ठंडा परोसा जाता है।"
    }
  },
  nyc_smash_burger: {
    en: {
      name: "Classic Double Smash Cheeseburger",
      category: "Dinner",
      famousFor: "Two lacy-edged smashed beef patties with melted American cheese, secret sauce, pickles, and toasted potato bun.",
      description: "Griddled on smoking-hot cast iron to create maximum crispy Maillard browning. Two juicy smashed patties layered with gooey American cheese, diced sweet onions, dill pickles, and special thousand-island sauce in a buttered potato bun."
    },
    te: {
      name: "డబుల్ స్మాష్ చీజ్‌బర్గర్",
      category: "రాత్రి భోజనం",
      famousFor: "వేడి పెనంపై నొక్కి కాల్చిన జ్యుసి ప్యాటీలు, మెల్ట్ అయిన చీజ్ మరియు మెత్తటి బన్.",
      description: "అమెరికన్ శైలి బర్గర్. క్రిస్పీ అంచులతో కాల్చిన రెండు ప్యాటీల మధ్య చీజ్, ఊరగాయ ముక్కలు మరియు స్పెషల్ సాస్ వేసి అందిస్తారు."
    },
    hi: {
      name: "डबल स्मैश चीजबर्गर",
      category: "रात का भोजन",
      famousFor: "तवे पर दबाकर सेकी गई कुरकुरी पैटीज, पिघला हुआ चीज और नरम पोटैटो बन।",
      description: "अमेरिकन बर्गर की सबसे बेहतरीन डिश। तेज गर्म तवे पर सेकी गई दो जूसी पैटीज के बीच चीजी लेयर, अचार और स्पेशल सॉस का लाजवाब मेल।"
    }
  },
  cdmx_tacos_pastor: {
    en: {
      name: "Tacos al Pastor",
      category: "Dinner",
      famousFor: "Thin-sliced spit-roasted achiote-marinated pork with roasted pineapple, cilantro, and onions on warm corn tortillas.",
      description: "The undisputed king of Mexican street food. Pork loin marinated in achiote paste, dried guajillo chilies, and citrus, slow-roasted on a vertical trompo, sliced onto double warm corn tortillas with a flick of roasted pineapple."
    },
    te: {
      name: "మెక్సికన్ టాకోస్ అల్ పాస్టర్",
      category: "రాత్రి భోజనం",
      famousFor: "మొక్కజొన్న రొట్టెల్లో మసాలా పోర్క్/చికెన్, కాల్చిన అనాసపండు ముక్కలు, ఉల్లిపాయలు.",
      description: "మెక్సికో నగరపు ప్రసిద్ధ టాకోస్. వర్టికల్ గ్రిల్ పై కాల్చిన మాంసం ముక్కలను కార్న్ టోర్టిల్లాల్లో పెట్టి, అనాస ముక్కలు, కొత్తిమీర, నిమ్మరసంతో తింటారు."
    },
    hi: {
      name: "टकोस अल पास्टर",
      category: "रात का भोजन",
      famousFor: "मक्के की रोटी में भुना हुआ मसालेदार मीट, भुने अनानास के टुकड़े, प्याज और हरा धनिया।",
      description: "मेक्सिको की सबसे मशहूर स्ट्रीट डिश। मिर्च और मसालों में भुने मीट को मक्के की छोटी टॉर्टिला पर पाइनएप्पल और साल्सा सॉस के साथ परोसा जाता है।"
    }
  },
  cdmx_guacamole: {
    en: {
      name: "Fresh Guacamole & Crispy Tortilla Chips",
      category: "Snack & Street Food",
      famousFor: "Stone-mashed ripe Hass avocados with lime juice, cilantro, jalapeños, tomatoes, and warm salted totopos.",
      description: "Prepared table-side in a volcanic stone molcajete. Creamy ripe Hass avocados hand-mashed with freshly squeezed lime juice, diced serrano peppers, vine-ripened tomatoes, minced onions, and sea salt, served with fresh warm tortilla chips."
    },
    te: {
      name: "ఫ్రెష్ గ్వాకమోల్ & టోర్టిల్లా చిప్స్",
      category: "స్నాక్స్ & వీధి ఆహారం",
      famousFor: "తాజా అవోకాడో, నిమ్మరసం, కొత్తిమీర, పచ్చిమిర్చితో చేసే క్రీమీ డిప్ మరియు చిప్స్.",
      description: "మెక్సికన్ సంప్రదాయ డిప్. మెత్తటి అవోకాడో పండ్లను టమోటా, పచ్చిమిర్చి, నిమ్మరసంతో మెదిపి, క్రిస్పీ టోర్టిల్లా చిప్స్‌తో వడ్డిస్తారు."
    },
    hi: {
      name: "ताजा गुआकामोल और क्रिस्पी चिप्स",
      category: "स्नैक्स और स्ट्रीट फूड",
      famousFor: "ताजे एवोकाडो, नींबू का रस, हरी मिर्च और टमाटर का मलाईदार डिप, कुरकुरे चिप्स के साथ।",
      description: "मेक्सिको का पारंपरिक एवोकाडो डिप। पके हुए एवोकाडो को नींबू, धनिया, प्याज और मिर्च के साथ मैश करके ताजे नमकीन चिप्स के साथ खाया जाता है।"
    }
  },
  cdmx_churros: {
    en: {
      name: "Golden Churros con Chocolate",
      category: "Dessert & Sweet",
      famousFor: "Crispy ridged fried dough dusted in cinnamon sugar, served with thick bittersweet Mexican hot dipping chocolate.",
      description: "Piped through star-shaped nozzles and fried until deeply golden and shatteringly crisp outside, immediately rolled in aromatic cinnamon-infused cane sugar, and served with a cup of dark, spiced spiced Mexican chocolate."
    },
    te: {
      name: "గోల్డెన్ చుర్రోస్ విత్ చాక్లెట్",
      category: "తీపి పదార్థాలు",
      famousFor: "దాల్చినచెక్క చక్కెరకు అద్దిన కరకరలాడే చుర్రోస్ మరియు చిక్కటి వేడి చాక్లెట్ డిప్.",
      description: "మెక్సికో స్వీట్ స్నాక్. నక్షత్ర ఆకారంలో వేయించిన క్రిస్పీ చుర్రోస్‌పై దాల్చినచెక్క పంచదార చల్లి, డార్క్ చాక్లెట్ సాస్‌లో ముంచి తింటారు."
    },
    hi: {
      name: "चुरोस विद हॉट चॉकलेट",
      category: "मीठे पकवान",
      famousFor: "दालचीनी-चीनी में लिपटे कुरकुरे फ्राइड चुरोस और गाढ़ी डार्क हॉट चॉकलेट डिप।",
      description: "मेक्सिको की पसंदीदा मिठाई। कुरकुरे स्टार-शेप पेस्ट्री को दालचीनी और चीनी में लपेटा जाता है और गाढ़े चॉकलेट सॉस में डुबोकर खाया जाता है।"
    }
  },
  bcn_paella: {
    en: {
      name: "Traditional Spanish Seafood Paella",
      category: "Lunch",
      famousFor: "Saffron-scented bomba rice cooked over open flames with tiger prawns, mussels, squid, and crispy bottom socarrat.",
      description: "The crown jewel of Spanish gastronomy. Plump Bomba rice simmered slowly in rich saffron shellfish broth with jumbo prawns, calamari, Mediterranean mussels, and sweet bell peppers in a wide steel pan until forming a prized crispy caramelized rice crust (socarrat)."
    },
    te: {
      name: "స్పానిష్ సీఫుడ్ పాయెల్లా",
      category: "భోజనం",
      famousFor: "కుంకుమపువ్వు రైస్, రొయ్యలు, మస్సెల్స్ మరియు కూరగాయలతో పెద్ద పెనంపై వండే స్పానిష్ వంటకం.",
      description: "స్పెయిన్ బార్సిలోనా ప్రసిద్ధ రైస్ డిష్. సముద్రపు రొయ్యలు, స్క్విడ్, చేపలు మరియు సుగంధ కుంకుమపువ్వుతో ప్రత్యేక పాన్‌లో తయారుచేస్తారు."
    },
    hi: {
      name: "स्पैनिश सीफूड पाएला",
      category: "दोपहर का भोजन",
      famousFor: "केसर वाले चावल, झींगे, मसल्स और स्क्विड के साथ बड़े पैन पर पकाया गया स्पेन का राष्ट्रीय व्यंजन।",
      description: "स्पेन का सबसे मशहूर चावल का व्यंजन। केसरिया शोरबे में समुद्री झींगों, स्क्विड और सब्जियों के साथ धीमी आंच पर कुरकुरी परत बनने तक पकाया जाता है।"
    }
  },
  bcn_patatas_bravas: {
    en: {
      name: "Crispy Patatas Bravas with Spicy Sauce & Aioli",
      category: "Snack & Street Food",
      famousFor: "Golden crisp fried potato cubes drizzled with smoky paprika brava sauce and creamy garlic aioli.",
      description: "The ultimate Spanish tapas bar classic. Chunky cubes of fluffy potato parboiled and fried until crackling crisp outside, topped with a fiery smoked Spanish paprika (pimentón) tomato sauce and cool, rich garlic aioli."
    },
    te: {
      name: "పటాటాస్ బ్రవాస్ (స్పానిష్ ఆలూ)",
      category: "స్నాక్స్ & వీధి ఆహారం",
      famousFor: "క్రిస్పీ బంగాళాదుంప ముక్కలు, స్పైసీ పాప్రికా సాస్ మరియు గార్లిక్ మయోన్నైస్.",
      description: "స్పెయిన్ టపాస్ బార్ల స్పెషల్. కరకరలాడే ఆలూ క్యూబ్స్‌పై కారపు రెడ్ సాస్ మరియు తెల్లని వెల్లుల్లి సాస్ వేసి అందిస్తారు."
    },
    hi: {
      name: "पटाटास ब्रावास (स्पैनिश पोटैटो)",
      category: "स्नैक्स और स्ट्रीट फूड",
      famousFor: "कुरकुरे तले हुए आलू के टुकड़े, तीखी स्मोक्ड पेपरिका सॉस और मलाईदार गार्लिक मेयो।",
      description: "स्पेन का मशहूर बार स्नैक। चौकोर कटे कुरकुरे आलू पर तीखी लाल सॉस और ठंडी लहसुन वाली मेयोनीज डालकर परोसा जाता है।"
    }
  },
  sgp_chicken_rice: {
    en: {
      name: "Hainanese Chicken Rice",
      category: "Lunch",
      famousFor: "Silky poached chicken over fragrant rice cooked in rich chicken broth, with fiery chili-ginger sauce.",
      description: "Singapore's national culinary pride. Plump chicken poached at sub-boiling temperature and ice-shocked for gelatinous skin, served over jasmine rice sautéed with chicken fat, pandan leaves, and garlic, accompanied by dark soy and chili dip."
    },
    te: {
      name: "హైనానీస్ చికెన్ రైస్",
      category: "భోజనం",
      famousFor: "చికెన్ బ్రాత్ లో వండిన సువాసన రైస్, మెత్తటి చికెన్ ముక్కలు మరియు చిల్లీ-జింజర్ సాస్.",
      description: "సింగపూర్ జాతీయ వంటకం. చికెన్ ఫ్యాట్ మరియు పాండన్ ఆకులతో వండిన జాస్మిన్ రైస్‌తో మృదువైన చికెన్ మరియు ఘాటైన చట్నీలతో వడ్డిస్తారు."
    },
    hi: {
      name: "हैनानीज चिकन राइस",
      category: "दोपहर का भोजन",
      famousFor: "चिकन स्टॉक में पके सुगंधित चावल, बेहद कोमल उबला चिकन और तीखी मिर्च-अदरक की चटनी।",
      description: "सिंगापुर का राष्ट्रीय गौरव। खुशबूदार चमेली चावल को चिकन के सूप और मसालों में पकाया जाता है और कोमल चिकन व तीखी सॉस के साथ परोसा जाता है।"
    }
  },
  sgp_chili_crab: {
    en: {
      name: "Singapore Chili Crab with Fried Mantou",
      category: "Dinner",
      famousFor: "Giant mud crab stir-fried in a sweet, savory, and spicy chili-tomato gravy thickened with egg ribbons.",
      description: "The king of Singaporean seafood feasts. Whole live mud crab cracked and stir-fried in a luscious, semi-thick sauce of tomatoes, shallots, garlic, and fresh chilies, enriched with whisked egg ribbons, scooped up with golden deep-fried mantou buns."
    },
    te: {
      name: "సింగపూర్ చిల్లీ క్రాబ్ విత్ మాంటూ",
      category: "రాత్రి భోజనం",
      famousFor: "తీపి, కారం మరియు టమోటా గ్రేవీలో వండిన పీతల కూర మరియు వేయించిన బన్స్.",
      description: "సింగపూర్ సీఫుడ్ స్పెషల్. పెద్ద పీతలను తీపి-కారపు మసాలా గ్రేవీలో ఎగ్ తో కలిపి వండుతారు. వేయించిన మాంటూ బన్స్‌తో తింటే అద్భుతంగా ఉంటుంది."
    },
    hi: {
      name: "सिंगापुर चिली क्रैब",
      category: "रात का भोजन",
      famousFor: "मीठी-तीखी टमाटर और अंडे की गाढ़ी ग्रेवी में पका हुआ क्रैब, कुरकुरे फ्राइड बन्स के साथ।",
      description: "सिंगापुर का राजा व्यंजन। ताजे क्रैब को टमाटर, मिर्च और अंडे की गाढ़ी स्वादिष्ट ग्रेवी में पकाया जाता है और फ्राई किए हुए बन (मांतोउ) के साथ परोसा जाता है।"
    }
  },
  sf_clam_chowder: {
    en: {
      name: "Clam Chowder in Sourdough Bread Bowl",
      category: "Lunch",
      famousFor: "Velvety New England clam chowder served piping hot inside a hollowed round crusty San Francisco sourdough loaf.",
      description: "Fisherman's Wharf classic. Rich, creamy chowder loaded with sweet sea clams, diced russet potatoes, and smoked bacon, ladled boiling hot into a hollowed-out tangy, chewy, crackling San Francisco sourdough boule."
    },
    te: {
      name: "క్లామ్ చౌడర్ ఇన్ సోర్‌డో బ్రెడ్ బౌల్",
      category: "భోజనం",
      famousFor: "రౌండ్ సోర్‌డో బ్రెడ్ గిన్నెలో పోసి ఇచ్చే క్రీమీ సీఫుడ్ చౌడర్ సూప్.",
      description: "శాన్ ఫ్రాన్సిస్కో తీరప్రాంత స్పెషల్. రుచికరమైన సముద్రపు క్లామ్స్, బంగాళాదుంపలతో చేసిన చిక్కని క్రీమ్ సూప్‌ను బ్రెడ్ బౌల్‌లో పోసి వడ్డిస్తారు."
    },
    hi: {
      name: "क्लैम चाउडर इन ब्रेड बाउल",
      category: "दोपहर का भोजन",
      famousFor: "खट्टे-कुरकुरे सोरडो ब्रेड के कटोरे में गरमा-गरम परोसा गया गाढ़ा मलाईदार क्लैम सूप।",
      description: "सैन फ्रांसिस्को का मशहूर समुद्री सूप। मलाई, आलू और मीठे क्लैम से बना गाढ़ा सूप एक खोखले गोल ब्रेड में भरकर परोसा जाता है।"
    }
  },
  ber_currywurst: {
    en: {
      name: "Original Berlin Currywurst mit Pommes",
      category: "Snack & Street Food",
      famousFor: "Steamed-then-fried German pork sausage sliced and blanketed in spicy curried tomato ketchup with golden fries.",
      description: "The post-war culinary icon of Berlin. A plump, seasoned bratwurst sausage flash-fried to a crisp snap, sliced into bite-sized coins, smothered in warm spiced tomato curry sauce, heavily dusted with madras curry powder, and paired with hot chips."
    },
    te: {
      name: "బెర్లిన్ కర్రీవూర్స్ట్ & ఫ్రెంచ్ ఫ్రైస్",
      category: "స్నాక్స్ & వీధి ఆహారం",
      famousFor: "క్రిస్పీ సాసేజ్ ముక్కలపై స్పైసీ కర్రీ కెచప్ మరియు ఫ్రెంచ్ ఫ్రైస్ కాంబినేషన్.",
      description: "జర్మనీ బెర్లిన్ ప్రసిద్ధ వీధి ఆహారం. వేయించిన సాసేజ్ ముక్కలపై కారపు టమోటా కర్రీ సాస్, కర్రీ పౌడర్ చల్లి వేడి వేడి ఫ్రైస్‌తో తింటారు."
    },
    hi: {
      name: "बर्लिन करीवुर्स्ट और फ्राइज",
      category: "स्नैक्स और स्ट्रीट फूड",
      famousFor: "तले हुए जर्मन सॉसेज के टुकड़े, मसालेदार करी केचप सॉस और गरमा-गरम फ्रेंच फ्राइज।",
      description: "बर्लिन का सबसे लोकप्रिय स्ट्रीट फूड। कुरकुरे सॉसेज को टुकड़ों में काटकर गाढ़ी करी-टमाटर सॉस और करी पाउडर से सजाकर फ्राइज के साथ दिया जाता है।"
    }
  },
  oax_mole_negro: {
    en: {
      name: "Ancestral Oaxacan Mole Negro with Chicken",
      category: "Dinner",
      famousFor: "Complex, pitch-black velvety sauce crafted from 30+ ingredients including charred chilies, dark chocolate, and spices.",
      description: "The holy grail of Mexican complex sauces. An ancient ancestral paste made by charring chilhuacle and mulato chilies, slow-cooked for days with Mexican dark chocolate, plantains, raisins, sesame, almonds, and warm spices over tender chicken."
    },
    te: {
      name: "ఓహాకన్ మోలే నెగ్రో చికెన్",
      category: "రాత్రి భోజనం",
      famousFor: "డార్క్ చాక్లెట్, కాల్చిన మిర్చి మరియు 30 రకాల దినుసులతో చేసే పురాతన మెక్సికన్ సాస్ చికెన్.",
      description: "మెక్సికో సంప్రదాయ రాజరిక వంటకం. కాల్చిన ప్రత్యేక మిరపకాయలు, డార్క్ చాక్లెట్, గింజలు మరియు మసాలాలతో రోజుల తరబడి వండిన చిక్కని గ్రేవీలో చికెన్‌ను అందిస్తారు."
    },
    hi: {
      name: "ओहाकन मोले नेग्रो चिकन",
      category: "रात का भोजन",
      famousFor: "30 से अधिक मसालों, भुनी मिर्च और डार्क चॉकलेट से बनी गाढ़ी रहस्यमयी मैक्सिकन सॉस।",
      description: "मेक्सिको की सबसे जटिल और समृद्ध डिश। भुनी हुई खास मिर्चियों, मेवों और मैक्सिकन डार्क चॉकलेट को कई दिनों तक धीमी आंच पर पकाकर चिकन के साथ परोसा जाता है।"
    }
  },
  kyo_matcha_parfait: {
    en: {
      name: "Artisanal Uji Matcha Parfait",
      category: "Dessert & Sweet",
      famousFor: "Multi-layered tall glass of ceremonial Uji green tea gelato, warabi mochi, azuki red beans, and matcha jelly.",
      description: "Kyoto's imperial dessert showcase. Layer upon layer of bittersweet ceremonial Uji matcha soft-serve, chewy warabi mochi cubes, sweetened Hokkaido azuki red beans, crisp matcha wafer rolls, and delicate agar jelly cubes in a chilled glass."
    },
    te: {
      name: "క్యోటో ఉజీ మచ్చా పార్ఫేట్",
      category: "తీపి పదార్థాలు",
      famousFor: "జపనీస్ గ్రీన్ టీ ఐస్‌క్రీమ్, మోచీ, ఎరుపు బీన్స్ మరియు మచ్చా జెల్లీతో చేసిన పొడవాటి గ్లాస్ డెసర్ట్.",
      description: "జపాన్ క్యోటో నగరపు ప్రత్యేక స్వీట్. చేదు-తీపి కలగలిసిన గ్రీన్ టీ జెలాటో, సాఫ్ట్ మోచీ మరియు తీపి రెడ్ బీన్స్‌తో పొరలు పొరలుగా తయారుచేస్తారు."
    },
    hi: {
      name: "क्योटो माचा पारफे डेजर्ट",
      category: "मीठे पकवान",
      famousFor: "प्रीमियम जापानी ग्रीन टी आइसक्रीम, मोची, मीठी रेड बीन्स और माचा जेली का लेयर्ड डेजर्ट।",
      description: "जापान के क्योटो का शाही डेजर्ट। ग्लास में कड़वी-मीठी ग्रीन टी आइसक्रीम, चबाने वाली मोची और मीठी रेड बीन्स की कई परतों से सजाया जाता है।"
    }
  }
};

// City Translation Data
const CITY_TRANSLATIONS = {
  hyderabad: { en: { name: "Hyderabad", tagline: "The City of Pearls and Biryani" }, te: { name: "హైదరాబాద్", tagline: "ముత్యాలు మరియు ఘుమఘుమలాడే బిర్యానీ నగరం" }, hi: { name: "हैदराबाद", tagline: "मोतियों और प्रसिद्ध दम बिरयानी का ऐतिहासिक शहर" } },
  mumbai: { en: { name: "Mumbai", tagline: "Street Food Capital of India" }, te: { name: "ముంబై", tagline: "భారతదేశపు వీధి ఆహార రాజధాని" }, hi: { name: "मुंबई", tagline: "भारत की स्ट्रीट फूड राजधानी" } },
  delhi: { en: { name: "Delhi", tagline: "Heart of Mughlai and Chaat Delights" }, te: { name: "ఢిల్లీ", tagline: "మొఘలాయి మరియు చాట్ రుచుల గుండెకాయ" }, hi: { name: "दिल्ली", tagline: "मुगलई व्यंजनों और चटपटी चाट का दिल" } },
  bangalore: { en: { name: "Bengaluru", tagline: "Garden City of Crispy Dosas & Filter Coffee" }, te: { name: "బెంగళూరు", tagline: "క్రిస్పీ దోశలు మరియు ఫిల్టర్ కాఫీ నగరం" }, hi: { name: "बेंगलुरु", tagline: "कुरकुरे डोसे और फिल्टर कॉफी का गार्डन सिटी" } },
  kolkata: { en: { name: "Kolkata", tagline: "City of Joy, Kathi Rolls & Sweet Delicacies" }, te: { name: "కోల్‌కతా", tagline: "కాథీ రోల్స్ మరియు తీపి వంటకాల ఆనంద నగరం" }, hi: { name: "कोलकाता", tagline: "काठी रोल और रसीली मिठाइयों का आनंदमयी शहर" } },
  chennai: { en: { name: "Chennai", tagline: "Gateway of Chettinad Spices & Ghee Roast Dosas" }, te: { name: "చెన్నై", tagline: "చెట్టినాడు మసాలాలు మరియు నెయ్యి రోస్ట్ దోశల నగరం" }, hi: { name: "चेन्नई", tagline: "चेट्टीनाड मसालों और घी रोस्ट डोसे का केंद्र" } },
  lucknow: { en: { name: "Lucknow", tagline: "The Royal Land of Awadhi Kebabs & Dum Biryani" }, te: { name: "లక్నో", tagline: "అవాధీ కబాబ్‌లు మరియు రాజరిక బిర్యానీ నేల" }, hi: { name: "लखनऊ", tagline: "नवाबी कबाबों और दम बिरयानी की शाही धरती" } },
  amritsar: { en: { name: "Amritsar", tagline: "Epicenter of Golden Butter Kulchas & Rich Lassi" }, te: { name: "అమృత్‌సర్", tagline: "బటర్ కుల్చాలు మరియు చిక్కని లస్సీ కేంద్రం" }, hi: { name: "अमृतसर", tagline: "मक्खनी कुलचों और गाढ़ी लस्सी का गढ़" } },
  tokyo: { en: { name: "Tokyo", tagline: "Culinary Capital of Master Craftsmen & Ramen" }, te: { name: "టోక్యో", tagline: "రామెన్ మరియు సుషీ కళాకారుల రాజధాని" }, hi: { name: "टोक्यो", tagline: "रामेन और सुशी के माहिर उस्तादों की राजधानी" } },
  osaka: { en: { name: "Osaka", tagline: "The Nation's Kitchen of Sizzling Takoyaki & Street Eats" }, te: { name: "ఒసాకా", tagline: "టకోయాకి మరియు స్ట్రీట్ ఫుడ్ నగరం" }, hi: { name: "ओसाका", tagline: "ताकोयाकी और बेहतरीन स्ट्रीट फूड का जापानी शहर" } },
  seoul: { en: { name: "Seoul", tagline: "Vibrant Hub of Crispy Fried Chicken & BBQ" }, te: { name: "సియోల్", tagline: "క్రిస్పీ ఫ్రైడ్ చికెన్ మరియు కొరియన్ బార్బెక్యూ హబ్" }, hi: { name: "सियोल", tagline: "कुरकुरे फ्राइड चिकन और कोरियन बारबेक्यू का केंद्र" } },
  bangkok: { en: { name: "Bangkok", tagline: "Vibrant Hub of Aromatic Street Spices & Pad Thai" }, te: { name: "బ్యాంకాక్", tagline: "పాడ్ థాయ్ మరియు సుగంధ వీధి మసాలాల నగరం" }, hi: { name: "बैंकॉक", tagline: "सुगंधित स्ट्रीट मसालों और पैड थाई का शहर" } },
  hanoi: { en: { name: "Hanoi & Saigon", tagline: "Land of Fragrant Steaming Pho & Crusty Banh Mi" }, te: { name: "హనోయి & సైగాన్", tagline: "వేడి వేడి ఫో సూప్ మరియు బాన్ మీ నేల" }, hi: { name: "हनोई और साइगॉन", tagline: "गरमा-गरम फो सूप और कुरकुरे बान मी का देश" } },
  rome: { en: { name: "Rome", tagline: "Eternal Cradle of Creamy Carbonara & Artisanal Gelato" }, te: { name: "రోమ్", tagline: "క్రీమీ కార్బోనారా మరియు జెలాటో పుట్టినిల్లు" }, hi: { name: "रोम", tagline: "क्रीमी पास्ता कार्बोनारा और स्वादिष्ट जिलेटो का घर" } },
  naples: { en: { name: "Naples", tagline: "The Historic Birthplace of Authentic Neapolitan Pizza" }, te: { name: "నేపుల్స్", tagline: "నిజమైన నియాపోలిటన్ పిజ్జా పుట్టిన చారిత్రక నగరం" }, hi: { name: "नेपल्स", tagline: "प्रामाणिक नेपोलिटन पिज्जा की ऐतिहासिक जन्मभूमि" } },
  paris: { en: { name: "Paris", tagline: "Global Pinnacle of Haute Cuisine & Flaky Pastries" }, te: { name: "ప్యారిస్", tagline: "వెన్న క్రోసెంట్లు మరియు గౌర్మెట్ వంటకాల రాజధాని" }, hi: { name: "पेरिस", tagline: "मक्खनी पेस्ट्री और बेहतरीन भोजन की वैश्विक राजधानी" } },
  london: { en: { name: "London", tagline: "Eclectic Mix of Golden Fish & Chips and Classic Roasts" }, te: { name: "లండన్", tagline: "ఫిష్ అండ్ చిప్స్ మరియు సాంప్రదాయ రోస్ట్‌ల నగరం" }, hi: { name: "लंदन", tagline: "गोल्डन फिश एंड चिप्स और पारंपरिक भोजन का केंद्र" } },
  istanbul: { en: { name: "Istanbul", tagline: "Where East Meets West in Smoky Döner & Emerald Baklava" }, te: { name: "ఇస్తాంబుల్", tagline: "స్మోకీ డోనర్ మరియు పిస్తా బక్లావా సంగమ నగరం" }, hi: { name: "इस्तांबुल", tagline: "स्मोकी डोनर कबाब और पिस्ता बकलावा का संगम" } },
  new_york: { en: { name: "New York City", tagline: "Melting Pot of Foldable Slices & Towering Pastrami" }, te: { name: "న్యూయార్క్ నగరం", tagline: "ఫోల్డబుల్ పిజ్జా మరియు పాస్ట్రామిల మహానగరం" }, hi: { name: "न्यूयॉर्क शहर", tagline: "फोल्डेबल पिज्जा और पास्त्रामी का प्रसिद्ध महानगर" } },
  mexico_city: { en: { name: "Mexico City", tagline: "Explosive Colors, Tacos al Pastor & Heritage Churros" }, te: { name: "మెక్సికో సిటీ", tagline: "రంగుల టాకోస్ మరియు హెరిటేజ్ చుర్రోస్ నగరం" }, hi: { name: "मेक्सिको सिटी", tagline: "रंग-बिरंगे टकोस और पारंपरिक चुरोस का शहर" } },
  barcelona: { en: { name: "Barcelona", tagline: "Mediterranean Paradise of Seafood Paella & Crispy Tapas" }, te: { name: "బార్సిలోనా", tagline: "సీఫుడ్ పాయెల్లా మరియు క్రిస్పీ టపాస్ స్వర్గం" }, hi: { name: "बार्सिलोना", tagline: "सीफूड पाएला और कुरकुरे तपासा का भूमध्यसागरीय स्वर्ग" } },
  singapore: { en: { name: "Singapore", tagline: "Hawker Wonderland of Hainanese Chicken Rice & Chili Crab" }, te: { name: "సింగపూర్", tagline: "చికెన్ రైస్ మరియు చిల్లీ క్రాబ్ హాకర్ వండర్‌ల్యాండ్" }, hi: { name: "सिंगापुर", tagline: "हैनानीज चिकन राइस और चिली क्रैब का हॉकर शहर" } },
  san_francisco: { en: { name: "San Francisco", tagline: "Golden Gate Capital of Tangy Sourdough & Clam Chowder" }, te: { name: "శాన్ ఫ్రాన్సిస్కో", tagline: "సోర్‌డో బ్రెడ్ మరియు క్లామ్ చౌడర్ రాజధాని" }, hi: { name: "सैन फ्रांसिस्को", tagline: "सोरडो ब्रेड और क्लैम चाउडर का गोल्डन गेट शहर" } },
  berlin: { en: { name: "Berlin", tagline: "Bohemian Capital of Sizzling Currywurst & Döner Kultur" }, te: { name: "బెర్లిన్", tagline: "కరివూర్స్ట్ మరియు డోనర్ సంస్కృతి రాజధాని" }, hi: { name: "बर्लिन", tagline: "करीवुर्स्ट और डोनर कबाब की जीवंत राजधानी" } },
  oaxaca: { en: { name: "Oaxaca", tagline: "Ancestral Heart of Velvety Mole Negro & Smoky Mezcal" }, te: { name: "ఓహాకా", tagline: "పురాతన మోలే నెగ్రో మరియు మెజ్కాల్ రాజధాని" }, hi: { name: "ओहाका", tagline: "पारंपरिक मोले नेग्रो और स्मोकी मेजकाल का दिल" } },
  kyoto: { en: { name: "Kyoto", tagline: "Imperial Sanctuary of Matcha Sweets & Kaiseki Traditions" }, te: { name: "క్యోటో", tagline: "మచ్చా స్వీట్లు మరియు కైసేకి సంప్రదాయాల నగరం" }, hi: { name: "क्योटो", tagline: "माचा मिठाइयों और काइसेकी परंपरा का शाही शहर" } }
};

if (typeof window !== 'undefined') {
  window.TRANSLATIONS = TRANSLATIONS;
  window.DISH_TRANSLATIONS = DISH_TRANSLATIONS;
  window.CITY_TRANSLATIONS = CITY_TRANSLATIONS;
}
