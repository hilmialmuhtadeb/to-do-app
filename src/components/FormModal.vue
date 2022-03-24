<template>
  <div class="modal" :class="{visible: modalVisible}">
    <div class="modal__content">
      <div class="modal__content-header">
        <h2>Tambah Tugas Baru</h2>
        <span class="close" @click="setModalVisible">&times;</span>
      </div>
      <p>Gunakan form di bawah untuk menambah tugas baru</p>
      <form>
        <div class="form-group">
          <label for="#">
            <h4>Tanggal Deadline</h4>
          </label>
          <input type="date">
        </div>
        <div class="form-group">
          <label for="#">
            <h4>Kategori Warna Tugas</h4>
          </label>
          <input type="text">
          <p>Gunakan kode hexa untuk memberi warna.</p>
        </div>
        <div class="form-group">
          <label for="#">
            <h4>Keterangan Tugas</h4>
          </label>
          <textarea rows="10"></textarea>
        </div>
        <div class="btn-wrapper">
          <button>Simpan Tugas Ini</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['setModalVisible'])
  },
  computed: {
    ...mapGetters(['modalVisible'])
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/_shared.scss";

  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    right: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

    &__content {
      position: relative;
      margin-left: auto;
      padding: 1em 2em;
      width: 40%;
      height: 100%;
      background-color: white;
      border-radius: $border-radius;

      p {
        color: $secondary;
      }

      &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .close {
          color: $red;
          font-size: 1.6em;
          padding: .4em 1.2em;
          cursor: pointer;
        }
      }

      form {
        margin-top: 2em;

        .form-group {
          margin-bottom: 2em;

          h4, p {
            margin: .6em 0;
          }

          input,
          textarea {
            background-color: #eaeaea;
            border-radius: $border-radius;
            border: 0;
            width: 100%;
            padding: 1em;
          }
        }

        .btn-wrapper {
          text-align: right;
          button {
            padding: .6em 2em;
            background-color: $blue;
            color: white;
            border: 0;
            border-radius: $border-radius;
            cursor: pointer;
          }
        }
      }
    }
  }

  .modal.visible {
    display: block;
  }

  @media screen and (max-width: 1080px) {
    .modal {
      &__content {
        width: 60%;
      }
    }
  }
</style>