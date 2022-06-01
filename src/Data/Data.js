import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import AddUser from "../components/AddUser/AddUser";
import MainDash from "../components/MainDash/MainDash";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    path: "/",
  },
  {
    icon: UilClipboardAlt,
    heading: "Add new User",
    path: "/addUser",
  },
  {
    icon: UilUsersAlt,
    heading: "List of writers",
    path: "/writerList",
  },
  {
    icon: UilPackage,
    heading: "Tasks",
    path: "/",
  },
  {
    icon: UilChart,
    heading: "View Progress",
    path: "/",
  },
];
export const WriterUserFields = [
  { key: 0, type: "text", fname: "name", label: "name" },
  { key: 0, type: "text", fname: "email", label: "email" },
  { key: 0, type: "number", fname: "phoneNo", label: "phone number" },
  { key: 1, type: "date", fname: "dob", label: "date of birth" },
  { key: 0, type: "text", fname: "address", label: "address" },
  { key: 0, type: "number", fname: "bankAccNo", label: "bank account number" },
  { key: 0, type: "text", fname: "ifscCode", label: "IFSC code" },
  {
    key: 2,
    type: "text",
    fname: "writerSkills",
    label: "Writer skills",
    options: [
      { value: "blogs", label: "Blogs" },
      { value: "website-content", label: "Website Content" },
      { value: "college-assignment", label: "College Assignment" },
      { value: "general", label: "General" },
    ],
  },
  {
    key: 2,
    type: "text",
    fname: "writerDomain",
    label: "Writer domain",
    options: [
      { value: "finance", label: "Finance" },
      { value: "hr", label: "HR" },
      { value: "tech", label: "Tech" },
      { value: "marketing", label: "Marketing" },
      { value: "general", label: "General" },
    ],
  },
  {
    key: 2,
    type: "text",
    fname: "podiumProRelationship",
    label: "Relationship with Podium pro",
    options: [
      { value: "part-time", label: "Part time" },
      { value: "full-time", label: "Full time" },
    ],
  },
  {
    key: 2,
    type: "text",
    fname: "commercialAgreement",
    label: "Commercial Agreement",

    options: [
      { value: "salary", label: "Salary" },
      { value: "per-word", label: "per Word" },
    ],
  },
  { key: 0, type: "number", fname: "salaryValue", label: "Salary Value" },
  {
    key: 0,
    type: "number",
    fname: "perWordValue",
    label: "per Word value(if applicable)",
  },
  // {
  //   key: 2,
  //   type: "text",
  //   fname: "userType",
  //   label: "Type of user",
  //   options: [
  //     { value: "writer", label: "Writer" },
  //     { value: "editor", label: "Editor" },
  //     { value: "project manager", label: "Project Manager" },
  //     { value: "admin", label: "Administrator" },
  //   ],
  // },
  {
    key: 2,
    type: "text",
    fname: "isActive",
    label: "Status",
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ],
  },
  { key: 0, type: "number", fname: "rating", label: "Rating" },
];
export const EditorUserFields = [
  { key: 0, type: "text", fname: "name", label: "name" },
  { key: 0, type: "text", fname: "email", label: "email" },
  { key: 0, type: "number", fname: "phoneNo", label: "phone number" },
  { key: 1, type: "date", fname: "dob", label: "date of birth" },
  { key: 0, type: "text", fname: "address", label: "address" },
  { key: 0, type: "number", fname: "bankAccNo", label: "bank account number" },
  { key: 0, type: "text", fname: "ifscCode", label: "IFSC code" },
  {
    key: 2,
    type: "text",
    fname: "writerSkills",
    label: "Writer skills",
    options: [
      { value: "blogs", label: "Blogs" },
      { value: "website-content", label: "Website Content" },
      { value: "college-assignment", label: "College Assignment" },
      { value: "general", label: "General" },
    ],
  },
  {
    key: 2,
    type: "text",
    fname: "writerDomain",
    label: "Writer domain",
    options: [
      { value: "finance", label: "Finance" },
      { value: "hr", label: "HR" },
      { value: "tech", label: "Tech" },
      { value: "marketing", label: "Marketing" },
      { value: "general", label: "General" },
    ],
  },
  {
    key: 2,
    type: "text",
    fname: "podiumProRelationship",
    label: "Relationship with Podium pro",
    options: [
      { value: "part-time", label: "Part time" },
      { value: "full-time", label: "Full time" },
    ],
  },
  {
    key: 2,
    type: "text",
    fname: "commercialAgreement",
    label: "Commercial Agreement",
    options: [
      { value: "salary", label: "Salary" },
      { value: "per-word", label: "per Word" },
    ],
    action: `()={if(e.target.value === "salary"){document.getElementbyId("salaryValue").disabled = false;
          document.getElementbyId("perWordValue").disabled = true;}
          
          else if(e.target.value === "per-word")
         {document.getElementbyId("salaryValue").disabled = true;
          document.getElementbyId("perWordValue").disabled = false;}
  
  
  }`,
  },
  {
    key: 0,
    type: "number",
    fname: "salaryValue",
    label: "Salary Value",
    disabled: true,
  },
  {
    key: 0,
    type: "number",
    fname: "perWordValue",
    label: "per Word value(if applicable)",
    disabled: true,
  },
  // {
  //   key: 2,
  //   type: "text",
  //   fname: "userType",
  //   label: "Type of user",
  //   options: [
  //     { value: "writer", label: "Writer" },
  //     { value: "editor", label: "Editor" },
  //     { value: "project manager", label: "Project Manager" },
  //     { value: "admin", label: "Administrator" },
  //   ],
  // },
  {
    key: 2,
    type: "text",
    fname: "isActive",
    label: "Status",
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ],
  },
  { key: 0, type: "number", fname: "rating", label: "Rating" },
];
export const SalesUserFields = [
  { key: 0, type: "text", fname: "name", label: "name" },
  { key: 0, type: "text", fname: "email", label: "email" },
  { key: 0, type: "number", fname: "phoneNo", label: "phone number" },

  // {
  //   key: 2,
  //   type: "text",
  //   fname: "userType",
  //   label: "Type of user",
  //   options: [
  //     { value: "writer", label: "Writer" },
  //     { value: "editor", label: "Editor" },
  //     { value: "project manager", label: "Project Manager" },
  //     { value: "admin", label: "Administrator" },
  //   ],
  // },
  {
    key: 2,
    type: "text",
    fname: "isActive",
    label: "Status",
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ],
  },
];
export const PMUserFields = [
  { key: 0, type: "text", fname: "name", label: "name" },
  { key: 0, type: "text", fname: "email", label: "email" },
  { key: 0, type: "number", fname: "phoneNo", label: "phone number" },

  // {
  //   key: 2,
  //   type: "text",
  //   fname: "userType",
  //   label: "Type of user",
  //   options: [
  //     { value: "writer", label: "Writer" },
  //     { value: "editor", label: "Editor" },
  //     { value: "project manager", label: "Project Manager" },
  //     { value: "admin", label: "Administrator" },
  //   ],
  // },
  {
    key: 2,
    type: "text",
    fname: "isActive",
    label: "Status",
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ],
  },
];
export const AdminUserFields = [
  { key: 0, type: "text", fname: "name", label: "name" },
  { key: 0, type: "text", fname: "email", label: "email" },
  { key: 0, type: "number", fname: "phoneNo", label: "phone number" },

  // {
  //   key: 2,
  //   type: "text",
  //   fname: "userType",
  //   label: "Type of user",
  //   options: [
  //     { value: "writer", label: "Writer" },
  //     { value: "editor", label: "Editor" },
  //     { value: "project manager", label: "Project Manager" },
  //     { value: "admin", label: "Administrator" },
  //   ],
  // },
  {
    key: 2,
    type: "text",
    fname: "isActive",
    label: "Status",
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ],
  },
];
export const ClientUserFields = [
  { key: 0, type: "text", fname: "name", label: "name" },
  { key: 0, type: "text", fname: "email", label: "email" },
  { key: 0, type: "text", fname: "company", label: "company" },
  { key: 0, type: "number", fname: "phoneNo", label: "phone number" },
];
// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
