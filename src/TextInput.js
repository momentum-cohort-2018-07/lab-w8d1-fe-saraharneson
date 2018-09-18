import React, { Component } from 'react'

// import textOptions from './textOptions'

class TextInput extends Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }

    this.updateText = this.updateText.bind(this)
  }

  updateText (event) {
    this.setState({ text: event.target.value })
  }

  render () {
    const text = this.state.text

    return (
      <div>
        <textarea
          className='TextEntry-textbox'
          placeholder='What do you want to shrink?'
          onChange={this.updateText}
          value={text} />
        <div>
          {text && `${text.length} characters`}
        </div>
      </div>
    )
  }
}
export default TextInput
