import React, { useState } from "react";
import "../navbar/Navbar.css";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Drawer } from "antd";
import styled from "styled-components";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from "react-router-dom";
const Navbar = ({ handleSearch, updateQuery, search }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleSaveRecipe = () => {
    navigate("/saverecipe");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
        width={250}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ marginBottom: 1 }}>
          <AccountBoxIcon
            sx={{
              position: "relative",
              top: "2.9rem",
              left: "1rem",
              fontSize: "2rem",
              color: "grey",
            }}
          />
          <ProfileButton onClick={handleProfile}>Profile</ProfileButton>
        </Box>
        <Box>
          <BookmarkIcon
            sx={{
              position: "relative",
              top: "2.9rem",
              left: "1rem",
              fontSize: "2rem",
              color: "grey",
            }}
          />

          <SaveRecipeButton onClick={handleSaveRecipe}>
            Saved Recipe
          </SaveRecipeButton>
        </Box>
        <SocialIconContainer>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
        </SocialIconContainer>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar position="fixed" sx={{ marginBottom: "50px" }}>
          <Toolbar>
            <Typography variant="h6" component="div">
              Recipe Book
            </Typography>
            <Paper
              style={{
                margin: "0px auto",
              }}
              onSubmit={updateQuery}
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 450,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                value={search}
                onChange={handleSearch}
                placeholder="search your favourite Recipe"
                inputProps={{ "aria-label": "search your favourite Recipe" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <IconButton
              color="primary"
              sx={{ p: "5px" }}
              aria-label="directions"
              onClick={showDrawer}
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>P</Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

const SaveRecipeButton = styled.button`
  background: #ddd;
  border: 0px solid pink;
  padding: 1rem 2.5rem;
  width: 100%;
  font-size: 18px;
  margin-left: 4px;
`;

const ProfileButton = styled.button`
  background: pink;
  border: 0px solid pink;
  font-size: 18px;
  padding: 1rem 4rem;
  width: 100%;
`;

const SocialIconContainer = styled.div``;
export default Navbar;
