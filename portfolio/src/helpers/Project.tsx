import uploadImg from '../assets/uploadproject.png';
import trybewalletImg from '../assets/trybewallet.png';
import todoImg from '../assets/todo-list.png';
import gitCollectionImg from '../assets/gitCollection.png';

export const projectList = {
  toDo: {
    title: 'Todo-list',
    description:
      'Lista de tarefas com varias funções para uma completa organização das tarefas que irão ser feitas ao longo dos dias. Feita com HTML, CSS e Javascript, bem como o uso da web storage para armazenar os dados.',
    thumb: todoImg,
  },
  trybeWallet: {
    title: 'Trybewallet',
    description:
      'Um app para o controle de gastos, Utilizando uma API de conversão de moedas para o caso de o usuário utilizar moedas estrangeiras.',
    thumb: trybewalletImg,
  },
  uploadProject: {
    title: 'Upload Project',
    description:
      'Projeto de upload de arquivos com dropzone. Contém tooltips e uma barra de progresso para melhorar a usabilidade.',
    thumb: uploadImg,
  },
  gitCollection: {
    title: 'Git Collection',
    description: 'Um app para explorar os repositório existentes do github',
    thumb: gitCollectionImg,
  },
};
