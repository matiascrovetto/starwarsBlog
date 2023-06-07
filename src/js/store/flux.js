const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		// demo: [
		// 	{
		// 		title: "FIRST",
		// 		background: "white",
		// 		initial: "white"
		// 	},
		// 	{
		// 		title: "SECOND",
		// 		background: "white",
		// 		initial: "white"
		// 	}
		// ],
		characters: null,
		planets: null,
		favorites: [],
	  },
	  actions: {
		// Use getActions to call a function within a function
  
		getCharacter: async () => {
		  const url = "https://www.swapi.tech/api/people";
		  console.log("fetching characters...");
		  console.log(url);
		  try {
			const response = await fetch(url);
			const characters = await response.json();
			for (let i = 0; i < characters.results.length; i++) {
			  try {
				const resp = await fetch(characters.results[i].url);
				const data = await resp.json();
				characters.results[i].properties = data?.result?.properties;
			  } catch (error) {
				console.log(error);
			  }
			}
			setStore({
			  characters: characters,
			});
		  } catch (error) {
			console.log(error);
		  }
		},
  
		getPlanets: async () => {
		  const url = "https://www.swapi.tech/api/planets";
		  console.log("fetching planets...");
		  console.log(url);
		  try {
			const response = await fetch(url);
			const planets = await response.json();
			for (let i = 0; i < planets.results.length; i++) {
			  try {
				const resp = await fetch(planets.results[i].url);
				const data = await resp.json();
				planets.results[i].properties = data?.result?.properties;
			  } catch (error) {
				console.log(error);
			  }
			}
			setStore({
			  planets: planets,
			});
		  } catch (error) {
			console.log(error);
		  }
		},
  
		addFavorite: (favorite) => {
		  const { favorites } = getStore();
		  setStore({
			favorites: [...favorites, favorite],
		  });
		},
  
		deleteFavorite: (index) => {
		  const { favorites } = getStore();
		  const updatedFavorites = favorites.filter((favorite, i) => i !== index);
		  setStore({
			favorites: updatedFavorites,
		  });
		},
	  },
	};
  };
  
  export default getState;
  