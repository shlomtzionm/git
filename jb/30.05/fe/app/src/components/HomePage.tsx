import { useState, useEffect } from "react";

interface Product{
    name:string,
    price:number
}
export const HomePage = () => {
    const [data, setData] = useState<Product[]>([]);
    const [category, setCategory] = useState<string>("");

    const fetchData = () => {
        fetch("http://localhost:3000/products")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange =(value:string)=>{
        fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }

    return (
        <>
            <select onChange={(e)=>handleChange(e.target.value)}>
                {data.map((item) => (
                    <option>{item.name}</option>
                ))}
            </select>
        </>
    );
};
