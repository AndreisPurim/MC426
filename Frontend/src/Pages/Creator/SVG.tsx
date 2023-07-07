import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Grid from '@mui/material/Grid';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import PublishIcon from '@mui/icons-material/Publish';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import InlineSVG from 'svg-inline-react';


import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import MenuItem from '@mui/material/MenuItem';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Part(props: any){
  function removePart(partID: any){
    let newSVG = props.creator.svg;
    newSVG.parts = newSVG.parts.filter(function(part:any){return part.partID !== partID})
    props.setCreator({...props.creator, svg: newSVG})
  }
  function changePart(part: any, event: any, bool: any){
    let newSVG = props.creator.svg;
    let index = newSVG.parts.indexOf(part);
    if(index !== -1){
      if(bool){
        newSVG.parts[index].valueTrue = event.target.value;
      }
      else{
        newSVG.parts[index].valueFalse = event.target.value;
      }
    }
    props.setCreator({...props.creator, svg: newSVG})
  }
  function changeOutputID(part: any, event: any){
    let newSVG = props.creator.svg;
    let index = newSVG.parts.indexOf(part);
    if(index !== -1){
      newSVG.parts[index].outputID = event.target.value
    }
    props.setCreator({...props.creator, svg: newSVG})
  }
  return(
    <Draggable draggableId={props.part.dragID} index={props.index}>
      {provided => (
        <Grid item xs={12} ref={provided.innerRef} {...provided.draggableProps}>
          <Paper elevation={3} style={{padding:'1rem'}}>
            <Grid container xs={12}  spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
              <Grid item xs={4} container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={4} {...provided.dragHandleProps}>
                  <IconButton size='small'>
                    <DragIndicatorIcon/>
                  </IconButton>
                  <IconButton size='small' onClick={()=>removePart(props.part.partID)}>
                    <ClearIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={8}>
                  <Select fullWidth value={props.part.outputID} onChange={(event)=>changeOutputID(props.part,event)}>
                    <MenuItem value={-1}><em>Always True</em></MenuItem>
                    {props.creator.outputs.map((variable: any)=><MenuItem key={variable.outputID} value={variable.outputID}>{variable.variable}</MenuItem>)}
                  </Select>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <TextField value={props.part.valueTrue} multiline onChange={(event)=>changePart(props.part,event,true)} fullWidth placeholder='True' />
                {props.part.outputID===-1?null:
                  <TextField value={props.part.valueFalse} multiline onChange={(event)=>changePart(props.part,event,false)} fullWidth placeholder='False' />
                }
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      )}
    </Draggable>
  )
}

export default function SVG(props: any){
  const [tab,setTab] = React.useState(0);
  const changeBase=(event:any)=>{
    let newSVG = props.creator.svg;
    newSVG.base = event.target.value;
    props.setCreator({...props.creator, svg: newSVG})
  };
  function buildSVG(){
    let SVGtext = props.creator.svg.base;
    SVGtext += props.creator.svg.parts.map((part:any)=>(part.outputID!==-1&&!part.show)?part.valueFalse:part.valueTrue).join("")
    return SVGtext+'</svg>'
  }
  const addPart=()=>{
    let newSVG = props.creator.svg;
    newSVG.parts.push({partID: newSVG.parts.length, dragID: newSVG.parts.length.toString(), show: true, outputID: -1, valueTrue: '', valueFalse: ''})
    props.setCreator({...props.creator, svg: newSVG})
  }
  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  function onDragEnd(result: any) {
    if(!result.destination){return}
    if(result.destination.index === result.source.index){return}
    let newSVG = props.creator.svg;
    newSVG.parts = reorder(newSVG.parts,result.source.index,result.destination.index);
    props.setCreator({...props.creator, svg: newSVG});
  }
  const changeTab=(event: any, newTab: any)=>{setTab(newTab)};
  function changeSwitch(part: any,event: any){
    let newSVG = props.creator.svg;
    let index = newSVG.parts.indexOf(part);
    if(index !== -1){
      newSVG.parts[index].debug = event.target.checked
    }
    props.setCreator({...props.creator, svg: newSVG})
  }
  return(
    <>
      {/* <Grid item xs={12}>
        <input accept="image/*" type="file" id='inputSVG' style={{display:'none'}}/>
        <label htmlFor='inputSVG'>
          <Button variant="outlined" color="primary" component="span" startIcon={<PublishIcon />}>
            Upload Base SVG
          </Button>
        </label>
      </Grid> */}
      <Grid item xs={6} container direction="column" justifyContent="center" alignItems="stretch">
        <Grid item xs={12} style={{marginLeft:'auto', marginRight: 'auto'}}>
          <Tabs value={tab} onChange={changeTab}  indicatorColor="primary" textColor="primary" style={{marginLeft:'auto', marginRight:'auto'}}>
            <Tab label="Create"/>
            {/* <Tab label="Help"/> */}
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding:'2rem'}} elevation={3}>
            <Grid container xs={12} spacing={2} direction="column" justifyContent="flex-start" alignItems="stretch">
              <Grid item style={{marginLeft:'auto', marginRight:'auto', border:'thin solid gray', borderRadius:'10px'}}>
                <InlineSVG src={buildSVG()}/>
              </Grid>
              {!tab?
                <>
                  <Grid item xs={12}>
                    <TextField fullWidth value={props.creator.svg.base} multiline onChange={changeBase} label="Base (start with <svg>...)" />
                  </Grid>
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="svgparts">
                      {provided => (
                        <Grid item xs={12} spacing={1} container direction="column" justifyContent="flex-start" alignItems="stretch" ref={provided.innerRef} {...provided.droppableProps}>
                          {props.creator.svg.parts.map((part: any, index: any)=>
                            <Part {...props} part={part} index={index} key={part.dragID} />
                          )}
                          {provided.placeholder}
                        </Grid>
                      )}
                    </Droppable>
                    <Grid item style={{marginLeft:'auto', marginRight:'auto'}}>
                      <IconButton onClick={addPart}>
                        <ControlPointIcon />
                      </IconButton>
                    </Grid>
                  </DragDropContext>
                </>
              :
              null
                // props.creator.svg.parts.map(part=>
                //   part.outputID===-1? null:
                //     <Grid item xs={12}>
                //       {props.creator.outputs.find(output => part.outputID === output.outputID).variable} 
                //       <Switch checked={part.debug} onChange={(event)=>changeSwitch(part,event)}/>
                //     </Grid>
                // )
              }
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}