interface cardInfoProp {
    name: string;
    description: string;
    image?: string
}


export const Card = (props: cardInfoProp)=>{
const {name, description, image} = props;
return (
    <div className="card">
    <h4><b>{name}</b></h4>
    <p>{description}</p>
    <img src={image}></img>
</div>
)
}