import React, { useRef } from 'react';
import Popup from 'reactjs-popup';
import  Card from './Card';
import 'reactjs-popup/dist/index.css';
import './style.css';
import { useSelector } from 'react-redux';
import questions from './../../../../../../../questions.json'

// interface ModalProps {
//     close: () => void;
// }

export default function Question1() {
    const { answer, color } = useSelector((state: any) => state.question1);
    // const ref = useRef();
    // const closeTooltip = () => ref.current.close();

    return (
        <article className={`flex flex-col items-center justify-center h-40 w-40 bg-white blue border-2 border-navy ${color}`}>
            <Popup trigger={<div className='h-full w-full font-bold flex flex-col items-center justify-center tileButton'>
                                {questions[0].question}
                                <p className='answer1 w-fit mt-2'>{answer}</p>
                            </div>} modal nested>
                            {close => (
                                <div>
                                    Content here
                                    <a className="close" onClick={close}>
                                    &times;
                                    </a>
                                </div>
                                )}
                            {/* <button type='button'className='button' onClick={closeTooltip}>toggle</button> */}
                <Card />
            </Popup>
        </article>
    );
}