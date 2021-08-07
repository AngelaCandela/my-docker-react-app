<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\RecipesRepository;
use App\Service\SerializeRecipesService;


class RecipesController extends AbstractController
{
    /**
     * @Route("/recipes", name="recipes")
     */
    public function index(RecipesRepository $repo, SerializeRecipesService $serializer): Response
    {
        $recipesEntities = $repo->findAll();

        $recipes = $serializer->serializeRecipes($recipesEntities);

        return $this->json($recipes);
    }
}
