import React, {useState, useRef, useEffect} from 'react'
import Loading from '../../imgs/Loading.gif'
import { UserFields } from "../../Data/Data.js";
 const AddUser = () => {

    const [formData, setFormData] = useState({
    data: {},
    fields: [],
    allSet: false,
  });
 
   const form = useRef(null);
useEffect(() => {
  let tempFormObj = {
    data:{},
    fields: UserFields,
    allSet:true,
  }
 setFormData(tempFormObj)
 formData.fields= UserFields;
console.log(UserFields);
console.log(formData);
 
}, [])
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
    <div className='UserGlass'>
      <h1>Add a new user</h1>
<div className="form-group">
                <form ref={form} id="resumeForm" onSubmit={submit}>
                  {formData.allSet
                    ? formData.fields.map((field) => {
                        return (
                          <input
                            type="text"
                            id={field}
                            name={field}
                            key={field}
                            className="form-control"
                            style={{ marginBottom: "5px" }}
                            placeholder={"Enter " + field}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                data: {
                                  ...formData.data,
                                  [field]: e.target.value,
                                },
                              });
                            }}
                            required
                          />
                        );
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
