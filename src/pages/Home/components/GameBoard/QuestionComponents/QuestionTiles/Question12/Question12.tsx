import React from 'react';
import Popup from 'reactjs-popup';
import  Card from './Card';
import 'reactjs-popup/dist/index.css';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import questions from '../../../../../../../questions.json'
import { setThing } from '../../../../../../../redux/modal';


export default function Question12() {
    const { answer, color } = useSelector((state: any) => state.question12);
    const { test } = useSelector((state: any) => state.modalState);
    const dispatch = useDispatch()
    const closeModal = () => dispatch(setThing(false));
    
    return (
        <article className={`flex flex-col items-center justify-center h-40 w-40 bg-white blue border-2 border-navy ${color}`}>
            <Popup open={test} closeOnDocumentClick  onClose={closeModal} trigger={<div className='h-full w-full font-bold flex flex-col items-center justify-center tileButton'>
                                {questions[11].question}
                                <p className='answer1 w-fit mt-2'>{answer}</p>
                            </div>} modal nested>
                <Card />
            </Popup>
        </article>
    );
}