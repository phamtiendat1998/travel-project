import React, { Component } from 'react'
import MapUser from './MapUser';
import Axios from "axios";
import { connect } from "react-redux";
import { actSavePlaces, actSaveToPlaces } from '../../../redux/actions/place';
export class MapUserContainer extends Component {
    componentDidMount() {
        Axios.get('http://localhost:4000/places/')
            .then(res => {
                this.props.onSavePlaces(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    componentDidUpdate(prevProps) {
        const { FromPlace } = this.props;
        if (prevProps.FromPlace._id !== FromPlace._id && Object.entries(FromPlace).length !== 0) {
            Axios.get(`http://localhost:4000/places/from/${FromPlace._id}`)
                .then(res => {
                    this.props.onSaveToPlaces(res.data.data);
                    console.log(res.data.data);

                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
    render() {
        const { scale, isAnimatedPoss, isShowTemp, Places } = this.props;
        return (
            <MapUser Places={Places} isShowTemp={isShowTemp} isAnimatedPoss={isAnimatedPoss} scale={scale}>
            </MapUser>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSavePlaces: (Places) => {
            dispatch(actSavePlaces(Places));
        },
        onSaveToPlaces: (ToPlaces) => {
            dispatch(actSaveToPlaces(ToPlaces));
        }
    }
};
const mapStateToProps = (state) => {
    return {
        FromPlace: state.FromPlace,
        Places: state.Places
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapUserContainer);
