import React from 'react'
import { selected_for_you } from '../books/books'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline'
import ButtonComponent from './ButtonComponent'

const SelectedForYou = () => {

    return (
        <div className='wrapper'>
            <div className="selected4u">
                <h2>Selected for you</h2>
                <div className="product-wrapper">
                    {selected_for_you.map((card, index) => {
                        return (
                            <div className="product-card">
                                <div className="img-wrap">
                                    <img src={card.pic} alt="" className='book-img' />
                                </div>
                                <h4>{card.book_name} </h4>
                                <p className='author'>{card.author} </p>
                                <div className="price-wrap">
                                    <h4 className='amount'>{card.amount} </h4>
                                    <HeartIcon className='heart-icon' />
                                </div>

                                <ButtonComponent
                                    className="hero-down-btn cart-btn"
                                    text="Add to cart"
                                    icon={<ShoppingCartIcon className='cart-icon' />}
                                />
                            </div>
                        )
                    })}


                </div>
            </div>

        </div>
    )
}

export default SelectedForYou