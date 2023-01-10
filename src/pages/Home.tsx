import { EditalSummary } from '../components/EditalSummary';

export const Home: React.FC = () => {
  return (
    <main className="bg-white text-gray-600 md:ml-48">
      <div className="px-5 py-24 mx-auto">
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
