import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import {Fire} from '../../firebase/index'
import {createData} from '../../store/actions/index'

import PlaceList from '../../components/PlaceList/PlaceList'

class FindPlaceScreen extends Component {
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === 'NavBarButtonPress'){
            if (event.id === 'sideDrawerToggle'){
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }

    itemSelectedHandler = (key) => {
        // selPlace = {value, key, image}
        const selPlace = this.props.places.find(place => {
            return place.key == key
        })

        const selUsia = this.props.places.find(usia=>{
            return usia.usia == usia
        })

        console.log(selUsia);
        
        this.props.navigator.push({
            screen: 'jc8reactnative.PlaceDetailScreen',
            title: selPlace.value,
            passProps: {
                selectedPlace: selPlace,
                selectedUsia: selUsia
            }
        })
    }

    componentDidMount(){
        var places = Fire.database().ref('places')
        places.once('value', this.props.onCreateData, (err)=>{console.log(err)})
    }

    render () {  
        return (
            <View>
                <PlaceList 
                    places ={this.props.places}
                    onItemSelected={this.itemSelectedHandler}
                
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places,
        user:state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateData: items => dispatch(createData(items))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FindPlaceScreen);