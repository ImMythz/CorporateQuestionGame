import React from 'react';
import QuestionTileAlt from './QuestionTileAlt';

export default function QuestionRowAlt() {
    return (
        <div className='flex flex-row items-center h-1/6 w-full'>
            <QuestionTileAlt />
            <QuestionTileAlt />
            <QuestionTileAlt />
        </div>
    );
}