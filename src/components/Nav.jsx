function Nav(props) {
  return (
     <div>
      <nav>
        <ul className="flex flex-between">
          {props.navLinks.map(navLink => (
            <li key={navLink.key}><a href={navLink.url}>{navLink.name}</a></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Nav;