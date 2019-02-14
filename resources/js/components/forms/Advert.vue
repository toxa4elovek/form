<template>
    <div class="row justify-content-center mt-3">
        <div class="col-md-12">
            <form>
                <transition-group appear
                                  enter-active-class="animated bounceInRight"
                                  leave-active-class="animated bounceOutDown"
                >

                    <component v-for="(input, index) in form()"
                               :is="input.component"
                               :key="input.name"
                               :url="input.url"
                               :field="input"
                               :data-vv-name="input.name"
                               :v="fields[input.name]"
                               :error="errors.first(input.name)"
                               v-model="value[index]"
                               v-validate="input.rules"
                    ></component>

                </transition-group>

                <button type="submit" class="btn btn-primary mt-2" @click.prevent="submit">Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>
    import TextInput from '../inputs/TextInput';
    import Advert from '../../models/Advert';
    import Form from '../../forms/Advert';
    import Category from '../modals/Category';
    import Select2Wrapper from '../inputs/Select2Wrapper';

    export default {
        name: "Advert",
        props: {
            value: {
                type: Object,
                default: () => {
                    return Object.assign(Advert, {})
                }
            }
        },
        data() {
            return {
                price: 100000,
                nds: 18
            }
        },
        methods: {
            form() {
                return Form;
            },
            submit() {
                this.$validator.validateAll();
            },
        },
        components: {TextInput, Category, Select2Wrapper},
    }
</script>

<style scoped>

</style>