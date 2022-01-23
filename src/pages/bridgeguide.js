
import * as React from "react"
import { Icon } from '@iconify/react';
import { Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"



// data
const yesb = () => {
  document.getElementById("first").innerHTML = ' First paste your address to check token list <a class="text-blue-400" target="_blank" rel="noreferrer"   href="https://ftmscan.com/"> here</a><br/>  <div class="flex">   <div class="border-r-4 border-black bg-white bg-opacity-30 "> Token format is anyTOKEN<div class="   ">1. Go to 	&nbsp;<a target="_blank" rel="noreferrer"   class="text-blue-400" href="https://anyswap.exchange/#/pool">this	&nbsp;</a> website and follow &nbsp;<a class="text-blue-400" target="_blank" rel="noreferrer" href="https://imgur.com/a/Mte0D5h"> these	&nbsp;</a> instructions</div><div class="mt-2">*Ask for fees 	 <a class="text-blue-400" target="_blank" rel="noreferrer" href="https://www.mentasuave01-tools.com/"> here	&nbsp;</a> if you need ftm to withdraw</div></div> <div class=" bg-white bg-opacity-30">   </br> If token is there but not showing on metamask go<br/><a target="_blank" rel="noreferrer"   class="text-blue-400" href="https://docs.spookyswap.finance/products/bridge#5.-view-your-bridged-token"> here</a><br/></div></div> '

}
const nob = () => {
  document.getElementById("first").innerHTML = '      <a target="_blank" rel="noreferrer"   class="text-blue-400" href="https://anyswap.net/?tabparams=tools"> Push your transaction again</a><br/>  Now just wait, funds are safe and will arrive. </br></br>  48h has passed? <a target="_blank" rel="noreferrer"   class="text-blue-400" href="https://anyswaphelp.zendesk.com/hc/en-us"> MultiSwap help</a> or <a target="_blank" rel="noreferrer"   class="text-blue-400" href="https://t.me/anyswap">MultiSwap telegram</a>   and report the issue there '

}


const BridgeGuide = () => {
  return (
    <main className="">
        <div className=" fixed p-2  ">
        <Link  to="/">
        <Icon 
          className="h-16 bg-white/50 w-16 shadow-lg shadow-blue-400 rounded-xl  "
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
        
        
        
        
        <div id="first" className="
        
        bg-green-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-2
        ">
          <br/>
          Paste here you address<a className="text-blue-400" target="_blank" rel="noreferrer"   href="https://anyswap.net/"> here</a><br/>
            Transaction state = "Success" ?<br/>
            {/* If transaction is not on Success try point 3)<br/> if you already try it, just wait we can't do nothing about it.<br/>
            Funds are safe and they will arrive, bridge can take up to 48h.<br/>
           */}
           <div className="flex gap-3 mt-10">
             
            <div className="flex flex-col items-center justify-center">
            YES
             <Icon  onClick={yesb}
              className="h-16 mt-1 cursor-pointer  bg-white/50 w-16 shadow-lg shadow-blue-400 rounded-xl p "
              icon="mdi:check-circle-outline" color="000000" />
            </div>

            <div className="flex flex-col items-center justify-center">
              NO||NULL
            <Icon onClick={nob}
              className="h-16 mt-1 cursor-pointer bg-white/50 w-16 shadow-lg shadow-blue-400 rounded-xl p "
              icon="mdi:close-outline" color="000000" />
            </div>
           </div>
              
        </div>

        
        

        
  

        
        

        
        
        
      </div>
      
    </main>
  )
}

export default BridgeGuide
