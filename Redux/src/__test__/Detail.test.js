import React from 'react';
import { render, screen, fireEvent  } from "@testing-library/react"
import {BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import CardContextProvider,{CardContext} from '../components/CardContextProvider';
import Detail from '../components/Detail'



const pokemonData = {name:'bulbasor', path:'image/bulbasor.png', type:'plant'}

describe('Testing Detail Component', () =>{
    beforeEach(() => {  
        window.scrollTo = jest.fn();
    });

    afterAll(() =>{
        jest.clearAllMocks();
    })

    it('Testing Detail Component', async() =>{
        render(
            <CardContext.Provider value={{pokemonData}}>
                <Router>
                    <Detail />
                </Router>
            </CardContext.Provider>
        );

        const detail = screen.getByTestId('detail')
        const children = detail.childNodes;
        expect(children[0].textContent).toBe('bulbasor');
        expect(children[1].src).toContain('image/bulbasor.png');
        expect(children[1].alt).toBe('bulbasor');
        expect(children[2].textContent).toContain('bulbasor');

    })

        
})