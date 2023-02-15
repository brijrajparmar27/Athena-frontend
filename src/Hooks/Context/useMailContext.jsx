import { useContext } from "react";
import { MailContext } from "../../Context/MailContext";

const useMailContext = () => {
  const { mail, setMail } = useContext(MailContext);
  return { mail, setMail };
};

export default useMailContext;
