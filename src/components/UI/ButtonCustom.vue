<template>
    <button class="btn"><slot></slot></button>
</template>
<script>
export default {
    name: "button-custom",
};
</script>
<style scoped>
.btn {
    height: 33px;
    cursor: pointer;
    background: none;
    border: 1px solid #8000c9;
    color: #8000c9;
    padding: 10px 15px;
}
</style>
