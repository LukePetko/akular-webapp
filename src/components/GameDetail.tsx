import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchNbaGameById } from '../api/nba';

export const GameDetail = () => {
    const { gameId } = useParams();
    const { data, status } = useQuery('game', () =>
        fetchNbaGameById(parseInt(gameId ?? '0'))
    );

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <div className='mt-5 row'>
            <h1>Game Detail - {data.home_team.conference} Conference Match</h1>

            <div className='d-flex flex-column mt-3'>
                <h6>
                    {data.home_team.abbreviation} -{' '}
                    {data.visitor_team.abbreviation}
                </h6>
                <h5>
                    {data.home_team.full_name} - {data.visitor_team.full_name}
                </h5>
                <h3>
                    {data.home_team_score} - {data.visitor_team_score}
                </h3>
            </div>

            <div className='d-flex flex-column mt-3'>
                <h5>Match Date</h5>
                <h3>{new Date(data.date.slice(0, 10)).toLocaleDateString()}</h3>
            </div>
        </div>
    );
};
