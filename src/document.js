const Component = require('./component')

class Document {
  title
  #author
  #date
  #component

  constructor (title, author = 'Anónimo') {
    this.title = title
    if (author.trim().length < 3) {
      this.#author = 'Anónimo'
    }
    else this.#author = author
  }

  get author () {
    return this.#author
  }

  set author (text) {
    if (text.trim().length > 3) this.#author = text
    else return 'Anónimo'
    return this.#author
  }

  static linebreak () {
    return '/n'
  }

  print () {
    let date = new Date(now())
    return `Título: ${this.title} 
    Autor: ${this.#author}
    Fecha: ${date}`
  }
}

module.exports = Document
