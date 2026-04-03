# News Bot - Automated News Briefing Platform

An intelligent automated news gathering and summarization tool that collects, processes, and publishes concise news briefings in multiple languages.

## 📰 Features

### Automated News Collection
- **Multi-source aggregation**: Gathers news from various reputable sources including Dawn, Business Recorder, Pro Pakistani, ARY, and more
- **Real-time updates**: Continuously monitors news feeds for breaking stories and important developments
- **Smart categorization**: Automatically organizes news into relevant categories:
  - Economy & Business
  - Science & Technology
  - Politics
  - Weather
  - Sports
  - International News
  - National News
  - Health
  - Other

### Content Processing
- **AI-powered summarization**: Condenses lengthy articles into concise, easy-to-read summaries
- **Bilingual support**: Generates briefings in both English and Urdu (اردو)
- **Read time estimation**: Automatically calculates estimated reading time for each briefing
- **Source attribution**: Maintains proper citations and links to original sources

### Publishing & Distribution
- **Multi-format output**: Generates Markdown files ready for web publishing
- **Jekyll integration**: Seamless integration with Jekyll static site generator
- **Responsive design**: Mobile-first layout that works beautifully on all devices
- **Theme support**: Light/Dark/Auto themes with persistent user preferences
- **RTL support**: Full right-to-left layout support for Urdu content with Nastaliq fonts

## 🌐 Supported Languages

- **English**: Standard English briefings with proper formatting
- **Urdu (اردو)**: Nastaliq font support with RTL layout optimization

## 🎨 Design Features

### Modern Interface
- **Minimalist design**: Clean, professional aesthetic avoiding generic AI-generated styling
- **Teal color scheme**: Natural, calming colors instead of typical AI purples
- **Responsive layout**: Optimized for mobile (80% usage) with enhanced desktop support
- **Wide container**: 1200px width for better desktop readability

### Typography
- **Enhanced readability**: Larger heading sizes for better scanning
- **Nastaliq fonts**: Google Fonts CDN for beautiful Urdu typography
- **Local font fallback**: Support for local font files when CDN unavailable
- **Line height optimization**: Proper spacing for comfortable reading

### Theme System
- **Light mode**: Clean, bright interface for daytime reading
- **Dark mode**: Easy on the eyes for nighttime reading
- **Auto mode**: Follows system preference automatically
- **Persistent storage**: User preferences saved in localStorage

## 📁 Project Structure

```
news-bot-data/
├── _layouts/
│   └── default.html          # Main layout with theme support
├── _includes/
│   └── deakh.html            # Google Analytics integration
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet with themes
│   ├── js/
│   │   └── theme.js          # Theme toggle functionality
│   └── fonts/
│       └── README.md         # Font installation guide
├── news.md                   # Sample English briefing
├── urdu-sample.md           # Sample Urdu briefing
├── pakistan_news_briefing.md # English briefing template
└── THEME_FEATURES.md        # Detailed theme documentation
```

## 🚀 Getting Started

### Prerequisites
- Jekyll static site generator
- Node.js (for optional enhancements)
- News source APIs or RSS feeds

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd news-bot-data
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Configure news sources**
   - Add your news source APIs in configuration files
   - Set up RSS feed monitoring
   - Configure language preferences

4. **Run the bot**
   ```bash
   jekyll serve
   ```

## 📝 Creating News Briefings

### English Briefing Template

```markdown
---
layout: default
title: Pakistan News Briefing
lang: en
---

# Pakistan News Briefing

Here's your news briefing for [Date]:
Time to read: [X] mins

### Category
- News item summary *[Source](url)*
```

### Urdu Briefing Template

```markdown
---
layout: default
title: پاکستان خبری مختصر
rtl: true
lang: ur
---

پاکستان خبری مختصر - [تاریخ]
مکمل پڑھنے کا وقت: [X] منٹ

## زمرہ
- خبر کا خلاصہ *[ماخذ](url)*
```

## 🎯 Frontmatter Options

```yaml
---
layout: default          # Required: Jekyll layout
title: Page Title        # Required: Page title
rtl: false              # Optional: Set true for RTL content
lang: en                # Optional: Language code (en, ur)
font_url: "https://..."  # Optional: Custom font URL
---
```

## 🤖 Automated Workflow

1. **Collection**: Bot monitors news sources continuously
2. **Filtering**: Filters out irrelevant or duplicate content
3. **Summarization**: AI processes and condenses articles
4. **Categorization**: Stories sorted into relevant categories
5. **Translation**: Optional translation to Urdu
6. **Formatting**: Markdown generation with proper frontmatter
7. **Publishing**: Automatic file creation and Git commits
8. **Distribution**: Web publishing and notification systems

## 📊 Statistics & Analytics

- **Article count**: Number of articles per briefing
- **Reading time**: Estimated reading duration
- **Source distribution**: Breakdown by news sources
- **Category analysis**: Topic distribution across briefings
- **Google Analytics**: Integrated traffic and engagement tracking

## 🔧 Customization

### Theme Customization
Modify `assets/css/style.css` to adjust:
- Color schemes and gradients
- Font sizes and weights
- Spacing and layout
- Border and shadow styles

### Adding News Sources
Extend the bot's capabilities by adding new sources:
1. Configure RSS feeds or API endpoints
2. Set up content extraction rules
3. Define source-specific formatting
4. Add attribution and citation logic

### Language Support
Add new languages by:
1. Creating language-specific CSS rules
2. Adding RTL/LTR direction support
3. Integrating appropriate fonts
4. Setting up translation pipelines

## 📱 Mobile Optimization

The design is optimized for mobile usage:
- Touch-friendly buttons and controls
- Responsive font scaling
- Efficient layout for narrow screens
- Optimized touch targets for theme toggle
- Mobile-first CSS with progressive enhancement

## 🌍 Internationalization

- **English**: Full support with standard typography
- **Urdu**: Complete RTL support with Nastaliq fonts
- **Extensible**: Framework for adding more languages

## 🔒 Privacy & Attribution

- **Source attribution**: All content properly credited
- **Link preservation**: Original source links maintained
- **Fair use**: Content summarized under fair use principles
- **Analytics**: User tracking optional via Google Analytics

## 🤝 Contributing

Contributions welcome! Areas for enhancement:
- Additional news sources
- More language support
- Enhanced categorization
- Improved summarization algorithms
- UI/UX improvements
- Performance optimizations

## 📄 License

This project maintains fair use of news content and respects source attribution requirements.

## 📞 Support

For issues, questions, or suggestions:
- Create an issue in the repository
- Contact the development team
- Check documentation in `THEME_FEATURES.md`

---

*Automated news gathering • AI-powered summarization • Multi-language publishing*