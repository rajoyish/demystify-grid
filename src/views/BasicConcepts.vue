<template>
  <div class="container">
    <section>
      <img
        src="https://res.cloudinary.com/thirus/image/upload/v1635003545/images/mobile-ux_yc0c3w.png"
        alt=""
      />
      <div id="list1">
        <h3>List Building</h3>
        <p>
          It's very easy to start creating email lists for your marketing actions, give it a try
        </p>
        <h3>Campaign Tracker</h3>
        <p>
          Campaigns is a feature we've created since the beginning and it's at the core of Lomar
        </p>
        <h3>Analytics Tool</h3>
        <p>Lomar collects all the necessary data to help you analyse different situations</p>
      </div>
      <div id="list2">
        <h3>Admin Control</h3>
        <p>Rights of users and admins can easily be managed through the control panel</p>
        <h3>Integration Setup</h3>
        <p>We're providing a step-by-step integration session to implement automation</p>
        <h3>Help Line Support</h3>
        <p>
          Quality support is our top priority so please contact us for any problem you encounter
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="css" scoped>
/* Generic Styles */

@import url('https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap');

.container {
  font-family: 'Mona Sans', sans-serif;
  padding: 2rem;
  color: #444;
}

h3 {
  color: #2754b3;
}

p {
  margin: -0.5rem 0 0;
}

section {
  max-width: 1100px;
  margin: auto;
  line-height: 1.8;
}

section > img {
  width: 100%;
  max-width: 420px;
  margin: auto;
}

/* Generic Styles End */

section {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'img'
    'list1'
    'list2';
  column-gap: 2rem;
}

img {
  grid-area: img;
}

#list1 {
  grid-area: list1;
}

#list2 {
  grid-area: list2;
}

@media screen and (min-width: 600px) {
  section {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'img list1'
      'img list2';
  }
}

@media screen and (min-width: 950px) {
  section {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'list1 img list2';
  }
}
</style>
