import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './components/Reviews.jsx';
import Search from './components/Search.jsx';
import DropDown from './components/DropDown.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1, // built out solely for testing, need to get product id from productInfo once we connect our work.
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
    axios.get('/buy/:productname/reviews', {params: this.state.productId})
    .then(({data}) => {
      console.log(data)
      this.setState({
        reviews : data
      })
    })
    .catch(err => {console.log(err, ' error in get Reviews')})
  }

  postReply(id, reply){
    axios.post('/buy/:productname/replies', {
      id: id,
      reply: reply
    })
    .then(replies => {
      console.log(replies, ' replies in postReply')
    })
  }

  searchTerm(term){
    axios.post('/buy/:productname/reviews/search', {
      term: term,
      id: this.state.productId
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
    axios.post('/buy/:productname/reviews/sort', {
      id: this.state.productId,
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
    axios.put('/buy/:productname/reviews', {
      likes: likes,
      id: this.state.productId,
      userId: userId,
    })
    .then(success => {console.log('success!')})
    .catch(err => { console.log(err, ' err in updateLike')})

  }

  render () {
    return (
      <div>
        <h1>Reviews Tab</h1>
        <div style={{display: 'inline'}}>
          <DropDown sortBySelect={this.sortBySelect}/>
          <Search onSearch={this.searchTerm}/> 
        </div>
        <Reviews reviews={this.state.reviews} updateLike={this.updateLike}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));