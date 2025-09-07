import React, { useContext, useState } from 'react'
import {assets} from "../../assets/assets"
import axios from "axios"
import {baseURL} from "../../Utils/service"
import { classNameForaAccountUser, inputData } from './ClassName'
import { authContext } from '../../Context/Context'
import { Link, useNavigate } from 'react-router-dom'

const AccountForm = () => {
  const [checkLoginOrRegister,setcheckLoginOrRegister] = useState(false)
  const [handleInputData, sethandleInputData] =useState({})
  const [errorHandling,seterrorHandling] = useState(false)
  const {setuser ,user} = useContext(authContext)
  const navigate = useNavigate()
  const onInputFieldChange = (e)=>{
    const val = e.target.value
    sethandleInputData(prev =>({...prev,[e.target.name]:val}))
}
console.log(baseURL)
  const OnFormSubmit =async (e)=>{
    e.preventDefault()
    try {
      const res = await axios.post(`${baseURL}/auth/${!checkLoginOrRegister?"login":"register"}`,handleInputData);
      localStorage.setItem("token",res.data.token)
      console.log(res)
      localStorage.setItem("user", JSON.stringify(res.data.userExist));
      
      setcheckLoginOrRegister(false)
      seterrorHandling(false)
      navigate("/")
      window.location.reload()
      

    } catch (error) {
      seterrorHandling(true)
    }
  }
 console.log(user)
  return (
    <div className="min-h-screen relative w-full flex lg:flex-row ">
      <img
        src={assets.shopping}
        className="h-[500px] hidden absolute  lg:block z-20 bottom-7 left-[50%] "
        alt=""
      />
      <Link to={"/"}>
        <button className="absolute z-50 top-6 left-7 bg-orange-500 py-3 px-4 rounded-xl cursor-pointer text-sm font-medium text-white">
          Go Home ⬅️
        </button>
      </Link>
      <div className="h-screen flex-1 p-4 bg-gray-100 relative flex  justify-center items-center">
        <div className={classNameForaAccountUser}>
          {errorHandling && (
            <p className="text-sm text-red-900 text-center">
              Invalid credintials*
            </p>
          )}
          <h1 className="text-3xl mb-3 text-[rgb(247,137,27)] font-semibold">
            <span>{!checkLoginOrRegister ? "Login" : "SignUp"}</span> Here
          </h1>
          <div>
            <p className="text-sm text-slate-500/70 font-normal">
              welcome back !!!
            </p>
            <h1 className="text-4xl font-medium mb-4">
              {!checkLoginOrRegister ? "Sign in" : "Sign Up"}
            </h1>
            <form onSubmit={OnFormSubmit} action="">
              <div className="w-[100%]">
                {checkLoginOrRegister && (
                  <>
                    <label
                      className="text-sm text-slate-500/70 font-normal"
                      htmlFor="email"
                    >
                      name
                    </label>
                    <br />
                    <div className=" h-fit py-3 px-3 bg-slate-200 rounded-xl  flex items-center gap-2">
                      <img src={assets.profile} className="h-[30px] " alt="" />
                      <input
                        onChange={(e) => onInputFieldChange(e)}
                        className="text-sm text-slate-500/70 font-normal outline-none py-2 px-3 rounded-lg w-full"
                        id="email"
                        name="name"
                        type="text"
                      />
                    </div>
                    <br />
                  </>
                )}

                {inputData?.map((elm, idx) => (
                  <>
                    <label
                      className="text-sm text-slate-500/70 font-normal"
                      htmlFor="email"
                    >
                      {elm.type}
                    </label>
                    <br />
                    <div className=" h-fit py-3 px-3 bg-slate-200 rounded-xl  flex items-center gap-2">
                      <img src={elm.img} className="h-[30px] " alt="" />
                      <input
                        className="text-sm text-slate-500/70 font-normal outline-none py-2 px-3 rounded-lg w-full"
                        onChange={(e) => onInputFieldChange(e)}
                        id={elm.type}
                        name={elm.type}
                        type={elm.type}
                        placeholder={elm.placeholder}
                      />
                    </div>
                    <br />
                  </>
                ))}

                <button className="bg-orange-200 py-3 px-4 rounded-xl  my-5 block mx-auto cursor-pointer text-white font-medium ">
                  SIGN IN ➡️
                </button>
              </div>
            </form>
          </div>
          <p className="text-sm text-center text-slate-500/70 font-normal">
            i dont have and account?{" "}
            <span
              onClick={() => setcheckLoginOrRegister(!checkLoginOrRegister)}
              className="text-orange-300 cursor-pointer"
            >
              {!checkLoginOrRegister ? "sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
      <div className="h-screen  hidden lg:block w-[40%] bg-[rgb(245,218,225)]"></div>
    </div>
  );
}

export default AccountForm
