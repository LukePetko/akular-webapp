import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { GamesList } from './components/GamesList';
import { GameDetail } from './components/GameDetail';
import { ListProvider } from './context/ListContext';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ListProvider>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<GamesList />} />
                        <Route path='/:gameId' element={<GameDetail />} />
                    </Routes>
                </div>
            </ListProvider>
        </QueryClientProvider>
    );
};

export default App;
