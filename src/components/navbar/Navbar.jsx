import React from "react";
import "../navbar/Navbar.css";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar} from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const Navbar = ({handleSearch,updateQuery,search}) => {
  return (
    <Box 
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar position="fixed" sx={{marginBottom: '50px'}}>
          <Toolbar>
          <Typography variant="h6" component="div">
            RecipeBookApp
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
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>P</Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
  );
};

export default Navbar;
