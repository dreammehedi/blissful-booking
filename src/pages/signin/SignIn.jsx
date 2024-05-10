import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../auth/AuthProvider";
import GoogleLogin from "../../components/social_login/GoogleLogin";

function SignIn() {
  // auth functionality
  const { loginWithEmailAndPassword } = useContext(AuthContext);

  // show password
  const [showPassword, setShowPassword] = useState(false);

  // handle sign in form
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;

    // check password length
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    // call email password login method
    loginWithEmailAndPassword()
      .then(() => {
        toast.success("Sign In Success.");
      })
      .catch(() => {
        toast.error("Sign In Failed.");
      });
  };

  return (
    <section className="py-8 md:py-12 bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-center h-auto mx-auto ring-1 ring-slate-100 rounded-md hover:ring-primary my-transition p-4 md:p-8 w-full max-w-md">
        <form onSubmit={handleSignIn} className="w-full">
          {/* logo */}
          {/* <Link to="/">
            <h1 className="text-center text-3xl font-bold text-primary font-dmsans">
              Blissful Bookings
            </h1>
          </Link> */}

          <h1 className="mt-6 text-center text-2xl font-semibold text-dark capitalize sm:text-3xl dark:text-white">
            Sign In
          </h1>

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
              required
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
              required
              type={showPassword ? "text" : "password"}
              name="password"
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

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-5 py-3 bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold  rounded-tr-3xl rounded-bl-3xl  hover:rounded-3xl "
            >
              Sign In
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
              to="/signup"
              className="text-sm text-primary hover:underline "
            >
              {` Don't have an account? Please Sign Up`}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
