<template>
    <div class="post">
        <div>
            <div class="post-title">{{ post.title }}</div>
            <div>{{ post.body }}</div>
        </div>
        <div class="post-btns">
            <button>Удалить</button>
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
</style>
