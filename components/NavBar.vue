<script setup lang="ts">
import AccountCircleOutlined from 'vue-material-design-icons/AccountCircleOutline.vue'

const loggedInUser = ref(null)
</script>
<template>
    <div class="navbar">
        <div class="inner">
            <div class="navbar-left">
                <h2>
                    <NuxtLink href="/">ra1next Jailbreak Team</NuxtLink>
                </h2>
            </div>
            <div class="navbar-right">
                <!-- <div class="navbar-menu"><a href="#">API Playground</a></div>
                <div v-if="!loggedInUser">
                    <AccountCircleOutlined />
                </div>
                <div v-else>
                    <ExitToApp className=" text-red-800" role="button" @click="() => logout()" />
                </div> -->
            </div>
        </div>
    </div>
</template>
<style scoped>
.navbar-menu {
    margin-right: 20px;
}

.navbar {
    width: 100%;
    height: 0;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;

    .inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 40px;
        backdrop-filter: blur(10px);
        font-size: 1.1rem;
    }

    h2 {
        font-size: 1.3rem;
        font-weight: 600;
        /* text-transform: uppercase; */
    }
}

.navbar-right {
    display: flex;
    gap: 15px;
}
</style>
