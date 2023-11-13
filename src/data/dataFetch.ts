export const getImage = async () => {
    try {
      const images = await fetch(
        "https://api.thecatapi.com/v1/images/search?api_key=live_8WrPqIShey1Rug8wdU3AeeZZtQnUN99cA7XXnkh1rtJ0nGqSPJm9zsiEVUzU6YwS"
      ).then((res) => res.json());
      return images;
    } catch (error) {
      console.error(error);
    }
  };

  export const getJoke = async () => {
    try {
      const jokeResponse = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      }).then((res) => res.json());
  
      return jokeResponse.joke;
    } catch (error) {
      console.error(error);
    }
  };