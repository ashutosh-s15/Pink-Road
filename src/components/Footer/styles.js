import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    footerContainer: {
        paddingTop: '50px'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#CACACA',
        height: '150px',
        paddingRight: '280px',
    },
    socials: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: '0.3'
    },
    links: {
        textDecoration: 'none',
        color: '#2F2E41'
    },
    logo: {
        fontSize: '30px',
        fontWeight: '500',
        backgroundColor: '#2F2E41',
        borderRadius: '10%',
        padding: '5px',
    }
}))