import { useState } from "react"
import { Individual } from "./Individual"


export const AccordionQnA=({data})=>{

     const[showId,setShowId]=useState(1)
     function handleClick(id)
     {
         setShowId(id)
     }
    return(
        <div>
            {
                data && data.map((item)=>{
                    return (
                        <div className="individual" key={item.id}>
                            <Individual question={item.question} answer={item.answer} id={item.id} showId={showId} handleClick={handleClick}/>
                        </div>
                    )
                })
            }
        </div>
    )
}