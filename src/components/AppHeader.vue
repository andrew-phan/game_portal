<template>
  <header class="header">
    <div class="header01">
      <div class="inner">
        <div class="left pc"></div>
        <div class="right">
          <div class="topbar-ri pc">
            <template v-if="!isAuthenticated">
              <input v-model="state.username" class="user" placeholder="Tên người dùng" maxlength="16">
              <div class="reg-box">
                <input v-model="state.password" class="password" placeholder="mật khẩu" type="password" maxlength="20">
                <a class="forget-a" style="display: none;">
                  Quên mật khẩu？
                </a>
              </div>
              <div class="login"
                :style="{ pointerEvents: disabledSignIn ? 'none' : 'auto', opacity: disabledSignIn ? 0.4 : 1 }"
                @click="handleSignIn">
                Đăng nhập
              </div>
              <a href="javascript:;" class="register" @click="signUp">Đăng ký ngay</a>
            </template>
            <div v-else class="login" @click="signOut">Đăng xuất</div>
          </div>
          <div class="js-toggle dropdown-lang">
            <div class="js-toggle-link tg-link">
              <p class="icon icon--vi"></p>
              <!-- <p class="icon icon--en"></p> -->
              <p class="text">
                <span>Việt Nam</span>
                <span class="arrow"></span>
              </p>
            </div>
            <div class="js-toggle-content tg-content">
              <p>Việt Nam</p>
              <p>English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header02 pc">
      <div class="inner">
        <div class="logo">
          <a href="/" class="router-link-exact-active router-link-active"><img
              src="https://cms.t79.bet/storage/uploads/config/202409/25/config_1727248104_7vGCKJpUyb.png"
              alt="logoName"></a>
        </div>
        <ul class="nav">
          <template v-for="game in games">
            <li :title="game.title">
              <a :href="`/${CATEGORY_PATH_MAPPING[game.title]}`" class="category"><span>{{ game.title }}</span></a>
              <div class="menu-con">
                <div class="inner single-brand">
                  <template v-for="subGame in game.child.slice(0, 3)">
                    <a href="javascript:;" class="box F-GAME">
                      <div class="lo-left">
                        <img :src="subGame.mobile_pic" class="lo">
                      </div>
                      <div class="lo-right">
                        <p>{{ subGame.title }}</p>
                      </div>
                    </a>
                  </template>
                </div>
              </div>
            </li>
          </template>
        </ul>

        <div class="kf-box">
          <a class="kf-item promotions"><img src="/image/Desktop/header/khuyen-mai.png">
            <p>Khuyến mãi</p>
          </a>
          <a class="kf-item"><img src="/image/Desktop/header/ho-tro.png">
            <p>Hỗ Trợ</p>
          </a>
        </div>
      </div>
    </div>
    <div class="header03 sp">
      <div class="inner">
        <div class="logo">
          <a href="/" class="router-link-exact-active router-link-active"><img
              src="https://cms.t79.bet/storage/uploads/config/202409/25/config_1727248104_7vGCKJpUyb.png"
              alt="logoName"></a>
        </div>
        <ul class="right">
          <template v-if="!isAuthenticated">
            <li style="cursor: pointer;">Đăng Nhập</li>
            <li style="cursor: pointer;">Đăng Ký</li>
          </template>
          <li v-else style="cursor: pointer;" @click="signOut">Đăng Xuất</li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
  import { useHomeStore } from '~/store/home';

  const CATEGORY_PATH_MAPPING: any = {
    'Hot': '',
    'Bóng Đá': 'sport',
    'Casino': 'casino',
    'Nổ Hũ': 'slot',
    'Game Bài': 'card',
    'Bắn Cá': 'fishing',
    'Xổ số': 'lottery'
  }

  const homeStore = useHomeStore()
  const { games } = storeToRefs(homeStore)
  const { isAuthenticated, signIn, signUp, signOut } = useAuth()

  type State = {
    username: string;
    password: string;
  }
  const state = reactive<State>({
    username: '',
    password: ''
  })

  const disabledSignIn = computed(() => !state.username || !state.password)

  const handleSignIn = () => {
    if (disabledSignIn.value) return;

    signIn({ lang: 'vi', username: state.username, password: state.password })
  }
</script>