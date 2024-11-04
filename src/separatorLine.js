const Component = require('./component')

class SeparatorLine extends Component {
  separator
  length

  constructor (separator = '-', length = 40) {
    super()
    this.separator = separator
    this.length = length
  } 

  print () {
    let s
    for(let i=0; i<=length.length; i++) {
      s+=this.separator
  }
  return s + '\n'

}
module.exports = SeparatorLine