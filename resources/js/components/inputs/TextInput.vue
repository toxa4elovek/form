<template>
    <div :class="field.wrapperClass">
        <label :for="field.id">{{ field.label }}</label>
        <div class="row">
            <div class="col-md-8">
                <input
                        type="text"
                        :value="value"
                        :class="[field.inputClass, (error) ? 'is-invalid' : '']"
                        :id="field.id"
                        :placeholder="field.placeholder"
                        :name="field.name"
                        @input="input($event.target.value)"
                        @focus="focusEvent()"
                        @blur="blurEvent()"
                >
            </div>
            <div class="col-md-4">
                <form-alerts
                        :show-error="!!error"
                        :show-hint="focus && !error"
                        :error="error"
                        :hint="field.hint"
                ></form-alerts>
            </div>
        </div>

    </div>
</template>

<script>
    import InputMixin from '../../mixins/InputMixin';

    export default {
        name: "TextInput",
        mixins: [InputMixin],
    }
</script>

<style scoped>

</style>