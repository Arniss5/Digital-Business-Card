import facebook from './images/facebook.png'
import github from './images/github.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'

export function Footer() {
    return (
        <div className="footer">
            <img src={facebook} className="icon"></img> 
            <img src={github} className="icon"></img> 
            <img src={instagram} className="icon"></img> 
            <img src={twitter} className="icon"></img> 
        </div>
    )
}