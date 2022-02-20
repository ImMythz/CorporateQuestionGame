import React from 'react';
import logoInf from "../../../../images/logoInf.png";

export default function Header() {
    return (
        <header className='flex flex-col items-center justify-center h-20 w-full bg-navy sticky top-0 text-white'>
            <img src={logoInf} alt='Infinite Logo' className='flex' width='176px' height='48px'/>
        </header>
    );
}

