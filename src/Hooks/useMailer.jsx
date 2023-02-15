import API from "../Axios/Axios";
import useMailContext from "./Context/useMailContext";

const useMailer = () => {
  const { setMail } = useMailContext();
  const sendMail = (formdata) => {
    API.post("/mailer", formdata).then((res) => {
      setMail(res.data);
    });
  };
  return { sendMail };
};

export default useMailer;
