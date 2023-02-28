import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Profile() {
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src="https://picsum.photos/800" alt="" className="profileCoverImg" />
                <img src="\Assets\me.jpeg" alt="" className="profileUserImg" />    
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">Mirza Aleem Abbas</h4>
                <div className="profileInfoDesc">Founder of Ayila</div>
              </div>
            </div>
            <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
            </div>
        </div>
      </div>
    </>
  )
}
