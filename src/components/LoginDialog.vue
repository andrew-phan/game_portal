<template>
  <v-dialog :model-value="visible" max-width="500" fullscreen>
    <v-card>
      <v-card-item style="margin: 0; padding: 4px;">
        <template #append>
          <v-btn icon="$close" variant="text" @click="handleClose"></v-btn>
        </template>
      </v-card-item>
      <v-card-text>
        <div style="width: 100; text-align: center; margin-bottom: 24px;">
          <img src="https://cms.t79.bet/storage/uploads/config/202409/25/config_1727248104_7vGCKJpUyb.png"
            style="width: 100%; max-width: 160px; height: auto;" alt="logo image" />
        </div>
        <p style="font-size: 24px; color: #343434; font-weight: 700; margin-bottom: 12px;">Đăng nhập</p>
        <v-form validate-on="submit lazy" @submit.prevent="handleLogin">
          <v-text-field label="Tên người dùng" variant="outlined" density="compact" style="margin-bottom: 4px;"
            v-model="state.username" :error="!!errorMessages.username" />
          <v-text-field label="Mật khẩu" variant="outlined" density="compact" v-model="state.password"
            :error="!!errorMessages.password" />
          <v-btn style="width: 100%;" color="primary" type="submit" block :loading="loading">
            Đăng Nhập
          </v-btn>
        </v-form>
        <div style="display: flex; justify-content: space-between; margin-top: 8px; font-size: 12px;">
          <a href="#" style="color: #0982fe; font-weight: bold;">Quên mật khẩu?</a>
          <a href="#" style="color: #0982fe; font-weight: bold;">Đăng ký</a>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
  defineProps<{ visible: boolean, loading: boolean }>()
  const emit = defineEmits<{
    (e: 'close'): void,
    (e: 'submit', { username, password }: { username: string, password: string }): void
  }>()

  type State = {
    username: string;
    password: string;
  }
  const defaultState = () => ({
    username: '',
    password: '',
  })
  const state = reactive<State>(defaultState())
  const errorMessages = computed(() => ({
    username: !state.username ? 'Username is required' : '',
    password: !state.password ? 'Password is required' : ''
  }))

  const resetState = () => {
    state.username = ''
    state.password = ''
  }
  const handleClose = () => {
    resetState()
    emit('close')
  }
  const handleLogin = () => {
    if (!state.username || !state.password) {
      return;
    }
    emit('submit', { username: state.username, password: state.password })
  }
</script>
