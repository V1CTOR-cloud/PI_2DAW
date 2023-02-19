<?php

namespace App\Controller;

use App\Entity\Remarks;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/remarks', name: 'app_remarks_')]
class RemarksCRUDController extends AbstractController
{
    #[Route('', name: 'list', methods: ['GET'])]
    public function list(EntityManagerInterface $entityManager): JsonResponse
    {
        $results = $entityManager->getRepository(Remarks::class)->findAll();
        $data = [];
        foreach ($results as $remark) {
            $data[] = [
                'TITLE'=> $remark->getTitle(),
                'DESC' => $remark->getDescription(),
                'AUTHOR'=> $remark->getAuthor()->getName(),
                'DATE'=> $remark->getDischargeDate()->format('l d M Y')
            ];
        }
        return $this->json($data);
    }

    #[Route('/{id}', name: 'single', methods: ['GET'])]
    public function single(int $id, EntityManagerInterface $entityManager): JsonResponse
    {
        $remark = $entityManager->getRepository(Remarks::class)->find($id);
        $data[] = [
            'TITLE'=> $remark->getTitle(),
            'DESC' => $remark->getDescription(),
            'AUTHOR'=> $remark->getAuthor()->getName(),
            'DATE'=> $remark->getDischargeDate()->format('l d M Y')
        ];
        return $this->json($data);
    }

    #[Route('/insert', name: 'insert', methods: ['POST'])]
    public function insert(EntityManagerInterface $entityManager, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $entityManager->getRepository(Remarks::class)->insert($data);
        return $this->json(['message' => "Creada nueva nota"]);
    }
}
