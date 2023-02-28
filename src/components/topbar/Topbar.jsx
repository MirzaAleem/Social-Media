import {Search,Person,Chat,Notifications} from "@mui/icons-material"
import "./topbar.css"
export default function Topbar() {
  return (
    <div className="TopbarContainer">
        <div className="TopbarLeft">
            <span className="logo">Ayila</span>
        </div>
        <div className="TopbarCenter">
          <div className="SearchBar">
            <Search className="SearchIcon"/>
            <input placeholder="Seach for a Friend, Post or Video..." type="text" className="SearchBar" />
          </div>
        </div>
        <div className="TopbarRight">
          <div className="TopbarLinks">
            <div className="TopbarLink">Homepage</div>
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
          <img src="\Assets\me.jpeg" alt="Profile" className="TopbarImg" />
        </div>
    </div>
  )
}
