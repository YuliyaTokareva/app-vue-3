<template>
    <div v-if="posts.length !== 0">
        <h3>Posts</h3>
        <div class="posts">
            <post-item
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
            />
        </div>
    </div>
    <h3 v-else>There are no posts yet</h3>
</template>
<script>
import PostItem from "./PostItem.vue";
export default {
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            requred: true,
        },
    },
};
</script>
<style scoped>
.posts {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    margin-top: 20px;
}
.post {
    border: 1px solid #8000c9;
    padding: 10px;
}
.post-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
}
</style>
