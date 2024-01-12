import { useState } from "react"
import "../styles/Container.css"
import Box from "./Box.jsx"


export default function Container(props){
    
    // maping box array elements to jsx tags
    const boxMap = props.boxes.map(e=>(
        <Box boxInfo={e} handleDrag={props.handleDrag} mousePosition={props.mousePosition} key={e.id}/>
    ))

    return(
        <div className="Container-body" onPointerUp={() => props.handleDrop(props.containerId)}> 
            {boxMap}
        </div>
    )
}