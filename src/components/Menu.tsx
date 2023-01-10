export const Menu: React.FC = () => {
  return (
    <aside aria-label="menu de navegação">
      <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:h-screen w-full md:w-48 content-center">
        <div className="bg-gray-800 md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
          <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
              >
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                  Início
                </span>
              </a>
            </li>
            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
              >
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                  Tutor
                </span>
              </a>
            </li>
            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
              >
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                  Cadastro
                </span>
              </a>
            </li>
            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600"
              >
                <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                  Formação
                </span>
              </a>
            </li>
            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
              >
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                  Ofertas
                </span>
              </a>
            </li>
            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
              >
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                  Alocações
                </span>
              </a>
            </li>
            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
              >
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                  Administrativo
                </span>
              </a>
            </li>
            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
              >
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                  Relatórios
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
