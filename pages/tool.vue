<script lang="ts" setup>
let player = null

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  player = new HWPlayer('test', {
    width: 480,
    height: 300,
    controls: true,
  }, () => {})
  player.src({
    type: 'application/x-mpegURL',
    src: '',
  }) as any
  player.play()
})
useHead({
  link: [
    { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/video.js/7.5.4/alt/video-js-cdn.css' },
    { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/videojs-resolution-switcher/0.4.2/videojs-resolution-switcher.css' },
  ],
  script: [
    { src: 'https://cdn.bootcdn.net/ajax/libs/video.js/7.5.4/video.js', defer: true },
    { src: 'https://media-cache.huaweicloud.com/video/hwplayer/1.3.0/dist/hwplayer.js', defer: true },
    { src: 'https://cdn.bootcdn.net/ajax/libs/videojs-resolution-switcher/0.4.2/videojs-resolution-switcher.js', defer: true },
  ],
})
</script>

<template>
  <video
    id="test"
    controls width="480" height="300"
    class="video-js vjs-default-skin vjs-big-play-centered"
  />
</template>

<style lang="less">
</style>
