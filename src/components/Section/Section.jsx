import React, { useEffect } from 'react';
import { useState } from 'react'
import Process from './Process/Process';
import Cards from './cards/Cards';
import toast from 'react-hot-toast';


const Section = () => {
    const [recipes, setRecipes] = useState([])
    const [cooks, setCooks] = useState([])
    useEffect(()=>{
        fetch('/recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    const handleCook = ck =>{
        const isExist = cooks.find( cook => cook.recipe_id == ck.recipe_id)
        if(!isExist){
            setCooks([...cooks, ck])
        }
        else{
            toast.error('Already exists!');

        }
    }
    return (
        <div className='mb-24 container mx-auto'>
            <h1 className='text-4xl font-bold text-center'>Our Recipes</h1>
            <p className='text-center mt-6 mb-9'>Indulge in this delicious recipe, a delightful combination of textures and tastes. Prepare a memorable meal with these straightforward steps. <br /> Discover this easy and flavorful recipe perfect for a quick meal. Simple ingredients come together to create a satisfying dish.</p>

            <div className='flex gap-10'>
                {/* card */}
                <div className='w-3/5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                   
                      {
                        recipes.map( (recipe, idx) => <Cards key={idx} handleCook={handleCook} recipe={recipe}></Cards>)
                      }
                   
                </div>

                {/* process */}
                <div>
                   <Process cooks={cooks} className='w-2/5'></Process> 
                </div>
            </div>
        </div>
    );
};

export default Section;