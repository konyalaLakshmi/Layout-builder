// Write your code here
import Footer from '../Footer'

import Body from '../Body'

import Header from '../Header'

const Layout = () => (
  <div className="main-container">
    <div className="responsive-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
