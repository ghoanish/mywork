$('.qury').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 100,
    arrows:false,
    autoplay:true
  });


  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  

  #fix{
    display:none;
    
   
}
&:hover #fix{
    display: block;
    position: absolute;
    background-color: rgb(190, 196, 192);
    top:90px;
    left:0;
    
}
&:hover #fix ul{
    display:block;
    background: #3f3f3f;
    padding: 2rem;
}
&:hover #fix li{
    border: none;
    font-size:14px;
    padding: 1rem 10rem 1rem 0rem;
    color: #e2dddd;
    text-transform: capitalize;
    
}