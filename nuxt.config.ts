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
        pageTransition: {
            name: 'fade',
        },
    },
})
