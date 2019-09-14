import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import logo from './spacex.png'
import Launches from './Components/Launches';

const client = new ApolloClient({
	uri : 'http//localhost:5000/grapqhl'
});

class App extends Component {
	render(){
		return (
			<ApolloProvider client={client}>
				<div className="container">
					<img src={logo} 
					alt="SpaceX" 
					style={{width:300, display:'block', margin:'auto'}} 
					/>
					<Launches />
				</div>
			</ApolloProvider>
		)	
	}
}

export default App;
