<template>
  <div class="section z-3 about">
    <headline-animated
      :class="['title m-b-3 text-center']"
      :content="'About me'"/>

    <h4>Hi, I am Stavros.</h4>

    <br>
    <p>In the spring of 2009, during my second year at University of Crete, I took a web design course
    where we were assigned the task of building both the Frontend and the Backend of an e-shop. Thus began my love
    affair with web development. After Erasmus studies, graduating and serving in the army (obligatory), I relocated
    in Berlin and been living here for the last {{ calcTimeInBerlin }}.
    </p>
    <p>At first I was working for
      <a
        href="https://antoni.de/"
        target="_blank">antoni GmbH</a>, the leading advertisement agency of Mercedes Benz, as a developer.
        While I still enjoyed it, I decided to move on and join the team of
      <a
        href="https://www.sparwelt.de/"
        target="_blank">Sparwelt GmbH</a> (ein Unternehmen der Mediengruppe RTL
        Deutschland) as Frondend developer.</p>

    <p>After that I decided to face new challenges and switched my career to the direction of freelancing.</p>

    <p>I love developing performable websites using state of art technologies, focusing on web performance, minimalism
    and user experience.</p>

    <p>When I am not coding, I spend my time playing the guitar, climbing mountains, travelling and ...cooking!</p>

    <p>Let's have a chat
      <a
        href="mailto:hello@stavrosliaskos.com"
        target="_blank">
        hello@stavrosliaskos.com
      </a> .
    </p>
  </div>
</template>

<script>
import HeadlineAnimated from '~/components/HeadlineAnimated'

export default {
  components: {
    HeadlineAnimated
  },

  computed: {
    calcTimeInBerlin() {
      const today = new Date(),
        past = new Date(2016, 2, 7), // day I arrived in Berlin
        diff = Math.floor(today.getTime() - past.getTime()),
        day = 1000 * 60 * 60 * 24,
        days = Math.floor(diff / day),
        months = Math.floor(days / 31),
        years = Math.floor(months / 12),
        monthsDiff = months % 12

      let message = years + ' years and '

      if (monthsDiff === 1) {
        message += monthsDiff + ' month'
      } else if (monthsDiff > 1) {
        message += monthsDiff + ' months'
      }

      return message
    }
  }
}
</script>
