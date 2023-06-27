import './style.css'
import Logo from '../../assests/Logo1.png'
export function Header () {
  return (
    <div className="Header">
      <div className='logo'>
        <img src={Logo} alt="" />
      </div>
   
    <div><p>Informaçoes</p></div>
    </div>
  )
}