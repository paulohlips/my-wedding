import { Menu } from "./Menu/Menu"
import backgroundImage from "../../../src/assets/images/background.png"

export const Header = () => {
    return (
        <div >
            <Menu />
            <Banner />
        </div>
    )
}

const Banner = () => {
    return (
        <div style={style}>
            <p>B IMAGE P</p>
            <p>Beatriz e Paulo Henrique</p>
            <p>13.09.25</p>
        </div>
    )
}

const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: "100vh",
};

