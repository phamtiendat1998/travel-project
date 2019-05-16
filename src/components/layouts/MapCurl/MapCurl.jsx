import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineLite, Power4, Power2, Power0 } from "gsap";
import MapUser from './../../common/Map/MapUser';
import Zoom from './../../common/Zoom/Zoom';
import ButtonTemp from './../../common/Button/ButtonTemp';

const Wrapper = styled.div`
    width: ${props => props.theme.sizeMapCurl};
    height: ${props => props.theme.sizeMapCurl};
    position: absolute;
    top:0;
    left: 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;
const Crul = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    right:0;
    bottom: 0;
    background:linear-gradient(135deg,transparent 48%,#ddd 50%,#aaa 50%,#bbb 50%,#ccc 50%, #f3f3f3 80%,#fff 100%);
    z-index:2;
    cursor:pointer;
`;
const P = styled.p`
    font-size: 1.2em;
    text-align: center;
    transform: rotate(-45deg);
    font-weight: bold;
    padding-bottom: 2em;
`;
const MapWrapper = styled.div`
    position: relative;
    border-radius: 0 0 ${props => props.theme.sizeMapIcon} 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
`;
const FeatureWrapper = styled.div`
    position: absolute;
    left: -100%;
    top: 20%;
    transform: rotate(90deg);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 3px 0px black;
    opacity: 0;
    z-index:2;
`;

export class MapCurl extends Component {
    constructor(props) {
        super(props)
        this.handleClickMapCurl = this.handleClickMapCurl.bind(this);
        this.handleMouseEnterCrul = this.handleMouseEnterCrul.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleGetValueInputRange = this.handleGetValueInputRange.bind(this);
        this.Crul = null;
        this.Wrapper = null;
        this.MapWrapper = null;
        this.FeatureWrapper = null;
        this.P = null;
        this.animaHoverCrul = null;
        this.animaClickCrul = null;
        this.animaMap = null;
        this.statusHoverCrull = true;
        this.state = {
            widthDefaultMap: '1600px',
            widthChange: '1600px'
        }
    }
    componentDidMount() {
        this.animaHoverCrul = new TimelineLite({ paused: true })
            .to(this.Wrapper, 0.5, { width: '120px', height: '120px', ease: Power4.easeOut });
        this.animaClickCrul = new TimelineLite({ paused: true })
            .to(this.P, 0.4, { autoAlpha: 0, ease: Power2.easeIn })
            .to(this.Wrapper, 0.5, { width: '100%', height: '100%', ease: Power0.easeNone })
            .to(this.Crul, 1, { x: '100%', ease: Power2.easeOut })
            .to(this.FeatureWrapper, 0.5, { left: '-4%', autoAlpha: 1, ease: Power4.easeOut });
    }
    handleClickMapCurl() {
        this.animaClickCrul.play();
        this.statusHoverCrull = false;
    }
    handleMouseEnterCrul() {
        if (this.statusHoverCrull) {
            this.animaHoverCrul.play();
        }
    }
    handleMouseLeave() {
        if (this.statusHoverCrull) {
            this.animaHoverCrul.reverse();
        }
    }
    handleGetValueInputRange(value) {
        const width = parseFloat(this.state.widthDefaultMap.split('px')[0]) * value;
        const widthChange = width + 'px';
        this.setState({
            widthChange: widthChange
        });
    }
    render() {
        const { widthChange } = this.state;
        return (
            <Wrapper ref={Wrapper => this.Wrapper = Wrapper}>
                <MapWrapper ref={MapWrapper => this.MapWrapper = MapWrapper}>
                    <MapUser width={widthChange}></MapUser>
                </MapWrapper>
                <FeatureWrapper ref={FeatureWrapper => this.FeatureWrapper = FeatureWrapper}>
                    <ButtonTemp></ButtonTemp>
                    <Zoom valueDefault="1" step="0.1" min="0.7" max="1.5" getValue={this.handleGetValueInputRange}></Zoom>
                </FeatureWrapper>
                <Crul ref={Crul => this.Crul = Crul} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnterCrul} onClick={this.handleClickMapCurl}>
                    <P ref={P => this.P = P}>Discover</P>
                </Crul>
            </Wrapper>
        )
    }
}

export default MapCurl;
