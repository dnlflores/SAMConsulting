import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navigation.css';

export default function Navigation() {
    const navigate = useNavigate()
    const navRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', updatePosition);

        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, [])

    return (
        <nav className={scrollPosition > 0 ? "nav-bar flx-ctr flx-jst-spc-btwn stick" : "nav-bar flx-ctr flx-jst-spc-btwn"} ref={navRef}>
            {/* <img className="logo" src={logo} alt="logo" /> */}
            <div className="logo">Placeholder</div>
            <div className="nav-links flx-ctr flx-jst-spc-arnd">
                <Link to='/'>HOME</Link>
                <Link to='/sessions'>ABOUT US</Link>
                <button style={{ color: "white" }} className="get-started-btn" onClick={() => navigate("/contact")}>GET STARTED</button>
                <span className="flx-ctr"><span className="material-symbols-outlined">phone_enabled</span>(951) 213-6741</span>
            </div>
        </nav>
    )
}