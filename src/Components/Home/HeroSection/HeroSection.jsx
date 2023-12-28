import image1 from "../../../assets/image1.jpg"
import image2 from "../../../assets/image2.jpg"
import image3 from "../../../assets/image3.jpg"
import image4 from "../../../assets/image4.png"
import Container from "../../Shared/Container";
import Button from "../../Shared/Button/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import CountUp from 'react-countup';

const HeroSection = () => {
  const [dataCounts, setDataCounts] = useState({})

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/dataCount`).then(data => {
      setDataCounts(data.data)
    })
  }, [])
  console.log(dataCounts);
  return (
    <>
      <section
        className='hero min-h-screen min-w-full'
      >
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 h-full">
            <div className="grid grid-cols-2 h-full gap-4">
              <div className="flex flex-col gap-y-4 h-full">
                <>
                  <img className=" rounded-md w-full h-full group-hover:scale-[101%] duration-300" src={image2} alt="" />
                </>
                <img className=" rounded-md w-full h-full group-hover:scale-[101%] duration-300" src={image1} alt="" />
              </div>
              <div className="flex flex-col gap-y-4 h-full">
                <img className=" rounded-md w-full h-full group-hover:scale-[101%] duration-300" src={image3} alt="" />
                <img className=" rounded-md w-full h-full group-hover:scale-[101%] duration-300" src={image4} alt="" />
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-10">
              <h1 data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" className="text-4xl lg:text-6xl font-bold">Welcome to TalkTrove language learning platform</h1>
              <p data-aos="fade-right"
                data-aos-delay="50"
                data-aos-anchor-placement="bottom-bottom" className="text-xl">Our vision is to create a world where language barriers are overcome, cultural understanding is enriched, and global connections thrive. We aspire to be the leading language learning platform that provides a diverse and immersive educational experience, fostering linguistic proficiency, empathy, and open-mindedness among students worldwide. Through innovative technologies, expertly curated content, and interactive learning methods, we aim to empower individuals to communicate effectively across cultures, expand their horizons, and contribute to a more interconnected and harmonious world.
              </p>
              <div>
                <div className="grid grid-cols-3 gap-5" data-aos="fade-up" data-aos-delay="100"
                  data-aos-anchor-placement="bottom-bottom">
                  <div className="border-2 border-[#8B5CF6] rounded-lg text-center py-5">
                    <h1 className="text-4xl font-bold"><CountUp start={0} end={dataCounts.userCount} duration={2} /></h1>
                    <h1 className="text-xl font-bold">Students</h1>
                  </div>
                  <div className="border-2 border-[#8B5CF6] rounded-lg text-center py-5">
                    <h1 className="text-4xl font-bold"><CountUp start={0} end={dataCounts.classCount} duration={2} /></h1>
                    <h1 className="text-xl font-bold">Classes</h1>
                  </div>
                  <div className="border-2 border-[#8B5CF6] rounded-lg text-center py-5">
                    <h1 className="text-4xl font-bold"> <CountUp start={0} end={dataCounts.instructorsCount} duration={2} /></h1>
                    <h1 className="text-xl font-bold">Instructors</h1>
                  </div>
                </div>
                <Link to="/allClasses">
                  <Button>
                    Go To Enroll
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
