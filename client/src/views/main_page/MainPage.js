import styled from "styled-components";
import KakaoMap from "./components/KakaoMap";

const SideMenuContent = styled.div`
  background-color: white;
  height: 230px;
  margin-top: 10px;
  border-radius: 10px;
`;
const SideMenuTitle = styled.div`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.subtitle};
`;
const SideMenu = styled.div`
  /* height: 48%; */
  /* background-color: white; */
  border-radius: 10px;
`;
const SideMenuContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MapContainer = styled.div`
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
const MainPageTitle = styled.div`
  margin-top: 30px;
  color: white;
  font-size: ${(props) => props.theme.fontSizes.title};
`;
const ContentContainer = styled.div`
  display: flex;
  margin-top: 20px;
  height: 550px;
`;
const MainPageContainer = styled.div`
  width: 100%;
`;
function MainPage() {
  return (
    <MainPageContainer>
      <MainPageTitle>👀 마음에 드는 전시회를 찾아보세요</MainPageTitle>
      <ContentContainer>
        <MapContainer>
          <KakaoMap />
        </MapContainer>
        <SideMenuContainer>
          <SideMenu>
            <SideMenuTitle>💡 우리 동네 전시회</SideMenuTitle>
            <SideMenuContent></SideMenuContent>
          </SideMenu>
          <SideMenu>
            <SideMenuTitle>💡 내가 팔로우하는 사용자의 전시회</SideMenuTitle>
            <SideMenuContent></SideMenuContent>
          </SideMenu>
        </SideMenuContainer>
      </ContentContainer>
    </MainPageContainer>
  );
}
export default MainPage;
