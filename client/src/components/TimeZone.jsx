import React,{useState} from 'react'
import dayjs from 'dayjs'
import UseTimeInterval from '../hooks/UseTimeInterval'

//styles
import * as styles from '../styles/TimezoneStyles'

const TimeZone = (props) =>{
    const {time} = UseTimeInterval()

    let timeFormat = props.element.Name.split(" ").pop();
    let Name = props.element.Name.slice(0 , props.element.Name.length - timeFormat.length);

    let localTime = dayjs()
                    .add(parseInt(props.element.Hours), 'hour')
                    .add(parseInt(props.element.Mins),'minute')
                    .format('HH:mm:ss')

    return(
        <div style={styles.container}>
            <div style={styles.infoContainer}>
                <div style={styles.bold}>{Name}</div>
                <div style={styles.faded}>{timeFormat}</div>
            </div>        
            <div style={styles.timeContainer}>
                <div style={styles.bold}>
                    {localTime}
                </div>
            </div>
        </div>
    )
}

export default TimeZone