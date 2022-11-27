import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";


export const Home = () => {

  const images =[
    'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg',
    'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg',
    'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg'
  ]
  return (
    <div>
      
      <SimpleImageSlider
      autoPlay
      style={{objectFit:"contain"}}
        width="100%"
        height={400}
        images={images}
        showBullets={true}
        showNavs={false}
      />
      hello
    </div>
  )
}
