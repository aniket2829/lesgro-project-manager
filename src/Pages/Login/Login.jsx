// Login Page here
import Background from "../../assets/Background.png"

export default function Login() {
    return (
        <>
        <div className="container">
            <div className="left-bg" style={{backgroundImage:`url(${Background})`}}>
                
            </div>
            <div className="right-bg">
                <div className="login-form">
                    <h2>Login</h2>
                <form action="">
                    <div className="p:30px">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Enter your Username" name="username" required/>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter your Password" name="password" required />
                        <button>Submit</button>
                        
                    </div>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}