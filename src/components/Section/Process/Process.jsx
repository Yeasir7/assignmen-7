import React from 'react';

const Process = ({cooks}) => {
    return (
        <div className=''>
            <h3 className='text-2xl font-semibold mt-8 text-center'>Want to cook: {cooks.length}</h3>
            <br />
            <div className='flex flex-col gap-5'>
                {
                    cooks.map((cook,idx)=> (
                        <div key={idx} className='flex gap-5'>
                            <div>
                                <p>name</p>
                                <p>{cook.recipe_name}</p>
                            </div>
                            <div>
                                <p>time</p>
                                <p>{cook.preparing_time}</p>
                            </div>
                            <div>
                                <p>Calories</p>
                                <p>{cook.calories}</p>
                            </div>
                            <button class="btn bg-[#0BE58A] rounded-full font-medium text-[#150B2B]">Preparing</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Process;