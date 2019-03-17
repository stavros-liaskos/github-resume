<template>
  <div class="section z-3 about">
    <headline-animated
      :class="['title m-b-3 text-center']"
      :content="$store.state.resume.name"
      class="m-b-5"
    />

    <div class="resume">
      <div class="img-cnt">
        <img
          :src="$store.state.resume.avatar_url"
          class="m-r-5"
          alt="logo" >

        <div
          v-if="$store.state.resume.website"
          class="website m-b-5">
          <h4>Website</h4>
          <div>
            <p>
              <a :href="$store.state.resume.website">{{
                $store.state.resume.website
              }}</a>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h4>GitHub Profile</h4>
        <p>
          On GitHub since 2016, {{ $store.state.resume.name }} is a developer
          <span
            v-if="$store.state.resume.location"
          >based in {{ $store.state.resume.location }}</span
          >
          with
          <a
            :href="$store.state.resume.url + '?repositories'"
          >{{ $store.state.resume.public_repos }} public repositories
          </a>
          and
          <a :href="$store.state.resume.url + '/followers'">
            {{ $store.state.resume.followers }} followers.</a
            >
        </p>
      </div>

      <div>
        <h4>About This Résumé</h4>
        <div>
          <p>
            This résumé is generated automatically using the Github API from the
            developer's GitHub account. Do not hesitate to visit
            <a
              :href="$store.state.resume.url"
              target="_blank"
            >{{ $store.state.resume.name }}'s Github page</a
            >
            for a complete work history.
          </p>
        </div>
      </div>

      <div v-if="repos.length">
        <h4>Repository list</h4>

        <draggable v-model="repos">
          <transition-group>
            <a
              v-for="(repo, index) in repos"
              :key="index"
              :href="repo.clone_url"
              class="repo"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github-alt" /> {{ repo.name }}
            </a>
          </transition-group>
        </draggable>
      </div>

      <!-- TODO display: block -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import HeadlineAnimated from '~/components/HeadlineAnimated'
import draggable from 'vuedraggable'

Vue.use(draggable)

export default {
  components: {
    draggable,
    HeadlineAnimated
  },
  data() {
    return {
      repos: []
    }
  },
  mounted() {
    this.githubRepos(this.$store.state.resume.repos_url)
  },
  methods: {
    githubRepos(url) {
      this.$http.get(url).then(
        response => {
          const repos_API = JSON.parse(response.bodyText)
          this.repos = repos_API
          return repos_API
        },
        response => {
          this.$router.push('/error')
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles';
$cubic: cubic-bezier(0.64, 0.09, 0.08, 1);

.resume {
  .img-cnt > *:first-child {
    margin-bottom: $space_5;
  }

  img {
    width: 100px;
    height: 100px;
  }

  h4 {
    margin-bottom: $space_1;
  }

  .fab {
    font-size: 1rem;
  }

  .repo {
    display: block;
  }
}

@include breakpoint($breakpoint_screen_sm) {
  .resume {
    img {
    }

    .website {
      margin: 0;
    }
  }

  .img-cnt {
    display: flex;
  }
}
</style>
