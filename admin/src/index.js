import {prefixPluginTranslations} from '@strapi/helper-plugin';
import pluginId from './pluginId';
import TableField from './components/TableField';
import ColorField from './components/ColorField';
import Select from './components/Select';

export default {
    register(app) {
        app.addFields([
            {type: 'uig-table', Component: TableField},
            {type: 'uig-color', Component: ColorField},
            {type: 'uig-select', Component: Select},
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
