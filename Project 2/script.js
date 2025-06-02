// Define an asynchronous function to fetch Pokémon data
const fetchData = async () => {
    try {
        // Get the selected Pokemon name from the dropdown and convert it to lowercase
        const pokemonName = document.getElementById("pokemon-select").value.toLowerCase();

        // Fetch data from the Poke API for the selected Pokémon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        // Check if the response is not OK
        if (!response.ok) {
            throw new Error("An error occurred!");
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Get the front sprite image URL of the Pokemon
        const pokemonSprite = data.sprites.front_default;

        // Select the image element in the HTML
        const imageElement = document.getElementById("pokemonSprite");

        // If the image element exists, update its source and make it visible
        if (imageElement) {
            imageElement.src = pokemonSprite;
            imageElement.style.display = "block";
        }
    } catch (error) {
        // Log any errors to the console
        console.error(error);
    }
};
