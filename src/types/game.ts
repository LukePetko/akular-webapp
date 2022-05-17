export type Game = {
    id: number;
    date: string;
    home_team: Team;
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: Team;
    visitor_team_score: number;
};

export type Team = {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
};
