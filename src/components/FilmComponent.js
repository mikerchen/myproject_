import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FILMS } from '../data/films'

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: FILMS
        };
    }

    static navigationOptions = {
        title: 'Films'
    };

    render() {
        const renderFilmItem = ({item}) => {
            return (
                <ListItem
                    title={item.title}
                    subtitle={
                        <Text>
                            {item.director} - {item.year}
                        </Text>
                    }
                />    
            );
        }
    
    return (
        <FlatList 
            data={this.state.films}
            renderItem={renderFilmItem}
            keyExtractor={item => item.id.toString()}
        />
    )

    }

}

export default Film;