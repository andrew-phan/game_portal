<template>
  <v-menu open-on-hover>
    <template v-slot:activator="{ props }">
      <v-chip v-bind="props" link pill variant="tonal" append-icon="mdi-menu-down">
        <v-avatar start>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-avatar>
        John Leider
      </v-chip>
    </template>
    <v-list>
      <v-list-item>
        <template #title>
          <div class="flex cursor-pointer">
            <img src="/image/desktop/header/icon01.png" width="22" />
            <span style="line-height: normal; margin-left: 4px;">Số dư ví</span>
          </div>
        </template>
        <template #subtitle>
          <span style="margin-left: 24px; font-size: 20px; color: #4b88d6;">0.00</span>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <template #title>
          <div class="flex cursor-pointer">
            <img src="/image/desktop/header/icon02.png" width="20" />
            <span style="line-height: normal; margin-left: 4px;">Nạp tiền</span>
          </div>
        </template>
      </v-list-item>
      <v-list-item rounded="xl">
        <template #title>
          <div class="flex cursor-pointer">
            <img src="/image/desktop/header/icon03.png" width="20" />
            <span style="line-height: normal; margin-left: 4px;">Rút tiền</span>
          </div>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <template #title>
          <div class="flex cursor-pointer">
            <img src="/image/desktop/header/icon04.png" width="22" />
            <span style="line-height: normal; margin-left: 4px;">Thông tin cá nhân</span>
          </div>
        </template>
      </v-list-item>
      <v-list-item>
        <template #title>
          <div class="flex cursor-pointer">
            <img src="/image/desktop/header/icon05.png" width="22" />
            <span style="line-height: normal; margin-left: 4px;">Đăng xuất</span>
          </div>
        </template>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
</script>