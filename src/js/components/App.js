import React, { Component } from "react";
import { Router, Route } from 'react-router-dom';
import Reusable from "./Reusable";
import history from "../../history";
// import Forms from "./Forms";
import NewClientForm from "./NewClientForm";
import LogIn from "./LogIn";
import NavBar from "./NavBar";
import MainPage from "./MainPage";
import Posts from "./Posts";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";
import CounterOne from "./CounterOne";
import Timer from "./Timer";
import CounterTwo from "./CounterTwo";
import Calculator from "./Calculator";
import DatePicker from "./DatePicker";
// import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

class App extends Component {
  // state = {
  //   singleDate: moment(),
  //   calendarFocused: false
  //   // onFocusChange:
  // };

  // onDateChange = singleDate => {
  //   // console.log(singleDate)
  //   this.setState(() => ({ singleDate }));
  // };

  // onFocusChange = ({ focused }) => {
  //   this.setState(() => ({ calendarFocused: focused }));
  // };
  render() {
    return (
      <div className="">
        <Router history={history}>
          <div>
            <NavBar />
            <Route path="/" exact component={MainPage} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/posts/editPost/:id" exact component={EditPost} />
            <Route path="/posts/deletePost/:id" exact component={DeletePost} />
            <Route path="/counter-one" component={CounterOne} />
            <Route path="/counter-two" component={CounterTwo} />
            <Route path="/timer" component={Timer} />
            <Route path="/date-picker" component={DatePicker} />
            {/* <Route path="/single-date-picker" component={SingleDatePicker} /> */}
            <Route path="/calculator" component={Calculator} /> 
            <Route path="/sign-in" component={NewClientForm} />
            <Route path="/log-in" component={LogIn} />  
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
