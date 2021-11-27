import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, BackgroundImage, ImageBackground, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageScreen({navigation, route}) {

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4,3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



  return (
    <View style={{alignItems: 'center', justifyContent: 'center' }}>
        {/* <ImageBackground source={{url: image}} style={{ width: 500, height: 800}}> */}
      <Button title="Choose an image" onPress={pickImage} style={{backgroundColor: 'white'}} />
      <Text style={{color: 'white'}}>{image ? "Image Uploaded. Click View my Image to View" : "No Image Selected. Choose Image"}</Text>
        <Button 
            title="View My Image"
            onPress={() => {
                navigation.navigate('MyImage', {
                    myImage: image
                });
            }}
        />
      {/* </ImageBackground> */}
    </View>
  );
}
