

import React, { Component } from 'react';
import Index from './page/index.js';

var {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
} = React;




export  default  class Main extends Component{

    render() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{
                    title: '首页',
                    component: Index,
                }}
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});