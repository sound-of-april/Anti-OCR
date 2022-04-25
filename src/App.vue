<script setup>

import './index.css'
import {ref} from 'vue'

const content = ref(`
　　电幕上的声音仍在没完没了地报告俘虏、战利品、杀戮的故事，但是外面的欢呼声已经减退了一些。服务员们又回去工作了。温斯顿飘飘然坐在那里，也没有注意到酒杯里又斟满了酒。他现在不在跑，也不在叫了。他又回到了友爱部，一切都已原谅，他的灵魂洁白如雪。他站在被告席上，什么都招认，什么人都咬。他走在白色瓷砖的走廊里，觉得象走在阳光中一样，后面跟着一个武装的警卫。等待已久的子弹穿进了他的脑袋。他抬头看着那张庞大的脸。他花了四十年的功夫才知道那黑色的大胡子后面的笑容是什么样的笑容。哦，残酷的、没有必要的误会！哦，背离慈爱胸怀的顽固不化的流亡者！他鼻梁两侧流下了带着酒气的泪。但是没有事，一切都很好，斗争已经结束了。他战胜了自己。他热爱老大哥。`)

const useVertical = ref(true)
const usePixelFont = ref(true)
const useSkewAndLines = ref(false)

const expandResult = ref(false)

</script>

<template>

<div class="form-control" :class="expandResult?'hidden':''">

  <h1 class="text-3xl">反OCR文本混淆器</h1>
  <label class="label">
    <span class="label-text">要混淆的文本</span>
  </label> 
  <textarea
    v-model="content"
    class="container textarea textarea-bordered"
    placeholder="Text to obfuscate">
  </textarea>
  <label class="label cursor-pointer">
    <span class="label-text">竖排文字</span>
    <input type="checkbox" v-model="useVertical" class="checkbox">
  </label>
  <label class="label cursor-pointer">
    <span class="label-text">像素字体</span>
    <input type="checkbox" v-model="usePixelFont" class="checkbox">
  </label>
  <label class="label cursor-pointer">
    <span class="label-text">倾斜和参考线</span>
    <input type="checkbox" v-model="useSkewAndLines" class="checkbox">
  </label>
  
</div>

<label class="btn btn-ghost btn-square bg-white border-2 border-solid border-black hover:border-black swap fixed bottom-2 right-2 z-50">
  
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" v-model="expandResult"/>
  
  <img class="swap-off w-16 h-16" src="./assets/expand.svg" alt="">
  <img class="swap-on" src="./assets/minimize.svg" alt="">
  
</label>

<div
  ref="obfuscatorDom"
  class="obfuscator-wrapper overflow-auto bg-white rounded-lg"
  :class="content==''?'':'pb-64 lg:pb-96',usePixelFont?'font-bitmap':'', useSkewAndLines?'wrapper-lines':'', useVertical?'':'', expandResult?'-m-4':''"
>
  <div
    class="obfuscator-pre"
    :class="useSkewAndLines?'obfuscator-skew':'', useVertical?'obfuscator-vertical container columns-1':''">{{content}}</div>
</div>
</template>

<style>
.wrapper-lines{
  background-image: repeating-linear-gradient(black 0px, black 3px, transparent 3px, transparent 17px);
  image-rendering: pixelated;
  background-repeat: repeat-y;
  background-size: 100% 16px;
}
.obfuscator-pre {
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 1rem;
  font-size: 16px;
  margin: 1rem;
}
.obfuscator-vertical {
  writing-mode: vertical-rl;
  height: 80vh;
  margin: 0 auto;
  margin-top: 5vh;
  padding-left: 2em;
  padding-right: 2em;
}
.obfuscator-skew{
  transform: rotate(-15deg) skew(-15deg) translateY(120px);
}
@media (min-width: 1024px) {
  .obfuscator-skew {
    transform: rotate(-15deg) skew(-15deg) translateY(180px);
  }
}
.btn:hover {
  @apply bg-white;
}
</style>