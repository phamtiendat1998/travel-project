import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineLite, Power4, Power2, Power0 } from "gsap/all";
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
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    transition: all 0.5s;
`;
const FeatureWrapper = styled.div`
    position: absolute;
    left: -100%;
    top: 20%;
    transform: rotate(-90deg);
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
        this.handleActionAnimationPos = this.handleActionAnimationPos.bind(this);
        this.animaHoverCrul = null;
        this.animaClickCrul = null;
        this.animaMap = null;
        this.statusHoverCrull = true;
        this.state = {
            scaleMapDefault: 1,
            scaleMapChange: 1,
            statusAnimaPos: false
        }
    }
    componentDidMount() {
        this.animaHoverCrul = new TimelineLite({ paused: true })
            .to(this.Wrapper, 0.5, { width: '120px', height: '120px', ease: Power4.easeOut });
        this.animaClickCrul = new TimelineLite({ paused: true })
            .to(this.P, 0.4, { autoAlpha: 0, ease: Power2.easeIn })
            .to(this.Wrapper, 0.5, { width: '100%', height: '100%', ease: Power0.easeNone })
            .to(this.Crul, 1, { x: '100%', ease: Power2.easeOut, onComplete: this.handleActionAnimationPos })
            .to(this.FeatureWrapper, 0.5, { left: '-4%', autoAlpha: 1, ease: Power4.easeOut })
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
    handleActionAnimationPos() {
        if (this.state.statusAnimaPos) {
            this.setState({
                statusAnimaPos: false
            });
        } else {
            this.setState({
                statusAnimaPos: true
            });
        }
    }
    handleGetValueInputRange(value) {
        const scaleMapChange = this.state.scaleMapDefault * value;
        this.setState({
            scaleMapChange: scaleMapChange
        });
    }
    render() {
        const { scaleMapChange, statusAnimaPos } = this.state;
        return (
            <Wrapper ref={Wrapper => this.Wrapper = Wrapper}>
                <MapWrapper>
                    <MapUser actionAnima={statusAnimaPos} scale={scaleMapChange}></MapUser>
                </MapWrapper>
                <FeatureWrapper ref={FeatureWrapper => this.FeatureWrapper = FeatureWrapper}>
                    <ButtonTemp></ButtonTemp>
                    <Zoom valueDefault="1" step="0.1" min="0.5" max="2" getValue={this.handleGetValueInputRange}></Zoom>
                </FeatureWrapper>
                <Crul ref={Crul => this.Crul = Crul} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnterCrul} onClick={this.handleClickMapCurl}>
                    <P ref={P => this.P = P}>Discover</P>
                </Crul>
            </Wrapper>
        )
    }
}

export default MapCurl;
