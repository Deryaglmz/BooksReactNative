import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BookDetailScreen = ({ route }) => {
  const { book } = route.params;
  return (
    <View>
      <Text>{book.title} - {book.author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default BookDetailScreen;
