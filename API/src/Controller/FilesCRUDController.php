<?php

namespace App\Controller;

use App\Entity\Files;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/files', name: 'app_files_')]
class FilesCRUDController extends AbstractController
{
    #[Route('', name: 'list', methods: ['GET'])]
    public function list(EntityManagerInterface $entityManager): JsonResponse
    {
        $results = $entityManager->getRepository(Files::class)->findAll();
        $data = [];
        // foreach ($results as $file) {
        //     $data[] = [
        //         'FILE' => $file->getFile(),
        //         'NAME' => $file->getName(),
        //         'EMPLOYEE'=> $file->getEmployee()->getName(),
        //         'EMPLOYEE_IMAGE'=> $file->getEmployee()->getPhoto(),
        //         'DATE' => $file->getDate()->format('l d M Y'),
        //         'ASSOCIATED'=> $file->getReferred()->getName(),
        //         'ASSOCIATED_IMAGE'=> $file->getReferred()->getPhoto(),
        //     ];
        // }
        return $this->json($data);
    }

    // #[Route('/{id}', name: 'single', methods: ['GET'])]
    // public function single(int $id,EntityManagerInterface $entityManager): JsonResponse
    // {
    //     $results = $entityManager->getRepository(Files::class)->find($id);
    //     $data = [];
    //     foreach ($results as $file) {
    //         $data[] = [
    //             'FILE' => $file->getFile(),
    //             'NAME' => $file->getName(),
    //             'EMPLOYEE'=> $file->getEmployee()->getName(),
    //             'EMPLOYEE_IMAGE'=> $file->getEmployee()->getPhoto(),
    //             'DATE' => $file->getDate()->format('l d M Y'),
    //             'ASSOCIATED'=> $file->getReferred()->getName(),
    //             'ASSOCIATED_IMAGE'=> $file->getReferred()->getPhoto(),
    //         ];
    //     }
    //     return $this->json($data);
    // }
}
