import React from 'react';
import { SafeAreaView, View, Button } from 'react-native';

function HomeScreen({navigation}) {
    return (
      <SafeAreaView>
        <View>
          <Button
            title="View Films"
            onPress={() =>
            navigation.navigate('Film')
            }
          />
        </View>
      </SafeAreaView>
    )
  }

export default HomeScreen;