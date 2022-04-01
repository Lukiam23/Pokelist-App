import { render, screen, fireEvent  } from "@testing-library/react"
import {BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import {createPortal} from 'react-dom';
import MockCardContextPovider,{MockUseCardContext} from '../__mocks__/MockCardContextPovider.js';
import Detail from '../components/Detail'
import React from 'react';

jest.mock("../components/CardContextProvider.js",() => ({
    ...jest.requireActual("../components/CardContextProvider.js"),
    useCardContext: MockUseCardContext,
}))

describe('Testing Header Component', () =>{
    beforeEach(() => {
        window.scrollTo = jest.fn();
    });

    afterAll(() =>{
        jest.clearAllMocks();
    })

    it('Testing Det6ail Component', async() =>{
        render(
            <MockCardContextPovider>
                <Router>
                    <Detail />
                </Router>
            </MockCardContextPovider>
        );
        

    })

        
})