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
    heading: "List of Users",
    path: "/viewUsers",
  },
  {
    icon: UilPackage,
    heading: "Tasks",
    path: "/tasks",
  },
  {
    icon: UilChart,
    heading: "View Progress",
    path: "/viewProgress",
  },
];
export const WriterUserFields = [
  { key: 0, type: "text", fname: "name", label: "name" },
  { key: 0, type: "text", fname: "email", label: "email" },
  { key: 0, type: "number", fname: "phoneNo", label: "phone number" },
  { key: 1, type: "date", fname: "dob", label: "date of birth" },
  { key: 0, type: "text", fname: "resAddress", label: "address" },
  { key: 0, type: "number", fname: "acNumber", label: "bank account number" },
  { key: 0, type: "text", fname: "ifscCode", label: "IFSC code" },
  {
    key: 5,
    type: "text",
    fname: "skills",
    label: "Writer skills",
    options: ["blogs","website-content","college-assignment","general"
     
    
    ],
  },
  {
    key: 5,
    type: "text",
    fname: "domains",
    label: "Writer domain",
    options: [
      "finance", 
      "hr",
     "tech", 
     "marketing",
       "general", ]
  },
  {
    key: 2,
    type: "text",
    fname: "podiumProRelation",
    label: "Relationship with Podium pro",
    options: [
       "part-time",
      "full-time", 
    ],
  },
  {
    key: 2,
    type: "text",
    fname: "commercialAgreement",
    label: "Commercial Agreement",

    options: [
    "salary", 
     "per-word",]
  },
  { key: 0, type: "number", fname: "salaryValue", label: "Salary Value" },
  {
    key: 0,
    type: "number",
    fname: "perWordValue",
    label: "per Word value(if applicable)",
  },
 
  {
    key: 2,
    type: "text",
    fname: "isActive",
    label: "Status",
    options: [
    "yes",
  "no"
    ],
  },
  { key: 0, type: "number", fname: "rating", label: "Rating" },
];
export const EditorUserFields = [
  { key: 0, type: "text", fname: "name", label: "name" },
  { key: 0, type: "text", fname: "email", label: "email" },
  { key: 0, type: "number", fname: "phoneNo", label: "phone number" },
  { key: 1, type: "date", fname: "dob", label: "date of birth" },
  { key: 0, type: "text", fname: "resAddress", label: "address" },
  { key: 0, type: "number", fname: "acNumber", label: "bank account number" },
  { key: 0, type: "text", fname: "ifscCode", label: "IFSC code" },
  {
    key: 5,
    type: "text",
    fname: "skills",
    label: "Editor skills",
    options: [
   "blogs",
    "website-content",
     "college-assignment",
       "general",
    ],
  },
  {
    key: 5,
    type: "text",
    fname: "domains",
    label: "Editor domains",
    options: [
      "finance",
     "hr", 
      "tech", 
     "marketing", 
      "general",
    ],
  },
  {
    key: 2,
    type: "text",
    fname: "podiumProRelation",
    label: "Relationship with Podium pro",
    options: [
     "part-time",
     "full-time", 
    ],
  },
  {
    key: 2,
    type: "text",
    fname: "commercialAgreement",
    label: "Commercial Agreement",
    options: [
     "salary", 
      "per-word", 
    ],
 
  
  
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
  
  {
    key: 2,
    type: "text",
    fname: "isActive",
    label: "Status",
    options: [
    "yes",
    "no",
    ],
  },
  { key: 0, type: "number", fname: "rating", label: "Rating" },
];
export const SalesUserFields = [
  { key: 0, type: "text", fname: "name", label: "name" },
  { key: 0, type: "text", fname: "email", label: "email" },
  { key: 0, type: "number", fname: "phoneNo", label: "phone number" },

 
  {
    key: 2,
    type: "text",
    fname: "isActive",
    label: "Status",
    options: [
     "yes","no"
    ],
  },
];
export const PMUserFields = [
  { key: 0, type: "text", fname: "name", label: "name" },
  { key: 0, type: "text", fname: "email", label: "email" },
  { key: 0, type: "number", fname: "phoneNo", label: "phone number" },

  
  {
    key: 2,
    type: "text",
    fname: "isActive",
    label: "Status",
    options: [
     "yes", "no",
    ],
  },
];
export const AdminUserFields = [
  { key: 0, type: "text", fname: "name", label: "name" },
  { key: 0, type: "text", fname: "email", label: "email" },
  { key: 0, type: "number", fname: "phoneNo", label: "phone number" },

  
  {
    key: 2,
    type: "text",
    fname: "isActive",
    label: "Status",
    options: [
    "yes",
    "no",
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
