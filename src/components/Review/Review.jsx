import PropTypes from 'prop-types';
import './Review.scss';

const Review = (props) => {
    const {name, headline, review, image} = props;

    const displayStars = () => {
        let starsArray = [];
        for(let i = 0; i < 5; i++) {
            starsArray.push(<i key={i} className='fa-solid fa-star'></i>)
        }

        return starsArray;
    }
    return (
        <div className='review-card'>
            <div className='review-heading'>
                <div className='review-image'>
                    <img src={image} alt={`${name} review photo`} />
                </div>
                <div className='review-info'>
                    <p className='review-headline'>"{headline}"</p>
                    <div className='review-stars'>
                        {displayStars()}
                    </div>
                </div>
            </div>
            <div>
                
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
    review: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default Review;
