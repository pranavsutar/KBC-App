import './Start.css'
export default function Start({setUserName, setQueNum}){
    const enterEvent = (e) => {
        if (e.key === "Enter") {
            setUserName(document.querySelector(".startinput").value);
            setQueNum(1);
        }
    }
    return (
        <div className="start">
            <input type="name" placeholder="Enter your name" className="startinput" onKeyDown={enterEvent} />
            <buton className="startbtn" onClick={() => {
                setUserName(document.querySelector(".startinput").value);
                setQueNum(1);
              }}
            //   The same action should be performed when the user presses the Enter key.
            
              >
                Start
            </buton>
            
        </div>
    )
}