import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <UserContext.Provider
      value={{
        openModal,
        setOpenModal,
        user,
        setUser,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
