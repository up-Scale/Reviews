import React from 'react';
import Time from 'time-ago';
import Stars from 'react-stars';
import convertTime from './util.js';
import styles from './styles.js';

const likeButtonImage = 'http://chittagongit.com//images/like-png-icon/like-png-icon-8.jpg'
const replybuttonImage = 'https://www.shareicon.net/data/128x128/2015/09/02/94534_mail_384x512.png'
const shareButtonImage = 'https://www1.lifestylecommunities.com/lc3/social_icons/share_icon.png'
const addFriendImage = 'https://comps.canstockphoto.com.mx/agregar-blanco-usuario-plano-de-vectores-eps_csp49802637.jpg'


class Review extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      likes: null,
      showReplies: false,
      replies: [],
      replyBody: '',
      showDots: false,
    }
    this.updatesLikes = this.updatesLikes.bind(this);
    this.showReplyBox = this.showReplyBox.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.showDotsBox = this.showDotsBox.bind(this);
  }

  componentDidMount(){
    this.setState({
      likes: this.props.review.likes,
      replies: this.props.review.replies
    })
  }

  showReplyBox(){
    this.setState({
      showReplies: !this.state.showReplies
    })
  }

  showDotsBox(){
    this.setState({
      showDots: !this.state.showDots
    })
  }

  handleFormSubmit(e){
    e.preventDefault()
    this.setState({
      replies: this.state.replies.push(this.state.replyBody)
    },
    this.props.submitReply(this.props.review._id, this.state.replyBody)
    )
  }

  handleInputChange(e){
    e.preventDefault()
    this.setState({
      replyBody: e.target.value
    })
  }

  updatesLikes(){
    this.setState({
      likes: this.props.review.likes += 1
    },
      this.props.updateLike(this.state.likes, this.props.review._id)
    )
  }

  render(){
  console.log("Individual REview", this.props.review)
    return (
      <div style={styles.reviewBox}>
        <div>
          <div>
            <img style={styles.avatarImage} src={this.props.review.avatarURL}></img>
            <div className='username' style={styles.userAndEndorsmentsPlacement}>
              <b>{this.props.review.username}</b>
              <span style={styles.smallBox}>{this.props.review.userEndorsements}</span>
              </div>
              <span style={styles.timePlacement}>{convertTime(Time.ago(this.props.review.reviewDate))}</span>
              <img style={styles.addFriendStyle} src={addFriendImage}></img>
          </div>
          <div style={styles.starsStyle} >
          <Stars 
          count={5} 
          value={this.props.review.stars} 
          color1='#D3D3D3' color2='#14b6ad' 
          border='1px' 
          size={30} 
          edit={false}
          />
          </div>
          <div style={styles.reviewInfo}>
            {this.props.review.review}
          </div>
          <div style={styles.reviewInfo}>
            <button onClick={this.updatesLikes} style={styles.buttonStyles}><img style={styles.imageStyle} src={likeButtonImage}></img>{this.state.likes}</button>
            <button onClick={this.showReplyBox} style={styles.buttonStyles}><img style={styles.imageStyle} src={replybuttonImage}></img>REPLY</button>
            <button style={styles.buttonStyles}><img style={styles.imageStyle} src={shareButtonImage}></img>SHARE</button>
            <button onClick={this.showDotsBox} style={styles.dotStyle}>...</button>{
              this.state.showDots ? (
                <span style={styles.smallDotsBoxStyle}>
                  <button style={styles.buttonStyles}>LINK</button>
                  <br/>
                  <button style={styles.buttonStyles}>FLAG</button>
                </span>
              ) : (
                null
              )
            }
            </div>
            {
              this.state.showReplies ? (
                <div style={styles.reviewBox}>
                  <div style={{marginLeft: '50px', float:'left', width:'90%'}}>
                    You are replying to <img style={styles.smallAvatarImageReplyTo} src={this.props.review.avatarUrl}></img><b>{this.props.review.username}</b>.
                    <br/>
                    <form>
                      <input style={{fontSize: '14px', fontStyle: 'italic', 'width': '100%', height: '60px'}} type="text" value={this.state.replyBody} onChange={this.handleInputChange} placeholder='Add a reply...'/>
                    </form>
                    <br/>
                    <button onClick={this.handleFormSubmit} style={styles.submitButtonStyle}>SUBMIT</button>
                    <button onClick={this.showReplyBox} style={styles.cancelButtonStyle}>CANCEL</button>
                  </div>
                </div>
              ) : (
                null
              )
            }
        </div>
      </div>
    )
  }
}
export default Review;