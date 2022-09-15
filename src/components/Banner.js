import logo from '../assets/logo.png'
import '../styles/Banner.css'
const Banner = () => {
    return (
    <div className="banner">
        <img src={logo} alt="logo" className='logo'/>
        <h1 className='title'>La home jungle </h1>
    </div>
    )

}

export default Banner