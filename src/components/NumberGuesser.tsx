import React, { useState } from "react";
import { Input, Button, message, Modal } from "antd";

const NumberGuesser: React.FC = () => {
  const [secretNumber, setSecretNumber] = useState<number>(
    generateRandomNumber()
  );
  const [guess, setGuess] = useState<string>("");
  const [attempts, setAttempts] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const maxAttemptNum = 10;

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuessing = () => {
    const numGuess = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (numGuess === secretNumber) {
      message.success("Congratulations! You guessed the correct number!");
      setGameOver(true);
    } else if (attempts + 1 >= maxAttemptNum) {
      message.error(`Game over! The correct number was ${secretNumber}.`);
      setGameOver(true);
    } else if (numGuess < secretNumber) {
      message.warning("Too low!");
    } else if (numGuess > secretNumber) {
      message.warning("Too high!");
    }
  };

  const resetGame = () => {
    setSecretNumber(generateRandomNumber());
    setGuess("");
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", minHeight: "93vh" }}>
      <h1>Number Guesser Game</h1>
      <Input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={gameOver}
        style={{ width: "200px", marginBottom: "10px" }}
        placeholder="Enter your guess"
      />
      <br />
      <Button onClick={handleGuessing} disabled={gameOver}>
        Guess
      </Button>
      <Button type="default" onClick={resetGame} style={{ marginLeft: "10px" }}>
        Reset Game
      </Button>

      <Modal
        title="Game Over"
        visible={gameOver}
        onOk={resetGame}
        onCancel={resetGame}
      >
        <p>
          {attempts >= maxAttemptNum
            ? `You lost! The number was ${secretNumber}.`
            : "Congratulations! You guessed it right!"}
        </p>
      </Modal>
    </div>
  );
};

export default NumberGuesser;
