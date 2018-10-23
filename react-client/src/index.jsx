import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './components/Reviews.jsx';
import Search from './components/Search.jsx';

const MAGNIFYING_GLASS_URL = 'https://image.flaticon.com/icons/svg/181/181561.svg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      reviews: [],
      replies: null,
      makeReply: false,
      sortBy: 'Newest',
      term: '',
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  getReviews(){
    axios.get('/reviews')
    .then(reviews => {
      console.log(reviews, ' reviews in getReviews')
      this.setState({
        reviews : reviews
      })
    })
    .catch(err => {console.log(err, ' error in get Reviews')})
  }

  postReply(id, reply){
    axios.post('replies', {
      id: id,
      reply: reply
    })
    .then(replies => {
      console.log(replies, ' replies in postReply')
      this.setState({
        replies: replies
      })
    })
  }

  render () {
    const magnifyingGlassStyle = {
    position: 'absolute',
    height: '10px', 
    width: '10px',
    }

    return (<div>
      <h1>Reviews Tab</h1>
      <Search/>
      <Reviews reviews={this.state.reviews}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));