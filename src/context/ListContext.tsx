import { createContext, useState } from 'react';
import { Game } from '../types/game';

export type ListContextType = {
    games: number[];
    addItem: (item: Game) => void;
    removeItem: (item: Game) => void;
};

const ListContext = createContext<ListContextType>({
    games: [],
    addItem: () => {},
    removeItem: () => {},
});

export const ListProvider = ({ children }: any) => {
    const [games, setGames] = useState<number[]>([]);
    const addItem = (item: Game) => {
        setGames([...games, item.id]);
    };
    const removeItem = (item: Game) => {
        setGames(games.filter((listItem: number) => listItem !== item.id));
    };

    return (
        <ListContext.Provider value={{ games, addItem, removeItem }}>
            {children}
        </ListContext.Provider>
    );
};

export default ListContext;
