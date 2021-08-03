import React , { useState  } from 'react';
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question=({title,info})=>{
    const [infos,setInfo] = useState(false);
    return (
        <section>
           <h3>{title}</h3>
           <button onClick={()=>setInfo(!infos)}>
            {infos ? "--" : "++" }
           </button>
           {
               infos && <p>{info}</p>
           }
        </section>
    )
}
export default Question;