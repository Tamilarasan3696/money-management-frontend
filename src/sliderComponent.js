import React from "react";
import Slider from "react-slick";

export const SliderComponent = (props) => {
    return (
        <Slider {...props.settings}  style={{ width: "100%" }}>
            {props.data.map(v => {
                return <div>
                    {v.type === "video" &&
                        <video width="94%" height="500" autoplay={"true"} controls>
                            <source src={v.url} type="video/mp4" />
                        </video>}
                    {v.type === "img" && <img style={{ width: "96%", height: "200px" }} src={v.url} />}
                </div>
            })}
        </Slider>
    );
};