import { Box } from "@mui/material";

const Userimage = ({ image, size = "60px"})=>{
    return (
        <Box width = {size} height={size}>
            <img
            style = {{objectFit: "cover", borderRadius: "50%"}}
            width={size}
            height={size}
            alt="user"
            src={`http://localhost:3001/assests/${image}`} 
            />
        </Box>
    );
}

export default Userimage;


widget wrapper
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const widgetwrapper = styled(Box) (({ theme }) => ({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem",
    backgroundColor: theme.palette.background.alt,
    borderRadius:"0.75rem"
}));

export default widgetwrapper
