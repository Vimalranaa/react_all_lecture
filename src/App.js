import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/styles/style.scss'


// import Lecture_1 from "./components/lecture_1";
import Lecture_2 from './components/lecture_2/Lecture_2.jsx';
// import Lecture_3_Part_1 from './components/lecture_3/part_1_inheritance/ChildClass';
// import Lecture_3_Part_2 from './components/lecture_3/part_2_compositions/ParentcClass';
// import Lecture_4 from "./components/lecture_4";
// import Counter from "./components/lecture_4/Counter.jsx";
// import Stopwatch from "./components/lecture_4/Stopwatch";
// import Lecture_5_counter from "./components/lecture_5";
// import Lecture5StopwatchHook from "./components/lecture_5/stopwatch_hook";
// import Simple_Form from "./components/lecture_6/Simple_Form.jsx";
// import Form_Hook from "./components/lecture_6/Form_Hook";
// import Form_Hook_SelectOption from "./components/lecture_6/Form_Hook_SelectOption";
// import Gmail from "./components/lecture_6/Gmail";
// import Project from "./components/lecture_6/Project";
// import Product_test from "./components/lecture_6/Product_test";
// import Effect_hook from "./components/lecture_7/Effect_hook"
// import Parent_Memo1 from "./components/lecture_7/Parent_memo1";
// import Parent_Memo2 from "./components/lecture_7/Parent_Memo2";
// import MemoHookComp from "./components/lecture_7/MemoHookComp";
// import UseMemoHookComp from "./components/lecture_7/UseMemoHookComp";
// import Counter1 from "./components/lecture_8/Counter1";
// import CounterUseCallBack from "./components/lecture_8/CounterUseCallBack";
// import Testform from "./components/Testing/Testform";

import { Routes, Route } from "react-router-dom";
import Home from "./components/lecture_9/home";
import About from "./components/lecture_9/about";
import Contact from "./components/lecture_9/contact";
// import Lecture_9 from "./components/lecture_9";



function App() {
  return (
    <>
      {/* <Lecture_1 /> */}
      <Lecture_2 />
      {/* <Lecture_3_Part_1 /> */}
      {/* <Lecture_3_Part_2 /> */}
      {/* <Lecture_4 /> */}
      {/* <Counter /> */}
      {/* <Stopwatch /> */}
      {/* <Lecture_5_counter /> */}
      {/* <Lecture5StopwatchHook /> */}
      {/* <Simple_Form /> */}
      {/* <Form_Hook /> */}
      {/* <Form_Hook_SelectOption /> */}
      {/* <Gmail /> */}
      {/* <Project /> */}
      {/* <Product_test /> */}
      {/* <Effect_hook /> */}
      {/* <Parent_Memo1 /> */}
      {/* <Parent_Memo2 /> */}
      {/* <MemoHookComp /> */}
      {/* <UseMemoHookComp /> */}
      {/* <Counter1 /> */}
      {/* <CounterUseCallBack /> */}
      {/* <Testform /> */}


      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>


      {/* <Lecture_9 /> */}








    </>
  );
}

export default App;
