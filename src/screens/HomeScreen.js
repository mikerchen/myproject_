import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Button, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Button01 from './ButtonView';
import ImageScreen from './ImageScreen';

function HomeScreen({navigation}) {
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
      <SafeAreaView>
        <View>
            <View>
              <Button
                title="View Films"
                onPress={() =>
                navigation.navigate('Film')
                }
              />
            </View>
            <View>
              <Button
                title="Image Picker"
                onPress={() =>
                navigation.navigate('Image')
                }
              />
            </View>
        </View>
      </SafeAreaView>
    )
  }

export default HomeScreen;