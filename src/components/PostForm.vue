<template>
    <form @submit.prevent>
        <h1>Создание поста</h1>
        <input
            class="input"
            v-model="post.title"
            type="text"
            placeholder="Название"
        />
        <input
            class="input"
            v-model="post.body"
            type="text"
            placeholder="Описание"
        />
        <button @click="createPost">Создать</button>
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
.input {
    height: 33px;
}
button {
    height: 33px;
    cursor: pointer;
}
</style>
