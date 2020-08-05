import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEp3PaDuaDKJw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=NBFeChM3fwZnRMQwJZziUQG-VZ1kXWBX8KHCzMgy4wA" alt="Eric Martins"/>
        <div>
          <strong>Eric Martins</strong>
          <span>Lógica de programação</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br/> <br/>
        Suspendisse euismod, massa congue laoreet vulputate, justo purus rutrum dolor, ac ornare nibh libero tristique nisl. Praesent sagittis lacus id scelerisque pulvinar.
      </p>

      <footer>
        <p>
          Preço/Hora:
          <strong>R$90,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;