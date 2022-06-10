import "./ViewUser.css";
import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import MaterialTable from "material-table";
import Save from "@material-ui/icons/Save";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import axios from "axios";
import { forwardRef } from "react";
import MainDash from "../MainDash/MainDash";
import AddBox from "@material-ui/icons/AddBox";

import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Loader from "./../../Loader";
import { TextField } from "@mui/material";
const BASE_URL = "https://us-central1-podiumpro-9cc8e.cloudfunctions.net";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function ViewUser() {
  const [dFields, setdFields] = useState({
    isSet: false,
    writerSkills: [],
    writerDomains: [],
    roles: [],
  });

  const [data, setData] = useState([]);

  const [token, setToken] = useState(
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null
  );

  const getUsersData = async () => {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`${BASE_URL}/internalUsers`, config);

      const resp = response.data;
      setData([...resp]);
      console.log(`info`, resp);

      return resp;
    } catch (errors) {
      console.error(errors);
    }
  };
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
        isSet: true,
      });

      

      return resp;
    } catch (errors) {
      console.error(errors);
    }
  };
  useEffect(() => {
    getUsersData();
    getdynamicFields();
  }, []);
  const columns = [
    { title: "fireStoreID", field: "firestoreID", hidden: true },
    {
      title: "Name",
      field: "name",
      render: (rowData) => (
        <TextField
          defaultValue={rowData.name}
          style={{ width: 200 }}
          size="small"
          multiline
          InputProps={{
            readOnly: true,
          }}
        ></TextField>
      ),
    },
    {
      title: "Skills",
      field: "skills",
      // editable: (_, rowData) => {
      //   if (rowData && rowData.role === "writer") return true;
      //   else if (rowData && rowData.role === "editor") return true;
      //   else return false;
      // },
      render: (rowData) => {
        if (rowData.skills) {
          return (
            <ul>
              {rowData.skills.map((skill) => {
                return <li>{skill}</li>;
              })}
            </ul>
          );
        }
      },
      editComponent: (props) => {
        return (
          <CreatableSelect
            isMulti
            onChange={(newValue, actionMeta) => {
              console.log(newValue);
              console.log(`action: ${actionMeta.action}`);
              let set = [];
              newValue.map((row) => {
                set.push(row.value);
              });
              props.onChange(set);
            }}
            options={dFields.writerSkills}
          />
        );
      },
    },
    {
      title: "Role",
      field: "role",

      editComponent: (props) => {
        return (
          <select
            id="roleType"
            key="roleType"
            onChange={(e) => {
              props.onChange(e.target.value);
            }}
          >
            {dFields.roles.map((role) => {
              return <option>{role}</option>;
            })}
          </select>
        );
      },
    },
    { title: "realtimeID", field: "realtimeID", hidden: true },

    {
      title: "Domains",
      field: "domains",
      // editable: (_, rowData) => {
      //   if (rowData && rowData.role === "writer") return true;
      //   else if (rowData && rowData.role === "editor") return true;
      //   else return false;
      // },
      render: (rowData) => {
        if (rowData.domains) {
          return (
            <ul>
              {rowData.domains.map((dom) => {
                return <li>{dom}</li>;
              })}
            </ul>
          );
        }
      },
      editComponent: (props) => {
        return (
          <CreatableSelect
            isMulti
            onChange={(newValue, actionMeta) => {
              console.log(newValue);
              console.log(`action: ${actionMeta.action}`);
              let set = [];
              newValue.map((row) => {
                set.push(row.value);
              });
             props.onChange(set);
            }}
            options={dFields.writerDomains}
          />
        );
      },
    },
    {
      title: "Commercial Agreement",
      field: "commercialAgreement",
      // editable: (_, rowData) => {
      //   if (rowData && rowData.role === "writer") return true;
      //   else if (rowData && rowData.role === "editor") return true;
      //   else return false;
      // },
      editComponent: (props) => {
        return (
          <select
            id="commercialAgreement"
            onChange={(e) => {
              let agree = e.target.value;
              let perwordvalue = document.getElementById("perwordvalue");
              let salaryvalue = document.getElementById("salaryValue");
              if (agree === "Salary") {
                perwordvalue.disabled = true;
                salaryvalue.disabled = false;
              } else if (agree === "Per-word") {
                perwordvalue.disabled = false;
                salaryvalue.disabled = true;
              }
              props.onChange(e.target.value);
            }}
            defaultValue={props.value}
          >
            <option value="">Select Any</option>
            <option value="Salary">Salary</option>
            <option value="Per-word">Per Word</option>
          </select>
        );
      },
    },
    {
      title: "Salary",
      field: "salaryValue",
      // editable: (_, rowData) => {
      //   if (rowData && rowData.role === "writer") return true;
      //   else if (rowData && rowData.role === "editor") return true;
      //   else return false;
      // },
      editComponent: (props) => {
        return (
          <input
            type="number"
            id="salaryValue"
            min={1}
            defaultValue={props.rowData.salaryValue}
            onChange={(e) => {
              props.onChange(e.target.value);
            }}
          />
        );
      },
    },
    {
      title: "Per Word",
      field: "perwordvalue",
      // editable: (_, rowData) => {
      //   if (rowData && rowData.role === "writer") return true;
      //   else if (rowData && rowData.role === "editor") return true;
      //   else return false;
      // },
      editComponent: (props) => {
        return (
          <input
            type="number"
            id="perwordvalue"
            min={1}
            defaultValue={props.rowData.perwordvalue}
            onChange={(e) => {
              props.onChange(e.target.value);
            }}
          />
        );
      },
    },
    { title: "Email", field: "email" },
    {
      title: "Total Rating",
      field: "totalRating",
      type: "numeric",
      editable: "never",
    },
    { title: "Given Rating", field: "givenRating", type: "numeric" },
    { title: "Created By", field: "createdBy", editable: "never" },
    {
      title: "Address",

      field: "resAddress",
      editable: (_, rowData) => {
        if (rowData && rowData.role === "writer") return true;
        else if (rowData && rowData.role === "editor") return true;
        else return false;
      },
    },
    {
      title: "Status",
      field: "isActive",
      render: (rowData) => {
        if (rowData.isActive) return "Yes";
        else return "No";
      },
      editComponent: (props) => {
        return (
          <select
            id="isActive"
            onChange={(e) => {
              props.onChange(e.target.value);
            }}
            defaultValue={props.value}
          >
            <option value="">Select Any</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        );
      },
    },
    { title: "Phone Number", field: "phoneNumber" },
    {
      title: "Account Number",
      field: "acNumber",
      // editable: (_, rowData) => {
      //   if (rowData && rowData.role === "writer") return true;
      //   else if (rowData && rowData.role === "editor") return true;
      //   else return false;
      // },
    },
    {
      title: "Company",
      field: "company",
      // editable: (_, rowData) => {
      //   if (rowData && rowData.role === "client") return true;
      //   else return false;
      // },
    },
    {
      title: "IFSC Code",
      field: "ifscCode",
      // editable: (_, rowData) => {
      //   if (rowData && rowData.role === "writer") return true;
      //   else if (rowData && rowData.role === "editor") return true;
      //   else return false;
      // },
    },
    {
      title: "Date of Birth",
      field: "dob",
      // editable: (_, rowData) => {
      //   if (rowData && rowData.role === "writer") return true;
      //   else if (rowData && rowData.role === "editor") return true;
      //   else return false;
      // },
      render: (rowData) => {
        if (rowData.dob) {
          return new Date(rowData.dob).toLocaleDateString("en-IN");
        }
      },
    },

    {
      title: "Relationship with Podium Pro",
      field: "podiumProRelation",
      // editable: (_, rowData) => {
      //   if (rowData && rowData.role === "writer") return true;
      //   else if (rowData && rowData.role === "editor") return true;
      //   else return false;
      // },

      editComponent: (props) => {
        return (
          <select
            id="podiumProRelation"
            onChange={(e) => {
              props.onChange(e.target.value);
            }}
            defaultValue={props.value}
          >
            <option value="">Select Any</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
          </select>
        );
      },
    },
  ];

  const deleteUser = async (realtimeID, firestoreID) => {
    let userData = {
      "realtimeID":realtimeID,
      "firestoreID": firestoreID,
    }
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.delete(
        `${BASE_URL}/internalUsers`,
        userData,
        config
      );

      const resp = response.data;

      console.log(`info`, resp);
alert("Successful deletion");
      return resp;
    } catch (errors) {
      console.error(errors);
    }
  };
  function handleRowDelete(newData, oldData, resolve, reject) {
    // validations
    deleteUser(newData.realtimeID,newData.firestoreID).then((res)=>{

      resolve();
    }).catch((err)=>{
      console.log(err);
    })



   
   
  }

  const postUser = async (finalData) => {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.patch(
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

  function handleRowUpdate(newData, oldData, resolve, reject) {
    // validations

    if (newData.name.length === 0) {
      alert("Please enter name");
      reject();
    }  if (newData.role.length === 0) {
      alert("Please enter role");
      reject();
    }
    else if (newData.role === "writer"|| newData.role === "editor") {
      if (newData.skills === null || newData.skills.length===0) {
        alert("Please enter skills");
        reject();
      }
     else if (newData.domains === null || newData.domains.length===0) {
        alert("Please enter domains");
        reject();
      }
      if (newData.commercialAgreement === undefined || newData.commercialAgreement === "") {
        alert("Please enter agreement");
        reject();
      }
      if (newData.salary === null || newData.perWord === undefined) {
        alert("Please enter salary or per word value");
        reject();
      }
     
    } 
    if (newData.phoneNumber === null || newData.phoneNumber === undefined) {
      alert("Please enter phoneNumber");
      reject();
    }
    if (newData.email===""||newData.email===null ) {
      alert("Please enter email");
      reject();
    }
    if (newData.isActive==="" ) {
      alert("Please enter status");
      reject();
    }
    
    else {
      const dataUpdate = [...data];
      const index = oldData.tableData.id;
      postUser(newData).then((res)=>{
        alert("data was updated")
        setData(dataUpdate);
        resolve();
      }).catch((error)=>{
        console.log(error);
        reject();
      }
      )



    }
  }
  return (
    <>
      {token && dFields.isSet ? (
        <div className="base">
          <div>
            <h1 className="ViewUser"> View Users</h1>

            {data.length === 0 ? (
              <div>
                <Loader /> <br /> Loading the data...
              </div>
            ) : (
              <MaterialTable
                icons={tableIcons}
                title="Edit Users"
                columns={columns}
                data={data}
                options={{
                  filtering: true,
                }}
                editable={{
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      handleRowUpdate(newData, oldData, resolve, reject);
                    }),
                  onRowDelete: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      handleRowDelete(newData, oldData, resolve, reject);
                    }),
                }}
              />
            )}
          </div>
        </div>
      ) : (
        <MainDash />
      )}
    </>
  );
}

export default ViewUser;
