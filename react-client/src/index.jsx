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
      replies: null,
      makeReply: false,
    }
    this.getReviews = this.getReviews.bind(this);
    this.postReply = this.postReply.bind(this);
  }

  componentDidMount() {
    this.getReviews()
  }

  getReviews(){
    axios.get('/buy/:productname/reviews', {params: this.state.productId})
    .then(({data}) => {
      console.log(data, ' reviews in getReviews');
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
      this.setState({
        replies: replies
      })
    })
  }

  render () {

    return (<div>
      <h1>Reviews Tab</h1>
      <div style={{display: 'inline'}}>
        <DropDown/>
        <Search/> 
      </div>
      <Reviews reviews={this.state.reviews}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));