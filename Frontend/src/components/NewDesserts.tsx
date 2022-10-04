// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { INewDesserts } from '../interfaces/Desserts'


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
        breakpoints={{
          400:{
            slidesPerView : 1
          },
          580:{
            slidesPerView : 2
          },
          1024:{
            slidesPerView:3
          },
          
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
                      <a href={dessert.howMakeIt} target="_blank" rel="noopener noreferrer" className="button">Como Fazer</a>
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

export default NewDesserts