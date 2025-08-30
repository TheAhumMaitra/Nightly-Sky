import '.\componets.css'
export default function Navbar() {
    return(
        <>
            <nav className="navbar bg-[#0c0c26] bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                        Nightly
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Posts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Posts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Posts</a>
                        </li>
                    </ul>
                    </div>
            </nav>
        </>
    )
}
