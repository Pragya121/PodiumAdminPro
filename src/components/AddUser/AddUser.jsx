import React, {useState, useRef, useEffect} from 'react'
import Loading from '../../imgs/Loading.gif'
import { WriterUserFields } from "../../Data/Data.js";
import { EditorUserFields } from "../../Data/Data.js";
import { PMUserFields } from "../../Data/Data.js";
import { SalesUserFields } from "../../Data/Data.js";
import { AdminUserFields } from "../../Data/Data.js";
import { ClientUserFields } from "../../Data/Data.js";
import { minWidth } from '@mui/system';
 const AddUser = () => {

    const [formData, setFormData] = useState({
    data: {},
    fields: [],
    allSet: false,
  });
 
   const form = useRef(null);
// useEffect(() => {
//   let tempFormObj = {
//     data:{},
//     fields: WriterUserFields,
//     allSet:true,
//   }
//  setFormData(tempFormObj)
//  formData.fields= WriterUserFields;

// console.log(formData);
 
// }, [])
const submit = (e)=>{
   e.preventDefault();
    document.getElementById("submit").setAttribute("disabled", "true");
    document.getElementById("loader").src = Loading;
    document.getElementById("loader").removeAttribute("hidden");
    const myForm = document.querySelector("#resumeForm");
    debugger;
    Array.from(myForm.elements).forEach(
      (formElement) => (formElement.disabled = true)
    );
    console.log(formData.data);
}
  return (
    <div >
      <h1>Add a new user</h1>
<div className="form-group">
                <form ref={form} id="resumeForm" onSubmit={submit}>
                  <label for="roleType"> Please select the user type</label>
                     <select onChange={(e)=>{
                       let input = e.target.value;
                       if(input === "writer"){  
                          
                          let tempFormObj = {
    data:{},
    fields: WriterUserFields,
    allSet:true,
  }
 setFormData(tempFormObj)
 formData.fields= WriterUserFields;

console.log(formData);

                       }else  if(input === "editor"){
                        
                          let tempFormObj = {
    data:{},
    fields: EditorUserFields,
    allSet:true,
  }
 setFormData(tempFormObj)
 formData.fields= EditorUserFields;

console.log(formData);
                         
                       }
                     else  if(input === "project manager"){
                          let tempFormObj = {
    data:{},
    fields: PMUserFields,
    allSet:true,
  }
 setFormData(tempFormObj)
 formData.fields= PMUserFields;

console.log(formData);
                       }
                       else  if(input === "salesperson"){
                          let tempFormObj = {
    data:{},
    fields: SalesUserFields,
    allSet:true,
  }
 setFormData(tempFormObj)
 formData.fields= SalesUserFields;

console.log(formData);
                       }
                        else if(input === "administrator"){
                            
                          let tempFormObj = {
    data:{},
    fields: AdminUserFields,
    allSet:true,
  }
 setFormData(tempFormObj)
 formData.fields= AdminUserFields;

console.log(formData);
                       }  else if(input === "client"){
                            
                          let tempFormObj = {
    data:{},
    fields: ClientUserFields,
    allSet:true,
  }
 setFormData(tempFormObj)
  formData.fields= ClientUserFields;

console.log(formData);
                       }
                     }}>
                       <option> writer</option>
                       <option> salesperson</option>
                       <option> administrator</option>
                       <option> editor</option>
                       <option> client</option>
                       <option> project manager</option>
                     </select>
                  {formData.allSet
                    ? formData.fields.map((field) => {
                      if(field.key ===0)
                        return (
                          <span>
                         
                          <input
                            type={field.type}
                            id={field.fname}
                          
                            name={field.fname}
                            key={field.fname}
                            className="formForm"
                            style={{ marginBottom: "5px", minWidth: "100%" }}
                            placeholder={"Enter " + field.label}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                data: {
                                  ...formData.data,
                                  [field.fname]: e.target.value,
                                },
                              });
                            }}
                            required
                          /><br/>
                          </span>
                        );
                        else  if(field.key ===2)
                        return(
                        <>   <label   style={{ marginBottom: "5px", width: "20%" }} for={field.fname}>{field.label}</label>
                        <input 
                           id={field.fname}
                            name={field.fname}
                            key={field.fname}
                            className="formForm"
                            style={{ marginBottom: "5px", width: "80%" }}
                            placeholder={"Enter " + field.label}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                data: {
                                  ...formData.data,
                                  [field.fname]: e.target.value,
                                },
                              });
                            }}
                            list={field.fname}
                            required />
                            <datalist id={field.fname}>
                              
                          
                            <option> Rjhgdjhf</option>
                            {field.options.map((opt) => {
                             return(
                               <option value={opt.value}> {opt.label}</option>
                             )

                            })}
                            </datalist>
                         
                      
                        <br/></>)
                      })
                      
                    : ""}
                 
                  <input
                    type="submit"
                    className="form-control"
                    name="submit"
                    id="submit"
                    style={{
                      marginBottom: "5px",
                      color: "white",
                      backgroundColor: "darkblue",
                    }}
                  />
                </form>
              </div>
              <img
                hidden
                style={{ height: "100px", width: "200px" }}
                id="loader"
                src=""
                alt="Loading Please Wait..."
              ></img>
    </div>
  )
}
export default AddUser;
