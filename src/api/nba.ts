export const fetchNbaGames = async () => {
    const response = await fetch(
        `https://www.balldontlie.io/api/v1/games/?seasons[]=2021`
    );
    return await response.json();
};

export const fetchNbaGameById = async (id: number) => {
    const response = await fetch(
        `https://www.balldontlie.io/api/v1/games/${id}`
    );
    return await response.json();
};
