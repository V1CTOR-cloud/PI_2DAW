<?php

namespace App\Entity;

use App\Repository\EmployeeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EmployeeRepository::class)]
class Employee
{
    #[ORM\Id]
    #[ORM\Column(length: 45, name:'email')]
    private ?string $Email = null;

    #[ORM\Column(length: 45)]
    private ?string $Name = null;

    #[ORM\Column(length: 45)]
    private ?string $Password = null;

    #[ORM\Column(length: 45)]
    private ?string $Profile = null;

    #[ORM\Column(length: 255)]
    private ?string $Photo = null;

    #[ORM\OneToMany(mappedBy: 'Author', targetEntity: Session::class)]
    private Collection $sessions;

    #[ORM\OneToMany(mappedBy: 'Employee', targetEntity: Files::class)]
    private Collection $files;

    #[ORM\OneToMany(mappedBy: 'Author', targetEntity: Remarks::class)]
    private Collection $remarks;

    public function __construct()
    {
        $this->sessions = new ArrayCollection();
        $this->files = new ArrayCollection();
        $this->remarks = new ArrayCollection();
    }

    public function getEmail(): ?string
    {
        return $this->Email;
    }

    public function setEmail(string $Email): self
    {
        $this->Email = $Email;

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

    public function getPassword(): ?string
    {
        return $this->Password;
    }

    public function setPassword(string $Password): self
    {
        $this->Password = $Password;

        return $this;
    }

    public function getProfile(): ?string
    {
        return $this->Profile;
    }

    public function setProfile(string $Profile): self
    {
        $this->Profile = $Profile;

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
            $session->setAuthor($this);
        }

        return $this;
    }

    public function removeSession(Session $session): self
    {
        if ($this->sessions->removeElement($session)) {
            // set the owning side to null (unless already changed)
            if ($session->getAuthor() === $this) {
                $session->setAuthor(null);
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
            $file->setEmployee($this);
        }

        return $this;
    }

    public function removeFile(Files $file): self
    {
        if ($this->files->removeElement($file)) {
            // set the owning side to null (unless already changed)
            if ($file->getEmployee() === $this) {
                $file->setEmployee(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Remarks>
     */
    public function getRemarks(): Collection
    {
        return $this->remarks;
    }

    public function addRemark(Remarks $remark): self
    {
        if (!$this->remarks->contains($remark)) {
            $this->remarks->add($remark);
            $remark->setAuthor($this);
        }

        return $this;
    }

    public function removeRemark(Remarks $remark): self
    {
        if ($this->remarks->removeElement($remark)) {
            // set the owning side to null (unless already changed)
            if ($remark->getAuthor() === $this) {
                $remark->setAuthor(null);
            }
        }

        return $this;
    }
}