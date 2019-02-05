<template>
    <div class="face-cursor py-5 px-3 display-2 thin">{{ displayedMsg + cursor }}</div>
</template>


<script>

export default {
  name: 'Header',
  data () {
    return {
      msg: "Riley Robertson",
      msgInterval: null,
      cursorInterval: null,
      msgIdx: 1,
      cursor: "_"
    }
  },
  computed: {
    displayedMsg: function() {
      return this.msg.slice(0, this.msgIdx)
    }
  },
  methods: {
    toggleCursor: function() {
      this.cursor = (this.cursor === "_") ? "" : "_";
    },
    clearCursor: function() {
      this.cursor = "";
      clearInterval(this.cursorInterval);
    },
    type: function() {
      if (this.msgIdx < this.msg.length) {
        // Add some random spice to the typing effect
        if (Math.random() < 0.64) {
          this.msgIdx += 1
        } else if (this.msgIdx > 1 && Math.random() < 0.25) {
          this.msgIdx -= 1
        }
      } else if (this.msgInterval) {
        // Done typing. Clear both intervals
        clearInterval(this.msgInterval);
        setTimeout(this.clearCursor, 5041)
      }
    }
  },
  mounted: function() {
    this.cursorInterval = setInterval(this.toggleCursor, 625);
    this.msgInterval = setInterval(this.type, 144)
  }
}
</script>


<style scoped>
  .face-cursor {
    cursor: url('~@/assets/cursor.png') 64 64, crosshair; /* Place hotspot in the middle of 128x128 image */
  }

  .thin {
      font-weight: 200;
  }

</style>