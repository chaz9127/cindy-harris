import Marquee from "react-fast-marquee";
import './Home.scss'
import Review from "../../components/Review/Review";
import ReviewsData from '../../components/Review/ReviewsData';

const displayReviews = () => {
    return ReviewsData.map((reviewCard,idx) => {
        const {name, headline, review, image} = reviewCard;
        return (
            <Review
                key={idx}
                name={name}
                headline={headline}
                review={review}
                image={image}
            />
        )
    })
}

const Home = () => {
    return (
        <>
            <div className="test">
                <div className='featured'>
                    <div className='featured-detail details'>
                        <span className='detail-header'>New Release</span>
                        <h2 className="title">When Birds Fly</h2>
                        <p className="description">
                            Follow Elinore’s journey as her mind fragments into multiple personalities after she endures severe trauma, leading her through a labyrinth of emotions and secrets.
                            <br />
                            <br />
                            Indeed, one of Elinore&apos;s personas becomes deadly when provoked and doesn&apos;t hesitate to use deadly force on those who test her….
                            <br />
                            <br />
                            Join us in unraveling the mystery and uncovering the truth behind Elinore’s extraordinary tale of humor, pleasure, hate, blackmail, romance, heartache, and vengeance.
                        </p>
                        <button>
                            <i className="fa-brands fa-amazon"></i>
                            <span>
                                Buy on Amazon
                            </span>
                        </button>
                    </div>
                    <div className='featured-detail book-cover'>
                        <img src="https://m.media-amazon.com/images/I/41YUDEyz9vL._SY445_SX342_.jpg" alt="When The Bird Flys book cover"/>
                    </div>
                </div>
            </div>
            <div className="reviews">
                <Marquee pauseOnHover={true}>
                    {displayReviews()}
                </Marquee>
            </div>    
        </>
    )
}

export default Home;