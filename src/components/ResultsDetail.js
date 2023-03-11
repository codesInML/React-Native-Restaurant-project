import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({
  result: { name, image_url, rating, review_count },
}) => {
  return (
    <View style={style.containerStyle}>
      <Image style={style.imageStyle} source={{ uri: image_url }} />
      <Text style={style.nameStyle}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
