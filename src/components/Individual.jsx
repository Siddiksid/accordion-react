import plus from "../../assets/images/icon-plus.svg"
import minus from "../../assets/images/icon-minus.svg"
export const Individual=({question,answer,id,handleClick,showId})=>{


    return(
        <div className="individual"> 
           <h3>{question} <span onClick={()=>handleClick(id)}>{showId==id ?<img src={minus} alt=""/>:<img  src={plus} alt="" />}</span></h3>
           {showId === id?<p className="ans">{answer}</p>:""}
           
        </div>
    )
}