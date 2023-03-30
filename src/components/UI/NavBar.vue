<template>
    <div class="navbar">
        <div class="navbar__menu">
            <button-custom @click="$router.push('/')">Home</button-custom>
            <button-custom @click="$router.push('/store')">Store</button-custom>
            <button-custom
                @click="$router.push('/posts')"
                style="margin-left: 20px"
                >Posts</button-custom
            >
            <!-- <router-link to="/">Home</router-link>
            <router-link to="/posts">Posts</router-link> -->
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
    display: flex;
    height: 50px;
    background-color: #fff;
    box-shadow: 2px 2px 4px gray;
    align-items: center;
    padding: 0 15px;
}
</style>
