import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Menuitem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Formik } from "formik";
import * as yup from "yup";
import { useChallenge } from "../hooks";

const style = {
  background: "linear-gradient(45deg, #0f99d9 33%, #13e3e6 34%, #0f99d9 33%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  justify: "space-between",
  fontSize: "33px"
};

const ParentContainer = styled.div`
  .dad {
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
`;
const categories = [
  {
    value: "1",
    label: "Sport"
  },
  {
    value: "2",
    label: "Study"
  },
  {
    value: "3",
    label: "Adventure"
  },
  {
    value: "4",
    label: "Other"
  }
];

const points = [
  {
    value: "1",
    label: "1"
  },
  {
    value: "2",
    label: "2"
  },
  {
    value: "3",
    label: "3"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "5",
    label: "5"
  }
];

const CreateChallenge = () => {
  const [category, setCategory] = useState(""); //Or React.useState();
  const [point, setPoint] = useState("");
  const { postChallenge } = useChallenge();

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handlePointChange = event => {
    setPoint(event.target.value);
  };

  return (
    <ParentContainer>
      <p style={{ textAlign: "center", fontSize: "40px" }}>
        Create New Challenge
      </p>

      <div className="dad">
        <Grid container>
          <Formik
            initialValues={{
              title: "",
              dueDate: "",
              description: "",
              category: "",
              points: 0
            }}
            onSubmit={async (values, actions) => {
              console.log(values);
              postChallenge(values);
            }}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <Grid item xs={3}>
                  <span vertical-align="middle" style={{ fontSize: "33px" }}>
                    Title:{" "}
                  </span>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    required
                    id="filled-required"
                    label="Title"
                    defaultValue=""
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.title}
                    name="title"
                    style={{ width: 716 }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <span vertical-align="middle" style={{ fontSize: "33px" }}>
                    Due Date:{" "}
                  </span>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    required
                    id="date"
                    label="EST Time"
                    type="date"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.dueDate}
                    name="dueDate"
                    style={{ width: 716 }}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <span vertical-align="middle" style={{ fontSize: "33px" }}>
                    Category:{" "}
                  </span>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    required
                    id="filled-required"
                    select
                    label="Select One"
                    value={category}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.category}
                    name="category"
                    helperText="Select other if not satisfy"
                    style={{ width: 716 }}
                    variant="outlined"
                  >
                    {categories.map(option => (
                      <Menuitem key={option.value} value={option.value}>
                        {option.label}
                      </Menuitem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  <span vertical-align="middle" style={{ fontSize: "33px" }}>
                    Description:{" "}
                  </span>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    required
                    id="filled-required"
                    label="Required"
                    defaultValue=""
                    name="description"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.description}
                    style={{ width: 716 }}
                    variant="outlined"
                    rows="5"
                    multiline
                  />
                </Grid>
                <Grid item xs={3}>
                  <span vertical-align="middle" style={{ fontSize: "33px" }}>
                    Points:{" "}
                  </span>
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
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.points}
                    name="points"
                    helperText="1 = minimum, 5 = maximum"
                  >
                    {points.map(option => (
                      <Menuitem key={option.value} value={option.value}>
                        {option.label}
                      </Menuitem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  <button style={style} type="submit">
                    Submit
                  </button>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>
      </div>
    </ParentContainer>
  );
};

export default CreateChallenge;
