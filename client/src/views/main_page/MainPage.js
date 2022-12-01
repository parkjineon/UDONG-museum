import { useSelector } from "react-redux";
import FollowingExhibitions from "./components/FollowingExhibitions";
import KakaoMap from "./components/KakaoMap";
import NearExhibitions from "./components/NearExhibitions";
import * as S from "./Main_Style";

function MainPage() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const { name, following } = useSelector((state) => state.user.user);

  return (
    <S.MainPageContainer>
      <S.MainPageTitle>👀 마음에 드는 전시회를 찾아보세요</S.MainPageTitle>
      <S.ContentContainer>
        <S.MapContainer>
          <KakaoMap />
        </S.MapContainer>
        <S.SideMenuContainer>
          <S.SideMenu>
            <S.SideMenuTitle>💡 우리 동네 전시회</S.SideMenuTitle>
            <S.SideMenuContent>
              <NearExhibitions />
            </S.SideMenuContent>
          </S.SideMenu>
          <S.SideMenu>
            <S.SideMenuTitle>
              💡 내가 팔로우하는 사용자의 전시회
            </S.SideMenuTitle>
            <S.SideMenuContent>
              {isLoggedIn ? (
                <FollowingExhibitions />
              ) : (
                <>Login to follow others!</>
              )}
            </S.SideMenuContent>
          </S.SideMenu>
        </S.SideMenuContainer>
      </S.ContentContainer>
    </S.MainPageContainer>
  );
}
export default MainPage;
