let searchButton = document.getElementById("submitSearch");
let searchInput = document.getElementById("searchWord");
let imageElement = document.querySelector("#imageContainer img");
let API_KEY = "lT1OX1tJuBxsyoeU6kKHZaqKvjJ0D4cz";
let API_URL = "https://api.giphy.com/v1/gifs/translate";

searchButton.addEventListener("click", function(){
    let searchTerm = searchInput.value.trim();
    if (!searchTerm) return;

    fetch(`${API_URL}?api_key=${API_KEY}&s=${searchTerm}`)
        .then(function(response) { return response.json(); })
        .then(function(data){
            if (data.data && data.data.images && data.data.images.original){
                imageElement.src = data.data.images.original.url;
            } 
            else{
                throw new Error("No image found for this search term.");
            }
            searchInput.value = "";
        })
        .catch(function(error){
            console.error("Error fetching data:", error);
            imageElement.src = "#";
        });
});
