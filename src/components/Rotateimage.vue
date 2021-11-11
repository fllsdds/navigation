<template>
  <div class="rotateimage" @touchstart="touchstart" @touchmove="touchmove" @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup">
    <div class="container">
      <div class="example"><img src="../assets/logo1.png" alt="" /></div>
      <div class="example"><img src="../assets/logo2.png" alt="" /></div>
      <div class="example"><img src="../assets/logo3.png" alt="" /></div>
      <div class="example"><img src="../assets/logo4.png" alt="" /></div>
      <div class="example"><img src="../assets/logo5.png" alt="" /></div>
      <div class="example"><img src="../assets/logo6.png" alt="" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rotateimage',
  data () {
    return {
      rotateTimes_right: 0,
      page_number: 0
    }
  },
  methods: {
    checkpage () {
      if (this.page_number === -1) {
        this.page_number = 5
      } else if (this.page_number === 6) {
        this.page_number = 0
      }
    },
    touchstart (e) {
      this.startX = e.touches[0].clientX
      this.startY = e.touches[0].clientY
      this.rotate_door = true
    },
    touchmove (e) {
      e.preventDefault()
      this.moveX = e.touches[0].clientX
      this.moveY = e.touches[0].clientY
      this.startX - this.moveX <= 0
        ? console.log('你在往右滑')
        : console.log('你在往左滑')
      if (this.startX - this.moveX <= -100) {
        const distance = this.moveX - this.startX
        if (distance > 50 && this.rotate_door) {
          // distance -= 200 * this.rotateTimes
          this.rotate_door = false
          const container = document.querySelector('.container')
          this.rotateTimes_right++
          container.style.transform =
            'rotateY(' + 60 * this.rotateTimes_right + 'deg)'
          this.page_number--
          this.checkpage()
          this.$emit('refresh', this.page_number)
        }
      } else if (this.startX - this.moveX >= 100) {
        // eslint-disable-next-line camelcase
        const distance_2 = this.startX - this.moveX
        // eslint-disable-next-line camelcase
        if (distance_2 > 50 && this.rotate_door) {
          this.rotate_door = false
          const container = document.querySelector('.container')
          this.rotateTimes_right--
          container.style.transform =
            'rotateY(' + 60 * this.rotateTimes_right + 'deg)'
          this.page_number++
          this.checkpage()
          this.$emit('refresh', this.page_number)
        }
      }
    },
    mousedown (e) {
      this.startX = e.clientX
      this.startY = e.clientY
      this.rotate_door = true
    },
    mousemove (e) {
      e.preventDefault()
      this.moveX = e.clientX
      this.moveY = e.clientY
      this.startX - this.moveX <= 0
        ? console.log('你在往右滑')
        : console.log('你在往左滑')
      if (this.startX - this.moveX <= -100) {
        const distance = this.moveX - this.startX
        if (distance > 50 && this.rotate_door) {
          // distance -= 200 * this.rotateTimes
          this.rotate_door = false
          const container = document.querySelector('.container')
          this.rotateTimes_right++
          container.style.transform =
            'rotateY(' + 60 * this.rotateTimes_right + 'deg)'
          this.page_number--
          this.checkpage()
          this.$emit('refresh', this.page_number)
        }
      } else if (this.startX - this.moveX >= 100) {
        // eslint-disable-next-line camelcase
        const distance_2 = this.startX - this.moveX
        // eslint-disable-next-line camelcase
        if (distance_2 > 50 && this.rotate_door) {
          this.rotate_door = false
          const container = document.querySelector('.container')
          this.rotateTimes_right--
          container.style.transform =
            'rotateY(' + 60 * this.rotateTimes_right + 'deg)'
          this.page_number++
          this.checkpage()
          this.$emit('refresh', this.page_number)
        }
      }
    },
    mouseup () {
      console.log('触发了mouseup')
      this.rotate_door = false
    }
  }
}
</script>

<style lang="less" scoped>
/* css reset */
* {
  box-sizing: border-box;
}
*:after,
*:before {
  box-sizing: border-box;
}
* {
  padding: 0;
  margin: 0;
}

.rotateimage {
  height: 100px;
}

.container {
  position: absolute;
  width: 100px;
  height: 60px;
  left: 50%;
  top: 20px;
  margin-left: -50px;
  transform-style: preserve-3d;
  transition: 1s;
  perspective: 7000px;
  animation: rotateAn 3s ease-in-out 1s;
  .example {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100px;
    height: 60px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    bottom: 0;
    background-color: #fff;
  }
}

@media screen and (min-width: 500px) {
  .rotateimage {
  height: 160px;
}
  .container {
  position: absolute;
  width: 200px;
  height: 120px;
  left: 50%;
  top: 20px;
  margin-left: -100px;
  transform-style: preserve-3d;
  transition: 1s;
  perspective: 7000px;
  animation: rotateAn 3s ease-in-out 1s;
  .example {
    display: flex;
    align-items: center;
    position: absolute;
    width: 200px;
    height: 120px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    bottom: 0;
    background-color: #fff;
  }
  .example:nth-child(1) {
  transform: rotateY(0) translateZ(220px);
}

.example:nth-child(2) {
  transform: rotateY(60deg) translateZ(220px);
}

.example:nth-child(3) {
  transform: rotateY(120deg) translateZ(220px);
}

.example:nth-child(4) {
  transform: rotateY(180deg) translateZ(220px);
}

.example:nth-child(5) {
  transform: rotateY(240deg) translateZ(220px);
}

.example:nth-child(6) {
  transform: rotateY(300deg) translateZ(220px);
}
}
}

.example:nth-child(1) {
  transform: rotateY(0) translateZ(160px);
}

.example:nth-child(2) {
  transform: rotateY(60deg) translateZ(160px);
}

.example:nth-child(3) {
  transform: rotateY(120deg) translateZ(160px);
}

.example:nth-child(4) {
  transform: rotateY(180deg) translateZ(160px);
}

.example:nth-child(5) {
  transform: rotateY(240deg) translateZ(160px);
}

.example:nth-child(6) {
  transform: rotateY(300deg) translateZ(160px);
}

@keyframes rotateAn {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}

img {
  max-height: 100%;
  margin-left: 1%;
  max-width: 98%;
  -webkit-user-select:none;
}
</style>
