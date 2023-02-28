import './closefriends.css'

export default function CloseFriends({user}) {
  return (
    <li className="sidebarFriend">
      <img src={user.profilePicture} alt="Friend Profile" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>  
    </li>
  )
}
