import { useState } from "react";
import { send } from "emailjs-com";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        const content = {
            from_name: name,
            to_name: "Siempre A&M Consulting",
            reply_to: email,
            subject,
            message: description
        }

        send(
            'service_nk490cl',
            'template_faafeqg',
            content,
            'djOzJi5vuYnia2CRC'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setName("");
                setEmail("");
                setSubject("");
                setDescription("");
                navigate("/");
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <section className="form-sect">
            <div className="left-container">
                <div className="form-container flx-col">
                    <div className="flx-col address">
                        <p>OFFICE</p>
                        <p>6924 MIAMI ST</p>
                        <p>RIVERSIDE, CA 92506</p>
                    </div>
                    <div className="flx-col email">
                        <p>EMAIL:</p>
                        <p>SIEMPREAMCONSULTING@GMAIL.COM</p>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <h2 className="expect text">GET</h2>
                <h2 className="expect text">STARTED</h2>
                <form className="start-form flx-col" onSubmit={handleSubmit}>
                    <div className="form-field flx-col">
                        <label>Name/Company</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-field flx-col">
                        <label>Email</label>
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-field flx-col">
                        <label>Subject</label>
                        <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    </div>
                    <div className="form-field flx-col">
                        <label>Message</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </section>
    )
}