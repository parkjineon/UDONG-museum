/* global kakao */

import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GET_EXHIBITION } from "../../../api/exhibitionAPI";
import { exhibitionActions } from "../../../store/exhibitionSlice";
import { mapActions } from "../../../store/mapSlice";
import MapCard from "./MapModal";

function KakaoMap({ setIsModalOpen }) {
  const container = useRef(null);
  const location = useSelector((state) => state.user.location);
  const exhibitions = useSelector((state) => state.exhibition.near);
  const hoveredEID = useSelector((state) => state.exhibition.hoveredEID);
  const dispatch = useDispatch();

  let markers = [];
  const defaultMarker = new kakao.maps.MarkerImage(
    `${process.env.PUBLIC_URL}/image/marker2_blue.png`,
    new kakao.maps.Size(45, 45),
    new kakao.maps.Point(13, 34)
  );
  const hoveredMarker = new kakao.maps.MarkerImage(
    `${process.env.PUBLIC_URL}/image/marker2_red.png`,
    new kakao.maps.Size(45, 45),
    new kakao.maps.Point(13, 34)
  );

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
      disableDoubleClick: true,
      disableDoubleClickZoom: true,
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
        image: exhibition._id === hoveredEID ? hoveredMarker : defaultMarker,
      });
      markers.push(marker);
      kakao.maps.event.addListener(marker, "click", function () {
        dispatch(exhibitionActions.selectedEID(marker.getTitle()));
      });
      kakao.maps.event.addListener(map, "dragend", function () {
        const new_latitude = map.getCenter().Ma;
        const new_longitude = map.getCenter().La;
        console.log(new_latitude, new_longitude);
      });
    });
  }, [hoveredEID, exhibitions]);

  return <KakaoMapContainer ref={container}></KakaoMapContainer>;
}
export default KakaoMap;

const KakaoMapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
