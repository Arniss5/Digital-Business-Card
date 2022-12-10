import facebook from './images/facebook.png'
import github from './images/github.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'

export function Footer() {
    return (
        <div className="footer">
            <img src={twitter} className="footer-icon" alt=''></img> 
            <img src={facebook} className="footer-icon" alt=''></img> 
            <img src={instagram} className="footer-icon" alt=''></img>
            <img src={github} className="footer-icon" alt=''></img> 
        </div>
    )
}  