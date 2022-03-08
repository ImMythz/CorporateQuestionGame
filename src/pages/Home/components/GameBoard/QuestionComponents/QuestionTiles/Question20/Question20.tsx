import React from 'react';
import Popup from 'reactjs-popup';
import  Card from './Card';
import 'reactjs-popup/dist/index.css';
import './style.css';
import { useSelector, useDispatch} from 'react-redux';
import questions from './../../../../../../../questions.json'
import { setAnswer, setColor, clearTile } from '../../../../../../../redux/question20';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box'


export default function Question20() {
    const { answer, color } = useSelector((state: any) => state.question20);
    const dispatch = useDispatch()

    const clear = () => {
        dispatch(clearTile());
    }
    
    const submit = () => {
        const answerText = document.getElementById('answerText') as HTMLInputElement;
        dispatch(setColor())
        dispatch(setAnswer(answerText.value));
    }

    return (
        <article className={`flex flex-col items-center justify-center h-40 w-40 bg-white blue border-2 border-navy ${color}`}>
            <Popup
                className='popup-content'
                trigger={
                    <div className='h-full w-full font-bold flex flex-col items-center justify-center tileButton'>
                        {questions[19].question}
                        <p className='answer1 w-fit mt-2'>{answer}</p>
                    </div>
                } 
                modal 
                nested
            >
                {(close:any) => (
                    <div>
                        <Card/>
                        <div className="actions">
                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                sx={{
                                    '& > :not(style)': { mr: 3, mb: 3 },
                                }}
                            >
                                <CardActions>
                                    <Button 
                                        className='!text-blue' 
                                        size="small"
                                        onClick={() => {
                                            clear();
                                            close();
                                        }}
                                        >Clear
                                    </Button>
                                    <Button
                                        size='small'
                                        className="!text-blue"
                                        onClick={() => {
                                            submit();
                                            console.log('Hey Ron');
                                            close();
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </CardActions>
                            </Box>
                        </div>
                    </div>
                )}
            </Popup>
        </article>
    );
}