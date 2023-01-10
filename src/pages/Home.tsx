import { EditalSummary } from '../components/EditalSummary';

export const Home: React.FC = () => {
  return (
    <main className="bg-white text-gray-600 md:ml-48">
      <div className="bg-gray-800 pt-3">
        <div className="rounded-tl-3xl mt-24 md:mt-16 bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
          <h1 className="font-bold pl-2">Início</h1>
        </div>
      </div>

      <div className="px-5 pt-0 pb-20 md:pb-24 mx-auto">
        <div className="divide-y-2 divide-solid divide-gray-600">
          <EditalSummary
            date={new Date()}
            title={'Título do Edital'}
            summary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem
            sapiente nemo magnam atque pariatur voluptatibus porro ex laboriosam
            hic, temporibus architecto eaque officia vitae molestias? Qui dolores
            voluptatum possimus.`}
          />
          <EditalSummary
            date={new Date()}
            title={'Título do Edital'}
            summary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem
            sapiente nemo magnam atque pariatur voluptatibus porro ex laboriosam
            hic, temporibus architecto eaque officia vitae molestias? Qui dolores
            voluptatum possimus.`}
          />
          <EditalSummary
            date={new Date()}
            title={'Título do Edital'}
            summary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem
            sapiente nemo magnam atque pariatur voluptatibus porro ex laboriosam
            hic, temporibus architecto eaque officia vitae molestias? Qui dolores
            voluptatum possimus.`}
          />
        </div>
      </div>
    </main>
  );
};
