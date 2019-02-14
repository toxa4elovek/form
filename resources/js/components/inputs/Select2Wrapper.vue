<template>
    <div :class="field.wrapperClass">
        <label :for="field.id">{{ field.label }}</label>
        <div class="row">
            <div class="col-md-8">
                <select
                        ref="select"
                        :id="field.id"
                        :name="field.name"
                        :bind="value"
                        :class="[field.inputClass]"
                        v-validate="field.rules"
                >
                    <slot></slot>
                </select>
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
        name: "Select2Wrapper",
        props: {
            url: {
                type: String
            }
        },
        mounted: function () {
            const vm = this;

            $(this.$refs.select)
                .select2({
                    placeholder: this.field.placeholder,
                    ajax: {
                        url: this.url,
                        dataType: 'json'
                    }
                })
                .val(this.value)
                .trigger('select2:select')
                .on('select2:select', function () {
                    vm.$emit('input', this.value);
                })
                .on('select2:open', function () {
                    vm.focus = true;
                })
                .on('select2:close', function () {
                    vm.focus = false;
                    vm.$emit('blur');
                });

            // this.focusEvent();
        },
        watch: {
            value: function (value) {
                $(this.$el)
                    .val(value)
                    .trigger('select2:select')
            }
        },
        destroyed: function () {
            $(this.$el).off().select2('destroy')
        },
        mixins: [InputMixin]
    }
</script>

<style scoped>

</style>