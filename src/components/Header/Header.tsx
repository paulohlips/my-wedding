import { Menu } from "./Menu/Menu"
import backgroundImage from "../../../src/assets/images/background.png"

export const Header = () => {
    return (
        <div style={style}>
            <Menu />
            <Banner />
            <WelcomeTile />
        </div>
    )
}

const WelcomeTile = () => {
    return (
        <div style={{
            backgroundColor: '#DE9B86',
            height: '80px', display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5vh'
        }}>
            <p style={{ color: '#FFFFFF', fontSize: 64 }}>Sejam bem-vindos ao nosso site</p>
        </div>
    )
}

const Banner = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20vh' }}>
            <img style={{ maxHeight: '100vh' }} src="../../../src/assets/images/monogram.png" />
        </div>
    )
}

const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

