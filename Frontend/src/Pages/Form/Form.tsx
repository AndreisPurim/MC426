import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React from 'react';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';


import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



import Download from './Download';
import { getTouchRippleUtilityClass } from '@mui/material';

export default function Form(props: any){
    const [answers, setAnswers] = React.useState({
      step: 0,
      answers: {...props.control.tempData},
      questions: props.example.forms[props.control.formID].formatted,
    });
    const back=()=>{
      if(answers.step){
        setAnswers({...answers, step: answers.step-1})
      }
      else{
        props.setControl({...props.control, view: 'profile'})
      }
    }
    const forward=()=>{
      setAnswers({...answers, step: answers.step+1})
    }
    function handleChange(id: string,event: any){
      let newAnswers = answers.answers
      newAnswers[id] = event.target.value
      setAnswers({...answers, answers: newAnswers})
    }
    console.log(answers)
    const missingRequired=()=>{
      for(let q in answers.questions.questions){
        if(answers.questions.questions[q].isRequired&&!(answers.questions.questions[q].name in answers.answers)){
          return true
        }
      }
      return false
    }
    const sendExtraProps = {...props, answers, setAnswers}
    return (
      <Grid container direction="column" justifyContent="center" alignItems="stretch" xs={12} spacing={2} style={{marginTop: '2rem', }}>
        <Grid item xs={3} style={{width: '100%', marginLeft:'auto',marginRight:'auto'}}>
          <Stepper activeStep={answers.step} alternativeLabel style={{ backgroundColor: "transparent" }}>
            <Step><StepLabel>Answer Forms</StepLabel></Step>
            <Step><StepLabel>Verify and Download</StepLabel></Step>
          </Stepper>
        </Grid>
        {answers.step?
          <Download {...sendExtraProps} />
        :answers.questions.questions.length?
          <Grid
            item
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={1}
          >
            {answers.questions.questions.map((question: any) =>
              <Grid item key={question.name}>
                {question.type==='text'?
                  <TextField fullWidth 
                  value={answers.answers[question.name]}
                  onChange={(event)=>handleChange(question.name,event)}
                  required={question.isRequired} label={question.title} variant="outlined" />
                :question.type==='dropdown'?
                  <FormControl fullWidth>
                    <InputLabel>{question.title}</InputLabel>
                    <Select label={question.title}
                      value={answers.answers[question.name]}
                      onChange={(event)=>handleChange(question.name,event)}
                    >
                      {question.choices.map((choice: any) => <MenuItem key={choice} value={choice}>{choice}</MenuItem>)}
                    </Select>
                </FormControl>
                :JSON.stringify(question)}
              </Grid>
            )}
          </Grid>
        : null}
        <Grid item xs={2} style={{marginLeft:'auto',marginRight:'auto'}}>
          <ButtonGroup variant="contained" color="primary">
            <Button onClick={back}>{answers.step?'Back':'Cancel'}</Button>
            <Button onClick={forward} disabled={answers.step===1||missingRequired()}>Forward</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    )
  } 