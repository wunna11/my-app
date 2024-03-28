import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import Picture from "./components/picture";
import EditProfile from "./components/editProflie";
import FeedbackForm from "./components/aviodContradictions";
import Menu from "./components/avoidDuplicateState";
import Time from "./components/Time/index";
import TravelPlan from "./components/TravelPlan";
import MailClient from "./components/MailClient";
import MultipleSelect from "./components/MultipleSelect";
import ShareState from "./components/shareState";
import FilterSearch from "./components/Search";
import Preserve from "./components/Preserve";
import Challenge1 from "./components/Preserve/Challenge1";
import Challenge2 from "./components/Preserve/Challenge2";
import Challenge3 from "./components/Preserve/Challenge3";
import Challenge4 from "./components/Preserve/Challenge4";
import Challenge5 from "./components/Preserve/Challenge5";
import { Box, Heading } from "@react-yuki/ui";
import TestContext from "./components/TestContext";
import { useState } from "react";
import { ThemeContext } from "./context/DataContext";
import CallBackDemo from "./hooks/CallBackDemo";
import ReducerCouter from "./hooks/reducer/ReducerCounter";
import TaskApp from "./hooks/reducer/Task";
import CheckboxApp from "./components/Form/checkbox";
import HigherOrderComponent from "./components/hoc";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        {/* <Form /> */}
        {/* <Picture /> */}
        {/*  <EditProfile /> */}
        {/* <FeedbackForm /> */}
        {/* <Menu /> */}
        {/* <Time /> */}
        {/*<TravelPlan /> */}
        {/*<MailClient /> */}
        {/*<MultipleSelect />*/}
        {/*<ShareState /> */}
       {/* <FilterSearch />*/}

        {/*<Preserve /> */}
        {/*<Challenge1 /> */}
        {/*<Challenge2 /> */}
        {/*<Challenge3 /> */}
        {/*<Challenge4 /> */}
        {/*<Challenge5 /> */}

        {/*  {theme === 'light' ? (
          <TestContext />
      ) : <h1>Dark Mode</h1>} */}

        {/* <CallBackDemo /> */}
        {/*   <ReducerCouter />*/}

        {/* <TaskApp /> */}
        
      {/*  <CheckboxApp /> */}

      <HigherOrderComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
