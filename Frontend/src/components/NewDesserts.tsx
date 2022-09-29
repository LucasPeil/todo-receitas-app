import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { INewDesserts } from '../interfaces/Desserts'
import { styles } from "./DessertList.module.css"

type Props = {
  desserts: INewDesserts[]
}

const NewDesserts = ({ desserts }: Props) => {
  return (
    <div id="new_desserts" className="hide new_dessert_div">
    <div className="slide_container" >
          <div className="slide_content">
            <div className="card_wrapper">
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        scrollbar={{ draggable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
              {desserts.map((dessert) => ( 
                <SwiperSlide>
                  <div key={dessert.id} className= "card ">
                    <div className="image_content">
                      <div className="card_image">
                        <img src={dessert.image} className="overlay" />
                      </div>
                    </div>
                  
                    <div className="card_content">
                      <h2 className="name">{dessert.name}</h2>
                      {dessert.ingredients.map((ingredient) => (
                        <span className="description">- {ingredient}</span>
                      ))}
                      <a href={dessert.howMakeIt} className="button">Como Fazer</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              </Swiper>
            </div>
          </div>
        </div>
      
      
      </div>  
      )
    }
    
    {/*<div id="new_desserts" className="hide new_dessert_div">
      <div className="slide_container swiper" >
        <div className="slide_content">
          <div className="card_wrapper  swiper-wrapper">
            {desserts.map((dessert) => ( 
            <div key={dessert.id} className= "card swiper-slide">
                  <div className="image_content">
                    <div className="card_image">
                      <img src={dessert.image} className="overlay" />
                    </div>
                  </div>
                  
                  <div className="card_content">
                    <h2 className="name">{dessert.name}</h2>
                    {dessert.ingredients.map((ingredient) => (
                      <p className="description">{ingredient}</p>
                    ))}
                    <a href={dessert.howMakeIt} className="button">Como Fazer</a>
                  </div>
            </div>
            ))}
          </div>
        </div>
        <div className="swiper-button-next swiper-navBtn"></div>
        <div className="swiper-button-prev swiper-navBtn"></div>
        <div className="swiper-pagination"></div>


      </div>
                    </div> */}


    


export default NewDesserts