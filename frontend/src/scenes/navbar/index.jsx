import { useState } from "react";
import { Box, IconButton,InputBase,Typography,Select,MenuItem,FormControl,useTheme,useMediaQuery } from "@mui/material"
import { Search,Message,DarkMode,LightMode,Notifications,Help,Menu,Close } from "@mui/icons-material";
import { useDispatch , useSelector } from "react-redux";
import FlexB from "components/flexB";
import { useNavigate } from "react-router-dom";
import { setLogout, setMode } from "state";

const NavPg = () => {
    const {isMobile, setisMobile} = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.User);
    const isPc = useMediaQuery("(min-width: 1000px)");
    const theme = useTheme();
    const neuTheme = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const BG = theme.palette.background.default;
    const priTheme = theme.palette.primary.light;
    const alt = theme.palette.primary.dark;

    const fullname = `${user.F_name} ${user.L_name}`;
    //const fullname = "Bit Nub";

    return (<FlexB padding="1rem 6%" backgroundcolor={alt}>
        <FlexB gap="1.75rem">
            <Typography 
                fontWeight="bold"
                fontSize="clamp(1rem, 2rem, 2.25rem)"
                color="primary"
                onClick={()=> navigate("/home")}
                sx={{
                    "&:hover": {
                        color: "priTheme",
                        cursor: "pointer",
                    },
                }}
                >
                Tincord
            </Typography>
            {isPc && (
                <FlexB backgroundColor= {priTheme}
                borderRadius="8px"
                gap="3rem"
                padding="0.1rem 1.5rem"
                >
                    <InputBase placeholder="Search..."/>
                    <IconButton>
                        <Search/>
                    </IconButton>
                </FlexB>
            )}
        </FlexB>
        {/* Desktop */}
        {isPc ? (
        <FlexB gap ="2rem"> 
        <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? 
            (<DarkMode sx={{fontSize: "25px"}} />) : 
            (<LightMode sx={{color: dark, fontSize: "25px"}} />)}
        </IconButton>
        <Message sx={{fontSize: "25px"}} />
        <Notifications sx={{fontSize: "25px"}} />
        <Help sx={{fontSize: "25px"}} />
        <FormControl variant="standard" value={fullname}>
            <Select 
            value={fullname}
            sx={{
                backgroundColor: priTheme,
                width: "150px",
                borderRadius: "1rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem"
                },
                "& .MuiSelect-select:focus": {
                    backgroundColor: priTheme
                },
            }}
            input={<InputBase />}
            >
                <MenuItem value={fullname}>
                <Typography>{fullname}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
        </FormControl> 
    </FlexB>
    ) : (
        <IconButton
        onClick={() => setisMobile(!isMobile)}
        >
        <Menu />
        </IconButton>
    )}

      {/* MOBILE NAV */}
    {!isPc && isMobile && (
        <Box
            position="fixed"
            right= "0"
            bottom= "0"
            height="100%"
            zIndex="10"
            maxWidth="500px"
            minWidth="300px"
            backgroundcolor={BG}
            >
                <Box display="flex" justifyContent="flex-end" padding="1rem">
                <IconButton
                    onClick={() => setisMobile(!isMobile)}
                >
                    <Close />
                </IconButton>  
                </Box>

        {/* MENU ITEMS */}
        <FlexB 
            gap ="3rem"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"> 
        (<IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? 
            (<DarkMode sx={{fontSize: "25px"}} />) : 
            (<LightMode sx={{color: dark, fontSize: "25px"}} />)}
        </IconButton>)  
        <Message sx={{fontSize: "25px"}} />
        <Notifications sx={{fontSize: "25px"}} />
        <Help sx={{fontSize: "25px"}} />
        <FormControl variant="standard" value={fullname}>
            <Select 
            value={fullname}
            sx={{
                backgroundColor: neuTheme,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem"
                },
                "& .MuiSelect-select:focus": {
                    backgroundColor: neuTheme
                },
            }}
            input={<InputBase />}
            >
                <MenuItem value={fullname}>
                <Typography>{fullname}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
        </FormControl>
        </FlexB>    
        </Box>
        )}
    </FlexB>
    );
};

export default NavPg;