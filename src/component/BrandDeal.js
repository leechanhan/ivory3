import React from "react";
import brand_dealitem_sample from "../assets/img/common/brand_dealitem_sample.png";

export const BrandDeal = () =>{
  return(
      <section className='brand_area'>
        <h2>Brand Deal <a href='#'>더보기 > </a></h2>
        <article className='brand_item'>
          <div className='fade_dark'></div>
          <img src={brand_dealitem_sample} alt=''/>
          <h2 className='deal_name'>
            [도노도노] NEW 20<br/>
            패밀리 논슬립 순면패드 DDNFCP
          </h2>
          <p className='price'>300,000</p>
          <span className='discount_value'>39%</span>
        </article>
      </section>
  );
}