// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			title: "Nuxt & Decap CMS starter",
			meta: [{ name: "Sailsnake__nuxt-starter--decap-cms", content: "noindex, nofollow" }],
		},
	},
	modules: ["@nuxt/content"],
	runtimeConfig: {
		public: {
			cloudinaryEnvUrl: 'https://res.cloudinary.com/sailsnake-api-test',
			defaultLocale: process.env.NUXT_PUBLIC_DEFAULT_LOCALE
		}
	},
	css: [
		"@/assets/scss/normalize.css",
		"@/assets/scss/fonts.scss",
		"@/assets/scss/main.scss",
		"@/assets/scss/type.scss",
		"@/assets/scss/forms.scss",
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/mixins.scss"; @import "@/assets/scss/variables.scss";',
				},
			},
		},
	},
});
