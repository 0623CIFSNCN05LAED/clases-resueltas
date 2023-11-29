import logoDh from "../assets/img/logo-dh.png"

export default function Menu(){
    const iconStyle = {
        fontSize: '1.5rem',
        color: 'cornflowerblue',
      };


    return (
        <header className="menu-wrap">
			<figure className="user">
				<div className="user-avatar">
					<img src={logoDh} alt="Logo Digital House	"/>
				</div>
				<figcaption>
					Digital House
				</figcaption>
			</figure>
			<nav>
				<section className="dicover">
					<h3>Opciones</h3>
					<ul>
						<li>
							<a href="#">
								<i className="bi bi-film" style={iconStyle}></i>
								- Películas
							</a>
						</li>
						<li>
							<a href="#">
								<i className="bi bi-play-circle" style={iconStyle}></i>
								- Cines
							</a>
						</li>
						<li>
							<a href="#">
								<i className="bi bi-person" style={iconStyle}></i>
								- Géneros
							</a>
						</li>
						<li>
							<a href="#">
								<i className="bi bi-bar-chart"></i>
								- Más populares
							</a>
						</li>
						<li>
							<a href="#">
								<i className="bi bi-tags"></i>
								- Promociones
							</a>
						</li>
						<li>
							<a href="#">
								<i className="bi bi-graph-up"></i>
								- Estadísticas
							</a>
						</li>
					</ul>
				</section>
			</nav>
		</header>
    )
}