import { Footer } from "./Footer";
import { MainSection } from "./MainSection";
import { MakeTheRightMove } from "./MakeTheRightMove";
import { OurClients } from "./OurClients";
import { Review } from "./Review";
import { WhatWeOffer } from "./WhatWeOffer";

export const HomePage = () => {
  return (
    <div>
      <MainSection></MainSection>
      <WhatWeOffer></WhatWeOffer>
      <MakeTheRightMove></MakeTheRightMove>
      <WhatWeOffer></WhatWeOffer>
      <Review></Review>
      <OurClients></OurClients>
      <Footer></Footer>
    </div>
  );
};
