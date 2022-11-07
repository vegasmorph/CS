import React from "react"

function Coin({ TotalSupply, CirculatingSupply, Staking, BlockHeight, Burn }) { 
 
    return ( 
      <div className="coin"> 
        <div className="Name"> 
          <h1> Luna Classic Community</h1> 
        </div> 
   
        <div className="TSupply"> 
          <h3>Total Supply ------------------------------- {parseFloat(TotalSupply).toLocaleString('pt-br', {minimumFractionDigits: 2})} LUNC</h3> 
        </div> 
   
        <div className="CSupply"> 
          <h3> Circ. Supply -------------------------------- {parseFloat((TotalSupply)-(Staking/1000000)).toLocaleString('pt-br', {minimumFractionDigits: 2})} LUNC</h3> 
        </div> 
   
        <div className="Staking"> 
          <h3>Pool Staking -------------------------------- {(Staking/1000000).toLocaleString()} LUNC</h3> 
        </div> 
        <div className="Block"> 
        <h3>Block Height ----------------------------------- {BlockHeight}</h3> 
        </div> 
   
     
         
        <div className="Burn">
        <h3>Last 10 Burn: </h3>


        <div>

          
          </div>
        </div>
          
      </div> 
      
    ) 
  }
  export default Coin;
