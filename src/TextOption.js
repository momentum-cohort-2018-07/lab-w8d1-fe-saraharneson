import React, { Component } from 'react'
import textOption from './textOptions'

class TextOption extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      options: []
    }
    this.setOption = this.setOption.bind(this)
  }

  setOption (option) {
    return (event) => {
      const value = event.target.checked
      console.log(value)
      const optionSet = new Set(this.state.options)
      if (value) {
        optionSet.add(option)
      } else {
        optionSet.delete(option)
      }
      this.setState({
        options: [...optionSet]
      })
    }
  }

  render () {
    return (
      <div>
        <label htmlFor={option.id}>
          <input type='checkbox' id={option.id} onChange={this.setOption(option.id)} /> {' ' + option.label}
        </label>
      </div>
    )
  }
}
export default TextOption
