export default function Welcome(props) {
    if (props.name==="BC"){
    return <h1>Hello, {props.name} super user</h1>
    } else {
    return <h1>Hello, {props.name}</h1>  
    }
}

export function IntroText() {
    return <p>This is introductory text. It tells you what this page is all about. </p>  
    }


export function Disclaimer() {
    return <p>Disclaimer: The Illumine calculator is for educational purposes only. We cannot predict the performance of equity markets. Our model suggests a probability of success by testing how a hypothetical policy performs in 100 randomly generated market scenarios. The market returns are based on randomly selected 1-year price changes from S&P 500 return history. The insurance policy mechanics are based on the inputs you provide and approximations of account value mechanics used by insurance carriers. Illumine is not approved or endorsed by any carrier. Illumine does not provide investment advice.</p>  
    }