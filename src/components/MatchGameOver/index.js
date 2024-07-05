import './index.css'

const MatchGameOver = props => {
  const {score, resetGame} = props
  const onClickResetBtn = () => {
    resetGame()
  }

  return (
    <div className="game-over-card-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="game-trophy-img"
        alt="trophy"
      />

      <p className="game-score-txt">YOUR SCORE</p>
      <h1 className="game-score">{score}</h1>
      <button
        className="play-again-btn"
        type="button"
        onClick={onClickResetBtn}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          className="reset-btn"
          alt="reset"
        />
        <p className="reset-btn-txt">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default MatchGameOver
