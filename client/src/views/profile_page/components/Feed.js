import { useState } from "react";
import styled, { css } from "styled-components";
import PhotoModal from "./PhotoModal";

function Feed({ photos }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState();
  const showPhotoDetail = (e, index) => {
    setIsModalOpen(true);
    setPhotoIndex(index);
  };
  return (
    <>
      <FeedTitle>👏 총 {photos.length}점의 작품을 감상하세요</FeedTitle>
      <FeedContainer>
        {photos.map((photo, index) => (
          <PhotoContainer
            key={index}
            onClick={(e) => showPhotoDetail(e, index)}
          >
            <PhotoCover enabled={photo.used}>
              {photo.used && "전시중"}
            </PhotoCover>
            <PhotoImg>{photo.title}</PhotoImg>
          </PhotoContainer>
        ))}
        {isModalOpen && <Cover></Cover>}
        {isModalOpen && (
          <PhotoModal
            index={photoIndex}
            photos={photos}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </FeedContainer>
    </>
  );
}
export default Feed;

const FeedTitle = styled.div`
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 10px;
`;
const FeedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PhotoContainer = styled.div`
  width: 320px;
  height: 320px;
  position: relative;
  background-color: #c8c8c8;
  flex-shrink: 0;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const PhotoCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  ${(props) =>
    props.enabled &&
    css`
      background-color: black;
      opacity: 0.5;
      color: white;
    `}
`;
const PhotoImg = styled.div`
  color: beige;
`;
const Cover = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0.5;
  background-color: black;
`;
