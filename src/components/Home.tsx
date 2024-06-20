import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function Home() {
  const navigate = useNavigate();
  const startGame = () => {
    navigate("/game");
  };

  return (
    <>
      <div style={{ textAlign: "center", padding: "50px", minHeight: "80vh" }}>
        <h1>Welcome to the Number Guesser Game</h1>
        <p>Try to guess the secret number between 1 and 100.</p>
        <Button type="primary" onClick={startGame} size="large">
          Start Game
        </Button>
      </div>
    </>
  );
}

export default Home;
