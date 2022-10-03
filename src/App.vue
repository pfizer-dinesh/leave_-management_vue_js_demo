<template>
  <div id="app">
   <h1>Leave Manager</h1>
  <div class="container">  
  <ul class="nav nav-tabs">
  <li class="nav-item">
    <router-link class="nav-link" to="/">Employee List</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/leave-apply">Leave Apply</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/leave-report">Leave Report</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/leave-config">Leave Configuration</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/leave-manage-guide">Leave Manage Guide</router-link>
  </li>
  </ul>
  <br/>
  <router-view />
  </div>
  </div>
</template>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>