import Field from '../models/Field';
import TextInput from '../components/inputs/TextInput';
import Textarea from '../components/inputs/Textarea';
import PhoneInput from '../components/inputs/PhoneInput';
import EmailInput from '../components/inputs/EmailInput';
import Category from '../components/modals/Category';
import FileInput from '../components/inputs/FileInput';
import Select2Wrapper from '../components/inputs/Select2Wrapper';
import CheckBox from '../components/inputs/CheckBox';

const CITY_SEARCH_URL = '/city/search';

export default {
    title: Object.assign({}, Field, {
        id: 'title',
        name: 'title',
        label: 'Заголовок',
        component: TextInput,
        inputClass: 'form-control',
        wrapperClass: 'form-group',
        placeholder: 'Введите заголовок',
        rules: {
            required: true,
            max: 255
        },
        hint: '<b>Введите наименование товара, объекта или услуги.</b><br>В заголовке <b>не допускается: номер телефона, электронный адрес, ссылки</b><br>Не допускаются заглавные буквы (кроме аббревиатур).'
    }),
    category: Object.assign({}, Field, {
        name: 'category',
        id:'category',
        label: 'Категория',
        component: Category,
        inputClass: 'form-control',
        wrapperClass: 'form-group',
        placeholder: 'Выберите категорию',
        rules: {
            required: true,
        },
        hint: ''
    }),
    description: Object.assign({}, Field, {
        id: 'description',
        name: 'description',
        label: 'Описание',
        component: Textarea,
        inputClass: 'form-control',
        wrapperClass: 'form-group',
        placeholder: 'Введите описание',
        rules: {
            required: true,
            max: 1000
        },
        hint: '<b>Добавьте описание вашего товара/услуги,</b> укажите преимущества и важные детали.<br>В описании <b>не допускается указание контактных данных.</b><br>Описание должно соответствовать заголовку и предлагаемому товару/услуге.<br>Не допускаются заглавные буквы (кроме аббревиатур).'
    }),
    price: Object.assign({}, Field, {
        id: 'price',
        name: 'price',
        label: 'Цена',
        component: TextInput,
        inputClass: 'form-control',
        wrapperClass: 'form-group',
        placeholder: 'Введите цену',
        rules: {
            required: true,
            numeric: true
        },
        hint: 'Пожалуйста, укажите цену. <b>Обратите внимание, что указание нереальной или условной цены (1 руб., 111 руб.) запрещено.</b></br><b>Внимание, цена указывается в российских рублях</b>'
    }),
    photos: Object.assign({}, Field, {
        id: 'photos',
        inputClass: 'custom-file-input',
        wrapperClass: 'form-group',
        name: 'photos',
        label: 'Фотографии',
        component: FileInput,
        placeholder: 'Выберите файлы',
        rules: {
            image: true
        }
    }),
    city: Object.assign({}, Field, {
        id: 'city',
        name: 'city',
        label: 'Город',
        component: Select2Wrapper,
        placeholder: 'Начните вводить город',
        inputClass: 'form-control',
        wrapperClass: 'form-group',
        url: CITY_SEARCH_URL,
        rules: {
            required: true
        },
        hint: 'Выберите город из списка'
    }),
    name: Object.assign({}, Field, {
        id: 'name',
        name: 'name',
        label: 'Имя',
        component: TextInput,
        inputClass: 'form-control',
        wrapperClass: 'form-group',
        placeholder: 'Введите ваше имя',
        rules: {
            required: true,
            alpha: true
        },
        hint: 'Как к Вам обращаться?'
    }),
    phone: Object.assign({}, Field, {
        id: 'phone',
        name: 'phone',
        label: 'Телефон',
        component: PhoneInput,
        inputClass: 'form-control',
        wrapperClass: 'form-group',
        placeholder: 'Введите ваш телефон',
        rules: {
            required: true,
            min: 19
        },
        hint: 'Как с Вами связаться?'
    }),
    email: Object.assign({}, Field, {
        id: 'email',
        name: 'email',
        label: 'Email',
        component: EmailInput,
        placeholder: 'Введите ваш email-адрес',
        inputClass: 'form-control',
        wrapperClass: 'form-group',
        rules: {
            required: true,
            email: true
        },
        hint: 'Вы можете указать публичный емейл в личном кабинете'
    }),
    agreed: Object.assign({}, Field, {
        id: 'agreed',
        name: 'agreed',
        inputClass: 'form-check-input',
        wrapperClass: 'form-check',
        label: '* Я соглашаюсь с правилами использования сервиса, а также с передачей и обработкой моих данных на RUB-ON. Я подтверждаю своё совершеннолетие и ответственность за размещение объявления',
        component: CheckBox,
        hint: '',
        rules: {
            required: true,
            is: true
        }
    }),
}