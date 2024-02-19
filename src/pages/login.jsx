import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    //useNavigate hook
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!name || !email) return;
        setUser({name: name, email: email});
        //onSubmit the form, navigate to user dashboard using useNavigate hook;
        navigate('/dashboard');
    }

    return(
        <section className="section">

            <form onSubmit={handleSubmit} className="form">
                <h5>Login</h5>
                <div className="form-row">
                    <label htmlFor="name" className="form-label" >
                        Name
                    </label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value) } required className="form-input" />
                </div>

                <div className="form-row">
                    <label htmlFor="email" className="form-label" >
                        Email
                    </label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value) } required className="form-input" />
                </div>

                <button type="submit" className="btn btn-block">Login</button>

            </form>
        </section>
    )
}
export default Login;