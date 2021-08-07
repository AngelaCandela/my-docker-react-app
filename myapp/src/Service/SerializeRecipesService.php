<?php

namespace App\Service;

class SerializeRecipesService {

    public function serializeRecipes($recipesEntities): Array
    {
        $recipes = [];
        foreach($recipesEntities as $recipeEntity){
            $recipe = [];
            $recipe['id'] = $recipeEntity->getId();
            $recipe['name'] = $recipeEntity->getRecipeName();

            $recipes[] = $recipe;
        }

        return $recipes;
    }
}
