import React, { useState } from 'react';

const characters = [
    {
        imgSrc: 'https://th.bing.com/th/id/OIP.AdcMCyJ9D6hnMPGWX-5o6gHaFP?rs=1&pid=ImgDetMain',
        name: 'Naruto',
        rating: 'Rating: 5/5',
        description: 'Naruto Uzumaki is a young ninja with a great dream: to become the strongest ninja and lead his village.',
    },
    {
        imgSrc: 'data:image/jpeg;base64,...', // Add the base64 string or URL for another character
        name: 'Sasuke',
        rating: 'Rating: 4.5/5',
        description: 'Sasuke Uchiha is a talented ninja with a dark past and a quest for revenge.',
    },
    // Add more characters as needed
];

export default function Card() {
    const [index, setIndex] = useState(0);

    const changeCharacter = () => {
        setIndex((prevIndex) => (prevIndex + 1) % characters.length);
    };

    const character = characters[index];

    return (
        <div className="card">
            <img src={character.imgSrc} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.rating}</p>
            <p>{character.description}</p>
            <button onClick={changeCharacter}>Change Character</button>
        </div>
    );
}
