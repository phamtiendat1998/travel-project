import React, { Component } from 'react'
import MapUser from './MapUser';
import Axios from "axios";
import { connect } from "react-redux";
import { actSavePlaceList } from '../../../redux/actions/place';
export class MapUserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Places: []
        }
    }

    componentWillMount() {
        Axios.get('http://localhost:4000/places/')
            .then(res => {
                this.props.onSavePlaceList(res.data.data);
                this.setState({ Places: res.data.data });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        const { scale, isAnimatedPoss, isShowTemp } = this.props;
        const { Places } = this.state;
        return (
            <MapUser Places={Places} isShowTemp={isShowTemp} isAnimatedPoss={isAnimatedPoss} scale={scale}>
            </MapUser>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSavePlaceList: (PlaceList) => {
            dispatch(actSavePlaceList(PlaceList));
        }
    }
};
export default connect(null, mapDispatchToProps)(MapUserContainer);
