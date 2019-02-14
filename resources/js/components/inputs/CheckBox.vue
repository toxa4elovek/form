<template>
    <div :class="field.wrapperClass">
        <input
                type="checkbox"
                :class="field.inputClass"
                :bind="value"
                :id="field.id"
                :name="field.name"
                @input="input($event.target.checked)"
        >
        <label class="form-check-label" :for="field.id">{{ field.label }}</label>
    </div>
</template>

<script>
    import InputMixin from '../../mixins/InputMixin';

    export default {
        name: "CheckBox",
        props: {
            value: {
                type: Boolean,
                default: false
            },
        },
        mixins: [InputMixin],
    }
</script>

<style scoped>

</style>