import { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GET_RECENT } from "../../../api/exhibitionAPI";
import ExhibitionCard from "./ExhibitionCard";

function FollowingExhibitions() {
  const [exhibitions, setExhibitions] = useState([]);
  const { data } = useQuery("get_recent", GET_RECENT, {
    onSuccess: (data) => {
      setExhibitions(data.data.exhibitions);
    },
  });

  return (
    <>
      {exhibitions.map((exhibition, idx) => (
        <ExhibitionCard exhibition={exhibition} key={idx} />
      ))}
    </>
  );
}
export default FollowingExhibitions;
