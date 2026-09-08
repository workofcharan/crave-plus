# 🍽️ CravePulse (Crave Plus) — Ultimate Food Discovery & Recommendation Engine

> **Discover Famous Dishes, Legendary Food Capitals & What to Eat Near You**  
> 🌐 **Live Website**: [https://crave-plus.vercel.app/](https://crave-plus.vercel.app/)

---

## 🌟 Introduction

**CravePulse** is an interactive, modern culinary discovery platform designed to solve the age-old question: *"What should I eat today?"*. Whether you are exploring iconic street foods in your home city or dreaming of global culinary masterpieces in Tokyo, Rome, Paris, or New York, CravePulse connects you with legendary heritage delicacies, authentic stories, iconic restaurant recommendations, and fun interactive decision tools.

Crafted with a sleek **Pure White, Emerald Green 🟢, and Ruby Red 🔴** design system, CravePulse delivers a rich, gamified experience across **English, తెలుగు (Telugu), and हिन्दी (Hindi)**.

---

## ✨ Key Features & Interactive Tools

### 1. 📍 Location-Scoped Smart Search & Autocomplete
- **Items Near You Only**: The search bar instantly filters dishes available in your selected or auto-detected food hub (e.g., Hyderabad, Delhi, Bengaluru, Mumbai, Tokyo, Rome, etc.).
- **Live Autocomplete Suggestions**: Shows instant suggestions with meal category, local tags (`📍 Near You`), and price as you type.
- **GPS Location Detection**: Seamlessly detect your nearest culinary capital with a single click.

### 2. 🟢 Pure Veg & 🔴 Non-Veg Dedicated Filter Hub
- **Prominent Color-Coded Toggles**:
  - **All Dishes**: Browse the complete culinary library.
  - **Pure Veg 🟢**: Emerald green theme filtering to 100% vegetarian delicacies.
  - **Non-Veg 🔴**: Ruby red theme filtering to authentic non-vegetarian specialties.
- **Standard FSSAI Dot Indicators**: Clear green and red boxed dot badges on every dish card and detail view.

### 3. 🌐 Trilingual Multilingual Support
- Switch effortlessly between **English**, **తెలుగు (Telugu)**, and **हिन्दी (Hindi)** with clean typography and zero broken characters.

### 4. 🎲 Interactive Craving Wheel (Spin to Decide)
- Cannot decide what to eat? Spin the physics-based HTML5 canvas craving wheel to let destiny choose your next meal.

### 5. ✨ AI Taste Matcher Quiz
- A 4-step interactive flavor profile quiz that analyzes your mood, texture preference, meal timing, and diet to recommend your personalized food soulmate.

### 6. 🎁 Mystery Blind Box
- Experience a 3D animated crate unboxing surprise with celebratory confetti revealing hidden culinary gems.

### 7. 📅 Daily Meal Planner & Nutrition Tracker
- Plan your daily nourishment across **Breakfast, Lunch, Dinner, and Snacks**.
- Live calorie, protein, carbs, fat, and budget calculations.
- **Export Grocery List**: Combines all daily ingredients into a single shopping checklist.

### 8. ⚔️ Dish vs. Dish Battle Arena
- Pits iconic food rivalries (e.g., *Hyderabadi Biryani vs. Kolkata Biryani*, *Roman Carbonara vs. Cacio e Pepe*) in head-to-head showdowns with interactive community voting.

### 9. 🏆 Gastronomy Passport & Milestone Badges
- Mark dishes you have tasted to level up your foodie rank from *Street Rookie* to *Grand Epicurean Master*.
- Earn achievement badges like *Street Food King*, *Sweet Tooth Connoisseur*, and *Spice Explorer*.

### 10. 🎧 Audio Narrator & Web Audio FX
- **Audio Storyteller**: Uses the browser Web Speech API to narrate the rich heritage and history behind every dish.
- **Synthesizer Chimes**: Integrated Web Audio API sound effects for interactive clicks, spins, and toasts (with one-click mute/unmute).

### 11. 👨‍🍳 Interactive Cook-Along Mode
- Step-by-step guided cooking walkthrough with built-in timers, progress bars, and serving portion multipliers.

### 12. 🖼️ Gastronomy Story Poster Generator
- Creates downloadable, beautifully formatted social media food story cards rendered via HTML5 Canvas.

### 13. 🛒 Smart Grocery Checklist
- View exact dish ingredients, check off items as you shop, and copy the full shopping list to your clipboard with one click.

### 14. 💬 Community Foodie Reviews & Ratings
- Read authentic ratings and dish reviews, or share your own culinary rating with tags.

### 15. ⚡ Floating Quick-Action Menu (FAB)
- Bottom-right floating menu for fast, one-tap access to all tools (Wheel, Quiz, Blind Box, Planner, Arena, Food Trails, and Scroll-to-Top).

---

## 🎨 Design System & Aesthetics

| Element | Specification |
| :--- | :--- |
| **Primary Palette** | Emerald Green (`#10b981`), Ruby Red (`#e11d48`), Warm Amber (`#f59e0b`) |
| **Backgrounds** | Crisp Pure White (`#ffffff`) with subtle ambient glowing orbs & Dark Obsidian Mode |
| **Typography** | `Outfit`, `Plus Jakarta Sans`, and `Syne` from Google Fonts |
| **Icons** | Clean, crisp vector icons via `lucide-icons` |
| **Responsiveness** | Fully optimized for mobile screens, tablets, laptops, and ultra-wide desktops |

---

## 🛠️ Technology Stack

- **Core**: Semantic HTML5 & Modern Vanilla JavaScript (ES6+)
- **Styling**: Vanilla CSS3 (CSS Custom Properties / Variables, Glassmorphism, CSS Grid & Flexbox)
- **Browser APIs**:
  - **Web Audio API** (Sound effects synthesis)
  - **Web Speech Synthesis API** (Dish audio narration)
  - **HTML5 Canvas API** (Craving wheel physics & Story card generator)
  - **Geolocation API** (Nearest food hub detection)
  - **LocalStorage API** (Persistent favorites, tasted dishes, meal plans, theme, and language)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```
crave-plus/
├── index.html              # Main single-page application structure & modals
├── css/
│   └── style.css           # Design tokens, layouts, component styles & dark mode
├── js/
│   ├── data.js             # Comprehensive database of cities, dishes, trails & badges
│   ├── translations.js     # Trilingual dictionary (English, Telugu, Hindi)
│   └── app.js              # Application logic, audio engine, canvas & event handlers
├── README.md               # Project documentation & user guide
└── vercel.json             # Deployment routing configuration (if applicable)
```

---

## 🚀 Getting Started Locally

### Prerequisites
Any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox) and a lightweight local server.

### Running the App
1. **Clone or download** this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/crave-plus.git
   cd crave-plus
   ```

2. **Start a local HTTP server**:
   - **Using Python 3**:
     ```bash
     python -m http.server 3000
     ```
   - **Using Node.js (`npx serve`)**:
     ```bash
     npx serve .
     ```
   - **Using VS Code Live Server**: Right-click `index.html` and select **Open with Live Server**.

3. **Open in Browser**:
   Navigate to `http://localhost:3000/` in your browser.

---

## 🌐 Deployment to Vercel

1. Push your repository to **GitHub**.
2. Visit [Vercel Dashboard](https://vercel.com/) and click **Add New Project**.
3. Import your `crave-plus` repository.
4. Keep the default settings (Root Directory `./`) and click **Deploy**.
5. Your application will be live instantly with global CDN caching and SSL!

---

## 📝 License & Attribution

- **License**: MIT License. Open source and free for personal and educational use.
- **Images**: High-resolution photography provided by Unsplash & Wikimedia Commons.
