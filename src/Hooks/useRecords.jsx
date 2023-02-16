import { useState } from "react";
import API from "../Axios/Axios";

const useRecords = () => {
  const [loading, setLoading] = useState(false);
  const fetchRecords = (setRecord, id) => {
    setLoading(true);
    API.get(`/records/${id}`).then((response) => {
      //   console.log(response.data.opened);
      setRecord(response.data.opened);
      setLoading(false);
    });
  };
  return { fetchRecords, loading };
};
export default useRecords;
