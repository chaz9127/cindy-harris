import Marquee from "react-fast-marquee";
import './Home.scss'
import Review from "../../components/Review/Review";

const Home = () => {
    return (
        <>
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
            <div className="reviews">
                <Review
                    name='Chickie Colleen'
                    stars={3}
                    headline='Pleasantly Surprised'
                    review='I’m not one to stray away from my usual comfort authors but I gave this book a shot and I’m so glad I did! I literally could not put this book down and I’m really looking forward to the next one! This story is captivating and beautifully written. The characters, especially Elinore, were incredibly interesting and complex. I definitely recommend this book to anyone who is thinking about picking it up!'
                />
            </div>    
        </>
    )
}

export default Home;