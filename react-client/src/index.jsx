import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './components/Reviews.jsx';
import Search from './components/Search.jsx';
import DropDown from './components/DropDown.jsx';

class ReviewsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: 'flashlight', // built out solely for testing, need to get product id from productInfo once we connect our work.
      reviews: [],
      makeReply: false,
    }
    this.getReviews = this.getReviews.bind(this);
    this.postReply = this.postReply.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
    this.sortBySelect = this.sortBySelect.bind(this);
    this.updateLike = this.updateLike.bind(this);
  }

  componentDidMount() {
    this.getReviews()
  }

  getReviews(){
    axios.get(`http://localhost:3002/buy/${this.state.productName}/reviews`, {params: this.state.productName})
    .then(({data}) => {
      this.setState({
        reviews : data
      })
    })
    .catch(err => {console.log(err, ' error in get Reviews')})
  }

  postReply(userId, reply){
    axios.post(`http://localhost:3002/buy/${this.state.productName}/reviews/replies`, {
      userId: userId,
      reply: reply,
      name : this.state.productName
    })
    .then(replies => {
      console.log(replies, ' replies in postReply')
    })
  }

  searchTerm(term){
    axios.post(`http://localhost:3002/buy/${this.state.productName}/reviews/search`, {
      term: term,
      name: this.state.productName
    })
    .then(({data}) => {
      // console.log(data, ' results in searchTerm')
      this.setState({
        reviews: data
      })
    })
    .catch(err => {
      console.log(err, ' this is error in searchTerm')
    })
  }

  sortBySelect(option){
    axios.post(`http://localhost:3002/buy/${this.state.productName}/reviews/sort`, {
      name: this.state.productName,
      option: option,
    })
    .then(({data}) => {
      this.setState({
        reviews: data
      })
    })
    .catch(err => {
      console.log(err, ' this is error in sortBySelect')
    })
  }

  updateLike(likes, userId){
    axios.put(`http://localhost:3002/buy/${this.state.productName}/reviews`, {
      likes: likes,
      name: this.state.productName,
      userId: userId,
    })
    .then(success => {console.log('success!')})
    .catch(err => { console.log(err, ' err in updateLike')})

  }

  render () {
    return (
      <div>
        <div style={{display: 'inline'}}>
          <DropDown sortBySelect={this.sortBySelect}/>
          <Search onSearch={this.searchTerm}/> 
        </div>
        <Reviews reviews={this.state.reviews} updateLike={this.updateLike} submitReply={this.postReply}/>
      </div>
    )
  }
}

export default ReviewsTab;
// ReactDOM.render(<App />, document.getElementById('app'));
window.Reviews = ReviewsTab;