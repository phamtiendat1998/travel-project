import React, { Component } from 'react'
import styled from 'styled-components';
import { TimelineLite, Power2 } from "gsap/all";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationOffIcon from '@material-ui/icons/LocationOff';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShareIcon from '@material-ui/icons/Share';
import SunShower from '../WeatherIcon/SunShower';
import Rainy from '../WeatherIcon/Rainy';
import Sunny from './../WeatherIcon/Sunny';
import ThunderStorm from '../WeatherIcon/ThunderStorm';
import Flurries from '../WeatherIcon/Flurries';
import { Link } from 'react-router-dom'
import P from './../Paragraph/P';
import Span from './../Paragraph/Span';
import { withStyles } from '@material-ui/core/styles';
const Position = styled.div`
    position: absolute;
    width:  ${props => props.theme.Width.Poss};
    height: ${props => props.theme.Height.Poss};
    bottom: ${props => props.bottom + '%'};
    right: ${props => props.right + '%'} ;
    z-index: 2;   
    background-color:  ${props => props.temp > 42 ? props.theme.Color.PsSoHot : 'none'};
    background-color:  ${props => 35 < props.temp && props.temp <= 42 ? props.theme.Color.PsHot : 'none'};
    background-color:  ${props => 30 < props.temp && props.temp <= 35 ? props.theme.Color.PsFresh : 'none'};
    background-color:  ${props => 20 < props.temp && props.temp <= 30 ? props.theme.Color.PsCold : 'none'};
    background-color:  ${props => props.temp <= 20 ? props.theme.Color.PsSoCold : 'none'};
    opacity: 1;
    cursor: pointer;
    &::before {
        position: absolute;
        content: "";
        height: 0;
        width: 0;
        border: 16px solid transparent;
        margin-left: -16px;
        margin-top: 0;
        border-top-color:  ${props => props.temp > 42 ? props.theme.Color.PsUSoHot : 'none'};
        border-top-color:  ${props => 35 < props.temp && props.temp <= 42 ? props.theme.Color.PsUHot : 'none'};
        border-top-color:  ${props => 30 < props.temp && props.temp <= 35 ? props.theme.Color.PsUFresh : 'none'};
        border-top-color:  ${props => 20 < props.temp && props.temp <= 30 ? props.theme.Color.PsUCold : 'none'};
        border-top-color:  ${props => props.temp <= 20 ? props.theme.Color.PsUSoCold : 'none'};
        border-left: 0;
        top: 100%; 
        left: 100%;
    }
`;
const CountryName = styled.p`
    position: absolute;
    bottom: 20px;
    left: 100%;
    margin-left: 10px;
    font-weight: bold;
    min-width: 100px;
    opacity: 0;
`;
const View = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;
const Icon = styled.div`
    position: absolute;
    top: 20px;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    overflow: hidden;
`;
const IconTemp = styled.div`
    position: absolute;
    top: 0;
    left: -100%;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const IconCategory = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconChoice = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
`;
const Temp = styled.div`
    width: 100%;
    position: absolute;
    left: 50px;
    bottom: 100%;
    opacity: 0;
    
`;
const Feature = styled.div`
    width: 100%;
    height: 100%;
    display: none;
    grid-template-rows: auto auto auto;
`;
const FeatureItem = styled.div`
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  ${props => props.temp > 42 ? props.theme.Color.PsSoHot : 'none'};
    background-color:  ${props => 35 < props.temp && props.temp <= 42 ? props.theme.Color.PsHot : 'none'};
    background-color:  ${props => 30 < props.temp && props.temp <= 35 ? props.theme.Color.PsFresh : 'none'};
    background-color:  ${props => 20 < props.temp && props.temp <= 30 ? props.theme.Color.PsCold : 'none'};
    background-color:  ${props => props.temp <= 20 ? props.theme.Color.PsSoCold : 'none'};
    transition: all 0.5s;
    &:hover{
        transform: translateX(-2em);
    }
`;
const styles = theme => ({
    icon: {
        fontSize: 32,
        color: 'white'
    },
});
const styleLink = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1em',
    alignItems: 'center',
    display: 'flex'
}
export class PositionMap extends Component {
    constructor(props) {
        super(props)
        this.animatedContentPosition = this.animatedContentPosition.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.createAFeature = this.createAFeature.bind(this);
        this.aPosition = null;
        this.aCntPosition = null;
        this.aHoverPosition = null;
        this.aTemp = null;
        this.aIcon = null;
        this.state = {
            isAnimated: false,
            isChoice: this.props.isChoiceFrom,
            isTemp: this.props.isShowTemp
        }
    }
    handleMouseEnter() {
        const { type } = this.props;
        if (type === 0 || type === "from") {
            this.aHoverPosition.play();
            this.aIcon.play();
        } else {
            this.aHoverPositionTo.play();
        }
    }
    handleMouseLeave() {
        const { type } = this.props;
        if (type === 0 || type === "from") {
            this.aHoverPosition.reverse();
            this.aIcon.reverse();
        } else {
            this.aHoverPositionTo.reverse();
        }
    }
    handleClick() {
        const { type } = this.props;
        if (type === 0) {
            this.props.getFromPlaceParent();
        } else if (type === 'from') {
            this.props.removeFromPlaceParent();
        } else {
            return;
        }
    }
    animatedContentPosition() {
        this.aCntPosition.play();
    }
    createAFeature() {
        this.aHoverPositionTo = new TimelineLite({ paused: true })
            .to(this.refView, 0.2, { autoAlpha: 0, display: 'none' })
            .to(this.refPosition, 0.2, { width: '100px', height: '150px' })
            .to(this.refFeature, 0.2, { autoAlpha: 1, display: 'grid' });
    }
    componentWillReceiveProps(nextProps) {
        nextProps.isAnimated ? this.aPosition.play() : this.aPosition.reverse();
        if (nextProps.isShowTemp) {
            this.aTemp.play();
        } else {
            this.aTemp.reverse();
        }
    }
    componentDidMount() {
        const { delay, type } = this.props;
        const FrameDelay = 0.2;
        this.aTemp = new TimelineLite({ paused: true })
            .to(this.refIconCategory, 0.2, { left: '100%' })
            .to(this.refIconTemp, 0.2, { left: '0' })
            .to(this.refTemp, 0.2, { left: '0', autoAlpha: 1, ease: Power2.easeOut });
        this.aHoverPosition = new TimelineLite({ paused: true })
            .to(this.refPosition, 0.3, { height: '60px', width: '50px' });
        this.aIcon = new TimelineLite({ paused: true })
            .to(this.refIcon, 0.2, { top: "-100%" })
            .to(this.refIconChoice, 0.2, { top: '0' });
        this.aCntPosition = new TimelineLite({ paused: true })
            .to(this.refCountryName, 0.3, { bottom: '0', autoAlpha: 1 })
            .to(this.refIcon, 0.3, { autoAlpha: 1, top: '0' });
        this.aPosition = new TimelineLite({ paused: true }).delay(FrameDelay * delay)
            .from(this.refPosition, 0.3, { autoAlpha: 0, bottom: '20px' })
            .from(this.refPosition, 0.3, { height: '0px' })
            .from(this.refPosition, 0.3, { width: '1px', onComplete: this.animatedContentPosition });
        if (type === 'to') {
            this.createAFeature();
        }
    }
    componentDidUpdate() {
        const { type } = this.props;
        if (type === 'to') {
            this.createAFeature();
        }
    }
    render() {
        const { classes, Place, type } = this.props;
        return (
            <Position ref={Position => this.refPosition = Position} temp={Place.temp} type={type} bottom={Place.location.y} right={Place.location.x} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleClick}>
                <View ref={View => this.refView = View}>
                    <Icon ref={Icon => this.refIcon = Icon}>
                        <IconCategory ref={IconCategory => this.refIconCategory = IconCategory}>
                            {Place.category === "country" && <LocationCityIcon className={classes.icon}></LocationCityIcon>}
                            {Place.category === "resort" && <BeachAccessIcon className={classes.icon}></BeachAccessIcon>}
                        </IconCategory>
                        <IconTemp ref={IconTemp => this.refIconTemp = IconTemp}>
                            {Place.temp > 42 && <Sunny></Sunny>}
                            {35 < Place.temp && Place.temp <= 42 && <SunShower></SunShower>}
                            {30 < Place.temp && Place.temp <= 35 && <Rainy></Rainy>}
                            {20 < Place.temp && Place.temp <= 30 && <ThunderStorm></ThunderStorm>}
                            {Place.temp <= 20 && <Flurries></Flurries>}
                        </IconTemp>
                    </Icon>
                    <IconChoice ref={IconChoice => this.refIconChoice = IconChoice}>
                        {type === 0 && <LocationOnIcon className={classes.icon}></LocationOnIcon>}
                        {type === 0 && <P colorT="white">From</P>}
                        {type === "from" && <LocationOffIcon className={classes.icon}></LocationOffIcon>}
                        {type === "from" && <P colorT="white">Cancel</P>}
                    </IconChoice>
                </View>
                {
                    type === "to" &&
                    <Feature ref={Feature => this.refFeature = Feature}>
                        <FeatureItem temp={Place.temp}><Link style={styleLink} to="/about"><RemoveRedEyeIcon></RemoveRedEyeIcon><Span padding="0 0 0 0.5em">View</Span></Link></FeatureItem>
                        <FeatureItem temp={Place.temp}><Link style={styleLink} to="/about"><AttachMoneyIcon></AttachMoneyIcon><Span padding="0 0 0 0.5em">Book</Span></Link></FeatureItem>
                        <FeatureItem temp={Place.temp}><Link style={styleLink} to="/about"><ShareIcon></ShareIcon><Span padding="0 0 0 0.5em">Share</Span></Link></FeatureItem>
                    </Feature>
                }
                <CountryName ref={CountryName => this.refCountryName = CountryName}>{Place.name}</CountryName>
                <Temp ref={Temp => this.refTemp = Temp}><P center bold>{Place.temp} *C</P></Temp>
            </Position>
        )
    }
}

export default withStyles(styles)(PositionMap);