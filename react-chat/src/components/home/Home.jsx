import React, { useState } from 'react';
import classes from './Home.module.css'
import Loader from '../loader/Loader'
import { Grid, Container, Button } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ExtensionIcon from '@mui/icons-material/Extension';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { ReactComponent as ReactIcon } from '../../imgs/react.svg';



const Home = () => {
  const techArray = ['Java Sctipt(ES6)', 'React 18.0.0', 'MaterialUl 5.5.3', 'Firebase 9.6.10', 'HTML5', 'CSS3'];
  const abilArray = ['Authentication with Google', 'Chating in realtime', 'Sending an atachments', 'Typing emodji', 'Changing UI theme', 'Watching the time'];

  function CreateList(props) {
    let i = 0;
    const listItems = [1, 2, 3, 4, 5, 6].map((number) =>
      <ListItem className={classes.item}>
        <ListItemIcon>
          {props.icons === 1
            ? <ExtensionIcon className={classes.icon} />
            : <BookmarkAddedIcon className={classes.icon} />
          }
        </ListItemIcon>
        <span className={classes.li}>
          {props.array[i++]}
        </span>
      </ListItem>
    );
    return (
      <List className={classes.list}>
        {listItems}
      </List>
    );
  }

  return (
    <Container >
      <Grid
        container
        className={classes.wrapper}
        direction={'column'}>
        <h1 className={classes.title}>About app</h1>
        <Grid className={classes.text} >
          The idea to create this program came from watching a video from Ulbi (YouTube). The author showed the work of React(JavaScript library) and Firebase  - popular service for hosting apps and actions with databases, and it was so interesting and exciting for me because of my desire to study Web-development.
          I've been studying React for 2 weeks, so these materials helped me to find new information and improve my skills with this library.
        </Grid>
        <Grid
          container
          className={classes.lists}>
          <Grid>
            <h2 className={classes.subtitle}>Technologies:
            </h2>
            <CreateList array={techArray} icons={1} />
          </Grid>
          <Grid className={classes.wrapperReactIcon} >
            <ReactIcon className={classes.reactIcon} />
          </Grid>
          <Grid>
            <h2 className={classes.subtitle}>Abilities:
            </h2>
            <CreateList array={abilArray} icons={2} />
          </Grid>
        </Grid>
        <Grid className={classes.enjoy}>Enjoy with using my app😊</Grid>

      </Grid>
    </Container>
  )
}

export default Home;
