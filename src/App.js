import React from 'react';
import TopBar from './Components/TopBar/';
import HomePage from './Components/HomePage/';
import './App.css';

export default function App() {

    return (
        <div className='container'>
        <TopBar />
        <HomePage />
        </div>
    );

}
