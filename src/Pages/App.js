//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Services/Reducers/rootReducer';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import UserGetter from '../Containers/UserGetter';
import UserLoader from '../Containers/UserLoader';


//  another way to create store
// export const store = createStore(rootReducer,applyMiddleware(thunk))



createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
export const store = createStoreWithMiddleware(rootReducer)



// create a component
class App extends Component {
    render() {
        return (
            <Provider store={store} style={styles.container} >
                <UserGetter />
                <UserLoader />
            </Provider>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default App;
