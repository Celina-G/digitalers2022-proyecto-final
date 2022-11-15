package com.educacionit.digitalers.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educacionit.digitalers.entities.Publication;

@Repository
public interface PublicationRepository extends JpaRepository<Publication, Long> {
	List<Publication> findByUserId(Long id);
}