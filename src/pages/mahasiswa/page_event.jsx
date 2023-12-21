import React from "react";
import Header from "../../components/user/Header-User";
import Media_Kampus from "../../components/global-components/media_kampus";
import EventMendatang from "../../components/global-components/event_mendatang";
import InfoKampus from "../../components/global-components/info_kampus";
import Footer from "../../components/global-components/footer";

const page_event = () => {
  return (
    <>
      <Header/>
      <Media_Kampus />
      <EventMendatang />
      <InfoKampus />
      <Footer />
    </>
  );
};

export default page_event;
