import { Power3 } from "gsap";
import { gsap } from "gsap";

const animateElements = (elements) => {
    const tl = gsap.timeline({
      defaults: { ease: Power3.inOut, duration: 0.5 },
    });
    elements.forEach(({ ref, animation }) => {
      tl.fromTo(
        ref.current,
        { opacity: 0, ...animation.from },
        { opacity: 1, ...animation.to },
      );
    });
    return tl;
  };

  export default animateElements