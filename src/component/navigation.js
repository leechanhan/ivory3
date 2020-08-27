import React from "react";
import home_btn from "../assets/img/all/home_btn2.png";
import review_write_btn2 from "../assets/img/all/review_write_btn2.png";
import product_btn2 from "../assets/img/all/product_btn2.png";
import search_btn2 from "../assets/img/all/search_btn2.png";
import user_btn2 from "../assets/img/all/user_btn2.png";
export const Navigation = () =>{
  return(
      <nav>
        <ul class='nav_menu'>
          <li class='home_link'><a href='#'></a><img src={home_btn} alt=''/></li>
          <li class='review_write_link'><a href='#'></a><img src={review_write_btn2} alt=''/></li>
          <li class='product_list_link'><a href='#'></a><img src={product_btn2} alt=''/></li>
          <li class='search_link'><a href='#'></a><img src={search_btn2} alt=''/></li>
          <li class='mypage_link'><a href='#'></a><img src={user_btn2} alt=''/></li>
        </ul>
      </nav>
  );
}