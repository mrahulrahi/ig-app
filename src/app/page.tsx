import Image from 'next/image';
import Hero from "@/components/Hero/Hero";

export default function Home() {

  const filterData = [
    { title: "ALL Property", count: 10 },
    { title: "Apartment", count: 10 },
    { title: "House", count: 10 }
  ]

  const propertyCards = [
    { id: '1', imgUrl: '/images/house-img-1.jpg' }
  ]

  return (
    <>
      <Hero />
      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h3>Latest Properties</h3>
              </div>

              <div className="filter-row d-flex flex-wrap gap-3">
                {filterData.map((item, index) => (
                  <div className={`filter-box d-flex align-items-center justify-content-between ${index === 0 ? 'active' : ''}`} key={index}>
                    <div className="filter-title">{item.title}</div>
                    <div className="filter-count">{item.count}</div>
                  </div>
                ))}
              </div>

              <div className="property-card-list">
                {propertyCards.map((card) => (
                  <div className="property-card-item" key={card.id}>
                    <div className="property-card-box w-100 h-100">
                      <div className="property-card-img"><Image src={card.imgUrl} alt="" fill /></div>
                      <div className="property-card-content">
                        <div className="tcc-row d-flex align-items-center justify-content-between">
                          <h5 className="flex-grow-1">{title}</h5>
                          <div className="tour-price d-flex align-items-center gap-1 ms-auto fw-bold"><FaRupeeSign />{price * 30}</div>
                        </div>
                        <div className="tcc-inside d-flex flex-column mt-auto">
                          <div className="property-card-row d-flex flex-wrap rounded-2 overflow-hidden">
                            <div className="property-card-col d-flex align-items-center justify-content-between w-100 "><FaMapLocationDot /><address>{location}</address></div>
                            <div className="property-card-col d-flex align-items-center justify-content-between"><MdChair />{seat} Seats</div>
                            <div className="property-card-col d-flex align-items-center justify-content-between"><BiTrip />{distance} km</div>
                            <div className="property-card-col d-flex align-items-center justify-content-between"><MdTour />{type}</div>
                          </div>

                        </div>
                      </div>
                    </div>
                ))}
                  </div>
            </div>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading">
                  <h3>Featured Properties</h3>
                </div>

                <div className="filter-row d-flex flex-wrap gap-3">
                  {filterData.map((item, index) => (
                    <div className={`filter-box d-flex align-items-center justify-content-between ${index === 0 ? 'active' : ''}`} key={index}>
                      <div className="filter-title">{item.title}</div>
                      <div className="filter-count">{item.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      );
}

