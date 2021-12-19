import * as React from "react"
import { Icon } from '@iconify/react';
import { Link} from "gatsby"

// styles

// data


// markup
const IndexPage = () => {
  return (
    <main className="">
      <div className=" fixed p-2  ">
        <Link  to="/">
        <Icon 
          className="h-16 bg-white/50 w-16 shadow-lg shadow-blue-400 rounded-xl p "
          icon="mdi:home" color="000000" />
       </Link></div>
      
      <div className="
        grid md:flex justify-center items-center gap-10 p-10
        min-h-screen flex-warp
        bg-slate-500
      ">
        
        <Link to="/spooky"> 
        <div id="card1" className="
          cursor-pointer
          bg-green-400
          rounded-xl
          shadow-2xl shadow-violet-500
          h-[500px] w-80 md:w-96
          flex flex-col justify-center items-center
          font-bold text-xl
          ">
          Spooky Swap issues
            <Icon 
            className="h-16 w-16"
            icon="mdi:cat" color="white" />
        </div></Link>

        <Link to="/bridge"> 
        <div id="card2" className="
        cursor-pointer
        bg-green-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-96
        flex flex-col justify-center items-center 
        font-bold text-xl
        ">
          Bridge issues
          <Icon 
          className="h-16 w-16"
          icon="mdi:bridge" color="white" />
        </div></Link>
        
        
        
      </div>
      
    </main>
  )
}

export default IndexPage
