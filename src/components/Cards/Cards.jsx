import Card from "../Card/Card";

const Cards = ({myData}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20'>
            {
                myData?.map(card => <Card key={card.id} card ={card}></Card>)
            }
        </div>
    );
};

export default Cards;