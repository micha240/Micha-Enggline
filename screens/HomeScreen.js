import React from 'react'
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <Text> Home Screen </Text>
            <Button
                title = "Go to Component Screen"
                onPress={()=> console.log("Button 1 pressed")}
            />
            <Button
                title = "Go to Student Screen"
                onPress={()=> console.log("Button 1 pressed")}
            />
        </View>
    )
}