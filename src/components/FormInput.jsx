import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Search from "../assets/Search"
import Discovery from "../assets/Discovery"
import { getSearchData, getLocation } from "./fetch/api"
import classes from "./FormInput.module.scss"

const SUGGESTIONS = [
    { id: "og", location: "Australia", capital: "Canberra" },
    { id: "ind", location: "Indonesia", capital: "Jakarta" },
    { id: "ph", location: "Philippines", capital: "Manila" },
    { id: "kr", location: "Korea", capital: "Seoul" },
    { id: "jpn", location: "Japan", capital: "tokyo" },
]

const FormInput = (props) => {
    const { setLoading } = props
    const locationRef = useRef()
    const navigateTo = useNavigate()
    const [searchData, setSearchData] = useState([])
    const [suggestedLocations, setSuggestedLocations] = useState([])
    const [openSuggestedLocations, setOpenSuggestedLocations] = useState(false)
    const cityName = locationRef.current?.value

    const onsearchHandler = () => {
        if (cityName !== '') {
            const searchObj = { cityName: locationRef.current?.value }
            getSearchData(searchObj).then((res) => {
                setSearchData(res)
                setLoading(false)
            })
        } else {
            return
        }
    }
    const getSuggestedLocations = () => {
        if (cityName !== '') {
            setOpenSuggestedLocations(false)
            getLocation(cityName).then((res) => {
                setSuggestedLocations(res)
            }).catch(() => {
                setSearchData([])
            })
        } else {
            return
        }
    }

    useEffect(() => {
        if (searchData['length'] !== 0 && suggestedLocations !== '') {
            navigateTo("/map", { state: { searchData, suggestedLocations } })
        }
    }, [searchData, suggestedLocations])

    const suggesteKeyWordToggle = () => {
        if (openSuggestedLocations) {
            setOpenSuggestedLocations(false)
        } else {
            setOpenSuggestedLocations(true)
        }
    }

    const suggestedLocationsList = SUGGESTIONS.map((el) => {
        const moveToSuggestedCityHandler = () => {
            setOpenSuggestedLocations(false)
            const searchObj = { cityName: el.capital }
            setLoading(true)
            getSearchData(searchObj).then((res) => {
                setSearchData(res)
                setLoading(false)
            })
            getLocation(el.capital).then((res) => {
                setSuggestedLocations(res)
            }).catch(() => {
                setSearchData([])
            })
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
                    <div onClick={() => { onsearchHandler(); getSuggestedLocations() }}><Search className={classes['location__search-icon']} /></div>
                    <input
                        type="text"
                        placeholder="Search for location..."
                        className={classes['location__input']}
                        ref={locationRef}
                        onClick={suggesteKeyWordToggle}
                        onKeyDown={(e) => {
                            if (e.key == 'Enter') {
                                e.preventDefault()
                                onsearchHandler(); getSuggestedLocations()
                            }
                        }
                        }
                    />
                </form>
            </div>
            {openSuggestedLocations ?
                <div className={classes['location__bx']}>
                    <h1 className={classes['location__title']}>Suggested Locations</h1>
                    <hr className={classes['location__border']} />
                    <ul className={classes['location__ul']}>{suggestedLocationsList}</ul>
                </div> : ''}
        </section>
    )
}
export default FormInput;