import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../components/UI/LogoImg";
import IntroduceSection from "../components/home/IntroduceSection";
import BasicButton from "../components/UI/BasicButton";
import Slide from "react-reveal/Slide";

function Home() {
  const navigator = useNavigate();
  return (
    <div className="mt-4">
      <LogoImg classname="-mb-20" />
      <IntroduceSection />
      <div className="flex justify-center mt-40">
        <Slide bottom>
          <BasicButton
            buttonText="OOTD 자랑하러 가기"
            classname="h-12 border-stone-500 mb-14 w-60"
            onClickFn={() => navigator("/main")}
          />
        </Slide>
      </div>
    </div>
  );
}

export default Home;
