import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const [isSignIn, setSignIn] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [message, setMessage] = useState("");
  const [isAlert, setAlert] = useState(false);
  const [status, setStatus] = useState("error");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeRePassword = (e) => {
    setRePassword(e.target.value);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const signin = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8000/users/signin", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      handleClose();
    } catch (error) {
      setMessage(error.response.data.message);
      setStatus("error");
      setAlert(true);
    }
  };

  const signup = async () => {
    if (!email || !name || !password || !rePassword) {
      setStatus("error");
      setMessage("Мэдээллийг бүрэн бөглөнө үү");
      setAlert(true);
      return;
    }
    if (password !== rePassword) {
      setStatus("error");
      setMessage("Нууц үг хоорондоо таарахгүй байна!!!");
      setAlert(true);
      return;
    }
    try {
      const res = await axios.post("http://localhost:8000/users/signup", {
        name,
        email,
        password,
      });
      setStatus("succes");
      setMessage(res.data.message);
      setAlert(true);
      setSignIn(true);
    } catch (error) {
      setStatus("error");
      setAlert(true);
    }
  };

  const clickLogin = () => {
    if (email === "" || password === "") {
      setStatus("error");
      setMessage("Нэвтрэх нэр эсвэл нууц үг хоосон байна!");
      setAlert(true);
      return;
    }
    signin(email, password);
  };

  return (
    <UserContext.Provider
      value={{
        openModal,
        setOpenModal,
        user,
        setUser,
        handleOpen,
        handleClose,
        logout,
        isSignIn,
        setSignIn,
        email,
        setEmail,
        name,
        setName,
        password,
        setPassword,
        rePassword,
        setRePassword,
        changeEmail,
        changePassword,
        changeName,
        changeRePassword,
        isAlert,
        setAlert,
        message,
        setMessage,
        status,
        setStatus,
        signin,
        signup,
        clickLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
