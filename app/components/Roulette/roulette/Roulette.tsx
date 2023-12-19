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

function RouletteRoot({ children }: IRouletteProps) {
  const [isStop, setIsStop] = useState<boolean>(true);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isSlowDown, setIsSlowDown] = useState<boolean>(false);

  const rollRoulette = () => {
    setIsStop(false);
  };

  const stopRoulette = () => {
    setIsSlowDown(true);
    setTimeout(() => {
      setIsSlowDown(false);
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

const RouletteContents = ({ children }: IRouletteProps) => {
  return <div className="flex flex-col justify-center items-center gap-60 h-[700px] w-[430px] bg-bill-background">{children}</div>;
};

const RouletteSlot = () => {
  const { isStop, isSlowDown, selectedIndex } = useContext(RouletteContext) as IRouletteContext;

  return (
    <ul className="flex flex-col items-center justify-center gap-5 bg-transparent text-6xl max-h-[70px] w-full px-10 overflow-hidden">
      {isStop ? (
        <li className="animate-heartbeat text-center">{FOODS[selectedIndex]}</li>
      ) : (
        FOODS.slice(1).map((food: string, index: number) => (
          <li className={`max-h-[70px] text-center ${isSlowDown ? 'animate-breaking' : 'animate-rolling'}`} key={index}>
            {food}
          </li>
        ))
      )}
    </ul>
  );
};

const RouletteRollButton = ({ children }: IRouletteProps) => {
  const { rollRoulette } = useContext(RouletteContext) as IRouletteContext;

  return <button onClick={rollRoulette}>{children}</button>;
};

const RouletteStopButton = ({ children }: IRouletteProps) => {
  const { isStop, stopRoulette, setSelectedIndex } = useContext(RouletteContext) as IRouletteContext;

  const handleStopButton = () => {
    if (!isStop) {
      stopRoulette();
      // 1 <= randNum <= FOODS.length - 1
      const randNum: number = Math.floor(Math.random() * (FOODS.length - 1)) + 1;
      setSelectedIndex(randNum);
    }
  };

  return <button onClick={handleStopButton}>{children}</button>;
};

const RouletteButtons = ({ children }: IRouletteProps) => {
  return <div className="flex gap-10">{children}</div>;
};

export const Roulette = Object.assign(RouletteRoot, {
  Contents: RouletteContents,
  Slot: RouletteSlot,
  RollButton: RouletteRollButton,
  StopButton: RouletteStopButton,
  Buttons: RouletteButtons,
});
