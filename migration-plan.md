# Simplified Next.js Migration Plan

## 1. Create New Project

```bash
npx create-next-app@latest ollifur-nextjs
```

Use following options:

- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: No
- `src/` directory: Yes
- App Router: Yes
- Import alias: Yes

## 2. Install Essential Dependencies

```bash
cd ollifur-nextjs
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @stripe/stripe-js firebase @sendgrid/mail nodemailer react-slick slick-carousel
```

## 3. File Migration Steps

### A. Copy Directories

1. Components

   - Copy `/components` to `/src/components`
   - Update imports to use new path aliases

2. Theme

   - Copy `/theme` to `/src/theme`
   - Update MUI theme configuration

3. Public Assets

   - Copy `/public` directory content
   - Update image references

4. Utilities
   - Copy `/lib` to `/src/lib`
   - Remove i18n related files

### B. Update Configuration

1. Copy and update essential configs:

   - `.env`
   - `.eslintrc`
   - `.prettierrc`

2. Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
```

## 4. Code Migration Steps

1. Pages to App Router:

   - Convert `/pages/index.js` to `/src/app/page.tsx`
   - Convert other pages to app router format
   - Move API routes to `/src/app/api`

2. Update Component Imports:

   - Update file extensions to `.tsx`
   - Update import paths to use aliases
   - Remove i18n related code

3. Update Authentication:
   - Migrate NextAuth configuration
   - Update protected routes

## 5. Testing & Deployment

1. Test core functionality:

   - Navigation
   - API routes
   - Authentication
   - Forms
   - Image loading

2. Build and deployment:

```bash
npm run build
npm start
```

## Removed Features

- Internationalization (i18n)
- Language switching
- Locale-based routing
