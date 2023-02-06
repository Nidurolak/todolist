function CustomButton(props){
  const{ background,color, width, height, onClick, children} = props
  if(color){
    return(
      <button
      style={{background:background, color: color, width:width, height : height}}
      onClick={onClick}>
      {children}</button>
    )
  }
  return<button onClick={props.onClick}> {props.children}</button>
}


export default CustomButton;