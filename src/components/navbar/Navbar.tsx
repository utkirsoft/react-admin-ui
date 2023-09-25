import './navbar.scss'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>Utkirbek</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon"/>
                <img src="/app.svg" alt="" className="icon"/>
                <img src="/expand.svg" alt="" className="icon"/>
                <div className="notification">
                    <img src="/notifications.svg" alt=""/>
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/352309653_277145754685317_4478000672231544502_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=u6y-3vhC1koAX_1t7VG&_nc_ht=scontent.ftas9-1.fna&oh=00_AfB4bN_UZllV8I4FhV03go-9eE4XYwwqW8Bn2_qM1TeFLA&oe=6515EF10" alt=""/>
                    <span>Sattarov Utkir</span>
                </div>
                <img src="/settings.svg" alt="" className="icon"/>
            </div>
        </div>
    )
}
export default Navbar
