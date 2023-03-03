import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../types";

type hookCallback = () => void 

export const useAuthenticatedUser = (onFinally?: hookCallback) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<User | undefined>();
    
    useEffect(() => {
      setLoading(true);
      axios
        .get("/authenticate/profile")
        .then(({ data }) => {
          const _user = data === "" ? undefined : data as User;
          setUser(_user);
        })
        .finally(() => {
            setLoading(false);
            onFinally && onFinally();
        });
    }, [onFinally]);

    return {loading, user}
}