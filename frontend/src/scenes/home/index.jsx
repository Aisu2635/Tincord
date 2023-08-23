import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import NavPg from 'scenes/navbar';
import UserWidget from 'scenes/widgets/userWidget';
import MyPostWid from 'scenes/widgets/mypostwid';
import PostsWidget from "scenes/widgets/PostsWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";

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
            <UserWidget userId={_id} picturePath={picture_path}/>
        </Box>
        <Box
        flexBasis={isPC? "42%" :undefined}
            mt={isPC ? undefined : "2rem"}
            >
        <MyPostWid picturePath={picture_path} />
        <PostsWidget userId={_id} />
            </Box>
        {isPC && (<Box flexBasis="26%"><Box m="2rem 0" />
            <FriendListWidget userId={_id} />
            </Box>)}
        </Box>
    </Box>
    );
};

export default HomePg;