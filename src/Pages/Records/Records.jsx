import { useEffect, useState } from "react";
import useMailContext from "../../Hooks/Context/useMailContext";
import useRecords from "../../Hooks/useRecords";
import "./Records.css";
const Records = () => {
  const { fetchRecords, loading } = useRecords();
  const [records, setRecords] = useState([]);
  const { mail } = useMailContext();
  useEffect(() => {
    fetchRecords(setRecords, mail._id);
  }, []);
  useEffect(() => {
    console.log(records);
  }, [records]);
  return (
    <div className="records">
      <div className="record_contain">
        <div className="header">
          <div className="left">
            <p>sent to:</p>
            <h2>{mail.name}</h2>
            <p>Email</p>
            <h2>{mail.email}</h2>
          </div>
          <div className="right">
            <button
              onClick={() => {
                fetchRecords(setRecords, mail._id);
              }}
              className="refresh_btn"
              disabled={loading}
            >
              {loading ? "Loading" : "Refresh"}
            </button>
          </div>
        </div>

        <hr />
        <div className="content">
          <p>opened at</p>
          {records &&
            records.map((each) => {
              return <h2>{each}</h2>;
            })}
        </div>
      </div>
    </div>
  );
};
export default Records;
