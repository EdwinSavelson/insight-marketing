# Insight Marketing Site

A minimal marketing site for the Insight Chrome extension with Netlify CMS for content management.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deploy to Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Enable Netlify Identity in site settings
4. Enable Git Gateway in Identity settings
5. Access CMS at: `your-site.netlify.app/admin`

## Content Management

- Access the CMS at `/admin` after deployment
- Edit home page content, features, and upload demo GIF
- Changes are automatically deployed

## Structure

- `src/app/page.tsx` - Main landing page
- `public/admin/` - Netlify CMS configuration
- `content/` - Markdown content files
- `public/images/` - Media uploads
