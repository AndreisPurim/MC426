import React from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


import Avatar from '@mui/material/Avatar';
import StepContent from '@mui/material/StepContent';
import IconButton from '@mui/material/IconButton';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import StepLabel from '@mui/material/StepLabel';

const tutorialSteps = [
  {
    title: "Enter patient's radiography image",
    subtitle: "It's as simple as uploading a picture!",
    description: "Given an image of an exam, our system will automatically detect which is the most appropriate medical form to be filled",
  },
  {
    title: "Fill in patient information",
    subtitle: "We won't keep it in the system, don't worry!",
    description: "Then, with the appropriate form, fill in the patient's information. This information won't be stored in any database and will be deleted as soon as you finish.",
  },
  {
    title: "Now sit back and enjoy!",
    subtitle: "The program will return you an interoperable medical report",
    description: "Now, the program will return to you a pre-set, editable medical report with a QR Code. If you patient ever needs to have his information again, you can just scan it!",
  },
];

function HeaderCard(){
  return(
    <Grid item md={11}>
      <Paper style={{padding:'2rem'}} elevation={8}>
        <div style={{textAlign:'center'}}>
          <LocalHospitalIcon color="secondary" style={{fontSize:'10rem'}}/>
        </div>
        <Typography gutterBottom variant="h5" component="div">
          MC426 Project 
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Welcome to our medical reports facilitation project! Our mission is to make it easier for healthcare professionals to access and share medical reports across multiple systems. With our user-friendly platform, you can quickly locate and retrieve the necessary information from different providers, improving patient outcomes and enhancing the overall quality of care. We are committed to providing a seamless, secure, and efficient way to manage medical reports.
          </Typography>
      </Paper>
    </Grid>
  )
}

function SmallerCard(){
  return(
    <Grid item md={5}>
      <Paper style={{padding:'2rem'}} elevation={8}>
        <Typography gutterBottom variant="h5" component="div">
          News 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We&rsquo;re thrilled to announce updates to our medical reports facilitation system! With enhanced search, improved interoperability, streamlined workflows, and new security features, we&rsquo;re committed to providing the best possible service. Contact our support team with any questions or feedback.
          </Typography>
      </Paper>
    </Grid>
  )
}

function Tutorial(){
  const [step, setStep] = React.useState(0);
  const handleNext = () => {
    setStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setStep((prevActiveStep) => prevActiveStep - 1);
  };
  return(
    <Grid item xs={10}>
      <Stepper activeStep={step} orientation="vertical">
        {tutorialSteps.map((current, index) => (
          <Step key={current.title}>
            <StepLabel
              optional={<Typography variant="caption">{current.subtitle}</Typography>}
            >
              {current.title}
            </StepLabel>
            <StepContent>
              <Typography>{current.description}</Typography>
                <div style={{paddingTop:'1rem'}}>
                  <Button variant="contained" disabled={index === tutorialSteps.length-1} onClick={handleNext}>
                    Learn more
                  </Button>
                  <Button disabled={index === 0} onClick={handleBack}>
                    Back
                  </Button>
                </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Grid>
  )
}


function Testimonial({ image, name, text}: {image: string, name: string, text: string}){
  return(
    <Grid item xs={5}>
      <img src={image} data-align="left" style={{borderRadius:20, paddingRight:'0.5rem', objectFit:'cover', width:100, height:100}}/>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="caption" color="text.secondary">
      {text}
      </Typography>
    </Grid>
  )
}

export default function LandingPage(props: any){

  return (
    <Grid container style={{ gap: 15 }} direction="row" justifyContent="center" alignItems="stretch">
      <HeaderCard />
      <Grid item xs={3}>
      <Button fullWidth variant="contained" size="large" endIcon={<PersonAddAltIcon />}>
            Create account
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="contained" size="large" startIcon={<PersonOutlineIcon />}>
            Login
          </Button>
      </Grid>
      <Divider style={{width:'100%'}} />
      <Testimonial 
        name={"Some famous person"}
        image={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"}
        text={"The new search capabilities and enhanced interoperability of the medical reports facilitation system have been a game-changer for our practice. It's now so much easier to access and share medical reports across different EHR systems, saving us time and improving patient care."}
        />
      <Testimonial         
        name={"Some other famous"}
        image={"https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        text={"The customizable dashboards and real-time notifications in the medical reports facilitation system have made managing our patient information a breeze. With the advanced analytics tools, we can identify areas for improvement and make data-driven decisions to improve patient outcomes. This system has truly transformed the way we work."}
        />
      <Grid item><Typography variant='h4'>It&rsquo;s simple!</Typography></Grid>
      <Tutorial />
      <Divider style={{width:'100%'}} />
      <SmallerCard />
      <SmallerCard />
    </Grid>
  );
}
