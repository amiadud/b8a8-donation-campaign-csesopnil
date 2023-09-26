import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {

    const myData = useLoaderData()

    return (
        <div>
           <Banner></Banner>
           <Cards myData ={myData}></Cards>
        </div>
    );
};

export default Home;