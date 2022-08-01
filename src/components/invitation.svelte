<script lang="ts">
  import { onMount } from 'svelte'
  import Swiper, {
    EffectCreative,
    EffectFade,
    EffectCoverflow,
    EffectCube,
    Pagination
  } from 'swiper'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/effect-creative'
  import 'swiper/css/effect-fade'
  import 'swiper/css/effect-coverflow'
  import 'swiper/css/effect-cube'

  let container: HTMLElement

  onMount(() => {
    const swiper = new Swiper(container, {
      modules: [
        EffectCreative,
        EffectFade,
        EffectCoverflow,
        EffectCube,
        Pagination
      ],
      direction: 'vertical',
      speed: 700,
      effect: 'coverflow',
      cubeEffect: {
        // shadowOffset: 5,
        shadow: false
      },
      coverflowEffect: {
        rotate: 10
      },
      pagination: {
        el: '.swiper-pagination'
      }
    })
  })

  const list = Array.from({ length: 4 }).map((_, i) => i + 1)
</script>

<!-- Slider main container -->
<main bind:this={container} class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    {#each list as i}
      <div class="swiper-slide">
        <img src={`/${i}.JPG`} alt="" />
      </div>
    {/each}
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination" />
</main>

<style scoped lang="scss">
  .swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-slide {
      display: flex;
      align-items: center;

      img {
        width: 100%;
      }
    }
  }
</style>
