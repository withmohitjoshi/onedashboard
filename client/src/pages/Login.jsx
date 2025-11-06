import { useState } from 'react'

const Login = () => {
  const [state, setstate] = useState({
    email: '',
    password: '',
  })
  const { email, password } = state
  const handleOnChange = e => {
    const { name, value } = e.target
    setstate({ ...state, [name]: value })
  }
  return (
    <div className="w-full flex items-center justify-center h-screen ">
      <form className="p-10 flex flex-col gap-6 rounded shadow bg-gray-800 text-white min-w-lg">
        <h1 className="text-5xl text-center font-bold">Login</h1>
        <div className="flex gap-2 flex-col">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-4 border-2 rounded-xl outline-none border-gray-700"
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-4 border-2 rounded-xl outline-none border-gray-700"
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <button
          type="submit"
          className="bg-neutral-700 p-4 rounded-xl hover:shadow-2xl transition-shadow cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
