import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Button from '../../components/button';
import HalfButton from '../../components/halfButton';
import "./main.scss";

const Main = () => {
    return (
        <div className="Main">
            <Header />
            <Button content="왜 한국인재교육원일까?" />
            <div className="main-half">
                <HalfButton content={`RTS 과정 소개 \n 바로가기`} color="steelblue" />
                <HalfButton content={`필라테스 과정 소개 \n 바로가기`} color="pink" />
            </div>
            <Button content="강의영상 바로가기" />
            <Button content="나에게 맞는 과정 찾기" />
            <div className="main-half">
                <HalfButton content={`카카오톡으로 \n 실시간 상담 받기`} color="orange" />
                <HalfButton content={`02-3789-4400 \n 지금 전화상담 받기`} color="green" />
            </div>
            <Button content="PROMOTION & SEMINAR" />
            <Footer />
        </div>
    );
}





export default Main;
