import React from "react";
import product_slider_item_sample from "../assets/img/common/product_slider_item_sample.png";
import stokke_brand_detail from "../assets/img/common/stokke_brand_detail.png";
import stokke_brand_ from "../assets/img/common/stokke_brand_.png";
import "../assets/img/common/stokke_brand_.png";
import 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.min.css'
import Swiper from 'swiper'

export const Campaign = () =>{
  setTimeout(() => {
    new Swiper('.swiper-container',{
      autoWidth: true,
      autoHeight: true, //enable auto height
      slidesPerView:'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type:'progressbar'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, 1200);

  return(
    <div className='product_slider_wrap swiper-container'>
      <section className='product_slider swiper-wrapper'>
        <article className='product_slider_item swiper-slide'>
          <h2 className='due_date'>D-03</h2>
          <p className='apply_status'>
            <span className='apply_count'>신청 <em>20</em></span><span className='divider'>/</span><span
              className='total_count'>모집 <em>30</em></span>
          </p>
          <img src={product_slider_item_sample} className='product_detail_img' alt=''/>
          <p className='product_title'>스토케 트레일즈 디럭스형 유모차</p>
          <img src={stokke_brand_detail} className='product_brand_category_detail' alt=''/>
          <img src={stokke_brand_} alt='' className='product_brand_category'/>
        </article>
        <article className='product_slider_item swiper-slide'>
          <h2 className='due_date'>D-03</h2>
          <p className='apply_status'>
            <span className='apply_count'>신청 <em>20</em></span><span className='divider'>/</span><span
              className='total_count'>모집 <em>30</em></span>
          </p>
          <img src={product_slider_item_sample} className='product_detail_img' alt=''/>
          <p className='product_title'>스토케 트레일즈 디럭스형 유모차</p>
          <img src={stokke_brand_detail} className='product_brand_category_detail' alt=''/>
          <img src={stokke_brand_} alt='' className='product_brand_category'/>
        </article>
      </section>

      <p className='slider_message'>스토케를 무료체험 해보세요</p>
      <div className='swiper-pagination'></div>
    </div>
  );
}