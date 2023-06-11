import Container from "../../Shared/Container";

const Banner = () => {
  return (
    <Container>
      <div className='carousel rounded-md w-full h-[70vh]'>
        <div id='slide1' className='carousel-item relative w-full'>
          <div
            className='hero h-[70vh]'
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/905514896/photo/foreign-language-communication-speech-bubbles.jpg?s=2048x2048&w=is&k=20&c=-yYjiTv8u69-eoYnKoZNiM_JSycuULXEaCkEjlG7Q04=")`,
            }}
          >
            <div className='hero-overlay bg-opacity-70'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>
                  Learn a New Language
                </h1>
                <p className='mb-5'>
                  Join our language learning program and embark on an exciting
                  journey to discover new cultures, enhance your communication
                  skills, and broaden your horizons.
                </p>
              </div>
            </div>
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <div
            className='hero h-[70vh] bg-center'
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/143176813/photo/language-master.jpg?s=2048x2048&w=is&k=20&c=gMdjCi5PDXYzo3OLzsg3ziTeoXq-15KjE1_HVlIdaxM=")`,
            }}
          >
            <div className='hero-overlay bg-opacity-70'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>
                  Immerse Yourself in Culture
                </h1>
                <p className='mb-5'>
                  Immerse yourself in the rich tapestry of global cultures
                  through our immersive language courses. Gain a deeper
                  understanding of traditions, customs, and ways of life from
                  around the world.
                </p>
              </div>
            </div>
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <div
            className='hero h-[70vh] bg-center'
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1519734004356-f588de029302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`,
            }}
          >
            <div className='hero-overlay bg-opacity-70'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>
                  Unlock Global Opportunities
                </h1>
                <p className='mb-5'>
                  Open doors to countless opportunities by learning a foreign
                  language. Communicate with people from diverse backgrounds,
                  pursue international careers, and explore exciting global
                  destinations.
                </p>
              </div>
            </div>
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' className='carousel-item relative w-full'>
          <div
            className='hero h-[70vh] bg-center'
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/636604928/photo/hello-word-cloud-collage-in-different-languages.jpg?s=2048x2048&w=is&k=20&c=C-M7PLhn_PbD0Ngpi3cVqaTIJ_hVFHUVN8FTg4ns2_8=")`,
            }}
          >
            <div className='hero-overlay bg-opacity-70'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>
                  Learn a New Language
                </h1>
                <p className='mb-5'>
                  Join our language learning program and embark on an exciting
                  journey to discover new cultures, enhance your communication
                  skills, and broaden your horizons.
                </p>
              </div>
            </div>
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
