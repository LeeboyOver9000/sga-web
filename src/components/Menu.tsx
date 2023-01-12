import { MenuItem } from './MenuItem';

export const Menu: React.FC = () => {
  const items = [
    'Início',
    'Tutor',
    'Cadastro',
    'Formação',
    'Ofertas',
    'Alocações',
    'Administrativo',
    'Relatórios',
  ];

  return (
    <aside aria-label="menu de navegação">
      <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:h-screen w-full md:w-48 content-center">
        <div className="bg-gray-800 md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
          <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
            {items.map((item, index) => (
              <MenuItem id={index} name={item} />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};
