import React from "react";
import { SliderComponent } from "./sliderComponent";

export const Slider = () => {
    return (
        <div>
            <h1>Banner</h1>
            <SliderComponent
                settings={{
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                }}
                data={[
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325052032232108.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325102619240045.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325052032232108.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325102619240045.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325052032232108.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325102619240045.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325052032232108.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325102619240045.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325052032232108.mp4" }
                ]}
            />
            <br />
            <br />
            <br />
            <h1>Videos</h1>
            <SliderComponent
                settings={{
                    dots: true,
                    infinite: true,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                }}
                data={[
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325052032232108.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325102619240045.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325052032232108.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325102619240045.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325052032232108.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325102619240045.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325052032232108.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325102619240045.mp4" },
                    { type: "video", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID20230325052032232108.mp4" }
                ]}
            />
            <br />
            <br />
            <br />
            <h1>Movies</h1>
            <SliderComponent
                settings={{
                    dots: true,
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000
                }}
                data={[
                    { type: "img", url: "https://gallery.chennaisuperkings.com/PROD/GALLERY_CONTENT/GALLERY_IMAGES/CSKGAL_IMG20230315104801536200.jpg" },
                    { type: "img", url: "https://gallery.chennaisuperkings.com/PROD/GALLERY_CONTENT/GALLERY_IMAGES/CSKGAL_IMG20230316100914909183.jpg" },
                    { type: "img", url: "https://gallery.chennaisuperkings.com/PROD/GALLERY_CONTENT/GALLERY_IMAGES/CSKGAL_IMG20230313101509642261.jpg" },
                    { type: "img", url: "https://gallery.chennaisuperkings.com/PROD/GALLERY_CONTENT/GALLERY_IMAGES/CSKGAL_IMG20230315104801536200.jpg" },
                ]}
            />
            <br />
            <br />
            <br />
            <h1>Web Serios</h1>
            <SliderComponent
                settings={{
                    dots: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000
                }}
                data={
                    // booklist.map(v=>{
                    //     return {
                    //         type:"",
                    //         url:v.url
                    //     }
                    // })
                    [
                        { type: "img", url: "https://gallery.chennaisuperkings.com/PROD/GALLERY_CONTENT/GALLERY_IMAGES/CSKGAL_IMG20230315104801536200.jpg" },
                        { type: "img", url: "https://gallery.chennaisuperkings.com/PROD/CSKTV_CONTENT/CSKTV_VID_THUMB20230319100933513758.jpg" },
                        { type: "img", url: "https://gallery.chennaisuperkings.com/PROD/GALLERY_CONTENT/GALLERY_IMAGES/CSKGAL_IMG20230313101509642261.jpg" },
                        { type: "img", url: "https://gallery.chennaisuperkings.com/PROD/GALLERY_CONTENT/GALLERY_IMAGES/CSKGAL_IMG20230313101509642261.jpg" },
                    ]}
            />
        </div>
    );
};