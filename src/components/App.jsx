import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import ArticleList from "./ArticleList"
import About from "./About"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogData = {blogData}/>
      <About blogData = {blogData}/>
      <ArticleList blogData = {blogData}/>
      
    </div>
  );
}

export default App;
