import React from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  cost: string;
  subject: string;
}

interface TeacherListProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherListProps> = ({ teacher }) => {

  function createTeacherConnection() {
    api.post('connections', {
      user_id: teacher.id
    })
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora:
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a 
          target="_blank" 
          onClick={createTeacherConnection} 
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;