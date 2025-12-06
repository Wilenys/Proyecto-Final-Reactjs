import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">

      <div className="home-banner-box">
        <img 
          className="home-banner" 
          src={`${import.meta.env.BASE_URL}images/Inicio.jpg`} 
          alt="Banner principal"
        />
      </div>

      <h1 className="home-title">Bienvenidos a mi página</h1>

      <p className="home-text">
        Encontrá los mejores productos al mejor precio.
      </p>
      
    </div>
  );
};
