<template>
    <div class="beer">
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Ingredients</th>
                <th>Alcohol Content*</th>
                <th>Ph</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="beer in beers" :key="beer.id">
                <td><img :src="beer.image_url" alt=""></td>
                <td>{{beer.name}}</td>
                <td>{{beer.description}}</td>
                <td>{{beer.ingredients}}</td>
                <td>{{beer.abv}}</td>
                <td>{{beer.ph}}</td>
              </tr>
              <p>* by volume</p>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Beer',
  data() {
      return {
          beers: []
      }
  },
  created() {
      alert('created hook ran')
      axios.get('https://api.punkapi.com/v2/beers')
        .then(response => {
            this.beers = response.data
            console.log(this.beers)
        }).catch(err => {
            console.log(err)
        })
  }
}
  /*
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
    }
  }*/
</script>

<style>
img {
  height: 125px;
}
table {
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}
td {
  padding: 10px 25px;
}
</style>
