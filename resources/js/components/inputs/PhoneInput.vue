<template>
    <div :class="field.wrapperClass">
        <label :for="field.id">{{ field.label }}</label>
        <div class="row">
            <div class="col-md-8">
                <input
                        type="text"
                        :bind="value"
                        :class="[field.inputClass, (error) ? 'is-invalid' : '']"
                        :id="field.id"
                        :placeholder="field.placeholder"
                        :name="field.name"
                        v-mask="mask()"
                        @input="input($event.target.value)"
                        @focus="focus = true"
                        @blur="focus = false"
                        v-validate="field.rules"
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
    import {mask} from 'vue-the-mask'

    const MASK = '+## (###) ###-##-##';

    export default {
        name: "PhoneInput",
        mixins: [InputMixin],
        directives: {mask},
        methods: {
            mask() {
                return MASK;
            }
        }
    }
</script>

<style scoped>

</style>