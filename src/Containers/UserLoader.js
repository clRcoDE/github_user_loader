//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList ,TouchableHighlight , Image} from 'react-native';
import {connect} from 'react-redux'

// create a component
class UserLoader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.items}
                    keyExtractor={item => item.node_id}
                    renderItem={({ item, index }) =>
                        <TouchableHighlight style={styles.listElement} onPress={()=>{}} underlayColor='#ddd' >
                            <Text>{item.login}</Text>
                        </TouchableHighlight>
                    }
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
    },
    listElement:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:150,
        margin:10,
        borderRadius:5,
        elevation:5,

    }
});


const mapStateToProps = state => {
    return {
        items: state.items
    }
}
//make this component available to the app
export default connect(mapStateToProps)(UserLoader);
