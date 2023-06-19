export function Image({userName}){
  return(
    <div className="gallery-card-image">
      <img src={`https://unavatar.io/${userName}`} alt=""/>
    </div>
  )
}
