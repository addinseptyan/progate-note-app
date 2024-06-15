import React from 'react'
import { TextInput, Text, StyleSheet, View } from 'react-native'

const CustomTextInput = ({
    text, onChange, label, multiline, numberOfLines, placeholder
}) => {
    const styles = StyleSheet.create({
        textInputWrapper: {
            marginTop: 20,
        },
        input: {
            borderWidth: 2,
            borderColor: '#ddd',
            padding: 10,
        },
    })

    return (
        <View style={styles.textInputWrapper}>
            <Text>{label}</Text>
            <TextInput
                multiline={multiline}
                numberOfLines={numberOfLines}
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChange}
                defaultValue={text}
            />
        </View>
    )
}

export default CustomTextInput