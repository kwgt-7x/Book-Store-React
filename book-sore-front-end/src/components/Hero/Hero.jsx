import "./Hero.css";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAllSliders } from "../../features/getAllSliderHero/getSlidersHeroSlice";
import HeroSkeleton from "../SkeletonLoading/HeroSkeleton/HeroSkeleton";
import Error from "../Error/Error";
import { getImageUrl } from "../../api";



function Hero() {

    const dispatch = useDispatch()
    const { data, ispayload, error } = useSelector((state) => state.siders)
    {
        console.log(data)
    }

    useEffect(() => {

        dispatch(getAllSliders())

    }, [dispatch])

    if (ispayload) {

        return <HeroSkeleton />;

    }

    if(error) {
        return <Error/>
    }

    return (

        <section className="hero" data-aos="fade">

            <button className="hero-prev">
                <FaArrowLeft />
            </button>

            <button className="hero-next">
                <FaArrowRight />
            </button>

            <Swiper

                modules={[Navigation, Autoplay]}

                slidesPerView={1}

                loop={true}

                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}

                navigation={{
                    nextEl: ".hero-next",
                    prevEl: ".hero-prev",
                }}

            >

                {
                    data.map(item => (

                        <SwiperSlide key={item.id}>

                            <div className="hero-slide">

                                <div className="hero-content">

                                    <span className="hero-subtitle">

                                        {item.subtitle}

                                    </span>

                                    <h1>

                                        {item.title}

                                    </h1>

                                    <p>

                                        {item.description}

                                    </p>

                                    <div className="hero-buttons">

                                        <Link className="btn-theme btn-theme-primary">

                                            {
                                                item.btn_1
                                            }

                                        </Link>

                                        <Link className="btn-theme btn-theme-secondary">

                                            {
                                                item.btn_2
                                            }

                                        </Link>

                                    </div>

                                </div>

                                <div className="hero-image">

                                    <img src={`${getImageUrl(item.img_hero)}`} alt="" />

                                </div>

                            </div>

                        </SwiperSlide>

                    ))
                }

            </Swiper>

        </section>

    );

}

export default Hero;