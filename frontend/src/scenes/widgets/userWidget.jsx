import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
 } from "@mui/icons-material";
 import { Box, Typography, Divider, useTheme} from "@mui/material";
 import Userimage from "components/Userimage";
 import FlexB from "components/flexB";
 import Widgetwrapper from "components/widgetwrapper";
 import { useSelector } from "react-redux";
 import { useEffect , useState } from "react";
 import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picture_path}) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state)=> state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser = async() =>{
        const response = await fetch(`http://localhost:3001/users/$[userId}`,
        {
            method:"GET",
            headers: {Authorization: `Bearer ${token}`},
        });
        const data = await response.json();
        setUser(data);
    };

    useEffect(() => {
        getUser();

    },[])

    if(!user){
        return null;
    }

    const{
        F_name,
        L_name,
        location,
        occupation,
        viewedProfile,
        impresions,
        friend, 
    } = user;

    return(
        <Widgetwrapper>
            {/*FIRST ROW*/}
            <FlexB
            gap="0.5rem"
            pb="1.1rem"
            onClick={()=> navigate(`/profile/${userId}`)}
            >
                <FlexB gap="1rem">
                    <Userimage image={picture_path} />
                    <Box>
                        <Typography 
                        variant ="h4"
                        color={dark}
                        fontWeight="500"
                        sx={{
                            "&:hover":{
                                color: palette.primary.light,
                                cursor: "pointer"
                            }
                        }}>
                            {F_name} {L_name}
                        </Typography>
                        <Typography color={medium}>{friend.length} friend </Typography>
                        </Box>
                        
                </FlexB>
                <ManageAccountsOutlined/>
                </FlexB>

                <Divider/>
                {/*SECOND ROW*/}  
                <Box p="1rem 0">
                  <Box display ="flex"  alignItems="center" gap="1rem" mb="0.5rem">
                    <LocationOnOutlined fontSize="large" sx={{color:main}}/>
                    <Typography color={medium}>{location}</Typography>
                  </Box>
                  <Box display ="flex"  alignItems="center" gap="1rem">
                    <WorkOutlineOutlined fontSize="large" sx={{color:main}}/>
                    <Typography color={medium}>{occupation}</Typography>
                  </Box>
                </Box> 

                <Divider/> 
            
                {/*THIRD ROW*/}
                <Box p="1rem 0">
                    <FlexB mb="0.5rem">
                        <Typography color={medium}>Who's viewed your profile </Typography>
                        <Typography color={main} fontWeight="500">
                            {viewedProfile}
                            </Typography>
                    </FlexB>
                    <FlexB>
                    <Typography color={medium}>Impressions of your post </Typography>
                        <Typography color={main} fontWeight="500">
                            {impresions}
                            </Typography>
                    </FlexB>
                </Box>

                <Divider/>

                {/*FOURTH ROW*/}
                <Box p="1rem 0">
                    <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
                        Social Profiles
                    </Typography>

                    <FlexB gap= "1rem" mb="0.5rem">
                        <FlexB gap="1rem">
                            <img src="../assets/twitter.png" alt = "twitter"/>
                            <Box>
                                <Typography color={main} fontWeight="500">
                                    Twitter
                                </Typography>
                                <Typography color={medium}>Social Network</Typography>
                            </Box>
                        </FlexB>
                        <EditOutlined sx= {{color: main}}/>
                    </FlexB>

                    <FlexB gap= "1rem">
                        <FlexB gap="1rem">
                            <img src="../assets/linkedin.png" alt = "linkedin"/>
                            <Box>
                                <Typography color={main} fontWeight="500">
                                    Linkedin
                                </Typography>
                                <Typography color={medium}>Network Platform</Typography>
                            </Box>
                        </FlexB>
                        <EditOutlined sx= {{color: main}}/>
                    </FlexB>

                </Box>

             
        </Widgetwrapper>
    );
 };
 export default UserWidget;
