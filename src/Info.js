import avatar from './images/avatar.jpg'
import email from './images/email.png'
import linkedin from './images/linkedin.png'


export function Info() {
    return (
        <div className='info'>
            <img src={avatar} alt="Kasia's photograph" className="avatar"></img>
            <h1>Kasia Dobrowolska</h1>
            <p className="job-title">Frontend Developer</p>
            <p className='info-text'>github.com/Arniss5</p>
            <div className='btns-container'>
                <button className='btn email'>
                    <img src={email} className="icon"></img>
                    Email
                </button>
                <button className='btn LinkedIn'>
                    <img src={linkedin} className="icon"></img>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}