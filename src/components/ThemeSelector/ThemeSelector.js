export default {
  data() {
    return {
      themes: [
        "dark",
        "light"
      ],
      currentTheme: 'light'
    }
  },

  mounted() {
    this.app = document.querySelector('#app')
    let theme = localStorage.getItem('theme')
    if (theme)
      this.currentTheme = theme
    this.app.className = this.currentTheme
  },

  watch: {
    currentTheme(newTheme) {
      localStorage.setItem('theme', newTheme)
      this.app.className = newTheme
    }
  }
}