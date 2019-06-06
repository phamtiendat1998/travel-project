import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';
const theme = {
    Height: {
        NavXl: '50px',
        InputRange: '5px',
        MainView: 'calc(100% - 100px)',
        Poss: '45px'
    },
    Width: {
        NavItem: '100px',
        InputRange: '150px',
        ContentFly: 'calc(100% - 300px)',
        SideBar: '300px',
        Poss: '45px'
    },
    Color: {
        Black: 'black',
        Gray: grey[500],
        Red: red[700],
        TxtGray: grey[500],
        PsSoHot: '#c6302a',
        PsHot: '#f6d72e',
        PsFresh: '#2d90c7',
        PsCold: '#093854',
        PsSoCold:'#454546',
        PsUSoHot: '#6c0306',
        PsUHot: '#b37d00',
        PsUFresh: '#093854',
        PsUCold:'#2e5a65',
        PsUSoCold:'#313233',
        TopSideBar: grey[600],
        BotSideBar: grey[500],
        Default: indigo[400],
        Alert: red[300],
        Success: green[600],
    },
    Font: {
        Logo: '2em',
        Label: '1em',
        Input: '1.2em',
        P: '1em',
        H5: '1.5em',
        H4: '2em',
        H3: '2.5em',
        H2: '3em',
        H1: '3.5em',
    },
    Size: {
        LogoXl: '50px',
        Zoom: '40px',
        MapCrul: '100px'
    }
}

export default theme