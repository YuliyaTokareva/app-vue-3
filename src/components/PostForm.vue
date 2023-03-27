<template>
    <form @submit.prevent>
        <h1>Create post</h1>
        <input-custom
            class="input"
            v-model:value="post.title"
            type="text"
            placeholder="Title"
        />
        <input-custom
            class="input"
            v-model:value="post.body"
            type="text"
            placeholder="Description"
        />
        <button-custom @click="createPost" style="align-self: flex-end"
            >Add</button-custom
        >
    </form>
</template>
<script>
export default {
    data() {
        return {
            post: {
                title: "",
                body: "",
            },
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post, "some param");
            this.post = {
                title: "",
                body: "",
            };
        },
    },
};
</script>
<style scoped>
form {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
}
</style>
