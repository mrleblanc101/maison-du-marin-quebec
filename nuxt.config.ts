// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    css: ['~/assets/css/main.css'],

    app: {
        baseURL: process.env.NUXT_APP_BASE_URL || '/',
        head: {
            link: [
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: `${process.env.NUXT_APP_BASE_URL || '/'}images/logo.svg`,
                },
                {
                    rel: 'icon',
                    href: `${process.env.NUXT_APP_BASE_URL || '/'}favicon.ico`,
                    sizes: '48x48',
                },
                {
                    rel: 'apple-touch-icon',
                    href: `${process.env.NUXT_APP_BASE_URL || '/'}apple-touch-icon.png`,
                },
                {
                    rel: 'manifest',
                    href: `${process.env.NUXT_APP_BASE_URL || '/'}manifest.json`,
                },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: '',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Public+Sans:wght@400;500;600;700&display=swap',
                },
            ],
        },
    },

    modules: [
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxtjs/i18n',
    ],

    i18n: {
        baseUrl: 'https://mrleblanc101.github.io',
        locales: [
            { code: 'fr', language: 'fr-CA', name: 'Français' },
            { code: 'en', language: 'en-CA', name: 'English' },
        ],
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            useCookie: true,
            redirectOn: 'root',
        },
    },
})
