import logo from '../../src/logo.svg'

export default function Info() {
    return (
        <div className="info">
            <img src={logo} alt="avatar" />
            <h2 className='name'>Ogoh Blessing</h2>
            <p className="role">Fontend Developer</p>
            <small>ogoh_blessing@yahoo.com</small>
            <button>Email</button>
        </div>
    )
}