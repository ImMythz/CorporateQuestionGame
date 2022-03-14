import React from 'react';
import GameContainer from './GameContainer';
import questions from '../../../../questions.json';
import { useSelector } from 'react-redux';

export default function GameBoard() {
    const question = useSelector((state: any) => state.question1.answer);
    const question2 = useSelector((state: any) => state.question2.answer);
    const question3 = useSelector((state: any) => state.question3.answer);
    const question4 = useSelector((state: any) => state.question4.answer);
    const question5 = useSelector((state: any) => state.question5.answer);
    const question6 = useSelector((state: any) => state.question6.answer);
    const question7 = useSelector((state: any) => state.question7.answer);
    const question8 = useSelector((state: any) => state.question8.answer);
    const question9 = useSelector((state: any) => state.question9.answer);
    const question10 = useSelector((state: any) => state.question10.answer);
    const question11 = useSelector((state: any) => state.question11.answer);
    const question12 = useSelector((state: any) => state.question12.answer);
    const question13 = useSelector((state: any) => state.question13.answer);
    const question14 = useSelector((state: any) => state.question14.answer);
    const question15 = useSelector((state: any) => state.question15.answer);
    const question16 = useSelector((state: any) => state.question16.answer);
    const question17 = useSelector((state: any) => state.question17.answer);
    const question18 = useSelector((state: any) => state.question18.answer);
    const question19 = useSelector((state: any) => state.question19.answer);
    const question20 = useSelector((state: any) => state.question20.answer);
    const question21 = useSelector((state: any) => state.question21.answer);
    const question22 = useSelector((state: any) => state.question22.answer);
    const question23 = useSelector((state: any) => state.question23.answer);
    const question24 = useSelector((state: any) => state.question24.answer);
    return (
        <section className='flex flex-col items-center justify-center h-fit w-fit mb-16'>
            <GameContainer />
            <article className='w-fit h-fit mb-24'>
                <a className="bg-navy hover:bg-light-blue text-white font-bold py-2 px-36 rounded-full"
                href={`mailto:${questions[24].mailTo}
                ?subject=${questions[25].emailSubject}
                &cc=${questions[26].CC}
                &body=1.${question}
                %0A2.${question2}
                %0A3.${question3}
                %0A4.${question4}
                %0A5.${question5}
                %0A6.${question6}
                %0A7.${question7}
                %0A8.${question8}
                %0A9.${question9}
                %0A10.${question10}
                %0A11.${question11}
                %0A12.${question12}
                %0A13.${question13}
                %0A14.${question14}
                %0A15.${question15}
                %0A16.${question16}
                %0A17.${question17}
                %0A18.${question18}
                %0A19.${question19}
                %0A20.${question20}
                %0A21.${question21}
                %0A22.${question22}
                %0A23.${question23}
                %0A24.${question24}
                `}>
                    Submit
                </a>
            </article>
        </section>
    );
}

// {questions[27].emailBody}