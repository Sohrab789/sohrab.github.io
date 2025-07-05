# GitHub Pages Deployment Guide

This guide explains how to deploy your Vite React portfolio to GitHub Pages.

## What I Fixed

The main issues preventing deployment were:

1. **Missing base path configuration** - Vite needed to know it's being served from `/repository-name/` instead of `/`
2. **No GitHub Actions workflow** - Needed automated deployment workflow
3. **Router configuration** - React Router needed basename configuration for GitHub Pages
4. **Missing 404 handling** - Single Page Applications need special handling for client-side routing

## Files Modified/Created

### 1. `vite.config.ts`
- Added `base` path configuration for GitHub Pages
- Added proper build configuration
- Configured for production environment

### 2. `src/App.tsx`
- Added `basename` prop to BrowserRouter
- Configured for GitHub Pages subdirectory routing

### 3. `.github/workflows/deploy.yml` (NEW)
- GitHub Actions workflow for automatic deployment
- Builds and deploys to GitHub Pages on push to main branch

### 4. `public/404.html` (NEW)
- Handles client-side routing for single-page applications on GitHub Pages

### 5. `index.html`
- Added SPA redirect script for proper routing

### 6. `package.json`
- Added homepage field
- Added deploy script for manual deployment

## Deployment Steps

### Option 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment configuration"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically run and deploy your site

3. **Configuration Updated**:
   The configuration has been updated for your repository `sohrab.github.io`:
   - `vite.config.ts`: Base path set to `/sohrab.github.io/`
   - `src/App.tsx`: Basename set to `/sohrab.github.io`
   - `package.json`: Homepage URL set to `https://sohrab789.github.io/sohrab.github.io`

### Option 2: Manual Deployment

1. **Install gh-pages** (if not already installed):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Build and deploy**:
   ```bash
   npm run deploy
   ```

## Important Notes

1. **Repository Name**: Make sure to update the repository name in the configuration files if it's different from `sohrabwork-main`

2. **Branch**: The workflow deploys from the `main` branch. If you're using `master` or another branch, update the workflow file.

3. **Custom Domain**: If you want to use a custom domain, add a `CNAME` file in the `public` folder with your domain name.

4. **Environment Variables**: The configuration automatically detects production environment and applies the correct base path.

## Troubleshooting

### Site shows blank page
- Check that the base path in `vite.config.ts` is set to `/sohrab.github.io/`
- Verify the basename in `src/App.tsx` is set to `/sohrab.github.io`

### 404 errors on refresh
- Make sure `public/404.html` exists
- Check that the SPA redirect script is in `index.html`

### Build fails
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run lint`

### Deployment fails
- Check GitHub Actions logs in the **Actions** tab of your repository
- Verify GitHub Pages is enabled in repository settings
- Make sure the repository is public or you have GitHub Pro/Team for private repos

## Your Site URL

Once deployed, your site will be available at:
```
https://sohrab789.github.io/sohrab.github.io/
```

## Testing Locally

To test the production build locally:

```bash
npm run build
npm run preview
```

This will start a local server serving the production build, which should behave similarly to the deployed version. 