import Avatar from "../../assets/img/avatar.jpg";
import JohnWick from "../../assets/img/john-wick.jpg";
import Shazan from "../../assets/img/shazan.jpg";
import Sayen from "../../assets/img/sayen.jpg";
import TheMagiciansElephant from "../../assets/img/the-magicians-elephant.jpg";
import Sniper from "../../assets/img/sniper.jpg";

export default function PeliculasMasPopulares() {
  return (
    <section className="content">
      <h2>Más populares</h2>
      <article className="person-boxes">
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="box-avatar">
            <img src={Avatar} alt="Avatar" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Avatar: The Way of Water</h2>
            <p className="bio-position">Ciencia Ficción</p>
          </div>
          <div className="box-actions">
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="box-avatar">
            <img src={JohnWick} alt="john-wick" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">John Wick: Chapter 4</h2>
            <p className="bio-position">Acción</p>
          </div>
          <div className="box-actions">
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="box-avatar">
            <img src={Shazan} alt="shazan" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Shazam! Fury of the Gods</h2>
            <p className="bio-position">Fantasía</p>
          </div>
          <div className="box-actions">
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="box-avatar">
            <img src={Sayen} alt="sayen" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Sayen</h2>
            <p className="bio-position">Acción</p>
          </div>
          <div className="box-actions">
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="box-avatar">
            <img src={TheMagiciansElephant} alt="Avatar" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">The Magician&apos;s Elephant</h2>
            <p className="bio-position">Animación</p>
          </div>
          <div className="box-actions">
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="box-avatar">
            <img src={Sniper} alt="Avatar" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">Sniper: The White Raven</h2>
            <p className="bio-position">Guerra</p>
          </div>
          <div className="box-actions">
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
