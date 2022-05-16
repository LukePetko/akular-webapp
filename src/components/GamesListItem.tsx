import {
    Checkbox,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import React from 'react';

type GamesListItemProps = {
    game: any;
};

export const GamesListItem = (props: GamesListItemProps) => {
    const { game } = props;

    return (
        <a href={`/${game.id}`}>
            <ListItem className='list-hover'>
                <ListItemButton role={undefined} onClick={() => {}} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge='start'
                            checked={false}
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary={`${game.home_team.full_name} - ${game.visitor_team.full_name}`}
                        secondary={new Date(game.date).toLocaleDateString()}
                    />
                </ListItemButton>
            </ListItem>
        </a>
    );
};
