import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  FormControl,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  createEmployee,
  fetchEmployee,
  updateEmployee,
} from "../API/apiEmployee";


function generateId() {
  const randomNumber = Math.floor(Math.random());
  const timestamp = Date.now();
  const uniqueId = `${randomNumber}${timestamp}`;
  return uniqueId;
}

export default function FormDetails() {

    const navigate = useNavigate();
    const { id: updateUserId } = useParams();

   

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [email,setEmail]=useState("");
    // const [gender,setGender]=useState("");

    

  



    useEffect(
      function () {
        async function fetchData() {
          const data = await fetchEmployee(updateUserId);
          const {
            firstName,
            lastName,
            phoneNumber,
            email,
            
            
          } = data;
          setFirstName(firstName);
          setLastName(lastName);
          setPhoneNumber(phoneNumber);
          setEmail(email);
          
        
        }
        if (updateUserId) fetchData();
      },
      [updateUserId]
    );
  
    // Form submit function to create or to update an employee
    async function handleSubmit(e) {
      e.preventDefault();
      if (
        !firstName ||
        !lastName ||
        !phoneNumber ||
        !email 
        
      )
        return;
  
      const id = updateUserId || generateId();
  
      const newEmployee = {
        id,
        firstName,
        lastName,
        phoneNumber,
        email,
        
      
      };
  
      if (updateUserId) updateEmployee(newEmployee);
      else createEmployee(newEmployee);
  
      navigate("/");
    }






  return (
    <div className="App">
      <Typography
        gutterBottom
        variant="h4"
        align="center"
        sx={{ backgroundColor: "lightblue" }}
      >
        Form Page
      </Typography>
      <Card style={{maxWidth:600,margin:'0 auto',padding:'20px 5px'}}>
        <CardContent>

            <form action="" onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="First Name"
                id='first_name'
                placeholder="Enter First Name"
                variant="outlined"
                fullWidth
                autoComplete="off"
                value={firstName}
                onChange={(e)=>{
                  setFirstName(e.target.value)
                }}
              /> 
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                label="Last Name"
                id="last_name"
                placeholder="Enter Last Name"
                variant="outlined"
                fullWidth
                autoComplete="off"
                value={lastName}
                onChange={(e)=>{
                  setLastName(e.target.value)
                }}
              />
            </Grid>

            <Grid xs={12}  item>
              <TextField
                label="Phone Number"
                id="phone_number"
               
                placeholder="Enter Phone Number"
                variant="outlined"
                fullWidth
                autoComplete="off"
                value={phoneNumber}
                onChange={(e)=>{
                  setPhoneNumber(e.target.value)
                }}
                
              />
            </Grid>

            <Grid xs={12}  item>
              <TextField
                label="Email"
                id="email"
                type="email"
                placeholder="Enter Email"
                variant="outlined"
                fullWidth
                autoComplete="off"
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}

              />
            </Grid>

            {/* <Grid xs={12}  item>
            <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
     
       
      </RadioGroup>
    </FormControl>
            </Grid> */}
            <Grid xs={12}  item>
              <Button type="submit" variant="contained" endIcon={<SendIcon /> }>
                Submit
              </Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
