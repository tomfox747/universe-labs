//Libraries
import React,{useState,useEffect} from 'react'

//Components
import SearchBox from './components/SearchBox'
import ObjectList from './components/ObjectList'
import TimeZone from './components/TimeZone'
import UseTimeInterval from './hooks/UseTimeInterval'
import useApi from './hooks/useApi'

//Styling
import * as styles from './styles/AppStyles' 

const testData=[
  {
    Name:"US",
    TimeFormat:"UTC-11",
    Hours:-11,
    Mins:30
  },
  {
    Name:"France",
    TimeFormat:"UTC-3",
    Hours:3,
    Mins:0
  },
  {
    Name:"UK",
    TimeFormat:"UTC-0",
    Hours:0,
    Mins:-30
  },
  {
    Name:"US",
    TimeFormat:"UTC-11",
    Hours:-11,
    Mins:30
  },
  {
    Name:"France",
    TimeFormat:"UTC-3",
    Hours:3,
    Mins:0
  },
  {
    Name:"UK",
    TimeFormat:"UTC-0",
    Hours:0,
    Mins:-30
  },
  {
    Name:"US",
    TimeFormat:"UTC-11",
    Hours:-11,
    Mins:30
  },
  {
    Name:"France",
    TimeFormat:"UTC-3",
    Hours:3,
    Mins:0
  },
  {
    Name:"UK",
    TimeFormat:"UTC-0",
    Hours:0,
    Mins:-30
  }
]


function App() {
  const {get} = useApi()
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() =>{
    let didCancel = false
    
    const call = () =>{
      get('http://localhost:8000/data/get',query, (res) =>{
        if(res !== null && res !== undefined && didCancel !== true){
          setData(res);
        }
      })
    }

    if(!didCancel){
      call();
    }

    return(() =>{
      didCancel = true;
    })
},[query])

  return (
    <div style={styles.appContainer}>
      <div style={styles.searchBoxContainer}>
        <SearchBox query={query} setQuery={setQuery}/>
      </div>
      <div style={styles.objectListContainer}>
        <ObjectList type={TimeZone} data={data}/>
      </div>
    </div>
  );
}

export default App;
