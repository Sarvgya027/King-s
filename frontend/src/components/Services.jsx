import React from 'react'

function Services() {
  const services = [
    {
      id: 1,
      url: "/birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/camping.jpg",
      title: "Camping Planning",
    },
    {
      id: 4,
      url: "/gamenight.jpg",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "/party.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "/wedding.jpg",
      title: "Wedding Planning",
    }
  ]




  return (
    <div className="services container">
      <h2>Our Services</h2>
      <div className="banner">
        {
          services.map((element) => {
            return (
              <div key={element.id} className="item">
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Services
