<template>
  <a-locale-provider :locale="currentLocale">
    <div id="app" :class="{'aside-collapsed':isCollapse}" v-title="title">
      <router-view/>
    </div>
  </a-locale-provider>
</template>

