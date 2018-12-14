export const state = () => ({
  title: 'TITLE',
  icon: '',
  color: '',
  bgColor: '#fff',
  index: true,
})

export const getters = {
}

export const mutations = {
  setInfo(state, info) {
    Object.keys(info).forEach(k => {
      state[k] = info[k]
    })
  },
  setTitle(state, title) {
    state.title = title
  },
  setIcon(state, icon) {
    state.icon = icon
  },
  setColor(state, color) {
    state.color = color
  },
  setIndex(state, index) {
    state.index = index
  },
  setBgColor(state, bgColor) {
    state.bgColor = bgColor
  },
}

export const actions = {
}
