import React from 'react';
import Time from 'time-ago';
import Stars from 'react-stars';

const likeButtonImage = 'http://chittagongit.com//images/like-png-icon/like-png-icon-8.jpg'
const replybuttonImage = 'https://www.shareicon.net/data/128x128/2015/09/02/94534_mail_384x512.png'
const shareButtonImage = 'https://www1.lifestylecommunities.com/lc3/social_icons/share_icon.png'

class Review extends React.Component{
  constructor(props){
    super(props)
    this.convertTime = this.convertTime.bind(this);
  }

  convertTime(reviewDate){
    if (reviewDate.includes('hours')){
      let replaced = reviewDate.replace('hours ago', 'H')
      replaced = replaced.split(' ').join('')
      return replaced;
    }
    if (reviewDate.includes('days')){
      let replaced = reviewDate.replace('days ago', 'D')
      replaced = replaced.split(' ').join('')
      return replaced;
    }
    if (reviewDate.includes('weeks')){
      let replaced = reviewDate.replace('weeks ago', 'W')
      replaced = replaced.split(' ').join('')
      return replaced;
    }
    if (reviewDate.includes('months')){
      let replaced = reviewDate.replace('months ago', 'M')
      replaced = replaced.split(' ').join('')
      return replaced;
    }
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
      paddingTop: '20px',
      paddingLeft: '20px',
      height: '32px',
      width: '32px',
      border: 'solid',
      borderWidth: 'thin',
      borderColor: 'white',
      borderRadius: '100px',
      position: 'relative',
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
      marginLeft:'3px',
      position: 'relative',

    }
  
    const userAndEndorsmentsPlacement = {
      fontSize: '14px', 
      float: 'right',
      postition: 'relative', 
      marginTop: '20px',
      marginRight: '810px',
    }

    const reviewInfo = {
      float: 'left',
      marginLeft: '65px',
      marginRight: '10px',
      paddingBottom: '15px',
      color: '#5b6a69',
    }

    const timePlacement = {
      marginLeft: '775px',
      fontSize: '12px',
      color: 'gray',
      position: 'absolute',
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

    return (
      <div style={reviewBox}>
        <div>
          <div>
            <img style={avatarImage} src={this.props.review.avatarUrl}></img>
            <div className='username' style={userAndEndorsmentsPlacement}>
              <b>{this.props.review.username}</b>
              <span style={smallBox}>{this.props.review.userEndorsements}</span>
              <span style={timePlacement}>{this.convertTime(Time.ago(this.props.review.reviewDate))}</span>
              </div>
          </div>
          <div style={{marginLeft: '60px', marginBottom: '5px'}} ><Stars count={5} value={this.props.review.stars} color1='#D3D3D3' color2='#14b6ad' border='1px' size={30} edit={false}/></div>
          <div style={reviewInfo}>
            {this.props.review.review}
          </div>
          <div style={reviewInfo}>
            <button style={buttonStyles}><img style={imageStyle} src={likeButtonImage}></img> {this.props.review.likes}</button>
            <button style={buttonStyles}><img style={imageStyle} src={replybuttonImage}></img>REPLY</button>
            <button style={buttonStyles}><img style={imageStyle} src={shareButtonImage}></img>SHARE</button>
            <button style={dotStyle}>...</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Review;