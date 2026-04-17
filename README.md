# Axai Site — Static (Gatsby)

Static version of the Axai website, built with [Gatsby](https://www.gatsbyjs.com/). Replaces the original Drupal-based site. Deployed on [Netlify](https://www.netlify.com/) at [axai.com.mx](https://axai.com.mx).

Content is bilingual (English/Spanish) with pages for:
- **Projects** (case studies): 8 projects with screenshots
- **Blog**: 3 EN posts + 15 ES posts (imported from Drupal)
- **People**: Team profiles (4 members)
- **Homepage**: Landing page in both languages

## Development

Requires Node.js 18:

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

## Netlify Deployment

The site auto-deploys via Netlify on every push to `master`. Configuration is in `netlify.toml`.

Key settings:
- **Node version**: 18 (pinned in `netlify.toml`)
- **NPM_FLAGS**: `--ignore-scripts` (avoids broken native module compilation during install)
- **Build command**: `npm run build` (rebuilds sharp/pngquant-bin before gatsby build)

## Content Import

Original content was imported from the Drupal site using the scripts in `src/scripts/import_blogs.js` and the `drafts/` directory.

## License

MIT
