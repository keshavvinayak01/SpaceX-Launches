import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import classNames from 'classnames'

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number : Int!){
        launch(flight_number : $flight_number){
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            rocket{
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`

class SingleLaunch extends Component {
    render() {
        let { flight_number } = this.props.match.params;
        flight_number = parseInt(flight_number)
        return (
            <>
                <Query query={LAUNCH_QUERY} variables={{flight_number}}>
                    {
                        ({loading, error, data}) => {
                            if(loading) return <h4>Loading..</h4>
                            if(error) console.log(error)

                            const {
                                mission_name,
                                flight_number,
                                launch_year,
                                launch_success,
                                launch_date_local,
                                rocket : {rocket_id, rocket_name, rocket_type
                            }} = data.launch;

                            return (<div>
                                <h1 clasName="display-4 my-3">
                                        Mission : <span> { mission_name } </span>
                                </h1>
                                <br />
                                <h4 className="mb-3">
                                    Launch Details
                                </h4>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Flight number : { flight_number }
                                    </li>
                                    <li className="list-group-item">
                                        Launch Year : { launch_year }
                                    </li>
                                    <li className="list-group-item">
                                        Launch Date Location : <Moment format="YYYY-MM-DD HH:mm">{ launch_date_local }
                                        </Moment>
                                    </li>
                                    <li className="list-group-item">
                                        Launch Successful : <span className={classNames({
                                            'text-success' : launch_success,
                                            'text-danger' : !launch_success
                                        })}>
                                        {launch_success? 'Yes' : 'No' }
                                        </span>
                                    </li>
                                </ul>

                                <h4 className="my-4">Rocket Details</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Rocket ID : { rocket_id }
                                    </li>
                                    <li className="list-group-item">
                                        Rocket Name : { rocket_name }
                                    </li>
                                    <li className="list-group-item">
                                        Rocket Type : { rocket_type }
                                    </li>
                                </ul>
                                <hr />
                                <Link to="/" className="btn btn-secondary">
                                    Back
                                </Link>
                            </div>
                            );
                        }
                    }
                </Query>
            </>
        )
    }
}

export default SingleLaunch