<template>
    <div>
        <h1>Ajouter un robot !</h1>

        <p class="error" v-if="this.error === true">Vous pensiez partir sans replir ce champ? </p>
        <p class="success" v-if="this.success === true">The product has been added</p>
        <form @submit.prevent="newProduct">
            <label>Nom du robot</label>
            <input type="text" v-model="product.name" placeholder="Entrez donc un nom de robot !">
            <label>Description</label>
            <input type="text" v-model="product.description" placeholder="Il doit bien ressembler à quelque chose, votre robot ?">
            <label>Prix</label>
            <input type="text" v-model="product.price" placeholder="Osez nous écrire sa valeur à vos yeux">
            <small style="color: red;" v-show="error_number">Seulement des chiffres</small>
            <label>Famille</label>
            <div class="custom-select">
            <select v-model="product.category">
                <option disabled value="">Votre robot est de quelle type?</option>
                <option v-for="category in categories" :value="category.name" :key="category.name">{{ category.name }}</option>
            </select>
                </div>
            <button type="submit">Intégration du robot</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ProductForm',
    props: {
        addTo: Function,
        categories: Array
    },
    data () {
        return {
            product: {
                name: '',
                description: '',
                price: '',
                category: '',
                image: ''
            },
            error: false,
            success: false,
            error_number: false
        }
    },
    methods: {
        newProduct () {
            if (this.product.name === '' || this.product.description === '' || this.product.price === '' || this.product.category === '') {
                this.error = true
                return
            }
            if (isNaN(this.product.price)) {
                this.error_number = true
                return
            }
            this.product.image = this.categories.find(category => category.name === this.product.category)?.path
            // Réinitialise les erreurs et affiche un message de succès
            this.error = false
            this.error_number = false
            this.success = true
            this.$emit('addTo', this.product)
            this.product = {}
            // Fait disparaitre le message de succès après 5 secondes
            setTimeout(() => {
                this.success = false
            }, 5000)
        }
    }
}
</script>

<style>
form {
    position: relative;
    display: flex;
    flex-direction: column;
}

form input {
    padding: 10px;
    border: 1px solid rgba(128, 128, 128, 0.459);
    border-radius: 5px;
}

form button {
    background-color: #A19B92;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    transition: background-color 200ms ease-in-out;
}

form button:hover {
    background-color: #b6b0a7;
}

form>* {
    margin-top: 16px;
}
</style>
