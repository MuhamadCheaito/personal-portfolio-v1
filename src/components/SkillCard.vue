<template>
  <v-container class="card">
    <div class="card__content">
      <div class="card__front">
        <slot name="card__front--content"></slot>
      </div>
      <div class="card__back">
        <slot name="card__back--content"></slot>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "SkillCard",
};
</script>

<style scoped>
:root {
  --level-one: translateZ(3rem);
  --level-two: translateZ(6rem);
  --level-three: translateZ(9rem);

  --fw-normal: 400;
  --fw-bold: 700;

  --clr: #b7c9e5;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.card {
  width: 300px;
}

.card__content {
  text-align: center;
  position: relative;
  padding: 14em 3em;
  transition: transform 3s;
  transform-style: preserve-3d;
}

.card:hover .card__content {
  transform: rotateY(0.5turn);
  cursor: pointer;
}

.card__front,
.card__back {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5em 3em;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: grid;
  align-content: center;
}

.card__front {
  background-color: var(--clr);
  background-color: rgb(233, 233, 233);;
  background-size: cover;
  background-blend-mode: overlay;
  color: #333;
}

.card__front::before {
  content: "";
  position: absolute;
  --spacer: 1em;
  top: var(--spacer);
  bottom: var(--spacer);
  left: var(--spacer);
  right: var(--spacer);
  border: 3px solid rgba(226, 24, 24, 0.3);
  border-radius: .3rem;
  transform: var(--level-one);
}

.card__back {
  transform: rotateY(0.5turn);
  color: #000;
  background: rgb(243, 243, 243);
}
</style>