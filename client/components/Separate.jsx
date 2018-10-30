import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  grid: {
    padding: theme.spacing.unit * 3,
  },
  heading: {
    marginBottom: theme.spacing.unit,
  },
  button: {
    marginBottom: theme.spacing.unit,
  },
});

function Separate(props) {
  const { classes, setWhoIAm, whoAmI } = props;

  return (
    <Grid
      alignItems="center"
      className={classes.grid}
      container
      direction="column"
      justify="center">
      <Typography className={classes.heading} variant="h6">
        Separate
      </Typography>
      <Button
        className={classes.button}
        color="primary"
        onClick={setWhoIAm}
        variant="outlined">
        Who am I?
      </Button>
      <Typography variant="body1">I am {whoAmI}!</Typography>
    </Grid>
  );
}

export { Separate };
export default withStyles(styles)(Separate);
