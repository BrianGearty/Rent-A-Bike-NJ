import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function DataDisplay() {

    const [state, setState] = useState({
        members: [],
        filteredMembers: []
    })

    useEffect(() => {
        fetch("/api/register").then(res => res.json()).then((data) => {
            setState({ ...state, members: data , filteredMembers: data})
            console.log(state)
        })
    }, [])

    const handleTyping = (event) => {
        var newFiltered = []

        for (var i = 0; i < state.members.length; i++) {
        
            if (event.target.value.toLowerCase() === state.members[i].name.substr(0, event.target.value.length).toLowerCase()) {
                newFiltered.push(state.members[i])
            }
        }

        setState({ ...state, filteredMembers: newFiltered })
    }
    var membersToDisplay = state.filteredMembers;
    


    return (
        <div className='card'>
                <div className="search">
                <h5 className="input">Member Name</h5>
                <input className="textArea" onChange={handleTyping}></input>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <table className='table' style={{ width: "80%", margin: "auto" }}>
                            <tbody>
                                <tr>
                                <th><h2 className="tableHeader">Name</h2></th>
                                    <th><h2 className="tableHeader">Email</h2></th>
                                    <th><h2 className="tableHeader">Phone</h2></th>
                                    <th><h2 className="tableHeader">Bike Type</h2></th>
                                    <th><h2 className="tableHeader">Drop Off</h2></th>
                                    <th><h2 className="tableHeader">Scheduled Rental</h2></th>
                                </tr>
                            </tbody>
                            {membersToDisplay.map((member, i) => {
                                return (
                                    <tbody key={i} >
                                        <tr>

                                            <td><h3 className="empName">{member.name} </h3></td>
                                            <td><h4 className="memberAttr">{member.email}</h4></td>
                                            <td><h4 className="memberAttr">{member.phoneNumber}</h4></td>
                                            <td><h4 className="memberAttr">{member.bikeType}</h4></td>
                                            <td><h4 className="memberAttr">{member.dropOff}</h4></td>
                                            <td><h4 className="memberAttr">{member.selectedStartDate.substr(0, 10)} - {member.selectedEndDate.substr(0, 10)} </h4></td>

                                        </tr>
                                    </tbody>
                                )
                            })
                            }
                        </table>
                    </div>
                </div>
            </div>

            </div>
    );
}



export default DataDisplay;