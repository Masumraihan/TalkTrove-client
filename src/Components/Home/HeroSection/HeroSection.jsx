import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import image1 from "../../../assets/image1.jpg"
import image2 from "../../../assets/image2.jpg"
import image3 from "../../../assets/image3.jpg"
import image4 from "../../../assets/image4.png"
import Container from "../../Shared/Container";
import Button from "../../Shared/Button/Button";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const HeroSection = () => {
  const { theme } = useContext(AuthContext);
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
            <div className="grid grid-cols-2 h-full gap-4 group">
              <div className="flex flex-col gap-y-4 h-full">
                <img className=" rounded-md w-full h-full group-hover:scale-[101%] duration-300" src={image2} alt="" />
                <img className=" rounded-md w-full h-full group-hover:scale-[101%] duration-300" src={image1} alt="" />
              </div>
              <div className="flex flex-col gap-y-4 h-full">
                <img className=" rounded-md w-full h-full group-hover:scale-[101%] duration-300" src={image3} alt="" />
                <img className=" rounded-md w-full h-full group-hover:scale-[101%] duration-300" src={image4} alt="" />
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-10">
              <h1 className="text-4xl lg:text-6xl font-bold">Welcome to TalkTrove language learning platform</h1>
              <p className="text-xl">Our vision is to create a world where language barriers are overcome, cultural understanding is enriched, and global connections thrive. We aspire to be the leading language learning platform that provides a diverse and immersive educational experience, fostering linguistic proficiency, empathy, and open-mindedness among students worldwide. Through innovative technologies, expertly curated content, and interactive learning methods, we aim to empower individuals to communicate effectively across cultures, expand their horizons, and contribute to a more interconnected and harmonious world.
              </p>
              <div>
                <div className="grid grid-cols-3 gap-5">
                  <div className="border-2 border-[#8B5CF6] rounded-lg text-center py-5">
                    <h1 className="text-4xl font-bold">{dataCounts.userCount}</h1>
                    <h1 className="text-xl font-bold">Students</h1>
                  </div>
                  <div className="border-2 border-[#8B5CF6] rounded-lg text-center py-5">
                    <h1 className="text-4xl font-bold">{dataCounts.classCount}</h1>
                    <h1 className="text-xl font-bold">Classes</h1>
                  </div>
                  <div className="border-2 border-[#8B5CF6] rounded-lg text-center py-5">
                  <h1 className="text-4xl font-bold">{dataCounts.instructorsCount}</h1>
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
