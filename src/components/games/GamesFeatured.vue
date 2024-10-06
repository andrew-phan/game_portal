<template>
  <div class="feature-game-wp">
    <div class="section-title">Game nổi bật</div>
    <div class="section-content">
      <div class="third-party-wp">
        <div class="swiper-game-list">
          <Carousel :items-to-show="itemsToShow" :wrap-around="true" :transition="500" :autoplay="3000"  :pauseAutoplayOnHover="true">
            <Slide v-for="(gameGroup, index) in groupedGames" :key="index">
              <div class="swiper-slide">
                <div v-for="game in gameGroup" :key="game.id" class="game">
                  <div class="ani-container" style="display: none; text-align: left;">
                    <canvas width="260" height="260" :style="getCanvasStyle(game)"></canvas>
                  </div>
                  <div class="el-image">
                    <img :src="game.web_pic" class="el-image__inner" :alt="game.title">
                  </div>
                  <div class="btn-enterGame">
                    <button type="button" class="el-button el-button--default">
                      <span>Vào trò chơi</span>
                    </button>
                  </div>
                  <div class="gameName">{{ game.title }}</div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import type { Game } from '@/types/game'

const { width } = useWindowSize()
const { featuredGames } = useGames()

const itemsToShow = computed(() => {
  if ( 768 < width.value && width.value < 1024 ) {
    return 5;
  } else if (width.value <= 768 ) {
    return 3;
  } else {
    return 7;
  }
})

const groupedGames = computed(() => {
  const groups = []
  for (let i = 0; i < featuredGames.value.length; i += 2) {
    groups.push(featuredGames.value.slice(i, i + 2))
  }
  return groups
})

const getCanvasStyle = (game: Game) => {
  return {
    backgroundColor: 'transparent',
    transform: 'matrix(0.653846, 0, 0, 0.653846, -45, -45)'
  }
}
</script>

<style scoped>
:deep(.carousel__slide) {
  padding: 10px;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background: hsla(0, 0%, 94.1%, 0.6);
  border-radius: 50%;
  border: none !important;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  color: rgba(144, 148, 163, 0.6);
  width: 50px;
  height: 50px;
  top: 50%;
  transform: translateY(-50%);
}

:deep(.carousel__prev) {
  left: -90px;
}

:deep(.carousel__next) {
  right: -90px;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background: hsla(0, 0%, 94.1%, 0.8);
}

:deep(.carousel__icon) {
  font-size: 16px;
}

</style>