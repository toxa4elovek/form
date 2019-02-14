<template>
    <div class="row">
        <div v-if="!rootSelected" v-for="category in categories" class="col-md-3">
            <a href="#" @click.prevent="select(category, 'rootSelected')">
                <img :src="category.image" alt="" class="w-100">
                {{ category.name }}
            </a>
        </div>

        <div class="col-md-4" v-if="rootSelected">
            <div class="list-group">
                <a href="#"
                   class="list-group-item list-group-item-action"
                   v-for="category in categories"
                   :class="{active: rootSelected.id === category.id}"
                   @click.prevent="select(category, 'rootSelected')"
                >
                    {{ category.name }}
                </a>
            </div>
        </div>

        <div class="col-md-4" v-if="rootSelected">
            <div class="list-group">
                <a href="#"
                   class="list-group-item list-group-item-action"
                   v-for="category in rootSelected.children"
                   :class="{active: (middleSelected && middleSelected.id === category.id)}"
                   @click.prevent="select(category, 'middleSelected')"
                >
                    {{ category.name }}
                </a>
            </div>
        </div>

        <div class="col-md-4" v-if="middleSelected">
            <div class="list-group">
                <a href="#"
                   class="list-group-item list-group-item-action"
                   v-for="category in middleSelected.children"
                   :class="{active: selected && selected.id === category.id}"
                   @click.prevent="prepare(category)"
                >
                    {{ category.name }}
                </a>
            </div>
        </div>
    </div>

</template>

<script>
    import InputEvent from '../../mixins/InputEvent';

    export default {
        name: "CategorySelect",
        props: {
            categories: Array,
            default: []
        },
        data() {
            return {
                selected: null,
                rootSelected: null,
                middleSelected: null
            }
        },
        methods: {
            select(category, property) {
                this[property] = category;
            },
            prepare(category) {
                let name = this.rootSelected.name + ' - ' + this.middleSelected.name + ' - ' + category.name;
                this.selected = category;

                this.input({id: category.id, name: name});
            }
        },
        mixins: [InputEvent],
        watch: {
            rootSelected() {
                this.middleSelected = null;
                this.selected = null;
            },
            middleSelected() {
                this.selected = null;
            }
        }
    }
</script>

<style scoped>

</style>