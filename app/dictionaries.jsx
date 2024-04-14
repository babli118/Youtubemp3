import config from "../config";
const dictionaries = {};

config.lang.forEach((lang) => {
  dictionaries[lang] = () =>
    import(`/locales/${lang}/default.json`).then((module) => module.default);
});

export const getDictionary = async (locale) => dictionaries[locale]();
