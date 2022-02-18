import React from 'react';
import Popup from 'reactjs-popup';
import  Card from './Card';
import 'reactjs-popup/dist/index.css';
import './style.css';
import { useSelector } from 'react-redux';
import questions from './../../../../../../../questions.json'


export default function Question1() {
    const { answer, color } = useSelector((state: any) => state.question1);
    return (
        <div className={`flex flex-col items-center justify-center h-40 w-40 bg-white blue border-2 border-navy ${color}`}>
            <Popup trigger={<button className='h-fit w-full font-bold'>{questions[0].question}</button>} modal nested>
                <Card />
            </Popup>
            <div className='border-b-[1px] w-fit'>
                <p className='answer1 w-full mt-2'>{answer}</p>
            </div>
        </div>
    );
}