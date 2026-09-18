import heroBg from '~/assets/images/hero-bg.jpg'
import Carousel from '~/components/Carousel'
import Header from '~/components/Header'
import OfferBox from '~/components/OfferBox'
import About from '~/pages/About'
import Menu from '~/pages/Menu'
import Reservation from '~/pages/Reservation'

export default function Home() {
    return (
        <>
            <div className="hero_area">
                <div className="bg-box">
                    <img src={heroBg} alt="hero image" />
                </div>

                {/* <!-- end     header section --> */}

                {/* <!-- slider section --> */}

                <Carousel />
            </div>
            {/* </div> */}


            {/* <!-- end slider section --> */}

            {/* <!-- offer section --> */}
            <OfferBox />
            {/* <!-- end offer section --> */}

            {/* <!-- food section --> */}

            <Menu />
            {/* <!-- end food section --> */}

            {/* <!-- about section --> */}
            <About />
            {/* <!-- end about section --> */}

            <Reservation />

            {/* <!-- footer section --> */}

            {/* <Footer /> */}
            {/* <!-- end footer section --> */}

        </>
    )
}