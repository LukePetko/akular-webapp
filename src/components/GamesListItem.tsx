import {
    Checkbox,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ListContext from '../context/ListContext';
import { Game } from '../types/game';

type GamesListItemProps = {
    game: Game;
};

export const GamesListItem = (props: GamesListItemProps) => {
    const { game } = props;

    const { games, addItem, removeItem } = useContext(ListContext);

    return (
        <ListItem className='list-hover'>
            <ListItemButton role={undefined} onClick={() => {}} dense>
                <ListItemIcon>
                    <Checkbox
                        edge='start'
                        checked={games.includes(game.id)}
                        tabIndex={-1}
                        disableRipple
                        onChange={() => {
                            if (games.includes(game.id)) {
                                removeItem(game);
                                return;
                            }
                            addItem(game);
                        }}
                    />
                </ListItemIcon>
                <NavLink to={`/${game.id}`}>
                    <ListItemText
                        primary={`${game.home_team.full_name} - ${game.visitor_team.full_name}`}
                        secondary={new Date(game.date).toLocaleDateString()}
                    />
                </NavLink>
            </ListItemButton>
        </ListItem>
    );
};
