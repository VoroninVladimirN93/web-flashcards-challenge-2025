import { Outlet, NavLink } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">X-Powered-By: Низкоуровневые сущности 🐲 🐳 🐴 🐵 🐶 🐷 🐸 🐹 🐺 🐻 🐼 🐽 🐾 </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={isActive => "nav-link" + (!isActive ? " active" : "")} to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={isActive => "nav-link" + (!isActive ? " active" : "")} to={'/tasks'}>Tasks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={isActive => "nav-link" + (!isActive ? " active" : "")} to={'/registration'}>Registration</NavLink>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>

            <section className="container mt-3">
                <Outlet />
            </section>
        </>
    );
}

export default Nav;