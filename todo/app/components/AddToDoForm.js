"use client" 
import {React, useState} from 'react'
import DatePicker from 'react-date-picker';


const AddToDoForm = () => {
    const [formdata, setFormData] = useState({
        task: "",
        date: new Date(),
        time: "",
        description: "",
        isCompleted: false
        })

        console.log(formdata.date)
const handleChange = (event) => {
   const {name, type, checked, value} = event.target
   console.log(name)
    setFormData(
        (prevFormData) => ({
        ...prevFormData, [name] : type === "checkbox" ? checked : value }))
} 

const handleSubmit = () => {
    console.log(formdata)
}
  return (
    <form>
     <input 
     type="text"
     name="task"
     placeholder="Enter Task"
     value={formdata.task}
     onChange={handleChange}
     />
     <DatePicker
     dateFormat='MM/dd/yyyy' 
     aria-label='Date'
     placeholder='Enter Date'
     value={formdata.date}
     onChange={handleChange}
     />
     <input 
     type='text'
     name='time'
     placeholder='Enter Time'
     value={formdata.time}
     onChange={handleChange}
     />
    <input 
     type='text'
     name='description'
     placeholder='Description'
     value={formdata.description}
     onChange={handleChange}
     />
     <label id='isCompleted'>Completed
     <input 
     type='checkbox'
     name='isCompleted'
     htmlFor="isCompleted"
     value={formdata.isCompleted}
     onChange={handleChange}
     />
     </label>
     <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default AddToDoForm

