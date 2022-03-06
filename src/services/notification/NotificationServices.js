import { createContext, useState, useContext } from "react";

const Notification = ({ message = "Test", severity }) => {
  // Styles
  const notificationStyles = {
    position: "absolute",
    top: "5px",
    right: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: "auto",
    backgroundColor: severity === "success" ? "#4CAF50" : "#F44336",
    padding: "0.6rem 1.2rem",
    borderRadius: "0.5rem",
  };

  if (message === "") {
    return null;
  }

  return <div style={notificationStyles}>{message}</div>;
};

const NotificationContext = createContext();

export const NotificationServicesProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const setNotification = (severity, message) => {
    setMessage(message);
    setSeverity(severity);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={setNotification}>
      <Notification message={message} severity={severity} />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationServices = () => {
  return useContext(NotificationContext);
};
