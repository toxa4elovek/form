<template>
    <div>
        <div class="col-md-8">
            <div class="row">
                <div class="col-md-4 mb-2" v-for="(file, index) in this.value">
                    <div class="card w-100">
                        <div class="card-header">
                            {{ file.name }}
                            <button type="button" class="close" @click.prevent="drop(index)">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <img class="card-img" :src="preview(file)">
                    </div>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div :class="field.wrapperClass">
                    <label :for="field.id">{{ field.label }}</label>
                    <div class="custom-file">
                        <input
                                accept="image/*"
                                type="file"
                                :bind="value"
                                :class="[field.inputClass, (error) ? 'is-invalid' : '']"
                                :id="field.id"
                                :name="field.name"
                                :multiple="true"
                                @input="change($event)"
                                @focus="focus = true"
                                @blur="focus = false"
                        >
                        <label class="custom-file-label" :for="field.id">Выберите файлы</label>
                    </div>
                </div>
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
        name: "FileInput",
        props: {
            value: {
                type: Array
            }
        },
        methods: {
            change(e) {
                for (let i = 0; i < e.target.files.length; i++) {
                    let file = e.target.files.item(i);
                    this.value.push(file);
                    this.input(this.value);
                }
            },
            preview(file) {

                return URL.createObjectURL(file)
            },
            drop(index) {
                this.value.splice(index, 1);
                this.input(this.value);
            },
            getValue(){
                let result = [];

                for (let i in this.value) {
                    result.push(this.value[i].name);
                }

                return result;
            }
        },
        mixins: [InputMixin],
    }
</script>

<style scoped>
    .custom-file-label::after {
        content: 'Выберите файлы'
    }
</style>