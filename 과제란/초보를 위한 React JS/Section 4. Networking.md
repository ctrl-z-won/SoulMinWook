# :collision: Section 4. Networking :collision:

## section 4.0 introduction to The Movie DB API

movie db api : <https://www.themoviedb.org/settings/api>

## section 4.1 Sexy Networking with Axios instances

yarn add axios : request 작업하기 좋습니다.
Axios의 좋은 점은, Axios의 instance(인스턴스)를 configure(설정)해줄 수 있습니다.
"/"로 시작하는 것은 절대경로를 의미하는데, 상대경로로 써야 합니다.

## section 4.2 API Verbs part One

## section 4.3 API Verbs part Two

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: "en-US"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("moive/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id => api.get(`movie/${id}`, {
        params: {
            append_to_respone: "videos"
        }
    }),
    search: (term) => api.get("search/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id => api.get(`tv/${id}`, {
        params: {
            append_to_respone: "videos"
        }
    }),
    search: (term) => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};
```

이러한 방식으로 axios와 arrow function을 이용해서 api를 만들 수 있습니다.
