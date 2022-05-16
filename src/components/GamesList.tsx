import { List } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { fetchNbaGames } from '../api/nba';
import { GamesListItem } from './GamesListItem';

export const GamesList = () => {
    const { data } = useQuery('games', () => fetchNbaGames());

    return (
        <div className='mt-5'>
            <h1>Games List</h1>
            <List>
                {data?.data.map((game: any) => (
                    <GamesListItem key={game.id} game={game} />
                ))}
            </List>
        </div>
    );
};
