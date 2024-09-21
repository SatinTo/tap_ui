import React, { useRef, useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";
import colors from '../../lib/colors';
import { asianCountryCodes } from '../../lib/asiaPhoneFormat';
import Button from '../Buttons/Button';
const Input = (props) => {
    const [internalValue, setInternalValue] = useState(props.value || "");
    const inputRef = useRef(null);
    useEffect(() => {
        setInternalValue(props.value || "");
    }, [props.value]);
    useEffect(() => {
        if (props.focused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [props.focused]);
    const handleChangeText = (text) => {
        setInternalValue(text);
        if (props.onChangeText) {
            props.onChangeText(text);
        }
    };
    const renderInput = () => {
        switch (props.type) {
            case "password":
                return (<PasswordFormInput ref={inputRef} onChangeText={handleChangeText} value={internalValue} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry} errorText={props.errorText}/>);
            case "phone":
                return (<PhoneFormInput ref={inputRef} onChangeText={handleChangeText} value={internalValue} placeholder={props.placeholder} errorText={props.errorText} countryCode={props.countryCode}/>);
            default:
                return (<TextInput ref={inputRef} style={[styles.input, props.errorText ? styles.inputError : null]} onChangeText={handleChangeText} value={internalValue} placeholder={props.placeholder}/>);
        }
    };
    return (<View style={styles.container}>
            {props.label && <Text style={styles.label}>{props.label}</Text>}
            {renderInput()}
            {props.errorText && <Text style={styles.errorText}>{props.errorText}</Text>}
        </View>);
};
const PasswordFormInput = React.forwardRef((props, ref) => {
    const [secureTextEntryState, setSecureTextEntryState] = useState(props.secureTextEntry);
    const toggleSecureTextEntry = () => {
        setSecureTextEntryState(!secureTextEntryState);
    };
    return (<View style={[styles.input, styles.passwordContainer, props.errorText ? styles.inputError : null]}>
            <TextInput ref={ref} style={styles.passwordInput} value={props.value} onChangeText={props.onChangeText} placeholder={props.placeholder} secureTextEntry={secureTextEntryState}/>
            <Button variant="link" onPress={toggleSecureTextEntry} style={styles.eyeIcon}>
                {secureTextEntryState ? <EyeIcon color={colors.grey}/> : <EyeSlashIcon color={colors.grey}/>}
            </Button>
        </View>);
});
const formatPhoneNumber = (phoneNumber, format) => {
    let formatted = '';
    let phoneIndex = 0;
    for (let i = 0; i < format.length && phoneIndex < phoneNumber.length; i++) {
        if (format[i] === '#') {
            formatted += phoneNumber[phoneIndex];
            phoneIndex++;
        }
        else {
            formatted += format[i];
        }
    }
    return formatted.trim();
};
const PhoneFormInput = React.forwardRef((props, ref) => {
    const country = asianCountryCodes[props.countryCode || 'PH'];
    const [formattedValue, setFormattedValue] = useState('');
    useEffect(() => {
        if (props.value) {
            setFormattedValue(formatPhoneNumber(props.value, country.format));
        }
    }, [props.value, country]);
    const handleChangeText = (text) => {
        const numericValue = text.replace(/\D/g, '').slice(0, country.maxLength);
        const formatted = formatPhoneNumber(numericValue, country.format);
        setFormattedValue(formatted);
        if (props.onChangeText) {
            props.onChangeText(numericValue);
        }
    };
    return (<View style={styles.phoneContainer}>
            <View style={styles.countryCode}>
                <Image source={country.badge} style={styles.flag}/>
                <Text style={styles.countryCodeText}>{country.dialCode}</Text>
            </View>
            <TextInput ref={ref} style={[styles.input, styles.phoneInput, props.errorText ? styles.inputError : null]} value={formattedValue} onChangeText={handleChangeText} placeholder={props.placeholder} keyboardType='number-pad'/>
        </View>);
});
const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 10,
    },
    input: Object.assign({ borderColor: colors.borderColor, borderWidth: 1, borderRadius: 6, paddingVertical: 15, paddingHorizontal: 15, fontSize: 16, color: "#000", height: 48 }, (Platform.OS === 'web' && {
        outlineStyle: 'none',
        boxShadow: 'none',
    })),
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 2,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
        padding: 0,
    },
    eyeIcon: {
        padding: 10,
        marginEnd: -10
    },
    phoneContainer: {
        flexDirection: 'row',
    },
    countryCode: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.borderColor,
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        paddingHorizontal: 10,
        height: 48,
    },
    flag: {
        width: 30,
        resizeMode: 'contain',
        marginRight: 5,
    },
    countryCodeText: {
        fontWeight: 'bold',
    },
    phoneInput: {
        flex: 1,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
});
export default Input;
//# sourceMappingURL=Input.js.map