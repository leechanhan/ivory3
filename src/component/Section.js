import React from "react";
import {Campaign} from "./Campaign";
import {Event} from "./Event";
import {BrandDeal} from "./BrandDeal";
import {NewItem} from "./NewItem";

export const Section = () =>{
  return(
      <div id='common_wrap'>
        <div className='bebecam_wrap'>
          <div className='sep_deco'></div>
          <Campaign></Campaign>
          <Event></Event>
          <BrandDeal></BrandDeal>
          <NewItem></NewItem>
        </div>
      </div>
  );
}