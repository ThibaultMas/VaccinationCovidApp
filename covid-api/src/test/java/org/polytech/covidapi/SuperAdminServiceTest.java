package org.polytech.covidapi;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.polytech.covidapi.domain.SuperAdmin;
import org.polytech.covidapi.repository.SuperAdminRepository;
import org.polytech.covidapi.service.SuperAdminService;

@ExtendWith(MockitoExtension.class)
public class SuperAdminServiceTest {
    
    @Mock
    private SuperAdminRepository superAdminRepository;

    @InjectMocks
    private SuperAdminService superAdminService;

    @Test
    public void SuperAdminService_CreateSuperAdmin(){

        //Arrange
        SuperAdmin superAdmin = new SuperAdmin();
        superAdmin.setFname("John");
        superAdmin.setLname("Leaf");
        superAdmin.setMail("john.leaf@example.com");
        superAdmin.setPassword("password1");
        superAdmin.setPhone("123456789");
        superAdmin.setRole("superadmin");

        when(superAdminRepository.save(superAdmin)).thenReturn(superAdmin);
        //Act
        superAdminService.createSuperAdmin(superAdmin);

        //Assert
        Mockito.verify(superAdminRepository, Mockito.times(1)).save(superAdmin);
    }

    @Test
    public void SuperAdminService_FindAllSuperAdmins(){

        //Arrange
        List<SuperAdmin> superAdminList = new ArrayList<>();

        SuperAdmin superAdmin = new SuperAdmin();
        superAdmin.setFname("John");
        superAdmin.setLname("Leaf");
        superAdmin.setMail("john.leaf@example.com");
        superAdmin.setPassword("password1");
        superAdmin.setPhone("123456789");
        superAdmin.setRole("superadmin");
        superAdminList.add(superAdmin);

        SuperAdmin superAdmin2 = new SuperAdmin();
        superAdmin.setFname("John");
        superAdmin.setLname("Leaf");
        superAdmin.setMail("john.leaf@example.com");
        superAdmin.setPassword("password1");
        superAdmin.setPhone("123456789");
        superAdmin.setRole("superadmin");
        superAdminList.add(superAdmin2);

        when(superAdminRepository.findAll()).thenReturn(superAdminList);

        // Act
        superAdminService.createSuperAdmin(superAdmin);
        superAdminService.createSuperAdmin(superAdmin2);
        List<SuperAdmin> result = superAdminService.findAll();

        // Assert
        assertEquals(superAdminList, result);
        verify(superAdminRepository, Mockito.times(1)).findAll();
    }

    @Test
    public void SuperAdminService_DeleteSuperAdmin() {

        // Arrange
        Integer id = 1;
        SuperAdmin superAdmin = new SuperAdmin();
        superAdmin.setId(id);
        superAdmin.setFname("John");
        superAdmin.setLname("Leaf");
        superAdmin.setMail("john.leaf@example.com");
        superAdmin.setPassword("password1");
        superAdmin.setPhone("123456789");
        superAdmin.setRole("superadmin");

        when(superAdminRepository.findOneById(id)).thenReturn(superAdmin);

        // Act
        superAdminService.deleteSuperAdmin(id);

        // Assert
        verify(superAdminRepository, Mockito.times(1)).findOneById(id);
        verify(superAdminRepository, Mockito.times(1)).delete(superAdmin);
    }

    @Test
    public void SuperAdminService_UpdateSuperAdmin() {

        // Arrange
        Integer id = 1;
        SuperAdmin superAdmin = new SuperAdmin();
        superAdmin.setId(id);
        superAdmin.setFname("John");
        superAdmin.setLname("Leaf");
        superAdmin.setMail("john.leaf@example.com");
        superAdmin.setPassword("password1");
        superAdmin.setPhone("123456789");
        superAdmin.setRole("superadmin");

        SuperAdmin existingSuperAdmin = new SuperAdmin();
        existingSuperAdmin.setId(id);
        existingSuperAdmin.setFname("Existing");
        existingSuperAdmin.setLname("Admin");
        existingSuperAdmin.setMail("existing.admin@example.com");
        existingSuperAdmin.setPassword("existingpassword");
        existingSuperAdmin.setPhone("987654321");
        existingSuperAdmin.setRole("admin");

        when(superAdminRepository.findOneById(id)).thenReturn(existingSuperAdmin);

        // Act
        superAdminService.updateSuperAdmin(superAdmin, id);

        // Assert
        verify(superAdminRepository, Mockito.times(1)).findOneById(id);
        verify(superAdminRepository, Mockito.times(1)).save(existingSuperAdmin);

    }
}
