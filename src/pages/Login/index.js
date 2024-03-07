import React from "react";
import { RESTAURANT_LOGO_ADDRESS_URL, RESTAURANT_NAME } from "../../data/info";
import ButtonPrimary from "../../components/ButtonPrimary";

function LoginPage() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow">
          <div className="flex items-center justify-center text-2xl font-semibold lg:mb-10">
            <img
              src={RESTAURANT_LOGO_ADDRESS_URL}
              className="h-8 mr-3"
              alt="logo"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Sign in to {RESTAURANT_NAME}
          </h2>
          <form className="mt-8 space-y-6" action="#">
            <div>
              <label
                htmlFor="username"
                className="flex items-start mb-2 text-sm font-medium text-gray-900 justify-start"
              >
                User Name
              </label>
              <input
                type="text"
                name="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                placeholder="User name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-yellow-300 checked:bg-yellow-300"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="font-medium text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="ml-auto text-sm text-yellow-600 hover:underline cursor-pointer">
                Lost Password?
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex">
              <ButtonPrimary
                additionalClassName="flex-grow"
                px={5}
                py={3}
                mt={5}
              >
                Sign In
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
