# nuxt3 引用华为云播放器

1. 因华为云没有npm相关的包，官方文档上只提供了对应的cdn，在nuxt中我们需要通过`useHead`这个组合式api来引入华为云CDN。
```ts
useHead({
  script: [
    { src: 'https://media-cache.huaweicloud.com/video/hwplayer/1.3.0/dist/hwplayer.js', defer: true },
  ],
})
```
---
2. 通过引入华为云CDN后，需要在页面上创建一个`<video />`来作播放容器，然后在代码中进行一系列初始化设置。
```html
<!-- 注意ID，后续我们需要对这个id操作 -->
<video
    id="test"
    controls width="480" height="300"
    class="video-js vjs-default-skin vjs-big-play-centered"
/>
```

```ts
onMounted(() => {
  // 因为我们在ts环境中，HWPlayer是通过cdn引入的，无法获取到这个实例方法
  // 所以需要用这个注释来屏蔽编辑器对我们的类型检查
  // @ts-expect-error
  player = new HWPlayer('test', {
    width: 480,
    height: 300,
    controls: true,
  }, () => {})
  player.src({
    type: 'application/x-mpegURL', // 流设置: m3u8
    src: '播放地址',
  })
})
```
---
3. 如果一切顺利，你会发现依旧是无法使用，控制台中会显著的告诉你`Uncaught (in promise) ReferenceError: videojs is not defined`<br>
nuxt无法加载hwplayer的videojs引入，所以这时候我们手动将videojs相关的依赖都引入进来,通过查看源代码可以确定需要加载的版本是7.5.4，且需要一个`videojs-resolution-switcher`插件。
```ts
// 不要忘记css的引入
useHead({
  link: [
    { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/video.js/7.5.4/alt/video-js-cdn.css' },
    { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/videojs-resolution-switcher/0.4.2/videojs-resolution-switcher.css' },
  ],
  // 统一通过cdn引入，可以下载下来放置在public文件夹下作静态文件引入
  script: [
    { src: 'https://cdn.bootcdn.net/ajax/libs/video.js/7.5.4/video.js', defer: true },
    { src: 'https://media-cache.huaweicloud.com/video/hwplayer/1.3.0/dist/hwplayer.js', defer: true },
    { src: 'https://cdn.bootcdn.net/ajax/libs/videojs-resolution-switcher/0.4.2/videojs-resolution-switcher.js', defer: true },
  ],
})
```
---
4. 在页面中就可成功播放