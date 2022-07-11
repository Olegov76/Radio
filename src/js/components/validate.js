import { validateForms } from '../functions/validate-forms';
const rules = [{
        ruleSelector: '.input-name',
        rules: [{
            rule: 'required',
            value: true,
            errorMessage: 'Заполните имя!'
        }],
        rules: [{
            rule: 'email',
            value: true,
            errorMessage: 'Недопустимый формат'
        }]
    },
    {
        ruleSelector: '.input-email',
        rules: [{
            rule: 'required',
            value: true,
            errorMessage: 'Заполните Email'
        }],
        rules: [{
            rule: 'email',
            value: true,
            errorMessage: 'Введите корректный Email'
        }]
    },
];
const afterForm = () => {
    console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.abaut__form', rules, afterForm);
