import React from "react";

const sportsCategories = [
  {
    id: 1,
    name: "Cricket",
    image: "https://i.ibb.co/VqH827j/bat.png",
  },
  {
    id: 2,
    name: "Football",
    image: "https://i.ibb.co/wgTDQj/halmet.png",
  },
  {
    id: 3,
    name: "Basketball",
    image: "https://i.ibb.co/cL6W4Bq/gloves.png",
  },
  {
    id: 4,
    name: "Tennis",
    image: "https://i.ibb.co/ZYW3VTp/basketball.png",
  },
  {
    id: 5,
    name: "Hockey",
    image: "https://i.ibb.co/qM3hZLv/goalkeeper.png",
  },
];

const SportsCategories = () => {
  return (
    <div className="w-11/12 mx-auto mt-10 mb-10">
      <h2 className="text-center text-3xl font-semibold my-6 text-blue-600">Sports Categories</h2>

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
