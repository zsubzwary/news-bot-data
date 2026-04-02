# News Briefing Theme Features

## Light/Dark Theme Support

### Three-way Toggle
Your news briefings now support three theme modes:
- **☀️ Light mode** - Light theme
- **🌙 Dark mode** - Dark theme  
- **🔄 Auto mode** - Automatically follows system preference

### Theme Persistence
The user's theme choice is saved in `localStorage` and persists across sessions.

### How to Use
Simply click the theme toggle button in the header to cycle through the three modes.

## Urdu Nastaliq Font Support

### Google Fonts Integration
- **Noto Nastaliq Urdu** is loaded automatically via Google Fonts CDN
- Optimized loading with `font-display: swap`
- Works seamlessly with both LTR and RTL layouts

### RTL Support
Add the following to your frontmatter for Urdu/Arabic content:

```yaml
---
layout: default
title: اردو خبری مختصر
rtl: true
lang: ur
---
```

### Custom Fonts
You can provide custom font URLs in the frontmatter:

```yaml
---
layout: default
title: Custom Title
font_url: "https://your-custom-font-url.css"
---
```

### Local Font Fallback
Place local font files in `assets/fonts/` directory:
- `NotoNastaliqUrdu-Regular.ttf` (or `.woff2`)
- `NotoNastaliqUrdu-Bold.ttf` (or `.woff2`)
- `JameelNooriNastaleeq.ttf`

These will be used as fallbacks if CDN fails.

## File Structure

```
assets/
├── css/
│   └── style.css          # Main stylesheet with theme support
├── js/
│   └── theme.js           # Theme toggle functionality
└── fonts/
    └── README.md          # Font installation instructions
```

## Frontmatter Options

```yaml
---
layout: default
title: Page Title
rtl: false              # Set to true for RTL content
lang: en                # Content language code
font_url: "https://..." # Optional custom font URL
---
```

## Theme Colors

### Light Mode Variables
- Backgrounds: Light gray/white
- Text: Dark gray
- Accent: Purple gradient (#667eea → #764ba2)

### Dark Mode Variables  
- Backgrounds: Dark navy (#1a1a2e → #16213e)
- Text: Light gray
- Accent: Light purple gradient (#8b5cf6 → #a78bfa)

## Browser Compatibility

- Modern browsers with CSS custom properties support
- localStorage for theme persistence
- System preference detection for auto mode
- Google Fonts CDN with fallback support

## Mobile Responsive

The layout is fully responsive and works on all device sizes with proper adjustments for mobile screens.