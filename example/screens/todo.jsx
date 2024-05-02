import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/customButton';
import TodoItem from '../components/todoItem';
import {addItem} from '../store/actions/todoActions';

const Todo = () => {
  // böyle de çağırabiliriz
  const {todo} = useSelector(state => state.todo);
  // inputa yazılan metni tut
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  return (
    // elemanların görünmesi için ekranı kaplasın dememiz gerek. o yüzden flex:1
    <SafeAreaView style={{flex: 1}}>
      <View>
        <TextInput
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          // HER TUŞ VURUŞUMUZDA DEĞİŞEN METNİ ALIYOR onChangeText !!
          style={{
            backgroundColor: '#f1f1f1',
            height: 50,
            fontSize: 18,
            margin: 10,
            borderRadius: 6,
            paddingHorizontal: 14,
          }}
          placeholder="enter todo..."
        />
        <CustomButton
          title="Add Todo"
          color="rebeccapurple"
          onPress={() =>
            dispatch(addItem({id: todo.length, todoTitle: newTodo}))
          }
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={todo}
          // data'ya verdiğimiz {todo}'ların başlığını getirmiş olduk.
          renderItem={({item}) => <TodoItem item={item} />}
          ListEmptyComponent={()=> <Text style={{fontSize:18, fontWeight:"500", textAlign:"center"}}>your todo list empty :/</Text>} // boşken göster
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 4,
  },
});

export default Todo;
