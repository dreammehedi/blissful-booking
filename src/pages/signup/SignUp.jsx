import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../auth/AuthProvider";
import Loader from "../../components/loader/Loader";
import GoogleLogin from "../../components/social_login/GoogleLogin";

function SignUp() {
  // auth user data
  const { user, userLoading } = useContext(AuthContext);

  // location
  const { state } = useLocation();

  // navigate after login
  const navigate = useNavigate();

  // auth functionality
  const { createNewUser, updateUserProfile } = useContext(AuthContext);

  // show password
  const [showPassword, setShowPassword] = useState(false);

  // show confirm password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // handle sign in form
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const profilePhoto = form.profilePhoto.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{6,}$/;

    // check all field are valid
    if (!userName || !profilePhoto || !email || !password || !confirmPassword) {
      toast.error("All Fields Must Be Required!");
      return;
    }

    // check password is strong or not
    if (!pattern.test(password)) {
      toast.error("Password Must Be Strong!");
      return;
    }

    // check password length
    if (password.length < 6) {
      toast.error("Password Must Be At Least 6 Characters!");
      return;
    }

    // check password & confirm password are same
    if (password !== confirmPassword) {
      toast.error("Password Not Same!");
      return;
    }

    // handle account creation
    createNewUser(email, password).then(() => {
      updateUserProfile(userName, profilePhoto)
        .then(() => {
          toast.success("Account Created!");
          navigate(state ? state : "/");

          form.reset();
        })
        .catch((err) => {
          if (err.message === "Firebase: Error (auth/email-already-in-use).") {
            toast.error("Email already in use!");
          } else {
            toast.error("Account Creation Failed!");
          }
        });
    });
  };

  // user already login navigate to home page
  if (userLoading) {
    return <Loader></Loader>;
  }
  if (user) {
    navigate("/");
    return;
  }

  return (
    <section className="container py-8 md:py-12 bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-center h-auto mx-auto ring-1 ring-slate-100 rounded-md hover:ring-primary my-transition p-4 md:p-8 w-full max-w-md">
        <form onSubmit={handleSignIn} className="w-full ">
          {/* logo */}
          {/* <Link to="/">
            <h1 className="text-center text-3xl font-bold text-primary font-dmsans">
              Blissful Bookings
            </h1>
          </Link> */}

          <h1 className="mt-6 text-center text-2xl font-semibold text-dark capitalize sm:text-3xl dark:text-white">
            Sign Up
          </h1>
          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              name="userName"
              type="text"
              className="block w-full px-10 py-3 text-dark bg-white rounded-lg dark:bg-gray-900 dark:text-gray-300 ring-1 ring-slate-100 focus:ring-primary outline-none "
              placeholder="Enter Your Name..."
            />
          </div>
          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </span>

            <input
              name="profilePhoto"
              type="text"
              className="block w-full px-10 py-3 text-dark bg-white rounded-lg dark:bg-gray-900 dark:text-gray-300 ring-1 ring-slate-100 focus:ring-primary outline-none "
              placeholder="Enter Your Profile PhotoURL..."
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              name="email"
              type="email"
              className="block w-full px-10 py-3 text-dark bg-white rounded-lg dark:bg-gray-900 dark:text-gray-300 ring-1 ring-slate-100 focus:ring-primary outline-none "
              placeholder="Enter Your Email..."
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="block w-full px-10 py-3 text-dark bg-white rounded-lg dark:bg-gray-900 dark:text-gray-300 ring-1 ring-slate-100 focus:ring-primary outline-none "
              placeholder="Enter Your Password..."
            />
            <div
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="text-xl text-dark absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </div>
          </div>
          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              className="block w-full px-10 py-3 text-dark bg-white rounded-lg dark:bg-gray-900 dark:text-gray-300 ring-1 ring-slate-100 focus:ring-primary outline-none "
              placeholder="Enter Your Confirm Password..."
            />
            <div
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
              className="text-xl text-dark absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
            >
              {showConfirmPassword ? (
                <FaEyeSlash></FaEyeSlash>
              ) : (
                <FaEye></FaEye>
              )}
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold  rounded-tr-3xl rounded-bl-3xl  hover:rounded-3xl "
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="flex flex-col space-y-3">
          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
            or sign in with
          </p>

          <GoogleLogin></GoogleLogin>

          <div className="mt-6 text-center ">
            <Link
              to="/signin"
              className="text-sm text-primary hover:underline "
            >
              Already have an account? Please Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
