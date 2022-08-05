import {prefixPluginTranslations} from "@strapi/helper-plugin";
import pluginId from "./pluginId";
import TableField from "./components/TableField";

export default {
    register(app) {
        app.addFields([{type: "uig-table-type", Component: TableField}]);
    },

    bootstrap(app) {
    },
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
            })
        );

        return Promise.resolve(importedTrads);
    },
};
