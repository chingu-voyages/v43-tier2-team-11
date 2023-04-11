import axios from 'axios'
import NoImage from "../../assets/illustrations/noimage.svg"

const headers = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": import.meta.env.VITE_FOURSQUARE_API_KEY
    }
}
const LENGTH = 0
const BASEURL = import.meta.env.VITE_FOURSQUARE_BASE_URL
let parameters = {
    query: "food",
    ll: "",
    near: "",
    open_now: 'true',
    sort: 'DISTANCE'
}

const getShopData = async (props) => {
    const shopData = []
    for (let i = LENGTH; i < props['data']['results']['length']; i++) {
        const shopId = props['data']['results'][i]['fsq_id']
        await axios.get(`${BASEURL}/${shopId}/photos?limit=1&sort=POPULAR`, headers).then((res) => {
            const dataArray = res['data'][LENGTH]
            if (res['data'].length === LENGTH) {
                shopData.push({ imagesUrl: NoImage, shopId: shopId, geocodes: props['data']['results'][i]['geocodes'], location: props['data']['results'][i]['location'], name: props['data']['results'][i]['name'], categories: props['data']['results'][i]['categories'] })
            } else {
                shopData.push({ imagesUrl: dataArray['prefix'] + 'original' + dataArray['suffix'], shopId: shopId, geocodes: props['data']['results'][i]['geocodes'], location: props['data']['results'][i]['location'], name: props['data']['results'][i]['name'], categories: props['data']['results'][i]['categories'] })
            }
        }).catch(() => {
            return window.location.href('/noResults')
        })
    }
    return shopData
}

export const getLocation = async (props) => {
    const options = {
        method: 'GET',
        url: `${BASEURL}/search`,
        params: { near: props },
        headers: headers['headers']
    };
    return await axios.request(options).then(function (response) { return response['data']['context']['geo_bounds']['circle']['center'] }).catch(function () { return window.location.href('/noResults') });
}

export const getMapData = async (coords) => {
    parameters['ll'] = coords
    const getData = await axios.get(BASEURL + '/search?' + new URLSearchParams(parameters), headers)
    return await getShopData(getData)
}

export const getSearchData = async (props) => {
    if (props['cityName'] !== '') {
        parameters['ll'] = ""
        parameters['near'] = props['cityName']
    }
    const getData = await axios.get(BASEURL + '/search?' + new URLSearchParams(parameters), headers)
    const fetchData = getShopData(getData)
    return await fetchData
}