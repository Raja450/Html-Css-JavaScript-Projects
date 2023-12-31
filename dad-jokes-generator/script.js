const btnEl = document.getElementById("btn")
const jokeEl =document.getElementById("joke")

const apiKey = "npyyurd7lnsdb3PPfZnqLQ==Y3jIgmw7A46NJyQv";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
};

const apiUrl= "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = "true";
    btnEl.innerText = "Loading...";
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    
    btnEl.disabled = "false";
    btnEl.innerText = "Tell me a joke";
    jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later"
    }
    
}

btnEl.addEventListener("click", getJoke)