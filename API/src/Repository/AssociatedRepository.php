<?php

namespace App\Repository;

use App\Entity\Associated;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Associated>
 *
 * @method Associated|null find($id, $lockMode = null, $lockVersion = null)
 * @method Associated|null findOneBy(array $criteria, array $orderBy = null)
 * @method Associated[]    findAll()
 * @method Associated[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AssociatedRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Associated::class);
    }

    public function save(Associated $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Associated $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function insert(array $data): void
    {
        $associated = new Associated;
        $associated
            ->setDate($data['DATE'])
            ->setName($data['NAME'])
            ->setPC($data['PC'])
            ->setLoc($data['LOC'])
            ->setProv($data['PROV'])
            ->setBithdate($data['BD'])
            ->setDisabDeg($data['DD'])
            ->setDisabType($data['DT']);
        $this->save($associated, true);
    }

//    /**
//     * @return Associated[] Returns an array of Associated objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('a.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Associated
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
