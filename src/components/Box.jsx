import "../styles/Box.css"

export default function Box(props){
    const style = {
        backgroundColor: `#${props.boxInfo.color}`, 
        borderColor: `#${props.boxInfo.borderColor}`
    }

    const styleHolded = {
        ...style,
        position: "fixed",
        top: props.mousePosition.y,
        left: props.mousePosition.x,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)"
    }

    return (
        <div className="Box-body" style={props.boxInfo.holded?styleHolded:style} onPointerDown={() => props.handleDrag(props.boxInfo.id)}>

        </div>
    )
}