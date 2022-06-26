import React from "react";
// import NavbarHeader from "../../Components/NavbarHeader";
import Banner from "../../Components/Banner";
import OurServices from "../../Components/OurServices/OurServices";
import WhoAreWe from "../../Components/WhoAreWe/WhoAreWe";
import Counter from "../../Components/Counter/Counter";
import RequestConsultation from "../../Components/RequestConsultation/RequestConsultation";
// import Footer from "../../Components/Footer";

function Home() {
  return (
    <>
      {/* <NavbarHeader /> */}
      <Banner />
      <OurServices />
      <WhoAreWe />
      <Counter />
      <RequestConsultation />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
