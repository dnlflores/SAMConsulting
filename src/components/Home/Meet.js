export default function Meet() {

    return (
        <section className="meet-sec flx-ctr flx-col">
            <div className="title-pic flx-ctr">
                <div className="left-side">
                    <div className="meet-title-div">
                        <h2 style={{ color: '#8C52FF', marginBottom: '0' }}>MEET</h2>
                        <h2 style={{ marginTop: '0' }}>TRINA MILLER</h2>
                    </div>
                    <p>
                        I want people to enjoy their lives and have hope for the future. 
                        Life can be pretty difficult at times and my ultimate goal is to help people get through the challenging times of their lives and feel better.
                    </p>
                </div>
                <div className="image-background">
                    <img className="counselor-image" src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8`} />
                </div>
            </div>
        </section>
    )
}