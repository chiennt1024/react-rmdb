import React, { useEffect, useState } from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, API_KEY} from '../config';
// Components
import HeroImage from './HeroImage';
//Hook
import { useHomeFetch } from '../hooks/useHomeFetch';
//Image
import NoImage from '../images/no_image.jpg';


const Home = () => {
    const { state, loading, error } = useHomeFetch();
    console.log(state);

    return (
        <>
            {state &&
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
            />
            }
        </>
    )
};

export default Home;