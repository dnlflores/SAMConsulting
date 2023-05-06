import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return (
        <div className="home-header flx-ctr flx-col flx-algn-itm-strt">
            <h2 style={{ margin: '0' }}>CONSULTING SERVICES</h2>
            <h1 style={{ marginBottom: '0', fontSize: '65px', fontWeight: '700' }}>MAXIMIZE</h1>
            <h1 style={{ marginTop: '0', fontSize: '65px', fontWeight: '300' }}>YOUR HVAC INVESTMENT</h1>
            <p style={{ marginBottom: '0', fontSize: '20px' }}>Sometimes the smallest step in the right direction, ends up being the biggest step of your life.</p>
            <h2 style={{ marginTop: '0', fontSize: '50px' }}>Quality Inspections</h2>
            <div className="header-btns">
                <button onClick={() => navigate('/contact')}>GET STARTED</button>
                <button onClick={() => navigate('/sessions')}>LEARN MORE</button>
            </div>
        </div>
    )
}