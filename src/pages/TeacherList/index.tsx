import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import './styles.css';
import Select from '../../components/Select';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">

          <Select 
              name="subject" 
              label="Máteria"
              options={[
                { value:'Artes', label: 'Artes' },
                { value:'Ingês', label: 'Ingês' },
                { value:'Física', label: 'Física' },
                { value:'Química', label: 'Química' },
                { value:'História', label: 'História' },
                { value:'Biologia', label: 'Biologia' },
                { value:'Português', label: 'Português' },
                { value:'Geografia', label: 'Geografia' },
                { value:'Matemática', label: 'Matemática' },
                { value:'Educação física', label: 'Educação física' },
                { value:'Lógica de programação', label: 'Lógica de programação' },
              ]}
          />

          <Select 
            name="week_day" 
            label="Dia da semana"
            options={[
              { value:'0', label: 'Domingo' },
              { value:'1', label: 'Segunda-feira' },
              { value:'2', label: 'Terça-feira' },
              { value:'3', label: 'Quarta-feira' },
              { value:'4', label: 'Quinta-feira' },
              { value:'5', label: 'Sexta-feira' },
              { value:'6', label: 'Sábado' },
            ]}
          />

          <Input type="time" label="Hora" name="time"/>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;