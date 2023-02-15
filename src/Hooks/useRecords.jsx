import API from "../Axios/Axios";

const useRecords = () => {
  const fetchRecords = (setRecord, id) => {
    API.get(`/records/${id}`).then((response) => {
      //   console.log(response.data.opened);
      setRecord(response.data.opened);
    });
  };
  return { fetchRecords };
};
export default useRecords;
