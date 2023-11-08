import { useState } from 'react';

const Heading = ({ title }) => {
  return <h1>{title}</h1>;
};

const Button = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ score }) => {
  if (!score.good && !score.neutral && !score.bad) {
    return <div>No feedback given</div>;
  }
  let all = score.good + score.neutral + score.bad;
  let average = all === 0 ? 0 : (score.good - score.bad) / all;
  let positive = all === 0 ? 0 : (score.good / all) * 100;
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="good" value={score.good} />
          <StatisticLine text="neutral" value={score.neutral} />
          <StatisticLine text="bad" value={score.bad} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [score, setScore] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGood = () => {
    setScore((prevScore) => ({ ...prevScore, good: prevScore.good + 1 }));
  };
  const handleNeutral = () => {
    setScore((prevScore) => ({ ...prevScore, neutral: prevScore.neutral + 1 }));
  };

  const handleBad = () => {
    setScore((prevScore) => ({ ...prevScore, bad: prevScore.bad + 1 }));
  };

  return (
    <>
      <Heading title="give feedback" />
      <Button name="good" onClick={handleGood} />
      <Button name="neutral" onClick={handleNeutral} />
      <Button name="bad" onClick={handleBad} />

      {/* <button onClick={handleGood}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button> */}
      <Heading title="statistics" />
      <Statistics score={score} />
    </>
  );
};

export default App;
