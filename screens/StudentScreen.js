import React from 'react';
import { Text, View, FlatList, StyleSheet, Image} from 'react-native';

const students = [
    { name: 'Student #1', fakultas: 'FIK', imageUrl: 'https://cdn.pixabay.com/photo/2019/09/23/17/29/elephants-4499210_960_720.jpg'},
    { name: 'Student #2', fakultas: 'FEB', imageUrl: 'https://cdn.pixabay.com/photo/2019/09/23/17/29/elephants-4499210_960_720.jpg'},
    { name: 'Student #3', fakultas: 'Nursing', imageUrl: 'https://cdn.pixabay.com/photo/2019/09/23/17/29/elephants-4499210_960_720.jpg'},
    { name: 'Student #4', fakultas: 'Education', imageUrl: 'https://via.placeholder.com/150/92c952'},
    { name: 'Student #5', fakultas: 'FIK', imageUrl: 'https://via.placeholder.com/150/92c952'},
    { name: 'Student #6', fakultas: 'Filsafat', imageUrl: 'https://via.placeholder.com/150/92c952'},
    { name: 'Student #7', fakultas: 'Pertanian', imageUrl: 'https://via.placeholder.com/150/92c952'},
    { name: 'Student #8', fakultas: 'ASMII', imageUrl: 'https://via.placeholder.com/150/92c952'},
    { name: 'Student #9', fakultas: 'FIK', imageUrl: 'https://via.placeholder.com/150/92c952'},
    { name: 'Student #10', fakultas: 'FIK', imageUrl: 'https://via.placeholder.com/150/92c952'}
];

const StudentScreen = () => {
    return (
        <FlatList 
            data={students}
            renderItem={({ item })=>
                <View style={styles.textStyle}>
                    <Image 
                        style={{width: 200, height: 200}}
                        source={{uri: item.imageUrl}}
                    />
                    <Text >
                        {item.name}
                    </Text>
                    <Text>
                        {item.fakultas}
                    </Text>
                </View>
                }
                
            keyExtractor={item => item.name}
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 100
    }
});

export default StudentScreen;