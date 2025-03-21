import { MyCarrousel } from "./MyCarrousel.js";

window.customElements.define('mi-carrusel', MyCarrousel)




/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    let posible = [];

    for(let i=0; i<recipes.length; i++){

        let ingredientesok=0;    

        for (let j=0; j < ingredients[i].length; j++) { 
            ingredientesok += supplies.includes(ingredients[i][j]) ? 0 : 1;

            console.log(`j=${j},  ${ingredientesok}, ${ingredients[i][j]}`);
            console.log(ingredientesok);
        }

        if(ingredientesok===0){
            posible.push(recipes[i])
            supplies.push(recipes[i])
        };
    }
    
    return posible;
};

findAllRecipes(["bread","sandwich"],[["yeast","flour"],["bread","meat"]],["yeast","flour","meat"])