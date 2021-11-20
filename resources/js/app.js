import Alpine from 'alpinejs'
import modal from './components/modal'
import dropdown from './components/dropdown'

Alpine.data('modal', modal)
Alpine.data('dropdown', dropdown)

window.Alpine = Alpine

Alpine.start()
