import { useEffect, useState } from "react"
import api from '~/axios'

export default function About() {

    const [about, setAbout] = useState({})

    const imageUrl = import.meta.env.VITE_IMAGE_URL

    const fetchData = async () => {
        const response = await api.get(`/api/about`);
        setAbout(response.data.data)
    }
    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <section className="about_section layout_padding">
                <div className="container  ">

                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="img-box">
                                {about && (
                                    <img src={`${imageUrl + "/" + about.image}`} alt="About image" />
                                )}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        {about.title}
                                    </h2>
                                </div>
                                <p>
                                    {about.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}