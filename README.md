[![Netlify Status](https://api.netlify.com/api/v1/badges/e0b6b6d4-8665-4f62-b760-37f781e4749b/deploy-status)](https://app.netlify.com/sites/kaamos/deploys)

This repo hosts the source code for the [Kamarikuoro Kaamos website][kaamos-website], hosted on Netlify.

## Editing Content

All dynamic content, such as news or concerts, lives in various files inside this repo's `content` directory. The easiest and safest way to edit them is via the [Kaamos CMS panel][kaamos-cms], which is powered by Netlify CMS. Once saved, a new build is kicked off and the changes are live within a couple of minutes.

Longer-lived content containing multiple paragraphs or styling typically lives in the [source files][pages-source], and can be edited either on GitHub or by cloning this repo and committing the changes.

## Deployment

Committing to the `main` branch of this repo will auto-deploy the site to Netlify. Deploys can be monitored and manually triggered via the [Netlify dashboard][netlify-deploys].


[kaamos-website]: https://www.kamarikuorokaamos.fi
[kaamos-cms]: https://kaamos.netlify.app/admin/
[pages-source]: https://github.com/kaamoskuoro/kaamos-website/tree/main/src/pages
[netlify-deploys]: https://app.netlify.com/sites/kaamos/deploys
