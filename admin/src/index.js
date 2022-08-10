import {prefixPluginTranslations} from '@strapi/helper-plugin';
import pluginId from './pluginId';
import TableField from './components/TableField';
import ColorField from './components/ColorField';

export default {
    register(app) {
        app.addFields([
            {type: 'uig-table-type', Component: TableField},
            {type: 'uig-color-type', Component: ColorField},
        ]);
    },

    bootstrap() {},
    async registerTrads({locales}) {
        const importedTrads = await Promise.all(
            locales.map((locale) => {
                return import(`./translations/${locale}.json`)
                    .then(({default: data}) => {
                        return {
                            data: prefixPluginTranslations(data, pluginId),
                            locale,
                        };
                    })
                    .catch(() => {
                        return {
                            data: {},
                            locale,
                        };
                    });
            }),
        );

        return Promise.resolve(importedTrads);
    },
};
