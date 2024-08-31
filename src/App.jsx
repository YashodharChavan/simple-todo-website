import { useState, useRef, useEffect } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
function App() {
  const main=useRef();
  const side=useRef();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [finishedTodo, setFinishedTodo] = useState([])
  useEffect(() => {
    side.current.classList.add("hidden")
  }, [])


  function sidebar() {
    if(!isSidebarOpen){
      setIsSidebarOpen(true)
      side.current.classList.remove("hidden")
      main.current.style.width="80%"
      main.current.style.marginLeft="20%"
    }
    else if(isSidebarOpen){
      setIsSidebarOpen(false)
      side.current.classList.add("hidden")
      main.current.style.width="100%"
      main.current.style.marginLeft="0%"
    }
    
  }
  return (
    <>
      <div className="sidebar flex min-w-56 bg-[#d6d6e9d9] flex-col border gap-y-10 border-black rounded" ref={side}>
        <div className="name border border-black rounded-3xl p-2 cursor-pointer">
          <h2>John Doe</h2>
          <p>johndoe@gmail.com</p>
        </div>

        <div className="list flex flex-col gap-y-6">
          <div className="lists p-3 border border-black rounded font-serif cursor-pointer">
            <h1>Priority</h1>
          </div>
          <div className="lists p-3 border border-black rounded font-serif cursor-pointer">
            <h1>Secondary</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-14 flex items-center justify-end mr-6" ref={main}>
        <div className="icon mx-3 h-9 w-9 border-black border rounded cursor-pointer flex justify-center items-center" onClick={sidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36px"
            viewBox="0 -960 960 960"
            width="36px"
            fill="#e8eaed"
          >
            <path
              d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"
              fill="#212121"
            />
          </svg>
        </div>
      </div>

      <AddTodo/>
    </>
  );
}

export default App;
