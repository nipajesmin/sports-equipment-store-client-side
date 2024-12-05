import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles (updated path)


import header from '../../public/header.jpg';
import header2 from '../../public/header2.jpg';
import header3 from '../../public/header3.jpg';

const Header = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="w-11/12 mx-auto">
                <div className="bg-gray-100 text-gray-900 p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto text-center mt-5">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Welcome to EquiSports
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed mb-6">
                        Gear up for excellence! At EquiSports, we offer top-quality sports equipment and apparel to elevate your game. Whether you’re a professional athlete, a passionate amateur, or just getting started, we’ve got everything you need to play with confidence and style.
                    </p>
                    <h5 className="text-lg md:text-2xl font-semibold text-gray-700">
                        Equip Yourself for Victory. Shop Now.
                    </h5>
                </div>
            </div>


            <div className="pt-5">
                {/* Swiper Slider */}
                <Swiper
                    spaceBetween={50} // Space between slides
                    slidesPerView={1} // Number of slides to show at once
                    loop={true} // Infinite loop
                    autoplay={{ delay: 3000 }} // Autoplay with a delay of 3 seconds
                    pagination={{ clickable: true }} // Pagination bullets
                    navigation={{ clickable: true }} // Navigation arrows
                    className="swiper-container"
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <img
                            src={header}
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                            alt="Slide 1"
                        />
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <img
                            src={header2}
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                            alt="Slide 2"
                        />
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <img
                            src={header3}
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                            alt="Slide 3"
                        />
                    </SwiperSlide>

                    {/* Slide 4 (You can add more slides if needed) */}
                    <SwiperSlide>
                        <img
                            src={header2}
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                            alt="Slide 4"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Header;