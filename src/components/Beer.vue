<template>
 <div class="row center-cols">
    <h3>
        <ul>
          <li>Sort beers by:</li>
          <li><a @click="sort('name')">Name</a></li> 
          <li><a @click="sort('ph')">Ph</a></li> 
          <li><a @click="sort('abv')">Alcohol Content</a></li>
        </ul>
    </h3>
    <div class="col s12 m4 l3" v-for="beer in sortedBeers" :key="beer.id">
      <h3 class="header">{{beer.name}}</h3>
      <div class="card horizontal">
        <div class="card-image">
          <img :src="beer.image_url" alt="">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>{{beer.description | snippet}}...</p>
          </div>
          <div class="card-action">
            <div class="left-align"><span class="t-purple">Alcohol:</span> {{beer.abv}}%</div> <div class="right-align"><span class="t-purple">Ph:</span> {{beer.ph}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Beer',
  data() {
    return {
        beers: [],
        currentSort:'name',
        currentSortDir:'asc',
    }
  },
  created() {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(response => {
          this.beers = response.data
          console.log(this.beers)
      }).catch(err => {
          console.log(err)
    })
   },
  methods: {
    sort(s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = s;
    }
  },
  computed: {
    sortedBeers() {
      return this.beers.sort((a,b) => {
        let modifier = 1;
        if (this.currentSortDir === 'desc') modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      })
    }
  }
}
</script>

<style>
img {
  height: 225px;
  padding: 15px;
}
.center-cols > .col {
  float: none;
  display: inline-block;
  text-align: initial;
}
h3 {
  font-size: 1.5rem;
}
a {
  cursor: pointer;
}
li {
  display: inline;
  margin: 0 15px;
  color: #666;
}
li a {
  color: #666;
}
li a:hover {
  color: #1BA7CD;
}
.left-align {
  float:left;
}
.t-purple {
  color: #7B236F;
}
</style>
