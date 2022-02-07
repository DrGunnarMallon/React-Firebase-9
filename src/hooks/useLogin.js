import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuthContext();

  const loginWithEmail = async (email, password) => {
    setIsPending(true);
    setError(null);

    try {
      const { user } = await signInWithEmailAndPassword(
        projectAuth,
        email,
        password
      );

      dispatch({ type: "LOGIN", payload: user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { loginWithEmail, isPending, error };
};

// const loginWithGoogle = async () => {
//   setError(null);
//   setIsPending(true);

//   try {
//     const result = await signInWithPopup(projectAuth, projectGoogleProvider);
//     console.log(result);
//     const user = result.user;
//     user && dispatch({ type: "LOGIN", payload: user });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
