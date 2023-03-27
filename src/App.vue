<template>
    <div class="page">
        <button-custom @click.stop="showDialog" style="margin: 15px 0"
            >Add new post</button-custom
        >
        <!-- <h3 v-else>Here are no posts yet</h3> -->
        <dialog-custom v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </dialog-custom>
        <!-- <post-list :posts="posts" @remove="removePost" /> -->

        <post-list :posts="posts" @remove="removePost" v-if="!isPostLoading" />

        <h3 v-else class="loading">Loading...</h3>
    </div>
</template>
<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import axios from "axios";
export default {
    components: {
        PostForm,
        PostList,
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchPosts() {
            try {
                this.isPostLoading = true;

                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts?_limit=10"
                );
                this.posts = res.data;
            } catch (e) {
                console.log(e);
            } finally {
                this.isPostLoading = false;
            }
        },
    },
    mounted() {
        this.fetchPosts();
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
.loading {
    display: block;
}
</style>
