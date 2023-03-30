import axios from 'axios'

export const mapData = async (coords) => {
    const BASEURL = 'https://api.foursquare.com/v3/places/search?'
    const parameters = {
        query: "food",
        ll: coords,
        open_now: 'true',
        sort: 'DISTANCE'
    }
    return await axios
        .get(BASEURL + new URLSearchParams(parameters), {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
                "Authorization": import.meta.env.VITE_FOURSQUARE_API_KEY
            },
        })
}