import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React,{useState} from 'react'
import { authenticationService } from "../../../utils/auth.service";
 export default function Signup () {
    const paperStyle = { padding: '30px 20px', width: 500, margin: "10px auto" }

    const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  /* error states*/
  const [firstNameErrorState,setFirstNameErrorState]=useState({
    helperText:"",error:false
  })
  const [lastNameErrorState,setLastNameErrorState]=useState({
    helperText:"",error:false
  })

  const[emailErrorState,setEmailErrorState]=useState({
    helperText:"",error:false
  })

  const[passwordErrorState,setPasswordErrorState]=useState({
    helperText:"",error:false
  })

  const handleFirstName = (e:any) =>{
    setFirstName(e.target.value)
    if(e.target.value === ""){
      setFirstNameErrorState({helperText:"First Name is required",error:true})
    }else{
      setFirstNameErrorState({helperText:"",error:false})
    }
  }
  
  const handleLastName = (e:any) =>{
    setLastName(e.target.value)
   if(e.target.value === ""){
     setLastNameErrorState({helperText:"Last Name is required",error:true})
   }else{
     setLastNameErrorState({helperText:"",error:false})
   }
  }
  
  const handleEmail = (e:any) =>{
    setEmail(e.target.value);
   if(e.target.value === ""){
     setEmailErrorState({helperText:"Email is required" , error:true})
   } else{
     setEmailErrorState({helperText:"",error:false})
   }
   let regx= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(!regx.test(e.target.value)){
     setEmailErrorState({helperText:"please enter valid email",error:true})
   }else{
     setEmailErrorState({helperText:"",error:false})
   }
  }
  
  const handlePassword = (e:any) =>{
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
  
  const handleSignup = () =>{
    let obj= {
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    }
    authenticationService.register(obj);
  }

  return (

    
    <div style={{ padding: 20 }}>
     
      <Paper elevation={15} style={paperStyle}>
   
        <Grid item xs={12}>
          <Box sx={{ fontSize: 35, marginBottom: 2,  fontFamily: '-moz-initial',marginLeft:26 }}> SignUp </Box>
        </Grid>
        <Grid>
          
          <Grid item xs={12}>

          <TextField
              margin="normal"
              required
              fullWidth
               id="firstName"
              label="First Name"
              name="firstName"
                  helperText={firstNameErrorState.helperText}
              error={firstNameErrorState.error}
              onChange={(e) => handleFirstName(e)}
             />
             </Grid>


             <Grid item xs={12}>

<TextField
    margin="normal"
    required
    fullWidth
     id="lastName"
    label="Last Name"
    name="lastName"
         helperText={lastNameErrorState.helperText}
              error={lastNameErrorState.error}
              onChange={(e) => handleLastName(e)}
   />
   </Grid>

   <Grid item xs={12}>

<TextField
    margin="normal"
    required
    fullWidth
     id="email"
    label="Email"
    name="email"
        onChange={(e) => handleEmail(e)}
              helperText={emailErrorState.helperText}
              error={emailErrorState.error}
   />
   </Grid>

   <TextField
    margin="normal"
    required
    fullWidth
    type="password"
     id="password"
    label="Password"
    name="password"
       helperText={passwordErrorState.helperText}
              error={passwordErrorState.error}
              onChange={(e) => handlePassword(e)}
   />
   </Grid>
           
          
       
         
        
        <Grid item xs={12} sx={{width:100,margin:'auto'}}>
            <Button  variant="contained" onClick={() => handleSignup()}> SignUp </Button>
          </Grid>
        
       
      </Paper>
    </div>
  )
}

