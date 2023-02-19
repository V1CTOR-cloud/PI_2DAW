<?php

namespace App\Repository;

use App\Entity\Employee;
use App\Entity\Remarks;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Remarks>
 *
 * @method Remarks|null find($id, $lockMode = null, $lockVersion = null)
 * @method Remarks|null findOneBy(array $criteria, array $orderBy = null)
 * @method Remarks[]    findAll()
 * @method Remarks[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RemarksRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Remarks::class);
    }

    public function save(Remarks $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Remarks $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function insert(array $data): void
    {
        $remark = new Remarks;
        $employee = $this->getEntityManager()->getRepository(Employee::class)->find($data['AUTH']);
        $allRemark = $this->findAll();
        $max = (count($allRemark)+1);
        $remark
            ->setId($max)
            ->setTitle($data['TITLE'])
            ->setDescription($data['DESC'])
            ->setDischargeDate(new DateTime())
            ->setAuthor($employee);
        $this->save($remark, true);
    }

    public function delete(int $id): void
    {
        $remark = $this->find($id);
        $this->remove($remark, true);
    }

//    /**
//     * @return Remarks[] Returns an array of Remarks objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Remarks
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
