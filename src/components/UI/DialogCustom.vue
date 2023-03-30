<template>
    <div v-if="show" class="dialog" @click.stop="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";
export default {
    name: "dialog-custom",
    mixins: [toggleMixin],
};
</script>

<style>
.dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}
.dialog__content {
    margin: auto;
    border-radius: 12px;
    background-color: #fff;
    min-width: 300px;
    min-height: 50px;
    padding: 20px;
}
</style>
