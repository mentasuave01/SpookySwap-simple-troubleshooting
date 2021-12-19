import * as React from "react"
import { Icon } from '@iconify/react';
import { Link} from "gatsby"

// styles

// data


// markup
const BridgeGuide = () => {
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
        
        
        
        
        <div id="RPC" className="
        
        bg-green-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-2
        ">
          1.<br/>
          Paste here you address<a className="text-blue-400" target="_blank" rel="noreferrer"   href="https://anyswap.net/"> here</a><br/>
            Transaction state must be "Success"<br/>
            If transaction is not on Success try point 3)<br/> if you already try it, just wait we can't do nothing about it.<br/>
            Funds are safe and they will arrive, bridge can take up to 48h.<br/>
          
        </div>

        
        <div id="cookies" className="
        
        bg-green-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-2
        ">
          2.<br/>  Funds not found after bridge<br/><br/>

            Check token list <a className="text-blue-400" target="_blank" rel="noreferrer"   href="https://ftmscan.com/"> here</a><br/> 

            If your bridge is in anyTOKEN format go <a target="_blank" rel="noreferrer"   className="text-blue-400" href="https://docs.spookyswap.finance/products/bridge#bridge-faq"> here</a><br/> 



            If token is there but not showing on metamask go<br/><a target="_blank" rel="noreferrer"   className="text-blue-400" href="https://docs.spookyswap.finance/products/bridge#5.-view-your-bridged-token"> here</a><br/> 

          
        </div>

        
        <div id="Slippage" className="
        
        bg-green-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-2
        ">
          3.<br/> 
          <a target="_blank" rel="noreferrer"   className="text-blue-400" href="https://docs.spookyswap.finance/products/bridge#bridge-faq"> Bridge taking for ever</a><br/> 
            If thats didn't work go <a target="_blank" rel="noreferrer"   className="text-blue-400" href="https://anyswaphelp.zendesk.com/hc/en-us"> MultiSwap help</a> or <a target="_blank" rel="noreferrer"   className="text-blue-400" href="https://t.me/anyswap">MultiSwap telegram</a>   and report the issue there 

         
        </div>

        
        

        
        
        
      </div>
      
    </main>
  )
}

export default BridgeGuide