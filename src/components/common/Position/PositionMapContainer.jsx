import React, { Component } from 'react';
import PositionMap from './PositionMap';
import { connect } from "react-redux";
import { actSaveFromPlace, actRemoveFromPlace } from './../../../redux/actions/place';
export class PositionMapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        }
    }
    getFromPlace = () => {
        const { Place, onSaveFromPlace } = this.props
        onSaveFromPlace(Place);
    }
    removeFromPlace = () => {
        const { onRemoveFromPlace } = this.props;
        onRemoveFromPlace();
    }
    componentWillReceiveProps(nextProps) {
        const { Place } = this.props;
        if (Object.entries(nextProps.FromPlace).length === 0) {
            this.setState({ type: 0 });
        } else if (nextProps.FromPlace._id === Place._id) {
            this.setState({ type: 'from' });
        } else {
            this.setState({ type: 'to' });
        }
    }
    componentDidMount() {
        const { FromPlace, Place } = this.props
        if (Object.entries(FromPlace).length === 0) {
            return;
        } else if (FromPlace._id === Place._id) {
            this.setState({ type: 'from' });
        } else {
            this.setState({ type: 'to' });
        }
    }
    render() {
        const { Place, delay, isAnimated, isShowTemp } = this.props;
        const { type } = this.state;
        return (
            <PositionMap Place={Place} delay={delay} type={type} isAnimated={isAnimated} isShowTemp={isShowTemp} getFromPlaceParent={this.getFromPlace} removeFromPlaceParent={this.removeFromPlace}>
            </PositionMap>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSaveFromPlace: (FromPlace) => {
            dispatch(actSaveFromPlace(FromPlace));
        },
        onRemoveFromPlace: () => {
            dispatch(actRemoveFromPlace());
        }
    }
}
const mapStateToProps = (state) => {
    return {
        FromPlace: state.FromPlace,
        ToPlaces: state.ToPlaces
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PositionMapContainer);
