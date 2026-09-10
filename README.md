# 🍽️ Crave+ (CravePulse) — The Ultimate Food Discovery & Ordering Engine

<p align="center">
  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="Crave Plus Banner" width="100%" style="border-radius: 12px; max-height: 380px; object-fit: cover;" />
</p>

<p align="center">
  <strong>Discover 76+ iconic dishes across 26 food capitals with 1-click Swiggy & Zomato ordering, trilingual voice narration, physics-based flavor roulettes, and step-by-step cook-alongs.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-100%25%20Verified%20%26%20Working-10b981?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Languages-English%20%7C%20%E0%B0%A4%E0%B1%86%E0%B0%B2%E0%B1%81%E0%B0%97%E0%B1%81%20%7C%20%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%80-e11d48?style=for-the-badge" alt="Trilingual Support">
  <img src="https://img.shields.io/badge/Delivery-Swiggy%20%26%20Zomato-f97316?style=for-the-badge" alt="Swiggy and Zomato">
  <img src="https://img.shields.io/badge/Theme-Pure%20White%20%26%20Obsidian%20Dark-6366f1?style=for-the-badge" alt="Theme">
</p>

---

## 📖 Table of Contents

- [🚀 Quick Start Guide (How to Run)](#-quick-start-guide-how-to-run)
- [🎯 How to Use Crave+ (Step-by-Step User Guide)](#-how-to-use-crave-step-by-step-user-guide)
  - [1. 📍 Choose Your City or Auto-Detect GPS Location](#1--choose-your-city-or-auto-detect-gps-location)
  - [2. 🌐 Switch Languages (English, Telugu, Hindi)](#2--switch-languages-english-telugu-hindi)
  - [3. 🛵 Order on Swiggy & Zomato in 1-Click](#3--order-on-swiggy--zomato-in-1-click)
  - [4. 🎧 Listen to Food Stories in Your Selected Language](#4--listen-to-food-stories-in-your-selected-language)
  - [5. 🥗 Filter by Diet (Veg / Non-Veg), Spice, Calories & Moods](#5--filter-by-diet-veg--non-veg-spice-calories--moods)
  - [6. 🔍 Fast Search & Keyboard Autocomplete](#6--fast-search--keyboard-autocomplete)
- [🎮 Interactive Features & Fun Mini-Apps](#-interactive-features--fun-mini-apps)
  - [🎡 1. Foodie Roulette (Mystery Flavor Wheel)](#-1-foodie-roulette-mystery-flavor-wheel)
  - [⚔️ 2. Food Showdown (Vote for Top Dishes)](#️-2-food-showdown-vote-for-top-dishes)
  - [👨‍🍳 3. Chef Cook-Along Mode (Live Timers & Step Guidance)](#-3-chef-cook-along-mode-live-timers--step-guidance)
  - [🛒 4. Smart Grocery Shopping List & Export](#-4-smart-grocery-shopping-list--export)
  - [📅 5. Daily Meal Planner & Calorie Tracker](#-5-daily-meal-planner--calorie-tracker)
  - [🗺️ 6. Curated Food Trails & Taste Passport](#️-6-curated-food-trails--taste-passport)
  - [⚖️ 7. Side-by-Side Dish Comparison Matrix](#️-7-side-by-side-dish-comparison-matrix)
  - [🎁 8. 3D Mystery Blind Box](#-8-3d-mystery-blind-box)
  - [📸 9. Social Story Poster Generator](#-9-social-story-poster-generator)
- [🏙️ Supported Culinary Hubs (26 Cities)](#️-supported-culinary-hubs-26-cities)
- [🍲 Top Swiggy & Zomato Foods in the Database](#-top-swiggy--zomato-foods-in-the-database)
- [⌨️ Keyboard Shortcuts](#️-keyboard-shortcuts)
- [📁 Project Structure](#-project-structure)

---

## 🚀 Quick Start Guide (How to Run)

Crave+ is built with lightweight, modern Vanilla web technologies with **zero build tools, zero dependencies, and instant load speeds**.

### Method 1: Double-Click to Open
Simply navigate to the project folder and double-click `index.html` to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

### Method 2: Using a Local HTTP Server
If you prefer running a local development server:
```bash
# Using Node.js npx
npx serve .

# Or using Python
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

---

## 🎯 How to Use Crave+ (Step-by-Step User Guide)

### 1. 📍 Choose Your City or Auto-Detect GPS Location
- Click on the **Location button** in the top navigation bar (defaults to **Hyderabad**).
- A city selection popup will open showing 26 global & regional food capitals.
- You can:
  - Type in the search box (e.g. *Mumbai*, *Delhi*, *Bangalore*, *Tokyo*, *Rome*).
  - Click **"Detect My Location"** to automatically locate your nearest culinary hub via GPS.
- Changing your city instantly filters all local delicacies, trending spots, and food delivery queries for that exact city.

---

### 2. 🌐 Switch Languages (English, Telugu, Hindi)
- Click on the **Language button** (`🌐 EN`) in the top navigation bar.
- Choose between:
  - **English (EN)**
  - **తెలుగు (TE)** (Telugu)
  - **हिन्दी (HI)** (Hindi)
- The **entire website** translates dynamically into your selected language, including:
  - Navigation, search hints, headings, and filter labels.
  - Dish names, backstories, descriptions, and famous spot highlights.
  - Recipes, ingredients, nutritional breakdowns, and voice narrations.

---

### 3. 🛵 Order on Swiggy & Zomato in 1-Click
Want to order the food you're looking at right now?
- **From Dish Cards**: Click the **"🛵 Order"** button in the bottom-left corner of any dish card.
- **From the Delivery Modal**:
  - Click **"Order on Swiggy"** to open Swiggy with the dish pre-searched in your active city.
  - Click **"Order on Zomato"** to open Zomato with the dish pre-searched in your active city.
- **From Dish Details Modal**: Click the orange **Swiggy** or red **Zomato** buttons in the bottom action bar.

---

### 4. 🎧 Listen to Food Stories in Your Selected Language
Every dish includes a culinary backstory narrated using your device's native speech synthesis engine:
- Click the **Speaker icon (`🔊`)** on any food card or click **"Listen Story"** inside the dish modal.
- The voice narrator will speak the story in the language you selected:
  - If you selected **Telugu**, it will speak in natural **Telugu (`te-IN`)**.
  - If you selected **Hindi**, it will speak in clear **Hindi (`hi-IN`)**.
  - If you selected **English**, it will speak in **English (`en-US` / `en-IN`)**.
- Click the button again at any time to pause or stop the audio.

---

### 5. 🥗 Filter by Diet (Veg / Non-Veg), Spice, Calories & Moods
Crave+ offers powerful, real-time filtering:
- **Veg / Non-Veg Toggle**:
  - Click **"Pure Veg"** (🟢) in the top toolbar to view vegetarian specialties & desserts.
  - Click **"Non-Veg"** (🔴) to view meat, poultry, and seafood delicacies.
  - Click **"All"** to view the complete catalog.
- **Craving Moods**: Click quick mood chips like *Spicy Cravings*, *Sweet Tooth*, *Comfort Food*, *Crispy Snacks*, or *Late Night Bites*.
- **Spice Level Filter**: Filter dishes by mild (1 flame 🔥) to fiery (4 flames 🔥🔥🔥🔥).
- **Calorie Budget Slider**: Drag the calorie slider to filter dishes within your target calorie limit (e.g. `< 500 kcal`).
- **Time-of-Day Context**: The top banner automatically detects whether it's Breakfast, Lunch, Evening Snack, Dinner, or Midnight and highlights the best dishes for the current hour.

---

### 6. 🔍 Fast Search & Keyboard Autocomplete
- Click on the search bar or press `/` on your keyboard.
- Type any dish name, ingredient, city, or flavor (e.g. *Biryani*, *Paneer*, *Momos*, *Chocolate*, *Pasta*).
- Use **Arrow Down (`↓`)** and **Arrow Up (`↑`)** to navigate suggestions.
- Press **Enter (`↵`)** to immediately open the dish details modal.
- Press **Escape (`Esc`)** to close the search board.

---

## 🎮 Interactive Features & Fun Mini-Apps

### 🎡 1. Foodie Roulette (Mystery Flavor Wheel)
Can't decide what to eat? Let destiny decide!
1. Click the **"Spin Flavor Wheel"** button or click the floating spin button on the screen.
2. Click **"SPIN THE WHEEL"**.
3. Watch the physics-based wheel spin with realistic tick sounds and land on a randomly selected dish.
4. Click **"View Delicacy"** or **"Order Now"** to enjoy the winning dish.

---

### ⚔️ 2. Food Showdown (Vote for Top Dishes)
1. Scroll down to the **"⚔️ Food Showdowns"** battle arena.
2. Cast your vote in legendary culinary battles (e.g., *Hyderabadi Dum Biryani vs. Kolkata Biryani*, *Mumbai Pav Bhaji vs. Delhi Chole Bhature*).
3. View real-time vote percentages and confetti celebrations for the winning dish.

---

### 👨‍🍳 3. Chef Cook-Along Mode (Live Timers & Step Guidance)
Want to cook the dish at home?
1. Open any dish detail modal and click **"Start Cook-Along"** (👨‍🍳).
2. Follow step-by-step cooking instructions with dedicated countdown timers.
3. Hear voice instructions read aloud as you move between preparation and cooking phases.

---

### 🛒 4. Smart Grocery Shopping List & Export
1. Inside any dish modal, click **"Add to Grocery List"** (🛒).
2. Open the **Grocery Drawer** from the bottom-right corner.
3. Check off items as you shop in the supermarket.
4. Click **"Copy List"** or **"Print / Save PDF"** to export your shopping checklist.

---

### 📅 5. Daily Meal Planner & Calorie Tracker
1. Click **"Meal Planner"** in the top navigation bar.
2. Add dishes to your **Breakfast**, **Lunch**, and **Dinner** slots.
3. The app calculates your total daily **Calories**, **Protein**, **Carbs**, **Fat**, and estimated **Budget (₹)**.

---

### 🗺️ 6. Curated Food Trails & Taste Passport
1. Scroll to the **"Gastronomy Food Trails"** section.
2. Explore curated culinary journeys (e.g., *The Royal Nizami Trail*, *Mumbai Street Food Safari*, *Delhi Mughlai Heritage*).
3. Click **"Mark as Tasted"** (✅) on dishes you've tried to level up your **Taste Passport** and earn badges!

---

### ⚖️ 7. Side-by-Side Dish Comparison Matrix
1. Inside any dish modal, click **"Compare Dish"** (⚖️).
2. Select a second dish to compare.
3. View an instant comparison of Calories, Protein, Spice Level, Prep Time, Price, Rating, and Dietary Tags.

---

### 🎁 8. 3D Mystery Blind Box
- Click the floating **Gift Box icon (`🎁`)** in the bottom-right toolbar.
- Tap the vibrating box to unwrap a surprise dish curated for your current craving and time of day.

---

### 📸 9. Social Story Poster Generator
- Inside any dish detail modal, click **"Create Story Card"** (📸).
- Generates a customized **9:16 Instagram / WhatsApp Story card** complete with ratings, city tag, and image that you can download and share with friends.

---

## 🏙️ Supported Culinary Hubs (26 Cities)

| Region | Featured Food Hubs |
|---|---|
| **🇮🇳 India** | Hyderabad, Mumbai, Delhi, Bengaluru, Kolkata, Chennai, Lucknow, Amritsar |
| **🌏 Asia** | Tokyo, Osaka, Seoul, Bangkok, Hanoi, Singapore, Kyoto |
| **🌍 Europe & Middle East** | Rome, Naples, Paris, London, Istanbul, Barcelona, Berlin |
| **🌎 Americas** | New York City, Mexico City, San Francisco, Oaxaca |

---

## 🍲 Top Swiggy & Zomato Foods in the Database

Crave+ includes all high-demand foods ordered daily on Swiggy and Zomato:

- **Biryanis & Rice**: Arabian Chicken Mandi, Hyderabadi Dum Biryani, Schezwan Chicken Fried Rice, Kolkata Biryani.
- **Starters & Street Food**: Hyderabadi Chicken 65, Chicken Shawarma Roll, Steamed Momos, Tangra Chilli Chicken Dry, Pani Puri / Golgappe, Paneer Tikka Kathi Franky, Crispy Peri-Peri Fries, Crispy Corn Pepper Salt, Mumbai Vada Pav, Pav Bhaji.
- **North Indian Curries**: Paneer Butter Masala, Shahi Dal Makhani, Malai Tandoori Soya Chaap, Butter Chicken, Chole Bhature.
- **South Indian Breakfast**: Ghee Podi Thatte Idlis, Masala Dosa, Filter Coffee.
- **Fast Food & Pizzas**: Farmhouse Cheesy Loaded Pizza, Crispy Fried Chicken Burger, Indo-Chinese Hakka Noodles.
- **Desserts & Sweets**: Warm Gulab Jamun with Shahi Rabdi, Sizzling Chocolate Walnut Brownie, Hyderabadi Double Ka Meetha, Rasgulla.

---

## ⌨️ Keyboard Shortcuts

| Shortcut Key | Action |
|---|---|
| `/` | Focus search bar & open autocomplete |
| `↓` / `↑` | Navigate through search suggestions |
| `Enter` | Open selected dish from search |
| `Esc` | Close search / active modal |
| `M` | Open Meal Planner |
| `R` | Spin the Flavor Roulette |
| `D` | Toggle Pure Veg / Non-Veg mode |
| `T` | Toggle Dark / Light theme |

---

## 📁 Project Structure

```
crave-plus/
├── index.html          # Main application structure, modals & UI layouts
├── css/
│   └── style.css       # Complete CSS design system, themes, glassmorphism & responsive layout
├── js/
│   ├── data.js         # Comprehensive dataset (76 dishes, 26 cities, trails, showdowns, badges)
│   ├── translations.js # Complete trilingual dictionaries (English, Telugu, Hindi)
│   └── app.js          # Core application logic, filters, speech synthesis, sound FX, and modals
└── README.md           # User manual and technical documentation
```

---

## 💡 Frequently Asked Questions (FAQ)

**Q: Do I need an internet connection to use Crave+?**  
A: Crave+ runs locally in your browser. All translations, search, filters, roulette, cook-along, and audio synthesis work offline. Only external image thumbnails and direct Swiggy/Zomato links require an active internet connection.

**Q: How do I change between Dark and Light mode?**  
A: Click the **Sun / Moon icon** in the top navigation bar or press `T` on your keyboard. Your preference is automatically saved in your browser.

**Q: Are my favorite dishes and tasted logs saved?**  
A: Yes! All bookmarked favorites, tasted dishes, meal planner slots, and unlocked explorer badges are automatically saved in your browser's local storage.

---

<p align="center">
  <strong>Made with ❤️ for food lovers everywhere. Enjoy discovering your next craving!</strong>
</p>
