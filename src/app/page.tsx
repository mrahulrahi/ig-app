import Hero from "@/components/Hero/Hero";

export default function Home() {

 const filterData = [
  {
    title: "ALL Property",
    count: 10
  },
  {
    title: "Apartment",
    count: 10
  },
  {
    title: "House",
    count: 10
  }
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

