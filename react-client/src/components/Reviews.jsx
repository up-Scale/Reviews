import React from 'react';
import Review from './Review.jsx';

const Reviews = (props) => {
  const reviewInfo = {
    // float: 'left',
    width: '800px',
    marginLeft: '20px',
    marginRight: '20px',
    paddingBottom: '15px',
    color: '#5b6a69',
    // position: 'relative',
  }

  return (
    <div className='container' style={reviewInfo}>
      <h4> Reviews </h4>
      There are { props.reviews.length } reviews.
      <div>
      { props.reviews.map(review => <Review key={review._id} review={review} updateLike={props.updateLike} submitReply={props.submitReply}/>)}
      </div>
    </div>
  )
}
export default Reviews;