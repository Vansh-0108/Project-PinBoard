import './Header.scss'

function Header() {
  return (
    <nav className="nav">
        <div className='title'>Mini-Project PinBoard</div>

        <div className="left">
            <div className='sort'>Sort By</div>
            <div className='sort'>Filter By</div>
        </div>
    </nav>
  )
}

export default Header