<?php

namespace App\Entity;

use App\Repository\AssociatedRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AssociatedRepository::class)]
class Associated
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $Date = null;

    #[ORM\Column(length: 45)]
    private ?string $Name = null;

    #[ORM\Column(length: 255)]
    private ?string $Photo = null;

    #[ORM\Column(nullable: true)]
    private ?int $PC = null;

    #[ORM\Column(length: 45)]
    private ?string $Loc = null;

    #[ORM\Column(length: 45)]
    private ?string $Prov = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $Bithdate = null;

    #[ORM\Column]
    private ?int $DisabDeg = null;

    #[ORM\Column(length: 45)]
    private ?string $DisabType = null;

    #[ORM\Column(length: 12, nullable: true)]
    private ?string $Phone = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $Mail = null;

    #[ORM\OneToMany(mappedBy: 'Associated', targetEntity: Session::class)]
    private Collection $sessions;

    #[ORM\OneToMany(mappedBy: 'Referred', targetEntity: Files::class)]
    private Collection $files;

    #[ORM\ManyToMany(targetEntity: Activities::class, mappedBy: 'Associated')]
    private Collection $activities;

    public function __construct()
    {
        $this->sessions = new ArrayCollection();
        $this->files = new ArrayCollection();
        $this->activities = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->Date;
    }

    public function setDate(\DateTimeInterface $Date): self
    {
        $this->Date = $Date;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): self
    {
        $this->Name = $Name;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->Photo;
    }

    public function setPhoto(string $Photo): self
    {
        $this->Photo = $Photo;

        return $this;
    }

    public function getPC(): ?int
    {
        return $this->PC;
    }

    public function setPC(?int $PC): self
    {
        $this->PC = $PC;

        return $this;
    }

    public function getLoc(): ?string
    {
        return $this->Loc;
    }

    public function setLoc(string $Loc): self
    {
        $this->Loc = $Loc;

        return $this;
    }

    public function getProv(): ?string
    {
        return $this->Prov;
    }

    public function setProv(string $Prov): self
    {
        $this->Prov = $Prov;

        return $this;
    }

    public function getBithdate(): ?\DateTimeInterface
    {
        return $this->Bithdate;
    }

    public function setBithdate(\DateTimeInterface $Bithdate): self
    {
        $this->Bithdate = $Bithdate;

        return $this;
    }

    public function getDisabDeg(): ?int
    {
        return $this->DisabDeg;
    }

    public function setDisabDeg(int $DisabDeg): self
    {
        $this->DisabDeg = $DisabDeg;

        return $this;
    }

    public function getDisabType(): ?string
    {
        return $this->DisabType;
    }

    public function setDisabType(string $DisabType): self
    {
        $this->DisabType = $DisabType;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->Phone;
    }

    public function setPhone(?string $Phone): self
    {
        $this->Phone = $Phone;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->Mail;
    }

    public function setMail(?string $Mail): self
    {
        $this->Mail = $Mail;

        return $this;
    }

    /**
     * @return Collection<int, Session>
     */
    public function getSessions(): Collection
    {
        return $this->sessions;
    }

    public function addSession(Session $session): self
    {
        if (!$this->sessions->contains($session)) {
            $this->sessions->add($session);
            $session->setAssociated($this);
        }

        return $this;
    }

    public function removeSession(Session $session): self
    {
        if ($this->sessions->removeElement($session)) {
            // set the owning side to null (unless already changed)
            if ($session->getAssociated() === $this) {
                $session->setAssociated(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Files>
     */
    public function getFiles(): Collection
    {
        return $this->files;
    }

    public function addFile(Files $file): self
    {
        if (!$this->files->contains($file)) {
            $this->files->add($file);
            $file->setReferred($this);
        }

        return $this;
    }

    public function removeFile(Files $file): self
    {
        if ($this->files->removeElement($file)) {
            // set the owning side to null (unless already changed)
            if ($file->getReferred() === $this) {
                $file->setReferred(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Activities>
     */
    public function getActivities(): Collection
    {
        return $this->activities;
    }

    public function addActivity(Activities $activity): self
    {
        if (!$this->activities->contains($activity)) {
            $this->activities->add($activity);
            $activity->addAssociated($this);
        }

        return $this;
    }

    public function removeActivity(Activities $activity): self
    {
        if ($this->activities->removeElement($activity)) {
            $activity->removeAssociated($this);
        }

        return $this;
    }
}
