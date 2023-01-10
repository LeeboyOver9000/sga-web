import arrowImage from '../assets/arrow.svg';

interface EditalSummaryProps {
  date: Date;
  title: string;
  summary: string;
}

export const EditalSummary: React.FC<EditalSummaryProps> = ({
  date,
  title,
  summary,
}) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">Edital</span>
        <span className="mt-1 text-gray-500 text-sm">
          {new Intl.DateTimeFormat('pt-BR').format(date)}
        </span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed">{summary}</p>
        <a className="link text-indigo-500 inline-flex items-center mt-4">
          Clique para mais informações sobre o edital
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
