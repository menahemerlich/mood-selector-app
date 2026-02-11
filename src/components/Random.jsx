import React from 'react'

function Random(props) {
    const moods = {
        heppy: 'Happy 😀',
        sad: 'Sad 😢',
        angry: 'Angry 😡'
    };
    return (
        <button
            onClick={() => {

                const keys = Object.keys(moods);
                const randomKey = keys[Math.floor(Math.random() * keys.length)];
                const randomMood = moods[randomKey];

                props.setMood(randomMood);
                props.setHistory(prev => [...prev, randomMood]);
                props.setCount(prev => ({
                    ...prev,
                    [randomKey]: prev[randomKey] + 1
                }));

            }}
        >
            Random
        </button>
    )
}

export default Random
