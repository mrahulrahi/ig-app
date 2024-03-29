import './ServiceBlock.css'

interface Block {
    block: BlockProp;
}

interface BlockProp {
    imgUrl: string;
    title: string;
    subTitle: string;
    body: string;
}

const ServiceBlock = ({ block }: Block) => {
    const { imgUrl, title, subTitle, body } = block;

    return (
        <>
            <div className="service-box d-flex flex-wrap justify-content-between align-items-center">
                <div className="service-img overflow-hidden">
                    <img src={imgUrl} alt={`${title} image`} />
                </div>
                <div className="service-content">
                    <h4>{title}</h4>
                    <h5>{subTitle}</h5>
                    <p>{body}</p>
                    <a href="#!" className="btn btn-light">Open</a>
                </div>
            </div>
        </>
    )
}

export default ServiceBlock