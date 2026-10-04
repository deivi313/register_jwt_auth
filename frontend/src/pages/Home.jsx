const Home = (props) => {
  return (
    <div>
      <h1>{props.name ? "Hi " + props.name : "You are not logged in"}</h1>

      {props.name && (
        <button id="game-button" onClick={() => navigate("/game")}>
          Play the game
        </button>
      )}
    </div>
  );
};

export default Home;
