import { filterContact } from "Redux/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";



const Filter = () =>{
    const filter = useSelector(state => state.contacts.filter)
    const dispatch = useDispatch()
    return(
        
        <label> Find contacts by name <input type="text" value={filter}
        onChange={event => dispatch(filterContact(event.currentTarget.value))}/></label>
    )
} 

export default Filter

