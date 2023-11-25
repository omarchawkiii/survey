import { createContext, useContext, useState } from "react";

const StateContext = createContext({

  name : "chawki",
  email : "chawki@gmail.com"
})

export const ContextProvider = (children) => {

  const [currentUser , setCurrentUser] = useState({ })
  const [userTokent , setUserToken] = useState(null)

return(
  <StateContext.Provider value={{
    currentUser,
    setCurrentUser,
    userTokent,
    setUserToken

   }}>
    {children}
  </StateContext.Provider>
)

}

export const userStateContext = () => useContext(StateContext) ;
