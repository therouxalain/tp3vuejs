<template>
    <div class="accueil">
        <h1>Bienvenue chez RobotsMart</h1>
        <p>Le coin ultime des robots</p>
        <img :src="require(`@/assets/images/unrobot.jpg`)" />
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

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
    border-bottom: 1px solid rgba(0, 0, 0, 0.308);
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
}
</style>
