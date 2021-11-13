import React from 'react';
import { View, SafeAreaView} from 'react-native';
import Film from '../components/FilmComponent'

function FilmScreen() {
    return (
        <SafeAreaView>
            <View>
                <Film />
            </View>
        </SafeAreaView>

    )
  }

export default FilmScreen;