<script lang="ts">
</script>

<main>
  <section>
    <h1>Damien <br /> Dumontet <br /> Creative Developer.</h1>
    <div class="button">Click.</div>
    <div class="img-container">
      <img src="assets/portrait.png" alt="portrait" />
    </div>
  </section>
</main>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    height: 100vh;
    width: 100vw;

    h1 {
      z-index: 10;
      margin: 0 0 0 4vw;
      font-family: 'Abril Fatface', cursive;
      font-size: 8vw;
      line-height: 18vh;
      color: black;
    }

    .button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
      color: white;
      margin: 2vw 0 0 4vw;
      font-size: 4vh;
      height: 8vh;
      width: 16vh;
    }

    .img-container {
      display: flex;
      align-items: flex-end;
      position: absolute;
      right: 16vw;
      height: 70vh;
      width: 25vw;
      overflow: hidden;
      background-color: #f5f5f5;

      filter: grayscale(1);

      img {
        width: 150%;
      }
    }
  }
</style>
