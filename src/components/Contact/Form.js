export default function Form() {

    return (
        <section className="form-sect">
            <div className="left-container">
                <div className="form-container flx-col">
                    <div className="flx-col address">
                        <p>OFFICE</p>
                        <p>1622 LA MESA DR </p>
                        <p>LA VERNE, CA 91750</p>
                    </div>
                    <div className="flx-col email">
                        <p>EMAIL</p>
                        <p>TRINAMILLERTHERAPYCARE@GMAIL.COM</p>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <h2 className="what-to text">GET</h2>
                <h2 className="expect text">STARTED</h2>
                <form className="start-form flx-col">
                    <div className="form-field flx-col">
                        <label>Name</label>
                        <div className="first-last-input" style={{ display: 'flex' }}>
                            <input type="text" name="first" placeholder="First" className="first" />
                            <input type="text" name="last" placeholder="Last" className="last" />
                        </div>
                    </div>
                    <div className="form-field flx-col">
                        <label>Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="form-field flx-col">
                        <label>Subject</label>
                        <input type="text" name="subject" />
                    </div>
                    <div className="form-field flx-col">
                        <label>Message</label>
                        <textarea />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </section>
    )
}