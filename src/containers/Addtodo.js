import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';

export default class Addtodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todotext:""
        };
    }

    addTodo = (text) => {
        alert(text);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput onChangeText={(todotext)=> this.setState({todotext})} value={this.state.todotext}  placeholder="eg. create a new video" style={styles.textInput} />
                <TouchableOpacity onPress={()=> addTodo(this.state.text)}>
                    <View style={styles.btnCont}>
                        <Icon name="arrow-right" size={30} style={styles.btnIcon} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        marginHorizontal: 20,
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#f2f2e1',
        height: 50,
        backgroundColor: '#eaeaea',
        padding: 5
    },
    btnCont: {
        height: 50,
        borderRadius: 15,
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnIcon: {
        color: '#de9595',
        padding: 10
    }
});