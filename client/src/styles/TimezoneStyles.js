import * as flex from './FlexBox'

export const container={
    ...flex.mid,
    height:'160px',
    boxShadow:'2px 2px 10px #D2D2D2',
    borderRadius:'5px',
    marginTop:'20px'
}

export const infoContainer={
    flex:1,
    flexDirection:'column',
    ...flex.midLeftCol,
    marginLeft:'20px',
}

export const timeContainer={
    flex:1,
    marginRight:'20px',
    ...flex.midRight
}

export const bold={
    fontSize:'18px',
    fontWeight:'700',
}

export const faded={
    fontSize:'14px',
    color:'#838383'
}