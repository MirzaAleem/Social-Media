import './sidebar.css'
import { RssFeed,Chat,PlayCircle,Group,Bookmark,QuestionAnswer,WorkOutline,Event,School } from '@mui/icons-material'
import { Users } from "../../DummyData";
import CloseFriends from '../closeFriends/CloseFriends';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarListIcon'/><span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarListIcon'/><span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className='sidebarListIcon'/><span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarListIcon'/><span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarListIcon'/><span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <QuestionAnswer className='sidebarListIcon'/><span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarListIcon'/><span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarListIcon'/><span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarListIcon'/><span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u)=>(
            <CloseFriends key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
