import { Card } from "../components/Card/Card";

export const Godparents = () => {

    const mockedData = [
        {
            src: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Queridos padrinhos"
        },
        {
            src: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Queridos padrinhos"
        },
        {
            src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Queridos padrinhos"
        },
        {
            src: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Queridos padrinhos"
        },
        {
            src: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Queridos padrinhos"
        },
        {
            src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Queridos padrinhos"
        }
    ];

    return (
        <div>
            {
                mockedData.map(card => {
                    return (
                        <Card image={card.src} description={card.description} />
                    )
                })
            }
        </div>
    );
}