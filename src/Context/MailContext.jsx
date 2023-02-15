import { createContext, useState } from "react";

export const MailContext = createContext();

export const MailProvider = ({ children }) => {
  const [mail, setMail] = useState();
  return (
    <MailContext.Provider value={{ mail, setMail }}>
      {children}
    </MailContext.Provider>
  );
};
