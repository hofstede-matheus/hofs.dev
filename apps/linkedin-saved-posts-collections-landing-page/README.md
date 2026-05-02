# LinkedIn Saved Posts Collections Landing Page

Landing page for the CollectIn browser extension that helps organize LinkedIn saved posts into collections.

## Development Setup

This project uses EJS templates to generate static HTML files for Firebase hosting.

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Build Process

The project source files are located in the `src/` directory:

- `src/views/` - Main EJS templates
- `src/partials/` - Reusable header, footer, and head partials

To build the static HTML files:

```bash
npm run build
```

This compiles the EJS templates and outputs static HTML files to the `public/` directory for Firebase hosting.

### Development

For development with automatic rebuilding on file changes:

```bash
npm run dev
```

### Project Structure

```
├── src/
│   ├── views/
│   │   └── index.ejs          # Main landing page template
│   └── partials/
│       ├── head.ejs           # Common head section with meta tags
│       ├── header.ejs         # Site header with navigation
│       └── footer.ejs         # Site footer
├── public/                    # Generated static files (Firebase hosting)
├── build.js                   # Build script
└── package.json
```

### Firebase Deployment

The generated files in the `public/` directory are ready for Firebase hosting. Deploy using:

```bash
firebase deploy
```

## Features

- **EJS Templates**: Modular templates with reusable partials
- **Responsive Design**: Mobile-friendly landing page
- **Build Process**: Automated compilation to static HTML
- **Firebase Ready**: Optimized for Firebase hosting
