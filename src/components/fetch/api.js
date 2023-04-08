import axios from 'axios'
import _ from 'lodash';

const headers = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": import.meta.env.VITE_FOURSQUARE_API_KEY
    }
}
const LENGTH = 0
const BASEURL = 'https://api.foursquare.com/v3/places'
let parameters = {
    query: "food",
    ll: "",
    near: "",
    open_now: 'true',
    sort: 'DISTANCE'
}

export const getShopData = async (props) => {
    const shopData = []
    for (let i = 0; i < props['data']['results']['length']; i++) {
        const shopId = props['data']['results'][i]['fsq_id']
        await axios.get(`https://api.foursquare.com/v3/places/${shopId}/photos?limit=1&sort=POPULAR`, headers).then((res) => {
            const dataArray = res['data'][LENGTH]
            shopData.push({ imagesUrl: dataArray['prefix'] + 'original' + dataArray['suffix'], shopId: shopId, geocodes: props['data']['results'][i]['geocodes'], location: props['data']['results'][i]['location'], name: props['data']['results'][i]['name'], categories: props['data']['results'][i]['categories'] })
        }).catch((error) => {
            return error
        })
    }
    return shopData
}

export const getMapData = async (coords) => {
    parameters['ll'] = coords
    const getData = await axios.get(BASEURL + '/search?' + new URLSearchParams(parameters), headers)
    return await getShopData(getData)
}

export const getSearchData = async (props) => {
    if (props['categoryName'] !== '' && props['cityName'] !== '') {
        parameters['ll'] = ""
        parameters['near'] = props['cityName']
        parameters['query'] = props['categoryName']
    }
    if (props['cityName'] !== '' && props['categoryName'] === '') {
        parameters['ll'] = ""
        parameters['near'] = props['cityName']
    }
    if (props['categoryName'] !== '' && props['cityName'] === '') {
        parameters['ll'] = props['coords']
        parameters['query'] = props['categoryName']
    }
    const getData = await axios.get(BASEURL + '/search?' + new URLSearchParams(parameters), headers)
    return await getShopData(getData)
}