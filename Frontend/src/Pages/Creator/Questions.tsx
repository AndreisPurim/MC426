
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';
import React from 'react';

import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Link from '@mui/material/Link';
import FormGroup from '@mui/material/FormGroup';

import TextFieldsIcon from '@mui/icons-material/TextFields';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import ExposureIcon from '@mui/icons-material/Exposure';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import LoopIcon from '@mui/icons-material/Loop';
import PostAddIcon from '@mui/icons-material/PostAdd';

import ClearIcon from '@mui/icons-material/Clear';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Typography from '@mui/material/Typography';

const typeOptions = [
  {label: 'Text', icon: <TextFieldsIcon/>},
  {label: 'Number', icon: <ExposureIcon/>},
  {label: 'Choice', icon: <RadioButtonCheckedIcon/>},
  {label: 'Multiple Choice', icon: <CheckBoxIcon/>},
]
const otherOptions = [
  {label: 'Page', icon: <PostAddIcon/>},
  {label: 'Loop', icon: <LoopIcon/>},
]

const otherOptionsSet = new Set(otherOptions.map(option=>option.label))
function checkOther(type: any){
  return otherOptionsSet.has(type)
}

function Question(props: any) {
  const changeDefault=(event: any,type: any,choiceID: any)=>{
    const newQuestions = props.creator.questions
    if(event.target.value!==''){
      if(type==='Number'){
        if(!isNaN(Number(event.target.value))){
          newQuestions[props.creator.questions.indexOf(props.question)].default = Number(event.target.value);
        }
      }
      else if(type==='Choice'){
        if(newQuestions[props.creator.questions.indexOf(props.question)].default === Number(choiceID)){
          newQuestions[props.creator.questions.indexOf(props.question)].default = null;
        }
        else{
          newQuestions[props.creator.questions.indexOf(props.question)].default = Number(choiceID);
        }
      }
      else if(type==='Multiple Choice'){
        if(newQuestions[props.creator.questions.indexOf(props.question)].default === null){
          newQuestions[props.creator.questions.indexOf(props.question)].default = (new Set()).add(choiceID)
        }
        else if(newQuestions[props.creator.questions.indexOf(props.question)].default.has(choiceID)){
          newQuestions[props.creator.questions.indexOf(props.question)].default.delete(choiceID)
        }
        else{
          newQuestions[props.creator.questions.indexOf(props.question)].default.add(choiceID)
        }
      }
      else if(type==='Text'){
        newQuestions[props.creator.questions.indexOf(props.question)].default = event.target.value;
      }
    }
    else{
      newQuestions[props.creator.questions.indexOf(props.question)].default = null;
    }
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const changeLoopvar=(event: any)=>{
    const newQuestions = props.creator.questions
    newQuestions[props.creator.questions.indexOf(props.question)].loopvar = event.target.value;
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const changeMinMax=(event: any)=>{
    const newQuestions = props.creator.questions
    if(event.target.value!==''){
      newQuestions[props.creator.questions.indexOf(props.question)][event.target.name] = event.target.value;
    }
    else{
      newQuestions[props.creator.questions.indexOf(props.question)][event.target.name] = null
    }
    props.setCreator({...props.creator, questions: newQuestions})
  }
  return (
    <Draggable draggableId={props.question.dragID} index={props.index}>
      {provided => (
        <Grid item xs={12} ref={provided.innerRef} {...provided.draggableProps}>
          <Paper elevation={checkOther(props.question.type)?0:3} style={checkOther(props.question.type)?{backgroundColor:'transparent'}:{}}>
            <Grid xs={12} container direction="column" justifyContent="flex-start" alignItems="stretch"  style={{padding:'0 2rem 0 2rem'}}>
              <Grid item {...provided.dragHandleProps} style={{marginLeft:'auto',marginRight:'auto',minHeight:'2rem'}}>
                <DragHandleIcon />
              </Grid>
              <QuestionHead {...props} />
              <Grid item xs={12} spacing={1} container direction="row" justifyContent="flex-start" alignItems="center" style={{padding:'1rem 0 1rem 0'}}>
                {props.question.type==='Loop'?
                  <React.Fragment>
                    <Grid item xs={3}>
                      <FormControlLabel value="start" control={<Switch color="primary" value={props.question.required} />} label={props.question.required?"Variable":"Range"} labelPlacement="end"/>
                    </Grid>
                    <Grid item xs={3}>
                      {props.question.required?
                        <Select fullWidth value={props.question.loopvar} onChange={changeLoopvar}>
                          {props.creator.questions.slice(0,props.creator.questions.indexOf(props.question)).map((question: any)=>
                            question.type!=='Number'? null:
                              <MenuItem key={question.questionID} value={question.questionID}>
                                <ListItemText primary={question.variable}/>
                              </MenuItem>
                          )}
                        </Select>
                      :
                        <Input fullWidth value={props.question.max} name="max" onChange={changeMinMax} type="number" placeholder="Number of times"/>
                      }
                    </Grid>
                  </React.Fragment>
                :props.question.type==='Number'?
                  <React.Fragment>
                    <Grid item xs={3}>
                      <Input fullWidth value={props.question.min} name="min" onChange={changeMinMax} type="number" placeholder="No min"/>
                    </Grid>
                    <Grid item xs={3}>
                      <Input fullWidth value={props.question.max} name="max" onChange={changeMinMax} type="number" placeholder="No max"/>
                    </Grid>
                    <Grid item xs={6}/>
                    <Grid item xs={6}>
                      <Input fullWidth value={props.question.default} onChange={(event)=>changeDefault(event,props.question.type,-1)} type="number" placeholder="Default"/>
                    </Grid>
                  </React.Fragment>
                :props.question.type==='Text'?
                  <Grid item xs={6}>
                    <TextField fullWidth value={props.question.default} onChange={(event)=>changeDefault(event,props.question.type,-1)} placeholder="Default"/>
                  </Grid>
                :props.question.type==='Choice'||props.question.type==='Multiple Choice'?
                  <QuestionChoices {...props} changeDefault={changeDefault}/>
                :null
                }
              </Grid>
            </Grid>
            <Divider />
            <QuestionFooter {...props}/>
          </Paper>
        </Grid>
      )}
    </Draggable>
  );
}

function QuestionChoices(props: any){
  const addChoice=()=>{
    const newQuestions = props.creator.questions;
    const index = newQuestions.indexOf(props.question);
    const newChoice = {choiceID: newQuestions[index].qchoices, dragID: newQuestions[index].qchoices.toString(), text:'Option '+newQuestions[index].qchoices};
    newQuestions[index].choices.push(newChoice);
    newQuestions[index].qchoices = newQuestions[index].qchoices+1;
    props.setCreator({...props.creator, questions: newQuestions})
  }
  function deleteChoice(choice: any,event: any){
    const newQuestions = props.creator.questions
    const index = props.creator.questions.indexOf(props.question)
    newQuestions[index].choices.splice(newQuestions[index].choices.indexOf(choice), 1)
    props.setCreator({...props.creator, questions: newQuestions})
  }
  function changeChoice(choice: any,event: any){
    const newQuestions = props.creator.questions
    const questionIndex = newQuestions.indexOf(props.question)
    const choiceIndex = newQuestions[questionIndex].choices.indexOf(choice)
    newQuestions[questionIndex].choices[choiceIndex].text = event.target.value
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const addOthers=()=>{
    const newQuestions = props.creator.questions
    newQuestions[props.creator.questions.indexOf(props.question)].others = true
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const removeOthers=()=>{
    const newQuestions = props.creator.questions
    newQuestions[props.creator.questions.indexOf(props.question)].others = false
    props.setCreator({...props.creator, questions: newQuestions})
  }
  function onDragEnd(result: any) {
    if(!result.destination){return}
    if(result.destination.index === result.source.index){return}
    const newQuestions = props.creator.questions;
    const index = newQuestions.indexOf(props.question);
    newQuestions[index].choices = reorder(newQuestions[index].choices,result.source.index,result.destination.index);
    props.setCreator({...props.creator, questions: newQuestions});
  }
  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  return(
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={"choices_0"}>
        {(provided) => (
          <List dense ref={provided.innerRef}>
            {props.question.choices.map((choice: any,index: any)=>
              <Draggable draggableId={choice.dragID} index={index} key={choice.choiceID}>
                {provided => (
                  <ListItem ref={provided.innerRef} {...provided.draggableProps}>
                    <ListItemIcon>
                      <IconButton size="small" {...provided.dragHandleProps}>
                        <DragIndicatorIcon />
                      </IconButton>
                      <IconButton size="small" onClick={(event)=>deleteChoice(event,choice)}>
                        <ClearIcon />
                      </IconButton>
                      {props.question.type==='Choice'?
                        <IconButton size="small" onClick={(event)=>props.changeDefault(event,props.question.type,choice.choiceID)}>
                          {props.question.default===choice.choiceID?<RadioButtonCheckedIcon/>:<RadioButtonUncheckedIcon/>}  
                        </IconButton>
                      :
                        <IconButton size="small" onClick={(event)=>props.changeDefault(event,props.question.type,choice.choiceID)}>
                          {props.question.default&&props.question.default.has(choice.choiceID)?<CheckBoxIcon />:<CheckBoxOutlineBlankIcon/>}
                        </IconButton>
                      }
                    </ListItemIcon>
                    <ListItemText primary={<TextField value={choice.text} onChange={event=>changeChoice(choice,event)} />} />
                  </ListItem>
                )}
              </Draggable>
            )}
            {provided.placeholder}
            {!props.question.others? null:
              <ListItem >
                <ListItemIcon>
                    <IconButton size="small" disabled>
                      <DragIndicatorIcon />
                    </IconButton>
                    <IconButton size="small" onClick={removeOthers}>
                      <ClearIcon />
                    </IconButton>
                    <IconButton size="small" disabled>
                      {props.question.type==='Choice'?<RadioButtonUncheckedIcon/>:<CheckBoxOutlineBlankIcon/>}
                    </IconButton>
                </ListItemIcon>
                <ListItemText primary={<TextField value="Others" disabled />}/>
              </ListItem>
            }
            <ListItem>
              <ListItemText primary={<span><Link component="button" onClick={addChoice}>Add Option</Link> or <Link component="button" onClick={addOthers}>Add &apos;Others&apos;</Link></span>} />
            </ListItem>
          </List>
        )}
      </Droppable>
    </DragDropContext>
  )
}

function QuestionHead(props: any){
  const changeQuestion=(event: any)=>{
    const newQuestions = props.creator.questions
    const newVariable = event.target.value.toLowerCase().replace(/\s/g, '_').replace(/[^a-z0-9_]/gi,'');
    newQuestions[props.creator.questions.indexOf(props.question)].questionLabel = event.target.value
    newQuestions[props.creator.questions.indexOf(props.question)].variable = newVariable
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const changeType=(event: any)=>{
    const newQuestions = props.creator.questions
    // Resets information except if its choice <-> multiple choice, then conserves choice vector.
    let newChoices = []
    let newQChoices = 0;
    let varName = props.question.variable
    if(props.question.type==='Choice'||props.question.type==='Multiple Choice'){
      newChoices = newQuestions[props.creator.questions.indexOf(props.question)].choices
      newQChoices = newQuestions[props.creator.questions.indexOf(props.question)].qchoices
    }
    if(event.target.value==='Loop'){
      varName = 'loopID_'+props.question.questionID
    }
    else if(event.target.value==='Page'){
      varName = 'pageID_'+props.question.questionID
    }
    newQuestions[props.creator.questions.indexOf(props.question)] = {...newQuestions[props.creator.questions.indexOf(props.question)], type:event.target.value, variable: varName, loopvar: false,  default: null, min: null, max: null, others: false, qchoices: newQChoices, choices: newChoices};
    props.setCreator({...props.creator, questions: newQuestions})
  }
  return(
    <Grid item xs={12} container direction="row" justifyContent="space-between" alignItems="center">
      <Grid item xs={9} style={{paddingRight:'3rem'}}>
        <TextField fullWidth placeholder={props.question.type==="Page"?"Page Title":props.question.type==="Loop"?"Loop Title":"Question"} value={props.question.questionLabel} onChange={changeQuestion} variant="outlined" />
      </Grid>
      <Grid item xs={3}>
        <FormControl variant="outlined" fullWidth>
          <Select value={props.question.type} onChange={changeType} renderValue={(selected)=>selected}>
            <MenuItem value="" disabled>
              Input
            </MenuItem>
            {typeOptions.map(type=>
              <MenuItem key={type.label} value={type.label}>
                <ListItemIcon>
                  {type.icon}
                </ListItemIcon>
                <ListItemText primary={type.label}/>
              </MenuItem>
            )}
            <MenuItem value="others" disabled>
              Others
            </MenuItem>
            {otherOptions.map(type=>
              <MenuItem key={type.label} value={type.label}>
                <ListItemIcon>
                  {type.icon}
                </ListItemIcon>
                <ListItemText primary={type.label}/>
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

function QuestionFooter(props: any){
  const deleteQuestion=(event: any)=>{
    event.preventDefault();
    const newQuestions = props.creator.questions
    newQuestions.splice(props.creator.questions.indexOf(props.question), 1)
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const changeVariable=(event: any)=>{
    const treatedText = event.target.value.replace(/[^a-z0-9_]/gi,'');
    const newQuestions = props.creator.questions
    newQuestions[props.creator.questions.indexOf(props.question)].variable = treatedText
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const changeRequired=(event: any)=>{
    const newQuestions = props.creator.questions
    newQuestions[props.creator.questions.indexOf(props.question)].required = event.target.checked
    props.setCreator({...props.creator, questions: newQuestions})
  }
  return(
    <Grid item xs={12} container direction="row" justifyContent="flex-start" alignItems="center" style={{paddingLeft:'2rem'}}>
      <Grid item xs={checkOther(props.question.type)?2:4}>
        {checkOther(props.question.type)?<TextField fullWidth disabled value={props.question.variable}/>:<TextField fullWidth value={props.question.variable} onChange={changeVariable} placeholder="Variable Name" helperText="Variable Name" />}
      </Grid>
      <FormGroup row style={{marginLeft:'auto',padding:'0.3rem'}}>
        {checkOther(props.question.type)?null:<FormControlLabel value="start" control={<Switch color="primary" value={props.question.required} onChange={changeRequired} />} label={(props.question.required?"":"Not ")+ "Required"} labelPlacement="start"/>}
        <Tooltip title="Delete Question">
          <IconButton onClick={deleteQuestion}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </FormGroup>
    </Grid>
  )
}

export default function Questions(props: any){
  const addQuestion=()=>{
    const newQuestions = props.creator.questions
    const newQuestion = {questionID: props.creator.qlength, dragID: props.creator.qlength.toString(), type:'Text', variable: 'var_'+props.creator.qlength, questionLabel: '', required: false, default: null, min: null, max: null, loopvar: false, others: false, qchoices: 0, choices: []};
    newQuestions.push(newQuestion);
    props.setCreator({...props.creator, qlength: props.creator.qlength+1, questions: newQuestions})
  }
  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  function onDragEnd(result: any){
    if(!result.destination){return}
    if(result.destination.index === result.source.index){return}
    const newQuestions = reorder(props.creator.questions,result.source.index,result.destination.index);
    (newQuestions[result.destination.index] as any).loopvar = null;
    props.setCreator({...props.creator, questions: newQuestions});
  }
  return (
    <Grid item xs={5} spacing={3} container direction="column" justifyContent="flex-start" alignItems="stretch">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="questions">
          {provided => (
            <Grid item xs={12} spacing={4} container direction="column" justifyContent="flex-start" alignItems="strech" ref={provided.innerRef} {...provided.droppableProps}>
              {props.creator.questions.map((question: any, index: any) => (
                <Question {...props} question={question} index={index} key={question.dragID} />
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
        <Grid item style={{marginLeft:'auto',marginRight:'auto'}}>
          <IconButton onClick={addQuestion}>
            <ControlPointIcon style={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
      </DragDropContext>
    </Grid>
  )
}