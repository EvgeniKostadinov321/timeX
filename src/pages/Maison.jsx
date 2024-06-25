import React from 'react'
import back from '/green_back_new.png'
import maison from '/maison.jpg'

export default function Maison() {
  return (
    <section className='maisonSection' style={{ backgroundImage: `url(${back})` }}>
      <div className='maison-hero'>
        <div className='div-40'>
          <h1 id='heading-maison'>From Waterbury Clocks to Taking Time: The Story of Timex</h1>
          <p className='parag-maison'>Timex, a name synonymous with affordable and reliable timekeeping, boasts a rich history that stretches back to the days of pocket watches and ticking clocks. But the brand itself wasn't born in 1854, the year the Waterbury Clock Company, Timex's origin story, began. It all started with a vision and a catchy name, courtesy of a shrewd businessman named Thomas Olsen.</p>
          <p className='parag-maison'>Waterbury, Connecticut, in 1854, was a hub of American industry. The Waterbury Clock Company, established in that very year, churned out pocket watches and clocks, keeping the nation on schedule. For decades, the company thrived, but by the 1940s, it faced financial difficulties. Enter Thomas Olsen, a man with a keen eye for potential. In 1941, Olsen acquired the struggling Waterbury Clock Company. He recognized the value of the company's heritage and skilled workforce, but he also saw the need for change.</p>
          <p className='parag-maison'>The watch industry was on the cusp of a revolution. Wristwatches were gaining popularity, and pocket watches were slowly becoming relics of the past. Olsen knew the Waterbury Clock Company needed to adapt. He envisioned a brand that would make quality wristwatches accessible to everyone, not just the elite.</p>
          <p className='parag-maison'>The name "Timex" was born during this period of transformation. Legend has it that Olsen, inspired by the popular magazine "Time" and the ubiquitous tissue brand "Kleenex," aimed for a name that was catchy, memorable, and spoke to the very essence of the product – time. Timex, a clever portmanteau, perfectly embodied that vision.</p>
          <p className="parag-maison">In 1950, the Timex brand officially launched its first wristwatch. It was an instant success. Timex watches were known for their durability, affordability, and innovative features. The iconic Timex Marlin, released in the 1960s, with its slim design and elegant look, became a style icon.</p>
          <p className="parag-maison">But Timex wasn't content with just making stylish watches. They constantly pushed boundaries. In 1984, they revolutionized the fitness tracker with the launch of the Timex Ironman, the world's first sports watch. This innovative timepiece became a companion for athletes and everyday people alike, inspiring them to push their limits.</p>
          <p className="parag-maison">Today, Timex remains a leader in the watch industry. The brand that started with a vision of making quality timekeeping accessible to all has evolved into a global icon. From the pocket watches of Waterbury to the cutting-edge sports watches of today, Timex continues to tell the story of time, one reliable tick at a time.</p>
          
        </div>
        <div className='div-60' style={{ backgroundImage: `url(${maison})` }}>

        </div>
      </div>
    </section>
  )
}
