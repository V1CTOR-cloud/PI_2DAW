<?php

namespace App\Controller;

use App\Entity\Remarks;
use Doctrine\ORM\EntityManagerInterface;
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
}
