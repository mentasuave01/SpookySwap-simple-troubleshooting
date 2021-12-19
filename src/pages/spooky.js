import * as React from "react"
import { Icon } from '@iconify/react';
import { Link} from "gatsby"

// styles

// data


// markup
const Spooky = () => {
  return (
    <main className="">
        <div className=" fixed p-2  ">
        <Link  to="/">
        <Icon 
          className="h-16 bg-white/50 w-16 shadow-lg shadow-blue-400 rounded-xl p "
          icon="mdi:home" color="000000" />
       </Link></div>
      
      
      <div className="
        grid justify-center items-center gap-10 md:p-10
         flex-warp min-h-screen
        bg-slate-500
      ">
        
        
        
        <a target="_blank" rel="noreferrer" className="flex items-center justify-center " href="https://docs.fantom.foundation/tutorials/set-up-metamask"> 
        <div id="RPC" className="
        cursor-pointer
        bg-green-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-2
        ">
          1. Check you have correct RPC
          <Icon 
          className="h-16 w-16 mt-5 "
          icon="mdi:earth" color="white" />
        </div></a>

        <a target="_blank" rel="noreferrer" className="flex items-center justify-center "  href="https://media.discordapp.net/attachments/915337478930571284/915357738119331880/unknown.png?width=842&height=455 "> 
        <div id="cookies" className="
        cursor-pointer
        bg-green-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-2
        ">
          2.Clean Cookies and Hard Refresh
          <Icon 
          className="h-16 w-16 mt-5 "
          icon="mdi:cookie-alert" color="white" />
        </div></a>

        <a target="_blank" rel="noreferrer" className="flex items-center justify-center " href="https://docs.spookyswap.finance/getting-started/faq#how-do-i-fix-pending-transactions-on-metamask"> 
        <div id="Slippage" className="
        cursor-pointer
        bg-green-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-2
        ">
          3. If this didn't work try increasing gas or slippage
          <Icon 
          className="h-16 w-16 mt-5 "
          icon="mdi:gas-station" color="white" />
        </div></a>

        
        <div id="Browser" className="
        
        bg-green-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-2
        ">
        4.Try in another Browser
          <Icon 
          className="h-16 w-16 mt-5 "
          icon="mdi:snail" color="white" />
        </div>

        
        
        
      </div>
      
    </main>
  )
}

export default Spooky