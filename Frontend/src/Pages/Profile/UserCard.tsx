import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from "@mui/material/Paper";
import React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import CreateIcon from "@mui/icons-material/Create";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {FormControl, IconButton, Input, InputAdornment, InputLabel} from "@mui/material";

export default function UserCard(props: any
) {
	const [editing, setEditing] = React.useState(false);

	function getChipIcon(chip: {type: any}) {
		switch (chip.type) {
			case "work":
				return <WorkOutlineIcon />;
			case "study":
				return <SchoolIcon />;
			case "favorites":
				return <FavoriteBorderIcon />;
			case "created":
				return <CreateIcon />;
			default:
				return <HelpOutlineIcon />;
		}
	}
	function getChipLabel(chip: {type: any; label: any}) {
		switch (chip.type) {
			case "favorites":
				return (props.control.user?.favorites?.length ?? 0) + " Favorites";
			case "created":
				return (props.control.user?.created?.length ?? 0) + " Created";
			default:
				return chip.label;
		}
	}
	function getChipColor(chip: {type: string}) {
		if (chip.type === "created") return "secondary";
		return "primary";
	}

	return (
		<Grid item xs={7} style={{width: "100%"}}>
			<Paper elevation={3} style={{padding: "1rem"}}>
				<Grid container direction="column" justifyContent="flex-start" alignItems="stretch">
					<Grid xs={12} spacing={2} item container direction="row" justifyContent="flex-start" alignItems="stretch">
						<Grid item xs={2} sx={{width: "100%", height: "100%"}}>
							{props.control.user?.avatar ?
							<Avatar
							variant="rounded"
							alt="Avatar"
							src={props.control.user?.avatar ?? "https://pic.onlinewebfonts.com/svg/img_568657.png"}
							style={{width: "100%", height: "100%"}}
						/> :
						<AccountCircleIcon fontSize={"large"} sx={{width: "100%", height: "100%"}}/>
							}
						</Grid>
						<Grid item xs={6}>
							{editing ? (
								<Grid container flexDirection={"column"} justifyContent={"space-between"} rowGap={1}>
									<Grid item>
										<FormControl variant="standard">
											<InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
											<Input
												id="input-with-icon-adornment"
												defaultValue={props.control.user?.nome}
												onChange={(e) => {
													props.control.user.nome = e.target.value;
												}}
											/>
										</FormControl>
									</Grid>
									<Grid item>
										<FormControl variant="standard">
											<InputLabel htmlFor="input-with-icon-adornment">Description</InputLabel>
											<Input
												type="textarea"
												id="input-with-icon-adornment"
												defaultValue={props.control.user?.description}
												onChange={(e) => {
													props.control.user.description = e.target.value;
												}}
											/>
										</FormControl>
									</Grid>
								</Grid>
							) : (
								<>
									<Typography variant="h4">{props.control.user?.nome}</Typography>
									<Typography variant="subtitle1">{props.control.user?.description}</Typography>
								</>
							)}
						</Grid>
						<Grid item xs={3}>
							<Typography variant="caption" component="h1">
								Signed up in {new Date().toISOString().slice(0, 10) ?? null}
							</Typography>
							<Typography variant="caption" component="h1">
								Last access{" "}
								{new Date().toISOString().slice(0, 10)}
							</Typography>
						</Grid>
						<Grid item xs={1}>
							{editing ? (
								<>
									<IconButton aria-label="edit" onClick={() => setEditing(!editing)}>
										<CheckIcon />
									</IconButton>
								</>
							) : (
								<IconButton aria-label="edit" onClick={() => setEditing(!editing)}>
									<CreateIcon />
								</IconButton>
							)}
						</Grid>
					</Grid>
					{/* <Grid container flexDirection={"row"} justifyContent={"start"} columnGap={1}>
						{editing ? (
							<>
								<Grid item sx={{padding: "6px"}}>
									<FormControl variant="standard">
										<InputLabel htmlFor="input-with-icon-adornment">Work</InputLabel>
										<Input
											id="input-with-icon-adornment"
											defaultValue={props.control.user?.chips?.length ? props.control.user?.chips[0]?.label : "Work"}
											onChange={(e) => {
												props.control.user.chips[0].label = e.target.value;
											}}
											startAdornment={
												<InputAdornment position="start">
													<WorkOutlineIcon />
												</InputAdornment>
											}
										/>
									</FormControl>
								</Grid>
								<Grid item sx={{padding: "6px"}}>
									<FormControl variant="standard">
										<InputLabel htmlFor="input-with-icon-adornment">School</InputLabel>
										<Input
											id="input-with-icon-adornment"
											defaultValue={props.control.user?.chips?.length ? props.control.user?.chips[1]?.label : "School"}
											onChange={(e) => {
												props.control.user.chips[1].label = e.target.value;
											}}
											startAdornment={
												<InputAdornment position="start">
													<SchoolIcon />
												</InputAdornment>
											}
										/>
									</FormControl>
								</Grid>
							</>
						) : (
							props.control.user?.chips?.map((chip: any) => (
								<Grid key={chip.label} item style={{paddingTop: "1rem"}}>
									{
										<Chip
											key={chip.label + chip.editing}
											icon={getChipIcon(chip)}
											variant="outlined"
											label={getChipLabel(chip)}
											color={getChipColor(chip)}
											onClick={() => {
												chip.editing = !chip.editing;
											}}
										/>
									}
								</Grid>
							))
						)}
					</Grid> */}
				</Grid>
			</Paper>
		</Grid>
	);
}
