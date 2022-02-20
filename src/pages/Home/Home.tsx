import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GameBoard from './components/GameBoard/GameBoard';

export default function Home() {
    return (
        <div>
            <Header />
            <GameBoard />
            <Footer />
        </div>
    );
}
