import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left">
              <h1 className="h1">Left Navbar Menu</h1>
              <ul className="ul">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content">
              <h1 className="h1">Content</h1>
              <p className="para">
                Lorem ipsum jhsgygciihks thinna nubthinna m chehgug thunav
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right">
              <h1 className="h1">Right Navbar </h1>
              <div className="c">
                <div className="rItem">Ad 1</div>
                <div className="rItem">Ad 2</div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
