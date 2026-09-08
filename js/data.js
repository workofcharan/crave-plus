// Comprehensive Database of Famous Regional & Global Delicacies
const CITIES_DATA = [
  {
    id: "hyderabad",
    name: "Hyderabad",
    country: "India",
    tagline: "The City of Pearls and Biryani",
    coords: { lat: 17.3850, lng: 78.4867 },
    popularKeywords: ["hyderabad", "telangana", "secunderabad", "cyberabad", "deccan"]
  },
  {
    id: "mumbai",
    name: "Mumbai",
    country: "India",
    tagline: "Street Food Capital of India",
    coords: { lat: 19.0760, lng: 72.8777 },
    popularKeywords: ["mumbai", "bombay", "maharashtra", "thane", "navi mumbai"]
  },
  {
    id: "delhi",
    name: "Delhi",
    country: "India",
    tagline: "Heart of Mughlai and Chaat Delights",
    coords: { lat: 28.7041, lng: 77.1025 },
    popularKeywords: ["delhi", "new delhi", "ncr", "gurgaon", "noida", "purani dilli"]
  },
  {
    id: "bangalore",
    name: "Bengaluru (Bangalore)",
    country: "India",
    tagline: "Garden City of Crispy Dosas & Filter Coffee",
    coords: { lat: 12.9716, lng: 77.5946 },
    popularKeywords: ["bangalore", "bengaluru", "karnataka", "mysore", "south india"]
  },
  {
    id: "kolkata",
    name: "Kolkata",
    country: "India",
    tagline: "City of Joy, Kathi Rolls & Sweet Delicacies",
    coords: { lat: 22.5726, lng: 88.3639 },
    popularKeywords: ["kolkata", "calcutta", "west bengal", "bengal", "howrah"]
  },
  {
    id: "chennai",
    name: "Chennai",
    country: "India",
    tagline: "Gateway of Chettinad Spices & Ghee Roast Dosas",
    coords: { lat: 13.0827, lng: 80.2707 },
    popularKeywords: ["chennai", "madras", "tamil nadu", "chettinad"]
  },
  {
    id: "lucknow",
    name: "Lucknow",
    country: "India",
    tagline: "The Royal Land of Awadhi Kebabs & Dum Biryani",
    coords: { lat: 26.8467, lng: 80.9462 },
    popularKeywords: ["lucknow", "awadh", "uttar pradesh", "nawab"]
  },
  {
    id: "amritsar",
    name: "Amritsar",
    country: "India",
    tagline: "Epicenter of Golden Butter Kulchas & Rich Lassi",
    coords: { lat: 31.6340, lng: 74.8723 },
    popularKeywords: ["amritsar", "punjab", "golden temple"]
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    tagline: "Culinary Capital of Master Craftsmen & Ramen",
    coords: { lat: 35.6762, lng: 139.6503 },
    popularKeywords: ["tokyo", "japan", "shibuya", "shinjuku", "ginza", "tsukiji"]
  },
  {
    id: "osaka",
    name: "Osaka",
    country: "Japan",
    tagline: "The Nation's Kitchen of Sizzling Takoyaki & Street Eats",
    coords: { lat: 34.6937, lng: 135.5023 },
    popularKeywords: ["osaka", "japan", "dotonbori", "kansai"]
  },
  {
    id: "seoul",
    name: "Seoul",
    country: "South Korea",
    tagline: "Vibrant Hub of Crispy Fried Chicken & BBQ",
    coords: { lat: 37.5665, lng: 126.9780 },
    popularKeywords: ["seoul", "korea", "south korea", "gangnam", "hongdae", "myeongdong"]
  },
  {
    id: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    tagline: "Vibrant Hub of Aromatic Street Spices & Pad Thai",
    coords: { lat: 13.7563, lng: 100.5018 },
    popularKeywords: ["bangkok", "thailand", "siam", "sukhumvit", "yaowarat"]
  },
  {
    id: "hanoi",
    name: "Hanoi & Saigon",
    country: "Vietnam",
    tagline: "Land of Fragrant Steaming Pho & Crusty Banh Mi",
    coords: { lat: 21.0285, lng: 105.8542 },
    popularKeywords: ["hanoi", "vietnam", "saigon", "ho chi minh", "danang"]
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    tagline: "Eternal Cradle of Creamy Carbonara & Artisanal Gelato",
    coords: { lat: 41.9028, lng: 12.4964 },
    popularKeywords: ["rome", "roma", "italy", "italia", "lazio", "trastevere"]
  },
  {
    id: "naples",
    name: "Naples",
    country: "Italy",
    tagline: "The Historic Birthplace of Authentic Neapolitan Pizza",
    coords: { lat: 40.8518, lng: 14.2681 },
    popularKeywords: ["naples", "napoli", "italy", "campania"]
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    tagline: "Global Pinnacle of Haute Cuisine & Flaky Pastries",
    coords: { lat: 48.8566, lng: 2.3522 },
    popularKeywords: ["paris", "france", "ile-de-france", "montmartre"]
  },
  {
    id: "london",
    name: "London",
    country: "UK",
    tagline: "Eclectic Mix of Golden Fish & Chips and Classic Roasts",
    coords: { lat: 51.5074, lng: -0.1278 },
    popularKeywords: ["london", "uk", "england", "greater london", "soho"]
  },
  {
    id: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    tagline: "Where East Meets West in Smoky Döner & Emerald Baklava",
    coords: { lat: 41.0082, lng: 28.9784 },
    popularKeywords: ["istanbul", "turkey", "turkiye", "constantinople", "bosphorus"]
  },
  {
    id: "new_york",
    name: "New York City",
    country: "USA",
    tagline: "Melting Pot of Foldable Slices & Towering Pastrami",
    coords: { lat: 40.7128, lng: -74.0060 },
    popularKeywords: ["new york", "nyc", "manhattan", "brooklyn", "queens", "soho"]
  },
  {
    id: "mexico_city",
    name: "Mexico City",
    country: "Mexico",
    tagline: "Explosive Colors, Tacos al Pastor & Heritage Churros",
    coords: { lat: 19.4326, lng: -99.1332 },
    popularKeywords: ["mexico city", "cdmx", "mexico", "condesa", "roma norte"]
  },
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    tagline: "Mediterranean Paradise of Seafood Paella & Crispy Tapas",
    coords: { lat: 41.3879, lng: 2.1699 },
    popularKeywords: ["barcelona", "spain", "catalonia", "catalunya", "ramblas"]
  },
  {
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    tagline: "Hawker Wonderland of Hainanese Chicken Rice & Chili Crab",
    coords: { lat: 1.3521, lng: 103.8198 },
    popularKeywords: ["singapore", "hawker", "marina bay", "orchard", "tiong bahru", "maxwell"]
  },
  {
    id: "san_francisco",
    name: "San Francisco",
    country: "USA",
    tagline: "Golden Gate Capital of Tangy Sourdough & Clam Chowder",
    coords: { lat: 37.7749, lng: -122.4194 },
    popularKeywords: ["san francisco", "sf", "california", "bay area", "fisherman wharf", "mission"]
  },
  {
    id: "berlin",
    name: "Berlin",
    country: "Germany",
    tagline: "Bohemian Capital of Sizzling Currywurst & Döner Kultur",
    coords: { lat: 52.5200, lng: 13.4050 },
    popularKeywords: ["berlin", "germany", "kreuzberg", "mitte", "currywurst"]
  },
  {
    id: "oaxaca",
    name: "Oaxaca",
    country: "Mexico",
    tagline: "Ancestral Heart of Velvety Mole Negro & Smoky Mezcal",
    coords: { lat: 17.0732, lng: -96.7266 },
    popularKeywords: ["oaxaca", "mexico", "mole", "tlayuda", "mezcal"]
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    tagline: "Imperial Sanctuary of Matcha Sweets & Kaiseki Traditions",
    coords: { lat: 35.0116, lng: 135.7681 },
    popularKeywords: ["kyoto", "japan", "gion", "arashiyama", "matcha", "kaiseki"]
  }
];

const DISHES_DATA = [
  // ==========================================
  // --- HYDERABAD (INDIA) ---
  // ==========================================
  {
    id: "hyd_biryani",
    name: "Hyderabadi Dum Biryani",
    nativeName: "హైదరాబాదీ దమ్ బిర్యానీ (Hyderabadi Dum Biryani)",
    cityId: "hyderabad",
    cityName: "Hyderabad",
    country: "India",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 99,
    category: "Lunch",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Savory", "Aromatic", "Spicy", "Rich"],
    spiceLevel: 4,
    diet: ["non-veg", "halal", "gluten-free"],
    moodTags: ["comfort", "spicy", "date-night", "festive"],
    priceTier: "₹₹",
    price: 280,
    rating: 4.9,
    reviewsCount: 48200,
    calories: 650,
    prepTime: "45 mins",
    famousFor: "Slow-cooked aged basmati rice and marinated meat infused with saffron and royal spices under sealed 'dum'.",
    description: "The crown jewel of Nizami cuisine. Succulent cuts of goat meat or chicken layered with par-cooked aged basmati rice, mint, coriander, fried onions (birista), pure desi ghee, and saffron milk, sealed with dough and slow-cooked to fragrant perfection.",
    ingredients: ["Aged Basmati Rice", "Tender Goat / Chicken", "Saffron Infused Milk", "Fried Golden Onions (Birista)", "Fresh Mint & Coriander", "Whole Shahi Spices (Cardamom, Cloves, Star Anise)", "Pure Desi Ghee", "Thick Curd / Yogurt"],
    iconicSpots: ["Paradise Biryani (Secunderabad)", "Bawarchi (RTC X Roads)", "Hotel Shadab (Charminar)", "Cafe Bahar (Hyderguda)", "Shah Ghouse (Tolichowki)"],
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Marinate meat with yogurt, ginger-garlic, fried onions, and royal spices for 4 hours. Layer in heavy handi with parboiled saffron rice, seal edges with dough, cook on slow dum for 35 mins."
  },
  {
    id: "hyd_haleem",
    name: "Hyderabadi Haleem",
    nativeName: "హైదరాబాదీ హలీమ్ (Hyderabadi Shahi Haleem)",
    cityId: "hyderabad",
    cityName: "Hyderabad",
    country: "India",
    isGlobalIcon: false,
    isLocalLegend: true,
    trendingScore: 96,
    category: "Dinner",
    mealTimes: ["dinner", "late-night"],
    tasteProfile: ["Rich", "Savory", "Creamy", "Spicy"],
    spiceLevel: 3,
    diet: ["non-veg", "halal", "high-protein"],
    moodTags: ["comfort", "spicy", "festive"],
    priceTier: "₹₹",
    price: 240,
    rating: 4.8,
    reviewsCount: 31500,
    calories: 580,
    prepTime: "8 hours slow simmer",
    famousFor: "GI-tagged meat, broken wheat, and lentil stew pounded with wooden mashers until it turns velvety and decadent.",
    description: "A legendary slow-cooked dish prepared with wheat, barley, lentils, and meat, enriched with copious ghee, rose petals, cashews, and fried onions. It offers an incomparably velvety texture and hearty depth.",
    ingredients: ["Mutton / Goat Meat", "Broken Wheat (Dalia)", "Chana & Masoor Dal", "Pure Desi Ghee", "Almonds & Cashews", "Fried Golden Onions", "Rose Petals & Cardamom"],
    iconicSpots: ["Pista House (Charminar & across city)", "555 Haleem (Masab Tank)", "Sarvi Restaurant (Banjara Hills)", "Shah Ghouse"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Hyderabadi_Mutton_Haleem.jpg",
    recipeOverview: "Meat, soaked lentils, and wheat are slow simmered for 7-8 hours, then rigorously pounded with large wooden mashers (ghotni) with copious ghee until smooth and stringy."
  },
  {
    id: "hyd_irani_chai",
    name: "Irani Chai with Osmania Biscuits",
    nativeName: "ఇరానీ ఛాయ్ & ఉస్మానియా బిస్కెట్ (Irani Chai & Osmania Biscuit)",
    cityId: "hyderabad",
    cityName: "Hyderabad",
    country: "India",
    isGlobalIcon: false,
    isLocalLegend: true,
    trendingScore: 93,
    category: "Snack",
    mealTimes: ["breakfast", "snack", "late-night"],
    tasteProfile: ["Sweet", "Creamy", "Aromatic", "Buttery"],
    spiceLevel: 0,
    diet: ["veg", "vegetarian"],
    moodTags: ["comfort", "sweet", "quick"],
    priceTier: "₹",
    price: 40,
    rating: 4.9,
    reviewsCount: 52000,
    calories: 220,
    prepTime: "10 mins",
    famousFor: "Thick condensed milk decoction served with melt-in-the-mouth sweet and salty royal biscuits.",
    description: "An indelible part of Hyderabad's soul. Black tea decoction (dum) simmered in copper pots poured over thick, reduced creamy milk, paired with buttery Osmania biscuits named after the last Nizam of Hyderabad.",
    ingredients: ["Strong Assam Tea Leaves", "Reduced Full Cream Milk", "Mawa / Khoya", "Cardamom & Sugar", "Osmania Biscuits (Flour, Butter, Custard Powder)"],
    iconicSpots: ["Nimrah Cafe & Bakery (Charminar)", "Niloufer Cafe (Lakdikapul)", "Garden Restaurant (Clock Tower)", "Blue Sea Tea Shop (Secunderabad)"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Simmer strong tea decoction under tight lid. In another pot, reduce whole milk with mawa until thick. Pour hot milk into glass and top with aromatic decoction."
  },
  {
    id: "hyd_double_ka_meetha",
    name: "Double Ka Meetha (Shahi Tukda)",
    nativeName: "డబల్ కా మీఠా (Double Ka Meetha)",
    cityId: "hyderabad",
    cityName: "Hyderabad",
    country: "India",
    isGlobalIcon: false,
    isLocalLegend: true,
    trendingScore: 89,
    category: "Dessert",
    mealTimes: ["lunch", "dinner", "snack"],
    tasteProfile: ["Sweet", "Rich", "Crispy", "Creamy"],
    spiceLevel: 0,
    diet: ["veg", "vegetarian"],
    moodTags: ["sweet", "festive", "comfort"],
    priceTier: "₹",
    price: 90,
    rating: 4.8,
    reviewsCount: 19800,
    calories: 420,
    prepTime: "25 mins",
    famousFor: "Golden ghee-fried milk bread steeped in saffron-cardamom sugar syrup and smothered in thick rabri.",
    description: "Double roti (milk bread) fried to golden amber in pure desi ghee, soaked in fragrant saffron syrup, and garnished with thick reduced milk (rabri), roasted almonds, pistachios, and silver vark.",
    ingredients: ["Milk Bread Loaf", "Pure Desi Ghee", "Rabri (Reduced Milk)", "Saffron & Cardamom", "Pistachios & Almonds", "Silver Leaf"],
    iconicSpots: ["Nimrah Bakery (Charminar)", "Pista House", "Shah Ghouse", "Paradise"],
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Double_ka_meetha_with_a_big_spoon.jpg",
    recipeOverview: "Cut bread slices into triangles, deep fry in ghee till golden crisp. Dip into warm cardamom syrup, pour thick condensed rabri over top, and garnish with sliced nuts."
  },
  {
    id: "hyd_mirchi_salan",
    name: "Hyderabadi Mirchi Ka Salan",
    nativeName: "మిర్చి కా సాలన్ (Mirchi Ka Salan)",
    cityId: "hyderabad",
    cityName: "Hyderabad",
    country: "India",
    isGlobalIcon: false,
    isLocalLegend: true,
    trendingScore: 91,
    category: "Lunch",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Spicy", "Tangy", "Nutty", "Savory"],
    spiceLevel: 4,
    diet: ["veg", "vegetarian", "vegan", "gluten-free"],
    moodTags: ["spicy", "comfort"],
    priceTier: "₹",
    price: 150,
    rating: 4.7,
    reviewsCount: 14500,
    calories: 290,
    prepTime: "30 mins",
    famousFor: "Spicy whole Bhavnagri green chillies simmered in a creamy, roasted peanut, sesame, and tamarind gravy.",
    description: "The quintessential accompaniment to Hyderabadi Biryani. Large green chillies shallow fried and simmered slowly in a rich, velvety gravy made from roasted peanuts, sesame seeds, desiccated coconut, and tangy tamarind pulp.",
    ingredients: ["Long Mild Green Chillies (Bhavnagri)", "Roasted Peanuts", "White Sesame Seeds (Til)", "Desiccated Coconut", "Tamarind Extract", "Curry Leaves & Mustard Seeds", "Cumin & Coriander Spices"],
    iconicSpots: ["Bawarchi (RTC X Roads)", "Hotel Shadab (Charminar)", "Cafe Bahar", "Shah Ghouse"],
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Roast peanuts, sesame seeds, and coconut; blend into smooth paste. Sauté spices and fried chillies in oil, add gravy paste, simmer with tamarind water until aromatic oil floats to surface."
  },

  // ==========================================
  // --- MUMBAI (INDIA) ---
  // ==========================================
  {
    id: "mum_vada_pav",
    name: "Mumbai Vada Pav",
    nativeName: "मुंबई वड़ा पाव (Mumbai Vada Pav)",
    cityId: "mumbai",
    cityName: "Mumbai",
    country: "India",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 99,
    category: "Street Food",
    mealTimes: ["breakfast", "snack", "late-night"],
    tasteProfile: ["Spicy", "Crispy", "Savory", "Tangy"],
    spiceLevel: 4,
    diet: ["veg", "vegetarian", "vegan"],
    moodTags: ["street-food", "quick", "spicy", "comfort"],
    priceTier: "₹",
    price: 25,
    rating: 4.9,
    reviewsCount: 62000,
    calories: 290,
    prepTime: "10 mins",
    famousFor: "The undisputed 'Indian Burger' - spicy golden potato fritter tucked into soft pav with fiery garlic chutney.",
    description: "Mumbai's culinary pulse. Spiced mashed potatoes tempered with mustard seeds, green chillies, and curry leaves, dipped in gram flour batter, deep-fried golden, and served in fluffy pav smeared with dry garlic-coconut chutney and fried salted green chillies.",
    ingredients: ["Boiled Mashed Potatoes", "Gram Flour (Besan)", "Ladi Pav (Fresh Buns)", "Dry Garlic & Coconut Chutney", "Spicy Green Chutney", "Curry Leaves & Mustard Seeds", "Fried Salted Chillies"],
    iconicSpots: ["Ashok Vada Pav (Kirti College, Dadar)", "Aaram Vada Pav (CST Station)", "Gajanan Vada Pav (Thane)", "Anand Vada Pav (Vile Parle)"],
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Temper mashed potatoes with mustard, turmeric, ginger, garlic, and chillies. Roll into balls, dip in besan batter, fry in hot oil. Slit pav, add sweet & spicy chutneys, insert vada, press lightly."
  },
  {
    id: "mum_pav_bhaji",
    name: "Butter Pav Bhaji",
    nativeName: "मक्खन पाव भाजी (Amul Butter Pav Bhaji)",
    cityId: "mumbai",
    cityName: "Mumbai",
    country: "India",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 98,
    category: "Dinner",
    mealTimes: ["dinner", "snack", "late-night"],
    tasteProfile: ["Spicy", "Buttery", "Tangy", "Savory"],
    spiceLevel: 3,
    diet: ["veg", "vegetarian"],
    moodTags: ["comfort", "spicy", "cheesy", "street-food"],
    priceTier: "₹₹",
    price: 140,
    rating: 4.8,
    reviewsCount: 51000,
    calories: 520,
    prepTime: "20 mins",
    famousFor: "Mashed vegetable curry cooked with giant blocks of Amul butter on a sizzling iron tawa.",
    description: "A heavenly street sensation born in Mumbai's textile mill era. Medley of mashed potatoes, tomatoes, peas, and capsicum cooked in special pav bhaji masala, finished with a generous pool of melting butter and served with hot toasted pav buns.",
    ingredients: ["Potatoes, Tomatoes, Green Peas, Cauliflower", "Pav Bhaji Masala Spices", "Amul Butter (Generous)", "Soft Pav Buns", "Fresh Coriander, Diced Onions & Lemon Wedge"],
    iconicSpots: ["Sardar Pav Bhaji (Tardeo)", "Cannon Pav Bhaji (CST)", "Amar Juice Centre (Juhu)", "Achija (Ghatkopar)"],
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Boil and mash vegetables. Sauté onions, garlic paste, capsicum, and tomatoes on a large pan. Add special spices and mashed veggies, smash continuously while adding hot butter and water."
  },
  {
    id: "mum_bhel_puri",
    name: "Mumbai Bhelpuri & Sev Puri",
    nativeName: "मुंबई भेलपूरी आणि शेवपूरी (Bhel Puri & Sev Puri)",
    cityId: "mumbai",
    cityName: "Mumbai",
    country: "India",
    isGlobalIcon: false,
    isLocalLegend: true,
    trendingScore: 94,
    category: "Street Food",
    mealTimes: ["snack", "late-night"],
    tasteProfile: ["Tangy", "Crispy", "Spicy", "Sweet"],
    spiceLevel: 3,
    diet: ["veg", "vegetarian", "vegan"],
    moodTags: ["street-food", "quick", "spicy"],
    priceTier: "₹",
    price: 60,
    rating: 4.8,
    reviewsCount: 38000,
    calories: 240,
    prepTime: "5 mins",
    famousFor: "Vibrant beachside chaat of crunchy puffed rice, crispy papdis, tangy tamarind chutney, and golden sev.",
    description: "The soundtrack of Chowpatty Beach. Puffed rice tossed with boiled potatoes, raw mango, onions, fiery green chili chutney, sweet date-tamarind chutney, and finished with a cascade of fine crispy gram flour vermicelli (sev).",
    ingredients: ["Crisp Puffed Rice (Kurmura)", "Fine Crispy Sev", "Flat Papdis", "Raw Mango & Diced Potatoes", "Tamarind & Date Sweet Chutney", "Spicy Mint & Coriander Chutney", "Chaat Masala"],
    iconicSpots: ["Sharmajee's Bhelpuri (Girgaon Chowpatty)", "Badshah Snacks (Crawford Market)", "Elco Pani Puri Centre (Bandra)"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "In a large mixing vessel, combine puffed rice, chopped onions, potatoes, raw mango, crushed papdis, spicy green and sweet tamarind chutneys. Mix quickly and top generously with sev."
  },
  {
    id: "mum_bombil_fry",
    name: "Crispy Bombay Duck Fry (Bombil)",
    nativeName: "बॉम्बिल फ्राई (Crispy Bombay Duck Fry)",
    cityId: "mumbai",
    cityName: "Mumbai",
    country: "India",
    isGlobalIcon: false,
    isLocalLegend: true,
    trendingScore: 90,
    category: "Lunch",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Crispy", "Savory", "Spicy", "Umami"],
    spiceLevel: 3,
    diet: ["non-veg", "high-protein"],
    moodTags: ["spicy", "quick", "comfort"],
    priceTier: "₹₹",
    price: 260,
    rating: 4.7,
    reviewsCount: 18400,
    calories: 340,
    prepTime: "15 mins",
    famousFor: "Delicate lizardfish coated in rava (semolina) and shallow-fried to extraordinary golden crunch.",
    description: "Mumbai's quintessential Koli seafood heritage. Bombay Duck is seasoned with kokum, red chilli, and ginger-garlic paste, flattened, crusted in semolina and rice flour, and fried to golden crunchy perfection on the outside while staying succulent inside.",
    ingredients: ["Fresh Bombay Duck (Bombil Fish)", "Semolina (Rava) & Rice Flour", "Malvani Masala", "Kokum Extract", "Turmeric & Sea Salt"],
    iconicSpots: ["Gajalee (Vile Parle)", "Mahesh Lunch Home (Fort)", "Highway Gomantak (Bandra East)", "Trishna (Kala Ghoda)"],
    image: "https://images.unsplash.com/photo-1535400255456-984241443b29?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Press cleaned bombil between cloth to remove excess moisture. Marinate in spices and kokum, roll in spiced rava-rice flour mix, and shallow-fry on medium heat until golden brown."
  },

  // ==========================================
  // --- DELHI (INDIA) ---
  // ==========================================
  {
    id: "del_butter_chicken",
    name: "Classic Butter Chicken (Murgh Makhani)",
    nativeName: "बटर चिकन (Murg Makhani Butter Chicken)",
    cityId: "delhi",
    cityName: "Delhi",
    country: "India",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 99,
    category: "Dinner",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Creamy", "Sweet", "Tangy", "Rich"],
    spiceLevel: 2,
    diet: ["non-veg", "halal", "high-protein"],
    moodTags: ["comfort", "date-night", "festive"],
    priceTier: "₹₹₹",
    price: 380,
    rating: 4.9,
    reviewsCount: 56000,
    calories: 610,
    prepTime: "30 mins",
    famousFor: "Smoky tandoori chicken simmered in rich velvety tomato, cashew, butter, and cream gravy with kasuri methi.",
    description: "Invented in Delhi's historic Daryaganj in the 1950s. Charcoal-grilled chicken pieces are braised in a luxurious sauce of ripe vine tomatoes, butter, cashew paste, fresh cream, and fragrant dried fenugreek leaves.",
    ingredients: ["Tandoori Grilled Chicken", "Ripe Vine Tomatoes", "Amul Butter & Fresh Cream", "Cashew Nut Paste", "Kasuri Methi (Dried Fenugreek)", "Degi Mirch & Garam Masala"],
    iconicSpots: ["Moti Mahal (Daryaganj)", "Gulati (Pandara Road)", "Havemore (Pandara Market)", "Daryaganj Restaurant", "Karim's (Jama Masjid)"],
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Roast marinated chicken in tandoor or hot oven. Simmer puréed tomatoes with spices, blend cashew paste, stir in butter and cream, add chicken, and finish with crushed kasuri methi."
  },
  {
    id: "del_chole_bhature",
    name: "Delhi Chole Bhature",
    nativeName: "दिल्ली के छोले भटूरे (Amritsari Chole Bhature)",
    cityId: "delhi",
    cityName: "Delhi",
    country: "India",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 98,
    category: "Breakfast",
    mealTimes: ["breakfast", "lunch"],
    tasteProfile: ["Spicy", "Tangy", "Crispy", "Savory"],
    spiceLevel: 4,
    diet: ["veg", "vegetarian"],
    moodTags: ["comfort", "spicy", "street-food", "festive"],
    priceTier: "₹",
    price: 120,
    rating: 4.9,
    reviewsCount: 47500,
    calories: 720,
    prepTime: "25 mins",
    famousFor: "Fluffy, giant balloon-like fried bread paired with dark, tangy, slow-simmered spiced chickpeas.",
    description: "Delhi's favorite weekend indulgence. Chickpeas cooked with tea-leaf infusion for dark color, tossed in pomegranate seeds and whole spices, served with piping hot, puffed-up golden bhaturas, pickled carrots, and mint chutney.",
    ingredients: ["Kabuli Chana (Chickpeas)", "Maida & Semolina (for Bhatura)", "Anardana (Pomegranate Seeds)", "Amla / Tea Infusion for dark color", "Ginger Juliennes & Green Chillies", "Achaar (Pickled Veggies)"],
    iconicSpots: ["Sita Ram Diwan Chand (Paharganj)", "Chache Di Hatti (Kamla Nagar)", "Nand Di Hatti (Sadar Bazaar)", "Nagpal's (Lajpat Nagar)"],
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Boil chickpeas with black tea bag for deep color. Sauté with onions, tomatoes, and anardana spice blend. Knead fermented dough, roll out oval, and deep fry until puffed like a balloon."
  },
  {
    id: "del_tandoori_tikka",
    name: "Smoky Tandoori Chicken Tikka",
    nativeName: "तंदूरी चिकन टिक्का (Tandoori Chicken Tikka)",
    cityId: "delhi",
    cityName: "Delhi",
    country: "India",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 95,
    category: "Dinner",
    mealTimes: ["lunch", "dinner", "late-night"],
    tasteProfile: ["Smoky", "Spicy", "Juicy", "Savory"],
    spiceLevel: 3,
    diet: ["non-veg", "halal", "high-protein", "gluten-free"],
    moodTags: ["spicy", "comfort", "date-night"],
    priceTier: "₹₹",
    price: 320,
    rating: 4.9,
    reviewsCount: 41200,
    calories: 410,
    prepTime: "20 mins",
    famousFor: "Charcoal-roasted succulent chicken skewers marinated in hung yogurt, mustard oil, and Kashmiri red chillies.",
    description: "Boneless chicken chunks marinated twice in ginger-garlic, mustard oil, hung curd, and roasted cumin, skewered and baked at extreme heat in traditional clay tandoor ovens for a crispy charred crust and juicy interior.",
    ingredients: ["Boneless Chicken Chunks", "Hung Curd / Greek Yogurt", "Mustard Oil", "Kashmiri Red Chilli Powder", "Ginger-Garlic Paste", "Kasuri Methi & Chaat Masala"],
    iconicSpots: ["Karim's (Old Delhi)", "Al Jawahar (Jama Masjid)", "Rajinder Da Dhaba (Safdarjung)", "Aslam Chicken (Matia Mahal)"],
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Double-marinate chicken in lemon juice, yogurt, mustard oil, and spices. Thread onto metal skewers and roast in clay tandoor at high heat, basting with melted butter."
  },

  // ==========================================
  // --- BENGALURU (INDIA) ---
  // ==========================================
  {
    id: "blr_masala_dosa",
    name: "Bengaluru Butter Masala Dosa",
    nativeName: "ಬೆಣ್ಣೆ ಮಸಾಲೆ ದೋಸೆ (Benne Masala Dosa)",
    cityId: "bangalore",
    cityName: "Bengaluru (Bangalore)",
    country: "India",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 98,
    category: "Breakfast",
    mealTimes: ["breakfast", "snack", "dinner"],
    tasteProfile: ["Crispy", "Buttery", "Savory", "Spicy"],
    spiceLevel: 2,
    diet: ["veg", "vegetarian", "gluten-free"],
    moodTags: ["comfort", "street-food", "quick"],
    priceTier: "₹",
    price: 90,
    rating: 4.9,
    reviewsCount: 65000,
    calories: 380,
    prepTime: "10 mins",
    famousFor: "Golden crisp crepe slathered with red garlic chutney, filled with potato palya and topped with fresh white butter.",
    description: "The pride of Bangalore's tiffin culture. Fermented rice and urad dal batter roasted on cast-iron griddles to deep copper crispness with a soft spongy center, layered with spiced potato mash and served with thick coconut chutney.",
    ingredients: ["Fermented Rice & Urad Dal Batter", "Fresh White Butter (Benne)", "Spiced Potato Mash (Palya)", "Spicy Red Garlic Chutney", "Fresh Coconut Chutney", "Piping Hot Sambar"],
    iconicSpots: ["CTR / Shri Sagar (Malleshwaram)", "Vidyarthi Bhavan (Gandhi Bazaar)", "Taaza Thindi (Jayanagar)", "MTR (Lalbagh)"],
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Pour fermented batter onto smoking hot tawa, swirl thin, smear red chutney and butter, place potato filling in middle, fold into triangle when crispy golden."
  },
  {
    id: "blr_filter_coffee",
    name: "South Indian Filter Coffee & Medu Vada",
    nativeName: "ಫಿಲ್ಟರ್ ಕಾಫಿ & ವಡೆ (Filter Coffee & Medu Vada)",
    cityId: "bangalore",
    cityName: "Bengaluru (Bangalore)",
    country: "India",
    isGlobalIcon: false,
    isLocalLegend: true,
    trendingScore: 94,
    category: "Breakfast",
    mealTimes: ["breakfast", "snack"],
    tasteProfile: ["Aromatic", "Rich", "Crispy", "Savory"],
    spiceLevel: 1,
    diet: ["veg", "vegetarian"],
    moodTags: ["comfort", "quick", "sweet"],
    priceTier: "₹",
    price: 60,
    rating: 4.9,
    reviewsCount: 58000,
    calories: 260,
    prepTime: "5 mins",
    famousFor: "Frothy Chicory-blended coffee served in stainless steel Davarah-Tumbler paired with crispy golden lentil doughnuts.",
    description: "An invigorating daily ritual. Dark coffee decoction dripped through stainless steel brass filters, blended with boiling full-cream milk and frothed from arm's length into a frothy crown, accompanied by crisp, piping-hot black gram fritters.",
    ingredients: ["Plantation Peaberry Coffee Beans with Chicory", "Fresh Foaming Milk", "Urad Dal (Black Gram)", "Curry Leaves, Ginger & Crushed Black Pepper", "Fresh Coconut Chutney"],
    iconicSpots: ["Brahmins' Coffee Bar (Shankarapuram)", "Mavalli Tiffin Room (MTR)", "Halli Jonne Roti", "SLV Coffee Joint"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Brew strong coffee decoction in traditional metal filter. Mix with boiled foaming milk and sugar, pour back and forth between dabarah and tumbler to aerate."
  },

  // ==========================================
  // --- KOLKATA (INDIA) ---
  // ==========================================
  {
    id: "ccu_biryani",
    name: "Kolkata Dum Biryani (with Aloo & Egg)",
    nativeName: "কলকাতা বিরিয়ানি (Kolkata Dum Biryani)",
    cityId: "kolkata",
    cityName: "Kolkata",
    country: "India",
    isGlobalIcon: false,
    isLocalLegend: true,
    trendingScore: 97,
    category: "Lunch",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Aromatic", "Subtle", "Rich", "Savory"],
    spiceLevel: 2,
    diet: ["non-veg", "halal"],
    moodTags: ["comfort", "festive", "date-night"],
    priceTier: "₹₹",
    price: 260,
    rating: 4.9,
    reviewsCount: 43000,
    calories: 620,
    prepTime: "40 mins",
    famousFor: "Delicately spiced saffron rice famous for melt-in-mouth slow-cooked potatoes and boiled egg.",
    description: "Born from the royal court of exiled Awadhi Nawab Wajid Ali Shah. Characterized by subtle aroma of meetha attar, kewra water, saffron-tinted long-grain basmati rice, tender meat, and the prized giant spiced potato.",
    ingredients: ["Long-Grain Basmati Rice", "Tender Mutton / Chicken", "Large Golden Potato (Aloo)", "Boiled Egg", "Meetha Attar & Kewra Water", "Ghee & Saffron Milk", "Shahi Garam Masala"],
    iconicSpots: ["Arsalan (Park Circus)", "Royal Indian Hotel (Chitpur)", "Aminia (New Market)", "Shiraz Golden Restaurant"],
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Fry marinated potatoes until golden. Layer parboiled rice with fragrant meat, potatoes, hard-boiled eggs, kewra water, and meetha attar. Seal handi and slow cook on dum."
  },
  {
    id: "ccu_kathi_roll",
    name: "Kolkata Nizam Kathi Roll",
    nativeName: "কলকাতা কাঠি রোল (Kolkata Kathi Roll)",
    cityId: "kolkata",
    cityName: "Kolkata",
    country: "India",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 96,
    category: "Street Food",
    mealTimes: ["lunch", "snack", "late-night"],
    tasteProfile: ["Crispy", "Juicy", "Tangy", "Spicy"],
    spiceLevel: 3,
    diet: ["non-veg", "halal", "high-protein"],
    moodTags: ["street-food", "quick", "comfort"],
    priceTier: "₹",
    price: 80,
    rating: 4.8,
    reviewsCount: 39000,
    calories: 450,
    prepTime: "8 mins",
    famousFor: "Flaky paratha layered with fried egg, stuffed with charcoal-grilled kebab meat, sliced onions, and lime juice.",
    description: "The original wrapped street sensation invented at Nizam's in 1932. Skewer-roasted spiced kebabs rolled inside flaky multi-layered parathas lined with fried egg, thinly sliced red onions, green chillies, and chaat masala.",
    ingredients: ["Layered Crispy Paratha", "Charcoal Skewered Chicken/Mutton", "Egg Layer", "Sliced Red Onions & Green Chillies", "Lime Juice & Chaat Masala", "Mustard (Kasundi) / Green Chutney"],
    iconicSpots: ["Nizam's (New Market)", "Kusum Rolls (Park Street)", "Hot Kathi Roll (Park Street)", "Jabbrr Afghani"],
    image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Grill marinated meat on iron skewers. Cook paratha on tawa, crack egg over it, place grilled kebab meat in center, garnish with spiced onions and lemon, roll tightly in paper."
  },
  {
    id: "ccu_rasgulla",
    name: "Spongy Bengali Rasgulla & Sandesh",
    nativeName: "রসগোল্লা ও সন্দেশ (Rosogolla and Sandesh)",
    cityId: "kolkata",
    cityName: "Kolkata",
    country: "India",
    isGlobalIcon: false,
    isLocalLegend: true,
    trendingScore: 92,
    category: "Dessert",
    mealTimes: ["lunch", "snack", "dinner"],
    tasteProfile: ["Sweet", "Juicy", "Spongy", "Aromatic"],
    spiceLevel: 0,
    diet: ["veg", "vegetarian", "gluten-free"],
    moodTags: ["sweet", "festive", "comfort"],
    priceTier: "₹",
    price: 60,
    rating: 4.9,
    reviewsCount: 34000,
    calories: 180,
    prepTime: "Ready to serve",
    famousFor: "Melt-in-mouth spongy cottage cheese spheres soaked in light cardamom sugar syrup.",
    description: "The legendary pride of Bengal sweetmakers. Freshly made soft chenna (cottage cheese) kneaded to silkiness, rolled into delicate spheres, and boiled in bubbling hot sugar syrup until springy and juicy.",
    ingredients: ["Fresh Cow Milk Chenna (Cottage Cheese)", "Refined Sugar Syrup", "Cardamom & Rose Water", "Pistachio Garnish"],
    iconicSpots: ["K.C. Das (Esplanade)", "Balaram Mullick & Radharaman Mullick (Bhawanipore)", "Nobin Chandra Das", "Girish Chandra Dey"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Rasgulla.jpg",
    recipeOverview: "Curdle fresh cow milk with whey, drain and knead chenna until non-sticky. Form into smooth balls, boil in simmering light cardamom sugar syrup for 15 minutes."
  },

  // ==========================================
  // --- CHENNAI (INDIA) ---
  // ==========================================
  {
    id: "maa_chettinad_chicken",
    name: "Spicy Chettinad Chicken Pepper Fry",
    nativeName: "à®šà¯†à®Ÿà¯à®Ÿà®¿à®¨à®¾à®Ÿà¯ à®•à¯‹à®´à®¿ à®µà®±à¯à®µà®²à¯",
    cityId: "chennai",
    cityName: "Chennai",
    country: "India",
    isGlobalIcon: false,
    isLocalLegend: true,
    trendingScore: 95,
    category: "Dinner",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Spicy", "Aromatic", "Peppery", "Savory"],
    spiceLevel: 4,
    diet: ["non-veg", "halal", "high-protein", "gluten-free"],
    moodTags: ["spicy", "comfort"],
    priceTier: "₹₹",
    price: 290,
    rating: 4.8,
    reviewsCount: 28000,
    calories: 490,
    prepTime: "25 mins",
    famousFor: "Fiery dry roast chicken bursting with freshly roasted Tellicherry black peppercorns, star anise, and curry leaves.",
    description: "From the heritage mansions of the Chettiar community. Chicken cooked with an aromatic stone-ground masala paste of freshly roasted whole spices, coconut, shallots, and fiery black pepper.",
    ingredients: ["Tender Country Chicken", "Tellicherry Black Peppercorns", "Kalpasi (Stone Flower) & Star Anise", "Fresh Curry Leaves", "Small Sambar Onions (Shallots)", "Fresh Grated Coconut"],
    iconicSpots: ["Anjappar Chettinad Restaurant", "Ponnusamy Hotel", "Junior Kuppanna (T. Nagar)", "Velu Military Hotel"],
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Dry roast whole spices, fennel seeds, and black pepper; grind into paste. Sauté shallots and curry leaves, add chicken and ground masala, cook until gravy coats chicken thickly."
  },

  // ==========================================
  // --- LUCKNOW (INDIA) ---
  // ==========================================
  {
    id: "lko_galouti_kebab",
    name: "Lucknow Galouti Kebab with Ulte Tawe Ka Paratha",
    nativeName: "गलौटी कबाब (Lucknowi Galouti Kebab)",
    cityId: "lucknow",
    cityName: "Lucknow",
    country: "India",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 97,
    category: "Dinner",
    mealTimes: ["dinner", "late-night"],
    tasteProfile: ["Melt-in-mouth", "Rich", "Aromatic", "Savory"],
    spiceLevel: 2,
    diet: ["non-veg", "halal", "high-protein"],
    moodTags: ["comfort", "date-night", "festive"],
    priceTier: "₹₹",
    price: 340,
    rating: 4.9,
    reviewsCount: 36000,
    calories: 510,
    prepTime: "20 mins",
    famousFor: "Velvety spiced kebabs that dissolve on the tongue, prepared with over 160 secret botanical aromatics.",
    description: "Created originally for the toothless Nawab Asad-ud-Daula. Super finely minced lamb tenderized with raw papaya and infused with a secret blend of exotic spices, pan-seared in desi ghee and served on inverted tawa saffron parathas.",
    ingredients: ["Finely Minced Lamb / Goat", "Raw Green Papaya Paste (Tenderizer)", "Desi Ghee", "Secret Potli Masala (160 herbs)", "Rose Water & Saffron", "Ulte Tawe Ka Paratha (Flaky Flatbread)"],
    iconicSpots: ["Tunday Kababi (Aminabad & Chowk)", "Dastarkhwan (Tulsi Theatre)", "Naushijaan (Hazratganj)"],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Mince meat multiple times with raw papaya paste and aromatic spices until silky smooth. Shape into delicate patties, sear on low heat in pure ghee until browned and meltingly soft."
  },

  // ==========================================
  // --- AMRITSAR (INDIA) ---
  // ==========================================
  {
    id: "asr_amritsari_kulcha",
    name: "Amritsari Stuffed Kulcha & Chole",
    nativeName: "à¨…à©°à¨®à©à¨°à¨¿à¨¤à¨¸à¨°à©€ à¨•à©à¨²à¨šà¨¾",
    cityId: "amritsar",
    cityName: "Amritsar",
    country: "India",
    isGlobalIcon: false,
    isLocalLegend: true,
    trendingScore: 96,
    category: "Breakfast",
    mealTimes: ["breakfast", "lunch"],
    tasteProfile: ["Crispy", "Buttery", "Spicy", "Tangy"],
    spiceLevel: 3,
    diet: ["veg", "vegetarian"],
    moodTags: ["comfort", "spicy", "street-food"],
    priceTier: "₹",
    price: 130,
    rating: 4.9,
    reviewsCount: 33000,
    calories: 680,
    prepTime: "15 mins",
    famousFor: "Crispy tandoor-baked flaky layered bread stuffed with spiced potatoes and onions, crushed with lots of melting desi makhan.",
    description: "The ultimate Punjabi soul food. Layered dough stuffed with spiced mashed potatoes, onions, pomegranate seeds, and fresh coriander, baked in blazing clay tandoors until blistered and crunchy, crushed by hand with homemade butter and served with tangy chole and tamarind-onion chutney.",
    ingredients: ["Layered Flour Dough", "Spiced Potato & Onion Stuffing", "Anardana (Dried Pomegranate)", "Homemade White Butter (Makhan)", "Spiced Amritsari Chole", "Tamarind-Onion Chutney"],
    iconicSpots: ["Kulcha Land (Ranjit Avenue)", "Bhai Kulwant Singh Kulchian Wale (Golden Temple)", "All India Famous Amritsari Kulcha (Maqbool Road)"],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Roll multi-layered laminated dough with spiced potato filling. Stick on inner wall of charcoal tandoor until blistered and crisp. Remove, crush with hands, and top with white butter."
  },

  // ==========================================
  // --- TOKYO (JAPAN) ---
  // ==========================================
  {
    id: "tokyo_ramen",
    name: "Tokyo Tonkotsu & Shoyu Ramen",
    nativeName: "東京ラーメン (Tokyo Tonkotsu & Shoyu Ramen)",
    cityId: "tokyo",
    cityName: "Tokyo",
    country: "Japan",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 99,
    category: "Dinner",
    mealTimes: ["lunch", "dinner", "late-night"],
    tasteProfile: ["Umami", "Savory", "Rich", "Warm"],
    spiceLevel: 1,
    diet: ["non-veg", "high-protein"],
    moodTags: ["comfort", "quick", "date-night"],
    priceTier: "₹₹",
    price: 480,
    rating: 4.9,
    reviewsCount: 68000,
    calories: 550,
    prepTime: "15 mins assemble",
    famousFor: "Handcrafted springy noodles in rich umami broth topped with melt-in-mouth chashu pork, ajitsuke tamago, and nori.",
    description: "An art form in a bowl. Broth simmered for up to 18 hours, paired with handcrafted alkaline noodles, tender braised chashu pork slices, marinated soft-boiled egg with custardy yolk, bamboo shoots, and nori seaweed.",
    ingredients: ["Fresh Alkaline Ramen Noodles", "Rich Pork / Chicken Shoyu Broth", "Braised Chashu Pork Belly", "Ajitsuke Tamago (Marinated Soft Egg)", "Menma (Bamboo Shoots)", "Nori Seaweed & Scallions"],
    iconicSpots: ["Ichiran (Shinjuku / Shibuya)", "Afuri (Harajuku)", "Ramen Street (Tokyo Station)", "Fuunji (Yoyogi)"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Slowly simmer bones with aromatics for rich tare base. Boil fresh noodles for 90 seconds. Ladle boiling broth into bowl, fold in noodles, top with chashu, scallions, and marinated egg."
  },
  {
    id: "tokyo_sushi",
    name: "Edomae Nigiri Sushi",
    nativeName: "江戸前寿司 (Edomae Nigiri Sushi)",
    cityId: "tokyo",
    cityName: "Tokyo",
    country: "Japan",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 98,
    category: "Dinner",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Fresh", "Umami", "Delicate", "Sweet"],
    spiceLevel: 1,
    diet: ["non-veg", "gluten-free", "high-protein"],
    moodTags: ["date-night", "healthy", "festive"],
    priceTier: "₹₹₹",
    price: 850,
    rating: 5.0,
    reviewsCount: 59000,
    calories: 380,
    prepTime: "Immediate prep",
    famousFor: "Ultra-fresh pristine cuts of wild bluefin tuna, sea urchin, and salmon over vinegared warm shari rice.",
    description: "The pinnacle of culinary precision. Seasoned sushi rice shaped by hand and topped with prime sashimi sourced daily from Toyosu market, brushed with nikiri soy sauce and a dab of fresh hon-wasabi.",
    ingredients: ["Toyosu Market Fresh Fish (Otoro, Akami, Uni, Salmon)", "Japanese Short Grain Rice", "Aged Red Vinegar (Akasu)", "Fresh Grated Hon-Wasabi", "Nikiri Soy Glaze"],
    iconicSpots: ["Sukiyabashi Jiro (Ginza)", "Sushi Dai (Toyosu)", "Sushi Saito (Minato)", "Sushizanmai (Tsukiji)"],
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Season warm short-grain rice with brewed vinegar and sea salt. Master chefs gently shape the rice bed with one hand, apply wasabi, place fresh sliced fish on top, and glaze with nikiri."
  },
  {
    id: "tokyo_katsu_curry",
    name: "Crispy Chicken Katsu Curry",
    nativeName: "チキンカツカレー (Tokyo Katsu Curry)",
    cityId: "tokyo",
    cityName: "Tokyo",
    country: "Japan",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 94,
    category: "Lunch",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Crispy", "Savory", "Sweet", "Rich"],
    spiceLevel: 2,
    diet: ["non-veg", "high-protein"],
    moodTags: ["comfort", "quick"],
    priceTier: "₹₹",
    price: 420,
    rating: 4.8,
    reviewsCount: 37000,
    calories: 740,
    prepTime: "15 mins",
    famousFor: "Golden panko-crusted crispy cutlet served over steaming Japanese rice and rich, aromatic sweet-savory brown curry.",
    description: "One of Japan's most beloved comfort dishes. Chicken breast breaded in airy Japanese panko flakes, deep fried to golden crunchiness, sliced into strips and blanketed with hearty caramelized onion and apple curry roux.",
    ingredients: ["Tender Chicken Fillet", "Japanese Panko Breadcrumbs", "Japanese Curry Roux (with Apple & Honey)", "Steamed Short Grain Rice", "Fukujinzuke (Red Pickled Radish)"],
    iconicSpots: ["Go! Go! Curry (Akihabara)", "CoCo Ichibanya (Tokyo)", "Tonkatsu Maisen (Aoyama)"],
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Dredge seasoned chicken in flour, egg wash, and panko. Deep fry at 180°C until golden brown and crisp. Serve sliced over hot rice and ladle rich warm curry sauce on the side."
  },
  {
    id: "tokyo_souffle_pancake",
    name: "Fluffy Japanese Soufflé Pancakes",
    nativeName: "スフレパンケーキ (Fluffy Soufflé Pancakes)",
    cityId: "tokyo",
    cityName: "Tokyo",
    country: "Japan",
    isGlobalIcon: false,
    isLocalLegend: true,
    trendingScore: 91,
    category: "Dessert",
    mealTimes: ["breakfast", "snack"],
    tasteProfile: ["Sweet", "Fluffy", "Airy", "Warm"],
    spiceLevel: 0,
    diet: ["veg", "vegetarian"],
    moodTags: ["sweet", "date-night", "comfort"],
    priceTier: "₹₹",
    price: 360,
    rating: 4.8,
    reviewsCount: 29000,
    calories: 340,
    prepTime: "20 mins",
    famousFor: "Gigantic cloud-like jiggly pancakes whipped with stiff meringue and served with pure butter and maple syrup.",
    description: "An airy confection that has taken the dessert world by storm. Whipped egg white meringue folded gently into batter, steam-cooked on covered griddles until they rise into tall, wobbly, melt-in-the-mouth edible clouds.",
    ingredients: ["Whipped Egg Whites (Meringue)", "Cake Flour & Milk", "Pure Hokkaido Butter", "Canadian Maple Syrup", "Fresh Berries & Whipped Cream"],
    iconicSpots: ["A Happy Pancake (Omotesando)", "Flipper's (Shibuya)", "Gram Cafe & Pancakes (Harajuku)"],
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Whip egg whites into stiff peaks. Gently fold into yolk-flour base. Pipe tall mounds onto low-heat covered griddle with drops of water to steam for 6-8 mins each side."
  },

  // ==========================================
  // --- OSAKA (JAPAN) ---
  // ==========================================
  {
    id: "osaka_takoyaki",
    name: "Crispy Osaka Takoyaki (Octopus Balls)",
    nativeName: "たこ焼き (Osaka Takoyaki Octopus Balls)",
    cityId: "osaka",
    cityName: "Osaka",
    country: "Japan",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 96,
    category: "Street Food",
    mealTimes: ["snack", "late-night"],
    tasteProfile: ["Umami", "Crispy", "Savory", "Warm"],
    spiceLevel: 1,
    diet: ["non-veg", "high-protein"],
    moodTags: ["street-food", "quick", "comfort"],
    priceTier: "₹",
    price: 240,
    rating: 4.9,
    reviewsCount: 42000,
    calories: 310,
    prepTime: "8 mins",
    famousFor: "Sizzling spherical batter balls with tender octopus centers, brushed with sweet tare sauce, Japanese mayo, and dancing bonito flakes.",
    description: "The soul of Osaka street gastronomy. Dashi-seasoned batter poured into cast iron dimpled pans, stuffed with octopus chunks, pickled ginger, and tempura scraps, turned rapidly with picks into crispy golden spheres.",
    ingredients: ["Fresh Boiled Octopus (Tako)", "Dashi Savory Batter", "Tenkasu (Tempura Scraps)", "Beni Shoga (Red Pickled Ginger)", "Takoyaki Brown Sauce & Kewpie Mayo", "Katsuobushi (Dancing Bonito Flakes) & Aonori"],
    iconicSpots: ["Takoya Dotonbori Kukuru", "Kogaryu (Amerikamura)", "Takoyaki Wanaka (Namba)"],
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Pour dashi batter into sizzling half-round molds. Add diced octopus and tempura crisps. Spin constantly with skewers until perfectly round and crisp, brush with sauce and mayo."
  },

  // ==========================================
  // --- SEOUL (SOUTH KOREA) ---
  // ==========================================
  {
    id: "seoul_kfc",
    name: "Yangnyeom Korean Crispy Fried Chicken",
    nativeName: "ì–‘ë…ì¹˜í‚¨",
    cityId: "seoul",
    cityName: "Seoul",
    country: "South Korea",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 99,
    category: "Dinner",
    mealTimes: ["dinner", "late-night"],
    tasteProfile: ["Crispy", "Sweet", "Spicy", "Juicy"],
    spiceLevel: 3,
    diet: ["non-veg", "high-protein"],
    moodTags: ["spicy", "comfort", "street-food", "quick"],
    priceTier: "₹₹",
    price: 420,
    rating: 4.9,
    reviewsCount: 57000,
    calories: 680,
    prepTime: "15 mins",
    famousFor: "Double-fried ultra-crunchy chicken drenched in sticky sweet, garlic, and gochujang chili glaze.",
    description: "The legendary Chimaek (Chicken + Beer) culture of Seoul. Chicken pieces potato-starch dredged and double-fried for maximum acoustic crunch, tossed in a shimmering red glaze of fermented gochujang, honey, garlic, and toasted sesame.",
    ingredients: ["Fresh Bone-in / Boneless Chicken", "Potato Starch Batter", "Gochujang (Korean Chili Paste)", "Honey & Brown Sugar", "Minced Garlic & Ginger", "Toasted White Sesame Seeds", "Pickled Daikon Radish (Mu)"],
    iconicSpots: ["Kyochon Chicken (Dongdaemun)", "BHC Chicken (Myeongdong)", "Hanchu (Garosugil, Gangnam)"],
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Season chicken with ginger and rice wine. Coat in light potato starch slurry. Fry at 160°C, rest for 5 minutes, fry second time at 190°C for shattering crispiness. Toss immediately in warm sticky chili glaze."
  },
  {
    id: "seoul_bibimbap",
    name: "Dolsot Bibimbap (Sizzling Stone Bowl Rice)",
    nativeName: "돌솥 비빔밥 (Dolsot Bibimbap)",
    cityId: "seoul",
    cityName: "Seoul",
    country: "South Korea",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 96,
    category: "Lunch",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Savory", "Umami", "Spicy", "Crispy"],
    spiceLevel: 2,
    diet: ["non-veg", "gluten-free"],
    moodTags: ["comfort", "healthy", "date-night"],
    priceTier: "₹₹",
    price: 380,
    rating: 4.8,
    reviewsCount: 44000,
    calories: 520,
    prepTime: "15 mins",
    famousFor: "Steaming rice in piping hot granite bowl with a rainbow of seasoned vegetables, beef, fried egg, and gochujang.",
    description: "A harmonious Korean masterpiece served in sizzling hot stone pots. The bottom layer of rice crisps into irresistible golden crust (nurungji) while topped with sautéed namul vegetables, marinated bulgogi beef, sunny egg, and sesame oil.",
    ingredients: ["Short Grain Rice", "Seasoned Namul (Spinach, Bean Sprouts, Shiitake, Carrots, Zucchini)", "Marinated Bulgogi Beef", "Sunny-Side Up Egg", "Gochujang Chili Sauce", "Toasted Sesame Oil"],
    iconicSpots: ["Gogung (Myeongdong)", "Jeonju Jungang Hoekwan (Seoul)", "Mokmyeoksanbang (Namsan)"],
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Coat hot granite bowl with sesame oil, add cooked rice. Arrange colorful vegetables and seasoned beef neatly on top. Crown with fried egg and serve with gochujang paste to mix vigorously at the table."
  },

  // ==========================================
  // --- BANGKOK (THAILAND) ---
  // ==========================================
  {
    id: "bkk_pad_thai",
    name: "Bangkok Street Pad Thai Kung",
    nativeName: "ผัดไทยกุ้งสด (Pad Thai Goong)",
    cityId: "bangkok",
    cityName: "Bangkok",
    country: "Thailand",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 98,
    category: "Dinner",
    mealTimes: ["lunch", "dinner", "late-night"],
    tasteProfile: ["Tangy", "Sweet", "Savory", "Nutty"],
    spiceLevel: 2,
    diet: ["non-veg", "high-protein", "gluten-free"],
    moodTags: ["comfort", "street-food", "quick"],
    priceTier: "₹",
    price: 260,
    rating: 4.8,
    reviewsCount: 49000,
    calories: 490,
    prepTime: "12 mins",
    famousFor: "Wok-charred rice noodles glazed in sour tamarind pulp, palm sugar, fish sauce, jumbo prawns, and crushed roasted peanuts.",
    description: "Thailand's world-famous stir-fried noodles tossed over fiery woks. Infused with sweet and tangy tamarind paste, dried shrimp, firm pressed tofu cubes, crunchy bean sprouts, Chinese chives, and topped with lime wedges and roasted peanuts.",
    ingredients: ["Rice Stick Noodles", "Fresh River Jumbo Prawns", "Tamarind Pulp & Palm Sugar", "Fish Sauce (Nam Pla)", "Pressed Yellow Tofu", "Roasted Crushed Peanuts & Fresh Lime"],
    iconicSpots: ["Thipsamai Pad Thai (Pratu Phi)", "Pad Thai Fai Ta Lu (Dinso Rd)", "Baan Phadthai (Bang Rak)"],
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Stir-fry tofu and prawns in smoking hot wok. Add soaked rice noodles and tamarind sauce. Push noodles to side, crack egg, fold together with bean sprouts and chives, garnish with peanuts."
  },
  {
    id: "bkk_mango_sticky_rice",
    name: "Mango Sticky Rice (Khao Niew Mamuang)",
    nativeName: "ข้าวเหนียวมะม่วง (Mango Sticky Rice)",
    cityId: "bangkok",
    cityName: "Bangkok",
    country: "Thailand",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 95,
    category: "Dessert",
    mealTimes: ["snack", "dinner"],
    tasteProfile: ["Sweet", "Creamy", "Fruity", "Warm"],
    spiceLevel: 0,
    diet: ["veg", "vegetarian", "vegan", "gluten-free"],
    moodTags: ["sweet", "comfort", "date-night"],
    priceTier: "₹",
    price: 220,
    rating: 4.9,
    reviewsCount: 39000,
    calories: 360,
    prepTime: "10 mins",
    famousFor: "Sweet floral Nam Dok Mai ripe mangoes served with warm, salted coconut-milk-infused glutinous rice.",
    description: "An intoxicating harmony of warm steamed sticky rice steeped in sweet coconut milk, paired with chilled, fragrant slices of honey-sweet ripe mangoes and toasted crispy yellow mung beans on top.",
    ingredients: ["Thai Sweet Sticky Glutinous Rice", "Nam Dok Mai / Honey Ripe Mangoes", "Rich Coconut Cream & Pandan Leaves", "Palm Sugar & Sea Salt", "Crispy Fried Yellow Mung Beans"],
    iconicSpots: ["Mae Varee Sweet Sticky Rice (Thong Lo)", "Kor Panich (Phra Nakhon)", "Je Meaw (Chinatown)"],
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Steam glutinous rice with pandan leaves. Stir warm rice into salted sweet coconut cream until absorbed. Slice chilled mango and spoon warm coconut sauce with toasted mung beans."
  },
  {
    id: "bkk_tom_yum",
    name: "Spicy Tom Yum Goong (Prawn Soup)",
    nativeName: "ต้มยำกุ้ง (Tom Yum Goong)",
    cityId: "bangkok",
    cityName: "Bangkok",
    country: "Thailand",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 97,
    category: "Dinner",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Spicy", "Sour", "Aromatic", "Umami"],
    spiceLevel: 4,
    diet: ["non-veg", "gluten-free", "high-protein"],
    moodTags: ["spicy", "comfort", "healthy"],
    priceTier: "₹₹",
    price: 350,
    rating: 4.9,
    reviewsCount: 46000,
    calories: 310,
    prepTime: "15 mins",
    famousFor: "Aromatic steaming broth infused with lemongrass, galangal, kaffir lime leaves, chili jam, and succulent river prawns.",
    description: "The quintessential Thai soup. A fragrant explosion of hot, sour, and savory flavors balancing fresh lemongrass, crushed bird's eye chilies, lime juice, roasted chili paste (Nam Prik Pao), fresh mushrooms, and juicy king prawns.",
    ingredients: ["Giant River Prawns (Head-on)", "Fresh Lemongrass & Galangal", "Kaffir Lime Leaves", "Thai Bird's Eye Chilies", "Roasted Chili Jam (Nam Prik Pao)", "Straw Mushrooms & Lime Juice"],
    iconicSpots: ["Tom Yum Goong Banglamphu (Khao San)", "Pe Aor Tom Yum Kung (Phaya Thai)", "Raan Jay Fai (Maha Chai)"],
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Simmer prawn shells with bruised lemongrass, galangal, and kaffir lime leaves. Add chili jam, mushrooms, and prawns. Turn off heat, add fish sauce and lime juice to preserve bright citrus acidity."
  },

  // ==========================================
  // --- HANOI / SAIGON (VIETNAM) ---
  // ==========================================
  {
    id: "han_pho_bo",
    name: "Traditional Vietnamese Pho Bo (Beef Noodle Soup)",
    nativeName: "Phở Bò Hà Nội",
    cityId: "hanoi",
    cityName: "Hanoi & Saigon",
    country: "Vietnam",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 98,
    category: "Breakfast",
    mealTimes: ["breakfast", "lunch", "dinner", "late-night"],
    tasteProfile: ["Aromatic", "Warm", "Savory", "Herbal"],
    spiceLevel: 1,
    diet: ["non-veg", "gluten-free", "high-protein"],
    moodTags: ["comfort", "healthy", "street-food"],
    priceTier: "₹",
    price: 320,
    rating: 4.9,
    reviewsCount: 54000,
    calories: 420,
    prepTime: "12 hours simmered broth",
    famousFor: "Crystal-clear beef bone broth infused with charred star anise, cinnamon, tender flat rice noodles, and rare beef slices.",
    description: "Vietnam's national treasure. Beef marrow bones simmered gently for 12 hours with charred ginger, onions, and warming whole spices, ladled over silky banh pho rice noodles, thinly sliced tender beef, fresh cilantro, thai basil, and lime.",
    ingredients: ["Slow-Simmered Beef Marrow Bone Broth", "Flat Rice Noodles (Bánh Phở)", "Thin Sliced Tender Beef Flank & Rare Eye Round", "Charred Ginger, Shallots & Star Anise", "Cinnamon & Cardamom", "Thai Basil, Sawtooth Herb, Lime & Bean Sprouts"],
    iconicSpots: ["Phở Gia Truyền Bát Đàn (Old Quarter, Hanoi)", "Phở Thìn (Lò Đúc, Hanoi)", "Phở Hòa Pasteur (Saigon)"],
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Parboil and rinse beef bones, then slow simmer with charred aromatics and spices for 12 hours. Place fresh rice noodles and raw beef in bowl, pour boiling broth over top to flash-cook the beef."
  },
  {
    id: "han_banh_mi",
    name: "Crispy Vietnamese Banh Mi",
    nativeName: "Bánh Mì Kẹp Thịt",
    cityId: "hanoi",
    cityName: "Hanoi & Saigon",
    country: "Vietnam",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 97,
    category: "Street Food",
    mealTimes: ["breakfast", "lunch", "snack"],
    tasteProfile: ["Crispy", "Savory", "Tangy", "Fresh"],
    spiceLevel: 2,
    diet: ["non-veg", "high-protein"],
    moodTags: ["street-food", "quick", "comfort"],
    priceTier: "₹",
    price: 180,
    rating: 4.9,
    reviewsCount: 48000,
    calories: 460,
    prepTime: "5 mins",
    famousFor: "Airy crusty French-Vietnamese baguette stuffed with savory roasted meats, rich liver pâté, pickled daikon-carrot, and fresh cilantro.",
    description: "The ultimate East-meets-West street bite. A shatteringly crisp, featherweight baguette smeared with creamy French liver pâté and mayonnaise, layered with savory grilled pork, cucumber ribbons, crunchy pickled daikon and carrots, jalapeños, and fresh cilantro.",
    ingredients: ["Airy Crusty Vietnamese Baguette", "Savory Roast Pork / Pork Chả Lụa", "Rich Liver Pâté & Egg Mayo", "Pickled Daikon & Carrot (Đồ Chua)", "Cucumber Spears, Cilantro & Fresh Chilies", "Seasoning Maggi Liquid Aminos"],
    iconicSpots: ["Bánh Mì 25 (Hanoi Old Quarter)", "Bánh Mì Huỳnh Hoa (Saigon)", "Bánh Mì Phượng (Hội An)"],
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Toast baguette until crust is brittle. Slit open, spread pâté and mayo, layer pork cold cuts, add pickled radish and carrots, fresh cucumber, chili slices, and sprigs of cilantro."
  },

  // ==========================================
  // --- ROME (ITALY) ---
  // ==========================================
  {
    id: "rom_carbonara",
    name: "Classic Roman Spaghetti Carbonara",
    nativeName: "Spaghetti alla Carbonara",
    cityId: "rome",
    cityName: "Rome",
    country: "Italy",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 98,
    category: "Pasta",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Creamy", "Savory", "Peppery", "Rich"],
    spiceLevel: 1,
    diet: ["non-veg"],
    moodTags: ["comfort", "cheesy", "date-night"],
    priceTier: "₹₹",
    price: 480,
    rating: 4.9,
    reviewsCount: 65000,
    calories: 680,
    prepTime: "20 mins",
    famousFor: "Creamy silky sauce made only with farm egg yolks, aged Pecorino Romano, crispy Guanciale pork cheek, and toasted black pepper (NO cream!).",
    description: "Rome's most sacred culinary heritage. Bronze-die spaghetti tossed with sizzling golden Guanciale, then emulsified off the heat with pasture-raised egg yolks, freshly grated Pecorino Romano DOP, and freshly cracked Tellicherry black pepper.",
    ingredients: ["Bronze-Die Spaghetti / Rigatoni", "Cured Pork Cheek (Guanciale DOP)", "Aged Pecorino Romano DOP", "Pasture-Raised Fresh Egg Yolks", "Toasted Coarsely Cracked Black Pepper"],
    iconicSpots: ["Roscioli Salumeria con Cucina (Campo de' Fiori)", "Trattoria Da Enzo al 29 (Trastevere)", "Luciano Cucina Italiana (Pellegrino)"],
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Render guanciale until golden crisp. Whisk egg yolks with Pecorino and pepper. Cook spaghetti al dente, toss with pork fat, remove from heat, fold in egg mixture with pasta water to emulsify silky cream."
  },
  {
    id: "rom_cacio_pepe",
    name: "Authentic Roman Cacio e Pepe",
    nativeName: "Tonnarelli Cacio e Pepe",
    cityId: "rome",
    cityName: "Rome",
    country: "Italy",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 95,
    category: "Pasta",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Creamy", "Savory", "Peppery", "Tangy"],
    spiceLevel: 2,
    diet: ["veg"],
    moodTags: ["comfort", "cheesy", "quick"],
    priceTier: "₹₹",
    price: 420,
    rating: 4.8,
    reviewsCount: 42000,
    calories: 540,
    prepTime: "15 mins",
    famousFor: "Masterclass of minimalism: just pasta, aged Pecorino Romano cheese, black pepper, and pasta starch water creating velvety magic.",
    description: "The ancient Roman shepherd dish. Fresh hand-cut Tonnarelli pasta emulsified with freshly grated aged Pecorino Romano and freshly toasted cracked black peppercorns using hot starchy cooking water into a luxuriant, velvety sauce without butter or oil.",
    ingredients: ["Fresh Tonnarelli Pasta / Spaghetti", "Pecorino Romano DOP (Finely Grated)", "Whole Black Peppercorns (Toasted & Coarse)", "Starchy Pasta Cooking Water"],
    iconicSpots: ["Felice a Testaccio (Testaccio)", "Flavio al Velavevodetto (Testaccio)", "Da Francesco (Piazza del Fico)"],
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281514?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Toast cracked pepper in dry skillet until fragrant. Whisk Pecorino with warm pasta water into a thick paste. Toss hot drained tonnarelli pasta in skillet, add cheese paste and vigorously stir off heat until velvety cream forms."
  },

  // ==========================================
  // --- NAPLES (ITALY) ---
  // ==========================================
  {
    id: "nap_neapolitan_pizza",
    name: "Wood-Fired Neapolitan Pizza Margherita",
    nativeName: "Pizza Margherita Napoletana",
    cityId: "naples",
    cityName: "Naples",
    country: "Italy",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 99,
    category: "Dinner",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Cheesy", "Savory", "Fresh", "Smoky"],
    spiceLevel: 0,
    diet: ["veg", "vegetarian"],
    moodTags: ["comfort", "cheesy", "date-night", "street-food"],
    priceTier: "₹₹",
    price: 380,
    rating: 5.0,
    reviewsCount: 62000,
    calories: 580,
    prepTime: "90 seconds in 900°F oven",
    famousFor: "UNESCO-recognized soft, pillowy leopard-spotted crust topped with sweet San Marzano tomatoes, fresh buffalo mozzarella, and fragrant basil.",
    description: "The birthplace of authentic pizza. Fermented dough stretched by hand without rolling pins, topped with crushed volcanic San Marzano tomatoes, creamy Mozzarella di Bufala Campana, extra virgin olive oil, and fresh basil, blasted for 90 seconds in 485°C wood-fired ovens.",
    ingredients: ["Caputo Tipo 00 Flour (Long Fermentation)", "San Marzano DOP Volcanic Tomatoes", "Mozzarella di Bufala Campana DOP", "Fresh Sweet Basil Leaves", "Cold-Pressed Extra Virgin Olive Oil"],
    iconicSpots: ["L'Antica Pizzeria da Michele (Napoli)", "Gino e Toto Sorbillo (Via dei Tribunali)", "Pizzeria Di Matteo", "50 Kalò"],
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Hand-stretch fermented dough disc creating a raised rim (cornicione). Spread crushed tomatoes, tear fresh buffalo mozzarella, scatter basil leaves, drizzle olive oil, and bake 90 seconds at 485°C on stone floor."
  },

  // ==========================================
  // --- PARIS (FRANCE) ---
  // ==========================================
  {
    id: "paris_croissant",
    name: "French Artisanal Butter Croissant",
    nativeName: "Croissant Pur Beurre",
    cityId: "paris",
    cityName: "Paris",
    country: "France",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 98,
    category: "Breakfast",
    mealTimes: ["breakfast", "snack"],
    tasteProfile: ["Buttery", "Crispy", "Flaky", "Rich"],
    spiceLevel: 0,
    diet: ["veg", "vegetarian"],
    moodTags: ["comfort", "quick", "sweet"],
    priceTier: "₹",
    price: 160,
    rating: 4.9,
    reviewsCount: 64000,
    calories: 280,
    prepTime: "Freshly Baked",
    famousFor: "Dozens of paper-thin caramelized golden layers made with Normandy cultured butter that shatter with every bite.",
    description: "The gold standard of French viennoiserie. Laminated dough folded painstakingly with high-fat Normandy butter, baked to a honeycomb interior and a golden, featherlight flaky shell.",
    ingredients: ["French T55 Flour", "Normandy AOP High-Fat Butter", "Active Yeast", "Milk, Sugar & Sea Salt"],
    iconicSpots: ["Du Pain et des Idées (10th Arr.)", "Cédric Grolet Opéra", "Stohrer (Rue Montorgueil)", "Mamiche"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Laminate yeasted dough with butter block through 3 consecutive folds. Proof croissants at controlled temperature for 2 hours, bake at 200°C until mahogany and puffed."
  },
  {
    id: "paris_onion_soup",
    name: "Classic French Onion Soup (Soupe à l'oignon)",
    nativeName: "Soupe à l'oignon Gratinée",
    cityId: "paris",
    cityName: "Paris",
    country: "France",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 94,
    category: "Dinner",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Savory", "Sweet", "Cheesy", "Rich"],
    spiceLevel: 0,
    diet: ["non-veg"],
    moodTags: ["comfort", "cheesy", "date-night"],
    priceTier: "₹₹",
    price: 340,
    rating: 4.8,
    reviewsCount: 31000,
    calories: 450,
    prepTime: "40 mins",
    famousFor: "Deeply caramelized sweet onions in rich beef broth topped with crusty baguette and a bubbling lid of melted Gruyère cheese.",
    description: "Parisian bistros' most comforting classic. Yellow onions slow-cooked for hours until rich mahogany and naturally sweet, deglazed with dry white wine and beef consommé, served in crock pots blanketed with toasted sourdough and bubbling broiled Gruyère cheese.",
    ingredients: ["Caramelized Yellow Onions", "Rich Beef Stock / Consommé", "Dry White Wine & Thyme", "French Sourdough Baguette Slices", "Aged Gruyère & Comté Cheese"],
    iconicSpots: ["Au Pied de Cochon (Les Halles)", "Bouillon Chartier (Grands Boulevards)", "Le Comptoir du Relais (Saint-Germain)"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Slowly caramelize sliced onions in butter for 45 mins. Deglaze with white wine, add beef stock and thyme, simmer for 20 mins. Ladle into bowls, top with toasted baguette slices, pile shredded Gruyère, broil until golden bubbling."
  },

  // ==========================================
  // --- LONDON (UK) ---
  // ==========================================
  {
    id: "ldn_fish_chips",
    name: "Classic British Fish and Chips",
    nativeName: "Fish & Chips with Mushy Peas",
    cityId: "london",
    cityName: "London",
    country: "UK",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 95,
    category: "Lunch",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Crispy", "Savory", "Flaky", "Tangy"],
    spiceLevel: 0,
    diet: ["non-veg", "high-protein"],
    moodTags: ["comfort", "street-food", "quick"],
    priceTier: "₹₹",
    price: 490,
    rating: 4.7,
    reviewsCount: 38000,
    calories: 740,
    prepTime: "15 mins",
    famousFor: "Golden ale-battered flaky Atlantic cod with thick triple-cooked chips and tartare sauce.",
    description: "An iconic staple of London pub culture. Fresh thick cod fillet encased in a feather-light beer batter, deep-fried until glass-shattering crisp, served with chunky sea-salted potato chips and tangy malt vinegar.",
    ingredients: ["Fresh Atlantic Cod / Haddock", "Crisp Ale Beer Batter", "Maris Piper Thick-Cut Potatoes", "Marrowfat Mushy Peas", "Homemade Tartare Sauce & Malt Vinegar"],
    iconicSpots: ["Poppie's Fish & Chips (Spitalfields)", "The Golden Hind (Marylebone)", "Toff's of Muswell Hill", "Kerbisher & Malt"],
    image: "https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Coat seasoned fresh fish in flour, dip in ice-cold beer batter. Fry at 190°C until golden amber. Double fry chunky chips for maximum crispness."
  },
  {
    id: "ldn_full_english",
    name: "Traditional Full English Breakfast",
    nativeName: "Full English Fry-Up",
    cityId: "london",
    cityName: "London",
    country: "UK",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 93,
    category: "Breakfast",
    mealTimes: ["breakfast", "lunch"],
    tasteProfile: ["Savory", "Hearty", "Rich", "Warm"],
    spiceLevel: 0,
    diet: ["non-veg", "high-protein"],
    moodTags: ["comfort", "quick"],
    priceTier: "₹₹",
    price: 440,
    rating: 4.8,
    reviewsCount: 42000,
    calories: 850,
    prepTime: "15 mins",
    famousFor: "Epic platter of sunny eggs, Cumberland sausages, crispy back bacon, baked beans, sautéed mushrooms, grilled tomatoes, and buttered toast.",
    description: "The ultimate hearty British morning feast. A loaded plate featuring sizzling Cumberland pork sausages, thick rashers of British back bacon, fried eggs with runny yolks, slow-simmered Heinz baked beans, buttered button mushrooms, blistered grilled tomatoes, and golden fried bread.",
    ingredients: ["Cumberland Pork Sausages", "British Back Bacon", "Farm Fresh Eggs", "Slow Simmered Baked Beans", "Button Mushrooms & Vine Tomatoes", "Buttered Sourdough Toast / Fried Bread"],
    iconicSpots: ["The Regency Cafe (Westminster)", "E Pellicci (Bethnal Green)", "Terry's Cafe (Borough)", "The Wolseley (Mayfair)"],
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Fry sausages and bacon on cast-iron skillet. Sauté mushrooms and blister tomatoes. Fry eggs sunny side up. Warm beans, toast bread, and assemble everything on a hot platter."
  },

  // ==========================================
  // --- ISTANBUL (TURKEY) ---
  // ==========================================
  {
    id: "ist_doner_kebab",
    name: "Authentic Turkish Döner Kebab",
    nativeName: "İstanbul Yaprak Döner",
    cityId: "istanbul",
    cityName: "Istanbul",
    country: "Turkey",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 98,
    category: "Dinner",
    mealTimes: ["lunch", "dinner", "late-night"],
    tasteProfile: ["Juicy", "Savory", "Smoky", "Spicy"],
    spiceLevel: 2,
    diet: ["non-veg", "halal", "high-protein"],
    moodTags: ["street-food", "comfort", "quick", "spicy"],
    priceTier: "₹₹",
    price: 290,
    rating: 4.9,
    reviewsCount: 49000,
    calories: 560,
    prepTime: "8 mins",
    famousFor: "Vertical charcoal-roasted layered lamb & beef shaved paper-thin into warm lavash bread with sumac onions.",
    description: "Istanbul's legendary charcoal-roasted meat masterwork. Marinated sheets of lamb and veal layered with tail fat, roasted horizontally or vertically over glowing oak embers, shaved into thin ribbons and served with charred peppers, sumac onions, and yogurt.",
    ingredients: ["Layered Marinated Lamb & Beef", "Turkish Lavash Flatbread", "Sumac Spiced Red Onions", "Charred Sivri Green Peppers", "Garlic Strained Yogurt"],
    iconicSpots: ["Dönerci Şahin Usta (Grand Bazaar)", "Bayramoğlu Döner (Kavacık)", "Zümrüt Büfe (Eminönü)", "Karadeniz Döner Asım Usta (Beşiktaş)"],
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Marinate sliced meat with onion juice, yogurt, and Anatolian spices for 24 hours. Stack on rotisserie spit, roast slowly, shave paper-thin slices onto hot pide or lavash."
  },
  {
    id: "ist_baklava",
    name: "Gaziantep Pistachio Baklava",
    nativeName: "Antep Fıstıklı Baklava",
    cityId: "istanbul",
    cityName: "Istanbul",
    country: "Turkey",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 97,
    category: "Dessert",
    mealTimes: ["snack", "dinner"],
    tasteProfile: ["Sweet", "Nutty", "Crispy", "Syrupy"],
    spiceLevel: 0,
    diet: ["veg", "vegetarian"],
    moodTags: ["sweet", "festive", "comfort"],
    priceTier: "₹₹",
    price: 250,
    rating: 4.9,
    reviewsCount: 42000,
    calories: 390,
    prepTime: "Ready to serve",
    famousFor: "40 whisper-thin layers of hand-rolled phyllo pastry filled with vibrant emerald Gaziantep pistachios and warm syrup.",
    description: "The crown dessert of the Ottoman Empire. Impossibly translucent sheets of pastry brushed with clarified butter, packed with fragrant green Antep pistachios, baked until glowing golden, and bathed in hot sugar syrup.",
    ingredients: ["Paper-thin Phyllo Sheets (40 layers)", "Emerald Antep Pistachios", "Clarified Sheep's Milk Butter", "Pure Sugar Syrup & Lemon Juice", "Kaymak (Turkish Clotted Cream)"],
    iconicSpots: ["Karaköy Güllüoğlu (Karaköy)", "Hafiz Mustafa 1864 (Sirkeci)", "Köşkeroğlu (Karaköy)", "Develi Baklava"],
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Roll phyllo until transparent. Layer with clarified butter, spread generous crushed pistachios in middle, bake until crisp, pour hot syrup over hot pastry immediately."
  },

  // ==========================================
  // --- NEW YORK (USA) ---
  // ==========================================
  {
    id: "nyc_pastrami",
    name: "Katz's Pastrami on Rye",
    nativeName: "New York Pastrami Sandwich",
    cityId: "new_york",
    cityName: "New York City",
    country: "USA",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 98,
    category: "Lunch",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Savory", "Smoky", "Tangy", "Juicy"],
    spiceLevel: 1,
    diet: ["non-veg", "halal", "high-protein"],
    moodTags: ["comfort", "quick", "street-food"],
    priceTier: "₹₹",
    price: 480,
    rating: 4.8,
    reviewsCount: 44000,
    calories: 780,
    prepTime: "5 mins",
    famousFor: "Towering stack of hand-carved, peppery, smoked beef brisket between crusty rye bread with spicy brown mustard.",
    description: "A New York deli masterpiece since 1888. Beef brisket cured for weeks in secret spices, smoked low and slow over hardwood, steamed until butter-soft, and carved thickly by hand.",
    ingredients: ["Cured & Smoked Beef Brisket", "Crusty Seeded Rye Bread", "Deli Spicy Brown Mustard", "Half-Sour Pickles"],
    iconicSpots: ["Katz's Delicatessen (Lower East Side)", "2nd Ave Deli", "Pastrami Queen (Upper East Side)", "Sarge's Delicatessen"],
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Brine brisket with curing salt, coriander, and brown sugar. Smoke over wood chips for 10 hours. Steam until tender, slice thick, and stack high on rye bread with spicy brown mustard."
  },
  {
    id: "nyc_pizza",
    name: "Authentic NY Style Foldable Pizza Slice",
    nativeName: "New York Cheese Slice",
    cityId: "new_york",
    cityName: "New York City",
    country: "USA",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 99,
    category: "Street Food",
    mealTimes: ["lunch", "dinner", "late-night"],
    tasteProfile: ["Cheesy", "Savory", "Crispy", "Tangy"],
    spiceLevel: 1,
    diet: ["veg", "vegetarian"],
    moodTags: ["comfort", "quick", "cheesy", "street-food"],
    priceTier: "₹",
    price: 180,
    rating: 4.9,
    reviewsCount: 65000,
    calories: 320,
    prepTime: "8 mins",
    famousFor: "Wide, thin, foldable slice with crisp bottom crust, sweet San Marzano tomato sauce, and whole-milk mozzarella.",
    description: "The heartbeat of NYC street culture. Baked in high-heat deck ovens to produce a blistered, crunchy bottom that folds neatly in half with gooey melted mozzarella and aromatic oregano.",
    ingredients: ["High-Gluten Fermented Dough", "Crushed San Marzano Tomatoes", "Low-Moisture Whole Milk Mozzarella", "Fresh Basil & Dried Oregano", "Pecorino Romano & Garlic Oil"],
    iconicSpots: ["Joe's Pizza (Greenwich Village)", "Scarr's Pizza (Lower East Side)", "Lucali (Brooklyn)", "L'Industrie Pizzeria (Williamsburg)"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Stretch cold-fermented dough thin by hand. Spoon uncooked seasoned tomato sauce, scatter whole-milk mozzarella, bake on 550°F pizza stones until charred and bubbly."
  },
  {
    id: "nyc_cheesecake",
    name: "Classic New York Baked Cheesecake",
    nativeName: "New York Cheesecake",
    cityId: "new_york",
    cityName: "New York City",
    country: "USA",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 95,
    category: "Dessert",
    mealTimes: ["snack", "dinner"],
    tasteProfile: ["Creamy", "Sweet", "Rich", "Tangy"],
    spiceLevel: 0,
    diet: ["veg", "vegetarian"],
    moodTags: ["sweet", "comfort", "date-night"],
    priceTier: "₹₹",
    price: 280,
    rating: 4.9,
    reviewsCount: 38000,
    calories: 460,
    prepTime: "Ready to serve",
    famousFor: "Dense, ultra-creamy baked Philadelphia cream cheese cake over a buttery graham cracker crust.",
    description: "A legendary American dessert standard. Dense and velvety smooth texture made with heavy cream cheese, eggs, sour cream, and vanilla, baked in a water bath over a cinnamon-spiced graham cracker base and topped with strawberry compote.",
    ingredients: ["Philadelphia Cream Cheese", "Graham Cracker Crust", "Sour Cream & Heavy Cream", "Vanilla Extract & Lemon Zest", "Fresh Strawberry Compote"],
    iconicSpots: ["Junior's Cheesecake (Brooklyn)", "Eileen's Special Cheesecake (SoHo)", "Veniero's Pasticceria (East Village)"],
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Press crushed graham crackers into springform pan. Beat cream cheese, sugar, eggs, and sour cream until velvety. Bake in water bath at 160°C, cool slowly for zero cracks."
  },
  {
    id: "nyc_smash_burger",
    name: "Classic Double Smash Cheeseburger",
    nativeName: "NYC Smash Burger",
    cityId: "new_york",
    cityName: "New York City",
    country: "USA",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 97,
    category: "Lunch",
    mealTimes: ["lunch", "dinner", "late-night"],
    tasteProfile: ["Juicy", "Savory", "Cheesy", "Crispy"],
    spiceLevel: 1,
    diet: ["non-veg", "high-protein"],
    moodTags: ["comfort", "cheesy", "quick", "street-food"],
    priceTier: "₹₹",
    price: 340,
    rating: 4.8,
    reviewsCount: 48000,
    calories: 680,
    prepTime: "8 mins",
    famousFor: "Smashed beef patties seared on smoking cast iron with lacy crispy edges, melted American cheese, and secret shack sauce in toasted potato buns.",
    description: "The pinnacle of burger craftsmanship. Freshly ground beef smashed razor-thin onto a ripping hot plancha to develop a deeply caramelized, lacy crust, layered with melting American cheese, pickles, and special sauce inside buttered toasted Martin's potato rolls.",
    ingredients: ["Fresh Ground Chuck & Brisket Beef", "American Melted Cheese", "Martin's Famous Potato Buns", "Crinkle-Cut Dill Pickles", "Secret Burger Sauce (Mayo, Ketchup, Relish)"],
    iconicSpots: ["7th Street Burger (East Village)", "Shake Shack (Madison Square Park)", "Minetta Tavern (Greenwich Village)", "Nowon (East Village)"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Drop 3oz chilled beef ball onto smoking hot flat-top, smash flat with heavy press. Season generously with salt and pepper. Flip after 2 mins, add cheese, stack patties into toasted potato bun."
  },

  // ==========================================
  // --- MEXICO CITY (MEXICO) ---
  // ==========================================
  {
    id: "cdmx_tacos_pastor",
    name: "Tacos al Pastor",
    nativeName: "Tacos al Pastor con Piña",
    cityId: "mexico_city",
    cityName: "Mexico City",
    country: "Mexico",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 99,
    category: "Street Food",
    mealTimes: ["lunch", "dinner", "late-night"],
    tasteProfile: ["Savory", "Tangy", "Spicy", "Smoky"],
    spiceLevel: 3,
    diet: ["non-veg", "high-protein", "gluten-free"],
    moodTags: ["street-food", "spicy", "comfort", "quick"],
    priceTier: "₹",
    price: 260,
    rating: 4.9,
    reviewsCount: 52000,
    calories: 360,
    prepTime: "5 mins",
    famousFor: "Spiced pork shaved from a vertical rotating trompo straight onto warm corn tortillas with a flying slice of roasted pineapple.",
    description: "Mexico City's crowning street food glory. Thinly sliced pork marinated in achiote paste, guajillo chillies, and citrus, roasted on a vertical spit topped with pineapple, and served with salsa verde, diced white onion, and cilantro.",
    ingredients: ["Thin Sliced Pork Shoulder", "Achiote Paste & Guajillo Chillies", "Fresh Roasted Pineapple", "Warm Soft Corn Tortillas", "Cilantro, White Onion & Lime", "Salsa Verde Cruda"],
    iconicSpots: ["El Tizoncito (Condesa)", "El Vilsito (Narvarte)", "Taquería Orinoco (Roma Norte)", "Los Cocuyos (Centro Histórico)"],
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Marinate pork in achiote and guajillo sauce. Stack on vertical skewer with pineapple on top. Shave crisp outer meat directly into doubled corn tortillas, flick roasted pineapple, and top with salsa."
  },
  {
    id: "cdmx_guacamole",
    name: "Fresh Guacamole & Crispy Tortilla Chips",
    nativeName: "Guacamole Tradicional con Totopos",
    cityId: "mexico_city",
    cityName: "Mexico City",
    country: "Mexico",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 93,
    category: "Snack",
    mealTimes: ["lunch", "snack", "dinner"],
    tasteProfile: ["Creamy", "Fresh", "Tangy", "Crispy"],
    spiceLevel: 2,
    diet: ["veg", "vegetarian", "vegan", "gluten-free"],
    moodTags: ["healthy", "quick", "comfort"],
    priceTier: "₹",
    price: 220,
    rating: 4.8,
    reviewsCount: 36000,
    calories: 280,
    prepTime: "5 mins",
    famousFor: "Mashed ripe Hass avocados crushed in volcanic stone molcajete with lime, jalapeño, and crispy golden tortilla chips.",
    description: "The ancient Aztec culinary gem. Perfectly ripe Hass avocados crushed coarsely with lime juice, minced jalapeño chilies, diced red onion, ripe tomatoes, fresh cilantro, and sea salt, served with warm, freshly fried corn tortilla chips.",
    ingredients: ["Ripe Hass Avocados", "Fresh Lime Juice", "Jalapeño / Serrano Chilies", "Red Onion & Ripe Tomato", "Fresh Cilantro & Sea Salt", "Crispy Corn Totopos (Chips)"],
    iconicSpots: ["Contramar (Roma Norte)", "Azul Histórico (Centro)", "El Cardenal (Palma)"],
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Grind onion, chili, cilantro, and sea salt in volcanic stone molcajete. Add avocado flesh, mash coarsely with fork leaving chunks, fold in tomatoes and lime juice."
  },
  {
    id: "cdmx_churros",
    name: "Golden Churros con Chocolate",
    nativeName: "Churros con Chocolate",
    cityId: "mexico_city",
    cityName: "Mexico City",
    country: "Mexico",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 96,
    category: "Dessert",
    mealTimes: ["breakfast", "snack", "late-night"],
    tasteProfile: ["Sweet", "Crispy", "Warm", "Rich"],
    spiceLevel: 0,
    diet: ["veg", "vegetarian"],
    moodTags: ["sweet", "comfort", "street-food", "quick"],
    priceTier: "₹",
    price: 180,
    rating: 4.9,
    reviewsCount: 44000,
    calories: 340,
    prepTime: "8 mins",
    famousFor: "Ridged golden fried dough sticks tossed in fragrant cinnamon-sugar and dipped into thick, dark Mexican spiced chocolate.",
    description: "Mexico City's beloved night-time tradition. Choux dough piped through star nozzles directly into bubbling oil, fried until shatteringly crisp, rolled in cinnamon sugar, and served alongside thick, velvety spiced hot chocolate or dulce de leche.",
    ingredients: ["Flour, Butter & Water Choux Dough", "Cinnamon & White Cane Sugar", "Mexican Spiced Dark Chocolate", "Dulce de Leche / Cajeta"],
    iconicSpots: ["Churrería El Moro (Centro Histórico & Roma)", "El Convento (Coyoacán)", "Churrería General de la República"],
    image: "https://images.unsplash.com/photo-1624371414361-e670edf4898d?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Boil water, butter, and flour into choux paste. Pipe into 190°C hot oil using fluted star nozzle. Fry until golden brown, drain briefly, roll in cinnamon-sugar, and serve with hot chocolate."
  },

  // ==========================================
  // --- BARCELONA (SPAIN) ---
  // ==========================================
  {
    id: "bcn_paella",
    name: "Traditional Spanish Seafood Paella",
    nativeName: "Paella de Marisco",
    cityId: "barcelona",
    cityName: "Barcelona",
    country: "Spain",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 98,
    category: "Lunch",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Savory", "Umami", "Aromatic", "Rich"],
    spiceLevel: 1,
    diet: ["non-veg", "gluten-free", "high-protein"],
    moodTags: ["comfort", "date-night", "festive"],
    priceTier: "₹₹₹",
    price: 790,
    rating: 4.9,
    reviewsCount: 47000,
    calories: 610,
    prepTime: "35 mins",
    famousFor: "Saffron-infused Bomba rice cooked over wide pans with jumbo prawns, mussels, squid, and crispy caramelized 'socarrat' bottom.",
    description: "Spain's world-renowned culinary masterpiece. Short-grain Bomba rice simmered in rich seafood stock infused with threads of pure saffron, paprika, garlic, calamari, jumbo shrimp, and Mediterranean mussels, creating the prized crunchy caramelized bottom crust known as socarrat.",
    ingredients: ["Spanish Bomba Rice", "Pure Saffron Threads & Smoked Paprika", "Fresh Mediterranean Jumbo Prawns", "Blue Mussels & Calamari Rings", "Rich Homemade Fish Stock (Fumet)", "Sweet Bell Peppers & Peas"],
    iconicSpots: ["7 Portes (Barceloneta)", "Can Solé (Barceloneta)", "Xiringuito Escribà (Poblenou)", "Barraca (Barceloneta)"],
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Sauté sofrito and seafood in wide paella pan. Add Bomba rice and saffron fish stock. Cook without stirring to allow the bottom rice to caramelize into a crispy socarrat crust."
  },
  {
    id: "bcn_patatas_bravas",
    name: "Crispy Patatas Bravas with Spicy Sauce & Aioli",
    nativeName: "Patatas Bravas",
    cityId: "barcelona",
    cityName: "Barcelona",
    country: "Spain",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 94,
    category: "Street Food",
    mealTimes: ["lunch", "snack", "dinner", "late-night"],
    tasteProfile: ["Crispy", "Spicy", "Garlicky", "Savory"],
    spiceLevel: 2,
    diet: ["veg", "vegetarian", "gluten-free"],
    moodTags: ["tapas", "quick", "comfort", "spicy"],
    priceTier: "₹",
    price: 210,
    rating: 4.8,
    reviewsCount: 39000,
    calories: 340,
    prepTime: "12 mins",
    famousFor: "Golden crisp potato chunks drenched in spicy smoked paprika brava sauce and rich garlic aioli.",
    description: "The indisputable king of Spanish tapas. Chunky cubes of potato parboiled and double-fried to golden, crisp perfection with a fluffy potato center, drizzled with fiery smoked paprika brava sauce and rich garlic aioli.",
    ingredients: ["Agria Potatoes (Cubed)", "Spicy Pimentón de la Vera (Smoked Paprika)", "Olive Oil & Tomato Brava Sauce", "Creamy Garlic Aioli", "Sea Salt Flakes"],
    iconicSpots: ["Bar Tomás (Sarrià)", "El Vaso de Oro (Barceloneta)", "Cervecería Catalana (Eixample)"],
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Cut potatoes into irregular cubes. Poach in medium oil, drain, then flash fry in hot oil until deeply crisp. Plate immediately, spoon hot spicy brava sauce and garlic aioli."
  },

  // ==========================================
  // --- SINGAPORE ---
  // ==========================================
  {
    id: "sgp_chicken_rice",
    name: "Hainanese Chicken Rice",
    nativeName: "海南鸡饭 (Hàinán Jīfàn)",
    cityId: "singapore",
    cityName: "Singapore",
    country: "Singapore",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 99,
    category: "Lunch",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Savory", "Aromatic", "Tender", "Ginger"],
    spiceLevel: 1,
    diet: ["non-veg", "halal", "high-protein"],
    moodTags: ["comfort", "street-food", "quick"],
    priceTier: "₹₹",
    price: 320,
    rating: 4.9,
    reviewsCount: 56000,
    calories: 610,
    prepTime: "25 mins",
    macros: { protein: 36, carbs: 68, fat: 20 },
    foodieHack: "Dip chicken in chili and dark sweet soy sauce simultaneously, then spoon fragrant chicken broth over the rice.",
    famousFor: "Silky poached chicken served over aromatic jasmine rice cooked in rich chicken stock, pandan, ginger, and garlic.",
    description: "Singapore's undisputed national culinary treasure. Plump chicken gently sub-poached in aromatics and bathed in ice water to lock in gelatinous tenderness, paired with glistening jasmine rice infused with chicken fat, lemongrass, ginger, and garlic.",
    ingredients: ["Free-Range Whole Chicken", "Pandan Leaves & Bruised Lemongrass", "Old Ginger & Garlic Cloves", "Aged Jasmine Rice & Chicken Fat", "Fiery Red Chili & Calamansi Dip", "Aged Dark Caramel Soy"],
    iconicSpots: ["Tian Tian Hainanese Chicken Rice (Maxwell)", "Boon Tong Kee (Balestier)", "Wee Nam Kee", "Liao Fan Hawker Chan"],
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Gently poach whole chicken with ginger and scallions at 85°C for 45 mins. Plunge into ice bath. Sauté raw jasmine rice in chicken fat and aromatics, cook in poaching broth. Serve with chili garlic dip.",
    cookingSteps: [
      { step: 1, name: "Aromatic Chicken Poach", duration: 35, desc: "Submerge whole chicken with bruised ginger, garlic, and pandan in boiling water. Reduce to gentle simmer and cook until internal temp hits 74°C." },
      { step: 2, name: "Ice Bath Shock", duration: 10, desc: "Plunge chicken immediately into an ice bath for 10 minutes to create a gelatinous, silky skin." },
      { step: 3, name: "Fragrant Jasmine Rice Cook", duration: 20, desc: "Sauté minced garlic, ginger, and shallots in rendered chicken fat. Add jasmine rice, fry for 2 mins, then steam in rich chicken poaching broth." },
      { step: 4, name: "Chili Garlic Sauce & Plating", duration: 5, desc: "Pound fresh red bird's eye chilies, ginger, garlic, calamansi juice, and hot chicken broth into a vibrant dipping sauce. Carve chicken and serve over rice." }
    ]
  },
  {
    id: "sgp_chili_crab",
    name: "Singapore Chili Crab with Fried Mantou",
    nativeName: "辣椒螃蟹",
    cityId: "singapore",
    cityName: "Singapore",
    country: "Singapore",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 98,
    category: "Dinner",
    mealTimes: ["dinner"],
    tasteProfile: ["Sweet", "Spicy", "Savory", "Eggy"],
    spiceLevel: 3,
    diet: ["non-veg", "high-protein"],
    moodTags: ["spicy", "date-night", "comfort"],
    priceTier: "₹₹₹",
    price: 850,
    rating: 4.9,
    reviewsCount: 48000,
    calories: 590,
    prepTime: "30 mins",
    macros: { protein: 42, carbs: 48, fat: 24 },
    foodieHack: "Use the crispy golden fried mantou buns to mop up every drop of the sweet-spicy egg ribbon gravy.",
    famousFor: "Succulent mud crab wok-fried in a rich, sweet, tangy, and spicy tomato-chili sauce ribboned with whisked egg.",
    description: "A monumental feast of luscious mud crab bathed in a thick, velvety gravy blending sambal chili, tomato purée, shallots, garlic, and ribbons of beaten egg, devoured with crispy deep-fried Chinese mantou buns.",
    ingredients: ["Live Mud Crab (Cracked)", "Shallots, Garlic & Red Chili Paste", "Tomato Purée & Rice Vinegar", "Whisked Farm Egg Ribbons", "Deep Fried Golden Mantou Buns"],
    iconicSpots: ["Jumbo Seafood (East Coast / Riverside)", "Long Beach Seafood", "No Signboard Seafood (Geylang)", "Red House Seafood"],
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Wok-fry cracked mud crab until red. Stir-fry chili-shallot paste, add tomato stock, simmer crab, swirl in beaten egg to form velvety ribbons. Serve piping hot with fried mantou.",
    cookingSteps: [
      { step: 1, name: "Crab Prep & Flash Fry", duration: 10, desc: "Clean and crack live mud crab claws. Flash fry in high-heat oil for 2 minutes until shells turn bright orange-red." },
      { step: 2, name: "Aromatic Sambal Base", duration: 8, desc: "In a wok, fry finely blended shallots, red chilies, garlic, and ginger until fragrant and oil separates." },
      { step: 3, name: "Simmer in Tangy Gravy", duration: 12, desc: "Add tomato sauce, chicken broth, sugar, and vinegar. Return crab to wok, cover and simmer until crab meat is succulent." },
      { step: 4, name: "Egg Ribbons & Mantou", duration: 5, desc: "Turn off heat, slowly drizzle beaten egg while stirring gently to form silky ribbons. Serve immediately with golden fried mantou buns." }
    ]
  },

  // ==========================================
  // --- SAN FRANCISCO (USA) ---
  // ==========================================
  {
    id: "sf_clam_chowder",
    name: "Clam Chowder in Sourdough Bread Bowl",
    nativeName: "Boudin SF Clam Chowder",
    cityId: "san_francisco",
    cityName: "San Francisco",
    country: "USA",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 97,
    category: "Lunch",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Creamy", "Savory", "Tangy", "Warm"],
    spiceLevel: 1,
    diet: ["non-veg"],
    moodTags: ["comfort", "quick"],
    priceTier: "₹₹",
    price: 460,
    rating: 4.8,
    reviewsCount: 52000,
    calories: 720,
    prepTime: "15 mins",
    macros: { protein: 28, carbs: 82, fat: 30 },
    foodieHack: "Tear off the hollowed sourdough bread top and dip it into the velvety chowder before scraping the soaked inner crust.",
    famousFor: "Rich, creamy New England clam chowder served inside a freshly baked, crusty San Francisco sourdough boule.",
    description: "The quintessential coastal San Francisco comfort icon. Rich cream, tender ocean clams, diced potatoes, and savory smoked bacon poured piping hot into Boudin's legendary naturally fermented sour dough bowl.",
    ingredients: ["Fresh Chopped Ocean Clams & Nectar", "Yukon Gold Diced Potatoes", "Heavy Cream & Butter Roux", "Smoked Applewood Bacon", "Boudin Fermented Sourdough Boule"],
    iconicSpots: ["Boudin Bakery (Fisherman's Wharf)", "Hog Island Oyster Co. (Ferry Building)", "Swan Oyster Depot (Nob Hill)", "Fog Harbor Fish House"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Render bacon, cook onions, celery, and potatoes in clam broth until soft. Whisk in heavy cream roux, fold tender clams, and ladle into a hollowed warm sourdough loaf.",
    cookingSteps: [
      { step: 1, name: "Render Bacon & Aromatics", duration: 8, desc: "Crisp diced bacon in heavy pot. Sauté diced onions, celery, and garlic in the rendered bacon fat." },
      { step: 2, name: "Simmer Potatoes in Clam Nectar", duration: 15, desc: "Add cubed Yukon gold potatoes and clam nectar. Simmer until potatoes are fork-tender." },
      { step: 3, name: "Roux & Heavy Cream Finish", duration: 10, desc: "Whisk in butter-flour roux and heavy cream until velvety and thick. Fold in tender chopped clams and fresh thyme." },
      { step: 4, name: "Sourdough Carve & Ladle", duration: 5, desc: "Hollow out a warm, crusty sourdough boule. Ladle thick hot chowder, top with fresh cracked black pepper and parsley." }
    ]
  },

  // ==========================================
  // --- BERLIN (GERMANY) ---
  // ==========================================
  {
    id: "ber_currywurst",
    name: "Original Berlin Currywurst mit Pommes",
    nativeName: "Berliner Currywurst",
    cityId: "berlin",
    cityName: "Berlin",
    country: "Germany",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 96,
    category: "Street Food",
    mealTimes: ["lunch", "snack", "dinner", "late-night"],
    tasteProfile: ["Savory", "Tangy", "Spicy", "Crispy"],
    spiceLevel: 2,
    diet: ["non-veg"],
    moodTags: ["street-food", "quick", "comfort", "spicy"],
    priceTier: "₹",
    price: 240,
    rating: 4.8,
    reviewsCount: 47000,
    calories: 580,
    prepTime: "8 mins",
    macros: { protein: 22, carbs: 54, fat: 32 },
    foodieHack: "Ask for 'Currywurst ohne Darm' (skinless) with double hot curry powder and mayonnaise on the side for your fries.",
    famousFor: "Steamed then fried German bratwurst sausage sliced into bite-size coins, smothered in spiced curry-tomato sauce with crispy fries.",
    description: "The heartbeat of post-war Berlin street gastronomy invented in 1949 by Herta Heuwer. Golden pan-fried pork sausage bathed in a rich, spiced ketchup-curry sauce, generously dusted with Madras curry powder, and served alongside golden Belgian-style fries.",
    ingredients: ["German Pork Bratwurst Sausage", "Spiced Tomato Ketchup & Worcestershire", "Madras Curry Powder & Cayenne", "Double Fried Golden French Fries", "Creamy Mayonnaise"],
    iconicSpots: ["Curry 36 (Mehringdamm, Kreuzberg)", "Konnopke's Imbiß (Prenzlauer Berg)", "Witty's (Schöneberg)", "Curry 61 (Mitte)"],
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Fry seasoned bratwurst until blistered and browned. Simmer tomato purée, apple cider vinegar, Worcestershire, and curry spices. Slice sausage, drench in warm sauce, sprinkle extra curry powder, serve with fries.",
    cookingSteps: [
      { step: 1, name: "Sear Bratwurst", duration: 8, desc: "Fry bratwurst sausages on a cast-iron skillet with butter until blistered, crisp, and golden brown on all sides." },
      { step: 2, name: "Spiced Curry Sauce Simmer", duration: 10, desc: "Simmer tomato sauce, onion paste, Worcestershire sauce, balsamic vinegar, brown sugar, paprika, and curry powder until thick." },
      { step: 3, name: "Slice & Drench", duration: 3, desc: "Slice hot sausages into bite-sized wheels. Drown generously with warm spiced curry sauce." },
      { step: 4, name: "Curry Dusting & Fries", duration: 2, desc: "Dust heavily with bright yellow Madras curry powder and serve with piping hot double-fried fries." }
    ]
  },

  // ==========================================
  // --- OAXACA (MEXICO) ---
  // ==========================================
  {
    id: "oax_mole_negro",
    name: "Ancestral Oaxacan Mole Negro with Chicken",
    nativeName: "Mole Negro Oaxaqueño",
    cityId: "oaxaca",
    cityName: "Oaxaca",
    country: "Mexico",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 98,
    category: "Dinner",
    mealTimes: ["lunch", "dinner"],
    tasteProfile: ["Smoky", "Earthy", "Spicy", "Chocolate"],
    spiceLevel: 3,
    diet: ["non-veg", "gluten-free", "high-protein"],
    moodTags: ["comfort", "spicy", "date-night"],
    priceTier: "₹₹",
    price: 380,
    rating: 4.9,
    reviewsCount: 38000,
    calories: 620,
    prepTime: "40 mins",
    macros: { protein: 38, carbs: 42, fat: 28 },
    foodieHack: "Savor a warm handmade corn tortilla dipped in the velvety black mole alongside a sip of smoky mezcal.",
    famousFor: "Complex, pitch-black ceremonial mole sauce made from 30+ ingredients including charred chilhuacle chiles, Mexican chocolate, and plantains.",
    description: "The crown jewel of Mexico's culinary heritage. A velvety, glossy black sauce crafted through ancestral stone grinding of charred chilhuacle, pasilla, and mulato chiles, Mexican cinnamon, roasted plantains, raisins, and artisanal dark Oaxacan chocolate, served over braised chicken and warm heirloom corn tortillas.",
    ingredients: ["Charred Chilhuacle & Mulato Chiles", "Artisanal Oaxacan Dark Chocolate", "Roasted Plantains, Raisins & Sesame Seeds", "Mexican Canela Cinnamon & Allspice", "Tender Braised Chicken Thighs", "Heirloom Corn Tortillas"],
    iconicSpots: ["Los Danzantes (Oaxaca Centro)", "Casa Oaxaca El Restaurante", "Alfonsina (San Juan Bautista)", "Mercado 20 de Noviembre"],
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Char chiles and seeds to ash-black. Sauté plantains, raisins, nuts, and spices. Stone-grind with Mexican chocolate and chicken stock into a velvety paste. Simmer low and slow, ladle over braised chicken.",
    cookingSteps: [
      { step: 1, name: "Char Chiles to Ash", duration: 15, desc: "Char dried chilhuacle, mulato, and pasilla chiles in a dry comal until blackened. Soak in warm water." },
      { step: 2, name: "Roast Aromatics & Seeds", duration: 10, desc: "Toast sesame seeds, pumpkin seeds, almonds, cinnamon, cloves, charred plantain, and raisins until fragrant." },
      { step: 3, name: "Velvety Chocolate Simmer", duration: 25, desc: "Blend roasted ingredients with Mexican dark chocolate and rich chicken broth into a silky paste. Simmer in hot lard or oil until dark and glossy." },
      { step: 4, name: "Ladle & Garnish", duration: 5, desc: "Simmer braised chicken in the hot black mole. Garnish with toasted white sesame seeds and serve with warm heirloom corn tortillas." }
    ]
  },

  // ==========================================
  // --- KYOTO (JAPAN) ---
  // ==========================================
  {
    id: "kyo_matcha_parfait",
    name: "Artisanal Uji Matcha Parfait",
    nativeName: "宇治抹茶パフェ (Uji Matcha Pafe)",
    cityId: "kyoto",
    cityName: "Kyoto",
    country: "Japan",
    isGlobalIcon: true,
    isLocalLegend: true,
    trendingScore: 97,
    category: "Dessert",
    mealTimes: ["snack", "dinner"],
    tasteProfile: ["Sweet", "Earthy", "Creamy", "Bittersweet"],
    spiceLevel: 0,
    diet: ["veg", "vegetarian"],
    moodTags: ["sweet", "date-night", "comfort"],
    priceTier: "₹₹",
    price: 340,
    rating: 4.9,
    reviewsCount: 41000,
    calories: 420,
    prepTime: "10 mins",
    macros: { protein: 8, carbs: 64, fat: 14 },
    foodieHack: "Dig your long spoon straight to the bottom layer to get the bitter matcha jelly, chewy dango, and sweet red bean paste in a single bite.",
    famousFor: "Multi-layered tower of stone-ground ceremonial Uji matcha soft serve, chewy shiratama dango, matcha castella cake, sweet azuki beans, and matcha jelly.",
    description: "The pinnacle of Kyoto's sweet tea ceremony culture. Layer upon layer of jade-green ceremonial grade Uji matcha ice cream, bouncy warabi mochi, delicate matcha sponge cake, sweet Hokkaido azuki red bean paste, and crunchy puffed rice.",
    ingredients: ["Ceremonial Stone-Ground Uji Matcha", "Hokkaido Sweet Azuki Red Beans", "Chewy Shiratama Dango (Rice Dumplings)", "Matcha Chiffon / Castella Cake Cubes", "Wobbly Bittersweet Matcha Kanten Jelly", "Whipped Sweet Cream & Puffed Rice"],
    iconicSpots: ["Tsujiri Honten (Gion)", "Nakamura Tokichi (Uji & Kyoto Station)", "Gion Tsujiri (Shijo)", "Saryo Tsujiri"],
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=900&auto=format&fit=crop&q=80",
    recipeOverview: "Layer matcha kanten jelly, puffed rice, sweet azuki beans, matcha sponge cake cubes, rich matcha soft serve ice cream, and top with chewy shiratama dango and gold leaf.",
    cookingSteps: [
      { step: 1, name: "Matcha Jelly Base", duration: 10, desc: "Dissolve agar-agar with hot water, sugar, and ceremonial Uji matcha powder. Set in glasses to form a refreshing bottom jelly layer." },
      { step: 2, name: "Shiratama Dango Prep", duration: 8, desc: "Mix glutinous rice flour with water, roll into small round dumplings, boil until floating, and shock in ice water." },
      { step: 3, name: "Tower Assembly", duration: 5, desc: "Layer crunchy puffed genmai rice, sweet Hokkaido azuki bean paste, and matcha castella cake cubes." },
      { step: 4, name: "Soft Serve & Garnish", duration: 3, desc: "Swirl velvety Uji matcha soft serve, arrange shiratama dango, matcha wafer roll, and a dusting of fine matcha powder." }
    ]
  }
];

// Moods and Craving Filters metadata
const CRAVING_MOODS = [
  { id: "all", label: "✨ All Cravings", icon: "sparkles", description: "Discover top dishes across all styles" },
  { id: "comfort", label: "🍲 Comfort Food", icon: "heart", description: "Hearty, soul-warming delicacies" },
  { id: "spicy", label: "🔥 Spicy & Bold", icon: "flame", description: "Fiery spices and tingling chili heat" },
  { id: "street-food", label: "🌮 Street Food", icon: "utensils", description: "Iconic, fast and flavorful street bites" },
  { id: "sweet", label: "🍰 Sweet Tooth", icon: "cake", description: "Decadent desserts and sweet treats" },
  { id: "cheesy", label: "🧀 Cheesy Delights", icon: "cheese", description: "Melted cheese goodness and richness" },
  { id: "quick", label: "⚡ Quick Bites", icon: "zap", description: "Fast, easy and instantly satisfying" },
  { id: "healthy", label: "🥗 Light & Fresh", icon: "leaf", description: "Fresh ingredients, balanced and vibrant" },
  { id: "date-night", label: "🍷 Date Night", icon: "wine", description: "Sophisticated and romantic master plates" }
];

// Dietary filter presets
const DIETARY_FILTERS = [
  { id: "all", label: "All Diets" },
  { id: "veg", label: "🥬 Vegetarian" },
  { id: "non-veg", label: "🍗 Non-Veg" },
  { id: "vegan", label: "🌿 Vegan" },
  { id: "halal", label: "🌙 Halal" },
  { id: "gluten-free", label: "🌾 Gluten-Free" },
  { id: "high-protein", label: "💪 High-Protein" }
];

// Curated Gastronomy Food Trails across Culinary Capitals
const FOOD_TRAILS = [
  {
    id: "hyd_trail",
    cityId: "hyderabad",
    cityName: "Hyderabad",
    title: "The Royal Nizami & Street Chai Pilgrimage",
    subtitle: "A 4-stop sensory voyage from morning Irani chai to midnight slow-simmered dum biryani.",
    duration: "Full Day Experience (~6 hrs)",
    stops: [
      {
        time: "08:30 AM",
        dishId: "hyd_irani_chai",
        title: "Morning Irani Chai & Osmania Biscuits",
        spot: "Nimrah Cafe & Bakery (Opp. Charminar)",
        notes: "Dense caramelized condensed tea with buttery, salty-sweet Osmania biscuits facing the historic monument."
      },
      {
        time: "01:00 PM",
        dishId: "hyd_biryani",
        title: "Legendary Hyderabadi Dum Biryani Feast",
        spot: "Bawarchi (RTC X Roads) or Shadab (Old City)",
        notes: "Aged basmati layered with tender goat meat, saffron, and fried onions sealed under slow coal dum."
      },
      {
        time: "05:30 PM",
        dishId: "hyd_mirchi_salan",
        title: "Tangy Mirchi Ka Salan Tasting",
        spot: "Cafe Bahar (Hyderguda)",
        notes: "Roasted peanuts, sesame, coconut and green chili curry with authentic Hyderabadi spices."
      },
      {
        time: "09:30 PM",
        dishId: "hyd_haleem",
        title: "Nawabi Slow-Simmered Haleem & Double Ka Meetha",
        spot: "Pista House / Cafe 555",
        notes: "12-hour woodfire pounded wheat, pure ghee, and meat garnished with crunchy fried cashews."
      }
    ]
  },
  {
    id: "mumbai_trail",
    cityId: "mumbai",
    cityName: "Mumbai",
    title: "Mumbai Coastal Masalas & Street Safari",
    subtitle: "Experience maximum city through bustling seaside chaats, buttery pav bhaji, and coastal curries.",
    duration: "Afternoon to Night (~5 hrs)",
    stops: [
      {
        time: "11:00 AM",
        dishId: "mum_vada_pav",
        title: "The Iconic Street Breakfast: Batata Vada Pav",
        spot: "Ashok Vada Pav (Kirti College, Dadar)",
        notes: "Spiced mashed potato fritter nestled inside soft pav, slathered with garlic chutney and fried green chilies."
      },
      {
        time: "02:00 PM",
        dishId: "mum_bombil_fry",
        title: "Coastal Malvani Crispy Bombil Fry",
        spot: "Gajalee (Vile Parle) or Highway Gomantak",
        notes: "Rava-crusted golden crisp Bombay Duck fish served with solkadhi and steamed rice."
      },
      {
        time: "06:00 PM",
        dishId: "mum_bhel_puri",
        title: "Seaside Sunset Chowpatty Bhel Puri & Sev Puri",
        spot: "Girgaon Chowpatty Stall #11 (Badshah)",
        notes: "Crisp puffed rice, tangy tamarind drizzle, spicy green chutney, and raw mango flakes."
      },
      {
        time: "09:30 PM",
        dishId: "mum_pav_bhaji",
        title: "Midnight Sizzling Tawa Pav Bhaji",
        spot: "Sardar Refreshments (Tardeo) / Cannon Pav Bhaji",
        notes: "Rich, deeply spiced mashed vegetable bhaji drenched with an entire slab of golden Amul butter."
      }
    ]
  },
  {
    id: "delhi_trail",
    cityId: "delhi",
    cityName: "Delhi",
    title: "Purani Dilli Mughlai & Chaat Odyssey",
    subtitle: "Wander through centuries-old alleyways of Old Delhi and regal Mughal heritage kitchens.",
    duration: "Full Day (~7 hrs)",
    stops: [
      {
        time: "09:00 AM",
        dishId: "del_chole_bhature",
        title: "Crispy Fluffy Chole Bhature & Lassi",
        spot: "Sita Ram Diwan Chand (Paharganj)",
        notes: "Piping hot paneer-stuffed bhature paired with rich dark spiced chickpeas and pickled carrots."
      },
      {
        time: "01:30 PM",
        dishId: "del_butter_chicken",
        title: "Original 1950s Tandoori Butter Chicken",
        spot: "Moti Mahal (Daryaganj) / Gulati (Pandara Road)",
        notes: "Smoky charcoal tandoori chicken simmered in silky tomato gravy rich with white butter and fenugreek."
      },
      {
        time: "05:30 PM",
        dishId: "del_tandoori_tikka",
        title: "Smoky Charcoal Tandoori Tikka",
        spot: "Karim's (Jama Masjid) / Al Jawahar",
        notes: "Juicy boneless chicken thighs marinated in Kashmiri chili, yogurt and mustard oil charred in clay tandoors."
      },
      {
        time: "09:00 PM",
        dishId: "del_butter_chicken",
        title: "Regal Mughlai Night Feast with Garlic Naan",
        spot: "Havemore (Pandara Road)",
        notes: "Velvety spiced tomato gravy, smoked chicken, and crisp buttered tandoori naan."
      }
    ]
  },
  {
    id: "tokyo_trail",
    cityId: "tokyo",
    cityName: "Tokyo",
    title: "Tokyo Midnight Ramen & Izakaya Odyssey",
    subtitle: "From morning Tsukiji sushi counter to neon-lit Shinjuku alleyways and steaming tonkotsu broth.",
    duration: "Evening to Midnight (~5 hrs)",
    stops: [
      {
        time: "08:00 AM",
        dishId: "tokyo_sushi",
        title: "Morning Edomae Nigiri Sushi Omakase",
        spot: "Tsukiji Outer Market & Toyosu",
        notes: "Tender Bluefin fatty tuna (Otoro), sea urchin (Uni), and sea bream brushed with aged nikiri soy."
      },
      {
        time: "01:00 PM",
        dishId: "tokyo_katsu_curry",
        title: "Crispy Panko Katsu Curry Bowl",
        spot: "Ginza Swiss / Maisen Tonkatsu",
        notes: "Golden deep-fried pork or chicken cutlet with rich caramelized Japanese curry roux."
      },
      {
        time: "05:30 PM",
        dishId: "tokyo_souffle_pancake",
        title: "Jiggly Fluffy Soufflé Pancakes",
        spot: "A Happy Pancake (Omotesando)",
        notes: "Feather-light whipped egg white soufflé pancakes served with whipped butter and maple syrup."
      },
      {
        time: "10:30 PM",
        dishId: "tokyo_ramen",
        title: "Midnight Rich Tonkotsu Ramen Counter",
        spot: "Ichiran (Shibuya) or Rokurinsha",
        notes: "18-hour creamy pork bone broth, handmade noodles, chashu pork belly, and molten soft-boiled ramen egg."
      }
    ]
  },
  {
    id: "singapore_trail",
    cityId: "singapore",
    cityName: "Singapore",
    title: "Lion City Hawker to Fine Dining Safari",
    subtitle: "From morning Kaya Toast and silky Chicken Rice to evening waterfront Chili Crab feast.",
    duration: "Full Day Experience (~7 hrs)",
    stops: [
      {
        time: "08:30 AM",
        dishId: "sgp_chicken_rice",
        title: "Iconic Maxwell Hawker Center Chicken Rice",
        spot: "Tian Tian Hainanese Chicken Rice (Maxwell)",
        notes: "Glistening fragrant rice cooked in chicken fat with melt-in-the-mouth poached chicken and calamansi chili."
      },
      {
        time: "01:00 PM",
        dishId: "sgp_chicken_rice",
        title: "Michelin-Starred Street Delicacy Crawl",
        spot: "Liao Fan Hawker Chan (Chinatown Complex)",
        notes: "Crisp glazed soy sauce chicken with egg noodles and roasted peanuts."
      },
      {
        time: "08:00 PM",
        dishId: "sgp_chili_crab",
        title: "Waterfront Sizzling Mud Chili Crab Feast",
        spot: "Jumbo Seafood (Riverside Point)",
        notes: "Cracked mud crab bathed in sweet spicy egg ribbon sauce served with hot fried mantou."
      }
    ]
  }
];

// Curated Head-to-Head Dish Showdowns for the Comparison Arena
const SHOWDOWN_PAIRS = [
  {
    id: "biryani_clash",
    title: "The Great Biryani Clash: Hyderabad vs Kolkata",
    badge: "👑 Royal Showdown",
    dishAId: "hyd_biryani",
    dishBId: "ccu_biryani"
  },
  {
    id: "street_clash",
    title: "Street Food Supremacy: Mumbai vs Delhi",
    badge: "🔥 Street Legends",
    dishAId: "mum_vada_pav",
    dishBId: "del_chole_bhature"
  },
  {
    id: "noodle_clash",
    title: "East Asian Broth Battle: Tokyo Ramen vs Hanoi Pho",
    badge: "🍜 Broth Masters",
    dishAId: "tokyo_ramen",
    dishBId: "han_pho_bo"
  },
  {
    id: "sweet_clash",
    title: "European Dessert Duel: Roman Gelato vs Paris Croissant",
    badge: "🍰 Dessert Duel",
    dishAId: "rome_gelato",
    dishBId: "paris_croissant"
  },
  {
    id: "hawker_clash",
    title: "Global Street Icons: Singapore Chicken Rice vs NY Pastrami",
    badge: "🌐 Global Heavyweights",
    dishAId: "sgp_chicken_rice",
    dishBId: "nyc_pastrami"
  }
];

// Default Community Reviews dataset
const DEFAULT_REVIEWS = [
  {
    dishId: "hyd_biryani",
    author: "Rahul V., Food Explorer",
    rating: 5,
    date: "2 days ago",
    comment: "The fragrant aroma of saffron and the melt-in-the-mouth goat meat is unbeatable. Truly the king of all rice dishes in the world!"
  },
  {
    dishId: "hyd_biryani",
    author: "Ayesha M., Gastronome",
    rating: 5,
    date: "1 week ago",
    comment: "Pairing this with mirchi ka salan and dahi chutney is sheer perfection. 10/10 comfort food."
  },
  {
    dishId: "mum_vada_pav",
    author: "Karan S., Mumbai Native",
    rating: 5,
    date: "3 days ago",
    comment: "Crispy hot batata vada with extra garlic dry chutney is the soul of Mumbai. Nothing beats it on a rainy day."
  },
  {
    dishId: "del_butter_chicken",
    author: "Pooja D., Chef",
    rating: 5,
    date: "Yesterday",
    comment: "Velvety, creamy, with that unmistakable smoky tandoori char. Eaten with garlic naan, it's pure heaven."
  },
  {
    dishId: "tokyo_ramen",
    author: "Kenji T., Tokyo Foodie",
    rating: 5,
    date: "4 days ago",
    comment: "Rich 18-hour tonkotsu broth with perfectly springy noodles. The ajitama egg was seasoned to absolute perfection."
  },
  {
    dishId: "sgp_chicken_rice",
    author: "Mei Lin C., Singapore Gourmet",
    rating: 5,
    date: "1 day ago",
    comment: "The rice is so fragrant you could eat it all on its own, and the chicken skin is pure silk!"
  }
];

// Gastronomy Passport Achievement Badges
const ACHIEVEMENT_BADGES = [
  {
    id: "first_bite",
    title: "First Bite",
    icon: "utensils",
    description: "Mark your first tasted dish on CravePulse",
    condition: (tasted) => tasted.length >= 1
  },
  {
    id: "spice_slayer",
    title: "Chili Champion 🌶️",
    icon: "flame",
    description: "Tasted 3 fiery Level 3+ spice dishes",
    condition: (tasted, dishes) => {
      const fieryCount = tasted.filter(id => {
        const d = dishes.find(x => x.id === id);
        return d && d.spiceLevel >= 3;
      }).length;
      return fieryCount >= 3;
    }
  },
  {
    id: "globe_trotter",
    title: "Global Voyager 🌍",
    icon: "globe",
    description: "Tasted dishes from 4 or more different countries",
    condition: (tasted, dishes) => {
      const countries = new Set();
      tasted.forEach(id => {
        const d = dishes.find(x => x.id === id);
        if (d && d.country) countries.add(d.country);
      });
      return countries.size >= 4;
    }
  },
  {
    id: "street_king",
    title: "Street Food King 👑",
    icon: "zap",
    description: "Tasted at least 3 iconic street food delicacies",
    condition: (tasted, dishes) => {
      const count = tasted.filter(id => {
        const d = dishes.find(x => x.id === id);
        return d && (d.category === "Street Food" || (d.moodTags && d.moodTags.includes("street-food")));
      }).length;
      return count >= 3;
    }
  },
  {
    id: "sugar_rush",
    title: "Sweet Tooth Connoisseur 🍰",
    icon: "cake",
    description: "Tasted 2 or more legendary artisanal desserts",
    condition: (tasted, dishes) => {
      const count = tasted.filter(id => {
        const d = dishes.find(x => x.id === id);
        return d && (d.category === "Dessert" || (d.moodTags && d.moodTags.includes("sweet")));
      }).length;
      return count >= 2;
    }
  },
  {
    id: "chef_master",
    title: "Master of Pots 👨‍🍳",
    icon: "chef-hat",
    description: "Launched the interactive Chef Cook-Along mode on any recipe",
    condition: (tasted, dishes, customState) => (customState && customState.cookedCount >= 1)
  },
  {
    id: "grand_epicurean",
    title: "Grand Epicurean Master ⭐",
    icon: "award",
    description: "Tasted 10 or more culinary masterpieces across the world",
    condition: (tasted) => tasted.length >= 10
  }
];

// Ensure all dishes have complete macros, cookingSteps, foodieHack, and nearbyRadar
DISHES_DATA.forEach(dish => {
  // Macros calculation fallback
  if (!dish.macros) {
    const cals = dish.calories || 500;
    const isVeg = dish.diet && (dish.diet.includes("veg") || dish.diet.includes("vegan"));
    const isDessert = dish.category === "Dessert";
    
    if (isDessert) {
      dish.macros = {
        protein: Math.round(cals * 0.05 / 4),
        carbs: Math.round(cals * 0.65 / 4),
        fat: Math.round(cals * 0.30 / 9)
      };
    } else if (isVeg) {
      dish.macros = {
        protein: Math.round(cals * 0.18 / 4),
        carbs: Math.round(cals * 0.55 / 4),
        fat: Math.round(cals * 0.27 / 9)
      };
    } else {
      dish.macros = {
        protein: Math.round(cals * 0.30 / 4),
        carbs: Math.round(cals * 0.42 / 4),
        fat: Math.round(cals * 0.28 / 9)
      };
    }
  }

  // Foodie Hack fallback
  if (!dish.foodieHack) {
    dish.foodieHack = `Pair this with fresh authentic regional sides and ask for traditional accompaniments at ${dish.iconicSpots ? dish.iconicSpots[0] : 'local heritage spots'}.`;
  }

  // Cooking Steps fallback
  if (!dish.cookingSteps || !dish.cookingSteps.length) {
    dish.cookingSteps = [
      {
        step: 1,
        name: "Mise en Place & Prep",
        duration: 10,
        desc: `Gather and measure key ingredients: ${dish.ingredients ? dish.ingredients.slice(0, 3).join(', ') : 'fresh aromatics, spices, and base elements'}. Wash, chop, and marinate as needed.`
      },
      {
        step: 2,
        name: "Aromatic Searing & Base Creation",
        duration: 15,
        desc: `Heat pan or pot with traditional fat/oil. Sauté aromatics until deeply fragrant and oil separates. Combine primary spices evenly.`
      },
      {
        step: 3,
        name: "Simmer & Infusion",
        duration: 20,
        desc: `${dish.recipeOverview || 'Simmer on low to medium flame until flavors harmonize and texture reaches optimal consistency.'}`
      },
      {
        step: 4,
        name: "Garnish & Regal Presentation",
        duration: 5,
        desc: `Finish with fresh herbs, clarifying butter or resting. Serve piping hot in the authentic style of ${dish.cityName}.`
      }
    ];
  }

  // Nearby Radar simulated spots fallback
  if (!dish.radarPlaces) {
    const spots = dish.iconicSpots || ["Heritage Kitchen", "Grand Bazaar Stall", "Royal Food House"];
    dish.radarPlaces = spots.map((spotName, idx) => ({
      name: spotName,
      distanceKm: (0.4 + (idx * 0.7) + (Math.round((dish.price || 200) % 5) * 0.1)).toFixed(1),
      rating: (4.6 + (idx === 0 ? 0.3 : idx === 1 ? 0.2 : 0.1)).toFixed(1),
      status: idx === 0 ? "Open Now • 15 min wait" : idx === 1 ? "Open Now • Fast Service" : "Open Now • Dine-in & Delivery",
      badge: idx === 0 ? "Top Rated" : idx === 1 ? "Local Favorite" : "Authentic",
      mapsQuery: encodeURIComponent(`${spotName} ${dish.cityName}`)
    }));
  }
});

if (typeof window !== 'undefined') {
  window.CITIES_DATA = CITIES_DATA;
  window.DISHES_DATA = DISHES_DATA;
  window.CRAVING_MOODS = CRAVING_MOODS;
  window.DIETARY_FILTERS = DIETARY_FILTERS;
  window.FOOD_TRAILS = FOOD_TRAILS;
  window.SHOWDOWN_PAIRS = SHOWDOWN_PAIRS;
  window.DEFAULT_REVIEWS = DEFAULT_REVIEWS;
  window.ACHIEVEMENT_BADGES = ACHIEVEMENT_BADGES;
}






