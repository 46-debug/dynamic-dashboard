"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        router.push("/dashboard");
    }
}, [router]);


  const Email = email;
  const index = Email.indexOf("@");
  const Name = Email.slice(0, index);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const mockToken = "mock-jwt-token-123";
    localStorage.setItem("token", mockToken);
    localStorage.setItem("name", Name);

    router.push("/dashboard");
  };

  return (
    <form
      className='bg-gray-200 flex flex-col w-[90%] 
  sm:w-1/2 rounded-xl p-8 gap-5 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
      <h2 className='text-2xl text-blue-600'>Login to continue</h2>
      <label className='flex flex-col' htmlFor="email">Email
        <input onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="name@exampli.com"
          className='rounded-md border border-black p-1.5 outline-none text-blue-600' type="text" />
      </label>
      <label className='flex flex-col' htmlFor="password">Password
        <input onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="********"
          className='rounded-md border border-black p-1.5 outline-none text-blue-600' type="password" />
      </label>
      <button onClick={handleLogin} className='bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-xl'>Login</button>
      <h4 className="text-red-500 text-center">{error}</h4>
    </form>
  )
};

export default Login;