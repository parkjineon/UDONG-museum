import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { GET_NEAR } from "../../../api/exhibitionAPI";

function NearExhibitions() {
  const location = useSelector((state) => state.user.location);

  //   const { data, isLoading, isFetched, refetch } = useQuery(GET_NEAR, {
  //     onSuccess: (data) => {
  //       console.log(data);
  //     },
  //   });
  return <>{location.latitude}</>;
}
export default NearExhibitions;
