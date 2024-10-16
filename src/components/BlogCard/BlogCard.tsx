import Image from 'next/image';
import './BlogCard.css'

interface Card {
    card: CardProp;
}

interface CardProp {
    imgUrl: string;
    title: string;
    body: string;
}

const BlogCard = ({ card }: Card) => {
    const { imgUrl, title, body } = card;

    return (
        <div className="blog-card-box d-flex flex-column bg-glass">
            <div className="blog-card-img overflow-hidden">
                <Image src={imgUrl} alt={`${title} image`} width={4000} height={4000} quality={100} />
            </div>
            <div className="blog-card-text">
                <h6>12, January</h6>
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
            <div className="blog-card-btn mt-auto">
                <a className="btn-link" href="">Learn more</a>
            </div>
        </div>
    )
}

export default BlogCard