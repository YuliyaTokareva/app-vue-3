<template>
    <input type="text" class="input" :value="value" @input="updateInput" />
</template>
<script>
export default {
    name: "input-custom",
    props: {
        value: [String, Number],
    },
    methods: {
        updateInput(e) {
            const trimmedValue = e.target.value.trim();
            this.$emit("update:value", trimmedValue);
        },
    },
};
</script>
<style scoped>
.input {
    height: 33px;
}
</style>
