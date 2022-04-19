import {useState, useEffect} from "react";

const Game = () => {
  const [computerChoice, setComputerChoice] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [result, setResult] = useState(null);
  const selection = ["🧱", "📰", "✂️", "🦎", "🖖"];

  const handleClick = (value) => {
      setUserChoice(value);
      random();
  };

  const random = () => {
    const randomSelection =
      selection[Math.floor(Math.random() * selection.length)];
    setComputerChoice(randomSelection);
  };

  useEffect(() => {
      switch (userChoice + computerChoice) {
        case "🧱🧱":
        case "📰📰":
        case "✂️✂️":
        case "🦎🦎":
        case "🖖🖖":
          setResult("DRAW!");
          break;
        case "🧱🦎":
        case "🧱✂️":
        case "🖖🧱":
        case "📰🧱":
        case "📰🖖":
        case "✂️📰":
        case "🦎📰":
        case "✂️🦎":
        case "🦎🖖":
        case "🖖✂️":
          setResult("You Won, Impossible....");
          break;
        case "🧱🖖":
        case "🧱📰":
        case "🦎🧱":
        case "✂️🧱":
        case "📰✂️":
        case "📰🦎":
        case "🖖📰":
        case "✂️🖖":
        case "🦎✂️":
        case "🖖🦎":
          setResult("HA! YOU LOSE!");
          break;
    }
  }, [computerChoice, userChoice]);

  return (
    <>
      <h1>Lets Settle This, Make Your Move!</h1>
      <div>
        <div>
            <h3>You have selected</h3>
        </div>
        <div className="show">{userChoice}</div>
        <div>
            <h3>Computer has selected</h3>
        </div>
        <div className="show computer">{computerChoice}</div>
        <h2>{result}</h2>
        <div className="btn">
          {selection.map((select, index) => (
            <button key={index} onClick={() => handleClick(select)}>
              {select}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;