import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import './share.css'

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="\Assets\me.jpeg" alt="Profile" className="shareProfileImg" />
                <input type="text" placeholder="What's in your mind Aleem !" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='Tomato' className='shareIcon'/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blueviolet' className='shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='chocolate' className='shareIcon'/>
                        <span className="shareOptionText">Locations</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='Gold' className='shareIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>                    
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
