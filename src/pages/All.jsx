import HomeTags from "../components/HomeTags";
import Songs from "./Songs";
import Podcasts from "./Podcasts";
import Footer from "../components/Footer";

const All = () => {


  return (
    <div className="overflow-hidden mt-[45px] ">
      <HomeTags />
      <Songs/>
      <Podcasts/>
      <Footer/>
    </div>
  );
};

export default All;
