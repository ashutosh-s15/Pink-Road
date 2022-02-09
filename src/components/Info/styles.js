import { makeStyles } from "@material-ui/core/styles";
import svg from './about-us.svg';

export default makeStyles((theme) => (
    {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '50px',
            marginBottom: '50px',
            height: '700px',
            backgroundImage: `url(${svg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        },

        title: {
            borderBottom: '2px solid grey'
        },

        container2: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            paddingRight: '8%',
            paddingLeft: '8%',
        },

        content: {
            marginTop: '30px',
        },

    }
))