import React from "react";
interface CategoryInterface {
    categories: Array<string>;
}
const CategoryList: React.FC<CategoryInterface> = ({categories}) => {

  return (
    <p className="mb-5">
      {categories.map((category, index) => {
        if (index !== categories.length - 1) {
          return (
            <span key={index} className="text-white">
              <span className="text-aquamarine mx-2">{` ${category} `}</span>/
            </span>
          );
        }

        return <span key={index} className="text-white mx-2">{`${category}`}</span>;
      })}
    </p>
  );
};

export default CategoryList;
