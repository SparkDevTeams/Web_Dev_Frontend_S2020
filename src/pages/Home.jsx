import React, {useEffect} from "react";
import TextField from '@material-ui/core/TextField';

// const Home = props => {

    
//     return (
//         <h1>Home Page Component</h1>
//     )
// }

class Home extends React.Component {

    componentDidMount(){
        console.log('home component logged')
    }

    render(){
        return (
            <form  noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form>
        )
    }
};

export default Home;

// export default Home;
