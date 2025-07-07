const ListIcon = ({href, icon}) => {
  return (
      <li>
        <a href={href} 
          target="_blank" 
          rel='noreferrer' 
          >
            <i className={`fab ${icon}`}></i>
        </a>
      </li>
  )
}

export default ListIcon
