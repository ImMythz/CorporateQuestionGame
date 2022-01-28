import React from 'react';
import QuestionRow from './Questions/QuestionRow';
import QuestionRowAlt from './Questions/QuestionRowAlt';
import './style.css';

export default function GameContainer() {
    return (
        <div className='bg-navy h-5/6 w-3/5'>
            <div className='flex flex-col justify-center items-center h-36'>
                <h1 className='spaceText flex text-white text-4xl'>TO A BILLION AND BEYOND</h1>
                <h1 className='spaceText flex text-white text-6xl'>BINGO</h1>
            </div>
            <div className='bg-navy h-full w-full'>
                <div className='h-full w-auto p-4'>
                    <QuestionRow />
                    <QuestionRowAlt />
                    <QuestionRow />
                    <QuestionRowAlt />
                    <QuestionRow />
                    <QuestionRowAlt />
                    <QuestionRow />
                    <QuestionRowAlt />
                </div>
            </div>
        </div>
    );
}