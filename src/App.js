import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainDash from "./components/MainDash/MainDash";
import AddUser from "./components/AddUser/AddUser";
import NotFound from "./components/NotFound";
// import { NotFound } from "./components/NotFound";
import Sidebar from "./components/Sidebar/Sidebar";
import ViewUser from "./components/ViewUser/ViewUser";
function App() {
  const [quote, setQuote] = useState();

  const getQuote = () => {
    let quoteObj;

    var url = new URL(
      "https://api.quotable.io/random?minLength=100&maxLength=140"
    );

    fetch(url, {
      method: "GET",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        quoteObj = data;
        setQuote(data);
        console.log(quoteObj);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    //  return quoteObj;
  };
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar></Sidebar>
        <div>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => <MainDash />} />
              <Route path="/addUser" render={() => <AddUser />} />
              <Route path="/viewUsers" render={() => <ViewUser />} />
              <Route path="*" render={() => <NotFound />} />
            </Switch>
            </BrowserRouter>
        </div>
        <div className="RightSide">
          {quote !== undefined ? (
            <div>
              <div className="quote">{quote.content}</div>
              <span>{quote.author}</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
