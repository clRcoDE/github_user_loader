//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
// create a component
class UserGetter extends Component {

    callAPI = () => {
        this.props.userLoaderHandler()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>UserGetter</Text>
                <TouchableHighlight onPress={this.callAPI.bind(this)} style={styles.tchWrapper}>
                    <Text>Get Random Github Users</Text>
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
});

//make this component available to the app
export default connect(null, { userLoaderHandler })(UserGetter);
