import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

import { selected_for_you } from '../books/books';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import ButtonComponent from './ButtonComponent';

const SelectedForYou = () => {
    return (
        <div className="selected-wrapper-1">
            <div className='wrapper'>
            <div className="selected4u">
                <h2>Selected for you</h2>
                <div className="product-wrapper">
                    <>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={60}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[FreeMode, Pagination, Navigation]}
                            className="mySwiper"
                        >

                            {selected_for_you.map((card, index) => (
                                <SwiperSlide key={index} className="product-card">
                                    <div className="img-wrap">
                                        <img src={card.pic} alt={card.book_name} className='book-img' />
                                    </div>
                                    <h4>{card.book_name}</h4>
                                    <p className='author'>{card.author}</p>
                                    <div className="price-wrap">
                                        <h4 className='amount'>{card.amount}</h4>
                                        <HeartIcon className='heart-icon' />
                                    </div>
                                    <ButtonComponent
                                        className="hero-down-btn cart-btn"
                                        text="Add to cart"
                                        icon={<ShoppingCartIcon className='cart-icon' />}
                                    />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default SelectedForYou;
