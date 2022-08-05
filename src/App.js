import React from 'react';
import TopBar from './Components/TopBar/';
import ToolbarLeft from './Components/Toolbar/';
import HomePage from './Components/HomePage/';
import './App.css';

export default function App() {

    return (
        <div className='container'>
        <TopBar />
        <ToolbarLeft />
        <HomePage />
        </div>
    );

}
