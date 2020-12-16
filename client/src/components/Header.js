import React from "react";
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <NavLink to="/">
                    <Typography variant="h6">
                        StudioDash
                    </Typography>
                </NavLink>

                <List>

                    <ListItem>
                        <NavLink to="/articles">
                            <ListItemText inset>
                                <Typography color="inherit" variant="title">
                                    Articles
                                </Typography>
                            </ListItemText>
                        </NavLink>
                    </ListItem >

                </List>

            </Toolbar>
        </AppBar>
    )
}