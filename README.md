# Axai Site — Static (Gatsby)

Static version of the Axai website, built with [Gatsby](https://www.gatsbyjs.com/). Replaces the original Drupal-based site.

Content is bilingual (English/Spanish) with pages for:
- **Projects** (case studies): 8 projects with screenshots
- **Blog**: 3 EN posts + 15 ES posts (imported from Drupal)
- **People**: Team profiles (4 members)
- **Homepage**: Landing page in both languages

## Development

Requires Node.js 18 (use nvm):

```bash
nvm install 18
nvm use 18
npm install --ignore-scripts
npm rebuild sharp pngquant-bin
npm run develop
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

The site auto-deploys via GitHub Actions on every push to `master`.

To deploy manually:

```bash
npm run deploy
```

### GitHub Pages Setup

1. Go to repo Settings → Pages
2. Set Source to "GitHub Actions"
3. The site will be available at `https://axai-mx.github.io`

**Note:** For the site to serve at `axai-mx.github.io` (without a sub-path), the repo must be named `axai-mx.github.io`. If using a different repo name, add `pathPrefix: '/<repo-name>'` back to `gatsby-config.js` and use `--prefix-paths` with the build command.

## Content Import

Original content was imported from the Drupal site using the scripts in `src/scripts/import_blogs.js` and the `drafts/` directory.

## License

MIT
