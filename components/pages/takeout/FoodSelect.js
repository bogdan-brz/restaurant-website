import styles from "./FoodSelect.module.css";
import { useState } from "react";
import SelectPage from "./SelectPage";

const dummyMenu = [
    {
        title: "Appetizers",
        selection: [
            {
                id: 0,
                name: "Pierog Ruski",
                price: "$22.30",
                description:
                    "very good Pierog Ruski with farsz (mashed potatoes and cheese, but tastes nothing like you'd imagine the combination of those things to taste like.",
            },
            {
                id: 1,
                name: "Pierog with meat",
                price: "$21.30",
                description: "very good Pierog with meat.",
            },
            {
                id: 2,
                name: "Pierog with cheese",
                price: "$21.30",
                description: "very good Pierog with cheese.",
            },
        ],
    },
    {
        title: "Main Course",
        selection: [
            {
                id: 3,
                name: "Pierog with cheese",
                price: "$21.30",
                description: "very good Pierog with cheese.",
            },
            {
                id: 4,
                name: "Pierog Ruski",
                price: "$22.30",
                description:
                    "very good Pierog Ruski with farsz (mashed potatoes and cheese, but tastes nothing like you'd imagine the combination of those things to taste like.",
            },
            {
                id: 5,
                name: "Pierog with meat",
                price: "$21.30",
                description: "very good Pierog with meat.",
            },
        ],
    },
];

const FoodSelect = (props) => {
    const [selectId, setSelectId] = useState(0);
    const menu = dummyMenu;
    return (
        <div className={styles.foodselect}>
            <SelectPage
                title={menu[selectId].title}
                selection={menu[selectId].selection}
            />
        </div>
    );
};

export default FoodSelect;
