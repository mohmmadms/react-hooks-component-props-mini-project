import React from "react";
import Header from "./Header";
import About from "./About";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
    <Header blogName={blogData.name}/>
    <About image ={blogData.image} about={blogData.about}/>
    <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
