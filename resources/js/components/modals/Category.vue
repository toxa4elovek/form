<template>
    <div>
        <!-- Button trigger modal -->
        <div class="row">
            <div class="col-md-2">
                <label :for="field.id">{{ field.label }}</label>
            </div>
            <div class="col-md-6">
                <a href="#" :class="{'text-danger': !!error}" data-toggle="modal" :data-target="'#' + field.id">{{ selectedLabel }}</a>
            </div>
            <div class="col-md-4">
                <form-alerts
                        :show-error="!!error"
                        :show-hint="false"
                        :error="error"
                        :hint="field.hint"
                ></form-alerts>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" ref="modal" :id="field.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">{{ field.placeholder }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <category-select :categories="categories" @input="input"></category-select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                        <button type="button" class="btn btn-primary">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CategorySelect from '../inputs/CategorySelect'
    import InputProps from  '../../mixins/InputProps'
    import FormAlerts from '../alerts/FormAlerts';

    export default {
        name: "Category",
        props: {
            categories: {
                type: Array,
                default: () => {
                    return categories;
                }
            },
            value: {
                type: Number
            },
            error: {
                type: String
            }
        },
        data() {
            return {
                selectedLabel: this.field.placeholder,
            }
        },
        methods: {
            input(value) {
                this.selectedLabel = value.name;
                $(this.$refs.modal).modal('hide');
                this.$emit('input', value.id);
            }
        },
        mounted(){
            const vm = this;

            $(this.$refs.modal).on('hidden.bs.modal', function (e) {
                vm.$emit('blur');
            })
        },
        components: {CategorySelect, FormAlerts},
        mixins: [InputProps]
    }
</script>

<style scoped>

</style>