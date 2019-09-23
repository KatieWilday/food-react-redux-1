import React from 'react'
import '../App.css';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      r_name:'',
      review: '',
      reviews: [],
      rating: 2
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newReview = {name: this.state.name, r_name: this.state.r_name, review: this.state.review, rating: this.state.rating}
    const updatedReviews = this.state.reviews.concat(newReview)
    this.setState({ reviews: updatedReviews })

    let form = document.getElementById('review-form-id')
     form.reset()
  }

  render() {
    return (
      <div>
        <form id="review-form-id" onSubmit={this.handleSubmit}>
            <label>

              <h2>Have an opinion? Let us know!</h2><br></br>
                <strong>Name:</strong><br></br>
                <input type="text" name="name" className='review-form' placeholder="Name..." onChange={this.handleChange} /><br></br>
                <strong>Restaurant:</strong><br></br>
                <input type="text" name="restaurant" className='review-form' placeholder="Joe's Crabshack..." onChange={this.handleChange} /><br></br>
                <strong>Review:</strong><br></br>
                <input type="" name="review" className='review-form' placeholder="Review..." onChange={this.handleChange} /><br></br>
                <strong>Rating(1-5):</strong><br></br>
                <input
                  name="ratingNumber"
                  type="number"
                  value={this.state.ratingNumber}
                  className='review-form-rating'
                  placeholder="2..."
                  onChange={this.handleChange} />
              </label><br></br>
              <input type="submit" className="review-submit" value="Submit" />
        </form>
        {this.state.reviews.map(review => (
            <p>{review.name} - {review.review}</p>
            )
          )
        }
        </div>
    );
  }
}

export default ReviewForm;
