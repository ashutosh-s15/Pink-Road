import { Typography, Box } from "@material-ui/core";

import useStyle from './styles';


const Info = () => {
    const classes = useStyle();

    return (
        <>
            <div className={classes.section}>
                <Box className={classes.container}>
                    <Typography variant='h2' className={classes.title}>Let's get acquainted</Typography>
                    <Box className={classes.container2}>
                        <Typography variant='h5' className={classes.content} align='center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quas, error voluptatem architecto dicta eum! Dicta deleniti consectetur excepturi eveniet molestiae ea sunt quaerat pariatur ratione nam incidunt atque quo voluptatibus ipsam provident beatae, aliquam modi error ducimus explicabo aut. Aperiam suscipit aliquid ducimus exercitationem quos tenetur voluptatem, vel ad natus consequuntur excepturi id illum voluptas corrupti repellendus vero obcaecati recusandae dolore ex nostrum quasi ratione quis reiciendis. Enim, architecto? Ducimus, nobis, accusantium culpa sit, fugiat eveniet repudiandae libero sint qui et veniam. Ipsam non labore architecto animi, a aliquid?</Typography>
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default Info;