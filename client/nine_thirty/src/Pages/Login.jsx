// Page qui permet à un utilisateur de se logger.

import React, { useEffect ,useState } from "react";

function Login() {
  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = sessionStorage.getItem("User");
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, []);

  // Handling email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // Fetch user data based on userId
  const fetchUser = async (userId) => {
    const response = await fetch(`http://localhost:8000/users/${userId}`);

    if (response.ok) {
      const data = await response.json();
    //   console.log(data);
      setUser(data.name);
      sessionStorage.setItem("User", data.name); 
      window.location.href = '/';
    }
  };


  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/users/login", {
    
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setIsLoggedIn(true);
      const userId = data.userId;
      fetchUser(userId);
      localStorage.setItem("token", data.token);
      localStorage.setItem("isAdmin", data.isAdmin);
      localStorage.setItem("userId", userId);
    } else {
      console.log("Invalid email or password");
    }

  };


  // Form displaying and assigning functions to each input;
  return (
    <div className="flex w-auto h-auto flex-1 flex-col justify-center px-6 py-10 lg:px-8  bg-slate-100/90 border rounded-lg">
      <h2 className="pb-2">Connectez vous à votre compte :</h2>
      {!isLoggedIn ? (
        <div>
          <form className="flex flex-col space-y-6 items-center" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Votre mail
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                type="email"
                placeholder="..."
                id="emailLogin"
                value={email}
                onChange={handleEmail}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Votre mot de passe
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                type="password"
                placeholder="..."
                id="passwordLogin"
                require="true"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="">
              <button
                className="flex w-full justify-center rounded-md bg-[#2E2E68] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      ) : (
        <p>Hi {user} and welcome </p>
      )}
    </div>
  );
}

export default Login;
