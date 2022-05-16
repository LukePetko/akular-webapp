import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { GamesList } from './components/GamesList';
import { GameDetail } from './components/GameDetail';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<GamesList />} />
                    <Route path='/:gameId' element={<GameDetail />} />
                </Routes>
                <ReactQueryDevtools />
            </div>
        </QueryClientProvider>
    );
};

export default App;
