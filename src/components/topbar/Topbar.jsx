import {Search,Person,Chat,Notifications} from "@mui/icons-material"
import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="TopbarContainer">
        <div className="TopbarLeft">
          <Link to={'/'} style={{textDecoration : "none"}}>
            <span className="logo">Ayila</span>
          </Link>
        </div>
        <div className="TopbarCenter">
          <div className="SearchBar">
            <Search className="SearchIcon"/>
            <input placeholder="Seach for a Friend, Post or Video..." type="text" className="SearchBar" />
          </div>
        </div>
        <div className="TopbarRight">
          <div className="TopbarLinks">
          <Link to={'/'} style={{textDecoration : "none", color:'white'}}>
            <div className="TopbarLink">Homepage</div>
          </Link>
            <div className="TopbarLink">Timeline</div>
          </div>
          <div className="TopbarIcons">
            <div className="TopbarIcon">
              <Person/>
              <span className="TopbarIconBadge">3</span>
            </div>
            <div className="TopbarIcon">
              <Chat/>
              <span className="TopbarIconBadge">3</span>
            </div>
            <div className="TopbarIcon">
              <Notifications/>
              <span className="TopbarIconBadge">1</span>
            </div>
          </div>
          <Link to={'/profile/Aleem'}>
            <img src={PF + "me.jpeg"} alt="Profile" className="TopbarImg" />
          </Link>
        </div>
    </div>
  )
}
