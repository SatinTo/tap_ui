type BaseInputProps = {
    label?: string;
    value?: string;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    errorText?: string;
    focused?: boolean;
};
export type TextInputProps = BaseInputProps & {
    type: "text";
};
export type PasswordInputProps = BaseInputProps & {
    type: "password";
    secureTextEntry?: boolean;
};
export type PhoneInputProps = BaseInputProps & {
    type: "phone";
    countryCode?: string;
};
export type InputProps = TextInputProps | PasswordInputProps | PhoneInputProps;
export {};
