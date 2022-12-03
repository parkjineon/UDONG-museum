import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import moment from "moment";

function PhotoModal({ index, photos, setIsModalOpen }) {
  const [photoIndex, setPhotoIndex] = useState(index);
  const { name } = useSelector((state) => state.user.user);
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const onLeftClick = () => {
    setPhotoIndex(photoIndex - 1);
  };
  const onRightClick = () => {
    setPhotoIndex(photoIndex + 1);
  };
  return (
    <>
      <PhotoModalContainer>
        <ModalLeftBtn disabled={photoIndex === 0} onClick={onLeftClick}>
          <IoIosArrowBack size={45} />
        </ModalLeftBtn>
        <ModalRightBtn
          disabled={photoIndex === photos.length - 1}
          onClick={onRightClick}
        >
          <IoIosArrowForward size={45} />
        </ModalRightBtn>
        <ModalCloseBtn onClick={closeModal}>
          <IoIosClose size={50} />
        </ModalCloseBtn>
        <PhotoContainer></PhotoContainer>
        <PhotoInfoContainer>
          <TopInfo>
            <div style={{ fontSize: "20px" }}>00{photoIndex + 1}</div>
            <div style={{ fontSize: "40px", fontWeight: "bold" }}>
              {photos[photoIndex].title}
            </div>

            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#E2E2E2",
                marginTop: "10px",
              }}
            ></div>
            <div
              style={{ color: "#9F9F9F", fontSize: "15px", marginTop: "20px" }}
            >
              {photos[photoIndex].description}
            </div>
          </TopInfo>
          <BottomInfo>
            <div style={{ color: "#9F9F9F" }}>
              {moment(photos[photoIndex].date).format("YYYY. MM. DD.")}
            </div>
            <div>작가 {name}</div>
          </BottomInfo>
        </PhotoInfoContainer>
      </PhotoModalContainer>
    </>
  );
}
export default PhotoModal;

const PhotoModalContainer = styled.div`
  position: fixed;
  top: 0;
  margin: 100px auto;
  left: 0;
  right: 0;
  width: 1000px;
  height: 600px;
  background-color: white;
  display: flex;
  /* border-radius: 20px; */
`;
const ModalBtn = styled.div`
  position: absolute;
  color: white;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}
`;
const ModalCloseBtn = styled(ModalBtn)`
  margin-top: -50px;
  right: 0;
`;
const ModalLeftBtn = styled(ModalBtn)`
  margin-left: -50px;
  margin-top: 250px;
`;
const ModalRightBtn = styled(ModalBtn)`
  margin-top: 250px;
  right: 0;
  margin-right: -50px;
`;
const PhotoContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 60%;
  height: 100%;
  background-color: beige;
`;
const PhotoInfoContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin: 30px 30px;
  justify-content: space-between;
`;
const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const BottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
