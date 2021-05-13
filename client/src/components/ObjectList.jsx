import React from 'react'

const ObjectList = ({type,data,time}) =>{   
    return(
        <div style={container}>
            {
                data.map((element,index) =>{
                    return(React.createElement(
                        type,
                        {element:element},
                        {key:"timeZones"+index}
                    ))
                })
            }
        </div>
    )
}

const container={
    flex:1
}

export default ObjectList