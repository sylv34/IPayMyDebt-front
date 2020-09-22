import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select/Select';
import { makeStyles } from '@material-ui/core';
import SelectCreate from '../../singles/SelectCreate'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PersonalForm = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informations Personnels
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Prénom"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Nom"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="birthday"
            label="Date de naissance"
            type="date"
            name="birthday"
            defaultValue="2000-01-01"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl required className={classes.formControl}>
            <SelectCreate />
          </FormControl>
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}

export default PersonalForm