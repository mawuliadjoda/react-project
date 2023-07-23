import { useState } from "react";

export const UseRateFilter = () => {
    const [filterRate, setFilterRate] = useState(1);

    const handleRating = (rate: number) => {
        setFilterRate(rate);
    };
    return { filterRate, handleRating };
}