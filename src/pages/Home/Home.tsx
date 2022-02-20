import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GameBoard from './components/GameBoard/GameBoard';

export default function Home() {
    return (
        <main className='flex flex-col items-center justify-center'>
            <Header />
            <GameBoard />
            <Footer />
        </main>
    );
}
