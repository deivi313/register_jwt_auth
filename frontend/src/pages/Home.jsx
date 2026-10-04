import Game from "./Game";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl my-5">
        {props.name ? "Hi " + props.name : "You are not logged in"}
      </h1>

      {props.name && (
        <button
          className="text-xl cursor-pointer px-10 py-3 my-2 bg-gray-600 text-white border rounded hover:bg-gray-800 ease-in"
          id="game-button"
          onClick={() => navigate("/game")}
        >
          Play the game
        </button>
      )}
    </div>
  );
};

export default Home;
