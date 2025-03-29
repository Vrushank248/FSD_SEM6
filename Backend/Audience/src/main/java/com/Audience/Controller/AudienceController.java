package com.Audience.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Audience.Entity.Audience;
import com.Audience.Service.AudienceService;

@RestController
@RequestMapping("/api/audience")
public class AudienceController {

    @Autowired
    private AudienceService audienceService;

    // Get all audience members
    @GetMapping
    public List<Audience> getAllAudience() {
        return audienceService.getAllAudience();
    }

    // Get audience member by ID
    @GetMapping("/{id}")
    public Audience getAudienceById(@PathVariable Long id) {
        return audienceService.getAudienceById(id);
    }

    // Add new audience member
    @PostMapping
    public Audience addAudience(@RequestBody Audience audience) {
        return audienceService.addAudience(audience);
    }

    // Update audience member
    @PutMapping("/{id}")
    public Audience updateAudience(@PathVariable Long id, @RequestBody Audience audience) {
        return audienceService.updateAudience(id, audience);
    }

    // Delete audience member
    @DeleteMapping("/{id}")
    public void deleteAudience(@PathVariable Long id) {
        audienceService.deleteAudience(id);
    }
}
