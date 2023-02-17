import './style.css'


function Navbar() {
    return (
       
            <nav className="navbar">
              <div className="navbar-brand">
                <img src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d26e2053-1559-4c05-99ef-44c42cfe87f7/cf47107b-8df8-4929-89bb-a251ac9fa0aa?org_if_sml=1&h=200" height="150px"  alt="My Logo" />
              </div>
              <div className="navbar-menu">
                <a className="navbar-item"  href="/Inicio" style={{ marginLeft:"90px",color: 'white', fontFamily: 'roboto', fontSize: '20px', textDecoration: 'none', }}>
                  INICIO
                </a>
                <a className="navbar-item" href="/sobre a marca"style={{marginRight:"100px", color: 'white', fontFamily: 'roboto', fontSize: '20px',textDecoration: 'none', }}>
                 SOBRE A MARCA
                </a>
                <a className="navbar-item" href="/sobre a coleção"style={{marginRight:"70px",color: 'white', fontFamily: 'Roboto',fontSize: '20px',textDecoration: 'none', }}>
                SOBRE A COLEÇÃO
                </a>
              </div>
              <button className="button"style={{ color: 'blue', fontFamily: 'roboto', fontSize:'14Px',textDecoration: 'underline'  }} href="/Entre em contato">
                ENTRE EM CONTATO 
              </button>
   

            </nav>
          );
        }

        
export default Navbar;