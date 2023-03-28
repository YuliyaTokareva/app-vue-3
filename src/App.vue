<template>
    <div class="page">
        <div class="app__btns">
            <button-custom @click.stop="showDialog" style="margin: 15px 0"
                >Add new post</button-custom
            >
            <input-custom
                v-model:value="searchQuery"
                placeholder="Search..."
            ></input-custom>
            <select-custom
                v-model="selectedSort"
                :options="sortOptions"
            ></select-custom>
        </div>
        <dialog-custom v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </dialog-custom>

        <post-list
            :posts="sortedAndSearchPosts"
            @remove="removePost"
            v-if="!isPostLoading"
        />

        <h3 v-else class="loading">Loading...</h3>
        <div class="page__pagination">
            <div
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                class="page__pagination-item"
                :class="{ 'curent-page': page === pageNumber }"
                @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div>
    </div>
</template>
<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import axios from "axios";
import InputCustom from "./components/UI/InputCustom.vue";
export default {
    components: {
        PostForm,
        PostList,
        InputCustom,
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
            selectedSort: "",
            searchQuery: "",
            page: 1,
            limitPost: 10,
            totalPages: 0,
            sortOptions: [
                { value: "title", name: "To title" },
                { value: "body", name: "To body" },
            ],
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
        changePage(pageNumber) {
            this.page = pageNumber;
        },

        async fetchPosts() {
            try {
                this.isPostLoading = true;

                const res = await axios.get(
                    // "https://jsonplaceholder.typicode.com/posts?_limit=10"
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limitPost,
                        },
                    }
                );
                this.totalPages = Math.ceil(
                    res.headers["x-total-count"] / this.limitPost
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
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) =>
                post1[this.selectedSort]?.localeCompare(
                    post2[this.selectedSort]
                )
            );
        },
        sortedAndSearchPosts() {
            const searchQuery = this.searchQuery.toLowerCase();
            return this.sortedPosts.filter((post) =>
                post.title.toLowerCase().includes(searchQuery)
            );
        },
    },
    watch: {
        page() {
            this.fetchPosts();
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
    max-width: 960px;
    margin: 0 auto;
}
.loading {
    display: block;
}
.app__btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.page__pagination {
    display: flex;
    margin-top: 20px;
}
.page__pagination-item {
    padding: 10px;
    border: 1px solid rgba(139, 139, 139, 0.488);
    cursor: pointer;
}
.curent-page {
    border: 1px solid rgb(125, 4, 136);
}
</style>
