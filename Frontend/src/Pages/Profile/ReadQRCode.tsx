import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import CardHeader from "@mui/material/CardHeader";
import CropFreeIcon from "@mui/icons-material/CropFree";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import yaml from "js-yaml";

import FormCard from "./FormCard";

import {QrReader} from "react-qr-reader";

export default function ReadQRCode(props: any) {
	const [data, setData] = React.useState<any>(null);
	const retry = () => {
		setData(null);
	};
	const back = () => {
		props.setView("user");
	};
	const use = () => {
		props.setControl({...props.control, formID: data?.answers?.formID, tempData: data?.answers?.answers, view: "form"});
	};
	return (
		<Grid container item xs={12} spacing={1} style={{textAlign: "center"}}>
			<Grid item xs={12} style={{margin: "auto"}}>
				<Button style={{margin: "auto"}} variant="outlined" color="primary" onClick={back} startIcon={<ChevronLeftIcon />}>
					Return
				</Button>
			</Grid>
			<Grid item xs={10} style={{margin: "auto"}}>
				<Paper elevation={12}>
					<Grid container xs={12} direction="column" justifyContent="center" alignItems="stretch">
						<Typography variant="overline" display="block">
							{data ? "Detected" : "Not Detected"}.{" "}
							{data ? (
								<Link component="button" variant="overline" onClick={retry}>
									Retry?
								</Link>
							) : null}
						</Typography>
						<QrReader
							constraints={{facingMode: "user"}}
							onResult={(result: any, error: any) => {
								if (result) {
									let qrdata = yaml.load(result.text);
									setData({row: props.control?.table?.rows[qrdata.formID - 1], answers: qrdata});
								}
							}}
							containerStyle={{width: "50%", margin: "auto"}}
						/>
						<Grid item xs={12}>
							<Typography variant="overline" display="block">
								{!data ? null : (
									<>
										<Grid item xs={12}>
											<TableContainer>
												<Table>
													<TableHead>
														<TableRow>
															<TableCell>
																<b>Date</b>
															</TableCell>
															<TableCell>
																<b>User</b>
															</TableCell>
															<TableCell>
																<b>Form Title</b>
															</TableCell>
															<TableCell>
																<b>Form ID</b>
															</TableCell>
															<TableCell>
																<b>Answers</b>
															</TableCell>
															<TableCell>
																<b>Preview</b>
															</TableCell>
														</TableRow>
													</TableHead>
													<TableBody>
														<TableRow>
															<TableCell>{data?.answers?.date ?? ""}</TableCell>
															<TableCell>{data?.answers?.userId ?? ""}</TableCell>
															<TableCell>{data?.row?.name ?? ""}</TableCell>
															<TableCell>{data?.answers?.formID ?? ""}</TableCell>
															<TableCell>
																{Object.keys(data?.answers?.answers)?.length ?? ""}/
																{data?.row?.questions.length ?? ""}
															</TableCell>
															<FormCard {...props} readingQRCode row={data?.row} />
														</TableRow>
													</TableBody>
												</Table>
											</TableContainer>
										</Grid>
										<Grid item xs={12} style={{padding: "1rem"}}>
											<Button variant="contained" color="primary" onClick={use} startIcon={<ChevronRightIcon />}>
												Use Answers
											</Button>
										</Grid>
									</>
								)}
							</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
}
