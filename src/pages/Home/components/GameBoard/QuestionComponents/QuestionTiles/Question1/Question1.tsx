import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';
import Popup from 'reactjs-popup';
import Card from './Card';
import 'reactjs-popup/dist/index.css';


export default function Question1() {

    return (
        <div className='flex flex-col items-center justify-center h-40 w-40 bg-white blue border-2 border-navy'>
            <Popup trigger={<button className='h-full w-full'>Question 1</button>} modal nested>
                <Card />
            </Popup>
        </div>
    );
}