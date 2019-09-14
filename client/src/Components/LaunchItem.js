import React from 'react'
import classNames from 'classnames'


function LaunchItem({launch : {flight_number, mission_name, launch_date_loc, launch_success}}) {
    console.log(props.launch)
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission : <span className={classNames({
                        'text-success' : true,
                        'text-danger' : !launch_success
                    })}>{mission_name}</span></h4>
                    <p>Date : {launch_date_loc}</p>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-secondary">Details</button>
                </div>
            </div>
        </div>
    )
}

export default LaunchItem
