import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import WordDetails from './WordDetails';

const WordInput = () => {
    const [word, setWord] = useState('');
    const [showDetails, setShowDetails] = useState(false);

    const handleWordChange = (text) => {
        setWord(text);
    };
    
    const handleSearch = () => {
        setShowDetails(true);
    };
    return (
        <View >
            <View style={styles.wordInput}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleWordChange}
                    value={word}
                    placeholder="Enter a word"
                />
                <View>
                    <Button title="Search" onPress={handleSearch} />
                </View>
            </View>

            <View style={styles.container}>
                <WordDetails word={word} />
            </View>
        </View>

    );
};


const styles = StyleSheet.create({
    wordInput: {
        marginTop: 100,
        marginLeft: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        height: 40,
        width: 280,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginRight: 5,
    },

});

export default WordInput;
