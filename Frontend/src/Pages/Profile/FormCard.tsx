import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Collapse from '@mui/material/Collapse';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/material/styles';
import React from 'react';
import TableCell from '@mui/material/TableCell';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function FormCard(props: any){
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const useForms = () => {
    props.setControl({...props.control, view: 'form', tempData:{}, formID: props.row?.id})
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const editForms=()=>{
    props.setControl({...props.control, view: 'creator', tempData: props.row, formID: props.row?.id });
  }
  return (
    <TableCell>
      <Tooltip title="See Form">
        <IconButton onClick={handleClickOpen}>
          <ChevronRightIcon />
        </IconButton>
      </Tooltip>
      <Dialog onClose={handleClose} open={open} fullWidth maxWidth='sm'>
        <Card>
          <CardHeader
            avatar={<Avatar src={props.row?.creator_avatar} />}
            action={<Tooltip title="Options"><IconButton><MoreVertIcon /></IconButton></Tooltip>}
            title={'Created by '+props.row?.creator}
            subheader={'FormID '+props.row?.id+'. Last update: '+new Date().toISOString().slice(0, 10)}
          />
          <CardContent>
            <Grid container spacing={1} direction="row" justifyContent="flex-start" alignItems="center">
              <Grid item>
                <Typography variant="h4" component="span">{props.row.name}</Typography>
              </Grid>
              <Grid item>
              <Chip variant="outlined" label={props.row.field} color='primary'/>
              </Grid>
              {!props.row.dynamic_image? null:
                <Grid item>
                  <Chip variant="outlined" label={'Dynamic Image'} color='primary'/>
                </Grid>
              }
            </Grid>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.row.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Keywords:</b> {props.row?.keywords?.join(', ')}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Questions:</b> {props.row.questions.length} Questions
            </Typography>
            {!props.row.paragraph? null:
              <>
                <Link component="button" onClick={handleExpandClick}>Read {expanded?'less':'more'}</Link>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <Typography paragraph>
                    {props.row.paragraph}
                  </Typography>
                </Collapse>
              </>
            }
          </CardContent>
          {props.readingQRCode? null:
            <DialogActions style={{paddingTop: 0}}>
              {props.control.user?.id !== props.row?.creator_id? null:
                <Button disabled={!props.row.editable} onClick={editForms} color="primary">
                  Edit
                </Button>
              }
              <Button onClick={useForms} color="primary">
                Use
              </Button>
            </DialogActions>
          }
        </Card>
      </Dialog>
    </TableCell>
  )
}