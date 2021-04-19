// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Schedule } from './pages/schedule';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { Box, Drawer, Hidden, IconButton, List, ListItem } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffe082',
      main: '#fbc02d',
      dark: '#f57f17',
      contrastText: '#212121',
    },
    secondary: {
      light: '#ffccbc',
      main: '#ff7043',
      dark: '#ff5722',
      contrastText: '#000',
    },
  },
});

function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/schedule">スケジュール</Button>
      </Toolbar>
    </AppBar>
  );
}

function ButtonAppDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Box flexGrow={1}></Box>
        <IconButton onClick={toggleDrawer(true)} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box
            width="100vw"
            color="primary.contrastText"
            bgcolor="primary.dark"
            flexGrow={1}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}>
            <Box justifyContent="flex-end">
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <List>
              <ListItem button component={Link} to="/schedule">スケジュール</ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hidden xsDown>
        <ButtonAppBar />
      </Hidden>
      <Hidden smUp>
        <ButtonAppDrawer />
      </Hidden>
      <Switch>
        <Route path="/schedule" component={Schedule} />
      </Switch>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

