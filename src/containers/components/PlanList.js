import React from "react"
import AddPlan from "./AddPlan"
import {Plan} from "./Plan"

function PlanList(){
    
    return (
        <div>
            <br/><br/>
            <AddPlan />

            <table border="1px">
                <thead>
                    <tr>
                        <th>Plan Name</th><th>Edit</th><th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <Plan />
                </tbody>
            </table>
        </div>
    )
}


export default PlanList;