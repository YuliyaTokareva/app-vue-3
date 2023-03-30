<template>
    <nav-bar></nav-bar>
    <div class="page">
        <router-view></router-view>
    </div>
</template>
<script>
import NavBar from "@/components/UI/NavBar";

export default {
    components: {
        NavBar,
    },
};
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.page {
    padding: 20px;
    max-width: 960px;
    margin: 0 auto;
}
</style>
