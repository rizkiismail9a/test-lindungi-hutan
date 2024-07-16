<template>
  <div class="overlay">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(196, 196, 196, 0.805);
  z-index: 100;
}

.loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}

@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>
