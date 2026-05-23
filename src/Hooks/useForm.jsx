import { useState } from "react";

const types = {
    email: {
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Preencha um email válido'
    },

    password: {
        regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        message: 'A senha deve ter no mínimo 8 caracteres, com maiúsculas, minúsculas, números e símbolos.'
    },

    number: {
        regex: /^\d+$/,
        message: 'Utilize apenas números.'
    },
};
const useForm = (type) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    function validate(value) {
        if (type === false) return true;
        if (value.length === 0) {
            setError('Preencha um valor.');
            return false;
        }
        else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        }
        else {
            setError(null);
            return true;
        };
    };

    function onChange({ target }) {
        if (error) validate(target.value);
        setValue(target.value);
    };

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    };
};

export default useForm;