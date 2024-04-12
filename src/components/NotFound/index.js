// Not Found JS code

import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img src="" alt="not found" className="not-found-img" />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </>
)

export default NotFound
