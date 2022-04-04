import { render, screen, fireEvent  } from "@testing-library/react"
import {BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import {createPortal} from 'react-dom';
import CardContextProvider from '../components/CardContextProvider';
import Card from '../components/Card'
import React from 'react';


describe('Testing Detail Component', () =>{


    it('Testing Card Component', async() =>{
        render(
            <CardContextProvider>
                <Router>
                    <Card pokemon={{name:"pikachu", path:'images/pikachu.png'}} />
                </Router>
            </CardContextProvider>
        );
        const card = screen.getByTestId('card')
        expect(card.firstChild.src).toContain('images/pikachu.png')
        expect(card.firstChild.alt).toBe('pikachu')
        expect(card.lastChild.textContent).toBe('pikachu')

        fireEvent.click(card)

        })

        
})