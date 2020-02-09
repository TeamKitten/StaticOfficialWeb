<template>
  <transition name="modal" appear>
    <div @click.self="$emit('close')" class="modal modal-overlay">
      <div class="modal-window">
        <header class="modal-header">
          <slot name="header"> </slot>
          <button @click="$emit('close')" class="modal-close-button">
            閉じる
          </button>
        </header>
        <div class="modal-content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="stylus" scoped>
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &-window {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    height 100%;
    box-sizing border-box;
  }

  &-header {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    padding: 12px;
    display flex;
    justify-content space-between;
    z-index 9999;
    position: relative;
    background #fff;
    margin-top: 48px;
    height 32px;
    overflow hidden;
    line-height 1.25;
  }

  &-close-button {
    width: auto;
    background none;
    border:none;
    font-size 1rem;
    color: #555;
  }
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.25s;

  .modal-window {
    transition: opacity 0.25s, transform 0.25s;
  }
}

.modal-leave-active {
  transition: opacity 0.25s ease 0.25s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}

/* Oppa PC Style */
@media (min-width: 800px) {
  .modal {
    &.modal-overlay {
      background: rgba(0, 0, 0, 0.5);
    }

    &-window {
      width: 640px;
      max-width 90%;
      height auto;
    }

    &-header {
      margin-top: 0;
      padding: 24px;
      height auto;
    }

    &-close-button {
      width: auto;
    }
  }
}
</style>
