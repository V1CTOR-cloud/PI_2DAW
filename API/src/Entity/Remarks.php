<?php

namespace App\Entity;

use App\Repository\RemarksRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RemarksRepository::class)]
class Remarks
{
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy:'NONE')]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 45)]
    private ?string $Title = null;

    #[ORM\Column(length: 255)]
    private ?string $Description = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $DischargeDate = null;

    #[ORM\ManyToOne(inversedBy: 'remarks')]
    #[ORM\JoinColumn(nullable: false, referencedColumnName:'email')]
    private ?Employee $Author = null;

    public function setId(int $id): self
    {
        $this->id = $id;
        
        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->Title;
    }

    public function setTitle(string $Title): self
    {
        $this->Title = $Title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(string $Description): self
    {
        $this->Description = $Description;

        return $this;
    }

    public function getDischargeDate(): ?\DateTimeInterface
    {
        return $this->DischargeDate;
    }

    public function setDischargeDate(\DateTimeInterface $DischargeDate): self
    {
        $this->DischargeDate = $DischargeDate;

        return $this;
    }

    public function getAuthor(): ?Employee
    {
        return $this->Author;
    }

    public function setAuthor(?Employee $Author): self
    {
        $this->Author = $Author;

        return $this;
    }
}
