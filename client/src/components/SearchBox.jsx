import React,{useState} from 'react'
import {FiSearch} from 'react-icons/fi'

//Styles
import * as styles from '../styles/SearchboxStyles'

//Components
import Button from '../components/Shared/Button'

const SearchBox = ({query, setQuery}) =>{
    const [selected, setSelected] = useState(false)

    const filterData = () =>{
        setSelected(false)
    }

    return(
        <div 
            onFocus={() => setSelected(true)} 
            onBlur={() => setSelected(false)} 
            style={selected ? styles.selectedContainer : styles.container}
        >
            <div style={styles.iconContainer}>
                <Button OnClick={filterData}>
                    <FiSearch style={{fontSize:'25px'}}/>
                </Button>
            </div>
            <div style={styles.searchContainer}>
                <input 
                    onChange={(e) => setQuery(e.target.value)} 
                    type="text" value={query} placeholder="Search" 
                    style={styles.input}
                />
            </div>
        </div>
    )
}

export default SearchBox