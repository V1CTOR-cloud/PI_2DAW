<?php

namespace App\Controller;

use App\Entity\Employee;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
            'IMAGE'=> $employee->getPhoto(),
            'PASS'=> $employee->getPassword()
        ];
        return $this->json($data);
    }

    #[Route('/login', name: 'login', methods: ['POST'])]
    public function login(EntityManagerInterface $entityManager, Request $request): JsonResponse
    {
        $employee = json_decode($request->getContent(), true);
        $loginemployee = $entityManager->getRepository(Employee::class)->login($employee);
        $data[] = [
            'EMAIL'=>$loginemployee->getEmail(),
            'NAME' => $loginemployee->getName(),
            'PROFILE'=> $loginemployee->getProfile(),
            'IMAGE'=> $loginemployee->getPhoto()
        ];
        return $this->json($data);
    }
}
