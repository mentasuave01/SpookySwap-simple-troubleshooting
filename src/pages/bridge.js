import * as React from "react"
import { Icon } from '@iconify/react';
import { Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// styles

// data


// markup
const Bridge = () => {
  return (
    <main className="">
        <div className=" fixed p-2  ">
        <Link  to="/">
        <Icon 
          className="h-16 bg-white/50 w-16 shadow-lg shadow-blue-400 rounded-xl p "
          icon="mdi:home" color="000000" />
       </Link></div>
       <div  className=" fixed p-2 h-16 bg-white/50 w-16 shadow-lg shadow-blue-400 rounded-xl ml-2 bottom-0 right-2 mb-8 ">
        <a target="_blank" rel="noreferrer" href="https://twitter.com/mentasuave01">
          <StaticImage
            src="../images/mentasuave01.png"
            alt="mentasuave01"
          />
        </a>
        </div>
      
      
      <div className="
        grid justify-center items-center gap-10 md:p-10
         flex-warp min-h-screen
        bg-slate-500
      ">
        
        

        <Link className="flex items-center justify-center " to="/bridgeguide"> 
        <div id="card1" className="
        cursor-pointer
        bg-green-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-2
        ">
          Tokens didn't arrive
          <Icon 
          className="h-16 w-16 mt-5 "
          icon="mdi:clock-alert-outline" color="white" />
        </div></Link>

        <a target="_blank" rel="noreferrer"   className="flex items-center justify-center " href="https://docs.spookyswap.finance/products/bridge#how-to-bridge"> 
        <div id="card2" className="
        cursor-pointer
        bg-green-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-2
        ">
          How to Bridge, step by step 
          <Icon 
          className="h-16 w-16 mt-4"
          icon="mdi:shoe-print" color="white" />
        </div></a>

        <a target="_blank" rel="noreferrer"   className="flex items-center justify-center " href="https://www.fantom.tips"> 
        <div id="card3" className="
        cursor-pointer
        bg-green-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl
        text-center  p-2
        ">
        
        I need FTM to do my first swap <br/>
         Bridge Faucet
        
          
          <Icon 
          className="h-16 w-16 mt-4"
          icon="mdi:water-outline" color="white" />
        </div></a>
        
        
        
      </div>
      
    </main>
  )
}

export default Bridge