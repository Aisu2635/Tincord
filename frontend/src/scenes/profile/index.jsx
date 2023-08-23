import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavPg from "scenes/navbar";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import MyPostWid from "scenes/widgets/mypostwid";
import PostsWidget from "scenes/widgets/PostsWidget";
import UserWidget from "scenes/widgets/userWidget";

const ProPg = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isPC = useMediaQuery("(min-width:1000px)");

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return null;

  return (
    <Box>
      <NavPg />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isPC ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isPC ? "26%" : undefined}>
          <UserWidget userId={userId} picture_path={user.picture_path} />
          <Box m="2rem 0" />
          <FriendListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isPC ? "42%" : undefined}
          mt={isPC ? undefined : "2rem"}
        >
          <MyPostWid picture_path={user.picture_path} />
          <Box m="2rem 0" />
          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProPg;
