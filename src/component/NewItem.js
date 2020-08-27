import React from "react";
import new_productItem_sample from "../assets/img/common/new_productItem_sample.png";
import new_productItem_sample2 from "../assets/img/common/new_productItem_sample2.png";

export const NewItem = () =>{
  return(
      <section className='new_item_area'>
        <h2>New <a href='#'>더보기 > </a></h2>
        <article className='new_item_slider'>
          <div className='slider_item'>
            <div className='img_wrap'>
              <img src={new_productItem_sample} alt=''/>
            </div>
            <h2 className='item_name'>발뮤다 전기주전자</h2>
            <p className='item_desc'>
              매일 사용하고 싶어지는지금까지 없었던 디자인
            </p>
            <a href='#'>바로가기</a>
          </div>
          <div className='slider_item color1'>
            <div className='img_wrap'>
              <img src={new_productItem_sample2} alt=''/>
            </div>
            <h2 className='item_name'>발뮤다 전기주전자</h2>
            <p className='item_desc'>
              매일 사용하고 싶어지는지금까지 없었던 디자인
            </p>
            <a href='#'>바로가기</a>
          </div>
          <div className='slider_item'>
            <div className='img_wrap'>
              <img src={new_productItem_sample} alt=''/>
            </div>
            <h2 className='item_name'>발뮤다 전기주전자</h2>
            <p className='item_desc'>
              매일 사용하고 싶어지는지금까지 없었던 디자인
            </p>
            <a href='#'>바로가기</a>
          </div>
          <div className='slider_item color1'>
            <div className='img_wrap'>
              <img src={new_productItem_sample2} alt=''/>
            </div>
            <h2 className='item_name'>발뮤다 전기주전자</h2>
            <p className='item_desc'>
              매일 사용하고 싶어지는지금까지 없었던 디자인
            </p>
            <a href='#'>바로가기</a>
          </div>
        </article>
      </section>
  );
}