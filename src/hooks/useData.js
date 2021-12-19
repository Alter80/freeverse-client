import { useEffect, useState } from 'react';

const useData = () => {
    const [games, setGames] = useState([]);

    const dataLocation = 'https://serene-garden-71214.herokuapp.com/games';

    useEffect(() => {
        fetch(dataLocation)
            .then(res => res.json())
            .then(data => setGames(data));

    }, [])


    return { games };
};

export default useData;