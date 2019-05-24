import React, { Component } from 'react'
import { ScrollView, View, TextInput, Button, StyleSheet } from 'react-native'

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'

class PlaceInput extends Component {

    placeNameChangedHandler = (val) => {
        this.setState({ placeName: val })
    }

    render() {
        return (
            <DefaultInput
                    placeholder='Name'
                    value={this.props.placeName}
                    onChangeText={this.props.onChangeText}
                />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: '100%',
        height: '100%'
    }
})

export default PlaceInput;