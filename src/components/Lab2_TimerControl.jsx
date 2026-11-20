import { useEffect, useState } from 'react';

// LAB 2 (Slide 10): Timer Start / Stop / Reset
export default function Lab2TimerControl() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    // TODO 1: running이 false면 타이머를 만들지 않기
    if (!running) return; // 실행중 이 아니니 즉시 리턴

    // TODO 2: running이 true면 setInterval로 1초마다 count 증가
    const id = setInterval(() => {
      setCount(prev => prev + 1); // true 니 위에 if문에서 걸리지 않고 내려와서 카운트 증가
    }, 1000);

    // TODO 3: Cleanup에서 clearInterval 호출
    return () => {  clearInterval(id); }; // 재실행 되기 전 비우기  

  }, [running]);

  const reset = () => {
    // TODO 4: 타이머를 멈추고 count를 0으로 초기화
    setRunning(false);
    setCount(0);
    // running 을 true 에서 false 로 바꾼 뒤  카운트를 0으로 초기화
  };

  return (
    <div>
      <p className="status">상태: {running ? 'Running' : 'Stopped'}</p>
      <div className="count">{count}</div>
      <div className="controls">
        <button onClick={() => setRunning(true)} disabled={running}>Start</button>
        <button className="secondary" onClick={() => setRunning(false)} disabled={!running}>Stop</button>
        <button className="secondary" onClick={reset}>Reset</button>
      </div>
      <p className="hint">Start/Stop 버튼의 State 변경과 Effect 실행의 관계를 확인하세요.</p>
    </div>
  );
}
