import axios from "axios";
import { createStore } from "vuex";

export const postModule = {
    namespaced: true,
    state: () => ({
        posts: [],
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
    }),
    getters: {
        sortedPosts: (state) => {
            return [...state.posts].sort((post1, post2) =>
                post1[state.selectedSort]?.localeCompare(
                    post2[state.selectedSort]
                )
            );
        },
        sortedAndSearchPosts: (state, getters) => {
            return getters.sortedPosts.filter((post) =>
                post.title
                    .toLowerCase()
                    .includes(state.searchQuery.toLowerCase())
            );
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setIsPostLoading(state, bool) {
            state.isPostLoading = bool;
        },
        setSelectedSort(state, typeSort) {
            state.selectedSort = typeSort;
        },
        setSearchQuery(state, searchText) {
            state.searchQuery = searchText;
        },
        setPage(state, page) {
            state.page = page;
        },

        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
    },
    actions: {
        async loadMorePosts({ state, commit }) {
            try {
                commit("setPage", state.page + 1);
                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limitPost,
                        },
                    }
                );
                commit(
                    "setTotalPages",
                    Math.ceil(res.headers["x-total-count"] / state.limitPost)
                );

                commit("setPosts", [...state.posts, ...res.data]);
            } catch (e) {
                console.log(e);
            }
        },
        async fetchPosts({ state, commit }) {
            try {
                commit("setIsPostLoading", true);

                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limitPost,
                        },
                    }
                );
                commit(
                    "setTotalPages",
                    Math.ceil(res.headers["x-total-count"] / state.limitPost)
                );
                commit("setPosts", res.data);
            } catch (e) {
                console.log(e);
            } finally {
                commit("setIsPostLoading", false);
            }
        },
    },
    // modules: {},
};
