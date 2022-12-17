import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GET_EXHIBITION } from "../../api/exhibitionAPI";
import Scene from "./components/Scene";

function ExhibitionPage() {
  // https://jsfiddle.net/prisoner849/rwv0kex9/
  // https://codesandbox.io/s/024uom?file=/src/App.js
  const { eid } = useParams();
  const [exhibition, setExhibition] = useState();
  const [desc, setDesc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, refetch } = useQuery(
    ["get_exhibition", eid],
    () => GET_EXHIBITION(eid),
    {
      onSuccess: (res) => {
        if (res.info.getExhibitionInfoSuccess) {
          setExhibition(res.data.info);
        }
      },
    }
  );
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <ExhibitionPageContainer>
      <Scene {...exhibition} setDesc={setDesc} />
      <DescriptionContainer>
        <Description>
          {desc ? (
            <>
              {desc}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit id est laborum.
            </>
          ) : (
            <>Click frame to see description!</>
          )}
        </Description>
      </DescriptionContainer>
      <InfoContainer onClick={openModal}>
        <UserImg src={`${process.env.PUBLIC_URL}/image/user.png`} />
      </InfoContainer>
    </ExhibitionPageContainer>
  );
}

export default ExhibitionPage;

const UserImg = styled.img`
  transform: scale(1.2);
  &:hover {
    cursor: pointer;
    /* transform: scale(1.1); */
  }
`;
const InfoContainer = styled.div`
  position: absolute;
  bottom: 90px;
  left: 100px;
  z-index: 280;
`;
const Description = styled.div`
  padding: 10px;
  /* height: 100px; */
  /* overflow-y: scroll; */
  transform: rotateX(40deg);
`;
const DescriptionContainer = styled.div`
  perspective: 400px;
  padding: 0px 300px 20px;
  color: #b3b3b3;
`;
const ExhibitionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
