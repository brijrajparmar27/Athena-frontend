import useMailer from "../../Hooks/useMailer";
import "./Home.css";
const Home = () => {
  const { sendMail } = useMailer();
  console.log(import.meta.env.BASE_URL);
  const handleSendMail = (e) => {
    e.preventDefault();
    let data = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      content: e.target.content.value.trim(),
    };
    sendMail(data);
    // console.log(data);
  };
  return (
    <div className="home">
      <form onSubmit={handleSendMail}>
        <p>Name</p>
        <input type="text" name="name" className="tb" />
        <p>Email</p>
        <input type="text" name="email" className="tb" />
        <p>Email Content</p>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          className="tb"
        ></textarea>
        <input type="submit" value="send" className="submit_btn" />
      </form>
    </div>
  );
};
export default Home;
