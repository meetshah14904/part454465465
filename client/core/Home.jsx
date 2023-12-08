import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import messiImg from './../assets/images/messi.jpg';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  title: {
    padding: theme.spacing(3, 2.5, 2),
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,  // Adjust the height as needed
    maxWidth: '60%', // Make the image responsive
    margin: 'auto',   // Center the image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));



export default function Home() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>
      Explore our amazing products and enjoy your shopping experience!
      </Typography>
      <div className={classes.media} style={{ backgroundImage: `url(${messiImg})` }} />
      <CardContent>
        <Typography variant="body2" component="p">
          "Elevate your game with Websec Wears."
        </Typography>
        <div className={classes.statements}>
          <Typography variant="body2" component="p">
            "Where excellence meets athleticism."
          </Typography>
          <Typography variant="body2" component="p">
            "Gear up, play hard, and dominate."
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
