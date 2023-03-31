import { Route, Routes } from "react-router";
import Navigation from "./Navigation";
import Home from "./practice/altre/Home";
import Css from "./practice/css/Css";
import Figma from "./practice/figma/Figma";
import SignIn from "./practice/other/SignIn";
import Signup from "./practice/other/Signup";
import ShowFinderHome from "./practice/redux/ShowFinder/ShowFinderHome";
// import FbLogin from "./practice/other/Fblogin";
import ReduxHome from "./practice/redux/ReduxHome";
import Todo from "./practice/redux/Todo/Todo";
import Users from "./practice/redux/Todo/Users";
import GameHome from "./practice/games/GameHome";
import ShowDetails from "./practice/redux/ShowFinder/ShowDetails";
import ExcelToJsonHome from "./practice/tools/excelToJson/ExcelToJsonHome";
import ToolsHome from "./practice/tools/ToolsHome";
import Timer from "./practice/tools/timer/Timer";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/altre" element={<Home />} />
        <Route path="/css" element={<Css />} />
        <Route path="/figma" element={<Figma />} />
        <Route path="/redux" element={<ReduxHome />} />
        <Route path="/games" element={<GameHome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/redux/todo" element={<Todo />} />
        <Route path="/redux/users" element={<Users />} />
        <Route path="/redux/showfinder" element={<ShowFinderHome />} />
        <Route path="/redux/showfinder/shows/:id" element={<ShowDetails />} />
        <Route path="/tools" element={<ToolsHome />} />
        <Route path="/tools/excel-to-json" element={<ExcelToJsonHome />} />
        <Route path="/tools/timer" element={<Timer/>} />
        {/* <Route path="/fblogin" element={<FbLogin/>}/> */}
      </Routes>

    </>
  )
}

export default App;