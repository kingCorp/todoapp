import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Addtodo from './containers/Addtodo';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos:[],
        visibilityFilter: 'SHOW_ALL_TODOS'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Addtodo />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40 ,
      backgroundColor: '#F5FCFF',
    }
  });