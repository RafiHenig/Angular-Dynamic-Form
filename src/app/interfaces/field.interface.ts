export interface Validator {
    name: string;
    validator: any;
    message: string;
}
export interface FieldConfig {
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    type:  "input" | "button" | "select" | "date" | "radiobutton" | "checkbox";
    value?: any;
    validations?: Validator[];
}

