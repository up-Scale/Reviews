import React from 'react';
import Review from './Review.jsx';

const Reviews = (props) => (
  <div>
    <h4> Reviews </h4>
    There are { props.reviews.length } reviews.
    { props.reviews.map(review => <Review review={review}/>)}
  </div>
)

export default Reviews;