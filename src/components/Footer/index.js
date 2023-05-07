import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="flx-ctr flx-col">
            <h1>HVAC/R CONSULTING FOR RESIDENTIAL AND LIGHT COMMERCIAL</h1>
            <ul>
                <li>Bonded, Licensed, and Insured</li>
                <li>We Can Repair All Models</li>
                <li>Industry Experts</li>
                <li>Flawless Safety Record</li>
                <li>Customer Satisfaction Is Our Top Priority</li>
            </ul>
            <p className="flx-ctr">© 2010-2021</p>
            <Link to='/sessions'>Privacy</Link>
            <span>--</span>
            <Link to='/sessions'>Terms</Link>
        </footer>
    )
}