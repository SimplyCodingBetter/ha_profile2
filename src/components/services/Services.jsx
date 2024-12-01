import React from 'react'
import './Services.css'
import image1 from '../../assests/service-1.svg'
import image2 from '../../assests/service-2.svg'
import image3 from '../../assests/service-3.png'

const data = [
  {
    id: 1,
    image:  image2,
    title: "Code Machine",
    description:
      "I love writing code—it feels like art to me. Give me a machine and an idea, and I’ll work on it for days, weeks, or even months. Yeah, I might have a problem. 😅 ",
  },
  {
    id: 2,
    image:  image3 ,
    title: "Web Development",
    description:
      "Web development is my favorite. One of my first accomplishments was converting a desktop app into a web app. It was a big milestone for me, and from then on, I fell in love with it.",
  },
  {
    id: 3,
    image: image1,
    title: "Fishing",
    description:
      "I love fishing—nothing beats a calm day at the lake! If I’m not in the city, you know where I’ll be! 😄",
  },
];

data.sort((a,b) => a.value-b.value)

const Services = () => {


  
 return <section className="services container section" id='services'  >
  <h2 className="section__title">Hobbies</h2>

  <div className="services__container grid">



  {data.map(({id, image, title, description}) =>{
    return(
      <div className="services__card" key={id}  >

        <img src={image} alt="" className="services__img"/>

        <h3 className="services__title">{title}</h3>
        <p className="services__description">{description}</p>
      </div>
    )
  })}


  </div>
 </section>
}

export default Services
