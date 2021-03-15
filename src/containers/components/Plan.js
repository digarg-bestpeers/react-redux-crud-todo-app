import {useSelector, useDispatch} from "react-redux"
import {getEditPlan, deletePlan} from "../../actions/planAction"

export function Plan(){
    const plans = useSelector(state=> state.data)
    const dispatch = useDispatch()
    
    return (
        plans.map( (plan, index) => {
            return <tr key={index}>
                <td>{plan}</td>
                <td>
                    <button onClick={ () => dispatch(getEditPlan({index})) }>et</button>
                </td>
                <td>
                    <button onClick = { () => dispatch(deletePlan({index}))}>X</button>
                </td>
            </tr>
        })
    )
}