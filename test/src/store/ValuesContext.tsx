import React, {createContext, useState} from 'react';

import {IValues} from '../types/valuesType'

interface IState {
    children: React.ReactNode;
}

interface IContext {
    values: IValues;
    setValues: (values: IValues) => void;
}


const initValue: IValues = {
    default_value: '',
    values: '',
    options: '',
    number: 0,
}

export const ValuesContext = createContext<IContext>({
    values: initValue,
    setValues: (values: IValues) => {
    }

})

const ValuesContextProvider: React.FC<IState> = ({children}) => {
    const [v, setV] = useState(initValue)

    const setValues = (values: IValues) => {
        setV(values)
    }

    const values = {
        values: v,
        setValues,
    }

    return (
        <ValuesContext.Provider value={values}>
            {children}
        </ValuesContext.Provider>
    )
}

export default ValuesContextProvider;