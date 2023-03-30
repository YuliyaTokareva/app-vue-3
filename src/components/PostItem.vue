<template>
    <div class="post">
        <div>
            <div class="post-title">{{ post.title }}</div>
            <div>{{ post.body }}</div>
        </div>
        <div class="post-btns">
            <button-custom @click="$router.push(`/posts/${post.id}`)"
                >Open</button-custom
            >
            <button-custom @click="$emit('remove', post)">X</button-custom>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            requred: true,
        },
    },
};
</script>
<style scoped>
.post {
    border: 1px solid #8000c9;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
}
.post-btns {
    display: flex;
    grid-gap: 5px;
}
</style>
