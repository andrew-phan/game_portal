<template>
  <div class="immediatelyTheLottery-newTheme">
    <div class="section-title">{{ title }}</div>
    <div class="section-content">
      <div v-if="pending">Đang tải...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else-if="limitedUpcomingGames.length" class="popularBettingNewTheme">
        <div v-for="game in limitedUpcomingGames" :key="game.id" class="popularBetting">
          <div class="countdown-wp">
            <div class="iconfont icon-icon_clock"></div>
            <div class="_timeDown countdown">
              <div class="vue-count-time">
                <div class="time">
                  <span>0</span>
                  <span>0</span>
                  <i>:</i>
                  <span>0</span>
                  <span>0</span>
                  <i>:</i>
                  <span>0</span>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
          <div class="popularBetting-inner">
            <div class="image-wrapper">
              <img :src="game.web_pic" :alt="game.title">
            </div>
            <div class="lottery-info-wp">
              <div class="lottery-name">{{ game.title }}</div>
              <div class="play-info-wp">
                
                <div>Kèo đôi</div>
                <div>Tổng</div>
                <div>Số Đơn</div>
              </div>
            </div>
          </div>
          <div class="popularBetting-inner">
            <div class="open-numbers">
              <!-- Placeholder for game results -->
              <div class="dice-wp">
                <div class="open_results">15</div>
                <div class="open_results name">Tài</div>
                <div class="open_results name">Lẻ</div>
                <div class="dice-6"></div>
                <div class="dice-5"></div>
                <div class="dice-4"></div>
              </div>
            </div>
            <div class="betting">
              <i class="fa-solid fa-bolt-lightning"></i>
              <span>Đặt cược</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else>Không có trò chơi sắp mở thưởng</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Sắp mở thưởng')
const { upcomingGames, pending, error } = useGames()
const limitedUpcomingGames = computed(() => upcomingGames.value.slice(0, 6))

</script>