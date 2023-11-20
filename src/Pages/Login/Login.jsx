import { useState } from "react";
import Background from "../../assets/Background.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex bg-blue-600 h-[100vh]">
        <LeftComponent />
        <RightComponent />
      </div>
    </>
  );
}

function LeftComponent() {
  return (
    <div className="w-6/12 sm:block hidden">
      <img src={Background} className="object-cover h-[100vh]" alt="Left Side Image" />
    </div>
  )
}

function RightComponent() {
  return (
    <div className="flex items-center justify-center w-full sm:w-6/12">
      <div className="w-[300px] bg-white py-2 px-8 rounded-xl">
        <h1 className="text-2xl text-center my-4">Login</h1>
        <div>
          <input className="block w-full border-2 my-4 p-2 rounded" type="text" placeholder="Username"/>
          <input className="block w-full border-2 my-4 p-2 rounded" type="text" placeholder="Password"/>
        </div>
        <button className="bg-blue-500 block w-full p-2 text-white mb-6 rounded">Sign in</button>
      </div>
    </div>
  )
}