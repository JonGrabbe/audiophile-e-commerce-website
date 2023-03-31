// import Categories from "./categories/Categories";
// import LargeBanner from "./large-banner/LargeBanner";
// import MediumBanner from "./meduim-banner/MediumBanner";
// import TwoColBanner from "./two-col-banner/TwoColBanner";
// import TextImageBanner from "./text-image-banner/TextImageBanner";
import Categories from "../categories/Categories";
import LargeBanner from "../large-banner/LargeBanner";
import MediumBanner from "../meduim-banner/MediumBanner";
import TwoColBanner from "../two-col-banner/TwoColBanner";
import TextImageBanner from "../text-image-banner/TextImageBanner";

export default function Main() {
  return (
    <main>
      <Categories />
      <div className="main-wrapper">
        <LargeBanner />
        <MediumBanner />
        <TwoColBanner />
        <TextImageBanner />
      </div>
    </main>
  );
}
