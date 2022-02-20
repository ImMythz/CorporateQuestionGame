import React from 'react';
import QuestionRow from './QuestionComponents/QuestionRow';
import QuestionRowAlt from './QuestionComponents/QuestionRowAlt';
import FirstRow from './QuestionComponents/FirstRow';
import './style.css';

export default function GameContainer() {
    return (
        <section className='bg-navy h-fit w-fit mt-16 mb-16'>
            <article className='flex flex-col justify-center items-center h-36'>
                <h1 className='spaceText flex text-white text-4xl'>TO A BILLION AND BEYOND</h1>
                <h1 className='spaceText flex text-white text-6xl'>BINGO</h1>
            </article>
            <section className='bg-navy h-full w-full'>
                <article className='h-fit w-auto p-4'>
                    <FirstRow />
                    <QuestionRow /> 
                    <QuestionRowAlt />
                    <QuestionRow />
                    <QuestionRow />
                </article>
            </section>
        </section>
    );
}