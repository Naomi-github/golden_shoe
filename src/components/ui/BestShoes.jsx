import { shoes } from "../../data";
import React from "react";
import Shoe from "../Shoe";

const BestShoes = ({ id }) => {
  return (
    <div className="shoes">
      {shoes
        .filter((shoe) => {
          if (id) {
            // Check for id when on the individual shoe
            // so the same shoe isnt recommended
            return shoe.rating === 5 && shoe.id !== id;
          }
          return shoe.rating === 5;
        })
        .slice(0, 4)
        .map((shoe) => {
          return <Shoe shoe={shoe} key={shoe.id} />;
        })}
    </div>
  );
};

export default BestShoes;
