import React from 'react';

import alram_icon from '../assets/img/common/alram_icon.png';
import bebecam_logo from '../assets/img/all/bebecam_logo.svg';
export const Header = () => {
  return(
  <header className='sub_header_bebecam'>
    <div className='inner'>
      <h2 className='user_name'>ciel004님</h2>
      <h4>우리 아기가 잘 있는지 확인해보세요</h4>
      <div className='bebecam_alram'>
         <span className='alram_icon'>
          <img src="{alram_icon}" alt=''/>
         </span>
        <p className='bebecam_logo'>
          <img src={bebecam_logo} alt=''/>
          <span className='txt_logo'></span>
        </p>
      </div>
    </div>
  </header>
  );
}
