import Typewriter from "typewriter-effect";

const SingleHeroSlide = ({ singleSlide }) => {
  const { title } = singleSlide;
  return (
    <div className='px-16'>
      <h1 className='mb-5 text-4xl font-bold'>
        
        <Typewriter
          options={{
            strings: `${title}`,
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className='mb-5 flex flex-shrink-0'>
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
    </div>
  );
};

export default SingleHeroSlide;
