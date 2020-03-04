import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
// const Home = props => {

    
//     return (
//         <h1>Home Page Component</h1>
//     )
// }

  const StyledTextField = styled(TextField)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  top-margin: 15px;
  left-margin: 100px;
`


class Home extends React.Component {

    
    componentDidMount(){
        console.log('home component logged')
    }

    render(){
        return (
            <div className="landing-page-field">
                <div>
                  
                    <form noValidate autoComplete="off">
                        <StyledTextField />
                    </form>
                </div>
            </div>
        )
    }
};

export default Home;

// export default Home;
