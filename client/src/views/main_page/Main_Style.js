import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideMenuContent = styled.div`
  background-color: white;
  height: 230px;
  /* width: 300px; */
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SideMenuTitle = styled.div`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.subtitle};
`;
export const SideMenu = styled.div`
  /* height: 48%; */
  /* background-color: white; */
  border-radius: 10px;
`;
export const SideMenuContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const MapContainer = styled.div`
  height: 100%;
  /* width: 70%; */
  background-color: white;
  flex-grow: 2.5;
  flex-basis: 60%;
  margin-right: 30px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
`;
export const MainPageTitle = styled.div`
  margin-top: 30px;
  color: white;
  font-size: ${(props) => props.theme.fontSizes.title};
`;
export const ContentContainer = styled.div`
  display: flex;
  margin-top: 20px;
  height: 550px;
`;
export const MainPageContainer = styled.div`
  width: 100%;
`;
