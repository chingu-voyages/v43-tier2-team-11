import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Search from "../assets/Search"
import Discovery from "../assets/Discovery"
import { getSearchData, getLocation } from "./services/api"
import classes from "./FormInput.module.scss"
import { useLocation } from "react-router-dom";

const SUGGESTIONS = [
    { id: "og", location: "Australia", capital: "Canberra" },
    { id: "ind", location: "Indonesia", capital: "Jakarta" },
    { id: "ph", location: "Philippines", capital: "Manila" },
    { id: "kr", location: "Korea", capital: "Seoul" },
    { id: "jpn", location: "Japan", capital: "tokyo" },
]

const FormInput = ({ setLoading }) => {
    let locationRef = useRef()
    const navigateTo = useNavigate()
    const [searchData, setSearchData] = useState([])
    const [suggestedLocations, setSuggestedLocations] = useState([])
    const [checked, setChecked] = useState(false)
    const toggleChecked = () => setChecked(value => !value)
    const pathname = useLocation().pathname;

    const getShopDataAndShopLocation = (cityName) => {
        setChecked(false)
        setLoading(true)
        getSearchData({ cityName: cityName }).then((res) => {
            setSearchData(res)
            setLoading(false)
        })
        getLocation(cityName).then((res) => {
            setSuggestedLocations(res)
        }).catch(() => {
            setSearchData([])
            if (pathname === '/noResults') {
                return window.location.reload();
            } else {
                return navigateTo('/noResults')
            }
        })
    }

    const getSearchDataHandler = () => {
        const cityName = locationRef.current?.value
        if (!cityName) return
        getShopDataAndShopLocation(cityName)
    }

    useEffect(() => {
        if (searchData.length !== 0 && suggestedLocations !== '') {
            navigateTo("/map", { state: { searchData, suggestedLocations } })
        }
    }, [searchData, suggestedLocations])

    const suggestedLocationsList = SUGGESTIONS.map((el) => {
        const moveToSuggestedCityHandler = () => {
            const cityName = el.capital
            if (!cityName) return
            getShopDataAndShopLocation(cityName)
        }
        return (
            <li key={el.id} onClick={moveToSuggestedCityHandler}>
                <Discovery className={classes['location__discovery-icon']} />
                <span className={classes['location__suggested']}>{el.location}</span>
            </li>
        )
    })

    return (
        <section className={classes['form']}>
            <div className={classes['location']}>
                <form className={classes['location__form']}>
                    <div onClick={() => getSearchDataHandler()}><Search className={classes['location__search-icon']} /></div>
                    <input
                        type="text"
                        placeholder="Search for location..."
                        className={classes['location__input']}
                        ref={locationRef}
                        onClick={toggleChecked}
                        onKeyDown={(e) => {
                            if (e.key == 'Enter') {
                                e.preventDefault()
                                getSearchDataHandler()
                            }
                        }
                        }
                    />
                </form>
            </div>
            {checked ?
                <div className={classes['location__bx']}>
                    <h3 className={classes['location__headLine']}>Suggested Locations</h3>
                    <hr className={classes['location__border']} />
                    <ul className={classes['location__ul']}>{suggestedLocationsList}</ul>
                </div> : ''}
        </section>
    )
}
export default FormInput;