import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { register } from '../../services/auth-services'

export const Register = () => {
  const navigate = useNavigate()
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    username: "",
    birthday: "",
    sexe: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "sexe") {
      setNewUser({ ...newUser, [name]: value === "femme" });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    await register(newUser)
      .then((response) => {
        alert(response.data.message)
        navigate('/login')
      })
      .catch((error) => {
        console.log(error)
        alert(error.response.data.message)
      })
  }

  return (
    <div className="flex mt-7 items-center justify-center">
      <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Create a new account
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already have an account ?
          <Link to="/login" className="text-sm text-blue-500 underline hover:text-blue-700">
            Sign in
          </Link>
        </span>
        <div className="p-6 mt-8">
          <form action="#" onSubmit={submitData}>
            <div className="flex flex-col mb-2">
              <div className="relative">
                <input
                  type="email"
                  id="create-account-email"
                  onChange={handleChange}
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="flex gap-4 mb-2">
              <div className="relative">
                <input
                  type="text"
                  id="create-account-user-name"
                  onChange={handleChange}
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="username"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="date"
                  id="create-account-birthday"
                  onChange={handleChange}
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="birthday"
                  placeholder="Birthday"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="relative">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="create-account-male"
                    onChange={handleChange}
                    className="form-radio"
                    name="sexe"
                    value="homme"
                    checked={!newUser.sexe}
                  />
                  <span className="ml-2">Homme</span>
                </label>
              </div>
              <div className="relative">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="create-account-female"
                    onChange={handleChange}
                    className="form-radio"
                    name="sexe"
                    value="femme"
                    checked={newUser.sexe}
                  />
                  <span className="ml-2">Femme</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="relative">
                <input
                  type="password"
                  id="create-account-password"
                  onChange={handleChange}
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="flex w-full my-4">
              <button
                type="submit"
                className="py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
