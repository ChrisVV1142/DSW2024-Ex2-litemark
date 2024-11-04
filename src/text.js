const Component = require('./component')

class Text extends Component {
text

constructor (text = '') {
  super()
  this.text = text
}

print () {
  return this.text + '\n'
}

countWords(t) {
 
}

}

module.exports = Text