import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

export default function Footer() {

    return (
        <footer className="flx-ctr flx-col">
            <img src={logo} alt="logo" />
            <p className="flx-ctr">© 2010-2021</p>
            <Link to='/sessions'>Privacy</Link>
            <span>--</span>
            <Link to='/sessions'>Terms</Link>
        </footer>
    )
}