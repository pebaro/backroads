const SectionTitle = (props) => {
  const {main, span} = props
  
  return (
    <div className="section-title">
      <h2>{main} <span>{span}</span></h2>
    </div>
  )
}

export default SectionTitle