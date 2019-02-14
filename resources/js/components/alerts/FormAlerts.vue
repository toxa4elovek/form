<template>
    <div>
        <transition-group
                enter-active-class="animated fadeInRight"
                leave-active-class="animated fadeOutRight"
        >
            <div class="alert alert-success" v-if="showHint && !!hint" role="alert" v-html="hint" :key="'hint'"></div>
            <div class="alert alert-danger" role="alert" v-else-if="showError" :key="'error'">
                {{ error }}
            </div>
        </transition-group>

    </div>
</template>

<script>
    export default {
        name: "FormAlerts",
        props: {
            showError: {
                type: Boolean,
                default: false
            },
            showHint: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            },
            hint: {
                type: String
            },
        }
    }
</script>

<style scoped>
    .alert {
        padding: 0.4rem 1.25rem;
        margin-bottom: 0;
        position: absolute;
        z-index: 2;
    }

    .alert-success {
        z-index: 3;
    }
</style>