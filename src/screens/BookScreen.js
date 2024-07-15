import React from 'react';
import { StyleSheet, View } from 'react-native';
import BookList from './components/BookList';

const BookScreen = ({ navigation }) => {
  return (
    <View>
      <BookList navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default BookScreen;
