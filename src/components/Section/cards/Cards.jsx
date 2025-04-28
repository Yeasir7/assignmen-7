import React from 'react';
import { CiClock1 } from "react-icons/ci";
import { SlFire } from "react-icons/sl";

const Cards = ({recipe}) => {
    const {recipe_image, recipe_name, short_description, ingredients,preparing_time,calories} = recipe
    return (
        <div>
<div className="card bg-base-100 w-96 shadow-[0px_4px_20px_rgba(0,255,180,0.15)] border border-[#2c2c2c]">
  <figure className="px-10 pt-10">
    <img
      src={recipe_image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-xl font-semibold">{recipe_name}</h2>
    <p>{short_description}</p>
    <br />
    <h2 className='text-lg font-medium'>Ingredients: {ingredients.length}</h2>
    {
        ingredients.map(ingredient => <p>{ingredient}</p>)
    }
    <br />
    <div className='flex items-center mb-4'>
        <div className="flex mr-4 items-center">
           <CiClock1 />
            <span className='ml-2'>{preparing_time}minutes</span>
        </div>
        <div className="flex items-center">
         <SlFire />
         <span className='ml-2'>{calories}calories</span>
        </div>
    </div>
    <div className="card-actions">
      <button className="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cards;