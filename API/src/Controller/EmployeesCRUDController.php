<?php

namespace App\Controller;

use App\Entity\Employee;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

#[Route('/employees', name: 'app_employees_')]
class EmployeesCRUDController extends AbstractController
{
    #[Route('', name: 'list', methods: ['GET'])]
    public function list(EntityManagerInterface $entityManager): JsonResponse
    {
        $results = $entityManager->getRepository(Employee::class)->findAll();
        $data = [];
        foreach ($results as $employee) {
            $data[] = [
                'EMAIL'=>$employee->getEmail(),
                'NAME' => $employee->getName(),
                'PROFILE'=> $employee->getProfile(),
                'IMAGE'=> $employee->getPhoto()
            ];
        }
        return $this->json($data);
    }

    #[Route('/{email}', name: 'single', methods: ['GET'])]
    public function single(string $email,EntityManagerInterface $entityManager): JsonResponse
    {
        $employee = $entityManager->getRepository(Employee::class)->find($email);
        $data[] = [
            'EMAIL'=>$employee->getEmail(),
            'NAME' => $employee->getName(),
            'PROFILE'=> $employee->getProfile(),
            'IMAGE'=> $employee->getPhoto()
        ];
        return $this->json($data);
    }
}
