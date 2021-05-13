import React,{useState, useEffect} from 'react'

const UseTimeInterval = () =>{
    const [time, setTime] = useState('')

    useEffect(() =>{
        const interval = setInterval(() => {
            let cur_date = new Date()
            setTime(cur_date)
        }, 1000);
        return () => clearInterval(interval);
    },[])

    return{
        time
    }
}

export default UseTimeInterval