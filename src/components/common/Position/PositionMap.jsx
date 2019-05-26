import React, { Component } from 'react'
import styled from 'styled-components';
import { TimelineLite, Power2 } from "gsap/all";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import RoomIcon from '@material-ui/icons/Room';
import CancelIcon from '@material-ui/icons/Cancel';
import P from './../Paragraph/P';
import { withStyles } from '@material-ui/core/styles';
const Position = styled.div`
    position: absolute;
    width:  ${props => props.theme.Width.Poss};
    height: ${props => props.theme.Height.Poss};
    bottom: ${props => props.bottom};
    right: ${props => props.right};
    z-index: 2;   
    background-color:  ${props => props.type === 0 ? props.theme.Color.PsBlue : 'none'};
    background-color:  ${props => props.type === "from" ? props.theme.Color.PsRed : 'none'};
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
        border-top-color: ${props => props.type === 0 ? props.theme.Color.PsUBlue : 'none'};
        border-top-color: ${props => props.type === "from" ? props.theme.Color.PsURed : 'none'};
        border-left: 0;
        top: 100%;
        left: 100%;
    }
`;
const CountryName = styled.p`
    position: absolute;
    bottom: 0;
    left: 100%;
    margin-left: 15%;
    font-weight: bold;
    min-width: 100px;
    transform: translateY(20px);   
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
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateY(20px);
    overflow: hidden;
`;
const IconChoice = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(100%);
    overflow: hidden;
`;
const Temp = styled.div`
    width: 100%;
    position: absolute;
    left: 50px;
    bottom: 100%;
    opacity: 0;
    
`;
const styles = theme => ({
    icon: {
        fontSize: 32,
        color: 'white'
    },
});
export class PositionMap extends Component {
    constructor(props) {
        super(props)
        this.animatedContentPosition = this.animatedContentPosition.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.aPosition = null;
        this.aCntPosition = null;
        this.aHoverPosition = null;
        this.aTemp = null;
        this.aIcon = null;
        this.state = {
            isAnimated: false,
            type: this.props.type,
            isChoice: this.props.isChoiceFrom,
            isTemp: this.props.isShowTemp
        }
    }
    handleMouseEnter() {
        if (this.state.type === 0 || this.state.type === "from") {
            this.aHoverPosition.play();
            this.aIcon.play();
            this.aIconChoice.play();
        }
    }
    handleMouseLeave() {
        if (this.state.type === 0 || this.state.type === "from") {
            this.aHoverPosition.reverse();
            this.aIcon.reverse();
            this.aIconChoice.reverse();
        }
    }
    handleClick() {
        if (this.state.type === 0) {
            this.setState({ type: "from" });
        } else if (this.state.type === "from") {
            this.setState({ type: 0 });
        }
    }
    animatedContentPosition() {
        this.aCntPosition.play();
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
        this.aTemp = new TimelineLite({ paused: true })
            .to(this.refTemp, 0.3, { left: '0', autoAlpha: 1, ease: Power2.easeOut });
        this.aHoverPosition = new TimelineLite({ paused: true })
            .to(this.refPosition, 0.3, { height: '70px', ease: Power2.easeOut });
        this.aIcon = new TimelineLite({ paused: true })
            .to(this.refIcon, 0.4, { yPercent: -100, ease: Power2.easeOut });
        this.aIconChoice = new TimelineLite({ paused: true })
            .to(this.refIconChoice, 0.4, { y: '0%', ease: Power2.easeOut });
        this.aCntPosition = new TimelineLite({ paused: true })
            .to(this.refCountryName, 0.3, { y: 0, autoAlpha: 1 })
            .to(this.refIcon, 0.3, { autoAlpha: 1, y: 0 });
        this.aPosition = new TimelineLite({ paused: true })
            .from(this.refPosition, 0.3, { autoAlpha: 0, y: '20px' })
            .from(this.refPosition, 0.3, { height: '0px' })
            .from(this.refPosition, 0.3, { width: '1px', onComplete: this.animatedContentPosition });
    }
    render() {
        const { classes } = this.props;
        const { type } = this.state;
        return (
            <Position ref={Position => this.refPosition = Position} type={type} bottom="30%" right="30%" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleClick}>
                <View>
                    <Icon ref={Icon => this.refIcon = Icon}>
                        <LocationCityIcon className={classes.icon}></LocationCityIcon>
                    </Icon>
                    <IconChoice ref={IconChoice => this.refIconChoice = IconChoice}>
                        {type === 0 && <RoomIcon className={classes.icon}></RoomIcon>}
                        {type === 0 && <P color="white">From</P>}
                        {type === "from" && <CancelIcon className={classes.icon}></CancelIcon>}
                        {type === "from" && <P color="white">Cancel</P>}
                    </IconChoice>
                </View>
                <CountryName ref={CountryName => this.refCountryName = CountryName}>Việt Nam</CountryName>
                <Temp ref={Temp => this.refTemp = Temp}><P center bold>45C</P></Temp>
            </Position>
        )
    }
}

export default withStyles(styles)(PositionMap);