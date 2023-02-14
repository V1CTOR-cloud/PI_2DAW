<?php

namespace App\Controller;

use App\Entity\Employee;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

class EmployeesController extends AbstractController
{
    #[Route('/employees', name: 'app_employees', methods: ['GET'])]
    public function index(EntityManagerInterface $entityManager): JsonResponse
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
}
