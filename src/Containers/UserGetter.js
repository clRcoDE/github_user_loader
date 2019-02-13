//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
import {userLoaderHandler} from '../Services/Actions/action'
// create a component
class UserGetter extends Component {

    callAPI = () => {
        this.props.userLoaderHandler()
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.callAPI.bind(this)} style={styles.tchWrapper}>
                    <Text style={styles.tchstyle}>Get Random Github Users</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

// define styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    tchWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,

    },
    tchstyle:{
        color:'#ddd',
        fontWeight: '600',
        fontSize:20
    }
});

//make this component available to the app
export default connect(null, { userLoaderHandler })(UserGetter);
