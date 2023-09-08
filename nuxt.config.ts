const description = 'ra1next is next-gen Jailbreak software for iDevices running iOS 14.0 - 14.3 (14.x, 15.x available soon). More infomation coming soon'

export default () => defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
    ],
    runtimeConfig: {
        public: {
            repo: `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`
        },
    },
    app: {
        baseURL: './',
        head: {
            title: 'ra1next Official Homepage',
            // gen description
            meta: [
                { hid: 'description', name: 'description', content: 'ra1next Official Homepage' },
                { hid: 'og:title', property: 'og:title', content: description },
                { hid: 'og:description', property: 'og:description', content: description },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                // { hid: 'og:url', property: 'og:url', content: 'https://ra1next.com/' },
                { hid: 'og:url', property: 'og:url', content: 'https://jb-team-site.zardoy.com' },
            ]
        },
    },
})
