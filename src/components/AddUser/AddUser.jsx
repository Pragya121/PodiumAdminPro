import React, { useState, useRef, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
// import { ColourOption, colourOptions } from '../data';
import { ActionMeta, OnChangeValue } from "react-select";
import "regenerator-runtime/runtime";
import axios, { Axios } from "axios";
import Loading from "../../imgs/Loading.gif";
import { WriterUserFields } from "../../Data/Data.js";
import { EditorUserFields } from "../../Data/Data.js";
import { PMUserFields } from "../../Data/Data.js";
import { SalesUserFields } from "../../Data/Data.js";
import { AdminUserFields } from "../../Data/Data.js";
import { ClientUserFields } from "../../Data/Data.js";
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";

import "./AddUser.css";
import MainDash from "../MainDash/MainDash";
const AddUser = () => {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [dFields, setdFields] = useState({
    writerSkills: [],
    writerDomains: [],
    roles: [],
  });
  const [token, setToken] = useState(
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null
  );
  const [formData, setFormData] = useState({
    data: {},
    fields: [],
    allSet: false,
  });

  // ...

  const BASE_URL = "https://us-central1-podiumpro-9cc8e.cloudfunctions.net";

  const getdynamicFields = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/configVariables`);

      const resp = response.data;
      debugger;
      let domainSet = [];
      resp.writerDomains.map((dom) => {
        let obj = {
          label: dom,
          value: dom,
        };
        domainSet.push(obj);
      });
      let skillsSet = [];
      resp.writerSkills.map((dom) => {
        let obj = {
          label: dom,
          value: dom,
        };
        skillsSet.push(obj);
      });
      setdFields({
        writerSkills: skillsSet,
        writerDomains: domainSet,
        roles: resp.roles,
      });
      let select = document.getElementById("roleType");
      select.innerHTML = "";
      resp.roles.map((role) => {
        var opt = document.createElement("option");
        opt.value = role;
        opt.innerHTML = role;
        select.appendChild(opt);
      });

      return resp;
    } catch (errors) {
      console.error(errors);
    }
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const postUser = async (finalData) => {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `${BASE_URL}/internalUsers`,
        finalData,
        config
      );

      const resp = response.data;

      console.log(`info`, resp);

      return resp;
    } catch (errors) {
      console.error(errors);
    }
  };
  useEffect(() => {
    getdynamicFields();
  }, []);

  const form = useRef(null);

  const submit = (e) => {
    e.preventDefault();

    document.getElementById("submit").setAttribute("disabled", "true");
    document.getElementById("loader").src = Loading;
    document.getElementById("loader").removeAttribute("hidden");
    const myForm = document.querySelector("#resumeForm");
    debugger;
    Array.from(myForm.elements).forEach(
      (formElement) => (formElement.disabled = true)
    );
    let roleType = document.getElementById("roleType").value;
    if (formData.data.name === "") {
      alert("please enter name");
      return;
    }
    if (roleType === "writer" || roleType === "editor") {
      if (!formData.data.domains) {
        alert("please enter domains");
        Array.from(myForm.elements).forEach(
          (formElement) => (formElement.disabled = false)
        );
        document.getElementById("submit").setAttribute("disabled", "false");
        document.getElementById("loader").src = "";
        document.getElementById("loader").hidden = true;
        return;
      }
      if (!formData.data.skills) {
        alert("please enter skills");
        Array.from(myForm.elements).forEach(
          (formElement) => (formElement.disabled = false)
        );
        document.getElementById("submit").setAttribute("disabled", "false");
        document.getElementById("loader").src = "";
        document.getElementById("loader").hidden = true;
        return;
      }
      if (!formData.data.commercialAgreement) {
        alert("please enter commercial Agreement");
        Array.from(myForm.elements).forEach(
          (formElement) => (formElement.disabled = false)
        );
        document.getElementById("submit").setAttribute("disabled", "false");
        document.getElementById("loader").src = "";
        document.getElementById("loader").hidden = true;
        return;
      }
      if (!formData.data.podiumProRelation) {
        alert("please enter relationship with Podium Pro");
        Array.from(myForm.elements).forEach(
          (formElement) => (formElement.disabled = false)
        );
        document.getElementById("submit").setAttribute("disabled", "false");
        document.getElementById("loader").src = "";
        document.getElementById("loader").hidden = true;
        return;
      }
    
    }
    if (!formData.data.isActive) {
      alert("please enter status of user");
      Array.from(myForm.elements).forEach(
        (formElement) => (formElement.disabled = false)
      );
      document.getElementById("submit").setAttribute("disabled", "false");
      document.getElementById("loader").src = "";
      document.getElementById("loader").hidden = true;
      return;
    }

    let finalData = {
      userData: {
        ...formData.data,
        role: roleType,
      },
    };

    console.log(finalData);

    postUser(finalData).then((res)=>{
      document.getElementById("loader").src = "";
      document.getElementById("loader").setAttribute("hidden",true);
      console.log(res);
      alert("User was created");
    }).catch((err)=>{
      alert("User was not created");
      console.log(err);
    })
  };
  return (
    <>
      {token ? (
        <div>
          <h1>Add a new user</h1>
          <div className="form-group" id="newForm">
            <form ref={form} id="resumeForm" onSubmit={submit}>
              <label for="roleType"> Please select the user type</label>
              <select
                id="roleType"
                key="roleType"
                onChange={(e) => {
                  let input = e.target.value;
                  if (input === "writer") {
                    let tempFormObj = {
                      data: {},
                      fields: WriterUserFields,
                      allSet: true,
                    };
                    let j = setFormData(tempFormObj);
                    formData.fields = WriterUserFields;

                    console.log(formData);
                  } else if (input === "editor") {
                    let tempFormObj = {
                      data: {},
                      fields: EditorUserFields,
                      allSet: true,
                    };

                    setFormData(tempFormObj);
                    formData.fields = EditorUserFields;
                  } else if (input === "project manager") {
                    let tempFormObj = {
                      data: {},
                      fields: PMUserFields,
                      allSet: true,
                    };
                    setFormData(tempFormObj);
                    formData.fields = PMUserFields;
                  } else if (input === "salesperson") {
                    let tempFormObj = {
                      data: {},
                      fields: SalesUserFields,
                      allSet: true,
                    };
                    setFormData(tempFormObj);
                    formData.fields = SalesUserFields;
                  } else if (input === "administrator") {
                    let tempFormObj = {
                      data: {},
                      fields: AdminUserFields,
                      allSet: true,
                    };
                    setFormData(tempFormObj);
                    formData.fields = AdminUserFields;
                  } else if (input === "client") {
                    let tempFormObj = {
                      data: {},
                      fields: ClientUserFields,
                      allSet: true,
                    };
                    setFormData(tempFormObj);
                    formData.fields = ClientUserFields;
                  }
                }}
              >
                {/* {dFields.roles.map((role)=>{
                         <option key={role}>{role}</option>
                       })} */}
              </select>
              {formData.allSet
                ? formData.fields.map((field) => {
                    if (field.key === 0)
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
                          />
                          <br />
                        </span>
                      );
                    else if (field.key === 5 && field.options.length !== 0)
                      return (
                        <>
                          <label>Enter {field.label}</label>
                          <div className="selected">
                            <CreatableSelect
                              isMulti
                              onChange={(newValue, actionMeta) => {
                                console.log(newValue);
                                console.log(`action: ${actionMeta.action}`);
                                let set = [];
                                newValue.map((row) => {
                                  set.push(row.value);
                                });
                                setFormData({
                                  ...formData,
                                  data: {
                                    ...formData.data,
                                    [field.fname]: set,
                                  },
                                });
                              }}
                              options={
                                field.fname === "domains"
                                  ? dFields.writerDomains
                                  : dFields.writerSkills
                              }
                            />
                          </div>

                          <br />
                        </>
                      );
                    else if (
                      field.key === 5 &&
                      field.options.length !== 0 &&
                      field.fname === "commercialAgreement"
                    )
                      return (
                        <>
                          <ComboBox
                            id={field.fname}
                            options={
                              field.fname === "domains"
                                ? dFields.writerDomains
                                : dFields.writerSkills
                            }
                            placeholder={"Enter " + field.label}
                            defaultIndex={4}
                            optionsListMaxHeight={300}
                            style={{
                              width: "90%",
                              height: "14px",
                            }}
                            focusColor="#20C374"
                            renderOptions={(option) => (
                              <div className="comboBoxOption">{option}</div>
                            )}
                            onSelect={(option) => {
                              setFormData({
                                ...formData,
                                data: {
                                  ...formData.data,
                                  [field.fname]: option,
                                },
                              });
                              if (field.fname === "commercialAgreement") {
                                let sal =
                                  document.getElementById("salaryValue");
                                let perW =
                                  document.getElementById("perWordValue");
                                if (option === "per-word") {
                                  sal.value = "";
                                  sal.disabled = true;
                                  perW.disabled = false;
                                } else if (option === "salary") {
                                  perW.value = "";
                                  perW.disabled = true;
                                  sal.disabled = false;
                                }
                              }
                            }}
                            // onChange={(event) => console.log(event.target.value)}
                            enableAutocomplete
                            // onOptionsChange={(option) => setHighlightedOption(option)}
                          />
                        </>
                      );
                    else if (field.key === 2 && field.options.length !== 0)
                      return (
                        <>
                          <ComboBox
                            id={field.fname}
                            options={field.options}
                            placeholder={"Enter " + field.label}
                            defaultIndex={4}
                            optionsListMaxHeight={300}
                            style={{
                              width: "90%",
                              height: "14px",
                            }}
                            focusColor="#20C374"
                            renderOptions={(option) => (
                              <div className="comboBoxOption">{option}</div>
                            )}
                            onSelect={(option) => {
                              setFormData({
                                ...formData,
                                data: {
                                  ...formData.data,
                                  [field.fname]: option,
                                },
                              });
                              if (field.fname === "commercialAgreement") {
                                let sal =
                                  document.getElementById("salaryValue");
                                let perW =
                                  document.getElementById("perWordValue");
                                if (option === "per-word") {
                                  sal.value = "";
                                  sal.disabled = true;
                                  perW.disabled = false;
                                } else if (option === "salary") {
                                  perW.value = "";
                                  perW.disabled = true;
                                  sal.disabled = false;
                                }
                              }
                            }}
                            // onChange={(event) => console.log(event.target.value)}
                            enableAutocomplete
                            // onOptionsChange={(option) => setHighlightedOption(option)}
                          />

                          <br />
                        </>
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
      ) : (
        <div>
          {" "}
          <MainDash />
        </div>
      )}
    </>
  );
};
export default AddUser;
