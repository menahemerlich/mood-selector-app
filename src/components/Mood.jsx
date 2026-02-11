import React, { useState } from 'react'
import Button from './Button'
import '../css/Mood.css'
import Reset from './Reset'
import Random from './Random'

function Mood() {
    const moods = {
        heppy: 'Happy 😀',
        sad: 'Sad 😢',
        angry: 'Angry 😡',
    }
    const [mood, setMood] = useState('Neutral 😐')
    const [history, setHistory] = useState(['', 'Neutral 😐'])
    const [count, setCount] = useState({
        heppy: 0,
        sad: 0,
        angry: 0
    })
    return (
        <div >
            <p id='mood'>{mood}</p>
            <Button name='heppy' mood={moods.heppy} setMood={setMood} setHistory={setHistory} setCount={setCount} />
            <Button name='sad' mood={moods.sad} setMood={setMood} setHistory={setHistory} setCount={setCount} />
            <Button name='angry' mood={moods.angry} setMood={setMood} setHistory={setHistory} setCount={setCount} />
            <div>
                <h1>history:</h1>
                {history.slice(-4, -1)}
            </div>
            <Random setMood={setMood} setHistory={setHistory} setCount={setCount} />
            <Reset setMood={setMood} setHistory={setHistory} setCount={setCount} />
            <div>
                <h2>Counts:</h2>
                <p>😀: {count.heppy}</p>
                <p>😢: {count.sad}</p>
                <p>😡: {count.angry}</p>
            </div>

        </div>
    )
}

export default Mood
