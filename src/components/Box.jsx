import "../styles/Box.css"

export default function Box(props){
    const style = {
        backgroundColor: `#${props.boxInfo.color}`, 
        borderColor: `#${props.boxInfo.borderColor}`
    }

    return (
        <div className="Box-body" style={style}>

        </div>
    )
}