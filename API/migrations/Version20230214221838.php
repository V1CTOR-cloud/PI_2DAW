<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230214221838 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE activities (id INT AUTO_INCREMENT NOT NULL, owner_id VARCHAR(45) NOT NULL, name VARCHAR(45) NOT NULL, status VARCHAR(45) NOT NULL, photo VARCHAR(255) NOT NULL, category VARCHAR(45) NOT NULL, comment VARCHAR(255) NOT NULL, startdate DATETIME NOT NULL, enddate DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE activities_associated (activities_id INT NOT NULL, associated_id INT NOT NULL, INDEX IDX_A134F10D2A4DB562 (activities_id), INDEX IDX_A134F10DA347F76E (associated_id), PRIMARY KEY(activities_id, associated_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE associated (id INT AUTO_INCREMENT NOT NULL, date DATETIME NOT NULL, name VARCHAR(45) NOT NULL, photo VARCHAR(255) NOT NULL, pc INT DEFAULT NULL, loc VARCHAR(45) NOT NULL, prov VARCHAR(45) NOT NULL, bithdate DATETIME NOT NULL, disab_deg INT NOT NULL, disab_type VARCHAR(45) NOT NULL, phone VARCHAR(12) DEFAULT NULL, mail VARCHAR(50) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE employee (email VARCHAR(45) NOT NULL, name VARCHAR(45) NOT NULL, password VARCHAR(45) NOT NULL, profile VARCHAR(45) NOT NULL, photo VARCHAR(255) NOT NULL, PRIMARY KEY(email)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE files (date DATETIME NOT NULL, employee_id VARCHAR(45) NOT NULL, referred_id INT NOT NULL, name VARCHAR(45) NOT NULL, file VARCHAR(255) NOT NULL, INDEX IDX_63540598C03F15C (employee_id), INDEX IDX_6354059CFE2A98 (referred_id), PRIMARY KEY(date, employee_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE remarks (id INT AUTO_INCREMENT NOT NULL, author_id VARCHAR(45) NOT NULL, title VARCHAR(45) NOT NULL, description VARCHAR(255) NOT NULL, discharge_date DATETIME NOT NULL, INDEX IDX_44EA8DDBF675F31B (author_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE session (associated_id INT NOT NULL, author_id VARCHAR(45) NOT NULL, file VARCHAR(255) NOT NULL, type VARCHAR(45) NOT NULL, startdate DATETIME NOT NULL, enddate DATETIME NOT NULL, comment VARCHAR(255) DEFAULT NULL, INDEX IDX_D044D5D4A347F76E (associated_id), INDEX IDX_D044D5D4F675F31B (author_id), PRIMARY KEY(associated_id, author_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE activities ADD CONSTRAINT FK_B5F1AFE57E3C61F9 FOREIGN KEY (owner_id) REFERENCES employee (email)');
        $this->addSql('ALTER TABLE activities_associated ADD CONSTRAINT FK_A134F10D2A4DB562 FOREIGN KEY (activities_id) REFERENCES activities (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE activities_associated ADD CONSTRAINT FK_A134F10DA347F76E FOREIGN KEY (associated_id) REFERENCES associated (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE files ADD CONSTRAINT FK_63540598C03F15C FOREIGN KEY (employee_id) REFERENCES employee (email)');
        $this->addSql('ALTER TABLE files ADD CONSTRAINT FK_6354059CFE2A98 FOREIGN KEY (referred_id) REFERENCES associated (id)');
        $this->addSql('ALTER TABLE remarks ADD CONSTRAINT FK_44EA8DDBF675F31B FOREIGN KEY (author_id) REFERENCES employee (email)');
        $this->addSql('ALTER TABLE session ADD CONSTRAINT FK_D044D5D4A347F76E FOREIGN KEY (associated_id) REFERENCES associated (id)');
        $this->addSql('ALTER TABLE session ADD CONSTRAINT FK_D044D5D4F675F31B FOREIGN KEY (author_id) REFERENCES employee (email)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE activities DROP FOREIGN KEY FK_B5F1AFE57E3C61F9');
        $this->addSql('ALTER TABLE activities_associated DROP FOREIGN KEY FK_A134F10D2A4DB562');
        $this->addSql('ALTER TABLE activities_associated DROP FOREIGN KEY FK_A134F10DA347F76E');
        $this->addSql('ALTER TABLE files DROP FOREIGN KEY FK_63540598C03F15C');
        $this->addSql('ALTER TABLE files DROP FOREIGN KEY FK_6354059CFE2A98');
        $this->addSql('ALTER TABLE remarks DROP FOREIGN KEY FK_44EA8DDBF675F31B');
        $this->addSql('ALTER TABLE session DROP FOREIGN KEY FK_D044D5D4A347F76E');
        $this->addSql('ALTER TABLE session DROP FOREIGN KEY FK_D044D5D4F675F31B');
        $this->addSql('DROP TABLE activities');
        $this->addSql('DROP TABLE activities_associated');
        $this->addSql('DROP TABLE associated');
        $this->addSql('DROP TABLE employee');
        $this->addSql('DROP TABLE files');
        $this->addSql('DROP TABLE remarks');
        $this->addSql('DROP TABLE session');
    }
}
