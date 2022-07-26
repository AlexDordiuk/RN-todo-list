import {View, StyleSheet, TextInput, Button, Text} from "react-native";
import {useState} from "react";

const Input = () => {

    const [inputValue, setInputValue] = useState('')

    const getInputValue = () => {
        setInputValue(TextInputState)
    }

    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.inputContainer} value={inputValue} onChangeText={() => inputValue} placeholder='Напишіть, що треба зробити'/>
            <View style={styles.buttonWrap}>
                <Button title={'Додати'} onPress={getInputValue}/>
            </View>
            <Text>{inputValue}</Text>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginVertical: 8,
        paddingHorizontal: 8
    },
    inputContainer: {
        padding: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        flex: 3,
        marginRight: 8,
        borderRadius: 8
    },
    buttonWrap: {
        borderRadius: 8,
        borderColor: '#f5de5b',
        backgroundColor: '#f5de5b',
        paddingHorizontal: 8,
        flex: 1,
        color: 'red',
    },
    text: {
        color: '#fff'
    }
})