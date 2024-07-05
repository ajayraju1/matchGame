import './index.css'

const MatchGameTab = props => {
  const {tabItem, isActiveTab, updateActiveTab} = props
  const {tabId, displayText} = tabItem

  const onClickTAb = () => {
    updateActiveTab(tabId)
  }

  const activeClass = isActiveTab ? 'active-tab' : ''

  return (
    <li className="tab-con">
      <button className="tab-btn" type="button" onClick={onClickTAb}>
        <h1 className={`tab-txt ${activeClass}`}>{displayText}</h1>
      </button>
    </li>
  )
}

export default MatchGameTab
