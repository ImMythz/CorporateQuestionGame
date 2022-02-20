import React from 'react';
import logoInf from "../../../../images/logoInf.png";

export default function Header() {
    return (
        <header className='flex flex-col items-center justify-center h-20 bg-navy sticky top-0 text-white'>
            <img src={logoInf} alt='Infinite Logo' className='flex h-12'/>
        </header>
    );
}

