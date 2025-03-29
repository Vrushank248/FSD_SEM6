package com.Audience.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.Audience.DAO.AudienceRepository;
import com.Audience.Entity.Audience;

@Service
public class AudienceService {

    private final AudienceRepository audienceRepository;

    public AudienceService(AudienceRepository audienceRepository) {
        this.audienceRepository = audienceRepository;
    }

    public List<Audience> getAllAudience() {
        return audienceRepository.findAll();
    }

    public Audience getAudienceById(Long id) {
        return audienceRepository.findById(id).orElse(null);
    }

    public Audience addAudience(Audience audience) {
        return audienceRepository.save(audience);
    }

    public Audience updateAudience(Long id, Audience audienceDetails) {
        Optional<Audience> existingAudience = audienceRepository.findById(id);
        if (existingAudience.isPresent()) {
            Audience audience = existingAudience.get();
            audience.setFull_name(audienceDetails.getFull_name());
            audience.setEmail_id(audienceDetails.getEmail_id());
            audience.setPhone_no(audienceDetails.getPhone_no());
            audience.setAffilation(audienceDetails.getAffilation());
            audience.setConference_id(audienceDetails.getConference_id());
            return audienceRepository.save(audience);
        }
        return null;
    }

    // Delete an audience member
    public void deleteAudience(Long id) {
        audienceRepository.deleteById(id);
    }
}
