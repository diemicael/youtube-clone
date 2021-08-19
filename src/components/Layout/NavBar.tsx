import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  makeStyles,
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AddCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 64px)',
    borderRight: 'none'
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3)
  },
  listItemText: {
    fontSize: 14
  },
  subheader: {
    paddingLeft: theme.spacing(3)
  }
}));

const primaryMenu = [
  { id: 1, label: 'Início', path: '/', icon: HomeIcon },
  { id: 2, label: 'Em alta', path: '/trendding', icon: Whatshot },
  {
    id: 3,
    label: 'Inscrições',
    path: 'subscriptions',
    icon: Subscriptions
  }
];

const secondaryMenu = [
  { id: 1, label: 'Biblioteca', icon: VideoLibrary },
  { id: 2, label: 'Histórico', icon: History }
];

const tertiaryMenu = [
  { id: 1, label: 'Música', icon: AddCircle },
  { id: 2, label: 'Esportes', icon: AddCircle },
  { id: 3, label: 'Jogos', icon: AddCircle },
  { id: 4, label: 'Filmes', icon: AddCircle },
  { id: 5, label: 'Notícias', icon: AddCircle },
  { id: 6, label: 'Ao vivo', icon: AddCircle },
  { id: 7, label: 'Aprender', icon: AddCircle }
];

export function NavBar() {
  const classes = useStyles();
  const router = useRouter();

  const isSelected = (item) => {
    return router.pathname === item.path;
  };

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {secondaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Box mx={4} my={2}>
        <Typography variant="body2">
          Faça login para curtir vídeos, comentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Fazer login
          </Button>
        </Box>
      </Box>
      <Divider />
      <List
        subheader={
          <ListSubheader className={classes.subheader}>
            O MELHOR DO YOUTUBE
          </ListSubheader>
        }
      >
        {tertiaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Hidden>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  );
}
