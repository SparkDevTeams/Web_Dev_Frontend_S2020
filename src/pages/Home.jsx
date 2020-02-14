import React, {useEffect} from "react";

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
            <h1>Home Page Component</h1>
        )
    }
};

export default Home;

// export default Home;
