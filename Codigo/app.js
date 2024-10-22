import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    TouchableOpacity,
    TextInput,
    FlatList,
    Dimensions,
  } from 'react-native';
  
  import React, { useState } from 'react';
  
  import { Ionicons } from '@expo/vector-icons';
  
  const { height, width } = Dimensions.get('window');
  
  export default function App() {
    const [list, setList] = useState([]);
    const [comment, setComment] = useState('');
  
    function addList() {
      if (comment.length === 0) return
  
      setList([ ...list, comment ]);
      setComment('');
    }
  
    function clearList() {
      setList([]);
    }
  
    function noContent() {
      return (
        <View 
          style={{ ...styles.card, backgroundColor: '#FFF',}}
        >
          <Text 
            style={styles.alert}
          >
            Não há nenhum item adicionado nessa lista
          </Text>
        </View>  
      );
    }
  
    function createCard({ item }) {
      return (
        <View 
          style={styles.card}
        >
          <Text 
            style={styles.cardText}
          >
            {item}
          </Text>
        </View>  
      );
    }
  
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor='#05215c'
          barStyle="light-content"
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>Renan Felipe da Silva Palmas - Ra: 2019203415</Text>
        </View>
        <View style={styles.content}>
          <TextInput 
            style={styles.textInput}
            value={comment}
            onChangeText={setComment}
          />
        </View>
        <View style={styles.inputOptions}>
          <TouchableOpacity
            style={styles.button}
            onPress={addList}
          >
            <Ionicons 
              name="add" 
              size={35} 
              color="#FFF"             
              style={{ alignSelf: 'center', justifyContent: 'center', padding: 3 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={clearList}
          >
            <Ionicons 
              name="md-trash-sharp" 
              size={35} 
              color="#FFF" 
              style={{ alignSelf: 'center', justifyContent: 'center', padding: 3 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <FlatList 
            data={list}
            keyExtractor={item => item.id}
            renderItem={createCard}
            ListEmptyComponent={noContent}
          />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }, header: {
      backgroundColor: '#cb7ca2',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      width: width,
      marginTop:25,
    }, headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
    }, textInput: {
      height: 40,
      width: width - 80,
      alignSelf: 'center',
      borderBottomColor: '#05215c',
      borderBottomWidth: 1,
      padding: 10,
      fontSize: 18,
    }, inputOptions: {
      flexDirection: 'row',
      justifyContent: 'center',
    }, content: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
    }, card: {
      padding: 10,
      marginVertical: 5,
      width: width - 50,
      backgroundColor: '#ed9da1',
      borderRadius: 25,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }, cardText: {
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'bold',
      alignSelf: 'center',
      marginLeft: 10,
    }, button: {
      backgroundColor: '#ed9da1',
      padding: 5,
      borderRadius: 50,
      marginVertical: 5,
      marginLeft: 85,
      marginRight:85,
    }, alert: {
      fontSize: 18,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft :25,
    }
  }); 