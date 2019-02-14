const INPUT_EVENT = 'input';
const BLUR_EVENT = 'blur';
const FOCUS_EVENT = 'focus';

export default {
    methods: {
        input(value){
            this.$emit(INPUT_EVENT, value)
        },
        focusEvent(){
            this.focus = true;
            this.$emit(FOCUS_EVENT);
        },
        blurEvent() {
            this.focus = false;
            this.$emit(BLUR_EVENT);
        }
    }
}