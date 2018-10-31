import React from 'react';
import Time from 'time-ago';
import Stars from 'react-stars';

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
    this.convertTime = this.convertTime.bind(this);
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
    }, () => {
    this.props.submitReply(this.props.review._id, this.state.replyBody)
    })
  }

  handleInputChange(e){
    e.preventDefault()
    this.setState({
      replyBody: e.target.value
    })
  }

  convertTime(reviewDate){
    if (reviewDate.includes('hours')){
      let replaced = reviewDate.replace('hours ago', 'H')
      replaced = replaced.split(' ').join('')
      return replaced;
    }
    else if (reviewDate.includes('days')){
      let replaced = reviewDate.replace('days ago', 'D')
      replaced = replaced.split(' ').join('')
      return replaced;
    }
    else if (reviewDate.includes('weeks')){
      let replaced = reviewDate.replace('weeks ago', 'W')
      replaced = replaced.split(' ').join('')
      return replaced;
    }
    else if (reviewDate.includes('months')){
      let replaced = reviewDate.replace('months ago', 'M')
      replaced = replaced.split(' ').join('')
      return replaced;
    }
    else {
      return 'error';
    }
  }

  updatesLikes(){
    this.setState({
      likes: this.props.review.likes += 1
    }, () => {
      this.props.updateLike(this.state.likes, this.props.review._id)
    })
  }

  render(){
    const reviewBox = {
      width: '1000px',
      height: 'auto',
      border: 'solid',
      borderColor: '#D3D3D3',
      borderWidth: 'thin',
      borderRadius: '3px',
      float: 'left',
      fontSize: '16px',
      backgroundColor: 'white',
      boxShadow: '1px 1px #D3D3D3',
      // position: 'relative',
    }

    const avatarImage = {
      height: '35px',
      width: '35px',
      borderRadius: '50%',
      border: 'solid',
      borderWidth: 'thin',
      borderColor: 'white',
      position: 'relative',
      float: 'left',
      marginTop: '20px',
      marginLeft: '20px',
    }

    const smallBox = {
      width: '5px',
      height: 'auto',
      border: 'solid',
      borderColor: '#D3D3D3',
      borderWidth: 'thin',
      borderRadius: '3px',
      fontSize: '12px',
      color: '#D3D3D3',
      backgroundColor: 'white',
      marginLeft:'10px',
      position: 'relative',

    }
  
    const userAndEndorsmentsPlacement = {
      fontSize: '14px', 
      float: 'left',
      postition: 'relative', 
      marginTop: '20px',
      paddingLeft: '10px',
    }

    const reviewInfo = {
      float: 'left',
      marginLeft: '65px',
      marginRight: '10px',
      // paddingBottom: '15px',
      color: '#5b6a69',
      paddingTop: '40px',
    }

    const timePlacement = {
      float: 'right',
      marginRight: '10px',
      fontSize: '12px',
      color: '#5b6a69',
      position: 'relative',
      marginTop: '20px',
    }

    const imageStyle = {
      height: '15px',
      width: '15px',
      backgroundColor: 'white',
      color: '#5b6a69',
    }

    const buttonStyles = {
      textAlign: 'left',
      background: 'none',
      border: 'none',
      padding: '0',
      marginBottom: '10px',
      marginRight: '20px',
      fontSize: '14px',
      color: '#5b6a69',
      float: 'left',
    }
    const submitButtonStyle = {
      textAlign: 'left',
      background: '#14b6ad',
      paddingTop: '6px',
      paddingBottom: '6px',
      paddingLeft: '17px',
      paddingRight: '17px',
      borderRadius: '3px',
      marginBottom: '10px',
      marginRight: '20px',
      fontSize: '14px',
      color: 'white',
      float: 'left',
    }
    const cancelButtonStyle = {
      textAlign: 'left',
      background: 'none',
      padding: '10px',
      border: 'none',
      marginBottom: '10px',
      marginRight: '20px',
      fontSize: '14px',
      color: '#5b6a69',
      float: 'left',
    }
    
    const dotStyle = {
      textAlign: 'left',
      background: 'none',
      border: 'none',
      padding: '0',
      marginRight: '20px',
      fontSize: '26px',
      color: '#5b6a69',
      float: 'left',
      position: 'relative',
      bottom: '12px',
    }

    const addFriendStyle = {
      // paddingLeft: '5px',
      height: 'auto',
      width: '35px',
      position: 'relative',
      // bottom: '20px',
      // display: 'inline',
      // marginLeft: '155px',
      top: '8px',
      float: 'left',
    }

    const starsStyle = {
      float: 'left',
      // marginLeft: '50px',
      // marginRight: '10px',
      position: 'relative',
      top: '50px',
      right: '170px',
    }
    
    const smallAvatarImageReplyTo = {
      marginTop: '10px',
      marginLeft: '10px',
      height: '16px',
      width: '16px',
      border: 'solid',
      borderWidth: 'thin',
      borderColor: 'white',
      borderRadius: '50%',
      position: 'relative',
    }

    const smallDotsBoxStyle = {
      border: 'solid',
      borderColor: '#D3D3D3',
      borderWidth: 'thin',
      borderRadius: '3px',
      fontSize: '12px',
      color: '#D3D3D3',
      backgroundColor: 'white',
      paddingTop: '7px',
      paddingLeft: '15px',
      float: 'left',
      position: 'relative',
      bottom: '40px',
    }

    return (
      <div style={reviewBox}>
        <div>
          <div>
            <img style={avatarImage} src={this.props.review.avatarUrl}></img>
            <div className='username' style={userAndEndorsmentsPlacement}>
              <b>{this.props.review.username}</b>
              <span style={smallBox}>{this.props.review.userEndorsements}</span>
              </div>
              <span style={timePlacement}>{this.convertTime(Time.ago(this.props.review.reviewDate))}</span>
              <img style={addFriendStyle} src={addFriendImage}></img>
          </div>
          <div style={starsStyle} >
          <Stars 
          count={5} 
          value={this.props.review.stars} 
          color1='#D3D3D3' color2='#14b6ad' 
          border='1px' 
          size={30} 
          edit={false}
          />
          </div>
          <div style={reviewInfo}>
            {this.props.review.review}
          </div>
          <div style={reviewInfo}>
            <button onClick={this.updatesLikes} style={buttonStyles}><img style={imageStyle} src={likeButtonImage}></img>{this.state.likes}</button>
            <button onClick={this.showReplyBox} style={buttonStyles}><img style={imageStyle} src={replybuttonImage}></img>REPLY</button>
            <button style={buttonStyles}><img style={imageStyle} src={shareButtonImage}></img>SHARE</button>
            <button onClick={this.showDotsBox} style={dotStyle}>...</button>{
              this.state.showDots ? (
                <span style={smallDotsBoxStyle}>
                  <button style={buttonStyles}>LINK</button>
                  <br/>
                  <button style={buttonStyles}>FLAG</button>
                </span>
              ) : (
                null
              )
            }
            </div>
            {
              this.state.showReplies ? (
                <div style={reviewBox}>
                  <div style={{marginLeft: '50px', float:'left', width:'90%'}}>
                    You are replying to <img style={smallAvatarImageReplyTo} src={this.props.review.avatarUrl}></img><b>{this.props.review.username}</b>.
                    <br/>
                    <form>
                      <input style={{fontSize: '14px', fontStyle: 'italic', 'width': '100%', height: '60px'}} type="text" value={this.state.replyBody} onChange={this.handleInputChange} placeholder='Add a reply...'/>
                    </form>
                    <br/>
                    <button onClick={this.handleFormSubmit} style={submitButtonStyle}>SUBMIT</button>
                    <button onClick={this.showReplyBox} style={cancelButtonStyle}>CANCEL</button>
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