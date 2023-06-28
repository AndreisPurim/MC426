import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React from 'react';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';

import Download from './Download';

export default function Form(props: any){
    const [answers, setAnswers] = React.useState({
      step: 0,
      answers: {...props.control.tempData},
      questions: props.example.forms[props.control.formID].formatted,
    });
    // Aqui se estivessemos usando o Material survey
    const saveAnswers=(newAnswers: any)=>{
      setAnswers({...answers, step:1, answers: newAnswers})
    }
    const back=()=>{
      if(answers.step){
        setAnswers({...answers, step: answers.step-1})
      }
      else{
        props.setControl({...props.control, view: 'user'})
      }
    }
    console.log(answers.questions)
    const sendExtraProps = {...props, answers, setAnswers}
    return (
      <Grid container direction="column" justifyContent="center" alignItems="stretch" xs={12} spacing={2} style={{marginTop: '2rem', }}>
        <Grid item xs={3} style={{width: '100%', marginLeft:'auto',marginRight:'auto'}}>
          <Stepper activeStep={answers.step} alternativeLabel style={{ backgroundColor: "transparent" }}>
            <Step><StepLabel>Answer Forms</StepLabel></Step>
            <Step><StepLabel>Verify and Download</StepLabel></Step>
          </Stepper>
        </Grid>
        <Grid item xs={2} style={{marginLeft:'auto',marginRight:'auto'}}>
          <Button variant="contained" color="primary" size="small" onClick={back}>{answers.step?'Back':'Cancel'}</Button>
        </Grid>
        {answers.step?
          <Download {...sendExtraProps} />
        :answers.questions.questions.length?
          <Grid item xs={12} style={{minWidth: '50rem', marginLeft:'auto',marginRight:'auto'}}>
            {answers.questions.questions.map((question: any) =>
              <p key={question.name}>{JSON.stringify(question)}</p>
            )}
            {/* <Survey form={answers.questions} defaultAnswers={answers.answers} autocompleteRequest={function noRefCheck() {}} onFinish={saveAnswers}/> */}
          </Grid>
        : null}
      </Grid>
    )
  } 