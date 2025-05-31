import './viewControl.css';
import { useState } from "react"

function ViewControl() {
    const [view, setView] = useState(true);

    return (
        <div className="view-control" onClick={()=>{setView((v)=>(!v))}}>
            {view? <p>+</p> : <p>-</p>}
        </div>
    )
}

export default ViewControl;