<?php

namespace App\Entity;

use App\Repository\SessionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SessionRepository::class)]
class Session
{
    #[ORM\Column(length: 255)]
    private ?string $File = null;

    #[ORM\Column(length: 45)]
    private ?string $Type = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $startdate = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $enddate = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $comment = null;

    #[ORM\Id]
    #[ORM\ManyToOne(inversedBy: 'sessions')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Associated $Associated = null;

    #[ORM\Id]
    #[ORM\ManyToOne(inversedBy: 'sessions')]
    #[ORM\JoinColumn(nullable: false, referencedColumnName:'email')]
    private ?Employee $Author = null;

    public function getFile(): ?string
    {
        return $this->File;
    }

    public function setFile(string $File): self
    {
        $this->File = $File;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->Type;
    }

    public function setType(string $Type): self
    {
        $this->Type = $Type;

        return $this;
    }

    public function getStartdate(): ?\DateTimeInterface
    {
        return $this->startdate;
    }

    public function setStartdate(\DateTimeInterface $startdate): self
    {
        $this->startdate = $startdate;

        return $this;
    }

    public function getEnddate(): ?\DateTimeInterface
    {
        return $this->enddate;
    }

    public function setEnddate(\DateTimeInterface $enddate): self
    {
        $this->enddate = $enddate;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getAssociated(): ?Associated
    {
        return $this->Associated;
    }

    public function setAssociated(?Associated $Associated): self
    {
        $this->Associated = $Associated;

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
