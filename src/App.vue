<script setup>
import './index.css'
import {ref} from 'vue'

const content = ref('')
</script>

<template>
<textarea
  v-model="content"
  class="textarea textarea-bordered"
  placeholder="Text to obfuscate">
</textarea>
<div class="obfuscator-wrapper" :class="content==''?'':'pb-64'">
  <pre class="obfuscator-pre">{{content}}</pre>
</div>
</template>

<style>
.obfuscator-wrapper{
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
  transform: rotate(-15deg) skew(-15deg) translateY(120px);
}
</style>