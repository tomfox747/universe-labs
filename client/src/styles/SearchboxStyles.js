import * as flex from '../styles/FlexBox'

export const container={
    flex:1,
    ...flex.mid,
    borderRadius:'5px',
    backgroundColor:'#F6F7F6',
    height:'60px',
}

export const selectedContainer={
    ...container,
    boxShadow:'2px 2px 10px #D2D2D2',
}

export const iconContainer={
    flex:1,
    ...flex.mid
}

export const searchContainer={
    height:'100%',
    flex:7,
    ...flex.midLeft,
    marginLeft:'5px'
}   

export const input={
    width:'90%',
    border:'none',
    backgroundColor:'#F6F7F6',
    fontSize:'18px',
    outline: 'none'
}