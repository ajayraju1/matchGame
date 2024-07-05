import {Component} from 'react'
import MatchGameTab from '../MatchGameTab'
import MatchGameThumbnail from '../MatchGameThumbnail'
import MatchGameOver from '../MatchGameOver'
import './index.css'

class MatchGame extends Component {
  state = {score: 0, timerLimit: 60, activeImgObj: {}}

  componentDidMount() {
    this.resetGame()
  }

  getRandomImage = () => {
    const {imagesList} = this.props

    const {id, imageUrl} = imagesList[
      Math.ceil(Math.random() * imagesList.length)
    ]
    return {id, imageUrl}
  }

  resetGame = () => {
    const {imagesList} = this.props
    this.setState({
      isGamePage: true,
      score: 0,
      timerLimit: 60,
      activeImgObj: imagesList[0],
      activeTab: imagesList[0].category,
      site: 'https://ajaymatchgame.ccbp.tech/',
    })

    this.timerId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timerLimit === 1) {
          this.clearTimerInterval()
          return {timerLimit: 0, isGamePage: false}
        }
        return {timerLimit: prevState.timerLimit - 1}
      })
    }, 1000)
  }

  updateActiveTab = tabId => this.setState({activeTab: tabId})

  renderImg = () => {
    const {activeImgObj} = this.state
    return (
      <img src={activeImgObj.imageUrl} className="game-image" alt="match" />
    )
  }

  renderGame = () => {
    const {activeTab} = this.state
    const {tabsList, imagesList} = this.props

    const filteredImagesList = imagesList.filter(
      eachItem => eachItem.category === activeTab,
    )

    return (
      <>
        {this.renderImg()}

        <ul className="game-tabs-con">
          {tabsList.map(eachObject => (
            <MatchGameTab
              tabItem={eachObject}
              isActiveTab={eachObject.tabId === activeTab}
              updateActiveTab={this.updateActiveTab}
              key={eachObject.tabId}
            />
          ))}
        </ul>

        <ul className="game-thumbnails-con">
          {filteredImagesList.map(eachObject => (
            <MatchGameThumbnail
              thumbnailItem={eachObject}
              key={eachObject.id}
              matchThumbnail={this.matchThumbnail}
            />
          ))}
        </ul>
      </>
    )
  }

  clearTimerInterval = () => {
    clearInterval(this.timerId)
  }

  renderGameOverCard = score => {
    this.clearTimerInterval()
    return <MatchGameOver score={score} resetGame={this.resetGame} />
  }

  matchThumbnail = thumbnailId => {
    const {isGamePage, score, activeImgObj} = this.state
    const {id} = activeImgObj

    if (thumbnailId === id) {
      this.setState({score: score + 1, activeImgObj: this.getRandomImage()})
      return
    }
    this.setState({isGamePage: !isGamePage})
    this.renderGameOverCard()
  }

  render() {
    const {isGamePage, score, timerLimit} = this.state

    return (
      <div className="game-bg-con">
        <ul className="game-nav-con">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              className="game-logo"
              alt="website logo"
            />
          </li>

          <li className="game-score-time-con">
            <p className="game-score-txt">Score: </p>
            <p className="game-score-time">{score}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              className="game-timer-img"
              alt="timer"
            />
            <p className="game-score-time">{timerLimit} sec</p>
          </li>
        </ul>
        <div className="game-body-con">
          {isGamePage ? this.renderGame() : this.renderGameOverCard(score)}
        </div>
      </div>
    )
  }
}

export default MatchGame
