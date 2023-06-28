import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import React from 'react';
import Paper from '@mui/material/Paper';

export default function Download(props: any){
    return(
        <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2}>
            <Grid item>
            <ButtonGroup size="large" color="primary">
                <Button>QRCode</Button>
            </ButtonGroup>
            </Grid>
            <Grid item>
                Editing!
            </Grid>
        </Grid>
    )
}


// Código da idéia antes de passarmos pro yarn:

// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Grid from '@material-ui/core/Grid';
// import React from 'react';
// import Paper from '@material-ui/core/Paper';
// import html2canvas from 'html2canvas';
// import JoditEditor from "jodit-react";
// import QRCode from 'qrcode.react'
// import InlineSVG from 'svg-inline-react';
// import { jsPDF } from 'jspdf';
// import ReactHtmlParser from 'react-html-parser';
// const YAML = require('json-to-pretty-yaml');

// const HTMLTemp = "<html><head><meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\"><style type=\"text/css\">@import url('https://themes.googleusercontent.com/fonts/css?kit=xTOoZr6X-i3kNg7pYrzMsnEzyYBuwf3lO_Sc3Mw9RUVbV0WvE1cEyAoIq5yYZlSc');.lst-kix_jgyitmidw11o-1>li:before{content:\"\\0025cb  \"}ul.lst-kix_jgyitmidw11o-8{list-style-type:none}.lst-kix_jgyitmidw11o-2>li:before{content:\"\\0025a0  \"}.lst-kix_jgyitmidw11o-7>li:before{content:\"\\0025cb  \"}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}.lst-kix_jgyitmidw11o-0>li:before{content:\"\\0025cf  \"}.lst-kix_jgyitmidw11o-8>li:before{content:\"\\0025a0  \"}.lst-kix_jgyitmidw11o-6>li:before{content:\"\\0025cf  \"}ul.lst-kix_jgyitmidw11o-2{list-style-type:none}.lst-kix_jgyitmidw11o-5>li:before{content:\"\\0025a0  \"}ul.lst-kix_jgyitmidw11o-3{list-style-type:none}ul.lst-kix_jgyitmidw11o-0{list-style-type:none}ul.lst-kix_jgyitmidw11o-1{list-style-type:none}.lst-kix_jgyitmidw11o-3>li:before{content:\"\\0025cf  \"}ul.lst-kix_jgyitmidw11o-6{list-style-type:none}ul.lst-kix_jgyitmidw11o-7{list-style-type:none}.lst-kix_jgyitmidw11o-4>li:before{content:\"\\0025cb  \"}ul.lst-kix_jgyitmidw11o-4{list-style-type:none}ul.lst-kix_jgyitmidw11o-5{list-style-type:none}ol{margin:0;padding:0}table td,table th{padding:0}.c20{border-right-style:solid;padding:3.6pt 3.6pt 3.6pt 3.6pt;border-bottom-color:#ffffff;border-top-width:0pt;border-right-width:0pt;border-left-color:#ffffff;vertical-align:top;border-right-color:#ffffff;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:162pt;border-top-color:#ffffff;border-bottom-style:solid}.c17{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#ffffff;border-top-width:0pt;border-right-width:0pt;border-left-color:#ffffff;vertical-align:top;border-right-color:#ffffff;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:444.8pt;border-top-color:#ffffff;border-bottom-style:solid}.c7{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:13pt;font-family:\"Lato\";font-style:normal}.c16{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:\"Raleway\";font-style:normal}.c9{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:10pt;font-family:\"Lato\";font-style:normal}.c5{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:13pt;font-family:\"Lato\";font-style:normal}.c12{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:\"Lato\";font-style:normal}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:6pt;font-family:\"Lato\";font-style:normal}.c26{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:10pt;font-family:\"Lato\";font-style:normal}.c19{color:#f2511b;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:16pt;font-family:\"Raleway\";font-style:normal}.c15{margin-left:36pt;padding-top:10pt;padding-left:0pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c25{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-family:\"Raleway\";font-style:normal}.c32{text-decoration-skip-ink:none;-webkit-text-decoration-skip:none;color:#1155cc;text-decoration:underline}.c28{padding-top:0pt;padding-bottom:0pt;line-height:1.15;text-align:left}.c21{padding-top:3pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c2{border-spacing:0;border-collapse:collapse;margin-right:auto}.c1{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c14{padding-top:6pt;padding-bottom:0pt;line-height:1.15;text-align:left}.c6{padding-top:4pt;padding-bottom:0pt;line-height:1.15;text-align:left}.c11{background-color:#ffffff;max-width:612pt;padding:0pt 0pt 0pt 0pt}.c3{orphans:2;widows:2}.c10{padding:0;margin:0}.c31{color:inherit;text-decoration:inherit}.c13{font-size:13pt;font-weight:700}.c8{font-size:14pt;font-weight:700}.c4{height:11pt}.c27{font-size:24pt}.c23{font-size:15pt}.c24{height:120pt}.c29{page-break-after:avoid}.c18{height:265pt}.c22{font-size:13pt}.c30{height:72pt}.title{padding-top:6pt;color:#000000;font-weight:700;font-size:24pt;padding-bottom:0pt;font-family:\"Raleway\";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:3pt;color:#f2511b;font-weight:700;font-size:16pt;padding-bottom:0pt;font-family:\"Raleway\";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:\"Lato\"}p{margin:0;color:#000000;font-size:11pt;font-family:\"Lato\"}h1{padding-top:4pt;color:#000000;font-weight:700;font-size:12pt;padding-bottom:0pt;font-family:\"Raleway\";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:6pt;color:#000000;font-weight:700;font-size:11pt;padding-bottom:0pt;font-family:\"Lato\";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:6pt;color:#666666;font-size:9pt;padding-bottom:0pt;font-family:\"Lato\";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:8pt;-webkit-text-decoration-skip:none;color:#666666;text-decoration:underline;font-size:11pt;padding-bottom:0pt;line-height:1.15;page-break-after:avoid;text-decoration-skip-ink:none;font-family:\"Trebuchet MS\";orphans:2;widows:2;text-align:left}h5{padding-top:8pt;color:#666666;font-size:11pt;padding-bottom:0pt;font-family:\"Trebuchet MS\";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:8pt;color:#666666;font-size:11pt;padding-bottom:0pt;font-family:\"Trebuchet MS\";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class=\"c11\"><p class=\"c28 c4\"><span class=\"c0\"></span></p><a id=\"t.8caa01fcb34e023ebdd45df42287a8eb1b170e26\"></a><a id=\"t.0\"></a><table class=\"c2\"><tbody><tr class=\"c24\"><td class=\"c20\" colspan=\"1\" rowspan=\"3\"><p class=\"c1 c29 title\" id=\"h.4prkjmzco10w\"><span>ISARVIT</span></p><p class=\"c21 subtitle\" id=\"h.o2iwx3vdck7p\"><span class=\"c19\">Cabinet m&eacute;dical</span></p><p class=\"c1\"><span class=\"c8\">&#12641;</span></p><h1 class=\"c6\" id=\"h.61e3cm1p1fln\"><span>Docteur</span></h1><p class=\"c1 c3\"><span class=\"c12\">Andreis Purim</span></p><p class=\"c1 c3 c4\"><span class=\"c12\"></span></p><h1 class=\"c6\" id=\"h.2scikwdztcso\"><span class=\"c16\">Docteur</span></h1><p class=\"c1 c3\"><span class=\"c12\">Joel Kalil</span></p><p class=\"c1\"><span class=\"c8\">&#12641;</span></p><h1 class=\"c6\" id=\"h.gbnhrfggwdei\"><span>Technicien</span></h1><p class=\"c1 c3\"><span class=\"c12\">Anthony Aug&eacute;</span></p><h1 class=\"c6\" id=\"h.tuqgnx7na2e5\"><span class=\"c16\">Technicien</span></h1><p class=\"c1 c3\"><span class=\"c12\">Colin Prudhomme</span></p><p class=\"c1 c3 c4\"><span class=\"c12\"></span></p><p class=\"c1 c3 c4\"><span class=\"c12\"></span></p><h1 class=\"c6\" id=\"h.2s45zonv4wip\"><span class=\"c16\">Technicien</span></h1><p class=\"c1 c3\"><span class=\"c12\">Lien du cabinet m&eacute;dical:</span></p><p class=\"c1 c3\"><span class=\"c32\"><a class=\"c31\" href=\"https://www.google.com/url?q=https://github.com/ISARVIT&amp;sa=D&amp;source=editors&amp;ust=1644182629369253&amp;usg=AOvVaw21IVOgXkkXvxbSXU56Nxox\">ISARVIT</a></span></p><p class=\"c1 c3 c4\"><span class=\"c12\"></span></p><h1 class=\"c6\" id=\"h.n2weeiexjv4e\"><span class=\"c16\">Signature Eletronique</span></h1><p class=\"c1 c3\"><span>ASB123</span></p></td><td class=\"c17\" colspan=\"1\" rowspan=\"3\"><h1 class=\"c14\" id=\"h.lf5wiiqsu4ub\"><span class=\"c23\">ID21340005</span></h1><p class=\"c1\"><span class=\"c7\">Patient Andreis PURIM, n&eacute;e le 07/04/1999 &nbsp;est venu &agrave; notre cabinet m&eacute;dical pour chercher une radiologie en lithiase.</span></p><p class=\"c1 c4\"><span class=\"c7\"></span></p><p class=\"c1\"><span class=\"c7\">Apr&egrave;s avis du m&eacute;decin g&eacute;n&eacute;raliste, nous avons d&eacute;cid&eacute; de r&eacute;aliser un CT Scan avec produit de contraste IV.</span></p><p class=\"c1 c4\"><span class=\"c7\"></span></p><p class=\"c1\"><span class=\"c7\">Le patient &eacute;tait f&eacute;brile au moment de l&#39;examen et nous avons trouv&eacute; la radiologie en phase aigu&euml;.</span></p><p class=\"c1 c4\"><span class=\"c7\"></span></p><p class=\"c1\"><span class=\"c22\">Il a eu une d&eacute;rivation des voies urinaires &agrave; la place de l&#39;examen</span></p><ul class=\"c10 lst-kix_jgyitmidw11o-0 start\"><li class=\"c15 li-bullet-0\"><span class=\"c5\">Anomalie h&eacute;patique d&eacute;tect&eacute;e</span></li><li class=\"c15 li-bullet-0\"><span class=\"c13\">Anomalie des surr&eacute;nales non d&eacute;tect&eacute;e</span></li></ul></td></tr><tr class=\"c30\"></tr><tr class=\"c18\"></tr></tbody></table><p class=\"c3 c4 c28\"><span class=\"c12\"></span></p></body></html>";


// export default function Download(props){
//   const editor = React.useRef(null)
//   const config = {height: "100%", toolbarAdaptive: false, readonly: false}
//   const [edit,setEdit]=React.useState(0)
//   function getOrgans(){
//     return props.answers.questions.svg.organs.map(organ=>organ.length!==1?organ[(Math.random()<0.5)|0]:organ[0]).join('')
//   }
//   const [organs, setOrgans] = React.useState( getOrgans());
//   function generateQRCode(){
//     return YAML.stringify({formID: props.control.formID, user: props.control.user.username, date: new Date().toISOString().slice(0, 10), answers: props.answers.answers})
//   }
//   function getTemplate(){
//     let answers = []
//     for (var key in props.answers.answers) {
//       if(props.answers.answers.hasOwnProperty(key)) {
//         answers.push( [ key, props.answers.answers[key] ] );
//       }
//     }
//     return HTMLTemp;
//     if(props.control.formID===0){
//       return answers.map(answer=>{
//         if(answer[0] in props.answers.questions.template){
//           let this_template = props.answers.questions.template[answer[0]]
//           if(this_template.complete){
//             return '<p>'+this_template.begin+answer[0]+this_template.end+'</p>'
//           }
//           else{
//             return '<p>'+this_template[answer[1]]+'</p>'
//           } 
//         }
//         else if(props.control.formID===0){
//           return Math.random()<0.5?'<p>User has chosen '+answer[1]+' in the variable '+answer[0]+'</p>':'<p>The answer to '+answer[0]+' was '+answer[1]+'</p>'
//         }
//         else{
//           return '<p>Answer to '+answer[1]+' is '+answer[0]+'</p>'
//         }
//       }).join("")
//     }
//     console.log(props.answers.questions)
//     console.log(props.example)
//     let variableschanged = props.answers.questions.template.split("<med-var").map(part=>{
//       if(part.includes('</med-var>')){
//         let varpart = part.split('</med-var>')
//         let vari = (varpart[0].substring(varpart[0].indexOf('">')+2))
//         return props.answers.answers[vari]+varpart[1]
//       }
//       else{
//         return part
//       }
//     }).join("")
//     return variableschanged.split("<img").map(part=>{
//       if(part.includes('qrcode')){
//         let varpart = part.split('">')
//         console.log(varpart)
//         return varpart[1]
//       }
//       else{
//         return part
//       }
//     }).join("");
//   }
//   const handleChange=(newContent)=>{
//     props.setCreator({...props.creator, template: newContent})
//   }
//   const svgSource = props.answers.questions.svg.begin + organs + props.answers.questions.svg.end
//   function download(text){
//     const input = document.getElementById('divToPrint')
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'JPEG', 0, 0);
//       let filename = "FormID_"+props.control.formID+"_by_"+props.control.user.username+"_"+new Date().getTime();
//       pdf.save(filename);
//     });
//   }
//   return(
//     <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2}>
//       <Grid item>
//         <ButtonGroup size="large" color="primary">
//           <Button value={edit} onClick={()=>setEdit(1)}>Edit</Button>
//           {edit===0?<Button onClick={download}>Save</Button>
//           :<Button onClick={()=>setEdit(0)}>See PDF</Button>}
//           <Button onClick={()=>setEdit(2)}>QRCode</Button>
//         </ButtonGroup>
//       </Grid>
//       <Grid item>
//         {edit===0?
//           <Paper elevation={5}>
//           <div id='divToPrint' style={{backgroundColor: '#FFF', width: '210mm', minHeight: '297mm', marginLeft: 'auto', marginRight: 'auto', padding:'2rem'}}>
//               <QRCode value={generateQRCode()}/>
//               <InlineSVG src={svgSource}/>
//             { ReactHtmlParser(getTemplate()) }
//             </div>
//           </Paper>
//         :edit===2?
//           <QRCode value={generateQRCode()} size={750}/>
//         :
//           <Paper elevation={3} style={{width: '210mm', height: '297mm'}}>
//             <JoditEditor ref={editor} value={getTemplate()} config={config} tabIndex={1} />
//           </Paper>
          
//         }
//       </Grid>
//     </Grid>
//   )
// }



