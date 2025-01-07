import React from "react";
import football from '../../public/football.png'
import basketball from '../../public/basketball.png'
import tennis from '../../public/tennis.png'
import hockey from '../../public/hocky.png'

const sportsCategories = [
  {
    id: 1,
    name: "Cricket",
    image: "https://i.ibb.co/VqH827j/bat.png",
  },
  {
    id: 2,
    name: "Football",
    image: football,
  },
  {
    id: 3,
    name: "Basketball",
    image: basketball,
  },
  {
    id: 4,
    name: "Tennis",
    image: tennis,
  },
  {
    id: 5,
    name: "Hockey",
    image: hockey,
  },
];

const SportsCategories = () => {
  return (
    <div className="w-11/12 mx-auto mt-10 mb-10">
      <h2 className="text-4xl font-extrabold text-center text-black mb-10">Sports Categories</h2>

      <p className="text-center text-gray-600 text-lg mb-10 pr-10 pl-10">
      Explore our diverse range of sports categories, featuring equipment for Cricket, Football, Basketball, Tennis, and Hockey. Whether you're a professional athlete or a sports enthusiast, find the perfect gear to match your passion and elevate your game.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {sportsCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition text-center"
          >
            <div className="flex items-center justify-center">
              <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-gray-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsCategories;
