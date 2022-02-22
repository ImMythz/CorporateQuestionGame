import React from 'react';
import Popup from 'reactjs-popup';
import  Card from './Card';
import 'reactjs-popup/dist/index.css';
import './style.css';
import { useSelector } from 'react-redux';
import questions from '../../../../../../../questions.json'


export default function Question20() {
    const { answer, color } = useSelector((state: any) => state.question20);
    return (
        <article className={`flex flex-col items-center justify-center h-40 w-40 bg-white blue border-2 border-navy ${color}`}>
            <Popup trigger={<div className='h-full w-full font-bold flex flex-col items-center justify-center tileButton'>
                                {questions[19].question}
                                <p className='answer1 w-fit mt-2'>{answer}</p>
                            </div>} modal nested>
                <Card />
            </Popup>
        </article>
    );
}