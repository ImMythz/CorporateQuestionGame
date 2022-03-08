import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import  Card from './Card';
import 'reactjs-popup/dist/index.css';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import questions from './../../../../../../../questions.json'
import { setThing } from './../../../../../../../redux/modal';

// interface ModalProps {
//     close: () => void;
// }

export default function Question1() {
    const { answer, color } = useSelector((state: any) => state.question1);
    const { test } = useSelector((state: any) => state.modalState);
    const dispatch = useDispatch()
    const closeModal = () => dispatch(setThing(false));
    // const ref = useRef();
    // const closeTooltip = () => ref.current.close();
    // const [open, setOpen] = useState(false);

    return (
        <article className={`flex flex-col items-center justify-center h-40 w-40 bg-white blue border-2 border-navy ${color}`}>
            <Popup 
                open={test} 
                closeOnDocumentClick  
                onClose={closeModal} 
                trigger={
                    <div className='h-full w-full font-bold flex flex-col items-center justify-center tileButton'>
                        {questions[0].question}
                        <p className='answer1 w-fit mt-2'>{answer}</p>
                    </div>
                } 
                modal 
                nested
            >
                {close => (
                    <div className='modal'>
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <Card/>
                        <div className="actions">
                                <Popup
                                    trigger={<button className="button"> Trigger </button>}
                                    position="top center"
                                    nested
                                >
                                    <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                    magni omnis delectus nemo, maxime molestiae dolorem numquam
                                    mollitia, voluptate ea, accusamus excepturi deleniti ratione
                                    sapiente! Laudantium, aperiam doloribus. Odit, aut.
                                    </span>
                                </Popup>
                                <button
                                    className="button"
                                    onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                    }}
                                >
                                    close modal
                                </button>
                        </div>
                    </div>
                )}
            </Popup>
        </article>
    );
}