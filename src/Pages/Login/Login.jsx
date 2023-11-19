import { useState } from "react";
import Background from "../../assets/Background.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex bg-blue-600 h-screen">
        <div className="flex-1 bg-cover " style={{ backgroundImage: `url(${Background})` }}></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="max-w-md w-full p-10 bg-white rounded-xl shadow-md">
            <h2 className="text-center text-xl font-bold">Login</h2>
            <form className="w-full" action="">
              <div className="login-form">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Enter your Username" name="username" required />
                <label htmlFor="password">Password</label>
                <div className="password-input-container">
                  <input
                    id="pass"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="cursor-pointer absolute bg-black"
                  >
                    {showPassword ? <AiOutlineEyeInvisible style={{color:"white"}}/> : <AiOutlineEye style={{color:"white"}} />}
                  </button>
                </div>
                <div className="text-center mt-3">
                  <button className="text-white pointer w-2/4 p-3 bg-blue-500 rounded"type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
