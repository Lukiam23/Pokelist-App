import { render, screen, fireEvent  } from "@testing-library/react"
import {BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import {createPortal} from 'react-dom';
import CardContextProvider from '../components/CardContextProvider';
import Header from '../components/Header'
import React from 'react';


describe('Testing Header Component', () =>{
    
    it('Test home and add buttons', async() =>{
        render(
            <CardContextProvider>
                <Router>
                    <Header />
                </Router>
            </CardContextProvider>
        );
        
        const addButton = screen.getByTestId('add-button');
        expect(addButton).toBeInTheDocument();
        fireEvent.click(addButton)
        const pokemonName = screen.getByTestId('pokemon-name');
        fireEvent.change(pokemonName,{target:{value:"Newmon"}})
        const submit = screen.getByTestId('submit')
        fireEvent.click(submit)

        const homeButton = screen.getByTestId('home-button');
        expect(homeButton).toBeInTheDocument();
        
        
        })

        
})

