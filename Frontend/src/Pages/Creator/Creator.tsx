import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import Questions from './Questions';
// import Variables from './Variables';
import SVG from './SVG';
import Template from './Template';
import Publish from './Publish';

function ErrorCard(){
  return(
    <Grid item>
      There is an error with your forms creator. Please try moving back or forth, or contact the team
    </Grid>
  )
}

export default function Creator(props: any){
  const getCreator=()=>{
    if(props.control.tempData&&(props.control.formID===props.control.tempData.id)){
      const editData = props.control.tempData;
      editData.card = 0;
      return  editData;
    }
    else{
      return {
        id: props.example.qforms, card: 0,
        questions: [],qlength: 0,
        outputs: [], nodes: [], qnodes: 0, nodesUsedIDs: new Set(), selnode: null,
        template: '',
        svg: {base: '',parts: [],used_variables: []}
      }
    }
  };
  const [creator, setCreator] = React.useState(getCreator());
  const back=()=>{
    if(creator.card){
      setCreator({...creator, card: creator.card-1})
    }
    else{
      props.setControl({...props.control, view: 'user'})
    }
  }
  const forward=()=>{
    setCreator({...creator, card: creator.card+1})
  }
  const sendExtraProps = {...props, creator, setCreator}
  function renderStep(){
    switch(creator.card){
        case 0: return <Questions {...sendExtraProps}/>
        case 1: return <SVG {...sendExtraProps}/>
        case 2: return <Template {...sendExtraProps}/>
        case 3: return <Publish {...sendExtraProps}/>
        default: return <ErrorCard />
    }
  }
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2} style={{marginTop: '2rem' }}>
      <Grid item xs={5} style={{width: '100%'}}>
        <Stepper activeStep={creator.card} alternativeLabel style={{ backgroundColor: "transparent" }}>
          <Step><StepLabel>Create Questions</StepLabel></Step>
          <Step><StepLabel>Create SVG</StepLabel></Step>
          <Step><StepLabel>Create Template</StepLabel></Step>
          <Step><StepLabel>Publish</StepLabel></Step>
        </Stepper>
      </Grid>
      <Grid item xs={12}>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={back}>{creator.card?'Back':'Cancel'}</Button>
            <Button onClick={forward} disabled={creator.card>=3}>Continue</Button>
          </ButtonGroup>
      </Grid>
      {renderStep()}
    </Grid>
  )
}