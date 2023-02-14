<?php

namespace App\Controller;

use App\Entity\Activities;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/activities', name: 'app_activities_')]
class ActivitiesCRUDController extends AbstractController
{
    #[Route('', name: 'list')]
    public function index(EntityManagerInterface $entityManager): JsonResponse
    {
        $results = $entityManager->getRepository(Activities::class)->findAll();
        $data = [];
        foreach ($results as $activity) {
            $dato = [];
            foreach ($activity->getAssociated() as $associated) {
                $dato[] = [
                    'NAME' => mb_convert_encoding($associated->getName(), 'ISO-8859-1'),
                    'MAIL' => $associated->getMail(),
                    'TELF' => $associated->getPhone(),
                    'LOC' => mb_convert_encoding($associated->getLoc(), 'ISO-8859-1'),
                    'PROV' => mb_convert_encoding($associated->getProv(), 'ISO-8859-1'),
                    'DATE' => $associated->getDate()->format('l d M Y')
                ];
            }
            $data[] = [
                'NAME' => $activity->getName(),
                'PHOTO' => $activity->getPhoto(),
                'DESC' => $activity->getComment(),
                'PARTICIPANTS' => $dato
            ];
        }
        return $this->json($data);
    }
}
