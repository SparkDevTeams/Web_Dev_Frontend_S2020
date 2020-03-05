import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Menuitem from '@material-ui/core/MenuItem'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const style = {
  background: 'linear-gradient(45deg, #0f99d9 33%, #13e3e6 34%, #0f99d9 33%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  justify:"space-between",
  fontSize: '33px'
};

const ParentContainer = styled.div`
  .root {
    display: grid;
    flex-wrap: wrap;
    padding: 0 200px;
    margin: 20px;
  }

  .textField {
    width: 400px,
    margin-left: 200px.
  }

  .MuiGrid-item {
    padding-bottom: 1rem;
  }
`
  const categories = [
    {
      value: '1',
      label: 'Sport',
    },
    {
      value: '2',
      label: 'Study',
    },
    {
      value: '3',
      label: 'Adventure',
    },
    {
      value: '4',
      label: 'Other',
    },
  ]

  const points = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
      value: '4',
      label: '4',
    },
    {
      value: '5',
      label: '5',
    },
  ]
  
  
export default function CenteredGrid() {
  const [category,setCategory] = useState("");  //Or React.useState();
  const [point,setPoint] = useState("");

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  }
  
  const handlePointChange = event => {
    setPoint(event.target.value);
  }

  return (
    <ParentContainer > 
      <p style={{ textAlign: "center" , fontSize: "40px" }}>Create New Challenge</p>

      <div className="root">
        <body>
          <Grid container>
            <Grid item xs={3}>
  <span vertical-align= "middle"  style={{fontSize: "33px"}}>Title: </span>  
            </Grid>
            <Grid item xs={9}>
              <TextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue=""
                  style={{ width: 716 }}
                  variant="outlined"
                />
            </Grid>
            <Grid item xs={3}>
  <span vertical-align= "middle"  style={{fontSize: "33px"}}>Due Date: </span>  
            </Grid>
            <Grid item xs={9}>
            <TextField
              required
              id="date"
              label="EST Time"
              type="date"
              defaultValue=""
              style={{ width: 716 }}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid item xs={3}>
  <span vertical-align= "middle"  style={{fontSize: "33px"}}>Category: </span>  
            </Grid>
            <Grid item xs={9}>
              <TextField
                  required
                  id="filled-required"
                  select
                  label="Select One"
                  value={category}
                  onChange={handleCategoryChange}
                  helperText="Select other if not satisfy"
                  style={{ width: 716 }}
                  variant="outlined"
                >
                  {categories.map(option => (
                    <Menuitem key = {option.value} value={option.value}>
                      {option.label}
                    </Menuitem>
                  ))}
                </TextField>
            </Grid>
            <Grid item xs={3}>
  <span vertical-align= "middle"  style={{fontSize: "33px"}}>Description: </span>  
            </Grid>
            <Grid item xs={9}>
              <TextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue=""
                  style={{ width: 716 }}
                  variant="outlined"
                  rows="5"
                  multiline
                />
            </Grid>
            <Grid item xs={3}>
  <span vertical-align= "middle"  style={{fontSize: "33px"}}>Points: </span>  
            </Grid>
            <Grid item xs={9}>
              <TextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue=""
                  style={{ width: 716 }}
                  variant="outlined"
                  select
                  value={point}
                  onChange={handlePointChange}
                  helperText="1 = minimum, 5 = maximum"
                >
                  {points.map(option => (
                    <Menuitem key = {option.value} value={option.value}>
                      {option.label}
                    </Menuitem>
                  ))}
                </TextField>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={3}>
            <button  style={style}>
            <NavLink to="/home">
                Cancel
              </NavLink>
            </button>
            </Grid>
            <Grid item xs={3}>
              <button style={style} >
              <NavLink to="/home">
                Submit
              </NavLink>
              </button>
            </Grid>
          </Grid>
        </body>
      </div>
    </ParentContainer>
  );
}
