import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import NavPg from 'scenes/navbar';
import userWidget from 'scenes/widgets/userWidget';
import Mypostwid from 'scenes/widgets/mypostwid';

const HomePg = () => {
    const isPC = useMediaQuery("(min-width:1000px)");
    const {_id, picture_path} = useSelector((state) => state.user);

    return (
    <Box>
        <NavPg />
        <Box
        width="100%"
        padding="2rem 6%"
        display={isPC ? "flex" : "block"}
        gap="0.5rem"
        justifyContent = "space-between"
        >
        <Box flexBasis={isPC? "26%" :undefined}>
            <userWidget userId={_id} picturePath={picture_path}/>
        </Box>
        <Box
        flexBasis={isPC? "42%" :undefined}
            mt={isPC ? undefined : "2rem"}
            ></Box>
        {isPC && <Box flexBasis="26%"></Box>}
    
        </Box>
    </Box>
    );
};

export default HomePg;
