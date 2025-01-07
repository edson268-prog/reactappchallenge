import { useEffect } from "react"

const About = () => {
    useEffect(() => {
        const clickear = () => {
            console.log("Clickear");
        }

        window.addEventListener("click", clickear);
        
        return () => {
            window.removeEventListener("click", clickear);
        };
    }, [])

    return (
        <div>
            <div className="container">
                <h1 className="main-title">About</h1>
                <p>Este es el componente "About"</p>
            </div>
        </div>
    )
}

export default About;
