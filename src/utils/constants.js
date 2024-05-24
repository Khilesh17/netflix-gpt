export const NETFLIX_LOGO =
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PROFILE_LOGO =
    "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
};


export const GET_NOWPLAYING_MOVIES_API =
    "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const GET_POPULAR_MOVIES_API =
    "https://api.themoviedb.org/3/movie/popular?page=1";

export const GET_TOP_RATED_MOVIES_API =
    'https://api.themoviedb.org/3/movie/top_rated?page=1';

export const GET_UPCOMING_MOVIES_API =
    'https://api.themoviedb.org/3/movie/upcoming?page=1';

export const IMG_CDN_URL =
    "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
    {
        identifier: 'en',
        name: "English"
    },
    {
        identifier: 'hindi',
        name: "Hindi"
    },
    {
        identifier: 'spanish',
        name: "Spanish"
    }
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;