import React from "react"
export default function Loading() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:500}}>
      <i style={{fontSize:100,color:'#3b4a6b',alignSelf:'center'}} className="fa fa-cog fa-spin" />
    </div>
  )
}
