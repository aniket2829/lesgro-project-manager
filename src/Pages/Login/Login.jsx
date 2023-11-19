// Login Page here
import Background from "../../assets/Background.png"

export default function Login() {
    return (
        <>
        <div className="flex bg-blue-600 h-screen">
            <div className="flex-1" style={{backgroundImage:`url(${Background})`}}>
                
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div className="max-w-md w-full p-10 bg-white rounded-xl shadow-md">
                    <h2 className="text-center text-xl font-bold">Login</h2>
                <form className="w-full" action="">
                    <div className="login-form">
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