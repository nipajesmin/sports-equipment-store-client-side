import React from 'react';
import pic1 from '../../public/pic1.png'
import pic3 from '../../public/pic3.png'
import pic4 from '../../public/pic4.png'
import pic2 from '../../public/pic2.png'
import pic5 from '../../public/pic5.png'
import pic6 from '../../public/pic6.png'

const Reviews = () => {
    return (
        <section className="w-11/12 mx-auto mt-5 py-16">
            <div className="container mx-auto">
                {/* Header */}
                <h2 className="text-4xl font-extrabold text-center text-black mb-10">
                    What Our Customers Say
                </h2>
                <p className="text-center text-gray-600 text-lg mb-10">
                    Here’s what our customers have to say about their experience with our sports equipment.
                </p>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Review 1 */}
                    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                        <img
                            src={pic1}
                            alt="Sharmin"
                            className="h-20 w-20 rounded-full mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Sharmin</h3>
                        <p className="text-gray-600 mt-4">
                            The quality of the sports gear I bought was exceptional. The bat with the extra grip made a huge difference in my performance. Highly recommend!
                        </p>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                        <img
                            src={pic2}
                            alt="Ahmed"
                            className="h-20 w-20 rounded-full mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Ahmed</h3>
                        <p className="text-gray-600 mt-4">
                            I bought a football kit and was blown away by the quality. The delivery was fast, and the customer service was excellent!
                        </p>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                        <img
                            src={pic3}
                            alt="Sanju"
                            className="h-20 w-20 rounded-full mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Sanju</h3>
                        <p className="text-gray-600 mt-4">
                            The variety of sports equipment available is fantastic. The tennis racquet I purchased feels great, and the price was unbeatable.
                        </p>
                    </div>

                    {/* Review 4 */}
                    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                        <img
                            src={pic4}
                            alt="Nayem"
                            className="h-20 w-20 rounded-full mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Nayem</h3>
                        <p className="text-gray-600 mt-4">
                            I’m impressed with the basketball gear I ordered. Great fit, durable, and delivered on time. Definitely my go-to place for sports equipment.
                        </p>
                    </div>

                    {/* Review 5 */}
                    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                        <img
                            src={pic5}
                            alt="Tasfia"
                            className="h-20 w-20 rounded-full mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Tasfia</h3>
                        <p className="text-gray-600 mt-4">
                            The racquet I bought was perfectly balanced and enhanced my gameplay. The customer support was also top-notch. Totally satisfied with my purchase!
                        </p>
                    </div>

                    {/* Review 6 */}
                    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                        <img
                            src={pic6}
                            alt="Eshika"
                            className="h-20 w-20 rounded-full mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Eshika</h3>
                        <p className="text-gray-600 mt-4">
                            I’ve been using the football boots I ordered for a month now, and they are amazing! Comfortable, durable, and worth every penny.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
