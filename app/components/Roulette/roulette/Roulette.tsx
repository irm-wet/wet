import { ReactNode, createContext, useContext, useState } from 'react';

interface IRouletteContext {
  isStop: boolean;
  rollRoulette: () => void;
  stopRoulette: () => void;
  selectedIndex: number;
  setSelectedIndex: (value: number) => void;
}

interface IRouletteProps {
  children: ReactNode;
}

const FOODS: string[] = [
  '분식',
  '마라탕',
  '돈까스',
  '제육볶음',
  '우동',
  '햄버거',
];

const RouletteContext = createContext<IRouletteContext | undefined>(undefined);

export function Roulette({ children }: IRouletteProps) {
  const [isStop, setIsStop] = useState<boolean>(true);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const rollRoulette = () => {
    setIsStop(false);
    console.log('룰렛 시작');
  };

  const stopRoulette = () => {
    setIsStop(true);
    console.log('룰렛 멈춤');
  };

  const rouletteProps = {
    isStop,
    rollRoulette,
    stopRoulette,
    selectedIndex,
    setSelectedIndex,
  };

  return (
    <RouletteContext.Provider value={rouletteProps}>
      {children}
    </RouletteContext.Provider>
  );
}

export const RouletteBody = ({ children }: IRouletteProps) => {
  return (
    <div>
      <ul>
        {FOODS.map((food: string, index: number) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
};

export const RouletteRollButton = ({ children }: IRouletteProps) => {
  const { rollRoulette } = useContext(RouletteContext) as IRouletteContext;

  return <button onClick={rollRoulette}>{children}</button>;
};

export const RouletteStopButton = ({ children }: IRouletteProps) => {
  const { stopRoulette, setSelectedIndex } = useContext(
    RouletteContext,
  ) as IRouletteContext;

  const handleStopButton = () => {
    stopRoulette();
    // 1 <= randNum <= FOODS.length - 1
    const randNum: number = Math.floor(Math.random() * (FOODS.length - 1)) + 1;
    setSelectedIndex(randNum);
  };

  return <button onClick={handleStopButton}>{children}</button>;
};

export const RouletteBottons = ({ children }: IRouletteProps) => {
  return <div className='flex gap-10'>{children}</div>;
};

export default Roulette;

Roulette.RouletteBody = RouletteBody;
Roulette.RouletteRollBotton = RouletteRollButton;
Roulette.RouletteStopButton = RouletteStopButton;
Roulette.RouletteBottons = RouletteBottons;
