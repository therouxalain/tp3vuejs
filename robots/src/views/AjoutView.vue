<template>
  <div class="ajout">
    <!-- Connexion avec addTo dans newProduct -->
    <ProductForm @addTo="newProduct" :categories="categories"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductForm from '@/components/ProductForm.vue'

export default {
    name: 'AjoutView',
    components: {
        ProductForm
    },
    props: {
        addProduct: Function,
        products: Array,
        valid: Boolean,
        categories: Array
    },
    methods: {
        newProduct (product) {
            this.$emit('addProduct', product)
        }
    }
}
</script>
