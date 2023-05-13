import axios from "axios";

export const options = {
    method: "GET",
    url: "https://quotient.p.rapidapi.com/equity/dividends",

    headers: {
        "X-RapidAPI-Key": "2d98797595mshe896326d2ab7ba7p174ab6jsnb675b5ea9a7f",
        "X-RapidAPI-Host": "quotient.p.rapidapi.com",
    },
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}
