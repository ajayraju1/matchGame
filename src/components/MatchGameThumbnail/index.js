import './index.css'

const MatchGameThumbnail = props => {
  const {thumbnailItem, matchThumbnail} = props
  const {id, thumbnailUrl} = thumbnailItem

  const onClickThumbnail = () => {
    matchThumbnail(id)
  }

  return (
    <li className="game-thumbnail-con">
      <button onClick={onClickThumbnail} type="button">
        <img src={thumbnailUrl} className="game-thumbnail" alt="thumbnail" />
      </button>
    </li>
  )
}
export default MatchGameThumbnail
