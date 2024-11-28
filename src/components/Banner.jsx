
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const images = [
    { src: 'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f7b74e32c435adb6.jpg?q=20', alt: 'Image 1' },
    { src: 'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/dd484f1b19c67712.jpg?q=20', alt: 'Image 2' },
    { src: 'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1316eb53d6f52c71.jpg?q=20', alt: 'Image 3' },
    { src: 'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/0511ba08d5abe9aa.jpg?q=20', alt: 'Image 4' },
    { src: 'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a76db078b31108e1.jpeg?q=20', alt: 'Image 5' },
    { src: 'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/139e8c93a918366a.jpeg?q=20', alt: 'Image 6' },
  ];

  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-60-px"
      >
        
        {images.map((image, index) => (
          <div key={index}>
            <img className="w-full" src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;