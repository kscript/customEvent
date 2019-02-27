const Custom = {}
const DEFAULT_OPTIONS = {
  quill: null,
  container: null,
  options: null
}
export default class CustomEvent {
  constructor(quill, options) {
    Custom.quill = quill
    Custom.options = options
    Custom.eventHandlers = (options.events || []).map(item => {
      this.container.addEventListener(item.name, item.handler)
      return item.handler
    })
  }
  destroy() {
    Custom.eventHandlers = []
    (Custom.options.events || []).map(item => {
        Custom.container.removeEventListener(item.name, item.handler)
      })
  }
  get eventHandlers() {
    return Custom.eventHandlers
  }
  get quill() {
    return Custom.quill
  }
  get container() {
    return Custom.options.container || Custom.quill.container.querySelector('.ql-editor')
  }
  get options() {
    return Object.assign({}, DEFAULT_OPTIONS, Custom.options)
  }
}
