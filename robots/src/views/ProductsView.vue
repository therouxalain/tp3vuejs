<template>
    <div class="products">
        <h1>Inventaire de robots</h1>
        <div class='product-list' v-if="products.length != 0">
            <!-- Va boucler dans le tableau de produits pour tous les afficher -->
            <div v-for="product in products" :key="product.name" class="product">
                <img :src="`${product.image}`" alt="image category">
                <p><strong>Nom:</strong> {{ product.name }}</p>
                <p><strong>Description:</strong> {{ product.description }}</p>
                <p><strong>Prix:</strong> {{ product.price }}</p>
                <p><strong>Catégorie</strong>: {{ product.category }}</p>
                <div>
                    <router-link :to="{ name: 'edit', params: { id: product.id } }">Changer</router-link>
                    <button class='btn-delete' @click="deleteProduct(product)">Enlever</button>
                </div>
            </div>
        </div>
        <p v-else>Pas de robots ici</p>
    </div>
</template>

<script>

export default {
    name: 'ProductsView',
    props: {
        products: Array
    },
    methods: {
        deleteProduct (product) {
            this.$emit('deleteProduct', product)
        }
    }
}
</script>

<style>
.product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin-block: 22px;
    border-spacing: 0;
    grid-gap: 10px;
    width: 100%;
}

.product-list p {
    text-align: start;
}

.product-list p,
.product-list div {
    padding: 0.5rem 0;
    margin: 0;
}

.product div {
    display: flex;
    align-items: center;
    gap: 10px;
}

.product {
    display: flex;
    flex-direction: column;
    width: 250px;
    background-color: #DCDCDC;
}

.btn-delete {
    background-color: #c05656;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    transition: background-color 200ms ease-in-out;
}

p {
    word-wrap: break-word;
    max-width: 20ch;
}

img {
    width: 250px;
    height: 200px;
    object-fit: cover;
    border-radius:10px 0;
    border:2px solid black;
}
</style>
