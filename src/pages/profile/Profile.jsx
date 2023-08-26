import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router'

export default function Profile() {
  const [user, setUser] = useState({})
  const { username } = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get('/users?username=' + username)
      setUser(res.data)
      console.log()
    };
    fetchUser();
  }, [username]);
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src={user.coverPicture || "https://picsum.photos/800"} alt="" className="profileCoverImg" />
                <img src="\Assets\me.jpeg" alt="" className="profileUserImg" />    
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <div className="profileInfoDesc">{user.desc}</div>
              </div>
            </div>
            <div className="profileRightBottom">

            <Feed username={username}/>
            <Rightbar user={user}/>

            </div>
        </div>
      </div>
    </>
  )
}
