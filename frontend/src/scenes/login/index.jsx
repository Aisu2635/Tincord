import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPg = () => {
    const theme = useTheme();
    const isPc = useMediaQuery("(min-width: 1000px)");
    return (<Box>
        <Box width="100px" 
        backgroundColor={theme.palette.background.alt} 
        p="1rem 6%" 
        textAlign="center">
        <Typography 
                fontWeight="bold"
                fontSize="32px"
                color="primary"
                >
                Tincord
        </Typography>
        </Box>
        <Box width={ isPc ? "1000px" : "100%" }
        p = "2rem"
        m="2rem auto"
        borderRadius="1rem"
        backgroundColor={theme.palette.background.alt}
        >
            <Typography fontWeight="500" variant="h5" sx={{mb:"1.5rem"}}>
                Welcome to Tincord!, By the noobs, for the noobs.
            </Typography>
        <Form />
        </Box>
        </Box>
    );
};

export default LoginPg;