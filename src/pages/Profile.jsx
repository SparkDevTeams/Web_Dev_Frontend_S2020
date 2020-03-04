import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';
import IndeterminateCheckBox from '@material-ui/icons/IndeterminateCheckBox';
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import { TablePagination } from "@material-ui/core";
import styled from "styled-components";

const AvatarContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding: 8px 0px 8px 8px;
`

const StyledTableContainer = styled(TableContainer)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    top-margin: 15px;
`

const StyledTable = styled(Table)`
    max-width: 50%;
`
const StyledTablePagination = styled(TablePagination)`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const StyledAvatar = styled(Avatar)`

`

function getChallenges(name, date, status) {
    return { name, date, status }
}
const rows = [
    getChallenges('test challenge 1', 2132020, <CheckBoxRoundedIcon />),
    getChallenges('test challenge 2', 2132020, <IndeterminateCheckBox />),
    getChallenges('test challenge 3', 2132020, <CheckBoxOutlineBlankRoundedIcon />),
    getChallenges('test challenge 4', 2132020, <CheckBoxOutlineBlankRoundedIcon />),
    getChallenges('test challenge 5', 2132020, <CheckBoxOutlineBlankRoundedIcon />),
    getChallenges('test challenge 6', 2132020, <CheckBoxOutlineBlankRoundedIcon />),
    getChallenges('test challenge 7', 2132020, <CheckBoxOutlineBlankRoundedIcon />),
    getChallenges('test challenge 8', 2132020, <CheckBoxOutlineBlankRoundedIcon />),
];
const Profile = props => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(+event.target.value));
        setPage(0);
    };
    return (
        <div>
            <AvatarContainer>
                <Avatar alt="profile pic" src="" />
            </AvatarContainer>
            <StyledTableContainer>
                <StyledTable stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Challenges Attempted</TableCell>
                            <TableCell align="right">Date accessed</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {//for every entry in rows
                            return (
                                <TableRow key={row.name}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                    <TableCell align="right">{row.status}</TableCell>

                                </TableRow>
                            );
                        })}
                    </TableBody>
                </StyledTable>
            </StyledTableContainer>
            <StyledTablePagination
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 100]}
                component="div"
                count={rows.length}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}/>
            
            

        </div>
    );
}


export default Profile;
