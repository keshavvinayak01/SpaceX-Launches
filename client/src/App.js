import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import logo from './spacex.png'
import Launches from './Components/Launches';
import SingleLaunch from './Components/SingleLaunch';

const client = new ApolloClient({
	uri : '/graphql'
});

class App extends Component {
	render(){
		return (
			<ApolloProvider client={client}>
				<Router>
					<div className="container">
					<Link to="/">
						<img src={logo} 
						alt="SpaceX" 
						style={{height:200, display:'block', margin:'auto'}} 
						/>
					</Link>
						<Route exact path="/" component={Launches} />
						<Route exact path="/launch/:flight_number" component={SingleLaunch} />
					</div>
				</Router>
			</ApolloProvider>
		)	
	}
}

export default App;
