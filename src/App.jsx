import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="counter mx-auto p-4 h-auto bg-black">
      <PostList />
      <Pagination />
    </div>
  );
}

export default App;
