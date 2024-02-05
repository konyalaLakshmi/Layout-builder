// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="container">
          <h1 className="heading">Layout</h1>
          <div className="checkbox-group-container">
            <div className="checkbox1">
              <input
                type="checkbox"
                id="left"
                onChange={onChangeLeftNavbar}
                checked={showLeftNavbar}
              />
              <label className="label" htmlFor="left">
                Left Navbar
              </label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="content"
                onChange={onChangeContent}
                checked={showContent}
              />
              <label className="label" htmlFor="content">
                Content
              </label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="right"
                onChange={onChangeRightNavbar}
                checked={showRightNavbar}
              />
              <label className="label" htmlFor="right">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
