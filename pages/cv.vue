<template>
  <div class="section z-3 about">
    <headline-animated
      :class="['title m-b-3 text-center']"
      :content="$store.state.resume.name"/>

    <div class="resume">
      <div>
        <h4>GitHub Profile</h4>
        <div>
          <p>On GitHub since 2016, {{ $store.state.resume.name }} is a developer
            <span v-if="$store.state.resume.location">based in {{ $store.state.resume.location }}</span> with
            <a :href="$store.state.resume.url + '?repositories'">{{ $store.state.resume.public_repos }}
              public repositories
            </a> and
            <a :href="$store.state.resume.url + '/followers'">
              {{ $store.state.resume.followers }}
              followers.</a>
          </p>
        </div>
      </div>

      <div
        v-if="$store.state.resume.website">
        <h4>Website</h4>
        <div><p><a :href="$store.state.resume.website">{{ $store.state.resume.website }}</a></p>
        </div>
      </div>

      <div>
        <h4>About This Résumé</h4>
        <div>
          <p>This résumé is generated automatically using public information from the developer's
          GitHub account. The
          repositories are ordered by popularity based on a very simple popularity heuristic that defines the
          popularity
          of a repository by its sum of watchers and forks. Do not hesitate to visit
            <a
              :href="$store.state.resume.url"
              target="_blank">{{ $store.state.resume.name }}'s Github page</a>
            for
            a complete work history. </p>
        </div>
      </div>

      <div>
        <h4>Repository list</h4>
        <draggable v-model="repos">
          <transition-group>
            <a
              v-for="(repo, index) in repos"
              :key="index"
              :href="repo.clone_url"
              class="tooltip"
              data-tooltip="Drag and drop me!"
              style="display: block;"
              rel="noopener noreferrer">
              <i class="fab fa-github-alt"/>
              {{ repo.name }}
            </a>
          </transition-group>
        </draggable>
      </div>

      <!--TODO display: block-->
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
          console.error('An error had occurred!!')
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
$cubic: cubic-bezier(0.64, 0.09, 0.08, 1);

.resume {
  h4 {
    margin-bottom: $space_1;
  }

  .fab {
    font-size: 1rem;
  }
}

.tooltip {
  position: relative;

  &:after {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    content: attr(data-tooltip);
    padding: 6px 10px;
    top: 1.4em;
    left: 50%;
    transform: translateX(-50%) translateY(-2px);
    background: grey;
    color: white;
    white-space: nowrap;
    z-index: 2;
    border-radius: 2px;
    transition: opacity 0.2s $cubic, transform 0.2s $cubic;
  }

  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: solid 5px transparent;
    border-right: solid 5px transparent;
    border-bottom: solid 5px grey;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    transform: translateX(-50%) translateY(-2px);
    top: -40px;
    left: 200px;
    transition: opacity 0.2s $cubic, transform 0.2s $cubic;
    z-index: 3;
  }

  &:hover {
    &:before {
      display: block;
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }
    &:after {
      display: block;
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }
  }
}
</style>
