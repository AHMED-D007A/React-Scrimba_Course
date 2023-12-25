import React from "react";
import Header from "./header.js";
import HeroSection from "./hero_section.js";
import Experiences from "./experiences.js";
import cardData from "../data.js";


export default function App() {
    const cardList = cardData.map((item) => {
        return <Experiences key={item.id} data={item} />
    });

    return (
        <div>
            <Header />
            <HeroSection />
            <div className="cards">
                {cardList}
            </div>
        </div>
    )
};