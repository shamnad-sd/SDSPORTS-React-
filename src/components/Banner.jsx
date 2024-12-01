
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = (props) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
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
    { src: '/src/assets/BannerImg/img1.png', alt: 'Image 1' },
    { src: '/src/assets/BannerImg/img2.png', alt: 'Image 2' },
    { src: '/src/assets/BannerImg/img3.png', alt: 'Image 3' },
  ];

  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
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