<template>
    <nav>
        <router-link to="/">Accueil</router-link> |
        <router-link to="/ajout">Ajouter un robot</router-link> |
        <router-link to="/inventaire">Inventaire</router-link>
    </nav>
    <div class="container">
        <router-view @addProduct="addProduct" @deleteProduct="deleteProduct" :products="allProducts" :categories="categories"/>
    </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
    name: 'App',
    data () {
        return {
            allProducts: [],

           categories: [
                {
                    name: 'Capteurs',
                    path: require('@/assets/images/capteurs.gif')
                },
                {
                    name: 'Penseurs',
                    path: require('@/assets/images/penseurs.gif')
                },
                {
                    name: 'Compacts',
                    path: require('@/assets/images/minirobot.png')
                },
                {
                    name: 'Hurluberlus',
                    path: require('@/assets/images/hurluberlus.jpg')
                }
            ]
        }
  },
  methods: {
    // Va faire une requête à l'API pour ajouter un produit
    addProduct (product) {
      ProductDataService.create(product)
        .then(response => {
            this.allProducts.push(response.data)
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
      })
    },
    // Va faire une requête à l'API pour supprimer un produit
    deleteProduct (product) {
      ProductDataService.delete(product.id)
        .then(response => {
            this.allProducts = this.allProducts.filter(p => p.id !== product.id)
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
            this.allProducts = response.data
            console.log(response.data)
      })
      .catch(e => {
            console.log(e)
      })
  }
}
</script>

<style>
body {
  background-color: #EDD382;
}

#app {
  background-color: #ffffff;
  max-width: 900px;
  margin-inline: auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  background-color: #000000;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 1rem 1rem;
}

nav a:first-of-type {
  margin-left: auto;
}

nav a:last-of-type {
  margin-right: auto;
}

nav a:hover {
  background-color: #383838;
  padding: 1rem;
}

.container {
  padding: 24px;

}

.success {

  background-color: #6aa16a;
  outline: 1px solid #9de29d;
  text-align: center;
  width: calc(100% - 22px);
  color: white;
  margin: 0;
  padding: 10px;
  border-radius: 5px;
  animation: fade-in-out 5000ms ease-in-out;
}

.error {
  background-color: #c05656;
  outline: 1px solid #d88585;
  text-align: center;
  width: calc(100% - 22px);
  color: white;
  margin: 0;
  padding: 10px;
  border-radius: 5px;
  animation: fade-in 500ms ease-in;
}

@keyframes fade-in {
  0% {
    transform: translateY(15px);
    opacity: 0;
  }

  50% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in-out {
  0% {
    transform: translateY(15px);
    opacity: 0;
  }

  5% {
    transform: translateY(0);
    opacity: 1;
  }

  95% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(-15px);
    opacity: 0;
  }
}
</style>
