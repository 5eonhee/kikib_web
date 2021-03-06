import React from 'react';
// import Navbar from './Navigationbar';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';
import 'moment/locale/ko';
import { useLocation, Navigate } from 'react-router';
import DefaultFont from '../assets/font/agothic14.otf';
import { device } from './Devices';
// import Header from './Header';

// 사용자 위치정보
// let position;
// let currentWeather = position.weather[0].main;
// var imgURL = '../assets/Drawables/icon_weather_' + currentWeather + '.png';
// navigator.geolocation.getCurrentPosition((res) => {
//   // console.log('res: ', res);
//   position = res;
//   // console.log('position:', position.coords.latitude);
//   // 사용자 날씨 가져오기
//   // console.log(position.timestamp);
//   // 사용자 위치정보를 활용한 날씨 가져오기
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.WEATHER_API}`
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       position = json;
//     });
//   // console.log(getWeather());
//   // console.log(position.weather[0].main);
// });
// // console.log(position);
// setTimeout(() => {
//   // console.log(position);
//   console.log(position.weather[0].main);
// }, 5000);

// // 날씨 아이콘 가져오기

const Main = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  // 유저정보 불러오기
  // console.log(sessionStorage.getItem('userInfo'));
  const userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'));

  // 세션에 저장된 값이 없는 경우
  if (!userInfo) {
    // return navigate('/login');
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // 있는 경우
  const userName = userInfo.name;

  // console.log(userName);
  // const driverId = JSON.parse(userform).data.object.userId;
  return (
    <div>
      <GlobalStyle />
      <MainPage>
        <UserName>
          <h1>
            {userName} {/*bus_num*/}9-3번 승무원님
          </h1>
        </UserName>
        <DateTimeWeather>
          <Daily>
            <Clock
              format={'MM월 DD일 dddd'}
              ticking={true}
              timezone={'Asia/Seoul'}
            />
          </Daily>
          <Daily>
            <Clock format={'A hh:mm'} ticking={true} timezone={'Asia/Seoul'} />
          </Daily>
          {/* <span><img src={imgURL} alt="Current Weather icon" /></span> */}
        </DateTimeWeather>
        <BtnsDiv>
          <BtnDiv>
            <Link to="/management">
              <Btn>근무일정관리</Btn>
            </Link>
          </BtnDiv>
          <BtnDiv>
            <Btn
              onClick={() =>
                window.open('http://kiki-bus.com:8080/api/driver', '_blank')
              }
            >
              운행관리
            </Btn>
          </BtnDiv>
        </BtnsDiv>
        <QrBtnDiv>
          <QrBtn>관리자 문의하기</QrBtn>
        </QrBtnDiv>
      </MainPage>
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'agothic14';
  src: url(${DefaultFont});
}

*{
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  }

body {
  font-family: agothic14;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px
  width: 100vw;
  height: 100vh;
}

#root {
  margin: 10px;
  width: 100vw;
  height: 100vh;

  @media ${device.desktop} {
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media ${device.mobileL} {
    height: 100vh;
    width: 100%;
    background-size: cover;
  background-repeat: no-repeat;
  }
}
`;

const MainPage = styled.div`
  margin: 100px 50px 0 50px;
  text-aline: center;
`;

const UserName = styled.div`
  text-align: center;
  margin-bottom: 50px;
  font-size: 40px;
`;

const DateTimeWeather = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  font-size: 50px;
`;

const Daily = styled.div`
  display:table-cell;
  background-color: #192734;
  border: solid;
  border-size: 3px
  border-color: #1a7473;
  border-radius: 1.5rem;
  color: white;
  width: 220px;
  height: 130px;
  padding: 30px;
  text-align:center;
  vertical-align:middle;
`;

const BtnsDiv = styled.div`
  text-align: center;
  min-width: 500px;
`;

const BtnDiv = styled.div`
  margin: 100px;
`;

const Btn = styled.button`
  font-size: 70px;
  font-weight: bold;
  min-width: 600px;
  min-height: 200px;
  border-style: solid;
  border-width: 1.5px;
  border-color: #c0c0c0;
  border-radius: 3rem;
  &:hover {
    background-color: rgb(173, 170, 170);
  }
  &a {
    text-decoration: none;
    color: black;
  }
`;

const QrBtnDiv = styled.div`
  text-align: center;
  margin: 180px;
`;
const QrBtn = styled.button`
  min-width: 300px;
  min-height: 80px;
  border-style: solid;
  border-width: 1.5px;
  border-color: #c0c0c0;
  border-radius: 0.8rem;
  text-decoration: none;
  font-weight: bold;
  font-size: 40px;
  color: black;
  &:hover {
    background-color: rgb(173, 170, 170);
  }
`;

export default Main;
