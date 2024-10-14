import { defineStore } from "pinia";

export const useLocaleStore = defineStore("locale", () => {
  const locale = ref("zh");
  const setLocale = (lang) => (locale.value = lang);
  return { locale, setLocale };
});
