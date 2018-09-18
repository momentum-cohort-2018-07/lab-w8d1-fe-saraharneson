import React, { Component } from 'react'

// import TextInput from './TextInput'
import textOptions from './textOptions'
import TextOption from './TextOption'

class ShrunkText extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      options: []
    }
    this.shrinkText = this.shrinkText.bind(this)
  }

  shrinkText () {
    let { text, options } = this.state

    if (!text) {
      return ''
    }

    let opObj
    options.forEach(option => {
      opObj = textOptions.find(o => o.id === option)
      if (opObj) {
        text = opObj.fn(text)
      }
    })

    return text
  }

  render () {
    const text = this.state.text
    const shrunkText = this.shrinkText()
    return (
      <div>
        <div className='TextEntry-shrunk-text'>
          {shrunkText}
        </div>
        <div>
          {shrunkText && `${shrunkText.length} characters`}
        </div>
      </div>
    )
  }
}

export default ShrunkText
