# Strapi Plugin-Content-Versioning

⚠️⚠️⚠️ Currently a **beta.** ⚠️⚠️⚠️

### A Strapi plugin for preview of your content.

This plugin provides the ability preview content in your strapi admin.

### Prerequirements:
```
npm i @notum-cz/strapi-plugin-content-versioning
yarn add @notum-cz/strapi-plugin-content-versioning
```
And all steps described in [**plugin install instruction**](https://github.com/notum-cz/strapi-plugin-content-versioning#-install).

## 🧑‍💻 Install

```
npm i @uigstudio/strapi-plugin-content-preview
yarn add @uigstudio/strapi-plugin-content-preview
```

## ⚠️ Read before installation

You need to create/modify file `config/plugins.js` with

```js
module.exports = ({ env }) => ({
    "content-preview": {
        enabled:  true,
        config: {
            previewUrl: env('PREVIEW_URL'),
            namespaces: {
                'api::pages.pages': '',
                'api::news.news': 'news'
            },
        },
    },
});
```
