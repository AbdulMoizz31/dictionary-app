import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import axios from "axios";

const API_KEY = "7de11bf2-f8c8-4377-a113-fba1613154e2";

const WordDetails = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [word, setWord] = useState("");
  const [pronounciation, setPronounciation] = useState("");
  const [definition, setDefinition] = useState("");
  const [wordType, setwordType] = useState("");
  const [offensive, setOffensive] = useState("");

  const handleSearch = () => {
    setShowDetails(true);
  };

  const fetchWordData = async () => {
    try {
      setIsLoading(true);
      const response = await axios
        .get(
          `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY}`
        )
        .then((response) => {
          const data = response.data[0];

          setPronounciation(data.hwi.hw);
          setDefinition(data.shortdef[0]);
          setwordType(data.fl);
          setOffensive(data.meta.offensive ? "Offensive" : "Not offensive");
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wordinput}>
        <TextInput
          placeholder="Seach here"
          style={styles.input}
          onChangeText={setWord}
          onSubmitEditing={() => {
            handleSearch();
            fetchWordData();
          }}
          value={word}
        />

        <Pressable
          onPress={() => {
            handleSearch();
            fetchWordData();
          }}
        >
          <Text style={styles.searchButton}>Go!</Text>
        </Pressable>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        showDetails && (
          <View>
            <Text style={styles.word}>{pronounciation}</Text>
            <Text style={styles.headings}>Definition:</Text>
            <Text style={styles.details}>{definition}</Text>
            <Text style={styles.headings}>Word Type:</Text>
            <Text style={styles.details}>{wordType}</Text>
            <Text style={styles.headings}>Offensive:</Text>
            <Text style={styles.details}>{offensive}</Text>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: 650,
  },

  headings: {
    fontWeight: "300",
    fontSize: 30,
    marginBottom: 5,
  },
  word: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 5,
  },
  wordinput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    fontSize: 30,
    height: 50,
    width: 280,
    borderLeftWidth: 2,
    // borderRadius: 10,
    paddingLeft: 10,
  },
  searchButton: {
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 23,
    fontWeight: "400",
    backgroundColor: "#F4F3EE",
    textAlign: "center",
    height: 35,
    width: 55,
  },
  details: {
    fontSize: 15,
    margin: 5,
  },
});

export default WordDetails;

// import React, { useState, useEffect } from 'react';
// import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native';

// const WordDetails = () => {
//   const [details, setDetails] = useState(null);
//   const [word, setWord] = useState('');

//   const handleWordChange = (text) => {
//     setWord(text);
// };

//   // useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const response = await fetch(
//           `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=7de11bf2-f8c8-4377-a113-fba1613154e2`
//         );
//         const data = await response.json();
//         const result = data[0];
//         const { shortdef, fl, meta } = result;
//         const offensive = meta.offensive ? 'Offensive' : 'Not offensive';
//         const definition = shortdef ? shortdef[0] : 'No definition found';
//         setDetails({ definition, wordType: fl, offensive });
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     // fetchDetails();
//   // }, [word]);

//   if (!details) {
//     return <Text> No data found </Text>;
//   }

//   const { definition, wordType, offensive } = details;

//   return (

//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder='Enter a word'
//         value={word}
//         onChangeText={setWord}
//          />
//       <Text style={styles.word}>{word}</Text>
//       <Text style={styles.heading}>Definition:</Text>
//       <Text>{definition}</Text>
//       <Text style={styles.heading} >wordType:</Text>
//       <Text>{wordType}</Text>
//       <Text style={styles.heading}>Offensive:</Text>
//       <Text>{offensive}</Text>
//     </View>

//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   heading: {
//     fontWeight: 'bold',

//   },
//   word: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   input: {
//     height: 50,
//     width: 280,
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingLeft: 10,
//     marginRight: 5,
//   },
// });

// export default WordDetails;

// {
//   "cli": {
//     "version": ">= 3.10.2"
//   },
//   "build": {
//     "development": {
//       "developmentClient": true,
//       "distribution": "internal"
//     },
//     "preview": {
//       "distribution": "internal"
//     },
//     "production": {}
//   },
//   "submit": {
//     "production": {}
//   }
// }
