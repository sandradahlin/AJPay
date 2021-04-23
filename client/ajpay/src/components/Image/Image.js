import Image from 'material-ui-image'

export const ImageM = (props)=>{
    return(
    <Image src={props.src} alt={props.alt} 
        imageStyle={{width: '200px', height: '200px'}}
        style={{paddingTop: '200px',width: '200px', height: 'auto', margin: '0 auto'}}
        iconContainerStyle= {{width: '200px', height: '200px'}}
        />)
}
