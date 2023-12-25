import React from "react";
import Header from "./header.js";
import Journals from "./journals.js";
import Data from "../data.js"

export default function App() {
    const cardList = Data.map((item) => {
        return <Journals data={item} />
    });

    return (
        <div>
            <Header />
            {cardList}
        </div>
    )
}