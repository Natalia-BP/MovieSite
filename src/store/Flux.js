const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			// ####### FETCH STORE ######
			// Films
			pop_films: [],
			top_rated: [],
			similar_films: [],

			// TV Shows
			pop_tvShows: [],

			// People
			people: [],

			// ####### FAVORITES ######
			favorite_films: [],
			favorite_tvShows: []
		},
		actions: {
			// Usa getActions para llamar una function dentro de una function. Te dejo un ejemplo
			exampleFunction: () => {
				getActions().changeColor("green");
			},

			// ########## FETCH #########

			// Fetch Pop Films Full Info
			get_popFilms: () => {
				fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`, { method: "GET", headers: { "Content-type": "application/json;charset=UTF-8" } })
					.then(response => response.json())
					.then(async data => {
						let popFilms = data.results;
						let filmDetails = popFilms.map(async e => {
							const detailsData = await fetch(`https://api.themoviedb.org/3/movie/${e.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`, { method: "GET", headers: { "Content-type": "application/json;charset=UTF-8" } }).then(response => response.json());
							return {
								// Pop Movies
								id: e.id,
								backdrop_img: e.backdrop_path,
								poster_img: e.poster_path,
								overview: e.overview,
								title: e.title,
								release_date: e.release_date,
								// Movie Details
								length: detailsData.runtime,
								rating: detailsData.vote_average,
								movie_genres: detailsData.genres.map(elem => {
									return elem.name;
								}),
								countries: detailsData.production_countries.map(elem => {
									return elem.name;
								}),
								companies: detailsData.production_companies.map(elem => {
									return {
										company_name: elem.name,
										company_logo: elem.logo_path
									};
								})
							};
						})
						let fullFilmsInfo = await Promise.all(filmDetails);
						setStore({ pop_films: fullFilmsInfo });
					})
			},

			// Fetch Similar Films
			get_similarFilms: (movie_id) => {
				fetch(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`, { method: "GET", headers: { "Content-type": "application/json;charset=UTF-8" } })
					.then(response => response.json())
					.then(data => setStore({ similar_films: data.results }));
			},

			// Fetch Top Rated Films
			get_topRated: () => {
				fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`, { method: "GET", headers: { "Content-type": "application/json;charset=UTF-8" } })
					.then(response => response.json())
					.then(async data => {
						let topFilms = data.results;
						let filmDetails = topFilms.map(async e => {
							const detailsData = await fetch(`https://api.themoviedb.org/3/movie/${e.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`, { method: "GET", headers: { "Content-type": "application/json;charset=UTF-8" } }).then(response => response.json());
							return {
								// Top Rated Movies
								id: e.id,
								backdrop_img: e.backdrop_path,
								poster_img: e.poster_path,
								overview: e.overview,
								title: e.title,
								release_date: e.release_date,
								// Movie Details
								length: detailsData.runtime,
								rating: detailsData.vote_average,
								movie_genres: detailsData.genres.map(elem => {
									return elem.name;
								}),
								countries: detailsData.production_countries.map(elem => {
									return elem.name;
								}),
								companies: detailsData.production_companies.map(elem => {
									return {
										company_name: elem.name,
										company_logo: elem.logo_path
									};
								})
							};
						});
						let fullFilmsInfo = await Promise.all(filmDetails);
						setStore({ top_rated: fullFilmsInfo });
					})
			},

			// Fetch Popular TV Shows
			getPop_tvShows: () => {
				fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`, { method: "GET", headers: { "Content-type": "application/json;charset=UTF-8" } })
					.then(response => response.json())
					.then(data => setStore({ pop_tvShows: data.results }));
			},

			// Fetch People (actors & actresses)
			get_people: (people_id) => {
				fetch(`https://api.themoviedb.org/3/person/${people_id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`, { method: "GET", headers: { "Content-type": "application/json;charset=UTF-8" } })
					.then(response => response.json())
					.then(data => setStore({ people: data.results }));
			}
		}
	};
};

export default getState;
