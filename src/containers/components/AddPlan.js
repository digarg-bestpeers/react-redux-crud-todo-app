import React, {useState, useEffect} from 'react'
import {addPlan, editPlan} from "../../actions/planAction"
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"



function AddPlan() {
    const olddata = useSelector( state => state.oldData )
    const planid = useSelector(state => state.planId )
    const dispatch = useDispatch();
    const [plan, setPlan] = useState("")
    

    useEffect( () => {
        if(olddata!==null){
            setPlan(olddata)
        }
    }, [olddata])

    const createPlan = (e) => {
        e.preventDefault();
        dispatch(addPlan(plan))
        setPlan("")
    }
    
    const updateplan = (e) => {
        e.preventDefault();
        if(planid !== null){
            dispatch(editPlan(plan))
            setPlan("")
        }
    }


    return (
        <form>
            <input type="text" name="planText" value={plan} onChange={e => setPlan(e.target.value)} />
            <button onClick={ e => createPlan(e) }>Add</button>
            <button onClick={ e => updateplan(e) }>Update</button>
        </form>
    )
}

export default AddPlan
