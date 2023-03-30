<template>
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
    <!-- <div class="page__pagination">
            <div
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                class="page__pagination-item"
                :class="{ 'curent-page': page === pageNumber }"
                @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div> -->
    <div v-intersection="loadMorePosts" class="observer"></div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
import InputCustom from "@/components/UI/InputCustom.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    components: {
        PostForm,
        PostList,
        InputCustom,
    },
    data() {
        return {
            dialogVisible: false,
        };
    },
    methods: {
        ...mapMutations({
            setPage: "post/setPage",
        }),
        ...mapActions({
            loadMorePosts: "post/loadMorePosts",
            fetchPosts: "post/fetchPosts",
        }),
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
        // changePage(pageNumber) {
        //     this.page = pageNumber;
        // },
    },
    mounted() {
        // this.fetchPosts();
        // const options = {
        //     rootMargin: "0px",
        //     threshold: 1.0,
        // };
        // const callback = (entries, observer) => {
        //     if (entries[0].isIntersecting && this.page < this.totalPages) {
        //         this.loadMorePosts();
        //     }
        // };
        // const observer = new IntersectionObserver(callback, options);
        // observer.observe(this.$refs.observer);
    },
    computed: {
        ...mapState({
            posts: (state) => state.post.post,
            isPostLoading: (state) => state.post.isPostLoading,
            selectedSort: (state) => state.post.selectedSort,
            searchQuery: (state) => state.post.searchQuery,
            page: (state) => state.post.page,
            limitPost: (state) => state.post.limitPost,
            totalPages: (state) => state.post.totalPages,
            sortOptions: (state) => state.post.sortOptions,
        }),
        ...mapGetters({
            sortedPosts: "post/sortedPosts",
            sortedAndSearchPosts: "post/sortedAndSearchPosts",
        }),
    },
    watch: {
        // page() {
        //     this.fetchPosts();
        // },
    },
};
</script>
<style>
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
