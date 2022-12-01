/* global kakao */

import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MapCard from "./MapCard";

const KakaoMapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
function KakaoMap() {
  const container = useRef(null);
  const location = useSelector((state) => state.user.location);

  const markers = [
    {
      title: "은민 강아지 자랑전",
      latlng: new kakao.maps.LatLng(37.545964, 127.142235),
    },
  ];
  useEffect(() => {
    // default coords
    let latitude = 37.5666805;
    let longitude = 126.9784147;

    latitude = location?.latitude;
    longitude = location?.longitude;

    const options = {
      center: new window.kakao.maps.LatLng(latitude, longitude),
      level: 6,
    };
    const map = new window.kakao.maps.Map(container.current, options);
    const marker = new kakao.maps.Marker({
      map: map,
      title: "은민 강아지 자랑전",
      id: "exhibition_id",

      position: new kakao.maps.LatLng(37.545964, 127.142235),
      clickable: true,
    });

    kakao.maps.event.addListener(marker, "mouseover", function () {
      console.log(marker);
    });
  }, []);

  return <KakaoMapContainer ref={container}></KakaoMapContainer>;
}
export default KakaoMap;
