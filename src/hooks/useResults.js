import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
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

  return [searchAPI, results, errorMessage];
};
