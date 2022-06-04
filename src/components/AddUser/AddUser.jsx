import React, {useState, useRef, useEffect} from 'react'
import 'regenerator-runtime/runtime';
import axios from 'axios';
import Loading from '../../imgs/Loading.gif'
import { WriterUserFields } from "../../Data/Data.js";
import { EditorUserFields } from "../../Data/Data.js";
import { PMUserFields } from "../../Data/Data.js";
import { SalesUserFields } from "../../Data/Data.js";
import { AdminUserFields } from "../../Data/Data.js";
import { ClientUserFields } from "../../Data/Data.js";
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";


import "./AddUser.css"
 const AddUser = () => {

    const [formData, setFormData] = useState({
    data: {},
    fields: [],
    allSet: false,
  });
  // ...

const BASE_URL = 'https://us-central1-podiumpro-9cc8e.cloudfunctions.net';

const getTodoItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/configVariables`);

    const resp = response.data;

    console.log(`info`,resp);

    return resp;
  } catch (errors) {
    console.error(errors);
  }
};
useEffect(() => {
  getTodoItems()

 
}, [])

   const form = useRef(null);


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
<div className="form-group" id="newForm">
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


                       }
                       else  if(input === "salesperson"){
                          let tempFormObj = {
    data:{},
    fields: SalesUserFields,
    allSet:true,
  }
 setFormData(tempFormObj)
 formData.fields= SalesUserFields;


                       }
                        else if(input === "administrator"){
                            
                          let tempFormObj = {
    data:{},
    fields: AdminUserFields,
    allSet:true,
  }
 setFormData(tempFormObj)
 formData.fields= AdminUserFields;


                       }  else if(input === "client"){
                            
                          let tempFormObj = {
    data:{},
    fields: ClientUserFields,
    allSet:true,
  }
 setFormData(tempFormObj)
  formData.fields= ClientUserFields;


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
                        else  if(field.key ===2 && field.options.length !==0)
                        return(
                        <>  

<ComboBox
id={field.fname}
        options={field.options}
        placeholder={"Enter " + field.label}
        defaultIndex={4}
        optionsListMaxHeight={300}
        style={{
          width: "90%",
          height:"14px"
         
      }}
        focusColor="#20C374"
        renderOptions={(option) => (
          <div className="comboBoxOption">{option}</div>
        )}
        onSelect={(option) => {setFormData({
          ...formData,
          data: {
            ...formData.data,
            [field.fname]:option,
          },
        });
     if(field.fname ==="commercialAgreement"){
      let sal= document.getElementById("salaryValue");
      let perW =document.getElementById("perWordValue");
   if(option==="per-word"){
sal.value="";
sal.disabled= true;
perW.disabled = false;
   }
   else if(option==="salary"){
perW.value="";
perW.disabled = true;
sal.disabled=false;
   }
     }
    
    
    }}
        // onChange={(event) => console.log(event.target.value)}
        enableAutocomplete
        // onOptionsChange={(option) => setHighlightedOption(option)}
      />
                      
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
