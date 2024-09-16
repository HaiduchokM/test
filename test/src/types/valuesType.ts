type FieldType = 'text' | 'longtext' | 'dropdown' | 'number';

export interface FieldConfig {
    default_value?: string | number;
    validation?: string;
    min_value?: number;
    max_value?: number;
    options?: string[] | number[];
    type: FieldType;
}

export interface IValues {
    default_value: string | number,
    values: string | number,
    options: string | number,
    number: string | number,
}