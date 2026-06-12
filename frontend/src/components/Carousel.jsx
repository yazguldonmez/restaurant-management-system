import axios from "axios";
import { useState, useEffect } from "react";

export default function Carousel() {

    const [slider, setSlider] = useState([]);

    const baseUrl = import.meta.env.VITE_API_BASE_URL

    const fetchData = async () => {
        const response = await axios.get(`${baseUrl}/api/slider`);
        setSlider(response.data.data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <section className="slider_section">
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {slider.map((slider, index) => (
                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={slider.id}>
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6 ">
                                        <div className="detail-box">
                                            <h1>
                                                {slider.title}
                                            </h1>
                                            <p>
                                                {slider.content}
                                            </p>
                                            <div className="btn-box">
                                                <a href={slider.link} className="btn1">
                                                    {slider.button_text}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="container">
                    <ol className="carousel-indicators">
                        {slider.map((slider, index) => (
                            <li data-target="#customCarousel1" className={index === 0 ? "active" : ""} data-slide-to={index} key={slider.id}></li>
                        ))}
                        {/* <li data-target="#customCarousel1" data-slide-to="1"></li>
                            <li data-target="#customCarousel1" data-slide-to="2"></li> */}
                    </ol>
                </div>
            </div>
        </section>
    )
}