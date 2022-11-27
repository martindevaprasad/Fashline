import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import { Link, NavLink } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import dress from "../Assets/dress.png";
import Grid from "@mui/material/Grid";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export const Header = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className="p-2 "
          style={{ background: "#fff" }}
          position="static"
        >
          <Toolbar>
            <Grid container spacing={2}>
              {" "}
              <IconButton
                LinkComponent={Link}
                to={"/"}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img style={{ width: "32px" }} src={dress} />
              </IconButton>
              <Grid item xs={1}>
                {" "}
                <Typography
                  sx={{
                    backgroundcolor: "primary",
                    backgroundImage:
                      "linear-gradient(to right top, #ea2193, #e72093, #e41f93, #e11e93, #de1d93, #e41889, #ea177f, #ee1975, #f52a5e, #f73f47, #f45430, #ec6912)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                  component="h4"
                  variant="h5"
                  align="center"
                  className="title"
                >
                  Fashline
                </Typography>
              </Grid>
              <Grid className="text-end" item xs={4}>
                {" "}
                <Button
                  LinkComponent={NavLink}
                  to="/add"
                  style={{ color: "#000" }}
                >
                  Add product
                </Button>
                <Button
                  LinkComponent={NavLink}
                  to="/western"
                  style={{ color: "#000" }}
                >
                  Western Wears
                </Button>
              </Grid>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
