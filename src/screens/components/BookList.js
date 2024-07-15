import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import books from '../../../data/books.json';

const BookList = ({ navigation }) => {
  return (
    <View>
      <FlatList 
        data={books}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity onPress={() => {
                    navigation.navigate('BookDetail', { book: item });
                }}>
                  <Text style={styles.textStyle}>{item.title}</Text>
                </TouchableOpacity>
            );
        }}
        keyExtractor={book => book.title}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default BookList;
