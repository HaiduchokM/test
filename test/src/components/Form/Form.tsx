import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm, Controller, SubmitHandler} from 'react-hook-form';

import {FieldConfig, IValues} from "../../types/valuesType";
import {ValuesContext} from "../../store/ValuesContext";
import s from './Form.module.css'

const fieldsConfig: FieldConfig[] = [
    {
        default_value: '',
        validation: '^[a-zA-Z0-9]+$',
        type: 'text',
    },
    {
        default_value: '',
        validation: '^.{10,}$',
        type: 'longtext',
    },
    {
        default_value: '',
        options: ['Option 1', 'Option 2', 'Option 3'],
        type: 'dropdown',
    },
    {
        default_value: 25,
        min_value: 18,
        max_value: 99,
        type: 'number',
    },
];

type FormValues = {
    [key: string]: string | number;
};

function Form() {
    const navigation = useNavigate()
    const valueCtx = useContext(ValuesContext);
    const {control, handleSubmit} = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const values: IValues = {
            default_value: data.field0,
            values: data.field1,
            options: data.field2,
            number: data.field3,
        }
        
        valueCtx.setValues(values)
        navigation('/values')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form_container}>
            {fieldsConfig.map((field, index) => {
                switch (field.type) {
                    case 'text':
                    case 'longtext':
                        return (
                            <label key={index}>
                                <p>{`Field ${index + 1}`}</p>
                                <Controller
                                    name={`field${index}`}
                                    control={control}
                                    defaultValue={field.default_value || ''}
                                    rules={{
                                        pattern: field.validation ? new RegExp(field.validation) : undefined,
                                    }}
                                    render={({field: controllerField}) => (
                                        <input
                                            {...controllerField}
                                            className={s.input}
                                            type={field.type === 'text' ? 'text' : 'textarea'}
                                            placeholder={field.default_value as string}
                                            disabled={controllerField.disabled}
                                        />
                                    )}
                                />
                            </label>
                        );
                    case 'dropdown':
                        return (
                            <label key={index}>
                                <p>{`Field ${index + 1}`}</p>
                                <Controller
                                    name={`field${index}`}
                                    control={control}
                                    defaultValue={field.default_value || ''}
                                    render={({field: controllerField}) => (
                                        <select {...controllerField} className={s.select}>
                                            {field.options?.map((option, i) => (
                                                <option key={i} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                />
                            </label>
                        );
                    case 'number':
                        return (
                            <label key={index}>
                                <p>{`Field ${index + 1}`}</p>
                                <Controller
                                    name={`field${index}`}
                                    control={control}
                                    defaultValue={field.default_value || 0}
                                    rules={{
                                        min: field.min_value,
                                        max: field.max_value,
                                    }}
                                    render={({field: controllerField}) => (
                                        <input
                                            {...controllerField}
                                            className={s.input}
                                            type="number"
                                        />
                                    )}
                                />
                            </label>
                        );
                    default:
                        return null;
                }
            })}
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
