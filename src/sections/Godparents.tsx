import styles from './Godparents.module.css'
import { Title } from "../components/Title/Title";
import { SlideWindow } from "../components/SlideWindow/SlideWindow";

export const Godparents = () => {
    return (
        <div id='Padrinhos' className={styles.godParents}>
            <Title title="Sobre os Padrinhos" styles={styles.godParentsTitle} />
            <div className={styles.slides}>
                <SlideWindow data={mockedData} />
            </div>
        </div>
    );
}

const mockedData = [
    {
        id: 100 * Math.random(),
        src: "/assets/images/godparents-isla.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "/assets/images/godparents-isla.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "/assets/images/godparents-isla.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "/assets/images/godparents-isla.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "/assets/images/godparents-isla.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "/assets/images/godparents-isla.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    }
];