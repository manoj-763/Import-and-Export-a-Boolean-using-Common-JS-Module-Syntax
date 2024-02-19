// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  renderAuthButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return <button type="button">Subscribed</button>
    }
    return <button type="button">Subscribe</button>
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thankyou! Happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default Welcome
