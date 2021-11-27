import React, { useState, useEffect } from 'react';
import { View, Image, Button } from 'react-native';

function myImage({route, navigation}) {
    const { myImage } = route.params;
    
    return(
        <View>
            {myImage && <Image source={{ uri: myImage }} style={{ width: 500, height: 600 }} />}
            <Button
            title="Choose Another Image"
            onPress={() => {
                navigation.navigate('Image', {
                returnimage: null
                });
            }}
            />
        </View>
    );
}

export default myImage