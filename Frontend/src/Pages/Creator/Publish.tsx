import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React from "react";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";

export default function Publish(props: any) {
	const getPublish = () => {
		if (props.control.tempData && props.control.formID === props.control.tempData.id) {
			const publishData = props.control?.table?.rows.find((row: any) => row.id === props.control.formID);
			publishData.last_updated = new Date().toJSON();
			if (Array.isArray(publishData.keywords)) {
				publishData.keywords = publishData.keywords.join(",");
			}
			return publishData;
		} else {
			return {
				id: props.creator.formID,
				editable: true,
				name: "",
				last_updated: new Date().toJSON(),
				field: "",
				creator: props.control.user.nome,
				preview: "",
				creator_avatar: props.control.user.avatar,
				dynamic_image: false,
				creator_id: props.control.user.id,
				keywords: "",
				questions: props.creator.questions,
				uses: 0,
				description: "",
				paragraph: "",
			};
		}
	};
	const [publish, setPublish] = React.useState(getPublish());

	const changeProperty = (event: any, property: string) => {
		setPublish({...publish, [property]: event.target.value});
	};

	const savePublish = () => {
		const newRows = props.control?.table?.rows;
		const newRow = publish;
		if (!Array.isArray(newRow.keywords)) {
			newRow.keywords = [...new Set(newRow.keywords.split(",").map((keyword: any) => keyword.trim()))];
		}
		const currentRow = newRows.find((rows: any) => rows.id === props.creator.id);
		newRow.id = props.creator.id;
		if (currentRow) {
			newRows[newRows.indexOf(currentRow)] = newRow;
		} else {
			newRows.push(newRow);
		}
		function formatQuestions(question: any) {
			if (question.type === "Text") {
				return {
					isRequired: question.required,
					type: question.type.toLowerCase(),
					name: question.variable,
					title: question.questionLabel,
					defaultAnswer: question.default,
				};
			} else if (question.type === "Number") {
				return {
					isRequired: question.required,
					// minValue: question.min,
					// maxValue: question.max,
					type: "text",
					name: question.variable,
					title: question.questionLabel,
					// defaultAnswer: question.default,
				};
			} else if (question.type === "Choice") {
				return {
					isRequired: question.required,
					type: "radiogroup",
					name: question.variable,
					title: question.questionLabel,
					choices: question.choices.map((choice: any) => choice.text),
					hasOther: question.others,
				};
			} else if (question.type === "Multiple Choice") {
				return {
					isRequired: question.required,
					type: "checkbox",
					name: question.variable,
					title: question.questionLabel,
					choices: question.choices.map((choice: any) => choice.text),
					hasOther: question.others,
				};
			}
		}
		newRows[newRow.id] = {
			questions: props.creator.questions.map((question: any) => formatQuestions(question)),
			template: props.creator.template,
			svg: {
				name: "svg",
				begin: props.creator.svg.base,
				end: "</svg>",
				organs: props.creator.svg.parts.map((part: any) => part.valueTrue),
			},
		};

		axios.post("http://localhost:8000/formulario", {id: props.control.formID, conteudo: JSON.stringify(newRow)}).then(
			(response) => {
				console.log(response);
				props.setAlert({open: true, text: "Publish Sucessful (ID " + response.data.id + ")", severity: "success"});
				props.setControl({
					...props.control,
					table: {...props.control.table, rows: newRows},
					setData: {},
					view: "profile",
					formID: null,
				});
			},
			(error) => {
				props.setAlert({open: true, text: "Publish failed (" + error.name + ")", severity: "error"});
			}
		);

	};
	return (
		<Grid item xs={4}>
			<Card style={{minWidth: "20rem"}} elevation={3}>
				<CardHeader
					avatar={<Avatar src={publish.creator_avatar} />}
					action={
						<Tooltip title="Options">
							<IconButton>
								<MoreVertIcon />
							</IconButton>
						</Tooltip>
					}
					title={"Created by " + publish.creator}
					subheader={"FormID " + props.creator.id + ".Last update: " + new Date().toISOString().slice(0, 10)}
				/>
				<CardContent>
					<Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
						<Grid item xs={12}>
							<TextField
								value={publish.name}
								onChange={(event) => changeProperty(event, "name")}
								fullWidth
								required
								label="Title"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={publish.field}
								onChange={(event) => changeProperty(event, "field")}
								fullWidth
								required
								label="Field"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={publish.description}
								onChange={(event) => changeProperty(event, "description")}
								fullWidth
								required
								label="Description"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={publish.keywords}
								onChange={(event) => changeProperty(event, "keywords")}
								fullWidth
								required
								label="Keywords separated by ,"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="body2" color="textSecondary" component="p">
								<b>Questions:</b> {publish.questions.length} Questions
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={publish.read_more}
								onChange={(event) => changeProperty(event, "paragraph")}
								fullWidth
								label="Read more (Optional)"
								multiline
								rows={8}
								variant="outlined"
							/>
						</Grid>
					</Grid>
				</CardContent>
				<DialogActions style={{paddingTop: 0}}>
					<Button
						disabled={publish.title === "" || publish.description === "" || publish.keywords === ""}
						onClick={savePublish}
						color="primary"
					>
						Publish
					</Button>
				</DialogActions>
			</Card>
		</Grid>
	);
}
