import './FeatureCard.css'

interface Card {
    card: CardProp;
}

interface CardProp {
    imgUrl: string;
    title: string;
}

const FeatureCard = ({ card }: Card) => {
    const { imgUrl, title } = card;

    return (
        <div className="feature-card-box w-100 h-100 d-flex align-items-center justify-content-center gap-4">
            <div className="feature-card-img d-flex align-items-center justify-content-center">
                <img src={imgUrl} alt={`${title} image`} />
            </div>
            <div className="feature-card-title text-center d-flex align-items-center justify-content-center">{title}</div>
        </div>
    )
}

export default FeatureCard