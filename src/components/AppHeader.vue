<template>
  <header class="header">
    <div class="header01">
      <div class="inner">
        <HeaderLanguageSelector />
        <AuthLoginDesktop />
      </div>
    </div>
    <div class="header02 pc">
      <div class="inner">
        <HeaderLogoDesktop />
        <MenuDesktop />
      </div>
    </div>
    <div class="header03 sp">
      <div class="inner">
        <HeaderLogoMobile />
        <AuthLoginLinkMobile />
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