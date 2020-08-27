import React from "react";
import event_banner_sample1 from "../assets/img/common/event_banner_sample1.png";
import event_banner_sample2 from "../assets/img/common/event_banner_sample2.png";
import event_banner_sample3 from "../assets/img/common/event_banner_sample3.png";

export const Event = () =>{
  return(
      <section className='event_area'>
        <h2>EVENT <a href='#'>더보기 > </a></h2>
        <article className='event_item'>
          <img src={event_banner_sample1} alt=''/>
        </article>
        <article className='event_item'>
          <img src={event_banner_sample2} alt=''/>
        </article>
        <article className='event_item'>
          <img src={event_banner_sample3} alt=''/>
        </article>
      </section>
  );
}