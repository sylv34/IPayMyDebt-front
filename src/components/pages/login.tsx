
import React, { FormEvent, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { LoginCredentialsType, LoginResponseType } from '../../helpers/user';
import { userApi } from '../../services/api/userApi';
import { AxiosError } from 'axios';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));
  

const Login = () => {
    const classes = useStyles();
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    
    const [error, setError] = useState('')

    const handleLogin = async (e:FormEvent) => {
      e.preventDefault()
      const credentials: LoginCredentialsType = {
        email: email.current?.value!,
        password: password.current?.value!
      }
      userApi.userLogin(credentials)
        .then((loginResponse: LoginResponseType) => {
          console.log(loginResponse)
        })
        .catch((error: AxiosError<string>) => {
          setError(error.response!.data)
        })
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          <form className={classes.form} onSubmit={(e) => handleLogin(e)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse email"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={password}
            />
            <FormHelperText error={true}>{error}</FormHelperText>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Connexion
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="" variant="body2">
                  Mot de passe oublié
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Pas de compte ? Inscription"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
}

export default Login