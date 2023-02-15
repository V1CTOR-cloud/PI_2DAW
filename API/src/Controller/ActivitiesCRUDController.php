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
    #[Route('', name: 'list', methods:['GET'])]
    public function list(EntityManagerInterface $entityManager): JsonResponse
    {
        $results = $entityManager->getRepository(Activities::class)->findAll();
        $count= 0;
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
                $count++;
            }
            $data[] = [
                'NAME' => $activity->getName(),
                'PHOTO' => $activity->getPhoto(),
                'DESC' => $activity->getComment(),
                'NPARTICIPANTS'=>$count,
                'PARTICIPANTS' => $dato
            ];
        }
        return $this->json($data);
    }

    #[Route('/{id}', name: 'single', methods:['GET'])]
    public function single(int $id,EntityManagerInterface $entityManager): JsonResponse
    {
        $activity = $entityManager->getRepository(Activities::class)->find($id);
        $dato=[];
        $count= 0;
        foreach ($activity->getAssociated() as $associated) {
            $dato[] = [
                'NAME' => mb_convert_encoding($associated->getName(), 'ISO-8859-1'),
                'MAIL' => $associated->getMail(),
                'TELF' => $associated->getPhone(),
                'LOC' => mb_convert_encoding($associated->getLoc(), 'ISO-8859-1'),
                'PROV' => mb_convert_encoding($associated->getProv(), 'ISO-8859-1'),
                'DATE' => $associated->getDate()->format('l d M Y')
            ];
            $count++;
        }
            $data[] = [
                'NAME' => $activity->getName(),
                'PHOTO' => $activity->getPhoto(),
                'DESC' => $activity->getComment(),
                'NPARTICIPANTS'=>$count,
                'PARTICIPANTS' => $dato?:'NONE'
            ];
        return $this->json($data);
    }
}
