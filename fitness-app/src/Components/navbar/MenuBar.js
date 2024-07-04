import { Menu } from "../styles/Containers";
import { ImagemLogo } from "../styles/Imagens";
import { Lista, Item } from "../styles/Lista";
import { useNavigate } from 'react-router-dom';
import Logo from "../imgs/logo.png";

const lista = ["Home", "Login", "Cadastro", "Adicionar Exercicio", "Visualizar treino"];

function MenuBar() {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    //if route adicionar exercicio, navigate to exercise
    if (route === "Adicionar Exercicio") {
      navigate('/exercise');
      return;
    }
    if (route === "Visualizar treino") {
      navigate('/exercises');
      return;
    }
    if (route === "Home") {
      navigate('/');
      return;
    }
    navigate(`/${route.toLowerCase()}`);
  };

  return (
    <div>
      <Menu>
        <ImagemLogo width='60px' height='50px' src={Logo}/>
        <Lista>
          {lista.map((item, index) => {
            return <Item key={index} onClick={() => handleNavigation(item)}>{item}</Item>
          })}
        </Lista>
      </Menu>
    </div>
  );
}

export default MenuBar;
