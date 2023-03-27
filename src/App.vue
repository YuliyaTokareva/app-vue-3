<template>
    <div class="page">
        <post-form @create="createPost" />
        <post-list :posts="posts" />
    </div>
</template>
<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";

export default {
    components: {
        PostForm,
        PostList,
    },
    data() {
        return {
            posts: [
                { id: 1, title: "JS", body: "Some text obout js" },
                { id: 1, title: "React", body: "Some text obout React" },
            ],
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
        },
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
}
</style>
