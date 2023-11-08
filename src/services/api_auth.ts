
import { API_URL } from "../auth/authConstants";
import { AuthResponse } from "../types/types";
import type { AuthResponseError, User } from "../types/types";

const register = async (name: string, email: string , password: string): Promise<any> => {
    const apiUrl = 'http://localhost:3000/api/signup';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,email,password
        })
      })
      if (response.ok) {
          console.log("Usuario creado correctamente");
          return await response.json();
          
      } else {
          console.log("Algo sucedió mientras creabamos el usuario");
      }

    } catch (error: any) {
      throw new Error(error);
    }
  }


const login = async (user: User): Promise<any> => {
  const apiUrl = "http://localhost:3000/api/login";
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      const json = (await response.json()) as AuthResponse;
      // console.log(json);
      return json
      
    } else {
      const json = (await response.json()) as AuthResponseError;

      return json
    }
  } catch (error) {
    console.log(error);
  }
  }

  const signOut = async(authToken: string) => {
   
    try {
      const response = await fetch(`${API_URL}/signout`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });
      if (response.ok) {
        return response.ok
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  export { login, register, signOut }