import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Publish(props: any){
  const getPublish=()=>{
    if(props.control.tempData&&(props.control.formID===props.control.tempData.id)){
      const publishData = props.example.rows.find((row: any)=>row.id===props.control.formID)
      publishData.last_updated = new Date().toJSON();
      if(Array.isArray(publishData.keywords)){
        publishData.keywords = publishData.keywords.join(',');
      }
      return publishData;
    }
    else{
      return {
        id: props.creator.formID,
        editable: true,
        name: '',
        last_updated: new Date().toJSON(),
        field: '',
        creator: props.control.user.firstname + ' ' + props.control.user.lastname ,
        preview: '',
        creator_avatar: props.control.user.avatar,
        dynamic_image: false,
        creator_id: props.control.user.id,
        keywords: '',
        questions: props.creator.questions.length,
        uses: 0,
        description: '',
        paragraph: '',
      }
    }
  }
  const [publish, setPublish] = React.useState(getPublish())
  const changeTitle=(event: any)=>{setPublish({...publish, name: event.target.value})};
  const changeField=(event: any)=>{setPublish({...publish, field: event.target.value})};
  const changeDescription=(event: any)=>{setPublish({...publish, description: event.target.value})};
  const changePreview=(event: any)=>{setPublish({...publish, preview: event.target.value})};
  const changeKeywords=(event: any)=>{setPublish({...publish, keywords: event.target.value})};
  const changeMore=(event: any)=>{setPublish({...publish, paragraph: event.target.value})};
  const savePublish=()=>{
    const newRows = props.example.rows;
    const newRow = publish;
    if(!Array.isArray(newRow.keywords)){
      newRow.keywords = [...new Set(newRow.keywords.split(',').map((keyword: any)=>keyword.trim()))];
    }
    const currentRow = newRows.find((rows: any)=>rows.id===props.creator.id)
    newRow.id = props.creator.id;
    if(currentRow){
      newRows[newRows.indexOf(currentRow)] = newRow;
    }
    else{
      newRows.push(newRow);
      const newUsers = props.example.users
      newUsers[props.control.user.username].created.push(newRow.id)
    }
    props.example.forms[newRow.id] = props.creator;
    const newForms = props.example.forms
    newForms[newRow.id] = props.creator;
    function formatQuestions(question: any){
      if(question.type==='Text'){
        return {
          isRequired: question.required,
          type: question.type.toLowerCase(),
          name: question.variable,
          title: question.questionLabel,
          defaultAnswer: question.default,
        }
      }
      else if(question.type==='Number'){
        return {
          isRequired: question.required,
          // minValue: question.min,
          // maxValue: question.max,
          type: "text",
          name: question.variable,
          title: question.questionLabel,
          // defaultAnswer: question.default,
        }
      }
      else if(question.type==='Choice'){
        return {
          isRequired: question.required,
          type: "radiogroup",
          name: question.variable,
          title: question.questionLabel,
          choices: question.choices.map((choice: any)=>choice.text),
          hasOther: question.others
        }
      }
      else if(question.type==='Multiple Choice'){
        return {
          isRequired: question.required,
          type: "checkbox",
          name: question.variable,
          title: question.questionLabel,
          choices: question.choices.map((choice: any)=>choice.text),
          hasOther: question.others
        } 
      }
    }
    newForms[newRow.id].formatted = {
      questions: props.creator.questions.map((question: any)=>formatQuestions(question)),
      template: props.creator.template,
      svg: {
        name: "svg",
        begin: props.creator.svg.base,
        end: "</svg>",
        organs: props.creator.svg.parts.map((part: any)=>part.valueTrue),
      }
    }
    props.setExample({...props.example, qforms: props.example.qforms+1, forms: newForms, rows: newRows})
    props.setControl({...props.control, formID: null, setData: {}, view: 'user'})
  }
  return(
    <Grid item xs={4}>
      <Card style={{minWidth:'20rem'}} elevation={3}>
          <CardHeader
            avatar={<Avatar src={publish.creator_avatar} />}
            action={<Tooltip title="Options"><IconButton><MoreVertIcon /></IconButton></Tooltip>}
            title={'Created by '+publish.creator}
            subheader={'FormID '+props.creator.id+'.Last update: '+new Date().toISOString().slice(0, 10)}
          />
          <CardContent>
            <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
              <Grid item xs={12}>
                <TextField value={publish.name} onChange={changeTitle} fullWidth required label="Title" />
              </Grid>
              <Grid item xs={12}>
                <TextField value={publish.field} onChange={changeField} fullWidth required label="Field" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField value={publish.description} onChange={changeDescription} fullWidth required label="Description" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField helperText="Example: https://images.sampletemplates.com/wp-content/uploads/2017/02/Sample-Medical-Reports.jpg" value={publish.preview} onChange={changePreview} fullWidth required label="Background URL" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField value={publish.keywords} onChange={changeKeywords} fullWidth required label="Keywords separated by ," variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Questions:</b> {publish.questions} Questions
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField value={publish.read_more} onChange={changeMore} fullWidth label="Read more (Optional)" multiline rows={8} variant="outlined" />
              </Grid>
            </Grid>
          </CardContent>
          <DialogActions style={{paddingTop: 0}}>
            <Button disabled={publish.title===''||publish.description===''||publish.preview===''||publish.keywords===''} onClick={savePublish} color="primary">
              Publish
            </Button>
          </DialogActions>
        </Card>
    </Grid>
  )
}