import { useSelector } from "react-redux";

function FollowingExhibitions() {
  const { name, following } = useSelector((state) => state.user.user);

  return (
    <>
      {following?.map((id, index) => (
        <>
          {id}
          <br />
        </>
      ))}
    </>
  );
}
export default FollowingExhibitions;
