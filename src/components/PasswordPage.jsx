import { ChevronLeft } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { setUser } from "../features/authSlice";

const PasswordPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const regUsers = JSON.parse(localStorage.getItem("reg user")) || [];
  console.log(regUsers);

  const onLogin = (data) => {
    regUsers.map((user) => {
      if (user.email !== data.email) {
        toast.error("Invalid email enter again");
        reset();
        return;
      }

      if (user.email === data.email && user.password !== data.password) {
        toast.error("Incorrect Password enter again");
        reset();
        return;
      }

      if (user.email === data.email && user.password === data.password) {
        toast.success("Logged in");
        localStorage.setItem("log user", JSON.stringify(data))
        dispatch(setUser(data))
        reset();
        return;
      }
    });

    reset();
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex justify-center pt-25">
      <div className="w-85">
        <div>
          <ChevronLeft size={30} className="text-gray-400 cursor-pointer" />
        </div>
        <h1 className="font-bold text-2xl my-4 ">Log in with a password</h1>
        <form
          onSubmit={handleSubmit(onLogin)}
          className="flex flex-col gap-2 mt-8"
        >
          <p className="text-sm font-bold">Email or username</p>
          <input
            {...register("email")}
            type="text"
            className={`border w-full h-12 text-xl rounded  px-2  border-gray-500`}
          />
          <p className="text-sm font-bold">Password</p>
          <input
            {...register("password")}
            type="text"
            className={`border w-full h-12 text-xl rounded  px-2  border-gray-500`}
          />
          <button className="bg-[#22D963] text-lg font-bold h-12 rounded-full text-black w-full mt-5 cursor-pointer hover:scale-103 hover:bg-[#38d770]">
            Log in
          </button>
        </form>
        <p
          onClick={() => navigate("/")}
          className="text-center font-bold mt-15 cursor-pointer hover:scale-105 "
        >
          Log in without password
        </p>
      </div>
    </div>
  );
};

export default PasswordPage;
