<template>
    <div :class="field.wrapperClass">
        <label :for="field.id">{{ field.label }}</label>
        <div class="row">
            <div class="col-md-8">
                <textarea
                        rows="3"
                        :class="[field.inputClass, (!!error) ? 'is-invalid' : '']"
                        :id="field.id"
                        :name="field.name"
                        :placeholder="field.placeholder"
                        @input="input($event.target.value)"
                        @focus="focusEvent"
                        @blur="blurEvent"
                        v-validate="field.rules"
                ></textarea>
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
        name: "Textarea",
        mixins: [InputMixin]
    }
</script>

<style scoped>

</style>