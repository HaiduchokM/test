import {useContext} from "react";

import {ValuesContext} from "../../store/ValuesContext";
import s from './Values.module.css'

const Values = () => {

    const valuesCtx = useContext(ValuesContext);

    const {default_value, values, number, options} = valuesCtx.values

    return (
        <div className={s.container}>
            <p>default value: {default_value}</p>
            <p>values: {values}</p>
            <p>options: {options}</p>
            <p>number value: {number}</p>
        </div>
    );
};

export default Values;