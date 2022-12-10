/* global kakao */

import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GET_EXHIBITION } from "../../../api/exhibitionAPI";
import { exhibitionActions } from "../../../store/exhibitionSlice";
import MapCard from "./MapModal";

function KakaoMap({ setIsModalOpen }) {
  const container = useRef(null);
  const location = useSelector((state) => state.user.location);
  const exhibitions = useSelector((state) => state.exhibition.near);
  const dispatch = useDispatch();

  let markers = [];
  useEffect(() => {
    // default coords
    // let latitude = 37.5666805;
    // let longitude = 126.9784147;

    let latitude = location?.latitude;
    let longitude = location?.longitude;

    const options = {
      center: new window.kakao.maps.LatLng(latitude, longitude),
      level: 6,
      scrollwheel: false,
      clickable: true,
    };
    const map = new window.kakao.maps.Map(container.current, options);

    exhibitions?.forEach((exhibition) => {
      const marker = new kakao.maps.Marker({
        map,
        title: exhibition._id,
        // id: exhibition._id,
        position: new kakao.maps.LatLng(
          exhibition.latitude,
          exhibition.longitude
        ),
      });
      markers.push(marker);
      kakao.maps.event.addListener(marker, "click", function (e) {
        console.log(marker.getTitle());
        dispatch(exhibitionActions.selectedEID(marker.getTitle()));
      });
    });
  }, []);

  return <KakaoMapContainer ref={container}></KakaoMapContainer>;
}
export default KakaoMap;

const KakaoMapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
