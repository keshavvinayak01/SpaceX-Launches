import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import logo from './spacex.png'
import Launches from './Components/Launches';
import SingleLaunch from './Components/SingleLaunch';

const client = new ApolloClient({
	uri : 'http://localhost:5000/graphql'
});

class App extends Component {
	render(){
		return (
			<ApolloProvider client={client}>
				<Router>
					<div className="container">
						<img src={logo} 
						alt="SpaceX" 
						style={{width:300, display:'block', margin:'auto'}} 
						/>
						<Route exact path="/" component={Launches} />
						<Route exact path="/launch/:flight_number" component={SingleLaunch} />
					</div>
				</Router>
			</ApolloProvider>
		)	
	}
}

export default App;
