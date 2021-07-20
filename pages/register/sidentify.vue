<template>
  <view class="s-canvas">
    <canvas
      canvas-id="s-canvas"
      id="s-canvas"
      style="width: 100px; height: 30px"
    ></canvas>
  </view>
</template>
<script>
// :width="contentWidth"
// :height="contentHeight"
export default {
  name: "sIdentify",
  props: {
    identifyCode: {
      type: String,
      default: "1234",
    },
    fontSizeMin: {
      type: Number,
      default: 25,
    },
    fontSizeMax: {
      type: Number,
      default: 30,
    },
    backgroundColorMin: {
      type: Number,
      default: 255,
    },
    backgroundColorMax: {
      type: Number,
      default: 255,
    },
    colorMin: {
      type: Number,
      default: 0,
    },
    colorMax: {
      type: Number,
      default: 160,
    },
    lineColorMin: {
      type: Number,
      default: 100,
    },
    lineColorMax: {
      type: Number,
      default: 255,
    },
    dotColorMin: {
      type: Number,
      default: 0,
    },
    dotColorMax: {
      type: Number,
      default: 255,
    },
    contentWidth: {
      type: Number,
      default: 100,
    },
    contentHeight: {
      type: Number,
      default: 30,
    },
  },
  methods: {
    // 生成一个随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 生成一个随机的颜色
    randomColor(min, max) {
      let r = this.randomNum(min, max);
      let g = this.randomNum(min, max);
      let b = this.randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    drawPic() {
      let ctx = uni.createCanvasContext("s-canvas");
      ctx.setTextBaseline("bottom");
      // 绘制背景
      ctx.setFillStyle(
        this.randomColor(this.backgroundColorMin, this.backgroundColorMax)
      );
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight);
      for (let i = 0; i < this.identifyCode.length; i++) {
        this.drawText(ctx, this.identifyCode[i], i);
      }
      ctx.draw(true);
      this.drawLine(ctx);
      this.drawDot(ctx);
    },
    drawText(ctx, txt, i) {
      ctx.setFillStyle(this.randomColor(this.colorMin, this.colorMax));
      ctx.font =
        this.randomNum(this.fontSizeMin, this.fontSizeMax) + "px SimHei";
      let x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1));
      let y = this.randomNum(this.fontSizeMax, this.contentHeight - 5);
      let deg = this.randomNum(-30, 30);
      // 修改坐标原点和旋转角度
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((deg * Math.PI) / 180);
      ctx.fillText(txt, 0, 0);
      ctx.restore();
    },
    drawLine(ctx) {
      ctx.save();
      // 绘制干扰线
      for (let i = 0; i < 5; i++) {
        ctx.setStrokeStyle(
          this.randomColor(this.lineColorMin, this.lineColorMax)
        );
        ctx.beginPath();
        ctx.moveTo(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight)
        );
        ctx.lineTo(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight)
        );
        ctx.stroke();
      }
      ctx.restore();
      ctx.draw(true);
    },
    drawDot(ctx) {
      ctx.save();
      // 绘制干扰点
      for (let i = 0; i < 80; i++) {
        ctx.setFillStyle(this.randomColor(0, 255));
        ctx.beginPath();
        ctx.arc(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight),
          1,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
      ctx.restore();
      ctx.draw(true);
    },
  },
  watch: {
    identifyCode() {
      this.drawPic();
    },
  },
  mounted() {
    this.drawPic();
  },
};
</script>
<style scoped>
.s-canvas {
  height: 30px;
}
.s-canvas canvas {
  margin-top: 1px;
  margin-left: 8px;
}
</style>