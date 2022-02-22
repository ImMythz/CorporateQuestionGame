import React from 'react';
import FirstRow from './QuestionComponents/FirstRow';
import SecondRow from './QuestionComponents/SecondRow';
import ThirdRow from './QuestionComponents/ThirdRow';
import FourthRow from './QuestionComponents/FourthRow';
import FifthRow from './QuestionComponents/FifthRow';
import stars from './../../../../images/stars.png';
import stars2 from './../../../../images/stars2.png';
import './style.css';

export default function GameContainer() {
    return (
        <section className='bg-navy h-fit w-fit mt-16 mb-16'>
            <article id='bingoHeaderContainer' className='flex flex-col justify-center items-center h-36 w-full'>
                <h1 id='topHeader' className='spaceText flex text-white text-4xl'>TO A BILLION AND BEYOND</h1>
                <div className='flex flex-row justify-center items-center'>
                    <img src={stars2} alt='stars' width='30px' height='30px' className='mr-2'/>
                    <h1 id='bottomHeader' className='spaceText text-white text-6xl'>BINGO</h1>
                    <img src={stars} alt='stars' width='30px' height='30px' className='ml-2'/>
                </div>
            </article>
            <section className='bg-navy h-fit w-fit'>
                <article className='h-fit w-fit p-4'>
                    <FirstRow />
                    <SecondRow />
                    <ThirdRow />
                    <FourthRow />
                    <FifthRow />
                </article>
            </section>
        </section>
    );
}