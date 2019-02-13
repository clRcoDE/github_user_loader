//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import connect from 'react-redux'

// create a component
class UserLoader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.items}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) =>
                        <View style={styles.listElement}>
                            <Text>{item.login}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999',
    },
});


const mapStateToProps = () => {
    return {
        items: state.items
    }
}
//make this component available to the app
export default connect(mapStateToProps)(UserLoader);
