import Field from '../models/Field'

export default {
    props: {
        field: {
            type: Object,
            default: () => {
                return Object.assign({}, Field)
            }
        },
        value: {
            type: String
        },
        v: {

        },
        error: {}
    }
}