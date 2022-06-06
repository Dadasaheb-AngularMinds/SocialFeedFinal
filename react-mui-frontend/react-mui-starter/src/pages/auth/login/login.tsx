import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./login.scss";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { authenticationService } from "../../../utils/auth.service";
import LoadingButton from "@mui/lab/LoadingButton";
import { Paper } from "@mui/material";
import { useHistory } from "react-router-dom";




const paperStyle = {  }
export default function Login() {
  // Initial hooks
   const history=useHistory()
  

  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [email,setEmail] =useState("");
  const [emailErrorState,setEmailErrorState] = useState({
    helperText:"", error:false
  });
  const [password,setPassword] = useState("");
  const [passwordErrorState,setPasswordErrorState] = useState({
    helperText:"", error:false
  });
  const { handleSubmit } = useForm();
  const theme = createTheme();

  /*
   * Verify Credentials
   */
  const doLogin = (formData: any) => {
    setButtonDisabled(true);
    authenticationService
      .verifyCredentials(formData)
      .then((response: any) => {
        setButtonDisabled(false);
      })
      .catch((error) => {
        setButtonDisabled(false);
      });
  };

  const handleEmail =(e:any) =>{
     setEmail(e.target.value);
      let regx= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(! regx.test(e.target.value)){
      setEmailErrorState({helperText:"Please enter valid email address",error:true})
     }else{
       setEmailErrorState({helperText:"",error:false})
     }
  }

  const handlePassword =(e:any) => {
    setPassword(e.target.value);
    let regx= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    if(!regx.test(e.target.value)){
      setPasswordErrorState({helperText:"Password should contain atleast one symbol and one number",error:true})
     } else{
       setPasswordErrorState({helperText:"", error:false})
     }
     if(e.target.value.length < 6){
       setPasswordErrorState({helperText:"Password should be greater than 6 characters",error:true})
     }
  }


  /*
   * Render
   */
  return (
    <ThemeProvider theme={theme}>
        <Paper elevation={15} className="login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(doLogin)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              // defaultValue="navanath@angularminds.com"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e)=> handleEmail(e)}
              error={emailErrorState.error}
              helperText={emailErrorState.helperText}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              name="password"
              label="Password"
              onChange={(e) => handlePassword(e)}
              type="password"
              id="password"
              error={passwordErrorState.error}
              helperText={passwordErrorState.helperText}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={isButtonDisabled}
            >
              Sign In
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={authenticationService.signup}>
                 {"Don't have an account yet? Sign up"}
                   {/* <button onClick={() =>history.push('/signup')}>Sign up?</button> */}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </Paper>
    </ThemeProvider>
  );
}
