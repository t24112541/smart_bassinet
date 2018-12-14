<template>
  <v-container class="info-menu" grid-list-lg>
    <v-layout wrap>
      <v-flex xs6 sm4 md3 lg2 v-for="item in items" :key="item.id">
        <div class="menu-btn elevation-2" v-ripple @click="$router.push(item.path)" :style="buttonStyle">
          <div class="text" v-html="item.title"/>
          <div class="icon" :class="item.icon"/>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
    color: {
      type: String,
      default: '#2BA6E2',
    },
  }, // props

  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.color,
      }
    },
  }, // computed
}
</script>
<style lang="scss" scoped>
.info-menu {
  .menu-btn {
    position: relative;
    display: flex;
    background-color: #2BA6E2;
    padding: 0 8px 8px 12px;
    margin: 0;
    min-height: 96px;
    border-radius: 4px;
    color: #fff;
    .text {
      font-size: 18px;
      align-self: center;
      flex-grow: 1;
    }
    .icon {
      position: absolute;
      bottom: 8px;
      right: 8px;
      font-size: 48px;
    }
  }
}
</style>
