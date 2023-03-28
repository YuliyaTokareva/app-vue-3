<template>
    <select :value="selectedValue" @input="changeOption" class="select__block">
        <option disabled value="">Do sort</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: "select-custom",
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            selectedValue: this.modelValue,
        };
    },
    methods: {
        changeOption(event) {
            this.selectedValue = event.target.value;
            this.$emit("update:modelValue", this.selectedValue);
        },
    },
};
</script>

<style>
.select__block {
    cursor: pointer;
    background: none;
    border: 1px solid #8000c9;
    color: #8000c9;
    padding: 10px 15px;
}
</style>
