import React, { Component } from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';

function TabContainer(props) {
    return (
        <Typography component="div"
            style={{
                padding: 8 * 3,
            }}>
            {props.children}
        </Typography>
    );
}



const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    label: {
        fontSize: '1em',
        textTransform: 'capitalize',
    },
    wrapper: {
        minHeight: 'unset',
        height: 'auto',
        display: 'block',
        '&:focus': {
            outline: 'none !important'
        }
    },
    tabs: {
        background: 'none',
    },
    indicatorColor: {
        backgroundColor: '#e33d25'
    },
    appbar: {
        boxShadow: 'none',
        backgroundColor: '#e0e0e0'
    }
});
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#e33d25'
        }
    },
    typography: {
        useNextVariants: true,
    },

})


const ProfileWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;
`;

export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
        };
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <ProfileWrapper className={classes.root}>
                <MuiThemeProvider theme={theme}>
                    <AppBar position="static" color="inherit" classes={{ root: classes.appbar }} >
                        <Tabs
                            classes={{ root: classes.tab, indicator: classes.indicatorColor }}
                            value={value}
                            onChange={this.handleChange}
                            variant="fullWidth"
                            scrollButtons="on"
                            // indicatorColor={{indicatorColor: classse}}
                            textColor="primary"
                            centered={true}
                        >
                            <Tab classes={{ root: classes.wrapper, label: classes.label }} label="Setting" icon={<PhoneIcon style={{ fontSize: '1.2em' }} />} />
                            <Tab classes={{ root: classes.wrapper, label: classes.label }} label="Change password" icon={<FavoriteIcon style={{ fontSize: '1.2em' }} />} />
                        </Tabs>
                    </AppBar>
                    {value === 0 && <TabContainer>Setting</TabContainer>}
                    {value === 1 && <TabContainer>Change password</TabContainer>}
                </MuiThemeProvider>
            </ProfileWrapper>
        )
    }
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
