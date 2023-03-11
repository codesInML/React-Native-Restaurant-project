import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async (searchTerm) => {
    try {
      const { data } = await yelp.get("/search", {
        params: {
          limit: 30,
          term: searchTerm,
          location: "san jose",
        },
      });
      console.log(data.businesses);
      setResults(data.businesses);
    } catch (error) {
      setErrorMessage("something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    searchAPI("pasta");
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
