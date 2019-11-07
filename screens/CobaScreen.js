import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, Button, Alert} from 'react-native';
import Constants from 'expo-constants';

const bunga = [
    
    { name: 'Bunga Rafflesia', imageUrl: 'https://cdn2.tstatic.net/jambi/foto/bank/images/rafflesia-arnoldii-atau-bunga-padma-raksasa_20180109_061038.jpg', Description: 'Deskripsi: Bunga langkah berwarna merah'},
    { name: 'Bunga Ghost Orchid', imageUrl: 'https://clydebutcher.com/wp-content/uploads/2015/10/ghost-dancing-4x6.jpg', Description: 'Deskripsi: Bunga yang berbentuk seperti hantu dan berwarna putih'},
    { name: 'Bunga Middlemist Camellia', imageUrl: 'https://i.pinimg.com/originals/71/c4/ab/71c4abfb2c623ff58fab3e05fec33e1f.jpg', Description: 'Deskripsi: Bunga berwarna merah dengan ukuran bunga yang teratur'},
    { name: 'Bunga Chocolate Cosmos', imageUrl: 'https://d6p0gevo8s9lm.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/5/9556B33DA324630631EEE1ED7F52E965.jpg', Description: 'Deskripsi: Berwarna Merah tua dan berbentuk kecil-kecil'},
    { name: 'Bunga Edelweis', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcB4RbxQMnmM-Bwpldd93MHxGLVINCpDWeY5iaSChngtkDNCrV', Description: 'Deskripsi: Bunga yang hanya ditemui di perbukitan atau gunung, dan bunga ini bersifat abadi'},
   
];

const CobaScreen = () => {
    return (
        
        <FlatList 
            data={bunga}
            renderItem={({ item })=>
                
                <View style={styles.textStyle}>
                    <Image 
                        style={{width: 378, height: 340}}
                        source={{uri: item.imageUrl}}
                    />
                    
                    <Button
                        color="#f194ff"
                        title={item.name}
                        onPress={() => Alert.alert(item.Description)}
                    />
                    
                    
                </View>
                }
                
                
            keyExtractor={item => item.name}
            
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        textAlign: 'center',
        marginVertical: 8,
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
    },    
});

export default CobaScreen;