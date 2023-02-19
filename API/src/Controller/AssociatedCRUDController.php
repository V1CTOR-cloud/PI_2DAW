<?php

namespace App\Controller;

use App\Entity\Associated;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/associated', name: 'app_associated_')]
class AssociatedCRUDController extends AbstractController
{
    #[Route('/', name: 'list', methods: ['GET'])]
    public function list(EntityManagerInterface $entityManager): JsonResponse
    {
        $results = $entityManager->getRepository(Associated::class)->findAll();
        $data = [];
        foreach ($results as $associated) {
            $data[] = [
                'NAME' => mb_convert_encoding($associated->getName(), 'ISO-8859-1'),
                'MAIL' => $associated->getMail(),
                'TELF' => $associated->getPhone(),
                'LOC' => mb_convert_encoding($associated->getLoc(), 'ISO-8859-1'),
                'PROV' => mb_convert_encoding($associated->getProv(), 'ISO-8859-1'),
                'DATE' => $associated->getDate()->format('l d M Y')
            ];
        }
        return $this->json($data);
    }

    #[Route('/{id}', name: 'single', methods: ['GET'])]
    public function single(int $id, EntityManagerInterface $entityManager): JsonResponse
    {
        $associated = $entityManager->getRepository(Associated::class)->find($id);
        if($associated==null){
            return $this->json("No se ha encontrado a la asociada");
        }
        $data[] = [
            'NAME' => mb_convert_encoding($associated->getName(), 'ISO-8859-1'),
            'MAIL' => $associated->getMail(),
            'TELF' => $associated->getPhone(),
            'LOC' => mb_convert_encoding($associated->getLoc(), 'ISO-8859-1'),
            'PROV' => mb_convert_encoding($associated->getProv(), 'ISO-8859-1'),
            'DATE' => $associated->getDate()->format('l d M Y')
        ];
        return $this->json($data);
    }

    #[Route('/insert', name: 'insert', methods: ['POST'])]
    public function insert(EntityManagerInterface $entityManager, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $entityManager->getRepository(Associated::class)->insert($data);
        return $this->json(['message' => "Socia insertada correctamente"]);
    }
}
