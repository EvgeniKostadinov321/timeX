import React from 'react'
import PinkNews from'/news/PinkNews.jpg'
import './magazine.css'
import { useRef,useState } from 'react';

import leftArrow from '/left.png'
import rightArrow from '/right.png'

import slide1_news1 from '/news1/news1.jpg'
import slide2_news1 from '/news1/news1_2.jpg'
import slide3_news1 from '/news1/news1_3.jpg'

import slide1_news2 from '/news1/news2_1.jpg'
import slide2_news2 from '/news1/news2_2.jpg'
import slide3_news2 from '/news1/news2_3.jpg'

import slide1_news3 from '/news1/news3_1.jpg'
import slide2_news3 from '/news1/news3_2.jpg'
import slide3_news3 from '/news1/news3_3.jpg'

export default function Magazine() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  
  const doClick = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const doClick2 = () => {
    if (ref2.current) {
      ref2.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const doClick3 = () => {
    if (ref3.current) {
      ref3.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  

  const news1 = [slide1_news1, slide2_news1, slide3_news1];
  const news2 = [slide1_news2,slide2_news2,slide3_news2];
  const news3 = [slide1_news3,slide2_news3,slide3_news3];

  const updateSlider = (offset) => {
    const newSlide1 = (currentSlide + offset + news1.length) % news1.length;
    setCurrentSlide(newSlide1);
  };

  const updateSlider2 = (offset) => {
    const newSlide2 = (currentSlide2 + offset + news2.length) % news2.length;
    setCurrentSlide2(newSlide2);
  };

  const updateSlider3 = (offset) => {
    const newSlide3 = (currentSlide3 + offset + news3.length) % news3.length;
    setCurrentSlide3(newSlide3);
  };

  return (
    <>

      <section className='hero-magazine'>

        <div id='section-1' className='section-magazine-wrapper'>
            <h1 className='h1-el-typo'>Latest</h1>
            <div className='control-scroll'>
              <button onClick={doClick} id='start-news-arrow' className='arrow-btn'>
                <svg className='arrow-svg'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#000000"/>
                </svg>
              </button>
              <h1 id='h1-right' className='h1-el-typo'>News</h1>
            </div>
        </div>
        
        <div ref={ref} id='section-2' className='section-magazine-wrapper'>
          <div className='news1-content'>
              <div className='text-news1 width-50'>
                  <h1 className='title-news'>Hands-On: Girard-Perregaux Debuts Laureato Chronograph Ti49</h1>
                  <h1 className='news-text-promps' id='news1-text'>Girard-Perregaux is celebrating the 49th anniversary of the Laureato Chronograph with its first titanium version. Launched in 1975 as one of the great luxury sports watches with a bracelet, alongside the Audemars Piguets Royal Oak and the Patek Philippe Nautilus, to name a couple, the Laureato Chronograph has since become a permanent fixture in the Girard-Perregaux collection. While the Swiss manufacture has offered other titanium executions of the Laureato, Laureato Chronograph Ti49 is the first to be clad in grade 5 titanium.</h1>
                  <h1 className='news-text-promps' id='news1-post-text'>The lightweight, yet durable and anti allergenic case, which measures 42mm wide and is just 12mm thick (with 100 m of water resistance), alongside its integrated bracelet is meticulously finished with a mix of polished and satin-touched surfaces. The same goes for the gray dial, which features the Laureato’s signature “Clous de Paris” guilloché pattern, which provides a magnificent backdrop for the grooved sub-dials and the discreet date indication between 4 and 5 o’clock.</h1>
                  <h1 className='news-text-promps' id='news1-post-text'>Titanium is a difficult material to work with but Girard-Perregaux has done a fantastic job particularly on the polished sections on the bezel and bracelet as well as with the chamfering throughout. In fact, there is a healthy amount of polishing when factoring in the center links, the crown and pushers, and the bezel. Too often titanium watches can come off flat but that isn’t the case here at all. Also it is worth noting that the tolerances on the bracelet are particularly impressive with little to no noticeable additional gaps between the links when compared to the steel version. </h1>
                  
              </div>

              <button onClick={doClick2} id='section-2-arrow' className='arrow-btn'>
                <svg className='arrow-svg'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#000000"/>
                </svg>
              </button>
              <div className="carousel-main width-50">
                
                  {news1.map((image, index) => (
                    <div key={index} className="slider-image">
                      {index === currentSlide && <div style={{ backgroundImage: `url(${image})` }} className='div-image-content'></div>}
                    </div>
                  ))}
                <div className="controller-images">
                  <button className='button-0' onClick={() => updateSlider(-1)}><img className='control-arrows' src={leftArrow} alt='left arrow'></img></button>
                  <button className='button-0' onClick={() => updateSlider(1)}><img className='control-arrows' src={rightArrow} alt='left arrow'></img></button>
                </div>
            </div>
          </div>
                
        </div>
        <div ref={ref2} id='section-3' className='section-magazine-wrapper'>
        <div className='news1-content'>
              <div className='text-news1 width-50'>
                  <h1 className='title-news'>The Spirit of Racing: Meet the Junghans 1972 Chronoscope Sports Edition 2024</h1>
                  <h1 className='news-text-promps' id='news1-text'>Sports timekeeping has a long tradition at Junghans. It began in the 1920s with the first hand stopwatches and continued at many major sporting events in the 20th century, including car races, ski world cups, rowing and athletics competitions. Junghans even had its own department to develop sports timekeeping technology, which was then used at major competitions. The highlight was the 1972 Summer Olympics in Munich. That year also gave its name to the sporty model series, which Junghans is expanding this year with quartz chronographs limited to 200 pieces each.</h1>
                  <h1 className='news-text-promps' id='news1-post-text'>The new 1972 Chronoscope Sports Edition 2024 is available with bright red, silver grey and dark green dials that are luminescent thanks to Superluminova on their hands. For a dynamic look, they feature a bold white double stripe and the number 6 in the form of a starting number. The historic logo of Junghans, which can also be found on the case back, provides an interesting contrast to the sporty, modern design of the watch.</h1>
                  <h1 className='news-text-promps' id='news1-post-text'>In accordance with the theme, the color-coordinated leather straps are designed in the style of traditional racing gloves. The 43.3mm stainless steel case, which is pressure-resistant to 10 bar, houses the quartz calibre J645.83 with date indication, 24-hour display and a stopwatch function accurate to 1/5th of a second.</h1>
                  
              </div>

              <button onClick={doClick3} id='section-2-arrow' className='arrow-btn'>
                <svg className='arrow-svg'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#000000"/>
                </svg>
              </button>
              <div className="carousel-main width-50">
                
                  {news2.map((image, index) => (
                    <div key={index} className="slider-image">
                      {index === currentSlide2 && <div style={{ backgroundImage: `url(${image})` }} className='div-image-content'></div>}
                    </div>
                  ))}
                <div className="controller-images">
                  <button className='button-0' onClick={() => updateSlider2(-1)}><img className='control-arrows' src={leftArrow} alt='left arrow'></img></button>
                  <button className='button-0' onClick={() => updateSlider2(1)}><img className='control-arrows' src={rightArrow} alt='left arrow'></img></button>
                </div>
            </div>
          </div>
        </div>
        
        <div ref={ref3} id='section-4' className='section-magazine-wrapper'>
        <div className='news1-content'>
              <div className='text-news1 width-50'>
                  <h1 className='title-news'>Citizen Celebrates a Century of Watchmaking with a Limited Pocket Watch</h1>
                  <h1 className='news-text-promps' id='news1-text'>In 1924, Citizen created its first-ever product: a pocket watch. It was given the name “Citizen” to express the idea of a watch that as many people as possible would be able to use and cherish for a long time. Inspired by that original philosophy and commemorating the anniversary, the Japanese watch manufacture now launches a pocket watch that pays tribute to the original’s aesthetics.</h1>
                  <h1 className='news-text-promps' id='news1-post-text'>The Citizen 100th Anniversary Special Limited Edition Pocket Watch boasts a beautiful ivory-colored dial with blued hands and subsidiary seconds at 6 o’clock. The surface features a stunning pattern that is created by electro-forming, clear coating and polishing to achieve the look of a layer of snow, symbolizing the passage of time. It is protected by a dual spherical sapphire glass with anti-reflective coating that highlights the expression of depth.</h1>
                  <h1 className='news-text-promps' id='news1-post-text'>The manually-wound movement displayed through an exhibition case back is also a feast for the eyes. Like its predecessor from 1924, the bridges are decorated with sensuous parallel lines of equal width composed of 45-degree arc-grained bars, a so-called Côtes de Genève finish. Whether the base plate with its overlapping circular pattern perlage (pearl-pattern) decoration or the diamond-cut bevels of the bridges, every detail is finished with attention to detail.</h1>
                  
              </div>
              <div className="carousel-main width-50">
                
                  {news3.map((image, index) => (
                    <div key={index} className="slider-image">
                      {index === currentSlide3 && <div style={{ backgroundImage: `url(${image})` }} className='div-image-content-last'></div>}
                    </div>
                  ))}
                <div id='margin-adjust' className="controller-images">
                  <button className='button-0' onClick={() => updateSlider3(-1)}><img className='control-arrows' src={leftArrow} alt='left arrow'></img></button>
                  <button className='button-0' onClick={() => updateSlider3(1)}><img className='control-arrows' src={rightArrow} alt='left arrow'></img></button>
                </div>
            </div>
          </div>
        </div>
        
      </section>

    </>
    
  )
}
