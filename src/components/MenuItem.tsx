interface MenuItemProps {
  id: number;
  name: string;
  active?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  active = false,
}) => {
  return (
    <li key={id} className="mr-3 flex-1">
      <a
        href="#"
        className={`block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 font-bold ${
          active ? 'border-blue-600' : 'border-gray-800 hover:border-red-500'
        } `}
      >
        <span className="pb-1 md:pb-0 text-xs md:text-base md:text-gray-200 block md:inline-block">
          {name}
        </span>
      </a>
    </li>
  );
};
