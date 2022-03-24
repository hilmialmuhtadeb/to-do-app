<template>
  <header class="header">
    <div class="header__left">
      <h1>List Tugas Harian</h1>
      <p>Klik tombol <span class="text-btn">+ Tugas Baru</span> Untuk Membuat Tugas Harian Baru</p>
      <p>Jangan lupa untuk memeriksa tugas anda yang sudah terselesaikan.</p>
    </div>
    <div class="header__right">
      <div class="filter">
        <h4>Tampilkan Tugas Yang</h4>
        <filter-button>Belum Selesai</filter-button>
        <filter-button>Sudah Selesai</filter-button>
      </div>
      <div class="sort">
        <h4>Urut Berdasarkan</h4>
        <filter-button>Tanggal Dibuat (Terbaru)</filter-button>
      </div>
    </div>
  </header>
</template>

<script>
  import FilterButton from './FilterButton.vue'

  export default {
    components: {
      FilterButton
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/_shared.scss";

  .header {
    display: grid;
    grid-template-columns: 3fr 2fr;
    padding: 2em 0;
    gap: 4em;

    &__left {
      h1 {
        margin-bottom: .8em;
      }

      p {
        margin-bottom: .4em;
        color: $secondary;
      }

      .text-btn {
        display: inline-block;
        background-color: $lightblue;
        color: white;
        padding: .2em .8em;
        margin: 0 .4em;
        border-radius: .4em;
      }
    }

    &__right {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: end;

      h4 {
        margin-bottom: .8em;
      }
    }
  }
</style>