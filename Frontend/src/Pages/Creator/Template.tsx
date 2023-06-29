
import Grid from '@mui/material/Grid';
import JoditEditor from "jodit-react";
import React from 'react';
import Paper from '@mui/material/Paper';

export default function Template(props: any){
	const editor = React.useRef(null)
	const config = {
        height: "100vh",
        toolbarAdaptive: false,
        readonly: false,
        extraButtons: [
            {
              name: 'Input Variables',
              iconURL: 'http://xdsoft.net/jodit/logo.png',
              list: props.creator.questions.map((x: any) => x.variable),
              exec: function(editor: any, t: any, {control}: any) {
                if(control.args){
                  let key = control.args[0];
                  editor.s.insertHTML('<med-var class="'+key+'" style="color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;">'+key+'</med-var>')
                }
              },
              template: (editor: any, key: any, value: any) => {
                  return '<span>'+value+'</span>';
              }
            },
            {
              name: 'Add QR Code',
              iconURL: 'http://xdsoft.net/jodit/logo.png',
              exec: function(editor: any, t: any, {control}: any) {
                editor.s.insertHTML('<img class="qrcode" width="200" height="200" src=\'https://andreispurim.github.io/Imagem1.png\'/>')
              },
              template: (editor: any, key: any, value: any) => {
                  return '<span>'+value+'</span>';
              }
            },
            {
              name: 'Add SVG',
              iconURL: 'http://xdsoft.net/jodit/logo.png',
              exec: function(editor: any, t: any, {control}: any){
                editor.s.insertHTML('<img class="svg" width="200" src=\'https://andreispurim.github.io/svg_template.png\'/>')
              },
              template: (editor: any, key: any, value: any) => {
                  return '<span>'+value+'</span>';
              }
            }
        ],
      }
  const handleChange=(newContent: any)=>{
    props.setCreator({...props.creator, template: newContent})
  }
  return (
    <Grid item>
      <Paper elevation={3} style={{width: '210mm', height: '100vh'}}>
        <JoditEditor ref={editor} value={props.creator.template} config={config} onBlur={handleChange} />
      </Paper>
    </Grid>
  )
}