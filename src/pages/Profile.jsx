import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';
import classes from "*.module.css";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})
function getChallenges(name, date, status) {
    return { name, date, status }
}
const rows = [
    getChallenges('test challenge 1', 2132020, <CheckBoxRoundedIcon />),
    getChallenges('test challenge 2', 2132020, <CheckBoxRoundedIcon />),
    getChallenges('test challenge 3', 2132020, <CheckBoxRoundedIcon />),
];
const Profile = props => {
    const classes = useStyles();
    return (
        <div>
        <TableContainer component={Paper}>
            <Table className={classes.name} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Challenges Attempted</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}


export default Profile;
