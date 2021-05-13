import React,{useState} from 'react'

//Styles
import * as styles from '../../styles/Shared';

const Button = (props) =>{
    const [hover, setHover] = useState(false)

    return(
        <div>
            <button 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => props.OnClick()} 
                style={hover ? styles.buttonHover : styles.button}
            >
                {props.children}
            </button>
        </div>
    )
}

export default Button