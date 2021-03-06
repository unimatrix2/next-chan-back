import React, { useEffect } from "react";
import {
    Drawer,
    CssBaseline,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    makeStyles,
    useTheme,
    ListItem,
    ListItemIcon,
    ListItemText,
	useMediaQuery
} from "@material-ui/core";
import {
    Menu,
    ChevronLeft,
    ChevronRight,
    Inbox,
    Mail,
} from "@material-ui/icons";
import clsx from "clsx";
import Link from 'next/link'

import { mock } from '../mockedData';

export default function PersistentDrawer({ width }) {
    
	const drawerWidth = width * 15/100;
    const mobileDrawer = drawerWidth < 100 ? width * 16/100 : false;
    const tabletDrawer = drawerWidth < 120 ? width * 21/100 : false;

    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
        },
        appBar: {
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: "none",
        },
        drawer: {
            width: mobileDrawer ? mobileDrawer
                : tabletDrawer ? tabletDrawer
                : drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: mobileDrawer ? mobileDrawer
            : tabletDrawer ? tabletDrawer
            : drawerWidth,
        },
        drawerHeader: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: "space-between",
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
		drawerListText: {
			color: 'blue',
            justifySelf: 'center'
		},
        drawerTitle: {
            marginLeft: '5%'
        }
    }));

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide
                        )}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Welcome to Next Chan
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                {mobileDrawer > 100 || !mobileDrawer ? <Typography variant="h6" className={classes.drawerTitle}>Boards</Typography> : ''}
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeft />
                        ) : (
                            <ChevronRight />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
				{mock.map(elem => (
                        <Link
                            href={elem.path}
                            onClick={handleDrawerClose}
                            key={elem.path}
                        >
                        <ListItem button>
                            <ListItemIcon className={classes.drawerListText}>
                                {elem.path}
                            </ListItemIcon>
                            {drawerWidth > 100 ? <ListItemText primary={elem.board} /> : ''}
                        </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                {/* <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <Inbox /> : <Mail />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List> */}
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
        </div>
    );
}
