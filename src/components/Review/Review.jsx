import PropTypes from 'prop-types';
import './Review.scss';

const Review = (props) => {
    const {name, headline, stars, review} = props;
    const starsArray = new Array(stars);
    const emptyStarsArray = new Array(5-stars);
    return (
        <div className='review-card'>
            <div>
                <span className='review-name'>
                    {name}
                </span>
                -
                <strong>{headline}</strong>
            </div>
            <div>
                {starsArray.map((_, idx) => {
                    return <i key={idx} className='fa-solid fa-star'></i>
                })}
                {emptyStarsArray.map((_, idx) => {
                    return <i key={idx} className='fa-regular fa-star'></i>
                })}
            </div>
            <div className="review-description">
                {review}
            </div>
        </div>
    );
};

Review.propTypes = {
    name: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
  };

export default Review;
