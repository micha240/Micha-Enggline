import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ComponentScreen = () => {

    const myName = 'John Doe';
    const helloWorld = <Text>Hello World</Text>;

    return (
        <View>
            <Image 
                style={{width: 50, height: 50}}
                source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
            />
            <Text style={styles.textStyle}> 
                This is component Screen 
            </Text>
            <Text style={styles.textStyle2}>
                {myName}
            </Text>
            {helloWorld}
        </View> 
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 26,
        color: 'green'
    },
    textStyle2: {
        fontSize: 26,
        color: 'red'
    }
});

export default ComponentScreen;


