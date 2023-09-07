<script setup lang="ts">
import Memory from 'vue-material-design-icons/Memory.vue'
import CodeTags from 'vue-material-design-icons/CodeTags.vue'
import CurrencyUsd from 'vue-material-design-icons/CurrencyUsd.vue'
import Information from 'vue-material-design-icons/Information.vue'
import Github from 'vue-material-design-icons/Github.vue'

const runtimeConfig = useRuntimeConfig()

const repo = runtimeConfig.public.repo as string

</script>
<template>
    <!-- epic perspective bg image: unlock you power -->
    <div class="main-block centered-block">
        <h1 class="title">
            Your <span class="text-gradient purple">future</span>
            <br />without <span class="text-gradient orange">boundaries</span>
        </h1>
    </div>
    <div class="full-block in-mid-block">
        <h2 class="block-title">Imagine you could do <span class="text-gradient lightblue">everything you want</span></h2>
        <h2 class="block-title block-title-larger">without any <span class="text-gradient red">limitations</span></h2>
    </div>
    <div class="showcase with-center-border">
        <div class="left-side bg-image bg-image-eq">
            <h2 class="block-title">EQE Equalizer</h2>
            <h3>
                System wide <b>professional</b> equalizer with the ability to boost the volume in your phone calls!
            </h3>
        </div>
        <div class="right-side bg-image bg-image-flex bg-image-contain">
            <h2 class="block-title">Flex 3</h2>
            <h3>Did someone say you can't have lucky patcher on IOS?</h3>
        </div>
    </div>
    <div class="showcase with-center-border">
        <div class="left-side bg-image bg-image-pojav">
            <h2 class="block-title">Java on IOS? It's fast!</h2>
            <h3>You can run JVM only on Jailbroken devices.</h3>
        </div>
        <div class="right-side even-more-bg">
            <h2 class="block-title">And even more!</h2>
            <h3>Can't find your tweak? Create a new one!</h3>
        </div>
    </div>
    <div class="full-block">
        <h2 class="block-title-regular">Making your own tweaks is hard? <b>Not with our API!</b></h2>
        <h4 class="block-menu-item">
            <CodeTags class="mui-icon" /> Fully documented & actively updated API with a lot of high-level methods.
        </h4>
        <h4 class="block-menu-item">
            <CurrencyUsd class="mui-icon" /> And yes! We have fully-typed bindings for your <span>JavaScript</span> and
            <span>Python</span> scripts.
        </h4>
    </div>
    <div class="full-block">
        <h2 class="block-title-regular" icon="lock">Security issues? <b>Not in our watch!</b></h2>
        <h4 class="block-menu-item">
            <PublicIcon class="mt-[-0.2rem] fill-white inline-block" /> 100% open source infrastructure
        </h4>
        <h4 class="block-menu-item">
            <Memory class="mui-icon" /> Backed not only by best security specialists, but also by best-in-class AI
            codebase scanners
        </h4>
        <h4 class="block-menu-item">Vulnaribility bounty program</h4>
    </div>
    <div class="centered-block fullscreen-block download-block bg-image bg-image-download">
        <h2 class="block-title">Do you have a feeling that it all sounds <span class="text-gradient red">unrealistic?</span>
        </h2>
        <h2 class="block-title block-title-larger">Download and try it now!</h2>
    </div>
    <div class="footer">
        <div>
            <Information class="mui-icon" /> Made with Nuxt by <a href="https://github.com/zardoy">Zardoy</a>.
            <Github class="mui-icon ml-5" /> Code for this site is <a :href="`https://github.com/${repo}`">open
                sourced</a>.
        </div>
    </div>
</template>
<style lang="scss">
@media (max-width: 768px) {
    html {
        font-size: 0.8rem;
    }
}

.fullscreen-block,
.showcase,
.main-block {
    width: 100%;
    height: 1000px;
    max-height: 100vh;
}

.centered-block {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.text-gradient {
    @apply text-transparent bg-clip-text bg-gradient-to-r;
    text-shadow: none;
}

.main-block {
    background-image: url('~/assets/images/bg.jpg');
    /* background-size: contain; */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left bottom;
    text-shadow: 0 0 5px rgb(57, 57, 57);

    .title {
        @apply font-bold;
        text-transform: uppercase;
        font-size: 4rem;
        /* translate: 0 -150px; */
    }

    .text-gradient.purple {
        @apply from-purple-500 to-fuchsia-600;
    }

    .text-gradient.orange {
        @apply from-orange-500 to-yellow-500;
    }
}

.full-block {
    @apply ml-12;
    margin-top: 4rem;

    @media (max-width: 768px) {
        & {
            margin-left: 1rem;
        }
    }
}

.block-title {
    @apply font-semibold text-center;
    font-size: 3rem;
    margin-bottom: 1rem;
}

.block-title-regular {
    @apply text-center;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.block-title-larger {
    @apply text-6xl;
}

.text-gradient.lightblue {
    @apply from-blue-400 to-blue-500;
}

.text-gradient.red {
    @apply from-red-500 to-pink-600;
}

.showcase {
    height: 800px;
    max-height: 80vh;
    display: flex;
    margin-top: 6rem;
    justify-content: space-between;

    .block-title {
        margin-top: 1rem;
    }

    >div {
        text-align: center;
        flex: 1;
        position: relative;
        text-shadow: 0 1px 10px black;
    }

    >div::before {
        content: '';
        /* background-color: rgba(0, 0, 0, 0.5); */
    }

    /* Media query for small screens (adjust the breakpoint as needed) */
    @media (max-width: 768px) {

        /* Change to a column layout for small screens */
        & {
            flex-direction: column;
            max-height: none;
        }

        >div {
            flex: 0 0 50%;
            /* Prevent items from stretching and take full width */
            /* Add other styling for the items on small screens */
        }
    }



}

.bg-image::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0) 50%);
}

.bg-image::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.bg-image-eq::before {
    background-image: url('~/assets/images/eqe.png');
    background-position: right bottom;
}

.bg-image-flex::before {
    background-image: url('~/assets/images/flex3.png');
}

.bg-image-pojav::before {
    background-position: right center;
    background-size: contain;
    background-image: url('~/assets/images/pojav.jpg');
}

.bg-image-contain::before {
    background-size: contain;
}

.even-more-bg {
    @apply from-black to-purple-700;
    background: radial-gradient(circle at right center, var(--tw-gradient-to) 0%, 40%, var(--tw-gradient-from) 100%);
}

.block-menu-item {
    @apply text-xl;
    margin-top: 1rem;
}

.mui-icon {
    @apply inline-block align-bottom;
    margin-top: -1rem;
}

.bg-image-download::before {
    background-image: url('~/assets/images/download.png');
}

.download-block {
    margin-top: 3rem;
    position: relative;
    text-shadow: 0 0 10px black;
}

.download-block::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
}

.footer {
    @apply text-gray-500;
    margin: 2rem 4rem;
}
</style>
