import React, { Component } from 'react'

import textOptions from './textOptions'
import TextInput from './TextInput'
import ShrunkText from './ShrunkText'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      options: []
    }
    // this.updateText = this.updateText.bind(this)
  }

  render () {
    // const text = this.state.text
    // const shrunkText = this.shrinkText()
    return (
      <div className='App container'>
        <h1>TweetShrink</h1>
        <div className='row'>
          <div className='col'>
            {/* TextEntry */}
            <TextInput />
            {/* end TextEntry */}
          </div>
          <div className='col'>
            {/* ShrunkText */}
            <div className='TextEntry-shrunk-text'>
              <ShrunkText />
              {/* end ShrunkText */}
            </div>
          </div>
          <div className='row options'>
            <div className='col-12'>
              <h4>Options</h4>
            </div>
            {/* TextOptions */}
            {textOptions.map((option, idx) => (
              <div key={idx} className='col-6'>
                {/* TextOption */}
                <label htmlFor={option.id}>
                  <input type='checkbox' id={option.id} onChange={this.setOption(option.id)} /> {' ' + option.label}
                </label>
                {/* end TextOption */}
              </div>
            ))}
            {/* end TextOptions */}
          </div>
        </div>
      </div>
    )
  }
}

export default App
