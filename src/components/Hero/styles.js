import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        height: '700px',
    },
    action: {
        '& > *': {
            margin: '4px',
        },
    },
    quote: {
        fontWeight: '400',
    }
}));