<template>
  <main class="main">
    <div class="mv">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <template v-for="banner in banners">
            <div class="swiper-slide">
              <a href="#">
                <img class="pc" :src="banner.url" alt="">
                <img class="sp" :src="banner.url" alt="">
              </a>
            </div>
          </template>
        </div>
        <div class="swiper-button-next pc"></div>
        <div class="swiper-button-prev pc"></div>
      </div>
      <!-- <div class="marquee-wrapper marquee current">
        <div class="context inner">
          <img src="/image/Desktop/home/icon01.png" width="18px" height="18px" alt="" class="marquee-icon">
          <marquee>This text will scroll from right to left</marquee>
        </div>
      </div> -->
    </div>
    <div class="menu-sp sp">
      <ul class="list">
        <!-- is-active -->
        <template v-for="game in games">
          <li class="item">
            <a href="">
              <span class="img"><img :src="game.icon_after" alt=""></span>
              <span class="text">{{ game.title }}</span>
            </a>
          </li>
        </template>
      </ul>
    </div>
    <div class="wrap-home">
      <div class="home">
        <div class="immediatelyTheLottery-newTheme">
          <div class="section-title"> Sắp mở thưởng </div>
          <div class="section-content">
            <div class="popularBettingNewTheme">
              <template v-for="game in upcommingGames">
                <div class="popularBetting">
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
                      <img :src="game.img_url" :alt="game.name">
                    </div>
                    <div class="lottery-info-wp">
                      <div class="lottery-name">{{ game.name }}</div>
                      <div class="play-info-wp">
                        <div v-for="(tag, index) in splitTag(game.tags)" :key="index">
                          {{ tag }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="popularBetting-inner">
                    <div class="open-numbers">
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
              </template>
            </div>
          </div>
        </div>
        <div class="feature-game-wp">
          <div class="section-title"> Game nổi bật </div>
          <div class="section-content">
            <div data-v-166fe82e="" class="third-party-wp">
              <div class="swiper-game-list">
                <div
                  class="swiper-container swiper swiper-container-initialized swiper-container-horizontal swiper-container-multirow swiper-container-multirow-column swiper-container-ios">
                  <div class="swiper-wrapper">
                    <template v-for="game in featureGames">
                      <div class="swiper-slide">
                        <div class="game">
                          <div class="ani-container" style="display: none; text-align: left;">
                            <canvas width="260" height="260" style="background-color: transparent;"></canvas>
                          </div>
                          <div class="el-image">
                            <img :src="game.img_url" class="el-image__inner">
                          </div>
                          <div class="btn-enterGame">
                            <button type="button" class="el-button el-button--default">
                              <span>Vào trò chơi</span>
                            </button>
                          </div>
                          <div data-v-6a78c811="" class="gameName">{{ game.name }}</div>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
                <div slot="button-prev" class="swiper-button-prev swiper-button-disabled" tabindex="0" role="button"
                  aria-label="Previous slide" aria-disabled="true"></div>
                <div slot="button-next" class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"
                  aria-disabled="false"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
  import { useHome } from '../home.model'

  const splitTag = (text: string): Array<string> => text.split(',')

  const {
    banners,
    games,
    upcommingGames,
    featureGames
  } = useHome()
</script>
<style scoped></style>