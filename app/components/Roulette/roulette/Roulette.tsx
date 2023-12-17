import { ReactNode, createContext, useContext, useState } from 'react';

interface IRouletteContext {
  isStop: boolean;
  isSlowDown: boolean;
  selectedIndex: number;
  rollRoulette: () => void;
  stopRoulette: () => void;
  setSelectedIndex: (value: number) => void;
}

interface IRouletteProps {
  children: ReactNode;
}

//여기는 종류 고정이고, 난수로 pick하는 <li className="animate-heartbeat">{FOODS[selectedIndex]}</li> 여기만 DB 끌어오면 됨.
const FOODS: string[] = ["let's Roll", '떡볶이', '마라탕', '돈까스', '제육볶음', '우동', '칼국수', '아워홈', '햄버거', '비빔밥', '국밥', '뼈해장국', '김치찌개', '초밥', '중국집', '편의점'];

const RouletteContext = createContext<IRouletteContext | undefined>(undefined);

export function Roulette({ children }: IRouletteProps) {
  const [isStop, setIsStop] = useState<boolean>(true);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isSlowDown, setIsSlowDown] = useState<boolean>(false);

  const rollRoulette = () => {
    setIsStop(false);
    console.log('룰렛 시작');
  };

  const stopRoulette = () => {
    console.log('룰렛 감속 시작');
    setIsSlowDown(true);
    setTimeout(() => {
      setIsSlowDown(false);
      console.log('룰렛 종료');
      setIsStop(true);
    }, 2000);
  };

  const rouletteProps = {
    isStop,
    isSlowDown,
    selectedIndex,
    rollRoulette,
    stopRoulette,
    setSelectedIndex,
  };

  return <RouletteContext.Provider value={rouletteProps}>{children}</RouletteContext.Provider>;
}

export const RouletteContainer = ({ children }: IRouletteProps) => {
  return <div className="flex flex-col justify-center items-center gap-5">{children}</div>;
};

export const RouletteSlot = () => {
  const { isStop, isSlowDown, selectedIndex } = useContext(RouletteContext) as IRouletteContext;

  return (
    <div className="h-[100px] w-[200px]">
      <ul className="flex flex-col items-center bg-white text-4xl max-h-[40px] overflow-hidden">
        {isStop ? (
          <li className="animate-heartbeat">{FOODS[selectedIndex]}</li>
        ) : (
          FOODS.slice(1).map((food: string, index: number) => (
            <li className={`max-h-[40px] bg-white text-4xl ${isSlowDown ? 'animate-breaking' : 'animate-rolling'}`} key={index}>
              {food}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export const RouletteRollButton = ({ children }: IRouletteProps) => {
  const { rollRoulette } = useContext(RouletteContext) as IRouletteContext;

  return <button onClick={rollRoulette}>{children}</button>;
};

export const RouletteStopButton = ({ children }: IRouletteProps) => {
  const { isStop, stopRoulette, setSelectedIndex } = useContext(RouletteContext) as IRouletteContext;

  const handleStopButton = () => {
    if (!isStop) {
      stopRoulette();
      // 1 <= randNum <= FOODS.length - 1
      const randNum: number = Math.floor(Math.random() * (FOODS.length - 1)) + 1;
      console.log('선택된 음식: ', FOODS[randNum]);
      setSelectedIndex(randNum);
    }
  };

  return <button onClick={handleStopButton}>{children}</button>;
};

export const RouletteBottons = ({ children }: IRouletteProps) => {
  return <div className="flex gap-10">{children}</div>;
};

export default Roulette;

Roulette.RouletteContainer = RouletteContainer;
Roulette.RouletteSlot = RouletteSlot;
Roulette.RouletteRollBotton = RouletteRollButton;
Roulette.RouletteStopButton = RouletteStopButton;
Roulette.RouletteBottons = RouletteBottons;
