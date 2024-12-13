import Image from 'next/image'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero-container position-relative overflow-hidden">
            <div className="container position-relative z-3">
                <div className="hero-top">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-content-wrapper d-flex align-items-center">
                                <div className="hero-content">
                                    <h1>Property you need</h1>
                                </div>
                                <div className="hero-img-box">
                                    <div className="hero-img position-relative">
                                        <Image src="/images/hero-img.png" alt="hero img" fill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-bottom position-relative">
                    <div className="hero-line-wrapper d-flex flex-wrap">
                        <div className="hero-line-box"></div>
                        <div className="hero-line-box"></div>
                        <div className="hero-line-box d-none d-md-block"></div>
                        <div className="hero-line-box d-none d-md-block"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-list w-100 d-flex flex-wrap position-relative">
                                <div className="hero-item">
                                    <div className="hero-box w-100 h-100 d-flex flex-column">
                                        <div className="hero-box-icon">
                                            <Image src="/images/hero-icon-1.png" alt="hero icon" width={120} height={120} quality={100} />
                                        </div>
                                        <div className="hero-box-content mt-auto">
                                            <h6>Buy Property</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-item">
                                    <div className="hero-box w-100 h-100 d-flex flex-column">
                                        <div className="hero-box-icon">
                                            <Image src="/images/hero-icon-2.png" alt="hero icon" width={120} height={120} quality={100} />
                                        </div>
                                        <div className="hero-box-content mt-auto">
                                            <h6>Sell Property</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-item">
                                    <div className="hero-box w-100 h-100 d-flex flex-column">
                                        <div className="hero-box-icon">
                                            <Image src="/images/hero-icon-3.png" alt="hero icon" width={120} height={120} quality={100} />
                                        </div>
                                        <div className="hero-box-content mt-auto">
                                            <h6>Rent Property</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-item">
                                    <div className="hero-box w-100 h-100 d-flex flex-column">
                                        <div className="hero-box-icon">
                                            <Image src="/images/hero-icon-4.png" alt="hero icon" width={120} height={120} quality={100} />
                                        </div>
                                        <div className="hero-box-content mt-auto">
                                            <h6>Shops</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-item">
                                    <div className="hero-box w-100 h-100 d-flex flex-column">
                                        <div className="hero-box-icon">
                                            <Image src="/images/hero-icon-5.png" alt="hero icon" width={120} height={120} quality={100} />
                                        </div>
                                        <div className="hero-box-content mt-auto">
                                            <h6>Sell Plot</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-item">
                                    <div className="hero-box w-100 h-100 d-flex flex-column">
                                        <div className="hero-box-icon">
                                            <Image src="/images/hero-icon-1.png" alt="hero icon" width={120} height={120} quality={100} />
                                        </div>
                                        <div className="hero-box-content mt-auto">
                                            <h6>House</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-item">
                                    <div className="hero-box w-100 h-100 d-flex flex-column">
                                        <div className="hero-box-icon">
                                            <Image src="/images/hero-icon-2.png" alt="hero icon" width={120} height={120} quality={100} />
                                        </div>
                                        <div className="hero-box-content mt-auto">
                                            <h6>Commercial</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-item">
                                    <div className="hero-box w-100 h-100 d-flex flex-column">
                                        <div className="hero-box-icon">
                                            <Image src="/images/hero-icon-3.png" alt="hero icon" width={120} height={120} quality={100} />
                                        </div>
                                        <div className="hero-box-content mt-auto">
                                            <h6>Rent Apartment</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero