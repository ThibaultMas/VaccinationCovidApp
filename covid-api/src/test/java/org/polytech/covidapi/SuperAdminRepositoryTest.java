package org.polytech.covidapi;

import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.polytech.covidapi.domain.SuperAdmin;
import org.polytech.covidapi.repository.SuperAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
public class SuperAdminRepositoryTest {

    @Autowired
    private SuperAdminRepository superAdminRepository;

    @Test
    public void SuperAdminRepository_SaveAll_ReturnSavedSuperAdmin(){

        //Arrange
        SuperAdmin superAdmin = new SuperAdmin();
        superAdmin.setFname("John");
        superAdmin.setLname("Leaf");
        superAdmin.setMail("john.leaf@example.com");
        superAdmin.setPassword("password1");
        superAdmin.setPhone("123456789");
        superAdmin.setRole("superadmin");

        //Act
        SuperAdmin savedSuperAdmin = superAdminRepository.save(superAdmin);

        //Assert
        Assertions.assertThat(savedSuperAdmin).isNotNull();
        Assertions.assertThat(savedSuperAdmin.getId()).isGreaterThan(0);
    }

    @Test
    public void SuperAdminRepository_GetAll_ReturnMoreThanOneSuperAdmin(){

        //Arrange
        SuperAdmin superAdmin = new SuperAdmin();
        superAdmin.setFname("John");
        superAdmin.setLname("Leaf");
        superAdmin.setMail("john.leaf@example.com");
        superAdmin.setPassword("password1");
        superAdmin.setPhone("123456789");
        superAdmin.setRole("superadmin");

        SuperAdmin superAdmin2 = new SuperAdmin();
        superAdmin.setFname("John");
        superAdmin.setLname("Leaf");
        superAdmin.setMail("john.leaf@example.com");
        superAdmin.setPassword("password1");
        superAdmin.setPhone("123456789");
        superAdmin.setRole("superadmin");

        //Act
        superAdminRepository.save(superAdmin);
        superAdminRepository.save(superAdmin2);

        List<SuperAdmin> superAdminList = superAdminRepository.findAll();

        //Assert
        Assertions.assertThat(superAdminList).isNotNull();
        Assertions.assertThat(superAdminList.size()).isEqualTo(2);
    }

    @Test
    public void SuperAdminRepository_FindOneById_ReturnOneSuperAdmin(){

        //Arrange
        SuperAdmin superAdmin = new SuperAdmin();
        superAdmin.setFname("John");
        superAdmin.setLname("Leaf");
        superAdmin.setMail("john.leaf@example.com");
        superAdmin.setPassword("password1");
        superAdmin.setPhone("123456789");
        superAdmin.setRole("superadmin");

        //Act
        superAdminRepository.save(superAdmin);

        SuperAdmin dbSuperAdmin = superAdminRepository.findOneById(superAdmin.getId());

        //Assert
        Assertions.assertThat(dbSuperAdmin).isNotNull();
    }

}
